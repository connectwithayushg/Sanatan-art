import { useTranslation } from 'react-i18next'
import { SAMAGRI, VIDHI } from '../../content/diwaliVidhi'
import { Samagri, Vidhi } from '../tyohar/Vidhi'

export function PujaView({ goTo }: { goTo: (tab: 'aarti') => void }) {
  const { t, i18n } = useTranslation()
  return (
    <main className="mx-auto max-w-xl px-5">
      <figure className="rise mx-auto mt-4 max-w-[22rem]">
        <img
          src="/art/lakshmi-1896.jpg"
          width={800}
          height={1132}
          alt={i18n.language === 'hi' ? 'कमल पर खड़ी माँ लक्ष्मी, राजा रवि वर्मा का चित्र' : 'Maa Lakshmi standing on a lotus, painting by Raja Ravi Varma'}
          className="fade-down block max-h-[52dvh] w-full object-cover object-top"
        />
      </figure>
      <h1 className="mt-6 text-center font-display text-[2.3rem] leading-tight text-warm">{t('vidhiTitle')}</h1>
      <p className="mx-auto mt-2 max-w-sm text-center text-lg text-dim">{t('pujaIntro')}</p>
      <div className="mt-10 space-y-16">
        <Vidhi steps={VIDHI} storeKey="diwali2026:step" doneText={t('vidhiDone')} doneLabel={t('openAarti')} onDone={() => goTo('aarti')} />
        <Samagri items={SAMAGRI} storeKey="diwali2026:samagri" />
      </div>
    </main>
  )
}

