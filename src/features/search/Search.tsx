import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { DEITIES } from '../../content/deities'
import { FESTIVALS } from '../../content/festivals'
import { CHAPTERS } from '../../content/gita/meanings'
import { SHELVES, TEXTS } from '../../content/library'
import { PORTRAIT } from '../diwali/AartiView'

interface Hit {
  title: string
  kind: string
  to: string
  img?: string
  /** Lower-cased words to match, in Hindi and English, with and without spaces */
  keys: string
}

/** Suggestions shown before anything is typed. */
const POPULAR = [
  ['हनुमान चालीसा', 'Hanuman Chalisa', 'path/chalisa'],
  ['जय जगदीश हरे', 'Om Jai Jagdish Hare', 'aarti/jagdish'],
  ['करवा चौथ', 'Karwa Chauth', 'tyohar/karwa-chauth'],
  ['कैलेंडर', 'Calendar', 'aaj/calendar'],
  ['शिव चालीसा', 'Shiv Chalisa', 'path/shiv-chalisa'],
  ['गायत्री मंत्र', 'Gayatri Mantra', 'path/mantra'],
] as const

const squash = (s: string) => s.toLowerCase().replace(/[\s\-–,.।॥]/g, '')

/** Search across the whole app, opened from the magnifying glass in the top bar. */
export function Search({ onClose, go }: { onClose: () => void; go: (to: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const l = hi ? 'hi' : 'en'
  const [q, setQ] = useState('')
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => {
    input.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [onClose])

  const index = useMemo<Hit[]>(() => {
    const katha = SHELVES.find((s) => s.id === 'tyohar')?.covers ?? []
    const raw: (Omit<Hit, 'keys'> & { k: string })[] = [
      ...FESTIVALS.map((f) => ({ title: hi ? f.name_hi : f.name_en, kind: t('q_festival'), to: `tyohar/${f.id}`, k: `${f.name_en} ${f.name_hi} ${f.id}` })),
      ...AARTIS.map((a) => ({
        title: hi ? a.title_hi : a.title_en,
        kind: t('q_aarti'),
        to: `aarti/${a.id}`,
        img: PORTRAIT[a.id],
        k: `${a.title_en} ${a.title_hi} ${a.id} aarti आरती ${a.stanzas[0]?.lines.join(' ') ?? ''}`,
      })),
      ...DEITIES.map((d) => ({ title: hi ? d.name_hi : d.name_en, kind: t('q_mandir'), to: `mandir/${d.id}`, img: d.thumb, k: `${d.name_en} ${d.name_hi} ${d.id} darshan दर्शन` })),
      ...TEXTS.map((x) => ({
        title: x.title[l],
        kind: `${t('q_path')} · ${x.inside[l]}`,
        to: `path/${x.id}`,
        img: x.img,
        k: `${x.title.hi} ${x.title.en} ${x.keys} ${x.verses.map((v) => `${v.label?.hi ?? ''} ${v.label?.en ?? ''} ${v.text.split('\n')[0]}`).join(' ')}`,
      })),
      ...katha.map((c) => ({ title: c.title[l], kind: t('katha'), to: c.to, img: c.img, k: `${c.title.hi} ${c.title.en} ${c.inside.hi} ${c.inside.en} katha कथा` })),
      { title: t('gita'), kind: t('q_path'), to: 'path/gita', img: '/art/path/krishna.webp', k: 'gita bhagavad geeta गीता भगवद्गीता' },
      ...CHAPTERS.map((c, i) => ({ title: `${t('chapterN', { n: i + 1 })}: ${hi ? c.hi : c.en}`, kind: t('gita'), to: `path/gita/${i + 1}`, k: `gita geeta गीता adhyay chapter अध्याय ${i + 1} ${c.en} ${c.hi}` })),
      { title: t('cal_title'), kind: t('nav_aaj'), to: 'aaj/calendar', k: 'calendar calender panchang month कैलेंडर कैलेंडर पंचांग महीना तिथि ekadashi एकादशी purnima पूर्णिमा amavasya अमावस्या' },
      { title: t('q_panchang'), kind: t('nav_aaj'), to: 'aaj/panchang', k: 'panchang aaj today tithi rahu kaal पंचांग आज तिथि राहु काल नक्षत्र nakshatra sunrise सूर्योदय' },
    ]
    return raw.map(({ k, ...h }) => ({ ...h, keys: `${k.toLowerCase()} ${squash(k)}` }))
  }, [hi, l, t])

  const needle = q.trim().toLowerCase()
  // Names that match come first, then things that only mention the word inside.
  const hits = needle
    ? index
        .filter((h) => h.keys.includes(needle) || h.keys.includes(squash(needle)))
        .sort((a, b) => Number(b.title.toLowerCase().includes(needle)) - Number(a.title.toLowerCase().includes(needle)))
        .slice(0, 20)
    : []

  const open = (to: string) => {
    onClose()
    go(to)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-night" role="dialog" aria-modal="true" aria-label={t('searchTitle')}>
      <div className="sticky top-0 bg-night/95 px-4 pt-3 pb-2 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <button onClick={onClose} aria-label={t('back')} className="grid h-12 w-10 shrink-0 place-items-center text-2xl text-warm">
            ‹
          </button>
          <label className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-2xl bg-white px-3 ring-[1.5px] ring-flame/60 focus-within:ring-2 focus-within:ring-flame">
            <span className="text-dim">
              <SearchGlyph />
            </span>
            <input
              ref={input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('searchPlaceholder')}
              aria-label={t('searchTitle')}
              enterKeyHint="search"
              className="search-input h-full min-w-0 flex-1 bg-transparent text-[1rem] text-warm outline-none placeholder:text-dim/70"
            />
            {q && (
              <button onClick={() => setQ('')} aria-label="clear" className="grid h-8 w-8 place-items-center rounded-full bg-black/5 text-dim">
                ×
              </button>
            )}
          </label>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-4 pb-10">
        {!needle && (
          <>
            <p className="mt-3 text-[0.85rem] text-dim">{t('searchHint')}</p>
            <h2 className="mt-4 text-[1rem] font-bold text-warm">{t('searchPopular')}</h2>
            <ul className="mt-2 flex flex-wrap gap-2">
              {POPULAR.map(([h, e, to]) => (
                <li key={to}>
                  <button onClick={() => open(to)} className="h-10 rounded-full border-[1.5px] border-black/10 bg-white px-4 text-[0.92rem] font-semibold text-warm active:scale-95">
                    {hi ? h : e}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        {needle && hits.length === 0 && <p className="py-10 text-center text-[1rem] text-dim">{t('q_noResults')}</p>}
        <ul className="mt-1">
          {hits.map((h) => (
            <li key={h.to}>
              <button onClick={() => open(h.to)} className="flex w-full items-center gap-3 border-b border-black/10 py-3 text-left active:bg-black/5">
                {h.img ? (
                  <img src={h.img} alt="" className="h-12 w-12 shrink-0 rounded-xl object-cover object-top" />
                ) : (
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/15 font-display text-xl text-flame">ॐ</span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[1rem] font-semibold text-warm">{h.title}</span>
                  <span className="block truncate text-[0.85rem] text-dim">{h.kind}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-flame">›</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function SearchGlyph({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16.5 16.5 L21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
