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
import { IconBell } from '../../ui/Ornaments'
import { FallFlowers, FlowerBowl, GroundFlowers, HangingBell, OfferDefs, RoundButton } from './Offerings'
import { useCutBox } from './useCutBox'
import { TabBook } from '../../ui/TabIcons'

/** Widest the deity itself may be, as a share of the screen height, so it stays inside the back arch. */
const ARCH_W = 0.41

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

/** The halo behind each deity, in a colour of their own: [centre, middle, rays]. */
export const HALO: Record<string, [string, string, string]> = {
  ganesh: ['rgba(255,168,80,1)', 'rgba(235,96,32,.65)', 'rgba(200,70,20,.45)'], // sindoor
  shiv: ['rgba(255,240,205,1)', 'rgba(232,196,140,.7)', 'rgba(176,140,90,.45)'], // chandan, vibhuti
  hanuman: ['rgba(255,200,110,1)', 'rgba(244,140,40,.7)', 'rgba(206,110,20,.45)'], // saffron
  vishnu: ['rgba(255,232,120,1)', 'rgba(242,196,40,.7)', 'rgba(200,150,10,.45)'], // pitambar
  lakshmi: ['rgba(255,214,200,1)', 'rgba(240,130,150,.6)', 'rgba(214,150,40,.45)'], // kamal and gold
  durga: ['rgba(255,170,150,1)', 'rgba(214,40,50,.6)', 'rgba(180,20,30,.45)'], // kumkum
  krishna: ['rgba(255,230,130,1)', 'rgba(240,190,50,.65)', 'rgba(20,110,120,.4)'], // pitambar, mor-pankh
  ram: ['rgba(255,226,140,1)', 'rgba(246,176,60,.65)', 'rgba(120,150,190,.4)'], // pitambar, megh-shyam
  kali: ['rgba(255,190,170,1)', 'rgba(200,40,40,.6)', 'rgba(40,40,90,.45)'], // japa flower, night
  khatu: ['rgba(255,214,150,1)', 'rgba(236,120,90,.6)', 'rgba(30,120,110,.4)'], // gende, gulab, mor-pankh
}

/** The home mandir: choose a deity, light the diya, offer flowers, ring the bell, and count jap on a rudraksh mala. */
export function MandirView({ initial, openAarti, openPath }: { openAarti?: (id: string, deity: string) => void; openPath?: (path: string, deity: string) => void; initial?: string }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  // Picker order: the deity worshipped last, then today's deity, then everyone else in a fixed order from Ganesh ji.
  const [last, setLast] = useStored('lastDeity', '')
  const todayId = deityOfDay(new Date().getDay()).id
  const [order] = useState(() => {
    const first = [last, todayId].filter((id, i, a) => DEITIES.some((d) => d.id === id) && a.indexOf(id) === i)
    return [...first.map((id) => DEITIES.find((d) => d.id === id)!), ...DEITIES.filter((d) => !first.includes(d.id))]
  })
  const [chosen, setChosen] = useState(() => (DEITIES.some((d) => d.id === initial) ? initial! : order[0].id))
  const [gopal, setGopal] = useStored('balGopal', false)
  const [ling, setLing] = useStored('shivLing', false)
  const form = (d: (typeof DEITIES)[number]) => (d.id === 'krishna' && gopal ? { ...d, ...BAL_GOPAL } : d.id === 'shiv' && ling ? { ...d, ...SHIVLING } : d)
  const deity = form(DEITIES.find((d) => d.id === chosen) ?? DEITIES[0])
  // What has been offered to each deity today (diya lit, flowers on the ground); it resets at midnight.
  const [offered_, setOffered] = useStored<{ day: string; d: Record<string, { lit?: boolean; flowers?: boolean }> }>('offerings', { day: '', d: {} })
  const [seen, setSeen] = useStored<{ diya?: boolean; bell?: boolean; bowl?: boolean }>('offerHints', {})
  const [petals, setPetals] = useState(0)
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
  const picture = deity.week?.[new Date().getDay()] ?? deity.cutout ?? deity.photo
  const box = useCutBox(picture)
  const today = ymd(new Date())
  const here = (offered_.day === today ? offered_.d : {})[deity.id] ?? {}
  const lit = !!here.lit
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
  }
  const light = () => {
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
  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <OfferDefs />
      <div
        ref={stage}
        className={`sanctum shrine relative -mx-4 h-[calc(var(--v)+100px)] touch-pan-y overflow-hidden [container-type:size] ${lit ? 'is-lit' : ''}`}
        style={{ '--h1': h1, '--h2': h2, '--hr': hr, '--v': 'max(480px, calc(100dvh - 3.75rem - 6.25rem - env(safe-area-inset-bottom, 0px)))' } as CSSProperties}
        onTouchStart={(e) => (swipeFrom.current = [e.touches[0].clientX, e.touches[0].clientY])}
        onTouchEnd={(e) => {
          const from = swipeFrom.current
          swipeFrom.current = null
          if (!from) return
          const dx = e.changedTouches[0].clientX - from[0]
          const dy = e.changedTouches[0].clientY - from[1]
          if (Math.abs(dx) < 60 || Math.abs(dy) > 50) return
          const at = order.findIndex((d) => d.id === deity.id)
          pick(order[(at + (dx < 0 ? 1 : -1) + order.length) % order.length].id)
        }}
      >
        <RoundButton side="l" onClick={music} label={t('music')} pressed={playing}>
          <svg viewBox="0 0 24 24" fill="none" stroke="url(#ofBrass)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18V5l11-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="17" cy="16" r="3" />
          </svg>
        </RoundButton>
        <RoundButton side="r" onClick={meditate} label={t('dhyan')}>
          <DhyanIcon size={23} glow />
        </RoundButton>
        {formSwitch ? (
          <div className="absolute inset-x-14 top-3 z-[8] flex h-[38px] items-center justify-center gap-2 font-display text-[1.05rem] [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]" role="group" aria-label={t(formSwitch.label)}>
            {[false, true].map((g, i) => (
              <span key={String(g)} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-[#e3c068]/60">·</span>}
                <button
                  onClick={() => {
                    formSwitch.set(g)
                    setPetals(0)
                  }}
                  aria-pressed={formSwitch.on === g}
                  className={`min-h-9 border-b px-1 transition ${formSwitch.on === g ? 'border-[#f2b544] text-[#f2b544]' : 'border-transparent text-[#d9c8ad]'}`}
                >
                  {t(g ? formSwitch.b : formSwitch.a)}
                </button>
              </span>
            ))}
          </div>
        ) : (
          <p className="pointer-events-none absolute inset-x-14 top-3 z-[8] flex h-[38px] items-center justify-center font-display text-[1.05rem] text-[#f6e9d6] [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">{hi ? deity.name_hi : deity.name_en}</p>
        )}

        <HangingBell side="l" hint={!seen.bell} onRing={bell} label={t('bell')} />
        <HangingBell side="r" hint={!seen.bell} onRing={bell} label={t('bell')} />

        {/* Halo and glow sit behind the deity; the deity is sized and centred by where it actually is in its picture. */}
        <div className="absolute bottom-[calc(var(--v)*var(--d,.165)+100px)] left-1/2 h-[calc(var(--v)*.6)] w-[min(80cqw,calc(var(--v)*.56))] -translate-x-1/2" aria-hidden="true">
          <div className="halo" />
          <div className="shrine-glow pointer-events-none absolute inset-0" />
        </div>
        <div className="pointer-events-none absolute bottom-[calc(var(--v)*var(--d,.165)+90px)] left-1/2 z-[1] h-5 w-[50cqw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,0,0,0.45),transparent)]" />
        {(() => {
          const bh = box ? box.b - box.t : 1
          const bw = box ? box.r - box.l : 1
          const ratio = box?.a ?? 6 / 7
          const cw = box?.cw ?? 1
          const h = `min(calc(var(--v) * ${0.6 / bh}), ${84 / (bw * ratio)}cqw, calc(var(--v) * ${ARCH_W / (cw * ratio)}))`
          return (
            <img
              key={picture}
              src={picture}
              alt={hi ? deity.name_hi : deity.name_en}
              className="absolute left-1/2 z-[2] max-w-none drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)] transition-opacity duration-300"
              style={{
                height: h,
                width: 'auto',
                bottom: `calc(var(--v) * var(--d, .165) + 100px - ${1 - (box?.b ?? 1)} * ${h})`,
                transform: `translateX(-${(box?.cx ?? 0.5) * 100}%)`,
                opacity: box ? 1 : 0,
              }}
            />
          )
        })()}

        {/* The ground: diya, bowl and the marigolds, all on one centre line with the deity. */}
        {(() => {
          const vis = sz.h - 100
          const k = Math.min(1.1, Math.max(0.8, vis / 688))
          const s = 0.88 * k
          const top = vis - 18 - 130 * s
          return (
            <div
              className="pointer-events-none absolute bottom-[118px] left-1/2 z-[5] h-[130px] w-[348px] origin-bottom [&>*]:pointer-events-auto"
              style={{ transform: `translateX(-50%) scale(${s})` }}
            >
              <GroundFlowers on={!!here.flowers} fresh={petals > 0} />
              <button onClick={light} aria-label={lit ? t('diyaLit') : t('lightDiya')} className={`absolute top-0 left-1/2 flex h-[70px] w-[140px] -translate-x-1/2 items-end justify-center ${seen.diya ? '' : 'offer-hint'}`}>
                <span className="diya-light pointer-events-none absolute -top-[14px] left-1/2 h-[140px] w-[220px] -translate-x-1/2" />
                <BrassDiya />
              </button>
              <FlowerBowl hint={!seen.bowl} onOffer={flowers} label={t('offerFlowers')} />
              <FallFlowers wave={petals} rise={(y) => (top + y * s - 0.2 * vis) / s} spread={(0.5 * sz.w) / s} />
            </div>
          )
        })()}

        <p className="pointer-events-none absolute inset-x-0 bottom-[72px] z-[6] text-center font-scripture text-[1.3rem] leading-tight font-semibold text-[#f6e9d6] [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">{deity.mantra}</p>
      </div>

      {dhyan && (
        <Dhyan
          src={picture}
          alt={hi ? deity.name_hi : deity.name_en}
          dx={deity.dx}
          halo={[h1, h2, hr]}
          diya={<BrassDiya />}
          onClose={() => setDhyan(false)}
        />
      )}

      <ul className="-mx-4 flex gap-3 overflow-x-auto px-4 pt-9 pb-2 [scrollbar-width:none]" aria-label={t('chooseDeity')}>
        {order.map(form).map((d) => {
          const on = d.id === deity.id
          return (
            <li key={d.id} className="shrink-0">
              <button onClick={() => pick(d.id)} aria-pressed={on} className="relative flex w-[4.2rem] flex-col items-center gap-1">
                {d.id === todayId && (
                  <span className="absolute -top-1 right-0 z-[1] rounded-full bg-flame px-1.5 py-px text-[0.7rem] leading-tight font-bold text-white">{t('cal_today')}</span>
                )}
                {d.face ? (
                  <span
                    className={`block h-[3.4rem] w-[3.4rem] overflow-hidden rounded-full border-[2.5px] transition ${on ? 'border-flame' : 'border-transparent'}`}
                    style={{ background: `radial-gradient(circle at 50% 40%, ${(HALO[d.id] ?? HALO.hanuman)[0]}, ${(HALO[d.id] ?? HALO.hanuman)[1]})` }}
                  >
                    <img src={d.face} alt="" width={56} height={56} className="h-full w-full object-contain object-bottom" />
                  </span>
                ) : (
                  <img
                    src={d.thumb}
                    alt=""
                    width={56}
                    height={56}
                    className={`h-[3.4rem] w-[3.4rem] rounded-full border-[2.5px] object-cover object-top transition ${on ? 'border-flame' : 'border-transparent'}`}
                  />
                )}
                <span className={`text-[0.8rem] leading-tight font-semibold ${on ? 'text-flame' : 'text-dim'}`}>{hi ? d.name_hi : d.name_en}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <section className="mt-4 rounded-3xl bg-white p-4 text-center shadow-[0_1px_6px_rgba(60,30,0,0.08)]">
        <h2 className="text-[1rem] font-bold text-warm">{t('malaTitle')}</h2>
        <div className="mt-2.5 flex justify-center gap-2">
          {TARGETS.map((n) => (
            <button
              key={n}
              onClick={() => chooseTarget(n)}
              aria-pressed={n === target}
              className={`h-10 min-w-[3.2rem] rounded-full border-[1.5px] px-3 text-[0.85rem] font-bold ${n === target ? 'border-flame bg-flame text-ember' : 'border-black/10 bg-white text-warm'}`}
            >
              {n}
            </button>
          ))}
        </div>
        <button onClick={count} aria-label={t('japCount', { count: japToday.count })} className="relative mx-auto mt-2 block aspect-square w-[min(78vw,300px)] touch-manipulation select-none">
          <Mala count={japToday.count} beads={target} />
          <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-[3rem] leading-none text-warm">{japToday.count}</span>
            <span className="text-[0.8rem] font-semibold text-dim">/ {target}</span>
          </span>
        </button>
        <p className="mt-2 text-[0.75rem] text-dim" aria-live="polite">
          {t('sankalp', { count: target })}
        </p>
      </section>

      <section className="mt-4 overflow-hidden rounded-3xl bg-white shadow-[0_1px_6px_rgba(60,30,0,0.08)]">
        {(() => {
          const a = AARTIS.find((x) => x.id === deity.aarti)
          return (
            a && (
              <button onClick={() => openAarti?.(a.id, deity.id)} className="flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-flame/10">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff1d6] text-flame">
                  <IconBell />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.8rem] font-bold text-flame">{t('nav_aarti')}</span>
                  <span className="block truncate text-[1rem] font-semibold text-warm">{hi ? a.title_hi : a.title_en}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-flame">›</span>
              </button>
            )
          )
        })()}
      </section>

      <section className="mt-3 overflow-hidden rounded-3xl bg-white shadow-[0_1px_6px_rgba(60,30,0,0.08)]">
        <div className="flex items-center gap-3 px-4 pt-3.5 pb-1">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff1d6] text-flame">
            <span className="h-6 w-6 [&>svg]:h-full [&>svg]:w-full"><TabBook /></span>
          </span>
          <span className="text-[0.8rem] font-bold text-flame">{t('nav_path')}</span>
        </div>
        <ul>
          {[...(PATHS[deity.id] ?? []), MANTRA_PATH].map((x) => (
            <li key={x.to}>
              <button onClick={() => openPath?.(x.to, deity.id)} className="flex w-full items-center gap-3 px-4 py-2.5 text-left active:bg-flame/10">
                <span className="min-w-0 flex-1 truncate text-[1rem] font-semibold text-warm">{hi ? x.hi : x.en}</span>
                <span aria-hidden="true" className="text-xl text-flame">›</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div
        role="status"
        className={`pointer-events-none fixed top-[40%] left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-flame bg-[#fffaf0] px-6 py-4 text-center text-[1.05rem] font-bold text-flame shadow-[0_20px_50px_rgba(60,30,0,0.3)] transition ${done ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      >
        🙏 {t('sankalpDone', { count: target })}
      </div>
    </main>
  )
}

/** The mala has as many beads as the chosen count, so a mala of 11 is smaller and its beads larger. The strand turns clockwise one bead per jap; beads already counted are darker. */
function Mala({ count, beads }: { count: number; beads: number }) {
  const C = 140
  const R = { 11: 62, 21: 84, 51: 108, 108: 124 }[beads] ?? 124
  const r = Math.min(11, ((2 * Math.PI * R) / beads) * 0.4)
  const k = count % beads
  return (
    <svg viewBox="0 0 280 280" className="h-full w-full" aria-hidden="true">
      <g style={{ transform: `rotate(${(k * 360) / beads}deg)`, transformOrigin: '140px 140px', transition: 'transform .25s' }}>
        {Array.from({ length: beads }, (_, i) => {
          const a = (i / beads) * Math.PI * 2 - Math.PI / 2
          return <circle key={i} cx={C + R * Math.cos(a)} cy={C + R * Math.sin(a)} r={r} fill={k && i >= beads - k ? '#6e2a0a' : '#b0672f'} stroke="#5a2d0c" strokeWidth={0.8} />
        })}
      </g>
      <circle cx={C} cy={C - R - r - 3} r={Math.min(9, r + 2)} fill="#7a3b12" stroke="#e8b44a" strokeWidth={2} />
      <path d={`M140 ${C - R - r - 12} v-8`} stroke="#e8b44a" strokeWidth={3} strokeLinecap="round" />
      <circle cx={C} cy={C} r={R - r - 6} fill="#fffaf0" />
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
