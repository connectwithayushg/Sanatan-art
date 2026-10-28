import { useEffect, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useStored } from './lib/useStored'
import { TopBar } from './ui/TopBar'
import { TabBook, TabCalendar, TabDiya, TabHome, TabMandir } from './ui/TabIcons'
import { AajView } from './features/aaj/AajView'
import { TyoharView } from './features/tyohar/TyoharView'
import { MandirView } from './features/mandir/MandirView'
import { BharatView } from './features/bharat/BharatView'
import { Dvar, doorsDue } from './features/mandir/Dvar'
import { PathView } from './features/path/PathView'
import { AartiView } from './features/diwali/AartiView'
import { AARTIS } from './content/aartis'
import { AartiLibrary } from './features/aarti/AartiLibrary'
import { HomeView } from './features/home/HomeView'
import { AajToday } from './features/aaj/AajToday'
import { CalendarView } from './features/aaj/CalendarView'
import { Search } from './features/search/Search'
import { ProfileView } from './features/profile/ProfileView'
import { SuprabhatCard } from './features/greet/SuprabhatCard'

/** Festivals are a page inside Home, not a tab: the Home tab stays lit while they are open. */
const TABS = ['home', 'aaj', 'tyohar', 'mandir', 'aarti', 'path'] as const
/** The profile is reached from the top bar, not the tab bar. */
type Tab = (typeof TABS)[number] | 'profile'
interface Route {
  tab: Tab
  /** Path inside the tab, e.g. "diwali/puja" in Festivals */
  sub: string[]
}

/** Links shared before the app had tabs (#puja, #aarti, #card) still open the Diwali page. */
const OLD_DIWALI = ['muhurat', 'puja', 'card']

const parse = (): Route => {
  const [head = '', ...sub] = location.hash.slice(1).split('/')
  if (OLD_DIWALI.includes(head) && !sub.length) return { tab: 'tyohar', sub: ['diwali', head] }
  return head === 'profile' || (TABS as readonly string[]).includes(head) ? { tab: head as Tab, sub } : { tab: 'home', sub: [] }
}

export default function App() {
  const { t } = useTranslation()
  const [scale, setScale] = useStored('scale', 1)
  // The app opens in the Mandir (the logo goes to Home); a link to a page inside the app opens there instead.
  const [route, setRoute] = useState<Route>(() => {
    if (location.hash) return parse()
    history.replaceState(null, '', '#mandir')
    return { tab: 'mandir', sub: [] }
  })
  // The doors open on the first plain visit of each day, not for links to festivals, aartis or paths.
  const [doors, setDoors] = useState(() => {
    const r = parse()
    return r.tab === 'mandir' && !r.sub.length && doorsDue()
  })
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    document.documentElement.style.setProperty('--scale', String(scale))
  }, [scale])
  useEffect(() => {
    const onHash = () => setRoute(parse())
    addEventListener('hashchange', onHash)
    return () => removeEventListener('hashchange', onHash)
  }, [])

  const go = (tab: Tab, sub = '') => {
    const hash = `#${tab}${sub ? '/' + sub : ''}`
    // Going deeper adds a history entry so the phone's back button returns; switching tabs replaces it.
    if (sub) history.pushState(null, '', hash || location.pathname + location.search)
    else history.replaceState(null, '', hash || location.pathname + location.search)
    setRoute({ tab, sub: sub ? sub.split('/') : [] })
    scrollTo({ top: 0 })
  }
  /** Aartis and paths opened from the Mandir read inside the Mandir tab; back returns to the same deity. */
  const openInMandir = (deity: string, sub: string) => {
    history.replaceState(null, '', `#mandir/${deity}`)
    go('mandir', `${deity}/${sub}`)
  }
  /** Opens any place in the app from a path such as "path/shiv-chalisa" or "tyohar/dhanteras/katha". */
  const goTo = (to: string) => {
    const [tab, ...sub] = to.split('/')
    if (tab === 'profile' || (TABS as readonly string[]).includes(tab)) go(tab as Tab, sub.join('/'))
  }
  useEffect(() => {
    const onPop = () => setRoute(parse())
    addEventListener('popstate', onPop)
    return () => removeEventListener('popstate', onPop)
  }, [])

  const tabs: [Tab, ReactNode, string][] = [
    ['home', <TabHome />, t('nav_home')],
    ['aaj', <TabCalendar />, t('nav_aaj')],
    ['mandir', <TabMandir filled={route.tab === 'mandir'} />, t('nav_mandir')],
    ['aarti', <TabDiya />, t('nav_aarti')],
    ['path', <TabBook />, t('nav_path')],
  ]

  return (
    <div className="sky app-shell min-h-dvh">
      {doors && route.tab === 'mandir' && !route.sub.length && <Dvar onDone={() => setDoors(false)} />}
      <TopBar onSearch={() => setSearching(true)} onHome={() => go('home')} onProfile={() => go('profile')} />
      {searching && <Search onClose={() => setSearching(false)} go={goTo} />}
      {route.tab === 'home' && <HomeView go={go} />}
      {route.tab === 'aaj' &&
        (!route.sub.length ? (
          <AajToday go={go} />
        ) : route.sub[0] === 'greet' ? (
          <SuprabhatCard />
        ) : route.sub[0] === 'calendar' ? (
          <CalendarView openFestival={(id) => go('tyohar', id)} />
        ) : (
          <AajView openFestival={(id) => go('tyohar', id)} />
        ))}
      {route.tab === 'tyohar' && <TyoharView festival={route.sub[0] || null} part={route.sub[1] || null} open={(p) => go('tyohar', p)} openAarti={(id) => go('aarti', id)} onCalendar={() => go('aaj', 'calendar')} />}
      {route.tab === 'mandir' && route.sub[0] !== 'bharat' && (route.sub[1] === 'aarti' || route.sub[1] === 'path') && (
        <MandirReader deity={route.sub[0]} kind={route.sub[1]} rest={route.sub.slice(2)} go={go} goTo={goTo} />
      )}
      {route.tab === 'mandir' && route.sub[0] === 'bharat' && <BharatView sub={route.sub.slice(1)} open={(p) => go('mandir', p)} />}
      {route.tab === 'mandir' && route.sub[0] !== 'bharat' && route.sub[1] !== 'aarti' && route.sub[1] !== 'path' && (
        <MandirView
          key={route.sub[0] || ''}
          initial={route.sub[0]}
          openAarti={(id, deity) => openInMandir(deity, `aarti/${id}`)}
          openPath={(p, deity) => openInMandir(deity, p)}
        />
      )}
      {route.tab === 'aarti' && <AartiLibrary id={route.sub[0] || null} open={(id) => go('aarti', id)} />}
      {route.tab === 'profile' && <ProfileView sub={route.sub} open={(p) => go('profile', p)} scale={scale} setScale={setScale} />}
      {route.tab === 'path' && <PathView sub={route.sub} open={(p) => go('path', p)} go={goTo} />}

      <nav className="app-tabbar" aria-label={t('r_mainNavigation')}>
        <div className="tabbar-inner">
          {tabs.map(([id, icon, label]) => {
            const on = route.tab === id || (id === 'home' && route.tab === 'tyohar')
            return (
              <button
                key={id}
                onClick={() => go(id)}
                aria-current={on ? 'page' : undefined}
                className="tabbar-item"
              >
                {icon}
                <span>{label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

function MandirReader({ deity, kind, rest, go, goTo }: { deity: string; kind: string; rest: string[]; go: (tab: Tab, sub?: string) => void; goTo: (to: string) => void }) {
  const { t } = useTranslation()
  if (kind === 'aarti') {
    const a = AARTIS.find((x) => x.id === rest[0])
    if (a) return <AartiView key={a.id} aartis={[a]} onBack={() => history.back()} backLabel={t('nav_mandir')} />
  }
  return <PathView sub={rest} open={(p) => go('mandir', `${deity}/path/${p}`)} go={goTo} backLabel={t('nav_mandir')} />
}
