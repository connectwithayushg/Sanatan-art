import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TEMPLES } from '../../content/bharatTemples'
import { STATE_NAMES } from './stateNames'

interface MapData {
  w: number
  h: number
  paths: Record<string, string>
}

/** Areas with no major temple in the lists, and the nearest temple page to suggest. */
const NEAR: Record<string, string[]> = { CH: ['mansa-devi'] }

/** India with all states, drawn to the country's official boundary (DataMeet India, CC BY 4.0). States with temples are tinted; tap one to list them. */
export function StateMap({ openTemple }: { openTemple: (id: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [data, setData] = useState<MapData | null>(null)
  const [pick, setPick] = useState<string | null>(null)

  useEffect(() => {
    import('../../content/indiaMap.json').then((m) => setData(m.default as MapData))
  }, [])

  const has = new Set(TEMPLES.map((t) => t.state))
  const inState = pick ? TEMPLES.filter((t) => t.state === pick) : []
  const near = pick && !inState.length ? (NEAR[pick] ?? []).map((id) => TEMPLES.find((t) => t.id === id)!).filter(Boolean) : []

  return (
    <div>
      <div className="rounded-3xl bg-white p-3 ring-1 ring-black/10">
        {data ? (
          <svg viewBox={`0 0 ${data.w} ${data.h}`} role="img" aria-label={hi ? 'भारत का नक्शा' : 'Map of India'} className="mx-auto block w-full">
            {Object.entries(data.paths).map(([code, d]) => {
              const on = has.has(code)
              const sel = pick === code
              return (
                <path
                  key={code}
                  d={d}
                  onClick={() => setPick(code)}
                  role="button"
                  aria-label={hi ? STATE_NAMES[code]?.hi : STATE_NAMES[code]?.en}
                  fill={sel ? '#c24e06' : on ? '#f6c795' : '#f1e8d9'}
                  stroke="#fff"
                  strokeWidth={0.8}
                  className={on ? 'cursor-pointer' : ''}
                />
              )
            })}
          </svg>
        ) : (
          <div className="grid aspect-[600/669] place-items-center text-dim">…</div>
        )}
      </div>
      <p className="mt-2 px-1 text-center text-[0.85rem] leading-snug text-dim">
        {hi ? 'सीमाएँ भारत की आधिकारिक सीमा के अनुसार · नक्शा डेटा: DataMeet India (CC BY 4.0)' : 'Boundaries as per India’s official map · Map data: DataMeet India (CC BY 4.0)'}
      </p>
      <div className="mt-4">
        {pick ? (
          <>
            <h2 className="font-display text-[1.5rem] text-warm">{hi ? STATE_NAMES[pick]?.hi : STATE_NAMES[pick]?.en}</h2>
            {!inState.length && (
              <p className="mt-1 text-dim">
                {near.length
                  ? hi ? 'यहाँ हमारी सूची का कोई बड़ा तीर्थ नहीं है। सबसे पास:' : 'No major pilgrimage temple from our list is here. Nearest:'
                  : hi ? 'इस क्षेत्र में अभी हमारी सूची का कोई बड़ा तीर्थ मंदिर नहीं है।' : 'There is no major pilgrimage temple from our list in this area yet.'}
              </p>
            )}
            {inState.length || near.length ? (
              <ul className="mt-2 grid grid-cols-1 gap-2">
                {(inState.length ? inState : near).map((t) => (
                  <li key={t.id}>
                    <button onClick={() => openTemple(t.id)} className="flex w-full items-center gap-3 rounded-2xl bg-white px-3 py-2.5 text-left ring-1 ring-black/10 active:scale-[0.99]">
                      <img src={`/art/bharat/${t.id}-t.webp`} alt="" width={52} height={52} className="size-[52px] rounded-xl object-cover" />
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-[1.25rem] leading-tight text-warm">{hi ? t.name.hi : t.name.en}</span>
                        <span className="block truncate text-[0.95rem] text-dim">{hi ? t.place.hi : t.place.en}</span>
                      </span>
                      <span aria-hidden="true" className="text-2xl text-flame">›</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        ) : (
          <p className="text-center text-dim">{hi ? 'किसी राज्य पर टैप करें। रंगीन राज्यों के मंदिर जुड़ चुके हैं।' : 'Tap a state. Tinted states already have temples.'}</p>
        )}
      </div>
    </div>
  )
}
