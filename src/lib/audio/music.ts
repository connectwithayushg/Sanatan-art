/**
 * Soft temple music for the mandir, made live with Web Audio so there is no recording to license:
 * a tanpura-like drone on Sa and Pa, and a slow bansuri-like line in raag Bhupali (Sa Re Ga Pa Dha).
 * A stand-in until a recorded track is chosen.
 */
import { audio } from './bell'

export function startMusic(): () => void {
  const c = audio()
  // Phone speakers cannot play low notes, so the music sits higher and louder, through a limiter.
  const limiter = c.createDynamicsCompressor()
  limiter.threshold.value = -10
  limiter.ratio.value = 6
  limiter.connect(c.destination)
  const out = c.createGain()
  out.connect(limiter)
  out.gain.setValueAtTime(0, c.currentTime)
  out.gain.linearRampToValueAtTime(1, c.currentTime + 1.2)

  // A short hall echo from decaying noise.
  const rev = c.createConvolver()
  const len = c.sampleRate * 3
  const buf = c.createBuffer(2, len, c.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch)
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5)
  }
  rev.buffer = buf
  const wet = c.createGain()
  wet.gain.value = 0.35
  rev.connect(wet).connect(out)

  const SA = 293.66
  const pluck = (f: number, t: number) => {
    const o = c.createOscillator()
    const o2 = c.createOscillator()
    const g = c.createGain()
    const lp = c.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 1400
    o.type = 'sawtooth'
    o.frequency.value = f
    o2.frequency.value = f * 2
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.07, t + 0.04)
    g.gain.exponentialRampToValueAtTime(0.002, t + 2.6)
    o.connect(lp)
    o2.connect(lp)
    lp.connect(g)
    g.connect(out)
    g.connect(rev)
    o.start(t)
    o2.start(t)
    o.stop(t + 2.7)
    o2.stop(t + 2.7)
  }
  const drone = () => {
    const t = c.currentTime + 0.05
    ;[(SA * 1.5) / 2, SA, SA, SA / 2].forEach((f, i) => pluck(f, t + i * 0.7))
  }

  const NOTES = [1, 9 / 8, 5 / 4, 3 / 2, 5 / 3, 2, 9 / 4]
  const PHRASES = [
    [0, 1, 2, 3, 2, 1, 0],
    [2, 3, 4, 5, 4, 3, 2],
    [4, 3, 2, 1, 2, 0],
    [3, 4, 5, 6, 5, 4, 3, 2],
    [2, 1, 0, -1, 0],
  ]
  const flute = (f: number, t: number, d: number) => {
    const o = c.createOscillator()
    const g = c.createGain()
    const vib = c.createOscillator()
    const vg = c.createGain()
    o.frequency.value = f
    vib.frequency.value = 5.2
    vg.gain.value = f * 0.006
    vib.connect(vg).connect(o.frequency)
    // A little breath noise around the note.
    const n = c.createBufferSource()
    const nb = c.createBuffer(1, Math.ceil(c.sampleRate * d), c.sampleRate)
    const nd = nb.getChannelData(0)
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1
    n.buffer = nb
    const bp = c.createBiquadFilter()
    bp.type = 'bandpass'
    bp.frequency.value = f * 2
    bp.Q.value = 8
    const ng = c.createGain()
    ng.gain.value = 0.03
    n.connect(bp).connect(ng).connect(g)
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.3, t + 0.2)
    g.gain.setValueAtTime(0.26, t + d - 0.35)
    g.gain.linearRampToValueAtTime(0, t + d)
    o.connect(g)
    g.connect(out)
    g.connect(rev)
    for (const s of [o, vib, n]) {
      s.start(t)
      s.stop(t + d)
    }
  }
  let next = c.currentTime + 0.4
  const schedule = () => {
    while (next < c.currentTime + 6) {
      const p = PHRASES[Math.floor(Math.random() * PHRASES.length)]
      p.forEach((k, i) => {
        const ratio = k < 0 ? NOTES[4] / 2 : NOTES[k]
        const d = i === p.length - 1 ? 2.8 : 0.9 + Math.random() * 0.6
        flute(SA * 2 * ratio, next, d)
        next += d * 0.95
      })
      next += 2.5 + Math.random() * 2
    }
  }

  drone()
  schedule()
  const timers = [setInterval(drone, 2800), setInterval(schedule, 1000)]
  return () => {
    timers.forEach(clearInterval)
    out.gain.cancelScheduledValues(c.currentTime)
    out.gain.setValueAtTime(out.gain.value, c.currentTime)
    out.gain.linearRampToValueAtTime(0, c.currentTime + 1.2)
  }
}
