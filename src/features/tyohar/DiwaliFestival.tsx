import { useTranslation } from 'react-i18next'
import { HomeView } from '../diwali/HomeView'
import { PujaView } from '../diwali/PujaView'
import { AartiView } from '../diwali/AartiView'
import { CardMaker } from '../diwali/CardMaker'
import { DIWALI_KATHA } from '../../content/diwaliKatha'
import { Lotus } from '../../ui/Ornaments'
import { KathaStory } from './KathaStory'
import { PartTabs } from './PartTabs'

const PARTS = ['muhurat', 'puja', 'katha', 'aarti', 'card'] as const
export type DiwaliPart = (typeof PARTS)[number]

/** The Diwali page, now one festival in the app: its four parts sit in a row of tabs under the top bar. */
export function DiwaliFestival({ part, open }: { part: DiwaliPart; open: (p: DiwaliPart) => void }) {
  const { t } = useTranslation()
  const label: Record<DiwaliPart, string> = { muhurat: t('tab_home'), puja: t('tab_puja'), aarti: t('tab_aarti'), katha: t('katha'), card: t('tab_card') }
  return (
    <>
      <PartTabs parts={PARTS} labels={label} part={part} open={open} />
      {part === 'muhurat' && <HomeView goTo={open} />}
      {part === 'puja' && <PujaView goTo={open} />}
      {part === 'aarti' && <AartiView />}
      {part === 'katha' && <DiwaliKatha />}
      {part === 'card' && <CardMaker />}
    </>
  )
}

function DiwaliKatha() {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      <p className="text-center text-lg text-dim">{t('katha')}</p>
      <h1 className="mt-2 text-center font-display text-[2.3rem] leading-tight text-warm">{DIWALI_KATHA.title[l]}</h1>
      <Lotus size={40} className="mx-auto mt-3" />
      <KathaStory paras={DIWALI_KATHA.paras} pics={DIWALI_KATHA.pics} />
      {DIWALI_KATHA.more.map((m) => (
        <section key={m.title.hi} className="mt-12">
          <h2 className="text-center font-display text-[1.9rem] leading-tight text-warm">{m.title[l]}</h2>
          <KathaStory paras={m.paras} pics={m.pics} />
        </section>
      ))}
      <p className="mt-10 rounded-3xl bg-night2/70 px-5 py-4 text-[1.05rem] leading-relaxed text-dim ring-1 ring-black/10">{DIWALI_KATHA.note[l]}</p>
    </main>
  )
}
