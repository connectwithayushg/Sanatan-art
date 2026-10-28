import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { DEITIES, deityOfDay } from '../../content/deities'
import { nextFestival, todayIST } from '../../content/festivals'
import { formatClock } from '../../lib/format'
import { dayPanchang } from '../../lib/panchang/daily'
import { nextEkadashi } from '../../lib/panchang/month'
import { useDailyShloka } from '../../lib/dailyShloka'
import { useStored } from '../../lib/useStored'
import { useCity } from '../../ui/CityPicker'
import { useSuprabhat } from '../greet/useSuprabhat'
import { CityChip, HeroShrine } from '../home/parts'
import { DhyanBar } from './DhyanBar'
import { MantraCard } from './MantraCard'

type Tab = 'home' | 'aaj' | 'tyohar' | 'mandir' | 'aarti' | 'path' | 'profile'
type Go = (tab: Tab, sub?: string) => void

const DEV = '०१२३४५६७८९'
const num = (n: number | string, hi: boolean) => (hi ? String(n).replace(/\d/g, (d) => DEV[+d]) : String(n))

/** The sun's path from sunrise to sunset, with a marker where the sun is now. */
function SunArc({ progress, label }: { progress: number; label: string }) {
  const at = (t: number) => ({ x: (1 - t) ** 2 * 16 + 2 * (1 - t) * t * 140 + t * t * 264, y: (1 - t) ** 2 * 84 + 2 * (1 - t) * t * -24 + t * t * 84 })
  const steps = Array.from({ length: 41 }, (_, i) => at((i / 40) * progress))
  const full = Array.from({ length: 41 }, (_, i) => at(i / 40))
  const line = (pts: { x: number; y: number }[]) => pts.map((q, i) => `${i ? 'L' : 'M'}${q.x.toFixed(1)} ${q.y.toFixed(1)}`).join('')
  const now = at(progress)
  return (
    <svg className="h4-arc" viewBox="0 0 280 100" role="img" aria-label={label}>
      <path d={line(full)} fill="none" stroke="#e1b98c" strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
      <path d="M8 88H272" stroke="#eaddcb" strokeWidth="1" />
      <path d={line(steps)} fill="none" stroke="#d9600b" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx={now.x} cy={now.y} r="11" fill="#f6a24a" opacity=".3" />
      <circle cx={now.x} cy={now.y} r="6.5" fill="#e9731a" stroke="#fff" strokeWidth="1.5" />
      <circle cx="16" cy="84" r="2.6" fill="#d9600b" />
      <circle cx="264" cy="84" r="2.6" fill="#d9600b" />
    </svg>
  )
}

/** Aaj is the daily reading page: today's panchang, the verse, the day's shrine and card, in the same language as Home. */
export function AajToday({ go }: { go: Go }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const l = hi ? 'hi' : 'en'
  const L = hi ? 0 : 1
  const [city] = useCity()
  const [last] = useStored('lastDeity', '')
  const [dhyanTrigger, setDhyanTrigger] = useState(0)
  const today = todayIST()
  const date = new Date(Date.UTC(today.y, today.m - 1, today.d, 6))
  const p = useMemo(() => dayPanchang(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const deity = DEITIES.find((d) => d.id === last) ?? deityOfDay(date.getUTCDay())
  const aarti = AARTIS.find((a) => a.id === deity.aarti)
  const next = nextFestival()
  const ekadashi = useMemo(() => nextEkadashi(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const shloka = useDailyShloka()
  const card = useSuprabhat()
  const loc = hi ? 'hi-IN' : 'en-IN'
  const on = (o: { y: number; m: number; d: number }, opts: Intl.DateTimeFormatOptions) => new Date(Date.UTC(o.y, o.m - 1, o.d, 6)).toLocaleDateString(loc, { ...opts, timeZone: 'Asia/Kolkata' })
  const nowMs = Date.now()
  const progress = p.sunrise && p.sunset ? Math.min(1, Math.max(0, (nowMs - p.sunrise.getTime()) / (p.sunset.getTime() - p.sunrise.getTime()))) : 0
  const paksha = t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')
  const monthYear = `${on(today, { month: 'long' })} ${num(today.y, hi)}`
  return (
    <main className="tab-page h4-page h4-aaj">
      <section className="h4-dateblock">
        <b aria-hidden="true">{num(today.d, hi)}</b>
        <div><h1>{monthYear}</h1><p>{on(today, { weekday: 'long' })}</p></div>
        <CityChip />
      </section>
      <div className="h4-body">
        {next && <button className="h4-note" onClick={() => go('tyohar', next.id)}>{t('h4_nextFestival', { name: hi ? next.name_hi : next.name_en, date: new Date(next.date + 'T12:00:00+05:30').toLocaleDateString(loc, { day: 'numeric', month: 'long', timeZone: 'Asia/Kolkata' }) })}</button>}

        <button className="h4-panchang" onClick={() => go('aaj', 'panchang')} aria-label={t('q_panchang')}>
          <span className="h4-panchang-head">{t('h4_masaLine', { masa: p.masa.name[L], paksha })}</span>
          <span className="h4-panchang-main">
            <span className="h4-tithi"><strong>{p.tithi.name[L]}</strong><small>{t('h4_todayPanchang')}</small></span>
            <SunArc progress={progress} label={`${t('sunrise')} ${formatClock(p.sunrise, i18n.language)}, ${t('sunset')} ${formatClock(p.sunset, i18n.language)}`} />
            <span className="h4-times">
              <span><small>{t('sunrise')}</small><strong>{formatClock(p.sunrise, i18n.language)}</strong></span>
              <span><small>{t('h4_now')}</small><strong>{formatClock(new Date(nowMs), i18n.language)}</strong></span>
              <span><small>{t('sunset')}</small><strong>{formatClock(p.sunset, i18n.language)}</strong></span>
            </span>
          </span>
          <span className="h4-panchang-foot"><small>{t('rahuKaal')}</small><strong>{p.rahuKaal ? `${formatClock(p.rahuKaal.start, i18n.language)} – ${formatClock(p.rahuKaal.end, i18n.language)}` : '–'}</strong></span>
        </button>

        <section className="h4-card">
          <header><img src="/art/home/book.webp" alt="" /><div><h2>{t('h4_todayShloka')}</h2><p>{t('gitaRef', { ch: num(shloka.chapter, hi), v: num(shloka.verse, hi) })}</p></div></header>
          <div className="h4-card-body"><p lang="sa" className="h4-verse">{shloka.text}</p><hr /><p>{shloka.meaning[l]}</p></div>
        </section>

        <h2 className="h4-title">{t('h4_todayMandir')}</h2>
        <HeroShrine deity={deity} onDarshan={() => go('mandir', deity.id)} small mantra />

        <h2 className="h4-title">{t('h4_todayCard')}</h2>
        <section className="h4-greet">
          <div className="h4-greet-preview">{card.preview ? <img src={card.preview} alt={`${card.title} · ${hi ? card.deity.name_hi : card.deity.name_en}`} /> : <span role="status">{t('h4_loadingCard')}</span>}</div>
          <div><strong>{card.title}</strong><p>{card.close}</p><button className="h4-orange" onClick={() => go('aaj', 'greet')}>{t('h4_makeCard')} <span aria-hidden="true">→</span></button></div>
        </section>

        <ul className="h4-list h4-list-white">
          {aarti && <li><button onClick={() => go('aarti', aarti.id)}><span>{t('h4_aartiToday')}<small>{hi ? aarti.title_hi : aarti.title_en}</small></span><span aria-hidden="true">›</span></button></li>}
          <li><button onClick={() => go('aaj', 'calendar')}><span>{t('cal_title')}{ekadashi && <small>{t('cal_nextEkadashi', { date: on(ekadashi, { day: 'numeric', month: 'long' }) })}</small>}</span><span aria-hidden="true">›</span></button></li>
        </ul>

        <h2 className="h4-title">{t('h4_whatToDo')}</h2>
        <ul className="h4-actions">
          <li><button onClick={() => go('mandir', deity.id)}>{t('h4_lightDiya')}</button></li>
          <li><button onClick={() => go('mandir', deity.id)}>{t('h4_japa')}</button></li>
          <li><button onClick={() => setDhyanTrigger((n) => n + 1)}>{t('dhyan')}</button></li>
        </ul>
      </div>
      <MantraCard />
      <DhyanBar trigger={dhyanTrigger} bare />
    </main>
  )
}
