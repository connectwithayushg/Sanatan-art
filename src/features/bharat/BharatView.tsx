import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useStored } from '../../lib/useStored'
import { GROUPS, GROUP_ORDER, PHOTO_CREDITS, SOON, TEMPLE_BY_ID, type Nearby, type Temple } from '../../content/bharatTemples'
import { StateMap } from './StateMap'
import { TempleVideo } from './TempleVideo'
import { TempleSearch } from './TempleSearch'

/** Everything under #mandir/bharat: categories, a category's list, the state map and a temple page. */
export function BharatView({ sub, open }: { sub: string[]; open: (path: string) => void }) {
  const [head, arg] = sub
  const [visited, setVisited] = useStored<string[]>('bharat-visited', [])
  const toggle = (id: string) => setVisited((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]))

  if (head === 't' && arg && TEMPLE_BY_ID[arg]) {
    return <TemplePage key={arg} temple={TEMPLE_BY_ID[arg]} done={visited.includes(arg)} toggle={() => toggle(arg)} open={open} />
  }
  if (head === 'map') return <MapPage open={open} />
  const group = GROUPS.find((g) => g.id === head)
  if (group) return <GroupPage group={group} visited={visited} open={open} />
  return <Categories open={open} />
}

function Back() {
  const { i18n } = useTranslation()
  return (
    <button onClick={() => history.back()} className="mb-2 -ml-1 flex min-h-11 items-center gap-1 rounded-full px-2 text-[1.05rem] font-semibold text-flame">
      <span aria-hidden="true" className="text-2xl leading-none">
        ‹
      </span>
      {i18n.language === 'hi' ? 'पीछे' : 'Back'}
    </button>
  )
}

function Title({ children, line }: { children: string; line?: string }) {
  return (
    <>
      <h1 className="text-center font-display text-[2.1rem] leading-tight text-warm">{children}</h1>
      {line && <p className="mt-1 text-center text-lg text-dim">{line}</p>}
    </>
  )
}

function Row({ img, title, line, tag, onClick }: { img: string; title: string; line: string; tag?: string; onClick?: () => void }) {
  const inner = (
    <>
      <img src={img} alt="" width={60} height={60} loading="lazy" className="size-[60px] shrink-0 rounded-full object-cover ring-2 ring-flame/50" />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[1.45rem] leading-tight text-warm">{title}</span>
        <span className="block text-[1rem] text-dim">{line}</span>
      </span>
      {tag ? (
        <span className="rounded-full bg-black/5 px-3 py-0.5 text-[0.9rem] font-semibold text-dim">{tag}</span>
      ) : (
        <span aria-hidden="true" className="text-3xl text-flame">
          ›
        </span>
      )}
    </>
  )
  return onClick ? (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-3xl bg-white px-4 py-3 text-left ring-1 ring-black/10 transition active:scale-[0.99]"
    >
      {inner}
    </button>
  ) : (
    <div className="flex w-full items-center gap-4 rounded-3xl bg-white/60 px-4 py-3 opacity-70 ring-1 ring-black/5">{inner}</div>
  )
}

/** Kept for the session, so coming back from a temple page shows the same search results. */
let lastQuery = ''

function Categories({ open }: { open: (p: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const pick = (a: { hi: string; en: string }) => (hi ? a.hi : a.en)
  const h = (a: string, b: string) => (hi ? a : b)
  const [q, setQ0] = useState(lastQuery)
  const setQ = (v: string) => setQ0((lastQuery = v))
  return (
    <main className="mx-auto max-w-xl px-5 pt-3 pb-6">
      <Back />
      <Title line={h('तीर्थ, देवता और राज्य के अनुसार', 'By pilgrimage, deity and state')}>{h('भारत के मंदिर', 'Temples of Bharat')}</Title>
      <TempleSearch q={q} setQ={setQ} hi={hi} open={open} />
      {!q.trim() && (
        <>
          <h2 className="mt-6 mb-2 text-[1.05rem] font-semibold text-dim">{h('तीर्थ यात्राएँ', 'Pilgrimages')}</h2>
          <ul className="grid gap-3">
            {GROUPS.filter((g) => g.section === 'yatra').map((g) => (
              <li key={g.id}>
                <Row
                  img={`/art/bharat/${g.cover}-t.webp`}
                  title={pick(g.name)}
                  line={`${GROUP_ORDER[g.id].length} ${h('मंदिर', 'temples')} · ${pick(g.line)}`}
                  onClick={() => open(`bharat/${g.id}`)}
                />
              </li>
            ))}
            {SOON.map((g) => (
              <li key={g.id}>
                <Row img={`/art/bharat/${g.cover}-t.webp`} title={pick(g.name)} line={pick(g.line)} tag={h('जल्द', 'Soon')} />
              </li>
            ))}
          </ul>

          <h2 className="mt-6 mb-2 text-[1.05rem] font-semibold text-dim">{h('स्थान के अनुसार', 'By place')}</h2>
          <ul className="grid gap-3">
            <li>
              <Row
                img="/art/bharat/somnath-t.webp"
                title={h('राज्यवार नक्शा', 'State-wise map')}
                line={h('राज्य पर टैप करके उसके मंदिर देखें', 'Tap a state to see its temples')}
                onClick={() => open('bharat/map')}
              />
            </li>
            {GROUPS.filter((g) => g.section === 'place').map((g) => (
              <li key={g.id}>
                <Row
                  img={`/art/bharat/${g.cover}-t.webp`}
                  title={pick(g.name)}
                  line={`${GROUP_ORDER[g.id].length} ${h('मंदिर', 'temples')} · ${pick(g.line)}`}
                  onClick={() => open(`bharat/${g.id}`)}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  )
}

function GroupPage({ group, visited, open }: { group: (typeof GROUPS)[number]; visited: string[]; open: (p: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const ids = GROUP_ORDER[group.id]
  const n = ids.filter((id) => visited.includes(id)).length
  return (
    <main className="mx-auto max-w-xl px-5 pt-3 pb-6">
      <Back />
      <Title line={hi ? group.line.hi : group.line.en}>{hi ? group.name.hi : group.name.en}</Title>
      <div className="mt-4 rounded-2xl bg-white p-3 ring-1 ring-black/10">
        <div className="flex items-baseline justify-between text-[1.02rem]">
          <span className="font-semibold text-warm">{hi ? 'मेरी यात्रा' : 'My yatra'}</span>
          <span className="text-dim">{hi ? `${n} / ${ids.length} दर्शन किए` : `${n} of ${ids.length} visited`}</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/10">
          <div className="h-full rounded-full bg-flame transition-all" style={{ width: `${(n / ids.length) * 100}%` }} />
        </div>
      </div>
      <ol className="mt-4 grid gap-3">
        {ids.map((id, i) => {
          const t = TEMPLE_BY_ID[id]
          return (
            <li key={id}>
              <button
                onClick={() => open(`bharat/t/${id}`)}
                className="flex w-full items-center gap-3 rounded-3xl bg-white px-3 py-3 text-left ring-1 ring-black/10 transition active:scale-[0.99]"
              >
                <span className="w-6 shrink-0 text-center font-display text-lg text-dim">{i + 1}</span>
                <img src={`/art/bharat/${id}-t.webp`} alt="" width={60} height={60} loading="lazy" className="size-[60px] shrink-0 rounded-2xl object-cover" />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[1.4rem] leading-tight text-warm">{hi ? t.name.hi : t.name.en}</span>
                  <span className="block truncate text-[0.98rem] text-dim">{hi ? t.place.hi : t.place.en}</span>
                  {visited.includes(id) && <span className="block text-[0.95rem] font-semibold text-leaf">✓ {hi ? 'दर्शन किए' : 'Visited'}</span>}
                </span>
                <span aria-hidden="true" className="text-3xl text-flame">
                  ›
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </main>
  )
}

function MapPage({ open }: { open: (p: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  return (
    <main className="mx-auto max-w-xl px-5 pt-3 pb-6">
      <Back />
      <Title line={hi ? 'राज्य पर टैप करके उसके मंदिर देखें' : 'Tap a state to see its temples'}>{hi ? 'राज्यवार नक्शा' : 'State-wise map'}</Title>
      <div className="mt-4">
        <StateMap openTemple={(id) => open(`bharat/t/${id}`)} />
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="font-display text-[1.5rem] text-warm">{title}</h2>
      <div className="mt-2 text-[1.08rem] leading-relaxed text-warm/90">{children}</div>
    </section>
  )
}

function TemplePage({ temple: t, done, toggle, open }: { temple: Temple; done: boolean; toggle: () => void; open: (p: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const p = (a: { hi: string; en: string }) => (hi ? a.hi : a.en)
  const h = (a: string, b: string) => (hi ? a : b)
  const [near, setNear] = useState<Nearby | null>(null)
  const facts: [string, string][] = [
    [h('सबसे अच्छा समय', 'Best time'), p(t.best)],
    [h('नियम', 'Rules'), p(t.rules)],
  ]
  return (
    <main className="mx-auto max-w-xl pb-6">
      <div className="relative">
        <img src={`/art/bharat/${t.id}.webp`} alt={p(t.name)} className="aspect-[16/10] w-full object-cover" />
        <button
          onClick={() => history.back()}
          aria-label={h('पीछे', 'Back')}
          className="absolute top-3 left-3 grid size-11 place-items-center rounded-full bg-white/90 text-3xl leading-none text-flame shadow"
        >
          ‹
        </button>
      </div>
      <div className="px-5">
        <h1 className="mt-4 font-display text-[2.3rem] leading-tight text-warm">{p(t.name)}</h1>
        <p className="text-[1.05rem] text-dim">{p(t.place)}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {t.tags.map((g, i) => (
            <span key={i} className="rounded-full bg-flame/10 px-3 py-1 text-[0.95rem] font-semibold text-flame">
              {p(g)}
            </span>
          ))}
        </div>

        <Section title={h('महत्व', 'Importance')}>{p(t.importance)}</Section>
        <Section title={h('पौराणिक कथा', 'Legend')}>{p(t.katha)}</Section>
        <Section title={h('इतिहास', 'History')}>{p(t.history)}</Section>
        {t.note && (
          <p className="mt-4 rounded-2xl bg-flame/10 px-4 py-3 text-[1.02rem] leading-relaxed text-warm">
            <b>{h('मतभेद: ', 'Where views differ: ')}</b>
            {p(t.note)}
          </p>
        )}
        <Section title={h('क्या करें', 'What to do')}>
          <ul className="grid gap-1.5">
            {t.todo.map((x, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-flame">•</span>
                <span>{p(x)}</span>
              </li>
            ))}
          </ul>
        </Section>
        <div className="mt-5 grid gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/10">
          {facts.map(([k, v]) => (
            <div key={k}>
              <div className="text-[0.95rem] font-semibold text-dim">{k}</div>
              <div className="text-[1.05rem] leading-snug text-warm">{v}</div>
            </div>
          ))}
        </div>

        <Section title={h('कैसे पहुँचें', 'How to reach')}>
          <dl className="grid gap-3">
            {(
              [
                [h('सड़क', 'By road'), t.how.road],
                [h('रेल', 'By rail'), t.how.rail],
                [h('हवाई जहाज़', 'By air'), t.how.air],
              ] as const
            ).map(([k, v]) => (
              <div key={k}>
                <dt className="font-semibold text-warm">{k}</dt>
                <dd>{p(v)}</dd>
              </div>
            ))}
          </dl>
          <a
            href={t.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex min-h-11 items-center rounded-full bg-flame/10 px-4 font-semibold text-flame"
          >
            {h('मैप में खोलें', 'Open in Maps')} ↗
          </a>
        </Section>

        {t.nearby.length > 0 && (
          <Section title={h('आस-पास के मंदिर', 'Nearby temples')}>
            <ul className="grid gap-2">
              {t.nearby.map((n, i) => (
                <li key={i}>
                  <button
                    onClick={() => setNear(n)}
                    className="flex w-full items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 text-left ring-1 ring-black/10 active:scale-[0.99]"
                  >
                    <span className="font-semibold text-warm">{p(n.name)}</span>
                    <span className="shrink-0 text-[0.98rem] text-dim">{p(n.dist)} ›</span>
                  </button>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={h('आधिकारिक जानकारी', 'Official information')}>
          <p className="text-[1rem] text-dim">
            {h(
              'दर्शन और आरती का समय, शुल्क और बुकिंग बदलते रहते हैं, इसलिए मंदिर से ही पूछकर जाएँ।',
              'Darshan and aarti timings, fees and booking change often, so please confirm with the temple before you go.',
            )}
          </p>
          {t.site && (
            <a
              href={t.site}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex min-h-11 items-center rounded-full bg-flame/10 px-4 font-semibold text-flame"
            >
              {h('मंदिर की वेबसाइट', 'Temple website')} ↗
            </a>
          )}
        </Section>

        {t.video && (
          <Section title={h('वीडियो', 'Video')}>
            <TempleVideo video={t.video} />
          </Section>
        )}

        <button
          onClick={toggle}
          aria-pressed={done}
          className={`mt-8 w-full min-h-14 rounded-full px-6 text-[1.25rem] font-semibold shadow transition active:scale-[0.99] ${done ? 'bg-leaf text-white' : 'bg-flame text-white'}`}
        >
          {done ? `✓ ${h('दर्शन किए', 'Visited')}` : h('दर्शन किए', 'I have visited')}
        </button>
        <p className="mt-2 text-center text-[0.95rem] text-dim">{h('आपकी यात्रा इसी फ़ोन में सहेजी जाती है।', 'Your yatra is saved on this phone.')}</p>
        <p className="mt-4 text-center text-[0.8rem] text-dim">
          {h('चित्र: ', 'Photo: ')}
          {PHOTO_CREDITS[t.id]}
        </p>
      </div>

      {near && <NearbySheet n={near} onClose={() => setNear(null)} open={open} />}
    </main>
  )
}

/** Small bottom sheet for a nearby temple: picture when we have one, what it is, and how far from the main temple. */
function NearbySheet({ n, onClose, open }: { n: Nearby; onClose: () => void; open: (p: string) => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const p = (a: { hi: string; en: string }) => (hi ? a.hi : a.en)
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-xl overflow-hidden rounded-t-3xl bg-white pb-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {n.photoOf && <img src={`/art/bharat/${n.photoOf}.webp`} alt="" className="aspect-[16/8] w-full object-cover" />}
        <div className="px-5 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-[1.6rem] leading-tight text-warm">{p(n.name)}</h3>
            <button
              onClick={onClose}
              aria-label={hi ? 'बंद करें' : 'Close'}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-black/5 text-2xl text-dim"
            >
              ×
            </button>
          </div>
          <p className="mt-1 text-[1rem] font-semibold text-flame">{p(n.dist)}</p>
          <p className="mt-2 text-[1.05rem] leading-relaxed text-warm/90">{p(n.text)}</p>
          {n.photoOf && TEMPLE_BY_ID[n.photoOf] && (
            <button
              onClick={() => {
                onClose()
                open(`bharat/t/${n.photoOf}`)
              }}
              className="mt-3 min-h-11 rounded-full bg-flame px-5 font-semibold text-white"
            >
              {hi ? 'पूरा पेज खोलें' : 'Open full page'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
