import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { DEITIES, deityOfDay } from '../../content/deities'
import { FESTIVALS, daysUntil, todayIST } from '../../content/festivals'
import { CHAPTERS } from '../../content/learn'
import { formatClock } from '../../lib/format'
import { dayPanchang } from '../../lib/panchang/daily'
import { useDailyShloka } from '../../lib/dailyShloka'
import { useCity } from '../../ui/CityPicker'
import { useStored } from '../../lib/useStored'
import { PageHeading, SectionHeading } from '../../ui/PageHeading'
import { DeityPhoto } from '../../ui/DeityPhoto'
import { MonthCard } from './MonthCard'
import { BharatHomeCard } from '../bharat/BharatHomeCard'
import { MantraCard } from './MantraCard'
import { LearnPic } from '../profile/ProfileView'
import { DhyanBar } from './DhyanBar'

type Tab = 'aaj' | 'tyohar' | 'mandir' | 'aarti' | 'path' | 'profile'
type Go = (tab: Tab, sub?: string) => void

/** Live daily information surrounds the chosen option-4 darshan and four photo tiles. */
export function QuickHome({ go }: { go: Go }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const l = hi ? 'hi' : 'en'
  const L = hi ? 0 : 1
  const [learnRead] = useStored<string[]>('learnRead', [])
  const [last] = useStored('lastDeity', '')
  const [dhyanTrigger, setDhyanTrigger] = useState(0)
  const [city] = useCity()
  const today = todayIST()
  const date = new Date(Date.UTC(today.y, today.m - 1, today.d, 6))
  const p = useMemo(() => dayPanchang(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const dayDeity = deityOfDay(date.getUTCDay())
  const deity = DEITIES.find((d) => d.id === last) ?? dayDeity
  const picture = deity.week?.[date.getUTCDay()] ?? deity.cutout ?? deity.photo
  const shloka = useDailyShloka()
  const upcoming = FESTIVALS.filter((f) => daysUntil(f) >= 0)
  const tiles = [
    { label: t('q_panchang'), img: '/art/bharat/kedarnath.webp', action: () => go('aaj', 'panchang') },
    { label: t('nav_aarti'), img: '/art/redesign/aarti-banner.webp', action: () => go('aarti') },
    { label: t('nav_path'), img: '/art/redesign/path-banner.webp', action: () => go('path') },
    { label: t('dhyan'), img: '/art/deity/shiv-home.webp', action: () => setDhyanTrigger((n) => n + 1) },
  ]
  return (
    <main className="tab-page home-page">
      <section className="panchang-summary" aria-label={t('q_panchang')}>
        <p>{date.toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Kolkata' })}</p>
        <h2>{p.masa.name[L]} · {t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')} {p.tithi.name[L]}</h2>
        <button className="panchang-times" onClick={() => go('aaj', 'panchang')}>
          <span><small>{t('sunrise')}</small><strong>{formatClock(p.sunrise, i18n.language)}</strong></span>
          <span><small>{t('sunset')}</small><strong>{formatClock(p.sunset, i18n.language)}</strong></span>
          <span><small>{t('rahuKaal')}</small><strong>{p.rahuKaal ? `${formatClock(p.rahuKaal.start, i18n.language)} – ${formatClock(p.rahuKaal.end, i18n.language)}` : '–'}</strong></span>
        </button>
      </section>
      <PageHeading title={t('r_goodMorning')} subtitle={t('r_dailyCompanion')} image="/art/redesign/aarti-banner.webp" />
      <div className="page-content">
        <section className="home-darshan">
          <div><small>{t('q_darshan')}</small><h2>{hi ? deity.name_hi : deity.name_en}</h2><button className="primary-action" onClick={() => go('mandir', deity.id)}>{t('r_darshanAction')} →</button></div>
          <img src={picture} alt={hi ? deity.name_hi : deity.name_en} />
        </section>
        <ul className="photo-grid home-tiles">{tiles.map((tile) => <li key={tile.label}><button className="photo-tile" onClick={tile.action}><img src={tile.img} alt="" /><span>{tile.label}<span aria-hidden="true">›</span></span></button></li>)}</ul>
        <button className="reading-row home-aarti" onClick={() => go('aarti', deity.aarti)}><DeityPhoto id={deity.id} /><span><strong>{hi ? deity.name_hi : deity.name_en}</strong><small>{t('r_readAarti')}</small></span><span className="row-arrow" aria-hidden="true">›</span></button>
        <SectionHeading title={t('q_upcoming')} onAll={() => go('tyohar')} />
        <ul className="photo-grid">{upcoming.slice(0, 2).map((f) => <li key={f.id}><button className="photo-tile festival-tile" onClick={() => go('tyohar', f.id)}><img src={f.id === 'karwa-chauth' ? '/art/redesign/karwa-chauth.webp' : f.art} alt="" loading="lazy" /><span>{hi ? f.name_hi : f.name_en}<span aria-hidden="true">›</span></span><small>{daysUntil(f) === 0 ? t('festivalToday') : t('festivalIn', { count: daysUntil(f) })}</small></button></li>)}</ul>
        <SectionHeading title={t('cal_title')} onAll={() => go('aaj', 'calendar')} />
        <MonthCard onOpen={() => go('aaj', 'calendar')} onTemples={() => go('mandir', 'bharat')} />
      </div>
      <MantraCard />
      <section className="daily-shloka-card home-shloka"><h2>{t('verseOfDay')}</h2><p className="shloka-reference">{t('gitaRef', { ch: shloka.chapter, v: shloka.verse })}</p><p className="daily-verse">{shloka.text}</p><p>{shloka.meaning[l]}</p><button className="secondary-action" onClick={() => go('path', `gita/${shloka.chapter}`)}>{t('readChapter')} →</button></section>
      <DhyanBar trigger={dhyanTrigger} />
      <BharatHomeCard onOpen={() => go('mandir', 'bharat')} />
      <div className="page-content"><button className="calendar-entry" onClick={() => go('aaj', 'greet')}><span>{t('r_morningCard')}</span><span aria-hidden="true">→</span></button><SectionHeading title={t('allAartis')} onAll={() => go('aarti')} /><ul className="reading-list">{AARTIS.slice(0, 4).map((a) => <li key={a.id}><button className="reading-row" onClick={() => go('aarti', a.id)}><span><strong>{hi ? a.title_hi : a.title_en}</strong></span><span className="row-arrow" aria-hidden="true">›</span></button></li>)}</ul></div>
      {!CHAPTERS.every((c) => learnRead.includes(c.id)) && <section className="px-4 pt-6"><button onClick={() => go('profile', 'sanatan')} className="block w-full overflow-hidden rounded-2xl bg-white text-left"><LearnPic name="sanatan" className="rounded-none" /><span className="block p-4"><strong className="block text-xl">{t('homeSanatanTitle')}</strong><span>{t('homeSanatanLine')}</span></span></button></section>}
    </main>
  )
}
