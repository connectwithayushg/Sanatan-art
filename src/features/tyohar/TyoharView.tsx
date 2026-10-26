import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formatClock } from '../../lib/format'
import { diwaliMuhurat } from '../../lib/panchang/diwali'
import { festivalTimes, karwaChauthTimes } from '../../lib/panchang/festivalTimes'
import type { City } from '../../lib/panchang/astro'
import { useCity } from '../../ui/CityPicker'
import { FESTIVALS, daysUntil, festivalToday, type Festival } from '../../content/festivals'
import { DiwaliFestival, type DiwaliPart } from './DiwaliFestival'
import { KarwaChauth, type KcPart } from './KarwaChauth'
import { FestivalDay, type DayPart } from './FestivalDay'
import { FESTIVAL_PAGES } from '../../content/festivalPages'
import { PageHeading, SectionHeading } from '../../ui/PageHeading'

/** Festival list, or one festival's page when `festival` is set. */
export function TyoharView({ festival, part, open, openAarti, onCalendar }: { festival: string | null; part: string | null; open: (path: string) => void; openAarti: (id: string) => void; onCalendar?: () => void }) {
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

  return <FestivalList open={open} onCalendar={onCalendar} />
}

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

/** All existing festivals and their detail routes, in the selected photo-card layout. */
function FestivalList({ open, onCalendar }: { open: (path: string) => void; onCalendar?: () => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const lang = hi ? 'hi-IN' : 'en-IN'
  const [city] = useCity()
  const celebration = festivalToday()
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string[]>([])
  const upcoming = FESTIVALS.filter((f) => daysUntil(f) >= 0)
  const [next, ...rest] = upcoming
  const key = useMemo(() => next ? keyTime(next, city) : null, [next, city])
  const term = query.trim().toLowerCase()
  const items = term ? FESTIVALS.filter((f) => `${f.name_hi} ${f.name_en} ${f.id}`.toLowerCase().includes(term)) : rest
  const groups = new Map<string, Festival[]>()
  for (const f of items) {
    const month = f.date.slice(0, 7)
    groups.set(month, [...(groups.get(month) ?? []), f])
  }
  const date = (f: Festival) => new Date(f.date + 'T12:00:00+05:30')
  const name = (f: Festival) => hi ? f.name_hi : f.name_en
  const photo = (f: Festival) => f.id === 'karwa-chauth' ? '/art/redesign/karwa-chauth.webp' : f.art
  return (
    <main className="tab-page festival-library">
      <PageHeading title={t('festivals')} subtitle={t('r_festivalIntro')} image="/art/redesign/aarti-banner.webp" />
      <div className="page-content">
        <label className="library-search"><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('r_festivalSearch')} aria-label={t('r_festivalSearch')} />{query && <button onClick={() => setQuery('')} aria-label={t('close')}>×</button>}</label>
        {celebration && !term && <button className="festival-today-entry" onClick={() => open(`${celebration.id}/card`)}><img src={photo(celebration)} alt="" /><span><strong>{t('festivalToday')} · {name(celebration)}</strong><small>{t('ft_greet')} →</small></span></button>}
        {next && !term && <section className="festival-feature">
          <div className="festival-next">
            <div className="festival-date"><span>{t('r_nextFestival')}</span><b>{date(next).toLocaleDateString(lang, { day: 'numeric', timeZone: 'Asia/Kolkata' })}</b><strong>{date(next).toLocaleDateString(lang, { month: 'long', timeZone: 'Asia/Kolkata' })}</strong><span>{date(next).toLocaleDateString(lang, { weekday: 'long', timeZone: 'Asia/Kolkata' })}</span><span className="countdown-chip">{daysUntil(next) === 0 ? t('festivalToday') : t('festivalIn', { count: daysUntil(next) })}</span><button className="primary-action" onClick={() => open(next.id)}>{t('r_preparation')} →</button></div>
            <button className="festival-feature-photo" onClick={() => open(next.id)}><img src={photo(next)} alt="" /><h2>{name(next)}</h2></button>
          </div>
          {key && <div className="festival-key-time"><span>{t(key.label)}</span><strong>{formatClock(key.start, i18n.language)}{key.start.getTime() !== key.end.getTime() && ` – ${formatClock(key.end, i18n.language)}`}</strong></div>}
          <div className="detail-actions"><button className="secondary-action" onClick={() => open(`${next.id}/puja`)}>{t('vidhiTitle')}</button><button className="secondary-action" onClick={() => open(`${next.id}/katha`)}>{t('katha')}</button></div>
          <button className="festival-greeting" onClick={() => open(`${next.id}/card`)}>{t('ft_greet')} →</button>
        </section>}
        {[...groups].map(([month, all]) => {
          const title = new Date(month + '-01T12:00:00+05:30').toLocaleDateString(lang, { month: 'long', timeZone: 'Asia/Kolkata' })
          const full = expanded.includes(month) || !!term
          return <section key={month}><SectionHeading title={t('r_festivalMonth', { month: title })} onAll={all.length > 4 ? () => setExpanded((value) => full ? value.filter((m) => m !== month) : [...value, month]) : undefined} expanded={full} /><ul className="photo-grid festival-grid">{(full ? all : all.slice(0, 4)).map((f) => <li key={f.id}><button className="photo-tile festival-tile" onClick={() => open(f.id)}><img src={photo(f)} alt="" loading="lazy" /><span>{name(f)}<span aria-hidden="true">›</span></span><small>{date(f).toLocaleDateString(lang, { day: 'numeric', month: 'long', timeZone: 'Asia/Kolkata' })}</small><small>{hi ? f.line_hi : f.line_en}</small></button></li>)}</ul></section>
        })}
        {!next && !term && <p className="empty-state">{t('ft_noMore')}</p>}
        {term && !items.length && <p className="empty-state">{t('searchNone')}</p>}
        <button className="calendar-entry" onClick={onCalendar}>{t('r_fullCalendar')} <span aria-hidden="true">→</span></button>
      </div>
    </main>
  )
}
