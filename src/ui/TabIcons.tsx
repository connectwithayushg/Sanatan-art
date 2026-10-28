import type { ReactNode } from 'react'

function Svg({ children }: { children: ReactNode }) {
  return <svg width="27" height="27" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
}

export function TabHome() {
  return <Svg><path d="M4 15 16 4l12 11M7 13v15h7v-9h4v9h7V13" /></Svg>
}
export function TabCalendar() {
  return <Svg><rect x="5" y="7" width="22" height="22" rx="3" /><path d="M5 13h22M11 3v7M21 3v7M10 18h2m4 0h2m4 0h1M10 23h2m4 0h2m4 0h1" /></Svg>
}
export function TabDiya() {
  return <Svg><path d="M4 19q12 5 24 0-3 9-12 9T4 19ZM16 3c6 8 5 12 0 14-5-2-6-6 0-14ZM9 31h14" /></Svg>
}
export function TabMandir({ filled = false }: { filled?: boolean }) {
  if (filled) return <Svg><path d="M16 2v5m0-5 7 2-7 2" /><path fill="currentColor" stroke="none" d="m16 6 7 10H9ZM9 17h14v12H9ZM3 21h4v8H3Zm22 0h4v8h-4ZM1 30h30v2H1Z" /><path d="M13 29V20h6v9" stroke="#fff" strokeWidth="2.5" /></Svg>
  return <Svg><path d="M16 7V1l7 2-7 2M8 29V17l8-10 8 10v12M4 29h24M12 29V18h8v11M7 14h18M5 29V19h3m16 0h3v10M16 22v7" /></Svg>
}
export function TabBell() {
  return <Svg><path d="M8 23q1-15 8-16 7 1 8 16M16 3v4M5 23h22M12 27q4 6 8 0" /></Svg>
}
export function TabBook() {
  return <Svg><path d="M16 8Q9 4 3 7v21q6-3 13 0 7-3 13 0V7q-6-3-13 1ZM16 8v20" /></Svg>
}
