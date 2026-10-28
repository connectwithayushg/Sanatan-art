import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { FESTIVALS, daysUntil, todayIST } from '../../content/festivals'
import { TEMPLES } from '../../content/bharatTemples'
import { AARTIS } from '../../content/aartis'
import { dayPanchang } from '../../lib/panchang/daily'
import { useStored } from '../../lib/useStored'
import { useCity } from '../../ui/CityPicker'
import { DhyanBar } from '../aaj/DhyanBar'
import { CityLine, HeroShrine, PhotoTile } from './parts'

type Tab = 'home' | 'aaj' | 'tyohar' | 'mandir' | 'aarti' | 'path' | 'profile'
type Go = (tab: Tab, sub?: string) => void

/** Home is the doorway: today's darshan, the four daily shortcuts, coming festivals and everything else in the app. Option 4. */
export function HomeView({ go }: { go: Go }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const L = hi ? 0 : 1
  const [last] = useStored('lastDeity', '')
  const [dhyanTrigger, setDhyanTrigger] = useState(0)
  const [city] = useCity()
  const today = todayIST()
  const date = new Date(Date.UTC(today.y, today.m - 1, today.d, 6))
  const p = useMemo(() => dayPanchang(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const deity = DEITIES.find((d) => d.id === last) ?? deityOfDay(date.getUTCDay())
  const aarti = AARTIS.find((a) => a.id === deity.aarti)
  const upcoming = FESTIVALS.filter((f) => daysUntil(f) >= 0)
  const [next, ...after] = upcoming
  const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) => new Date(iso + 'T12:00:00+05:30').toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { ...opts, timeZone: 'Asia/Kolkata' })
  const name = (f: { name_hi: string; name_en: string }) => (hi ? f.name_hi : f.name_en)
  const photo = (id: string, art: string) => (id === 'karwa-chauth' ? '/art/redesign/karwa-chauth.webp' : art)
  const dateLine = date.toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Kolkata' })
  const shortcuts = [
    { label: t('q_panchang_short'), img: '/art/home/calendar.webp', action: () => go('aaj') },
    { label: t('nav_aarti'), img: '/art/home/lamp.webp', action: () => go('aarti') },
    { label: t('nav_path'), img: '/art/home/book.webp', action: () => go('path') },
    { label: t('dhyan'), img: '/art/home/mala.webp', action: () => setDhyanTrigger((n) => n + 1) },
  ]
  return (
    <main className="tab-page h4-page">
      <CityLine date={`${dateLine} · ${p.masa.name[L]}, ${t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')} ${p.tithi.name[L]}`} />
      <div className="h4-body">
        <HeroShrine deity={deity} onDarshan={() => go('mandir', deity.id)} />
        <ul className="h4-grid h4-shortcuts">{shortcuts.map((s) => <li key={s.label}><PhotoTile label={s.label} img={s.img} onClick={s.action} /></li>)}</ul>
        {aarti && <button className="h4-row" onClick={() => go('aarti', aarti.id)}><img src="/art/home/lamp.webp" alt="" /><span><strong>{hi ? aarti.title_hi : aarti.title_en}</strong><small>{t('h4_todayAarti')}</small></span><span className="h4-arrow" aria-hidden="true">›</span></button>}

        <div className="section-heading"><h2>{t('q_upcoming')}</h2><button type="button" onClick={() => go('tyohar')}>{t('h4_allFestivals')} <span aria-hidden="true">→</span></button></div>
        {next && <button className="h4-feature" onClick={() => go('tyohar', next.id)}><img src={photo(next.id, next.art)} alt="" /><span><small>{daysUntil(next) === 0 ? t('festivalToday') : t('festivalIn', { count: daysUntil(next) })}</small><strong>{name(next)}</strong><span>{fmt(next.date, { day: 'numeric', month: 'long', weekday: 'long' })}</span><b>{t('h4_prepare')} →</b></span></button>}
        {after.length > 0 && <ul className="h4-strip">{after.slice(0, 4).map((f) => <li key={f.id}><button onClick={() => go('tyohar', f.id)}><img src={photo(f.id, f.art)} alt="" loading="lazy" /><strong>{name(f)}</strong><small>{fmt(f.date, { day: 'numeric', month: 'long' })}</small></button></li>)}</ul>}

        <h2 className="h4-title">{t('h4_everything')}</h2>
        <ul className="h4-grid">
          <li><PhotoTile label={t('h4_myMandir')} img="/art/home/mandir.webp" onClick={() => go('mandir')} tall /></li>
          <li><PhotoTile label={t('h4_aartiBhajan')} img="/art/home/lamp.webp" onClick={() => go('aarti')} tall /></li>
          <li><PhotoTile label={t('nav_path')} img="/art/home/book.webp" onClick={() => go('path')} tall /></li>
          <li><PhotoTile label={t('h4_greetCard')} img="/art/home/greeting.webp" onClick={() => go('aaj', 'greet')} tall /></li>
        </ul>
        <button className="h4-wide" onClick={() => go('mandir', 'bharat')}><img src="/art/home/temple.webp" alt="" /><span><strong>{t('h4_bharat')}</strong><small>{t('h4_bharatLine', { count: TEMPLES.length })} →</small></span></button>
        <ul className="h4-list">
          <li><button onClick={() => go('aaj', 'calendar')}><span>{t('cal_title')}</span><span aria-hidden="true">›</span></button></li>
          <li><button onClick={() => go('profile', 'sanatan')}><span>{t('homeSanatanTitle')}</span><span aria-hidden="true">›</span></button></li>
          <li><button disabled><span>{t('h4_wallpaper')}<small>{t('h4_soon')}</small></span></button></li>
        </ul>
      </div>
      <DhyanBar trigger={dhyanTrigger} bare />
    </main>
  )
}
