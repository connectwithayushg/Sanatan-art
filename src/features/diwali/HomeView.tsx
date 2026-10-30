import { WhatsAppLogo } from '../../ui/WhatsAppLogo'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { diwaliMuhurat, type DiwaliMuhurat } from '../../lib/panchang/diwali'
import { useCity } from '../../ui/CityPicker'
import { useStored } from '../../lib/useStored'
import { buzz, ringBell } from '../../lib/audio/bell'
import { formatClock, formatDateTime } from '../../lib/format'
import { BigDiya, Diya } from '../../ui/Diya'
import { Heading, Lotus, NewMoon } from '../../ui/Ornaments'

const DIYAS = 7

export function HomeView({ goTo }: { goTo: (tab: 'puja' | 'aarti' | 'card') => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [city] = useCity()
  const muhurat = useMemo(() => diwaliMuhurat(city), [city])

  const shareLink = async () => {
    const text = `${t('shareText')} ${location.origin}`
    try {
      if (navigator.share) await navigator.share({ text, url: location.origin })
      else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    } catch {
      /* cancelled */
    }
  }

  return (
    <main>
      <section className="lamplight -mt-[4.5rem] flex min-h-[calc(100dvh-4.8rem)] flex-col pt-[5.5rem] text-center">
        <div className="rise mx-auto w-full max-w-xl px-5">
          <div className="text-dim">
            <NewMoon />
          </div>
          <p className="mt-1 text-[1.05rem] leading-snug text-dim">{t('amavasyaNight')}</p>
          {muhurat && (
            <h1 className="mt-5 font-display leading-[1.05] text-warm [text-shadow:0_0_40px_#ffb43a55]">
              <span className="sr-only">{t('muhuratTitle')}: </span>
              <span className="block whitespace-nowrap text-[clamp(3rem,15vw,4.6rem)]">{formatClock(muhurat.puja.start, lang)}</span>
              <span className="my-1 block font-body text-[1.15rem] font-normal opacity-85 [text-shadow:none]">{t('to')}</span>
              <span className="block whitespace-nowrap text-[clamp(3rem,15vw,4.6rem)]">{formatClock(muhurat.puja.end, lang)}</span>
            </h1>
          )}
          <label className="mt-4 inline-flex flex-wrap items-baseline justify-center gap-x-2 text-[1.1rem] text-warm">
            <span>{t('cityLine')}</span>
            <span>{lang === 'hi' ? city.name_hi : city.name_en}</span>
          </label>
        </div>

        <div className="relative mx-auto mt-auto w-full max-w-md px-2">
          <BigDiya className="mx-auto block max-h-[30dvh] w-full" />
          <div className="-mt-8 pb-10">
            <button className="btn btn-flame text-[1.2rem] shadow-[0_0_0_6px_#ffb43a33]" onClick={() => goTo('puja')}>
              {t('startPuja')}
            </button>
          </div>
        </div>
      </section>

      <Doorstep />

      <section className="mx-auto max-w-xl px-5 pt-14">
        {muhurat && <Details muhurat={muhurat} />}

        <div className="mt-10 grid gap-3">
          <button className="btn btn-ghost text-xl" onClick={() => goTo('aarti')}>
            {t('openAarti')}
          </button>
          <button className="btn btn-ghost text-xl" style={{ borderColor: '#1f8f4e', color: '#1f8f4e' }} onClick={shareLink}>
            <WhatsAppLogo size={26} /> {t('shareLink')}
          </button>
        </div>

        <footer className="mt-14 space-y-2 pb-6 text-center text-dim">
          <Lotus className="mx-auto" />
          <p className="text-sm">{t('credits')}</p>
          <p className="text-sm">{t('artCredit')}</p>
        </footer>
      </section>
    </main>
  )
}

/** A row of seven diyas for the doorstep, each lit with a touch. */
function Doorstep() {
  const { t } = useTranslation()
  const [lit, setLit] = useStored<boolean[]>('diwali2026:diyas', Array(DIYAS).fill(false))
  const all = lit.every(Boolean)

  const light = (i: number) => {
    if (lit[i]) return
    const next = lit.map((v, j) => (j === i ? true : v))
    setLit(next)
    buzz(20)
    ringBell(next.every(Boolean) ? 440 : 660, 0.25)
  }

  return (
    <section className="bg-deep pb-10 pt-12 text-center">
      <div className="mx-auto max-w-xl px-5">
        <Heading>{t('diyasTitle')}</Heading>
        <p className="mt-2 text-lg text-dim" aria-live="polite">
          {all ? t('diyasDone') : t('diyasHint')}
        </p>
        <div className="mt-6 flex items-end justify-between">
          {lit.map((on, i) => (
            <button
              key={i}
              onClick={() => light(i)}
              aria-pressed={on}
              aria-label={`${t('diyasTitle')} ${i + 1}`}
              className="flex min-h-16 min-w-0 flex-1 items-end justify-center transition active:scale-95"
            >
              <Diya lit={on} size={46} />
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            buzz(40)
            ringBell()
          }}
          className="btn btn-ghost mt-8 w-full text-xl"
        >
          <BellGlyph /> {t('ringBell')}
        </button>
      </div>
    </section>
  )
}

function BellGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3 V6 M8 23 Q9 9 16 7 Q23 9 24 23 Z M6 23 H26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="26.5" r="2" fill="currentColor" />
    </svg>
  )
}

/** The almanac-style table for those who want the full reckoning. */
function Details({ muhurat }: { muhurat: DiwaliMuhurat }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const range = (r: { start: Date; end: Date } | null) =>
    r ? `${formatClock(r.start, lang)} – ${formatClock(r.end, lang)}` : '–'
  const rows: [string, string][] = [
    [t('sunset'), formatClock(muhurat.sunset, lang)],
    [t('pradosh'), range(muhurat.pradosh)],
    [t('vrishabha'), range(muhurat.vrishabha)],
    [t('amavasya'), `${formatDateTime(muhurat.amavasya.start, lang)} – ${formatDateTime(muhurat.amavasya.end, lang)}`],
  ]
  return (
    <details className="group rounded-2xl bg-night2/70 px-5 py-1">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-lg font-semibold">
        {t('moreDetails')}
        <span className="text-2xl text-flame transition group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <dl className="pb-4">
        {rows.map(([k, v]) => (
          <div key={k} className="py-2">
            <dt className="text-dim">{k}</dt>
            <dd className="text-lg font-semibold">{v}</dd>
          </div>
        ))}
        <p className="mt-3 text-dim">{t('muhuratNote')}</p>
      </dl>
    </details>
  )
}
