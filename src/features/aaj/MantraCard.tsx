import { useTranslation } from 'react-i18next'
import { MANTRAS } from '../../content/library/mantras'

/** One mantra for each day of the week, Sunday first: Gayatri, Mahamrityunjay, Hanuman, Ganesh, Guru, Saraswati, Vasudev. */
const OF_DAY = [0, 1, 5, 2, 4, 3, 6]

/** Home: today's mantra with its short meaning. No buttons, so it reads as a quiet card. */
export function MantraCard() {
  const { t, i18n } = useTranslation()
  const l = i18n.language === 'hi' ? 'hi' : 'en'
  const verse = MANTRAS.verses[OF_DAY[new Date().getDay()]]
  return (
    <section className="px-4 pt-6">
      <div className="rounded-[18px] border border-[#f0dcc0] bg-[#fff8ee] px-4 py-[18px] text-center">
        <p className="font-display text-[1.7rem] leading-none text-[#d9600b]" aria-hidden="true">ॐ</p>
        <h2 className="mt-1 text-[0.85rem] font-bold text-flame">
          {t('mantraToday')} · {verse.label?.[l]}
        </h2>
        <p lang="sa" className="mt-2.5 whitespace-pre-line text-[1.15rem] leading-[1.65] font-semibold text-[#2b1a10]">{verse.text}</p>
        <div className="mx-auto my-3 h-px w-12 bg-[#e6c9a0]" />
        <p className="text-[0.95rem] leading-normal text-dim">{verse.meaning?.[l]}</p>
      </div>
    </section>
  )
}
