import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FESTIVALS, todayIST } from '../../content/festivals'
import { formatClock } from '../../lib/format'
import { dayPanchang } from '../../lib/panchang/daily'
import { monthMasas, monthPanchang, type Mark } from '../../lib/panchang/month'
import { CityPicker, useCity } from '../../ui/CityPicker'

const WEEK = [
  ['रवि', 'Sun'],
  ['सोम', 'Mon'],
  ['मंगल', 'Tue'],
  ['बुध', 'Wed'],
  ['गुरु', 'Thu'],
  ['शुक्र', 'Fri'],
  ['शनि', 'Sat'],
]
const DEV = '०१२३४५६७८९'
const num = (n: number, hi: boolean) => (hi ? String(n).replace(/\d/g, (d) => DEV[+d]) : String(n))
const pad = (n: number) => String(n).padStart(2, '0')

/** How each vrat shows in a date cell, and its name in the month's list. */
const MARK_STYLE: Record<Mark, { dot: string; key: string }> = {
  purnima: { dot: 'bg-[#f2b400]', key: 'cal_purnima' },
  amavasya: { dot: 'bg-[#2b1a10]', key: 'cal_amavasya' },
  ekadashi: { dot: 'bg-[#1d7a43]', key: 'ekadashi' },
  pradosh: { dot: 'bg-[#5b5bd6]', key: 'pradoshVrat' },
  sankashti: { dot: 'bg-[#c2410c]', key: 'sankashti' },
  vinayaki: { dot: 'bg-[#c2410c]', key: 'vinayaki' },
}

/** A month of the Hindu calendar, like the wall calendar in the kitchen: dates, tithis and vrat days, for the chosen city. */
export function CalendarView({ openFestival }: { openFestival: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const hi = lang === 'hi'
  const L = hi ? 0 : 1
  const [city] = useCity()
  const today = todayIST()
  const [ym, setYm] = useState({ y: today.y, m: today.m })
  const [sel, setSel] = useState<number>(today.d)

  const days = useMemo(() => monthPanchang(city, ym.y, ym.m), [city, ym.y, ym.m])
  const masas = useMemo(() => monthMasas(city, ym.y, ym.m), [city, ym.y, ym.m])
  const selDay = Math.min(sel, days.length)
  const p = useMemo(() => dayPanchang(city, ym.y, ym.m, selDay), [city, ym.y, ym.m, selDay])

  const festOn = (d: number) => FESTIVALS.find((f) => f.date === `${ym.y}-${pad(ym.m)}-${pad(d)}`)
  const isToday = (d: number) => ym.y === today.y && ym.m === today.m && d === today.d
  const shift = (k: number) => {
    const date = new Date(Date.UTC(ym.y, ym.m - 1 + k, 1))
    setYm({ y: date.getUTCFullYear(), m: date.getUTCMonth() + 1 })
    setSel(1)
  }
  const monthName = new Date(Date.UTC(ym.y, ym.m - 1, 15)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { month: 'long', year: 'numeric' })
  const lead = days[0]?.weekday ?? 0
  const sd = days[selDay - 1]
  const selFest = festOn(selDay)

  const markName = (m: Mark) => t(MARK_STYLE[m].key)
  const events = days.flatMap((d) => {
    const f = festOn(d.d)
    return [...(f ? [{ d: d.d, name: hi ? f.name_hi : f.name_en, fest: f.id, dot: 'bg-flame' }] : []), ...d.marks.map((m) => ({ d: d.d, name: markName(m), fest: null as string | null, dot: MARK_STYLE[m].dot }))]
  })

  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <div className="flex items-center gap-2 pt-2">
        <button onClick={() => history.back()} className="h-11 shrink-0 rounded-full border-[1.5px] border-dim/50 px-4 text-[0.95rem] font-semibold text-warm">
          ‹ {t('nav_aaj')}
        </button>
        <h1 className="min-w-0 flex-1 truncate text-right font-display text-[1.4rem] text-warm">{t('cal_title')}</h1>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white p-2 ring-1 ring-black/10">
        <button onClick={() => shift(-1)} aria-label={t('cal_prev')} className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-2xl font-bold text-flame active:scale-95">
          ‹
        </button>
        <div className="min-w-0 flex-1 text-center">
          <p className="text-[1.15rem] font-bold leading-tight text-warm">{monthName}</p>
          <p className="truncate text-[0.85rem] text-dim">{masas.map((x) => x.name[L]).join(' – ')}</p>
        </div>
        <button onClick={() => shift(1)} aria-label={t('cal_next')} className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-2xl font-bold text-flame active:scale-95">
          ›
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between text-[0.9rem]">
        <span className="text-dim">
          <CityPicker />
        </span>
        {!(ym.y === today.y && ym.m === today.m) && (
          <button
            onClick={() => {
              setYm({ y: today.y, m: today.m })
              setSel(today.d)
            }}
            className="h-9 rounded-full bg-flame px-4 text-[0.9rem] font-bold text-ember"
          >
            {t('cal_today')}
          </button>
        )}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1 text-center" role="grid" aria-label={monthName}>
        {WEEK.map(([h, e], i) => (
          <div key={e} className={`pb-1 text-[0.78rem] font-bold ${i === 0 ? 'text-[#c62828]' : 'text-dim'}`}>
            {hi ? h : e}
          </div>
        ))}
        {Array.from({ length: lead }, (_, i) => (
          <div key={`e${i}`} />
        ))}
        {days.map((d) => {
          const f = festOn(d.d)
          const on = d.d === selDay
          const now = isToday(d.d)
          const tn = ((d.tithi.n - 1) % 15) + 1
          return (
            <button
              key={d.d}
              onClick={() => setSel(d.d)}
              aria-pressed={on}
              aria-label={`${d.d}, ${d.tithi.name[L]}${f ? ', ' + (hi ? f.name_hi : f.name_en) : ''}`}
              className={`relative flex aspect-[4/5] flex-col items-center justify-start rounded-xl pt-1 transition ${
                on ? 'bg-flame text-ember' : f ? 'bg-[#fff1d6] ring-1 ring-flame/50' : 'bg-white ring-1 ring-black/5'
              } ${now && !on ? 'ring-2 ring-flame' : ''}`}
            >
              <span className={`text-[1.05rem] font-bold leading-tight ${on ? '' : d.weekday === 0 ? 'text-[#c62828]' : 'text-warm'}`}>{num(d.d, hi)}</span>
              <span className={`text-[0.68rem] leading-tight ${on ? 'text-ember/90' : 'text-dim'}`}>
                {d.tithi.n === 15 ? '○' : d.tithi.n === 30 ? '●' : `${d.tithi.paksha === 'shukla' ? (hi ? 'शु' : 'S') : hi ? 'कृ' : 'K'} ${num(tn, hi)}`}
              </span>
              <span className="absolute bottom-1 flex gap-0.5">
                {f && <i className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-white' : 'bg-flame'}`} />}
                {d.marks.map((m) => (
                  <i key={m} className={`h-1.5 w-1.5 rounded-full ${on ? 'bg-white' : MARK_STYLE[m].dot}`} />
                ))}
              </span>
            </button>
          )
        })}
      </div>
      <p className="mt-2 text-center text-[0.8rem] text-dim">{t('cal_tap')}</p>

      {/* The chosen day */}
      <section className="mt-3 rounded-3xl bg-white p-4 ring-1 ring-black/10">
        <p className="text-[0.85rem] font-semibold text-dim">
          {new Date(Date.UTC(ym.y, ym.m - 1, selDay, 6)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
        <h2 className="font-display text-[1.45rem] leading-tight text-warm">
          {p.masa.name[L]} {t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')} {p.tithi.name[L]}
        </h2>
        {(selFest || (sd?.marks.length ?? 0) > 0) && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {selFest && (
              <button onClick={() => openFestival(selFest.id)} className="h-9 rounded-full bg-flame px-3 text-[0.9rem] font-bold text-ember">
                {hi ? selFest.name_hi : selFest.name_en} ›
              </button>
            )}
            {sd?.marks.map((m) => (
              <span key={m} className="inline-flex h-9 items-center gap-1.5 rounded-full bg-black/5 px-3 text-[0.9rem] font-semibold text-warm">
                <i className={`h-2 w-2 rounded-full ${MARK_STYLE[m].dot}`} />
                {markName(m)}
              </span>
            ))}
          </div>
        )}
        <dl className="mt-3 grid grid-cols-2 gap-2 text-[0.9rem]">
          {(
            [
              [t('tithiShort'), `${p.tithi.name[L]}, ${t('tillTime', { time: formatClock(p.tithi.end, lang) })}`],
              [t('nakshatra'), p.nakshatra.name[L]],
              [t('sunrise'), formatClock(p.sunrise, lang)],
              [t('sunset'), formatClock(p.sunset, lang)],
            ] as const
          ).map(([k, v]) => (
            <div key={k} className="rounded-xl bg-night px-3 py-2">
              <dt className="text-[0.8rem] text-dim">{k}</dt>
              <dd className="font-semibold leading-snug text-warm">{v}</dd>
            </div>
          ))}
        </dl>
        {p.rahuKaal && (
          <p className="mt-2 rounded-xl bg-[#fdecea] px-3 py-2 text-[0.9rem] text-warm">
            <b className="text-[#c62828]">{t('rahuKaal')}</b> {formatClock(p.rahuKaal.start, lang)} – {formatClock(p.rahuKaal.end, lang)}
          </p>
        )}
      </section>

      {/* Everything this month, as a list */}
      <section className="mt-5">
        <h2 className="text-[1.05rem] font-bold text-warm">{t('cal_month')}</h2>
        <ul className="mt-2 overflow-hidden rounded-2xl bg-white ring-1 ring-black/10">
          {events.map((e, i) => (
            <li key={i} className="border-b border-black/5 last:border-0">
              <button onClick={() => (e.fest ? openFestival(e.fest) : setSel(e.d))} className="flex w-full items-center gap-3 px-3 py-2.5 text-left active:bg-black/5">
                <span className="w-16 shrink-0 text-[0.85rem] font-semibold text-dim">
                  {num(e.d, hi)} {new Date(Date.UTC(ym.y, ym.m - 1, e.d)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'short' })}
                </span>
                <i className={`h-2.5 w-2.5 shrink-0 rounded-full ${e.dot}`} />
                <span className={`min-w-0 flex-1 text-[0.95rem] ${e.fest ? 'font-bold text-flame' : 'font-semibold text-warm'}`}>{e.name}</span>
                {e.fest && <span className="text-flame">›</span>}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
