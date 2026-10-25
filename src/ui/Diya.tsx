import { useId } from 'react'

/** A small clay diya; unlit it shows only the wick. `cream` draws it light, for an unlit diya on the bhagwa band. */
export function Diya({ lit, size = 64, cream = false }: { lit: boolean; size?: number; cream?: boolean }) {
  const id = useId()
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 100 125" aria-hidden="true">
      {lit && (
        <g className="glow-in">
          <circle cx="50" cy="48" r="40" fill={`url(#${id}g)`} />
          <path className="flame" d="M50 14 C62 34 64 54 50 68 C36 54 38 34 50 14Z" fill={`url(#${id}f)`} />
        </g>
      )}
      {!lit && <path d="M50 58 L50 70" stroke={cream ? '#fbefdc' : '#8f6a4a'} strokeWidth="3" strokeLinecap="round" />}
      <path d="M8 72 Q50 82 96 66 Q86 108 50 108 Q14 108 8 72Z" fill={`url(#${id}b)`} />
      <path d="M11 73 Q50 82 92 68" stroke={cream ? '#ffffff' : '#e98b4b'} strokeWidth="3" fill="none" />
      {[-2, -1, 0, 1, 2].map((i) => (
        <circle key={i} cx={50 + i * 11} cy="92" r="2.4" fill="#f1c27d" />
      ))}
      <defs>
        <radialGradient id={`${id}g`}>
          <stop offset="0" stopColor="#ffb43a" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff3c4" />
          <stop offset="0.5" stopColor="#ffc23d" />
          <stop offset="1" stopColor="#ff7a00" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={cream ? '#fbefdc' : '#d06a32'} />
          <stop offset="1" stopColor={cream ? '#ead2ad' : '#7a2f12'} />
        </linearGradient>
      </defs>
    </svg>
  )
}

/** The one big diya of the Amavasya night, with two small ones keeping it company. */
export function BigDiya({ className = '' }: { className?: string }) {
  const id = useId()
  const u = (n: string) => `url(#${id}${n})`
  return (
    <svg viewBox="0 0 390 300" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffb43a" stopOpacity=".55" />
          <stop offset=".45" stopColor="#ff8a1f" stopOpacity=".16" />
          <stop offset="1" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}clay`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d06a32" />
          <stop offset="1" stopColor="#7a2f12" />
        </linearGradient>
        <linearGradient id={`${id}fl`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ff7a00" />
          <stop offset=".55" stopColor="#ffc23d" />
          <stop offset="1" stopColor="#fff3c4" />
        </linearGradient>
      </defs>
      <ellipse className="breathe" style={{ transformOrigin: '195px 120px' }} cx="195" cy="120" rx="190" ry="150" fill={u('glow')} />
      <g className="flame">
        <path d="M195 30 C222 78 220 118 195 146 C170 118 168 78 195 30Z" fill={u('fl')} />
        <path d="M195 70 C206 94 205 116 195 132 C185 116 184 94 195 70Z" fill="#fffbe8" />
      </g>
      <path d="M190 146 h10 v14 h-10z" fill="#3a1a0a" />
      <path d="M70 162 Q195 196 330 156 Q314 236 195 240 Q84 238 70 162Z" fill={u('clay')} />
      <path d="M70 162 Q195 196 330 156 L344 146 Q330 160 300 166" fill="none" stroke="#e98b4b" strokeWidth="3" />
      <path d="M70 162 Q195 182 330 156" fill="#3b1a0c" opacity=".5" />
      <g fill="#f1c27d" opacity=".9">
        {[120, 150, 182, 214, 246, 276].map((x, i) => (
          <circle key={x} cx={x} cy={[205, 214, 218, 218, 213, 204][i]} r="4" />
        ))}
      </g>
      <path d="M110 192 Q195 222 290 190" fill="none" stroke="#f1c27d" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
      <ellipse cx="195" cy="262" rx="150" ry="14" fill="#000" opacity=".35" />
      {[30, 360].map((x) => (
        <g key={x} transform={`translate(${x} 250)`}>
          <ellipse rx="22" ry="7" fill="#7a2f12" />
          <path className="flame" d="M0 -26 C6 -16 6 -8 0 -2 C-6 -8 -6 -16 0 -26Z" fill="#ffc23d" />
        </g>
      ))}
    </svg>
  )
}
