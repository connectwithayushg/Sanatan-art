import { WhatsAppLogo } from '../../ui/WhatsAppLogo'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SHELVES, TEXTS, loadVerses, textById, type Cover, type LibText, type Shelf, type Verse } from '../../content/library'
import { CHAPTERS, MEANINGS } from '../../content/gita/meanings'
import { useStored } from '../../lib/useStored'
import { Credits } from '../../ui/Credits'

type Sanskrit = Record<string, string[]>
/** The Sanskrit of all 18 chapters is large, so it loads only when Path opens. */
let sanskritCache: Sanskrit | null = null
function useSanskrit() {
  const [data, setData] = useState(sanskritCache)
  useEffect(() => {
    if (data) return
    void import('../../content/gita/sanskrit.json').then((m) => {
      sanskritCache = m.default as Sanskrit
      setData(sanskritCache)
    })
  }, [data])
  return data
}

/** Verses for the verse of the day: well-loved ones from the chapters that have meanings. */
const DAILY: [number, number][] = [
  [2, 47], [2, 14], [2, 20], [2, 22], [2, 48], [12, 8], [2, 50], [2, 62], [2, 63], [12, 13], [2, 23], [12, 15], [2, 70], [12, 12], [2, 56], [12, 20], [2, 38], [2, 71],
]

const DEV = '०१२३४५६७८९'
const num = (n: number | string, hi: boolean) => (hi ? String(n).replace(/\d/g, (d) => DEV[+d]) : String(n))

/** backLabel is set when the Path opens inside another tab (the Mandir), so its back buttons name that place. */
export function PathView({ sub, open, go, backLabel }: { sub: string[]; open: (path: string) => void; go: (to: string) => void; backLabel?: string }) {
  const [book, part] = sub
  if (book === 'gita' && part) return <GitaChapter ch={Math.min(18, Math.max(1, Number(part) || 1))} open={open} />
  if (book === 'gita') return <GitaChapters open={open} backLabel={backLabel} />
  const text = book ? textById(book) : undefined
  if (text) return <TextReader text={text} backLabel={backLabel} />
  return <PathHome open={open} go={go} />
}

function PathHome({ open, go }: { open: (path: string) => void; go: (to: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const sanskrit = useSanskrit()
  const [last] = useStored('gitaLast', 0)
  const [q, setQ] = useState('')
  const day = Math.floor((Date.now() + 330 * 60000) / 86400e3)
  const [ch, v] = DAILY[day % DAILY.length]
  const meaning = MEANINGS[ch][v - 1]

  const share = () => {
    const text = `${sanskrit?.[ch][v - 1] ?? ''}\n\n${hi ? meaning.hi : meaning.en}\n\n${t('gitaRef', { ch: num(ch, hi), v: num(v, hi) })}\n${location.origin}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <main className="mx-auto max-w-xl pb-6">
      <header className="px-4 pt-3">
        <h1 className="font-display text-[1.7rem] leading-tight text-warm">{t('nav_path')}</h1>
        <p className="text-[0.92rem] text-dim">{t('pathIntro')}</p>
        <label className="mt-3 flex h-12 items-center gap-2 rounded-2xl bg-white px-3 ring-1 ring-black/15 focus-within:ring-2 focus-within:ring-flame">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-dim" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>
          <input
            type="text"
            inputMode="search"
            enterKeyHint="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t('pathSearch')}
            aria-label={t('pathSearch')}
            className="search-input h-full min-w-0 flex-1 bg-transparent text-[1rem] text-warm outline-none placeholder:text-dim/80"
          />
          {q && (
            <button onClick={() => setQ('')} aria-label={t('close')} className="-mr-1 h-10 w-10 shrink-0 text-xl text-dim">
              ×
            </button>
          )}
        </label>
      </header>

      {q.trim() ? (
        <PathResults q={q} go={go} />
      ) : (
        <>
          <ShelfRow shelf={SHELVES[0]} go={go} />

      <section className="mx-4 mt-4 rounded-3xl bg-white p-4 ring-1 ring-black/10">
        <p className="text-[0.85rem] font-bold text-flame">{t('verseOfDay')} · {t('gitaRef', { ch: num(ch, hi), v: num(v, hi) })}</p>
        <p className="mt-2 min-h-[3.5rem] whitespace-pre-line font-scripture text-[1.2rem] [overflow-wrap:anywhere] leading-snug text-warm">{sanskrit?.[ch][v - 1] ?? ''}</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-warm/80">{hi ? meaning.hi : meaning.en}</p>
        <div className="mt-3 grid grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-2">
          <button className="h-11 rounded-xl bg-flame text-[0.95rem] font-bold text-ember active:scale-[0.98]" onClick={() => open(`gita/${ch}`)}>{t('readChapter')}</button>
          <button className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border-[1.5px] border-[#1f8f4e] bg-white px-2 text-[0.9rem] font-bold text-[#1f8f4e] active:scale-[0.98]" onClick={share}><WhatsAppLogo size={20} /> {t('share')}</button>
        </div>
      </section>

      {last > 0 && (
        <button className="mx-4 mt-3 flex w-[calc(100%-2rem)] items-center gap-3 rounded-2xl bg-flame/10 px-4 py-3 text-left ring-1 ring-flame/40 active:scale-[0.99]" onClick={() => open(`gita/${last}`)}>
          <span className="min-w-0 flex-1 text-[0.95rem] font-semibold text-warm">{t('continueReading', { ch: num(last, hi), name: hi ? CHAPTERS[last - 1].hi : CHAPTERS[last - 1].en })}</span>
          <span aria-hidden="true" className="text-xl text-flame">›</span>
        </button>
      )}

      {SHELVES.slice(1).map((shelf) => (
        <ShelfRow key={shelf.id} shelf={shelf} go={go} />
      ))}
        </>
      )}
      <div className="px-4">
        <Credits />
      </div>
    </main>
  )
}

/** One shelf: a heading, a line under it, and covers that scroll sideways. */
function ShelfRow({ shelf, go }: { shelf: Shelf; go: (to: string) => void }) {
  const { i18n } = useTranslation()
  const l = i18n.language === 'hi' ? 'hi' : 'en'
  return (
    <section className="pt-6">
      <div className="px-4">
        <h2 className="text-[1.1rem] font-bold leading-tight text-warm">{shelf.title[l]}</h2>
        <p className="text-[0.85rem] text-dim">{shelf.line[l]}</p>
      </div>
      <ul className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {shelf.covers.map((c) => (
          <li key={c.to} className="w-[8.25rem] shrink-0">
            <button onClick={() => go(c.to)} className="block w-full text-left active:scale-[0.98]">
              <CoverArt c={c} />
              <span className="mt-1.5 line-clamp-2 block text-[0.9rem] font-semibold leading-tight text-warm">{c.title[l]}</span>
              <span className="mt-0.5 block text-[0.78rem] leading-tight text-dim">{c.inside[l]}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** A deity sits in a temple arch with a thin gold edge; a painting of a scene keeps its plain rounded frame. */
function CoverArt({ c }: { c: Cover }) {
  if (!c.arch) return <img src={c.img} alt="" loading="lazy" className="aspect-[4/5] w-full rounded-2xl bg-[#f3e6d3] object-cover object-top" />
  return (
    <span className="block aspect-[4/5] w-full rounded-t-[999px] rounded-b-2xl bg-gradient-to-b from-[#ecc06a] via-[#c98f35] to-[#9c6524] p-[3px]">
      <img src={c.img} alt="" loading="lazy" className="h-full w-full rounded-t-[999px] rounded-b-[13px] bg-[#1a120c] object-cover object-top" />
    </span>
  )
}

const squash = (s: string) => s.toLowerCase().replace(/[\s\-–,.:।॥()]/g, '')
const ALL: Cover[] = [...new Map(SHELVES.flatMap((s) => s.covers).map((c) => [c.to, c])).values()]
const keysOf = (c: Cover) => {
  const text = TEXTS.find((x) => `path/${x.id}` === c.to)
  const k = `${c.title.hi} ${c.title.en} ${c.inside.hi} ${c.inside.en} ${text?.keys ?? ''} ${text?.by.hi ?? ''} ${text?.by.en ?? ''}`
  return `${k.toLowerCase()} ${squash(k)}`
}

/** Everything in Path whose name, deity or day matches what was typed, names first. */
function PathResults({ q, go }: { q: string; go: (to: string) => void }) {
  const { t, i18n } = useTranslation()
  const l = i18n.language === 'hi' ? 'hi' : 'en'
  const index = useMemo(() => ALL.map((c) => ({ c, keys: keysOf(c) })), [])
  const needle = q.trim().toLowerCase()
  const words = needle.split(/\s+/)
  const hits = index
    .filter(({ keys }) => keys.includes(squash(needle)) || words.every((w) => keys.includes(w)))
    .sort((a, b) => Number(squash(b.c.title[l]).includes(squash(needle))) - Number(squash(a.c.title[l]).includes(squash(needle))))
  if (!hits.length) return <p className="px-4 pt-6 text-center text-[1rem] text-dim">{t('pathNone')}</p>
  return (
    <ul className="mt-4 grid gap-2 px-4">
      {hits.map(({ c }) => (
        <li key={c.to}>
          <button onClick={() => go(c.to)} className="flex w-full items-center gap-3 rounded-2xl bg-white p-2 pr-3 text-left ring-1 ring-black/10 active:scale-[0.99]">
            <span className="w-12 shrink-0">
              <CoverArt c={c} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[1rem] font-semibold leading-tight text-warm">{c.title[l]}</span>
              <span className="block text-[0.82rem] leading-tight text-dim">{c.inside[l]}</span>
            </span>
            <span aria-hidden="true" className="text-xl text-flame">›</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

function GitaChapters({ open, backLabel }: { open: (path: string) => void; backLabel?: string }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const sanskrit = useSanskrit()
  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      {backLabel && (
        <button onClick={() => history.back()} className="mb-2 h-11 rounded-full border-[1.5px] border-dim/50 px-4 text-[0.95rem] font-semibold text-warm">
          ‹ {backLabel}
        </button>
      )}
      <h1 className="text-center font-display text-[2.2rem] leading-tight text-warm">{t('gita')}</h1>
      <p className="mt-1 text-center text-lg text-dim">{t('gitaIntro')}</p>
      <ol className="mt-5 grid gap-2">
        {CHAPTERS.map((c, i) => {
          const n = i + 1
          const withMeaning = !!MEANINGS[n]
          return (
            <li key={n}>
              <button
                onClick={() => open(`gita/${n}`)}
                className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left ring-1 transition active:scale-[0.99] ${
                  withMeaning ? 'bg-flame/10 ring-flame/50' : 'bg-night2/70 ring-black/10 hover:ring-black/15'
                }`}
              >
                <span className="w-10 shrink-0 text-center font-display text-[1.7rem] text-flame">{num(n, hi)}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[1.25rem] font-semibold leading-tight text-warm">{hi ? c.hi : c.en}</span>
                  <span className="block text-[0.98rem] text-dim">
                    {sanskrit ? t('verseCount', { count: sanskrit[n].length }) : ''}
                    {withMeaning ? ` · ${t('withMeaning')}` : ''}
                  </span>
                </span>
                <span aria-hidden="true" className="text-2xl text-flame">›</span>
              </button>
            </li>
          )
        })}
      </ol>
    </main>
  )
}

function MeaningToggle({ on, set }: { on: boolean; set: (v: boolean) => void }) {
  const { t } = useTranslation()
  return (
    <button
      aria-pressed={on}
      onClick={() => set(!on)}
      className={`h-11 shrink-0 rounded-full border-[1.5px] px-4 text-[0.95rem] font-semibold transition-colors ${on ? 'border-flame bg-flame text-ember' : 'border-dim/50 text-warm'}`}
    >
      {t('meaning')}
    </button>
  )
}

function GitaChapter({ ch, open }: { ch: number; open: (path: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const sanskrit = useSanskrit()
  const [showMeaning, setShowMeaning] = useStored('pathMeaning', true)
  const [, setLast] = useStored('gitaLast', 0)
  useEffect(() => setLast(ch), [ch, setLast])
  const meanings = MEANINGS[ch]
  const verses = sanskrit?.[ch] ?? []

  return (
    <main className="mx-auto max-w-xl px-5 pt-3 pb-6">
      <div className="sticky top-0 z-10 -mx-5 flex items-center gap-3 bg-night/95 px-5 py-2 backdrop-blur">
        <button onClick={() => history.back()} className="h-12 shrink-0 rounded-full border-[1.5px] border-dim/50 px-4 text-lg font-semibold text-warm">
          ‹ {t('chapters')}
        </button>
        <span className="flex-1" />
        {meanings && <MeaningToggle on={showMeaning} set={setShowMeaning} />}
      </div>
      <p className="mt-3 text-center text-[1.05rem] font-semibold text-flame">{t('chapterN', { n: num(ch, hi) })}</p>
      <h1 className="text-center font-display text-[2rem] leading-tight text-warm">{hi ? CHAPTERS[ch - 1].hi : CHAPTERS[ch - 1].en}</h1>
      {!meanings && <p className="mt-2 text-center text-[1.05rem] text-dim">{t('meaningSoon')}</p>}

      <ol className="mt-5 grid gap-4">
        {verses.map((text, i) => (
          <VerseCard
            key={i}
            label={t('verseN', { n: `${num(ch, hi)}.${num(i + 1, hi)}` })}
            text={text}
            meaning={showMeaning && meanings ? (hi ? meanings[i]?.hi : meanings[i]?.en) : undefined}
          />
        ))}
      </ol>

      {ch < 18 && verses.length > 0 && (
        <button className="btn btn-flame mt-6 w-full text-xl" onClick={() => open(`gita/${ch + 1}`)}>
          {t('nextChapter', { n: num(ch + 1, hi) })}
        </button>
      )}
    </main>
  )
}

function VerseCard({ label, text, meaning }: { label: string; text: string; meaning?: string }) {
  return (
    <li className="min-w-0 rounded-3xl bg-night2/60 p-5 ring-1 ring-black/10">
      <p className="text-[0.95rem] font-semibold text-flame">{label}</p>
      <p className="mt-2 whitespace-pre-line font-scripture text-[1.45rem] [overflow-wrap:anywhere] leading-snug text-warm">{text}</p>
      {meaning && <p className="mt-3 border-t border-black/10 pt-3 text-[1.1rem] leading-relaxed text-warm/85">{meaning}</p>}
    </li>
  )
}

/** The verses of a text: at hand for the first texts, fetched on first open for the longer ones. */
function useVerses(text: LibText) {
  const [got, setGot] = useState<{ id: string; verses: Verse[] } | null>(null)
  useEffect(() => {
    if (!text.lazy) return
    let live = true
    void loadVerses(text.id).then((verses) => live && setGot({ id: text.id, verses }))
    return () => {
      live = false
    }
  }, [text])
  if (!text.lazy) return text.verses
  return got?.id === text.id ? got.verses : null
}

/** A whole text in one tile, the way it is printed in a pocket book: each verse, then its meaning in smaller type. A katha reads as plain paragraphs. */
function TextReader({ text, backLabel }: { text: LibText; backLabel?: string }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const l = hi ? 'hi' : 'en'
  const [showMeaning, setShowMeaning] = useStored('pathMeaning', true)
  const verses = useVerses(text)
  let n = 0
  return (
    <main className="mx-auto max-w-xl px-4 pt-2 pb-6">
      <div className="sticky top-0 z-10 -mx-4 flex items-center gap-3 bg-night/95 px-4 py-2 backdrop-blur">
        <button onClick={() => history.back()} className="h-11 shrink-0 rounded-full border-[1.5px] border-dim/50 px-4 text-[0.95rem] font-semibold text-warm">
          ‹ {backLabel ?? t('nav_path')}
        </button>
        <span className="flex-1" />
        {!text.prose && <MeaningToggle on={showMeaning} set={setShowMeaning} />}
      </div>

      <header className="mt-2 flex items-center gap-3">
        <img
          src={text.img}
          alt=""
          className={`w-16 shrink-0 object-cover object-top ${text.deity ? 'aspect-[4/5] rounded-t-[999px] rounded-b-xl ring-2 ring-[#c98f35]' : 'h-16 rounded-2xl'}`}
        />
        <div className="min-w-0">
          <h1 className="font-display text-[1.6rem] leading-tight text-warm">{text.title[l]}</h1>
          <p className="text-[0.9rem] text-dim">{text.by[l]}</p>
        </div>
      </header>

      <article className="mt-4 rounded-3xl bg-white px-4 py-5 ring-1 ring-black/10">
        {!verses && <p className="py-10 text-center text-dim">{t('loading')}</p>}
        {verses &&
          text.prose &&
          verses.map((v, i) => {
            const label = v.label?.[l]
            return (
              <div key={i} className={i ? 'mt-4' : ''}>
                {label && label !== verses[i - 1]?.label?.[l] && <h2 className={`mb-2 text-center font-display text-[1.25rem] text-flame ${i ? 'pt-3' : ''}`}>{label}</h2>}
                <p className="text-[1.12rem] leading-[1.75] text-warm">{hi ? v.text : v.meaning?.en}</p>
              </div>
            )
          })}
        {verses &&
          !text.prose &&
          verses.map((v, i) => {
            const label = v.label?.[l]
            const prevLabel = verses[i - 1]?.label?.[l]
            const number = label ? null : ++n
            return (
              <div key={i} className={i ? 'mt-5' : ''}>
                {label && label !== prevLabel && <p className="mb-1 text-center text-[0.8rem] font-bold tracking-wide text-flame">॥ {label} ॥</p>}
                <div className="flex gap-2">
                  {number !== null && <span className="w-6 shrink-0 pt-1 text-right text-[0.8rem] font-semibold text-flame/70">{num(number, hi)}</span>}
                  <div className="min-w-0 flex-1">
                    <p className={`whitespace-pre-line font-scripture [overflow-wrap:anywhere] text-warm ${text.lang === 'sa' ? 'text-[1.2rem] leading-[1.65]' : 'text-[1.25rem] leading-[1.6]'} ${label ? 'text-center' : ''}`}>
                      {v.text}
                    </p>
                    {showMeaning && v.meaning && (
                      <p className="mt-1.5 border-l-[3px] border-flame/30 pl-3 text-[0.9rem] leading-relaxed text-dim">{v.meaning[l]}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        {verses && text.closing && <p className="mt-6 text-center font-display text-[1.3rem] text-flame">{text.closing}</p>}
      </article>
    </main>
  )
}
