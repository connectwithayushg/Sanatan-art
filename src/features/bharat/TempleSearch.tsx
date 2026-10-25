import { useMemo } from 'react'
import { GROUPS, TEMPLES, type Temple } from '../../content/bharatTemples'
import { STATE_NAMES } from './stateNames'

/** Lower-cases and drops spaces, punctuation, nukta and chandrabindu so "Shri Kedarnath", "kedar nath" and "केदारनाथ" all match. */
const squash = (s: string) =>
  s
    .normalize('NFC')
    .toLowerCase()
    .replace(/[़]/g, '')
    .replace(/ँ/g, 'ं')
    .replace(/[\s\-–,.()।॥'’]/g, '')
/** Extra deity words for whole lists, so "शिव" also finds every Jyotirlinga. */
const GROUP_WORDS: Partial<Record<string, string>> = {
  jy: 'शिव शंकर महादेव shiv shiva mahadev',
  pk: 'शिव शंकर महादेव shiv shiva mahadev',
  bhoota: 'शिव शंकर महादेव shiv shiva mahadev',
  pb: 'विष्णु vishnu',
  ashta: 'गणेश गणपति ganesh ganesha ganpati',
  braj: 'कृष्ण krishna',
}
const HONORIFIC = /^(shri|shree|sri|sree|श्री|माँ|मां|maa|ma)$/

interface Hit {
  t: Temple
  name: string
  keys: string
}

/** Search box for the temple section, plus its results list. Matches name, place, state, tags and pilgrimage list. */
export function TempleSearch({ q, setQ, hi, open }: { q: string; setQ: (v: string) => void; hi: boolean; open: (p: string) => void }) {
  const index = useMemo<Hit[]>(
    () =>
      TEMPLES.map((t) => {
        const st = STATE_NAMES[t.state]
        const gs = GROUPS.filter((g) => t.groups.includes(g.id))
        const parts = [t.name, t.place, ...(st ? [st] : []), ...t.tags, ...gs.map((g) => g.name)].flatMap((x) => [x.hi, x.en])
        const extra = t.groups.map((g) => GROUP_WORDS[g] ?? '')
        return { t, name: squash(`${t.name.hi} ${t.name.en}`), keys: squash([...parts, ...extra].join(' ')) }
      }),
    [],
  )
  const words = q
    .trim()
    .split(/\s+/)
    .filter((w) => w && !HONORIFIC.test(w.toLowerCase()))
    .map(squash)
    .filter(Boolean)
  const hits = words.length
    ? index
        .filter((h) => words.every((w) => h.keys.includes(w)))
        .sort((a, b) => Number(words.some((w) => b.name.includes(w))) - Number(words.some((w) => a.name.includes(w))))
    : []

  return (
    <>
      <label className="mt-5 flex h-13 items-center gap-2 rounded-2xl bg-white px-4 ring-[1.5px] ring-flame/60 focus-within:ring-2 focus-within:ring-flame">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-5 shrink-0 text-dim"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={hi ? 'मंदिर, शहर या राज्य खोजें' : 'Search a temple, city or state'}
          aria-label={hi ? 'मंदिर खोजें' : 'Search temples'}
          enterKeyHint="search"
          className="search-input h-full min-w-0 flex-1 bg-transparent text-[1.1rem] text-warm outline-none placeholder:text-dim/70 [&::-webkit-search-cancel-button]:hidden"
        />
        {q && (
          <button
            onClick={() => setQ('')}
            aria-label={hi ? 'मिटाएँ' : 'Clear'}
            className="grid size-8 shrink-0 place-items-center rounded-full bg-black/5 text-xl text-dim"
          >
            ×
          </button>
        )}
      </label>

      {q.trim() && (
        <div className="mt-4">
          <p className="mb-2 text-[1rem] text-dim">
            {hits.length
              ? hi
                ? `${hits.length} मंदिर मिले`
                : `${hits.length} ${hits.length === 1 ? 'temple' : 'temples'} found`
              : hi
                ? 'कोई मंदिर नहीं मिला। दूसरा नाम, शहर या राज्य लिखकर देखें।'
                : 'No temple found. Try another name, city or state.'}
          </p>
          <ul className="grid grid-cols-1 gap-3">
            {hits.map(({ t }) => (
              <li key={t.id}>
                <button
                  onClick={() => open(`bharat/t/${t.id}`)}
                  className="flex w-full items-center gap-3 rounded-3xl bg-white px-3 py-3 text-left ring-1 ring-black/10 transition active:scale-[0.99]"
                >
                  <img
                    src={`/art/bharat/${t.id}-t.webp`}
                    alt=""
                    width={60}
                    height={60}
                    loading="lazy"
                    className="size-[60px] shrink-0 rounded-2xl object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.4rem] leading-tight text-warm">{hi ? t.name.hi : t.name.en}</span>
                    <span className="block truncate text-[0.98rem] text-dim">{hi ? t.place.hi : t.place.en}</span>
                  </span>
                  <span aria-hidden="true" className="text-3xl text-flame">
                    ›
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
