import { useTranslation } from 'react-i18next'
import { TEMPLES } from '../../content/bharatTemples'

/** Home card for भारत के मंदिर: full-width photo with the title over it. */
export function BharatHomeCard({ onOpen }: { onOpen: () => void }) {
  const { i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  return (
    <section className="px-4 pt-6">
      <button onClick={onOpen} className="relative block h-[9.5rem] w-full overflow-hidden rounded-3xl text-left active:scale-[0.99]">
        <img src="/art/bharat/kedarnath.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <span className="relative flex h-full flex-col justify-end p-4">
          <span className="font-display text-[1.6rem] leading-tight text-white">{hi ? 'भारत के मंदिर' : 'Temples of Bharat'}</span>
          <span className="text-[0.9rem] text-white/85">{hi ? 'ज्योतिर्लिंग, चार धाम, अष्टविनायक, पंच केदार और भी' : 'Jyotirlingas, Char Dham, Ashtavinayak, Panch Kedar and more'}</span>
          <span className="mt-1 w-fit rounded-full bg-white/90 px-3 py-0.5 text-[0.8rem] font-bold text-flame">{hi ? `${TEMPLES.length} मंदिर ›` : `${TEMPLES.length} temples ›`}</span>
        </span>
      </button>
    </section>
  )
}
