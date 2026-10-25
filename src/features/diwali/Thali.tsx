import { useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { buzz, ringBell } from '../../lib/audio/bell'

const R = 96

/** Point on the orbit, measured clockwise from the top. */
function at(deg: number) {
  const a = ((deg - 90) * Math.PI) / 180
  return [100 + R * Math.cos(a), 100 + R * Math.sin(a)] as const
}

/**
 * The aarti thali. Circle it clockwise with a finger, as the thali is circled before the deity;
 * every full round rings the bell softly. A plain tap rings it too.
 */
export function Thali() {
  const { t } = useTranslation()
  const id = useId()
  const [turn, setTurn] = useState(0)
  const [rounds, setRounds] = useState(0)
  const last = useRef<number | null>(null)
  const moved = useRef(0)
  const box = useRef<SVGSVGElement>(null)
  const turnRef = useRef(0)
  const roundsRef = useRef(0)

  const angle = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect()
    return (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI + 90
  }

  const advance = (delta: number) => {
    let next = turnRef.current + delta
    if (next >= 360) {
      next -= 360
      roundsRef.current += 1
      setRounds(roundsRef.current)
      ringBell(520, 0.22)
      buzz(30)
    }
    turnRef.current = next
    setTurn(next)
  }

  const onDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    last.current = angle(e)
    moved.current = 0
  }
  const onMove = (e: React.PointerEvent) => {
    if (last.current === null) return
    const a = angle(e)
    let d = a - last.current
    if (d > 180) d -= 360
    if (d < -180) d += 360
    last.current = a
    moved.current += Math.abs(d)
    if (d > 0) advance(d)
  }
  const onUp = () => {
    if (last.current !== null && moved.current < 8) {
      ringBell(520, 0.25)
      buzz(25)
    }
    last.current = null
  }

  const [x, y] = at(turn)
  const arc = turn > 0.5 ? `M100 ${100 - R} A${R} ${R} 0 ${turn > 180 ? 1 : 0} 1 ${x} ${y}` : ''

  return (
    <div className="flex shrink-0 items-center justify-center gap-4">
      <svg
        ref={box}
        viewBox="0 0 200 200"
        role="button"
        tabIndex={0}
        aria-label={t('thaliHint')}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={() => (last.current = null)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            advance(90)
          }
        }}
        className="h-[clamp(6.5rem,15dvh,8.5rem)] w-auto touch-none select-none"
      >
        <defs>
          <radialGradient id={`${id}glow`}>
            <stop offset="0" stopColor="#ffb43a" stopOpacity=".6" />
            <stop offset="1" stopColor="#ff8a1f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}fl`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#ff7a00" />
            <stop offset=".55" stopColor="#ffc23d" />
            <stop offset="1" stopColor="#fff3c4" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={R} fill="none" stroke="#ffb43a" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" opacity=".8" />
        {arc && <path d={arc} fill="none" stroke="#ffb43a" strokeWidth="5" strokeLinecap="round" />}
        <circle cx="100" cy="100" r="74" fill="#c9962f" />
        <circle cx="100" cy="100" r="66" fill="#e2b452" stroke="#9a6a1c" strokeWidth="2" />
        <circle cx="100" cy="100" r="40" fill={`url(#${id}glow)`} className="breathe" style={{ transformOrigin: '100px 100px' }} />
        <ellipse cx="100" cy="112" rx="20" ry="8" fill="#7a2f12" />
        <path className="flame" d="M100 76 C107 88 107 98 100 106 C93 98 93 88 100 76Z" fill={`url(#${id}fl)`} />
        <circle cx="64" cy="78" r="7" fill="#d1121d" />
        <g fill="#ff8c1a">
          <circle cx="134" cy="76" r="7" />
          <circle cx="142" cy="86" r="6" />
          <circle cx="130" cy="88" r="6" />
        </g>
        <g fill="#fff">
          <circle cx="70" cy="128" r="3.5" />
          <circle cx="77" cy="132" r="3.5" />
          <circle cx="72" cy="137" r="3.5" />
        </g>
        <circle cx="134" cy="130" r="8" fill="#f6d27a" stroke="#9a6a1c" />
        <circle cx={x} cy={y} r="7" fill="#fff3c4" stroke="#ffb43a" strokeWidth="3" />
      </svg>
      <p className="max-w-[9rem] text-[1.05rem] leading-snug text-warm" aria-live="polite">
        {rounds > 0 ? t('thaliRounds', { count: rounds }) : t('thaliHint')}
      </p>
    </div>
  )
}
