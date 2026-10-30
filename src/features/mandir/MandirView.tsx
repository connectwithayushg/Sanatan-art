import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { BAL_GOPAL, DEITIES, SHIVLING, deityOfDay } from '../../content/deities'
import { ymd } from '../../content/festivals'
import { buzz, ringBell, ringGhanti } from '../../lib/audio/bell'
import { startMusic } from '../../lib/audio/music'
import { Dhyan } from './Dhyan'
import { DhyanIcon } from '../../ui/DhyanIcon'
import { useStored } from '../../lib/useStored'
import { offer, type Offering } from '../../lib/darshan'
import { ApprovedTableBell, FallFlowers, HangingBell, OfferingLedge, ShrineLamps, ShrineOfferingTargets } from './Offerings'
import { useCutBox } from './useCutBox'
import { TabBook } from '../../ui/TabIcons'
import { BharatHomeCard } from '../bharat/BharatHomeCard'

const MALA = 108
const TARGETS = [11, 21, 51, 108]

/** Path texts for each deity (ids from the Path library); the everyday mantras are offered for all. */
const PATHS: Record<string, { to: string; hi: string; en: string }[]> = {
  hanuman: [
    { to: 'path/chalisa', hi: 'श्री हनुमान चालीसा', en: 'Shri Hanuman Chalisa' },
    { to: 'path/hanuman-ashtak', hi: 'संकटमोचन हनुमान अष्टक', en: 'Sankat Mochan Hanuman Ashtak' },
  ],
  shiv: [
    { to: 'path/shiv-chalisa', hi: 'श्री शिव चालीसा', en: 'Shri Shiv Chalisa' },
    { to: 'path/shiv-tandav', hi: 'शिव तांडव स्तोत्र', en: 'Shiv Tandav Stotram' },
  ],
  durga: [{ to: 'path/durga-chalisa', hi: 'श्री दुर्गा चालीसा', en: 'Shri Durga Chalisa' }],
  krishna: [{ to: 'path/gita', hi: 'श्रीमद्भगवद्गीता', en: 'Bhagavad Gita' }],
}
const MANTRA_PATH = { to: 'path/mantra', hi: 'रोज़ के मंत्र', en: 'Everyday mantras' }

import { HALO } from '../../content/halo'
export { HALO }

/** The home mandir: choose a deity, light the diya, offer flowers, ring the bell, and count jap on a rudraksh mala. */
export function MandirView({ initial, openAarti, openPath }: { openAarti?: (id: string, deity: string) => void; openPath?: (path: string, deity: string) => void; initial?: string }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  // Picker order: the deity worshipped last, then today's deity, then everyone else in a fixed order from Ganesh ji.
  const [last, setLast] = useStored('lastDeity', '')
  const today = ymd(new Date())
  const weekday = new Date(today + 'T12:00:00Z').getUTCDay()
  const todayId = deityOfDay(weekday).id
  const [order] = useState(() => {
    const first = [last, todayId].filter((id, i, a) => DEITIES.some((d) => d.id === id) && a.indexOf(id) === i)
    return [...first.map((id) => DEITIES.find((d) => d.id === id)!), ...DEITIES.filter((d) => !first.includes(d.id))]
  })
  const [chosen, setChosen] = useState(() => (DEITIES.some((d) => d.id === initial) ? initial! : order[0].id))
  const [gopal, setGopal] = useStored('balGopal', false)
  const [ling, setLing] = useStored('shivLing', false)
  const form = (d: (typeof DEITIES)[number]) => (d.id === 'krishna' && gopal ? { ...d, ...BAL_GOPAL } : d.id === 'shiv' && ling ? { ...d, ...SHIVLING } : d)
  const deity = form(DEITIES.find((d) => d.id === chosen) ?? DEITIES[0])
  // What has been offered to each deity today; it resets at midnight.
  const [offered_, setOffered] = useStored<{ day: string; d: Record<string, { lit?: boolean; flowers?: boolean }> }>('offerings', { day: '', d: {} })
  const [seen, setSeen] = useStored<{ diya?: boolean; bell?: boolean; bowl?: boolean }>('offerHints', {})
  const [petals, setPetals] = useState(0)
  const [ignition, setIgnition] = useState('')
  const ignitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (ignitionTimer.current) clearTimeout(ignitionTimer.current) }, [])
  const [jap, setJap] = useStored('jap', { date: '', count: 0, malas: 0 })
  const [target, setTarget] = useStored('japTarget', MALA)
  const [done, setDone] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [dhyan, setDhyan] = useState(false)
  const stopMusic = useRef<(() => void) | null>(null)
  const swipeFrom = useRef<[number, number] | null>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [sz, setSz] = useState({ w: 390, h: 688 })
  useEffect(() => {
    const el = stage.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setSz({ w: e.contentRect.width, h: e.contentRect.height }))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  // Krishna and Shiv ji each have a second form, chosen with the two words at the top of the shrine.
  const formSwitch =
    deity.id === 'krishna'
      ? { label: 'krishnaForm', a: 'formKrishna', b: 'formGopal', on: gopal, set: setGopal }
      : deity.id === 'shiv'
        ? { label: 'shivForm', a: 'formShiv', b: 'formLing', on: ling, set: setLing }
        : null
  const picture = deity.week?.[weekday] ?? deity.cutout ?? deity.photo
  const scene = deity.shrineScene
  const box = useCutBox(picture)
  const here = (offered_.day === today ? offered_.d : {})[deity.id] ?? {}
  const lit = !!here.lit
  const scenePhoto = (scene && 'week' in scene ? scene.week?.[weekday] : undefined) ?? scene?.base ?? '/art/redesign/mandir-offerings-v2/empty.webp'
  const igniting = ignition === `${today}/${deity.id}`
  const mark = (patch: { lit?: boolean; flowers?: boolean }) => setOffered({ day: today, d: { ...(offered_.day === today ? offered_.d : {}), [deity.id]: { ...here, ...patch } } })
  const hinted = (k: 'diya' | 'bell' | 'bowl') => {
    if (!seen[k]) setSeen({ ...seen, [k]: true })
  }
  const japToday = jap.date === today ? jap : { date: today, count: 0, malas: 0 }

  useEffect(() => () => stopMusic.current?.(), [])

  // Diya, flowers and bell together make the day's darshan, counted in the top bar.
  const offered = (what?: Offering) => {
    setLast(deity.id)
    if (what) offer(what)
  }
  const pick = (id: string) => {
    setChosen(id)
    setPetals(0)
    setIgnition('')
  }
  const light = () => {
    if (lit) return
    if (ignitionTimer.current) clearTimeout(ignitionTimer.current)
    setIgnition(`${today}/${deity.id}`)
    ignitionTimer.current = setTimeout(() => setIgnition(''), 2800)
    mark({ lit: true })
    hinted('diya')
    buzz(20)
    offered('diya')
  }
  const flowers = () => {
    setPetals((n) => n + 1)
    mark({ flowers: true })
    hinted('bowl')
    buzz(15)
    offered('phool')
  }
  const bell = () => {
    ringGhanti()
    hinted('bell')
    buzz(30)
    offered('ghanti')
  }
  const music = () => {
    if (stopMusic.current) {
      stopMusic.current()
      stopMusic.current = null
      setPlaying(false)
    } else {
      try {
        stopMusic.current = startMusic()
        setPlaying(true)
      } catch {
        /* audio unavailable */
      }
    }
  }
  const count = () => {
    const from = japToday.count >= target ? 0 : japToday.count
    const next = from + 1
    setJap({ date: today, count: next, malas: japToday.malas + (next === target ? 1 : 0) })
    if (next === target) {
      ringBell(196, 0.45)
      buzz(160)
      setDone(true)
      setTimeout(() => setDone(false), 2600)
    } else buzz(8)
    offered()
  }
  const chooseTarget = (n: number) => {
    setTarget(n)
    setJap({ date: today, count: 0, malas: japToday.malas })
  }

  // Meditation: the temple music gives way to the Om, and the diya is lit for it.
  const meditate = () => {
    if (stopMusic.current) {
      stopMusic.current()
      stopMusic.current = null
      setPlaying(false)
    }
    setDhyan(true)
  }

  const [h1, h2, hr] = HALO[deity.id] ?? HALO.hanuman
  const bh = box ? box.b - box.t : 1
  const bw = box ? box.r - box.l : 1
  const height = Math.min(sz.h * .59 / bh, sz.w * .74 / (bw * (box?.a ?? 6 / 7)))
  const aarti = AARTIS.find((a) => a.id === deity.aarti)
  const aartiName = hi ? deity.name_hi.replace(/(?: जी| माँ)$/, '') : deity.name_en.replace(/ (?:ji|Maa)$/, '')
  return (
    <main className="tab-page mandir-page">
      <header className="mandir-heading">
        <h1>{t('r_myMandir')}</h1>
        <label className="mandir-current-deity"><span className="sr-only">{t('chooseDeity')}</span>{deity.id === 'shiv' ? <svg width="20" height="26" viewBox="0 0 24 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 2v26M5 4v6a7 7 0 0 0 14 0V4M3 5l2-3 2 3m10 0 2-3 2 3M10 5l2-3 2 3" /></svg> : <img src={deity.face ?? deity.thumb} alt="" />}<select value={deity.id} onChange={(e) => pick(e.target.value)}>{order.map((o) => { const d = o.id === deity.id ? deity : o; return <option key={d.id} value={d.id}>{hi ? d.name_hi : d.name_en}{d.id === todayId ? ` · ${t('cal_today')}` : ''}</option> })}</select><span aria-hidden="true">⌄</span></label>
      </header>
      <div ref={stage} className={`mandir-shrine shrine ${lit ? 'is-lit' : ''}`} style={{ '--h1': h1, '--h2': h2, '--hr': hr, '--flower-rise': `${sz.h * .63}px` } as CSSProperties}
        onTouchStart={(e) => { swipeFrom.current = [e.touches[0].clientX, e.touches[0].clientY] }}
        onTouchEnd={(e) => {
          const from = swipeFrom.current
          swipeFrom.current = null
          if (!from) return
          const dx = e.changedTouches[0].clientX - from[0]
          const dy = e.changedTouches[0].clientY - from[1]
          if (Math.abs(dx) < 60 || Math.abs(dy) > 50) return
          const at = order.findIndex((d) => d.id === deity.id)
          pick(order[(at + (dx < 0 ? 1 : -1) + order.length) % order.length].id)
        }}>
        <div className="mandir-photo">
          <img className="mandir-scene" src={scenePhoto} alt={scene ? (hi ? deity.name_hi : deity.name_en) : ''} />
          <ShrineLamps lit={lit} igniting={igniting} />
          {!scene && <><div className="mandir-statue-shadow" /><img key={picture} src={picture} alt={hi ? deity.name_hi : deity.name_en} className="mandir-statue" style={{ height, bottom: sz.h * .255 - (1 - (box?.b ?? 1)) * height, transform: `translateX(-${(box?.cx ?? .5) * 100}%)`, opacity: box ? 1 : 0 }} /></>}
        </div>
        <FallFlowers wave={petals} />
        <HangingBell side="left" onRing={bell} label={t('bell')} />
        <HangingBell side="right" onRing={bell} label={t('bell')} />
        <ShrineOfferingTargets lit={lit} flowers={!!here.flowers} light={light} offerFlowers={flowers} lightLabel={lit ? t('diyaLit') : t('lightDiya')} flowerLabel={t('r_offeringFlowers')} />
        <OfferingLedge lit={lit} igniting={igniting} flowers={!!here.flowers} light={light} offerFlowers={flowers} flowerLabel={t('r_offeringFlowers')} diyaLabel={t('r_offeringDiya')} lightLabel={lit ? t('diyaLit') : t('lightDiya')} ring={bell} bellLabel={t('bell')} />
        <ApprovedTableBell />
      </div>
      <div className="mandir-actions">
        {aarti && <button className="mandir-aarti-action" onClick={() => openAarti?.(aarti.id, deity.id)}><img src="/art/redesign/approved-mandir/aarti-book.png" alt="" /><span>{t('r_mandirReadAarti', { name: aartiName })}</span><span aria-hidden="true">→</span></button>}
        <button className="mandir-jap-action" onClick={() => document.getElementById('mandir-mala')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}><img src="/art/redesign/approved-mandir/jap-mala.png" alt="" /><span>{t('r_jap')}</span><span aria-hidden="true">→</span></button>
      </div>
      <div className="page-content mandir-extras">
        {formSwitch && <div className="mandir-form-switch" role="group" aria-label={t(formSwitch.label)}>{[false, true].map((on) => <button key={String(on)} aria-pressed={formSwitch.on === on} onClick={() => { formSwitch.set(on); setPetals(0) }}>{t(on ? formSwitch.b : formSwitch.a)}</button>)}</div>}
        <p className="mandir-mantra">{deity.mantra}</p>
        <div className="mandir-quiet-actions"><button onClick={music} aria-pressed={playing}>{t('music')} · {t(playing ? 'pause' : 'play')}</button><button onClick={meditate}><DhyanIcon size={22} /> {t('dhyan')}</button></div>
        <ul className="mandir-deity-list" aria-label={t('chooseDeity')}>{order.map(form).map((d) => <li key={d.id}><button onClick={() => pick(d.id)} aria-pressed={d.id === deity.id}><img src={d.face ?? d.thumb} alt="" style={HALO[d.id] ? { background: `radial-gradient(circle at 50% 40%, ${HALO[d.id][0]}, ${HALO[d.id][1]})` } : undefined} /><span>{hi ? d.name_hi : d.name_en}</span></button></li>)}</ul>
        <section id="mandir-mala" className="mala-card">
          <h2>{t('malaTitle')}</h2><div className="mala-targets">{TARGETS.map((n) => <button key={n} onClick={() => chooseTarget(n)} aria-pressed={n === target}>{n}</button>)}</div>
          <button onClick={count} aria-label={t('japCount', { count: japToday.count })} className="mala-counter"><Mala count={japToday.count} beads={target} malas={japToday.malas} /><span><strong>{japToday.count}</strong><small>/ {target}</small></span></button>
          <p aria-live="polite">{t('sankalp', { count: target })}</p>
        </section>
        <section className="mandir-paths"><h2><TabBook /> {t('nav_path')}</h2><ul>{[...(PATHS[deity.id] ?? []), MANTRA_PATH].map((x) => <li key={x.to}><button className="calendar-entry" onClick={() => openPath?.(x.to, deity.id)}><span>{hi ? x.hi : x.en}</span><span aria-hidden="true">›</span></button></li>)}</ul></section>
      </div>
      <BharatHomeCard onOpen={() => { location.hash = '#mandir/bharat' }} />
      {dhyan && <Dhyan src={picture} alt={hi ? deity.name_hi : deity.name_en} dx={deity.dx} halo={[h1, h2, hr]} diya={<BrassDiya />} onClose={() => setDhyan(false)} />}
      {done && <div role="status" className="sankalp-toast">{t('sankalpDone', { count: target })}</div>}
    </main>
  )
}

/** The mala has as many beads as the chosen count, so a mala of 11 is smaller and its beads larger. The strand turns clockwise one bead per jap; beads already counted are darker. */
function Mala({ count, beads, malas }: { count: number; beads: number; malas: number }) {
  const R = 118
  const C = 140
  const Y = C + 10
  const r = Math.min(20, ((Math.PI * 2 * R) / beads) * 0.52)
  const k = Math.min(count, beads)
  // The angle keeps growing across malas, so the 108th bead turns forward instead of spinning back to 0.
  const turned = (Math.max(0, malas - (count >= beads ? 1 : 0)) * beads + k) * (360 / beads)
  return (
    <svg viewBox="0 0 280 290" className="h-full w-full" aria-hidden="true">
      <circle cx={C} cy={Y} r={R} fill="none" stroke="#c9a24a" strokeWidth={1.6} />
      <g style={{ transform: `rotate(${turned}deg)`, transformOrigin: `${C}px ${Y}px`, transition: 'transform .25s' }}>
        {Array.from({ length: beads }, (_, i) => {
          const a = (i / beads) * Math.PI * 2 - Math.PI / 2
          const done = k > 0 && i >= beads - k
          return (
            <g key={i} transform={`translate(${C + R * Math.cos(a)} ${Y + R * Math.sin(a)}) rotate(${(a * 180) / Math.PI + 180})`}>
              <image href="/art/rudraksh.webp" x={-r} y={-r} width={r * 2} height={r * 2} />
              {done && <circle r={r * 0.94} fill="#1e0d04" opacity={0.45} />}
            </g>
          )
        })}
      </g>
      <path d={`M${C} ${Y - R - 2} v-14`} stroke="#e8b44a" strokeWidth={3} strokeLinecap="round" />
      <circle cx={C} cy={Y - R - 18} r={10} fill="#8a4a22" stroke="#e8b44a" strokeWidth={2.4} />
      <circle cx={C} cy={Y - R - 18} r={3} fill="#e8b44a" />
      <circle cx={C} cy={Y} r={R - r - 8} fill="#fffaf0" />
    </svg>
  )
}

/** A clay (mitti) diya with gold dots on a brass saucer; the flame fades in when it is lit. */
export function BrassDiya() {
  return (
    <svg viewBox="0 0 110 70" className="relative w-[110px]" aria-hidden="true">
      <defs>
        <linearGradient id="brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3d27c" />
          <stop offset=".55" stopColor="#c98b2e" />
          <stop offset="1" stopColor="#8a5a14" />
        </linearGradient>
        <linearGradient id="dvXv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f3d27c"/>
        <stop offset=".5" stopColor="#c58b2d"/>
        <stop offset="1" stopColor="#6b4410"/>
        </linearGradient>
        <linearGradient id="dvClay" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#6a2c10"/>
        <stop offset=".25" stopColor="#b8582a"/>
        <stop offset=".5" stopColor="#d8793a"/>
        <stop offset=".75" stopColor="#a94b22"/>
        <stop offset="1" stopColor="#5a230c"/>
        </linearGradient>
        <linearGradient id="dvClayRim" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#8a3c18"/>
        <stop offset=".5" stopColor="#e48a4a"/>
        <stop offset="1" stopColor="#7a3314"/>
        </linearGradient>
        <radialGradient id="flameGlow" cx=".5" cy=".7" r=".6">
          <stop offset="0" stopColor="#fff6c8" />
          <stop offset=".45" stopColor="#ffc23d" />
          <stop offset="1" stopColor="#ff7a00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="diya-flame">
        <ellipse cx="55" cy="22" rx="18" ry="24" fill="url(#flameGlow)" opacity=".55" />
        <path d="M55 6 C61 16 62 24 55 33 C48 24 49 16 55 6Z" fill="#ffb02e" />
        <path d="M55 15 C58 21 58 25 55 30 C52 25 52 21 55 15Z" fill="#fff3c4" />
      </g>
      <ellipse cx="55" cy="63" rx="35" ry="5.5" fill="url(#dvXv)"/><ellipse cx="55" cy="61.6" rx="31" ry="3.6" fill="#f6dc8a" opacity=".45"/><path d="M22 42 C22 57 38 62 55 62 C72 62 88 57 88 42Z" fill="url(#dvClay)"/><ellipse cx="55" cy="42" rx="33" ry="7" fill="url(#dvClayRim)"/><ellipse cx="55" cy="42.8" rx="26" ry="4.6" fill="#2e160a"/><ellipse cx="55" cy="43.6" rx="20" ry="2.4" fill="#7a4710" opacity=".6"/><ellipse cx="55" cy="42" rx="29.5" ry="5.8" fill="none" stroke="#e8bd5a" strokeWidth="1.6" strokeDasharray=".1 4.2" strokeLinecap="round"/><path d="M27 51 C38 57 72 57 83 51" stroke="#e8bd5a" strokeWidth="1.2" fill="none" opacity=".85"/><path d="M26 47 C30 52 36 55 44 57" stroke="#f2a468" strokeWidth="1.6" fill="none" opacity=".4" strokeLinecap="round"/><path d="M55 33 v10" stroke="#2a1608" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  )
}
