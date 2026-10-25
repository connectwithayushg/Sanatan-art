import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { DEITIES, deityOfDay } from '../../content/deities'
import { FESTIVALS, daysUntil, todayIST } from '../../content/festivals'
import { formatClock } from '../../lib/format'
import { dayPanchang } from '../../lib/panchang/daily'
import { CityPicker, useCity } from '../../ui/CityPicker'
import { PORTRAIT } from '../diwali/AartiView'
import { IconBell } from '../../ui/Ornaments'
import { MonthCard } from './MonthCard'
import { BharatHomeCard } from '../bharat/BharatHomeCard'
import { SuprabhatCard } from '../greet/SuprabhatCard'
import { MantraCard } from './MantraCard'
import { CHAPTERS } from '../../content/learn'
import { useStored } from '../../lib/useStored'
import { LearnPic } from '../profile/ProfileView'
import { DhyanBar } from './DhyanBar'

type Tab = 'aaj' | 'tyohar' | 'mandir' | 'aarti' | 'path' | 'profile'
type Go = (tab: Tab, sub?: string) => void

/** The aarti row uses Ayush's own photos where there is one; ram and govardhan keep their older picture until he has them. */
const AARTI_HOME: Record<string, string> = {
  ganesh: '/art/deity/ganesh-home.webp',
  lakshmi: '/art/deity/lakshmi-home.webp',
  jagdish: '/art/deity/vishnu-home.webp',
  shiv: '/art/deity/shiv-home.webp',
  hanuman: '/art/deity/hanuman-home.webp',
  ambe: '/art/deity/durga-home.webp',
  kunjbihari: '/art/deity/krishna-home.webp',
}

/** A picture for each festival banner. */
const FEST_PHOTO: Record<string, string> = {
  'karwa-chauth': '/art/photo/jJ_CskRaG3g.jpg',
  dhanteras: '/art/photo/LEwZuOq84Ww.jpg',
  'choti-diwali': '/art/photo/-32lKp1bi9k.jpg',
  diwali: '/art/photo/H4ilfu3vftk.jpg',
  govardhan: '/art/photo/bxYwhPIFOcA.jpg',
  'bhai-dooj': '/art/photo/xisPXJqwQkA.jpg',
}

/**
 * Home in the pattern of India's quick-commerce apps (Blinkit, Zepto, Instamart): the one answer people open the app
 * for sits in the yellow band, then a grid of equal tiles for what to do, festival banners, and picture grids.
 * One spacing step (16px sides, 24px between sections) and three text sizes keep it calm.
 */
export function QuickHome({ go }: { go: Go }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const hi = lang === 'hi'
  const [learnRead] = useStored<string[]>('learnRead', [])
  const L = hi ? 0 : 1
  const [city] = useCity()
  const today = todayIST()
  const p = useMemo(() => dayPanchang(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const upcoming = FESTIVALS.filter((f) => daysUntil(f) >= 0)
  const dayDeity = deityOfDay(new Date().getDay())

  const tiles: { label: string; img: string; onClick: () => void }[] = [
    { label: t('q_lightDiya'), img: '/art/thumb/H4ilfu3vftk.jpg', onClick: () => go('mandir', dayDeity.id) },
    { label: t('q_todayAarti'), img: dayDeity.home ?? dayDeity.thumb, onClick: () => go('aarti', dayDeity.aarti) },
    { label: t('q_chalisa'), img: '/art/thumb/a5zmuEwHzyc.jpg', onClick: () => go('path', 'chalisa') },
    { label: t('q_gita'), img: '/art/thumb/bxYwhPIFOcA.jpg', onClick: () => go('path', 'gita') },
    { label: t('q_jap'), img: '/art/thumb/0ixU5CM6Xig.jpg', onClick: () => go('mandir', dayDeity.id) },
    { label: t('q_card'), img: '/art/thumb/cM8X2DDvnGE.jpg', onClick: () => upcoming[0] && go('tyohar', `${upcoming[0].id}/card`) },
  ]

  const stats: [string, string][] = [
    [t('sunrise'), formatClock(p.sunrise, lang)],
    [t('sunset'), formatClock(p.sunset, lang)],
    [t('rahuKaal'), p.rahuKaal ? `${formatClock(p.rahuKaal.start, lang).replace(/^\D+/, '')}–${formatClock(p.rahuKaal.end, lang).replace(/^\D+/, '')}` : '–'],
  ]

  return (
    <main className="mx-auto max-w-xl pb-8">
      {/* Today's tithi, where Blinkit puts "delivery in 10 minutes" */}
      <header className="qh-head px-4 pb-4">
        <p className="flex flex-wrap items-center gap-x-1.5 text-[0.85rem] font-semibold text-ember/80">
          <span>{new Date(Date.UTC(today.y, today.m - 1, today.d, 6)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
          <span aria-hidden="true">·</span>
          <span className="qh-city">
            <CityPicker />
          </span>
        </p>
        <h1 className="font-display text-[1.75rem] leading-[1.1] text-ember">
          {p.masa.name[L]} {t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')} {p.tithi.name[L]}
        </h1>
        <button onClick={() => go('aaj', 'panchang')} className="mt-3 grid w-full grid-cols-3 divide-x divide-black/10 rounded-2xl bg-white py-2 text-left shadow-sm active:scale-[0.99]">
          {stats.map(([k, v], i) => (
            <span key={k} className="px-3">
              <span className={`block text-[0.75rem] font-semibold ${i === 2 ? 'text-[#c62828]' : 'text-dim'}`}>{k}</span>
              <span className="block truncate text-[0.95rem] font-bold text-[#2b1a10]">{v}</span>
            </span>
          ))}
        </button>
      </header>

      {/* What to do today: one row of picture tiles that slides sideways, then the month's calendar */}
      <section className="pt-5">
        <h2 className="px-4 text-[1.05rem] font-bold text-warm">{t('q_mind')}</h2>
        <ul className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
          {tiles.map((x) => (
            <li key={x.label} className="w-[4.4rem] shrink-0">
              <button onClick={x.onClick} className="flex w-full flex-col items-center gap-1.5 active:scale-95">
                <img src={x.img} alt="" className="aspect-square w-full rounded-2xl bg-[#f3e6d3] object-cover object-top" />
                <span className="line-clamp-2 text-center text-[0.78rem] font-semibold leading-tight text-warm">{x.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 pt-4">
          <MonthCard onOpen={() => go('aaj', 'calendar')} onTemples={() => go('mandir', 'bharat')} />
        </div>
      </section>

      <MantraCard />

      {/* Today's good-morning card, before the festivals that are still days away */}
      <SuprabhatCard />

      {/* Festival banners */}
      <section className="pt-6">
        <div className="flex items-baseline justify-between px-4">
          <h2 className="text-[1.05rem] font-bold text-warm">{t('q_upcoming')}</h2>
          <button onClick={() => go('tyohar')} className="text-[0.85rem] font-bold text-flame">
            {t('q_seeAll')} ›
          </button>
        </div>
        <ul className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 [scrollbar-width:none]">
          {upcoming.map((f) => {
            const d = daysUntil(f)
            return (
              <li key={f.id} className="w-[84%] shrink-0 snap-start">
                <button onClick={() => go('tyohar', f.id)} className="relative block h-[8.25rem] w-full overflow-hidden rounded-2xl text-left active:scale-[0.99]">
                  <img src={FEST_PHOTO[f.id] ?? f.art} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  <span className="relative flex h-full flex-col justify-end p-3">
                    <span className="w-fit rounded-full bg-[#fff3e0] px-2 py-0.5 text-[0.75rem] font-bold text-[#b34700]">{d === 0 ? t('festivalToday') : t('festivalIn', { count: d })}</span>
                    <span className="mt-1 font-display text-[1.45rem] leading-tight text-white">{hi ? f.name_hi : f.name_en}</span>
                    <span className="line-clamp-1 text-[0.82rem] text-white/85">{hi ? f.line_hi : f.line_en}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Deities as a picture grid */}
      <section className="px-4 pt-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[1.05rem] font-bold text-warm">{t('q_darshan')}</h2>
          <button onClick={() => go('mandir')} className="text-[0.85rem] font-bold text-flame">
            {t('q_seeAll')} ›
          </button>
        </div>
        <ul className="mt-3 grid grid-cols-4 gap-x-3 gap-y-4">
          {DEITIES.filter((d) => d.home).slice(0, 8).map((d) => (
            <li key={d.id}>
              <button onClick={() => go('mandir', d.id)} className="flex w-full flex-col items-center gap-1.5 active:scale-95">
                <img src={d.home} alt="" className="aspect-square w-full rounded-2xl bg-[#f3e6d3] object-cover" />
                <span className="text-center text-[0.8rem] font-semibold leading-tight text-warm">{hi ? d.name_hi : d.name_en}</span>
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => go('aarti')} className="flex w-full flex-col items-center gap-1.5 active:scale-95">
              <span className="grid aspect-square w-full place-items-center rounded-2xl bg-[#fff1d6] text-flame">
                <IconBell />
              </span>
              <span className="text-center text-[0.8rem] font-semibold leading-tight text-warm">{t('allAartis')}</span>
            </button>
          </li>
        </ul>
      </section>

      {/* A quiet way into meditation, next to the deities */}
      <DhyanBar />

      <BharatHomeCard onOpen={() => go('mandir', 'bharat')} />

      {/* Aartis as a row of small cards */}
      <section className="pt-6">
        <div className="flex items-baseline justify-between px-4">
          <h2 className="text-[1.05rem] font-bold text-warm">{t('allAartis')}</h2>
          <button onClick={() => go('aarti')} className="text-[0.85rem] font-bold text-flame">
            {t('q_seeAll')} ›
          </button>
        </div>
        <ul className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
          {AARTIS.map((a) => (
            <li key={a.id} className="w-[6.5rem] shrink-0">
              <button onClick={() => go('aarti', a.id)} className="block w-full text-left active:scale-95">
                <img src={AARTI_HOME[a.id] ?? PORTRAIT[a.id]} alt="" className="aspect-square w-full rounded-2xl object-cover object-top" />
                <span className="mt-1.5 line-clamp-2 block text-[0.8rem] font-semibold leading-tight text-warm">{hi ? a.title_hi : a.title_en}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Read once, so it sits at the very bottom and goes away when all the chapters are read. */}
      {!CHAPTERS.every((c) => learnRead.includes(c.id)) && (
        <section className="px-4 pt-6">
          <button onClick={() => go('profile', 'sanatan')} className="block w-full overflow-hidden rounded-2xl bg-white text-left ring-1 ring-black/[0.07] active:scale-[0.99]">
            <LearnPic name="sanatan" className="rounded-none" />
            <span className="block p-4">
              <b className="block font-display text-[1.3rem] leading-tight font-normal text-warm">{t('homeSanatanTitle')}</b>
              <span className="mt-1 block text-[0.9rem] text-dim">{t('homeSanatanLine')}</span>
              <span className="mt-1.5 block text-[0.9rem] font-bold text-flame">{t('read')} ›</span>
            </span>
          </button>
        </section>
      )}
    </main>
  )
}
