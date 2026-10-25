/** Coloured icons for the bottom tabs: the old line shapes, painted in warm colours, with a shikhara and saffron dhwaja for Mandir (Ayush's pick, 20 Oct 2026). */
const line = { fill: 'none', stroke: '#5a2d0c', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" {...line}>
      {children}
    </svg>
  )
}

export function TabSun() {
  return (
    <Svg>
      <path d="M9 22 A7 7 0 0 1 23 22Z" fill="#ffc93c" />
      <path d="M16 8 V11 M7.5 12.5 L9.6 14.6 M24.5 12.5 L22.4 14.6 M3 18 H6 M26 18 H29" stroke="#f29a1a" strokeWidth={2} />
      <path d="M5 22 H27 M10 26 H22" />
    </Svg>
  )
}

export function TabDiya() {
  return (
    <Svg>
      <path d="M4 19 Q16 23 28 17 Q25 28 16 28 Q7 28 4 19Z" fill="#d9893f" />
      <path d="M5.5 21.5 Q16 25 26.5 20" stroke="#fff3c4" strokeWidth={1.2} />
      <path d="M16 5 C19 10 19 14 16 17 C13 14 13 10 16 5Z" fill="#ff9d1f" />
      <path d="M16 10 C17.2 12 17.2 13.6 16 15 C14.8 13.6 14.8 12 16 10Z" fill="#ffd34d" stroke="none" />
    </Svg>
  )
}

export function TabMandir() {
  return (
    <Svg>
      <path d="M16 6.2 V1.8 L21.5 3.2 L16 4.8" fill="#e2680f" stroke="#e2680f" />
      <path d="M9 28 V19 Q9 11.5 16 6.5 Q23 11.5 23 19 V28 Z" fill="#e9b27a" />
      <path d="M9.3 15.5 H22.7 M9 19 H23" stroke="#fff3c4" />
      <path d="M13.5 28 V24 A2.5 2.5 0 0 1 18.5 24 V28" fill="#7a3b12" />
      <path d="M5 28 H27" />
    </Svg>
  )
}

export function TabBell() {
  return (
    <Svg>
      <path d="M8 23 Q9 9 16 7 Q23 9 24 23 Z" fill="#f2c14e" />
      <path d="M11 20 Q11.5 13 16 11" stroke="#fff3c4" strokeWidth={1.3} />
      <path d="M16 3 V6 M6 23 H26" />
      <circle cx="16" cy="26.5" r="2" fill="#a8682e" />
    </Svg>
  )
}

export function TabBook() {
  return (
    <Svg>
      <path d="M16 9 Q10 5 4 7 V25 Q10 23 16 27 Q22 23 28 25 V7 Q22 5 16 9 Z" fill="#fffaf0" />
      <path d="M4 25 Q10 23 16 27 Q22 23 28 25" stroke="#c24e06" strokeWidth={2} />
      <path d="M16 9 V27" />
      <path d="M7 11 Q10 10.3 13 11.6 M7 15 Q10 14.3 13 15.6 M19 11.6 Q22 10.3 25 11 M19 15.6 Q22 14.3 25 15" stroke="#c9a27e" strokeWidth={1.2} />
    </Svg>
  )
}
