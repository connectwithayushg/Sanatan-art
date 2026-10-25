/** Temple bell synthesised with Web Audio: inharmonic partials with long exponential decay. No audio file, no licence. */
let ctx: AudioContext | null = null

/** One shared audio context for the bell, gong, shankh and music; also lets iPhone play through the silent switch. */
export function audio(): AudioContext {
  try {
    const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession
    if (session) session.type = 'playback'
  } catch {
    /* not supported */
  }
  ctx ??= new AudioContext()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

const PARTIALS: [number, number, number][] = [
  // [ratio, gain, decay seconds]
  [1, 0.5, 4.5],
  [2.32, 0.32, 3.2],
  [3.17, 0.22, 2.4],
  [4.16, 0.14, 1.8],
  [5.43, 0.09, 1.2],
  [6.79, 0.05, 0.8],
]

/** The deep gong, for finishing a mala. */
export function ringBell(base = 520, volume = 0.35) {
  try {
    const ctx = audio()
    const now = ctx.currentTime
    const master = ctx.createGain()
    master.gain.value = volume
    master.connect(ctx.destination)
    for (const [ratio, gain, decay] of PARTIALS) {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.frequency.value = base * ratio
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(gain, now + 0.005)
      g.gain.exponentialRampToValueAtTime(0.0001, now + decay)
      osc.connect(g).connect(master)
      osc.start(now)
      osc.stop(now + decay + 0.1)
    }
  } catch {
    /* audio unavailable */
  }
}

// A small brass hand bell (ghanti): high, bright partials that fade within two seconds.
const GHANTI: [number, number, number][] = [
  [1, 0.5, 1.9],
  [2.03, 0.28, 1.2],
  [2.76, 0.2, 0.9],
  [3.92, 0.12, 0.6],
  [5.31, 0.07, 0.35],
]

/** The small mandir ghanti, rung three times with a little swing between strikes, as by hand. */
export function ringGhanti(volume = 0.2) {
  try {
    const ctx = audio()
    const master = ctx.createGain()
    master.gain.value = volume
    master.connect(ctx.destination)
    ;[0, 0.32, 0.62].forEach((delay, k) => {
      const now = ctx.currentTime + delay
      const base = 1320 * (k === 1 ? 1.012 : 1)
      const strength = k === 2 ? 0.75 : 1
      for (const [ratio, gain, decay] of GHANTI) {
        const osc = ctx.createOscillator()
        const g = ctx.createGain()
        osc.frequency.value = base * ratio
        g.gain.setValueAtTime(0, now)
        g.gain.linearRampToValueAtTime(gain * strength, now + 0.003)
        g.gain.exponentialRampToValueAtTime(0.0001, now + decay)
        osc.connect(g).connect(master)
        osc.start(now)
        osc.stop(now + decay + 0.05)
      }
    })
  } catch {
    /* audio unavailable */
  }
}

export function buzz(ms = 25) {
  try {
    navigator.vibrate?.(ms)
  } catch {
    /* not supported (iOS) */
  }
}

/** Shankh: a breathy, brass-like tone that swells, holds, and rises a little in pitch, as a conch does when blown. */
export function blowShankh(seconds = 2.6, volume = 0.22) {
  try {
    const ctx = audio()
    const now = ctx.currentTime
    const end = now + seconds
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, now)
    master.gain.linearRampToValueAtTime(volume, now + 0.35)
    master.gain.setValueAtTime(volume, end - 0.6)
    master.gain.exponentialRampToValueAtTime(0.0001, end)
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(700, now)
    filter.frequency.linearRampToValueAtTime(1600, now + 0.5)
    filter.Q.value = 1.2
    filter.connect(master).connect(ctx.destination)
    const vib = ctx.createOscillator()
    const vibDepth = ctx.createGain()
    vib.frequency.value = 5
    vibDepth.gain.value = 2.5
    vib.connect(vibDepth)
    for (const [ratio, gain] of [[1, 0.6], [2, 0.25], [3, 0.1]] as const) {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(220 * ratio * 0.9, now)
      osc.frequency.exponentialRampToValueAtTime(220 * ratio, now + 0.45)
      vibDepth.connect(osc.frequency)
      g.gain.value = gain
      osc.connect(g).connect(filter)
      osc.start(now)
      osc.stop(end + 0.1)
    }
    vib.start(now)
    vib.stop(end + 0.1)
  } catch {
    /* audio unavailable */
  }
}
