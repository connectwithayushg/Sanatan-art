import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { audio, ringGhanti } from '../../lib/audio/bell'

/** Sounds to meditate with, each from free Freesound recordings (credited in the profile), looped softly. */
export const SOUNDS = ['bowl', 'bowlwater', 'om', 'none'] as const
export type Sound = (typeof SOUNDS)[number]

/** Keeps the phone awake while meditating. */
function useAwake() {
  useEffect(() => {
    let lock: WakeLockSentinel | null = null
    let gone = false
    const ask = () => {
      if (gone || document.visibilityState !== 'visible' || !navigator.wakeLock) return
      navigator.wakeLock.request('screen').then(
        (l) => {
          if (gone) void l.release()
          else lock = l
        },
        () => {},
      )
    }
    ask()
    document.addEventListener('visibilitychange', ask)
    return () => {
      gone = true
      document.removeEventListener('visibilitychange', ask)
      lock?.release().catch(() => {})
    }
  }, [])
}

/** Timer choices in minutes; 0 means no timer. */
export const TIMERS = [0, 5, 10, 15, 30, 60] as const

/** Plays the chosen sound in a seamless loop, fading in, and fades it out when meditation ends (or slowly when the timer is nearly up). */
function useSound(sound: Sound, fadeOut: boolean) {
  const gainRef = useRef<GainNode | null>(null)
  useEffect(() => {
    const g = gainRef.current
    if (!fadeOut || !g) return
    const t = g.context.currentTime
    g.gain.cancelScheduledValues(t)
    g.gain.setValueAtTime(g.gain.value, t)
    g.gain.linearRampToValueAtTime(0, t + 9)
  }, [fadeOut])
  useEffect(() => {
    if (sound === 'none') return
    const c = audio()
    const gain = c.createGain()
    gain.gain.value = 0
    gain.connect(c.destination)
    gainRef.current = gain
    let src: AudioBufferSourceNode | null = null
    let gone = false
    fetch(`/audio/${sound}.mp3`)
      .then((r) => r.arrayBuffer())
      .then((b) => c.decodeAudioData(b))
      .then((buf) => {
        if (gone) return
        src = c.createBufferSource()
        src.buffer = buf
        src.loop = true
        src.connect(gain)
        src.start()
        gain.gain.linearRampToValueAtTime(0.8, c.currentTime + 3)
      })
      .catch(() => {
        /* no sound: the darkness and the breathing halo still work */
      })
    return () => {
      gone = true
      const t = c.currentTime
      gain.gain.cancelScheduledValues(t)
      gain.gain.setValueAtTime(gain.gain.value, t)
      gain.gain.linearRampToValueAtTime(0, t + 1.2)
      src?.stop(t + 1.3)
    }
  }, [sound])
}

/**
 * Dhyan: the whole app fades to dark and only the deity, the halo and the lit diya glow.
 * The halo breathes (4 seconds in, 4 out) to breathe with. Tapping anywhere comes back.
 * It is not counted as darshan.
 */
export function Dhyan({
  src,
  alt,
  dx,
  halo,
  diya,
  sound = 'om',
  minutes = 0,
  onClose,
}: {
  /** No picture: only the diya, for trataka (gazing at the flame). */
  src?: string
  alt: string
  dx?: number
  halo: [string, string, string]
  diya: ReactNode
  sound?: Sound
  /** Meditate this long, then fade the sound, ring the bell once and come back. 0 = until tapped. */
  minutes?: number
  onClose: () => void
}) {
  const { t } = useTranslation()
  const [shown, setShown] = useState(false)
  const [hint, setHint] = useState(true)
  const [fading, setFading] = useState(false)
  useAwake()
  useSound(sound, fading)

  // The end time is kept as a clock time, so a phone that slept for a while still ends on time when it wakes.
  useEffect(() => {
    if (!minutes) return
    const endAt = Date.now() + minutes * 60000
    let rung = false
    const id = setInterval(() => {
      const left = endAt - Date.now()
      if (left <= 10000) setFading(true)
      if (left <= 0 && !rung) {
        rung = true
        clearInterval(id)
        ringGhanti()
        setTimeout(close, 2500)
      }
    }, 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true))
    const timer = setTimeout(() => setHint(false), 4000)
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && close()
    addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const close = () => {
    setShown(false)
    setTimeout(onClose, 700)
  }

  const [h1, h2, hr] = halo
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t('dhyan')}
      onClick={close}
      className={`fixed inset-0 z-[80] grid place-items-center bg-[#0b0604] transition-opacity ease-out ${shown ? 'opacity-100 duration-[2500ms]' : 'opacity-0 duration-700'}`}
    >
      <div className={`shrine is-lit dhyan relative w-[min(72vw,320px)] ${src ? '' : 'only-diya'}`} style={{ '--h1': h1, '--h2': h2, '--hr': hr } as CSSProperties}>
        <div className="halo" aria-hidden="true" />
        {src && (
          <div className="relative z-[2] aspect-[6/7]">
            <img src={src} alt={alt} className="relative h-full w-full object-contain object-bottom" style={{ translate: `${dx ?? 0}% 0` }} />
          </div>
        )}
        <div className={`relative mx-auto flex items-end justify-center ${src ? 'h-[84px] w-[160px]' : 'h-[200px] w-[260px] [&>svg]:w-[200px]'}`} aria-label={src ? undefined : alt}>
          <span className="diya-light pointer-events-none absolute top-0 left-1/2 h-[140px] w-[220px] -translate-x-1/2" />
          {diya}
        </div>
      </div>
      <p className={`pointer-events-none absolute inset-x-0 bottom-[calc(2rem+env(safe-area-inset-bottom))] text-center text-[0.85rem] text-white/45 transition-opacity duration-1000 ${hint ? 'opacity-100' : 'opacity-0'}`}>
        {t('dhyanExit')}
      </p>
    </div>,
    document.body,
  )
}
