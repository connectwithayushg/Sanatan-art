import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FESTIVALS } from '../../content/festivals'
import { KC_GREETINGS, KC_KATHA, KC_SAMAGRI, KC_VIDHI } from '../../content/karwaChauth'
import { karwaChauthTimes } from '../../lib/panchang/festivalTimes'
import { formatClock } from '../../lib/format'
import { useCity } from '../../ui/CityPicker'
import { Lotus } from '../../ui/Ornaments'
import { CardMaker } from '../diwali/CardMaker'
import { KATHA_PICS } from '../../content/kathaPics'
import { KathaStory } from './KathaStory'
import { PartTabs } from './PartTabs'
import { Samagri, Vidhi } from './Vidhi'
import { AARTIS } from '../../content/aartis'
import { AartiView } from '../diwali/AartiView'

const PARTS = ['vrat', 'puja', 'katha', 'aarti', 'card'] as const
export type KcPart = (typeof PARTS)[number]
const FEST = FESTIVALS.find((f) => f.id === 'karwa-chauth')!

export function KarwaChauth({ part, open }: { part: KcPart; open: (p: KcPart) => void }) {
  const { t } = useTranslation()
  const labels: Record<KcPart, string> = { vrat: t('kc_vrat'), puja: t('tab_puja'), katha: t('katha'), aarti: t('tab_aarti'), card: t('tab_card') }
  return (
    <>
      <PartTabs parts={PARTS} labels={labels} part={part} open={open} />
      {part === 'vrat' && <Overview open={open} />}
      {part === 'puja' && (
        <main className="mx-auto max-w-xl px-5 pt-4">
          <h1 className="text-center font-display text-[2.3rem] leading-tight text-warm">{t('vidhiTitle')}</h1>
          <p className="mx-auto mt-2 max-w-sm text-center text-lg text-dim">{t('kc_pujaIntro')}</p>
          <div className="mt-10 space-y-16">
            <Vidhi steps={KC_VIDHI} storeKey="kc2026:step" doneText={t('kc_done')} doneLabel={t('readKatha')} onDone={() => open('katha')} />
            <Samagri items={KC_SAMAGRI} storeKey="kc2026:samagri" />
          </div>
        </main>
      )}
      {part === 'katha' && <Katha />}
      {part === 'aarti' && <AartiView key="karwa" aartis={AARTIS.filter((a) => a.id === 'karwa')} />}
      {part === 'card' && (
        <CardMaker
          title={{ hi: 'करवा चौथ', en: 'Karwa Chauth' }}
          greetings={KC_GREETINGS}
          blessing="॥ अखंड सौभाग्य ॥"
          groups={['moon', 'suhaag', 'diya']}
          defaultPicture="moon-1"
          fileName="karwa-chauth.png"
          storeKey="kcCardPicture"
        />
      )}
    </>
  )
}

function Overview({ open }: { open: (p: KcPart) => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [city] = useCity()
  const times = useMemo(() => karwaChauthTimes(city, FEST.date), [city])
  const dateLine = new Date(FEST.date + 'T06:00:00Z').toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <main>
      <section className="moonlight -mt-[4rem] pt-[5rem] pb-8 text-center">
        <div className="rise mx-auto w-full max-w-xl px-5">
          <Moon />
          <p className="mt-4 text-[1.1rem] text-dim">
            {dateLine} · {t('kc_tithi')}
          </p>
          <p className="mt-4 text-[1.15rem] text-warm">{t('kc_moonrise')}</p>
          <h1 className="font-display text-[clamp(3rem,15vw,4.6rem)] leading-[1.05] text-warm ">
            {formatClock(times?.moonrise ?? null, lang)}
          </h1>
          <p className="mt-3 text-[1.1rem] text-warm">
            {t('kc_in')} {lang === 'hi' ? city.name_hi : city.name_en}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-[1rem] text-dim">{t('kc_moonNote')}</p>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-5">
        {times && (
          <dl className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-night2/80 px-4 py-3">
              <dt className="text-[1.05rem] text-dim">{t('kc_fastStart')}</dt>
              <dd className="text-[1.3rem] font-semibold text-warm">{formatClock(times.fastStart, lang)}</dd>
            </div>
            <div className="rounded-2xl bg-night2/80 px-4 py-3">
              <dt className="text-[1.05rem] text-dim">{t('kc_pujaMuhurat')}</dt>
              <dd className="text-[1.3rem] font-semibold leading-snug text-warm">
                {formatClock(times.puja.start, lang)} – {formatClock(times.puja.end, lang)}
              </dd>
            </div>
          </dl>
        )}
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

/** Kartik Krishna Chaturthi: a moon just past full, lit on its left, waning from the right. */
function Moon() {
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" className="breathe mx-auto block" aria-hidden="true">
      <defs>
        <radialGradient id="kc-glow">
          <stop offset="0.45" stopColor="#fff6dc" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff6dc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="kc-face" cx="0.4" cy="0.4">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="1" stopColor="#f1ddb0" />
        </radialGradient>
        <clipPath id="kc-lit">
          <path d="M66 26 A40 40 0 0 0 66 106 A30 40 0 0 0 66 26Z" />
        </clipPath>
      </defs>
      <circle cx="66" cy="66" r="64" fill="url(#kc-glow)" />
      <circle cx="66" cy="66" r="40" fill="#2a2f5c" />
      <circle cx="66" cy="66" r="40" fill="url(#kc-face)" clipPath="url(#kc-lit)" />
      <circle cx="52" cy="56" r="5" fill="#e6cf9c" opacity="0.6" clipPath="url(#kc-lit)" />
      <circle cx="58" cy="80" r="7" fill="#e6cf9c" opacity="0.5" clipPath="url(#kc-lit)" />
    </svg>
  )
}

function Katha() {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      <p className="text-center text-lg text-dim">{t('kc_kathaIntro')}</p>
      <h1 className="mt-2 text-center font-display text-[2.3rem] leading-tight text-warm">{KC_KATHA.title[l]}</h1>
      <Lotus size={40} className="mx-auto mt-3" />
      <KathaStory paras={KC_KATHA.paras} pics={KATHA_PICS['karwa-chauth']} endLine />
    </main>
  )
}
