import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS } from '../../content/aartis'
import { FESTIVALS } from '../../content/festivals'
import type { Bi } from '../../content/diwaliVidhi'
import type { FestivalPage } from '../../content/festivalPages'
import { formatClock } from '../../lib/format'
import { festivalTimes } from '../../lib/panchang/festivalTimes'
import { useCity } from '../../ui/CityPicker'
import { BigDiya } from '../../ui/Diya'
import { Lotus } from '../../ui/Ornaments'
import { CardMaker } from '../diwali/CardMaker'
import { AartiView, PORTRAIT } from '../diwali/AartiView'
import { KATHA_PICS } from '../../content/kathaPics'
import { KathaStory } from './KathaStory'
import { PartTabs } from './PartTabs'
import { Samagri, Vidhi } from './Vidhi'

const ALL_PARTS = ['din', 'puja', 'katha', 'aarti', 'card'] as const
export type DayPart = (typeof ALL_PARTS)[number]

/** A festival page built from content: the day and its muhurat, vidhi with samagri, katha, and a greeting card. */
export function FestivalDay({ page, part, open, openAarti }: { page: FestivalPage; part: DayPart; open: (p: DayPart) => void; openAarti: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  const fest = FESTIVALS.find((f) => f.id === page.id)!
  const labels: Record<DayPart, string> = { din: t('ft_day'), puja: t('tab_puja'), katha: t('katha'), aarti: t('tab_aarti'), card: t('tab_card') }
  // The aarti tab appears only for festivals that have aartis, second last, just before the greeting
  const PARTS = ALL_PARTS.filter((x) => x !== 'aarti' || page.aartis.length > 0)
  return (
    <>
      <PartTabs parts={PARTS} labels={labels} part={part} open={open} />
      {part === 'din' && <Overview page={page} open={open} />}
      {part === 'puja' && (
        <main className="mx-auto max-w-xl px-5 pt-4">
          <h1 className="text-center font-display text-[2.3rem] leading-tight text-warm">{t('vidhiTitle')}</h1>
          <p className="mx-auto mt-2 max-w-sm text-center text-lg text-dim">{page.vidhiIntro[l]}</p>
          <div className="mt-10 space-y-16">
            <Vidhi steps={page.vidhi} storeKey={`${page.id}2026:step`} doneText={t('ft_done')} doneLabel={t('readKatha')} onDone={() => open('katha')} />
            <Samagri items={page.samagri} storeKey={`${page.id}2026:samagri`} />
            {page.regional && <Notes title={t('ft_regional')} items={page.regional} />}
          </div>
        </main>
      )}
      {part === 'katha' && (
        <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
          <p className="text-center text-lg text-dim">{l === 'hi' ? fest.name_hi : fest.name_en}</p>
          <h1 className="mt-2 text-center font-display text-[2.3rem] leading-tight text-warm">{page.katha.title[l]}</h1>
          <Lotus size={40} className="mx-auto mt-3" />
          <KathaStory paras={page.katha.paras} pics={KATHA_PICS[page.id]} />
          {page.more?.map((m) => (
            <section key={m.title.hi} className="mt-12">
              <h2 className="text-center font-display text-[1.9rem] leading-tight text-warm">{m.title[l]}</h2>
              <KathaStory paras={m.paras} pics={m.pics} />
            </section>
          ))}
          {page.beliefs && <Notes title={t('ft_beliefs')} items={page.beliefs} />}
          {page.regional && !page.more && <Notes title={t('ft_regional')} items={page.regional} />}
          <button className="btn btn-flame mt-8 w-full text-xl" onClick={() => open('card')}>
            {t('makeCard')}
          </button>
        </main>
      )}
      {part === 'aarti' && <AartiPart page={page} openAarti={openAarti} />}
      {part === 'card' && (
        <CardMaker
          title={page.card.title}
          greetings={page.greetings}
          blessing={page.card.blessing}
          groups={page.card.groups}
          defaultPicture={page.card.picture}
          fileName={`${page.id}.png`}
          storeKey={`${page.id}CardPicture`}
        />
      )}
    </>
  )
}

/** A time window, or one time when the moment is a point such as moonrise. */
const range = (x: { start: Date; end: Date }, lang: string) => (x.start.getTime() === x.end.getTime() ? formatClock(x.start, lang) : `${formatClock(x.start, lang)} – ${formatClock(x.end, lang)}`)

/** A short list of “it is also said” or “in some homes” lines, in a quiet card. */
function Notes({ title, items }: { title: string; items: Bi[] }) {
  const { i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  return (
    <section className="mt-10 rounded-3xl bg-night2/70 px-5 py-5 ring-1 ring-black/10">
      <h2 className="font-display text-[1.5rem] text-warm">{title}</h2>
      <ul className="mt-2 space-y-3 text-[1.1rem] leading-relaxed text-warm/90">
        {items.map((x) => (
          <li key={x.hi} className="flex gap-3">
            <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
            <span>{x[l]}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Overview({ page, open }: { page: FestivalPage; open: (p: DayPart) => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const l = lang as 'hi' | 'en'
  const [city] = useCity()
  const fest = FESTIVALS.find((f) => f.id === page.id)!
  const times = useMemo(() => festivalTimes(page.id, city, fest.date), [page.id, city, fest.date])
  const dateLine = new Date(fest.date + 'T06:00:00Z').toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long' })
  const [first, ...rest] = times

  return (
    <main className="pb-6">
      <section className="lamplight -mt-[4rem] pt-[4.5rem] pb-6 text-center">
        <div className="rise mx-auto w-full max-w-xl px-5">
          <BigDiya className="mx-auto -mb-6 h-[8.5rem] w-auto" />
          <h1 className="font-display text-[clamp(2.6rem,12vw,3.6rem)] leading-[1.05] text-warm">{l === 'hi' ? fest.name_hi : fest.name_en}</h1>
          <p className="mt-2 text-[1.1rem] text-dim">
            {dateLine} · {page.tithi[l]}
          </p>
          {first && (
            <>
              <p className="mt-5 text-[1.15rem] text-warm">{t(first.label)}</p>
              <p className="font-display text-[clamp(2rem,9vw,2.8rem)] leading-tight text-flame">
                {range(first, lang)}
              </p>
            </>
          )}
          <p className="mt-3 text-[1.1rem] text-warm">
            {t('kc_in')} {lang === 'hi' ? city.name_hi : city.name_en}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-5">
        {rest.length > 0 && (
          <dl className="grid grid-cols-2 gap-3">
            {rest.map((x) => (
              <div key={x.label} className="rounded-2xl bg-night2/80 px-4 py-3">
                <dt className="text-[1.05rem] leading-snug text-dim">
                  {t(x.label)}
                  {x.nextMorning ? ` (${t('ft_nextMorning')})` : ''}
                </dt>
                <dd className="text-[1.25rem] font-semibold leading-snug text-warm">
                  {range(x, lang)}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <p className="mt-5 text-[1.15rem] leading-relaxed text-warm/90">{page.intro[l]}</p>

        <div className="mt-6 grid gap-3">
          <button className="btn btn-flame text-xl" onClick={() => open('puja')}>
            {t('kc_seeVidhi')}
          </button>
          <button className="btn btn-ghost text-xl" onClick={() => open('katha')}>
            {t('readKatha')}
          </button>
          <button className="btn btn-ghost text-xl" onClick={() => open('card')}>
            {t('makeCard')}
          </button>
        </div>

      </div>
    </main>
  )
}

/** The festival's aartis, one tap to sing along. */
function AartiPart({ page, openAarti }: { page: FestivalPage; openAarti: (id: string) => void }) {
  const { i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  const aartis = page.aartis.map((id) => AARTIS.find((a) => a.id === id)).filter((a) => !!a)
  // With only one aarti there is nothing to choose: open it straight away
  if (aartis.length === 1) return <AartiView key={aartis[0].id} aartis={[aartis[0]]} />
  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      <ul className="grid gap-3">
        {aartis.map((a) => (
          <li key={a.id}>
            <button onClick={() => openAarti(a.id)} className="flex w-full items-center gap-4 rounded-2xl bg-night2/70 px-4 py-3 text-left ring-1 ring-black/10 active:scale-[0.99]">
              <img src={PORTRAIT[a.id] ?? '/art/thumb/H4ilfu3vftk.jpg'} alt="" width={44} height={60} className="h-[3.75rem] w-11 shrink-0 rounded-t-full object-cover object-top ring-2 ring-flame/60" />
              <span className="flex-1 font-display text-[1.35rem] leading-tight text-warm">{l === 'hi' ? a.title_hi : a.title_en}</span>
              <span aria-hidden="true" className="text-2xl text-flame">›</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
