import { useTranslation } from 'react-i18next'
import type { Bi, VidhiStep } from '../../content/diwaliVidhi'
import { useStored } from '../../lib/useStored'
import { buzz } from '../../lib/audio/bell'
import { Diya } from '../../ui/Diya'
import { Heading, Lotus } from '../../ui/Ornaments'

/** One step at a time, so the phone can rest beside the thali and be moved on with one tap. */
export function Vidhi({ steps, storeKey, doneText, doneLabel, onDone }: { steps: VidhiStep[]; storeKey: string; doneText: string; doneLabel: string; onDone: () => void }) {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  const [step, setStep] = useStored(storeKey, 0)
  const total = steps.length
  const i = Math.min(step, total)
  const finished = i === total
  const num = (n: number) => n.toLocaleString(l === 'hi' ? 'hi-IN-u-nu-deva' : 'en-IN')
  const move = (to: number) => {
    buzz(15)
    setStep(to)
    document.getElementById('vidhi')?.scrollIntoView({ block: 'start' })
  }

  return (
    <section aria-labelledby="vidhi" className="scroll-mt-4">
      {/* A diya for every step: each one lights as its step is done. */}
      <div id="vidhi" className="flex items-end justify-center gap-0.5" aria-hidden="true">
        {steps.map((_, j) => (
          <span key={j} className={j === i ? 'opacity-100' : j < i ? 'opacity-100' : 'opacity-45'}>
            <Diya lit={j < i} size={26} />
          </span>
        ))}
      </div>

      {finished ? (
        <div className="rise mt-6 rounded-3xl bg-night2/70 px-5 py-8 text-center">
          <Lotus size={44} className="mx-auto" />
          <p className="mt-3 font-scripture text-2xl leading-relaxed text-warm">{doneText}</p>
          <button className="btn btn-flame mt-6 w-full text-xl" onClick={onDone}>
            {doneLabel}
          </button>
          <button className="btn btn-ghost mt-3 w-full text-lg" onClick={() => move(0)}>
            {t('restart')}
          </button>
        </div>
      ) : (
        <article key={i} className="rise mt-6" aria-live="polite">
          <p className="text-center text-lg font-semibold text-flame">{t('stepOf', { n: num(i + 1), total: num(total) })}</p>
          <h3 className="mt-1 text-center font-display text-[2rem] leading-snug text-warm">{steps[i].title[l]}</h3>
          <p className="mt-4 text-[1.15rem] leading-relaxed">{steps[i].body[l]}</p>
          {steps[i].mantra && (
            <figure className="mt-6 rounded-3xl bg-night2/80 px-5 py-6 text-center">
              <figcaption className="text-base font-semibold text-dim">{t('mantra')}</figcaption>
              <p className="mt-1 font-scripture text-[1.45rem] font-bold leading-relaxed text-flame">{steps[i].mantra}</p>
            </figure>
          )}
        </article>
      )}

      {!finished && (
        <div
          className="sticky z-10 -mx-5 mt-8 grid grid-cols-[1fr_2fr] gap-3 bg-night/95 px-5 py-3"
          style={{ bottom: 'calc(4.8rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <button className="btn btn-ghost px-3 text-lg disabled:opacity-30" disabled={i === 0} onClick={() => move(i - 1)}>
            {t('prev')}
          </button>
          <button className="btn btn-flame text-xl" onClick={() => move(i + 1)}>
            {t('next')}
          </button>
        </div>
      )}
      <p className="mt-5 text-center text-dim">{t('vidhiNote')}</p>
    </section>
  )
}

export function Samagri({ items, storeKey }: { items: Bi[]; storeKey: string }) {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  const [have, setHave] = useStored<number[]>(storeKey, [])
  const toggle = (i: number) => {
    buzz(15)
    setHave(have.includes(i) ? have.filter((h) => h !== i) : [...have, i])
  }

  return (
    <section className="pb-6">
      <Heading>{t('samagriTitle')}</Heading>
      <p className="mt-2 text-center text-dim">{t('samagriHint')}</p>
      <ul className="mt-6 grid gap-1.5">
        {items.map((s, i) => {
          const on = have.includes(i)
          return (
            <li key={s.en}>
              <button
                onClick={() => toggle(i)}
                aria-pressed={on}
                className={`flex min-h-14 w-full items-center gap-4 rounded-2xl px-4 py-2 text-left text-lg transition-colors ${on ? 'bg-night2/40' : 'bg-night2/80 hover:bg-night2'}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-lg font-bold ${
                    on ? 'border-flame bg-flame text-ember' : 'border-dim/70'
                  }`}
                  aria-hidden="true"
                >
                  {on ? '✓' : ''}
                </span>
                <span className={on ? 'text-dim line-through decoration-1' : ''}>{s[l]}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
