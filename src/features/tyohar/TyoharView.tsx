import { useTranslation } from 'react-i18next'
import { formatClock } from '../../lib/format'
import { diwaliMuhurat } from '../../lib/panchang/diwali'
import { festivalTimes, karwaChauthTimes } from '../../lib/panchang/festivalTimes'
import type { City } from '../../lib/panchang/astro'
import { useCity } from '../../ui/CityPicker'
import { FESTIVALS, daysUntil, type Festival } from '../../content/festivals'
import { DiwaliFestival, type DiwaliPart } from './DiwaliFestival'
import { KarwaChauth, type KcPart } from './KarwaChauth'
import { FestivalDay, type DayPart } from './FestivalDay'
import { FESTIVAL_PAGES } from '../../content/festivalPages'

/** Festival list, or one festival's page when `festival` is set. */
export function TyoharView({ festival, part, open, openAarti }: { festival: string | null; part: string | null; open: (path: string) => void; openAarti: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'

  if (festival === 'diwali') return <DiwaliFestival part={(part as DiwaliPart) ?? 'muhurat'} open={(p) => open(`diwali/${p}`)} />
  if (festival === 'karwa-chauth') return <KarwaChauth part={(part as KcPart) ?? 'vrat'} open={(p) => open(`karwa-chauth/${p}`)} />
  const page = festival ? FESTIVAL_PAGES[festival] : undefined
  if (page) return <FestivalDay page={page} part={(part as DayPart) ?? 'din'} open={(p) => open(`${page.id}/${p}`)} openAarti={openAarti} />
  const f = FESTIVALS.find((x) => x.id === festival)
  if (f) {
    return (
      <main className="mx-auto max-w-xl px-5 pt-6 text-center">
        <h1 className="font-display text-[2.4rem] text-warm">{hi ? f.name_hi : f.name_en}</h1>
        <p className="mt-2 text-lg text-dim">{t('comingSoon')}</p>
        <button className="btn btn-ghost mt-6" onClick={() => open('')}>{t('back')}</button>
      </main>
    )
  }

  return <FestivalList open={open} />
}

const MONTH_HI = ['जन', 'फ़र', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुल', 'अग', 'सित', 'अक्टू', 'नवं', 'दिस']
const MONTH_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** The one time people open the page for: moonrise for Karwa Chauth, the lakshmi puja for Diwali, otherwise the festival's first muhurat. */
function keyTime(f: Festival, city: City): { label: string; start: Date; end: Date } | null {
  if (f.id === 'karwa-chauth') {
    const m = karwaChauthTimes(city, f.date)?.moonrise
    return m ? { label: 'kc_moonrise', start: m, end: m } : null
  }
  if (f.id === 'diwali') {
    const mu = diwaliMuhurat(city)
    return mu ? { label: 'muhuratTitle', ...mu.puja } : null
  }
  return festivalTimes(f.id, city, f.date)[0] ?? null
}

/** The festival tab: the next festival as a large card with its countdown, then the rest in date order, by month. */
function FestivalList({ open }: { open: (path: string) => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const hi = lang === 'hi'
  const [city] = useCity()
  const upcoming = FESTIVALS.filter((f) => daysUntil(f) >= 0)
  const [next, ...rest] = upcoming
  const key = next ? keyTime(next, city) : null
  const loc = hi ? 'hi-IN' : 'en-IN'
  const dateOf = (f: Festival) => new Date(f.date + 'T06:00:00Z')
  const months: { label: string; items: Festival[] }[] = []
  for (const f of rest) {
    const label = dateOf(f).toLocaleDateString(loc, { month: 'long', year: 'numeric', timeZone: 'UTC' })
    const last = months[months.length - 1]
    if (last?.label === label) last.items.push(f)
    else months.push({ label, items: [f] })
  }
  const chip = (f: Festival) => {
    const d = daysUntil(f)
    return d === 0 ? t('festivalToday') : t('festivalIn', { count: d })
  }

  return (
    <main className="mx-auto max-w-xl pb-8">
      <h1 className="px-4 pt-4 font-display text-[2rem] leading-tight text-warm">{t('festivals')}</h1>
      <p className="px-4 text-[1.05rem] text-dim">{t('festivalsIntro')}</p>

      {next && (
        <section className="mx-4 mt-4 overflow-hidden rounded-3xl bg-night2/80 ring-1 ring-black/10">
          <button onClick={() => open(next.id)} className="relative block w-full text-left" aria-label={hi ? next.name_hi : next.name_en}>
            <img src={next.art} alt="" width={960} height={540} className="block aspect-video w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-[#d9600b] px-3 py-0.5 text-[0.95rem] font-bold text-white">{chip(next)}</span>
          </button>
          <div className="px-4 pt-3">
            <h2 className="font-display text-[2rem] leading-tight text-warm">{hi ? next.name_hi : next.name_en}</h2>
            <p className="text-[1.05rem] text-dim">
              {dateOf(next).toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })}
              {FESTIVAL_PAGES[next.id] ? ` · ${FESTIVAL_PAGES[next.id].tithi[hi ? 'hi' : 'en']}` : ''}
            </p>
            {key && (
              <p className="mt-3 flex items-baseline justify-between gap-3 border-t border-black/10 pt-3">
                <span className="text-[1.05rem] text-dim">{t(key.label)}</span>
                <b className="text-[1.3rem] text-warm">
                  {key.start.getTime() === key.end.getTime() ? formatClock(key.start, lang) : `${formatClock(key.start, lang)} – ${formatClock(key.end, lang)}`}
                </b>
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-2 px-4 pt-3">
            <button className="btn btn-flame text-[1.1rem]" onClick={() => open(`${next.id}/puja`)}>
              {t('vidhiTitle')}
            </button>
            <button className="btn btn-ghost text-[1.1rem]" onClick={() => open(`${next.id}/katha`)}>
              {t('katha')}
            </button>
          </div>
          <button onClick={() => open(`${next.id}/card`)} className="block min-h-12 w-full text-center text-[1rem] font-semibold text-dim hover:text-flame">
            {t('ft_greet')} ›
          </button>
        </section>
      )}

      {months.map((m) => (
        <section key={m.label}>
          <h2 className="mx-4 mt-6 mb-2 text-[1.05rem] font-bold tracking-wide text-flame">{m.label}</h2>
          <ul className="mx-4 grid gap-2.5">
            {m.items.map((f) => (
              <li key={f.id}>
                <button onClick={() => open(f.id)} className="flex w-full items-center gap-3 rounded-2xl bg-night2/80 p-2.5 text-left ring-1 ring-black/10 transition active:scale-[0.99]">
                  <img src={f.art} alt="" width={68} height={68} loading="lazy" className="h-[4.25rem] w-[4.25rem] shrink-0 rounded-xl object-cover" />
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.35rem] leading-tight text-warm">{hi ? f.name_hi : f.name_en}</span>
                    <span className="block text-[1rem] text-warm/85">{dateOf(f).toLocaleDateString(loc, { weekday: 'long', timeZone: 'UTC' })}</span>
                    <span className="block text-[0.95rem] leading-snug text-dim">{hi ? f.line_hi : f.line_en}</span>
                  </span>
                  <span className="shrink-0 rounded-xl bg-[#fff3e0] px-2.5 py-1.5 text-center leading-tight text-[#b34700]">
                    <b className="block text-[1.3rem]">{dateOf(f).toLocaleDateString(loc, { day: 'numeric', timeZone: 'UTC' })}</b>
                    <small className="text-[0.8rem] font-semibold">{(hi ? MONTH_HI : MONTH_EN)[dateOf(f).getUTCMonth()]}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {!next && <p className="mt-8 text-center text-lg text-dim">{t('ft_noMore')}</p>}
    </main>
  )
}
