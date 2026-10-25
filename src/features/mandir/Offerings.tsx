import { useState, type CSSProperties } from 'react'

/** Where the ten marigolds lie around the diya's base: [x from the centre, y from the top of the ground], in px. */
const FLOWERS: [number, number][] = [
  [-144, 42],
  [-118, 32],
  [-90, 38],
  [-130, 60],
  [-98, 62],
  [114, 42],
  [88, 32],
  [60, 38],
  [100, 60],
  [68, 62],
]

/** Brass gradients and the flat marigold, bowl and bell drawings used by the offerings. Rendered once, hidden. */
export function OfferDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
<linearGradient id="ofBellH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7a5014"/><stop offset=".22" stopColor="#b98a30"/><stop offset=".45" stopColor="#e3c068"/><stop offset=".64" stopColor="#b98a30"/><stop offset="1" stopColor="#6e4710"/></linearGradient>
<linearGradient id="dvXv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f3d27c"/><stop offset=".5" stopColor="#c58b2d"/><stop offset="1" stopColor="#6b4410"/></linearGradient><linearGradient id="dvClay" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#6a2c10"/><stop offset=".25" stopColor="#b8582a"/><stop offset=".5" stopColor="#d8793a"/><stop offset=".75" stopColor="#a94b22"/><stop offset="1" stopColor="#5a230c"/></linearGradient><linearGradient id="dvClayRim" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8a3c18"/><stop offset=".5" stopColor="#e48a4a"/><stop offset="1" stopColor="#7a3314"/></linearGradient>
<pattern id="ofLink" width="8" height="10" patternUnits="userSpaceOnUse"><ellipse cx="4" cy="5" rx="2.4" ry="4.2" fill="none" stroke="#4f3510" strokeWidth="1.5"/></pattern>
<linearGradient id="ofBrass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6d77e"/><stop offset=".55" stopColor="#d69a35"/><stop offset="1" stopColor="#a5651a"/></linearGradient>
<symbol id="ofMg" viewBox="0 0 40 40"><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(0.0 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(22.5 20 20)" fill="#f7a823"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(45.0 20 20)" fill="#e9780f"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(67.5 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(90.0 20 20)" fill="#f7a823"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(112.5 20 20)" fill="#e9780f"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(135.0 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(157.5 20 20)" fill="#f7a823"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(180.0 20 20)" fill="#e9780f"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(202.5 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(225.0 20 20)" fill="#f7a823"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(247.5 20 20)" fill="#e9780f"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(270.0 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(292.5 20 20)" fill="#f7a823"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(315.0 20 20)" fill="#e9780f"/><ellipse cx="20" cy="8.5" rx="5.2" ry="8" transform="rotate(337.5 20 20)" fill="#f59a1c"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(10 20 20)" fill="#f7a823" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(40 20 20)" fill="#e9780f" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(70 20 20)" fill="#f59a1c" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(100 20 20)" fill="#f7a823" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(130 20 20)" fill="#e9780f" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(160 20 20)" fill="#f59a1c" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(190 20 20)" fill="#f7a823" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(220 20 20)" fill="#e9780f" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(250 20 20)" fill="#f59a1c" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(280 20 20)" fill="#f7a823" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(310 20 20)" fill="#e9780f" stroke="#c85a05" strokeWidth=".4"/><ellipse cx="20" cy="12.5" rx="4" ry="6" transform="rotate(340 20 20)" fill="#f59a1c" stroke="#c85a05" strokeWidth=".4"/><circle cx="20" cy="20" r="4.2" fill="#c85a05"/><circle cx="20" cy="20" r="2" fill="#8f3b02"/></symbol>
<symbol id="ofLeaf" viewBox="0 0 20 12"><path d="M1 6 C6 0 14 0 19 6 C14 12 6 12 1 6Z" fill="#3c8a3e"/><path d="M2 6H18" stroke="#2a6a2c" strokeWidth=".8"/></symbol>
<symbol id="ofBowl" viewBox="0 0 80 46"><path d="M4 20 C4 36 22 42 40 42 C58 42 76 36 76 20Z" fill="url(#dvClay)"/><ellipse cx="40" cy="20" rx="36" ry="6" fill="url(#dvClayRim)"/><ellipse cx="40" cy="20.8" rx="30" ry="4" fill="#2e160a"/><ellipse cx="40" cy="20" rx="33" ry="5" fill="none" stroke="#e8bd5a" strokeWidth="1.5" strokeDasharray=".1 4" strokeLinecap="round"/><path d="M10 30 C24 37 56 37 70 30" stroke="#e8bd5a" strokeWidth="1.1" fill="none" opacity=".85"/><use href="#ofLeaf" x="8" y="2" width="22" height="13" transform="rotate(-18 19 8)"/><use href="#ofLeaf" x="50" y="2" width="22" height="13" transform="rotate(18 61 8)"/><use href="#ofMg" x="1" y="6" width="23" height="23"/><use href="#ofMg" x="56" y="6" width="23" height="23"/><use href="#ofMg" x="15" y="0" width="25" height="25"/><use href="#ofMg" x="40" y="0" width="25" height="25"/><use href="#ofMg" x="28" y="-8" width="25" height="25"/></symbol>
<symbol id="ofBell" viewBox="0 22 64 76"><path d="M22 36 C22 22 42 22 42 36" fill="none" stroke="url(#ofBellH)" strokeWidth="5" strokeLinecap="round"/><path d="M32 33 C20 33 17 46 15 62 C13 72 9 76 7 80 L57 80 C55 76 51 72 49 62 C47 46 44 33 32 33Z" fill="url(#ofBellH)"/><path d="M17 56 Q32 61 47 56" stroke="#1d1204" strokeWidth="1.4" fill="none" opacity=".55"/><path d="M13 68 Q32 74 51 68" stroke="#1d1204" strokeWidth="1.4" fill="none" opacity=".55"/><path d="M24 40 C21 52 20 62 18 72" stroke="#e8d49a" strokeWidth="2.2" fill="none" opacity=".38" strokeLinecap="round"/><rect x="5" y="80" width="54" height="7" rx="3.5" fill="url(#ofBellH)"/><rect x="5" y="80" width="54" height="1.6" rx=".8" fill="#e8d49a" opacity=".16"/><circle cx="32" cy="92" r="5.5" fill="url(#ofBellH)"/><g opacity=".8" style={{ filter: "saturate(.6) brightness(.85)" }}><use href="#ofLeaf" x="36" y="28" width="14" height="9" transform="rotate(35 43 32)"/><use href="#ofLeaf" x="14" y="28" width="14" height="9" transform="rotate(-35 21 32)"/><use href="#ofMg" x="38" y="28" width="11" height="11"/><use href="#ofMg" x="15" y="28" width="11" height="11"/></g></symbol>
      </defs>
    </svg>
  )
}

/** Two brass bells hang from the top; tapping one rings it and swings it. */
export function HangingBell({ side, hint, onRing, label }: { side: 'l' | 'r'; hint: boolean; onRing: () => void; label: string }) {
  const [swing, setSwing] = useState(0)
  return (
    <button
      key={swing}
      onClick={() => {
        setSwing((n) => n + 1)
        onRing()
      }}
      aria-label={label}
      className={`absolute top-[56px] z-[7] w-8 origin-top ${side === 'l' ? 'left-[10%]' : 'right-[10%]'} ${swing ? 'bell-swing' : ''} ${hint ? 'offer-hint' : ''}`}
    >
      <svg className="mx-auto block w-2" style={{ height: 48 }} viewBox="0 0 8 70" preserveAspectRatio="none" aria-hidden="true">
        <rect width="8" height="70" fill="url(#ofLink)" />
      </svg>
      <svg viewBox="0 22 64 76" className="block w-full overflow-visible" aria-hidden="true">
        <use href="#ofBell" />
      </svg>
    </button>
  )
}

/** The bowl of marigolds in front of the diya. */
export function FlowerBowl({ hint, onOffer, label }: { hint: boolean; onOffer: () => void; label: string }) {
  return (
    <button onClick={onOffer} aria-label={label} className={`absolute top-[76px] left-1/2 z-[5] w-[68px] -translate-x-1/2 ${hint ? 'offer-hint' : ''}`}>
      <svg viewBox="0 -14 80 60" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <use href="#ofBowl" />
      </svg>
    </button>
  )
}

/** The marigolds that stay on the ground once offered. They settle a moment after the petals land. */
export function GroundFlowers({ on, fresh }: { on: boolean; fresh: boolean }) {
  return (
    <>
      {FLOWERS.map(([x, y], i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`ground-flower pointer-events-none absolute z-[2] h-[15px] w-[30px] ${on ? 'on' : ''}`}
          style={{ left: `calc(50% + ${x}px)`, top: y, transitionDelay: on && fresh ? `${2500 + i * 110}ms` : '0ms' } as CSSProperties}
        >
          <svg viewBox="0 0 40 40" preserveAspectRatio="none" className="block h-full w-full overflow-visible">
            <use href="#ofMg" />
          </svg>
        </span>
      ))}
    </>
  )
}

/** A small round brass button (music, meditation). */
export function RoundButton({ side, onClick, label, pressed, children }: { side: 'l' | 'r'; onClick: () => void; label: string; pressed?: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      className={`offer-round absolute top-3 ${side === 'l' ? 'left-3' : 'right-3'} z-[9] grid h-[36px] w-[36px] place-items-center rounded-full border border-[#e3c068]/35 bg-[#1c0d06]/40 backdrop-blur-[2px] ${pressed ? 'border-[#f2b544]/80' : ''}`}
    >
      {children}
    </button>
  )
}

/** One offering: the same ten marigolds as on the floor fall in a narrow column from above the deity and land on their own spots. */
export function FallFlowers({ wave, rise, spread }: { wave: number; rise: (y: number) => number; spread: number }) {
  if (!wave) return null
  return (
    <>
      {FLOWERS.map(([x, y], i) => {
        const r = (n: number) => {
          const v = Math.sin((wave * 13 + i) * 97.13 + n * 12.9898) * 43758.5453
          return v - Math.floor(v)
        }
        return (
          <span
            key={`${wave}-${i}`}
            aria-hidden="true"
            className="fall-flower pointer-events-none absolute z-[3] h-[15px] w-[30px]"
            style={{ left: `calc(50% + ${x}px)`, top: y, animationDelay: `${i * 110}ms`, '--up': `${rise(y)}px`, '--sx': `${(r(1) - 0.5) * spread}px`, '--rot': `${(r(2) - 0.5) * 160}deg` } as CSSProperties}
          >
            <svg viewBox="0 0 40 40" preserveAspectRatio="none" className="block h-full w-full overflow-visible">
              <use href="#ofMg" />
            </svg>
          </span>
        )
      })}
    </>
  )
}
