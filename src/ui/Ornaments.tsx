/** Small drawn things from the puja: a lotus, the line icons of the thali, and a section heading. */

export function Heading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-center font-display text-[1.9rem] leading-tight text-warm">
      {children}
    </h2>
  )
}

export function Lotus({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 50 30" className={className} aria-hidden="true">
      <path d="M25 2 C31 10 31 20 25 28 C19 20 19 10 25 2Z" fill="#d9475c" />
      <path d="M25 28 C17 26 10 18 9 9 C16 12 22 18 25 28Z" fill="#e8798a" />
      <path d="M25 28 C33 26 40 18 41 9 C34 12 28 18 25 28Z" fill="#e8798a" />
      <path d="M25 28 C15 29 5 25 1 18 C10 18 19 22 25 28Z" fill="#f2a1ad" />
      <path d="M25 28 C35 29 45 25 49 18 C40 18 31 22 25 28Z" fill="#f2a1ad" />
    </svg>
  )
}

/** The new-moon sign: an empty circle drawn in dashes, because on Amavasya there is no moon to draw. */
export function NewMoon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="mx-auto block">
      <circle cx="17" cy="17" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
    </svg>
  )
}

/* Tab icons: simple line drawings of things found on a puja thali. */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

export function IconDiya() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M4 19 Q16 23 28 17 Q25 28 16 28 Q7 28 4 19Z" />
      <path {...stroke} d="M16 5 C19 10 19 14 16 17 C13 14 13 10 16 5Z" />
    </svg>
  )
}
export function IconKalash() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M11 13 H21 Q27 18 23 25 Q20 29 16 29 Q12 29 9 25 Q5 18 11 13Z" />
      <path {...stroke} d="M12 13 V11 H20 V13" />
      <circle {...stroke} cx="16" cy="7" r="3.5" />
      <path {...stroke} d="M12.5 8 Q8 6 7 3 M19.5 8 Q24 6 25 3" />
    </svg>
  )
}
export function IconBell() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M16 3 V6 M8 23 Q9 9 16 7 Q23 9 24 23 Z M6 23 H26" />
      <circle {...stroke} cx="16" cy="26.5" r="2" />
    </svg>
  )
}
export function IconLetter() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <rect {...stroke} x="4" y="8" width="24" height="17" rx="2" />
      <path {...stroke} d="M4.5 9 L16 18 L27.5 9" />
    </svg>
  )
}
export function IconSun() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M5 22 H27 M9 22 A7 7 0 0 1 23 22" />
      <path {...stroke} d="M16 8 V11 M7.5 12.5 L9.6 14.6 M24.5 12.5 L22.4 14.6 M3 18 H6 M26 18 H29" />
      <path {...stroke} d="M10 26 H22" />
    </svg>
  )
}
export function IconTemple() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M16 2 V5 M16 5 L22 14 H10 Z M8 14 H24 V28 H8 Z M5 28 H27" />
      <path {...stroke} d="M13 28 V21 A3 3 0 0 1 19 21 V28" />
    </svg>
  )
}
export function IconBook() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <path {...stroke} d="M16 9 Q10 5 4 7 V25 Q10 23 16 27 Q22 23 28 25 V7 Q22 5 16 9 Z M16 9 V27" />
    </svg>
  )
}
