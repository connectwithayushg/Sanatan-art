import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AFTER_AARTI, GANESH_AARTI, LAKSHMI_AARTI, type Aarti } from '../../content/aartis'
import { DEITIES } from '../../content/deities'
import { useStored } from '../../lib/useStored'
import { buzz, ringGhanti } from '../../lib/audio/bell'
import { YoutubeCard } from './YoutubeCard'

/** The picture for each aarti is the face of its deity from the deity list, the same source the Mandir uses. */
export const DEITY_OF: Record<string, string> = { ganesh: 'ganesh', lakshmi: 'lakshmi', jagdish: 'vishnu', shiv: 'shiv', hanuman: 'hanuman', ambe: 'durga', kunjbihari: 'krishna', govardhan: 'krishna', ram: 'ram', ramstuti: 'ram', kali: 'kali', khatu: 'khatu', achyutam: 'krishna', madhurashtakam: 'krishna', thumak: 'ram', ramdhun: 'ram', chalisa: 'hanuman', mrityunjay: 'shiv', yadevi: 'durga', vakratunda: 'ganesh',
  sukhkarta: 'ganesh', shendur: 'ganesh', satyanarayan: 'vishnu', brihaspati: 'vishnu', gangadhar: 'shiv', balaji: 'hanuman', vaishno: 'durga', banke: 'krishna', yugal: 'krishna',
  harekrishna: 'krishna', govindhare: 'krishna', maiya: 'krishna', meera: 'krishna', govindbolo: 'krishna', radhamadhav: 'krishna', vasudev: 'krishna',
  payoji: 'ram', raghupati: 'ram', bhayepragat: 'ram', mangalbhavan: 'ram', hanumanashtak: 'hanuman', bajrangbaan: 'hanuman', manojavam: 'hanuman',
  rudrashtakam: 'shiv', panchakshar: 'shiv', shivtandav: 'shiv', mahishasura: 'durga', sarvamangala: 'durga', durgachalisa: 'durga',
  gajananam: 'ganesh', ganeshchalisa: 'ganesh', omgan: 'ganesh', shantakaram: 'vishnu', mahalakshmi: 'lakshmi', vaishnavjan: 'vishnu' }
/** Aartis whose deity has no photo of its own yet: a crop of the festival painting, or a lit diya until Ayush's pictures come. */
const STAND_IN: Record<string, string> = {
  ahoi: 'ahoi', surya: 'surya', tulsi: 'tulsi', ganga: 'ganga', karwa: 'karwa', lingashtakam: 'shivling', omnamahshivay: 'shivling',
  santoshi: 'diya', shani: 'diya', saraswati: 'diya', sita: 'diya', parvati: 'diya', gayatri: 'diya', bhairav: 'diya', vishwakarma: 'diya', yakundendu: 'diya', gayatrimantra: 'diya',
}
export const PORTRAIT: Record<string, string> = {
  ...Object.fromEntries(
  Object.entries(DEITY_OF).map(([aarti, deity]) => {
    const d = DEITIES.find((x) => x.id === deity)
    return [aarti, d?.face ?? d?.thumb ?? '/art/deity/ganesh-face.webp']
  }),
  ),
  ...Object.fromEntries(Object.entries(STAND_IN).map(([aarti, face]) => [aarti, `/art/deity/${face}-face.webp`])),
}

/** Text sizes for the lyrics, as a multiple of the normal size. */
const SIZES = [0.9, 1, 1.15, 1.3, 1.5] as const

const short = (title: string) => title.replace(/^(श्री|Shri) /, '').replace(/ (जी की आरती|की आरती|Aarti)$/, '')

/** Keeps the phone awake while the page is open, so the screen does not go dark in the middle of an aarti. */
function useAwake() {
  useEffect(() => {
    let lock: WakeLockSentinel | null = null
    let gone = false
    const ask = () => {
      if (gone || document.visibilityState !== 'visible' || !navigator.wakeLock) return
      navigator.wakeLock.request('screen').then(
        (l) => {
          if (gone) void l.release()
          else lock = l
        },
        () => {},
      )
    }
    ask()
    document.addEventListener('visibilitychange', ask)
    return () => {
      gone = true
      document.removeEventListener('visibilitychange', ask)
      lock?.release().catch(() => {})
    }
  }, [])
}

/**
 * A page to read an aarti: the words in big type, scrolling like any page, no playback. One अर्थ switch shows the meaning
 * under every stanza. With two aartis (the Diwali page) a switch picks between them; with one, a back button returns to the list.
 */
export function AartiView({ aartis = [GANESH_AARTI, LAKSHMI_AARTI], onBack, backLabel }: { aartis?: Aarti[]; onBack?: () => void; backLabel?: string }) {
  const { t, i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  const AARTIS = aartis
  const [stored, setActive] = useStored('aarti', 1)
  const active = AARTIS.length > 1 ? Math.min(stored, AARTIS.length - 1) : 0
  const [meaning, setMeaning] = useStored('showMeaning', false)
  const [size, setSize] = useStored('aartiSize', 1)
  const [, setLast] = useStored<string>('aartiLast', '')
  const aarti = AARTIS[active] ?? AARTIS[0]
  const scale = SIZES[Math.min(Math.max(size, 0), SIZES.length - 1)]

  useAwake()
  useEffect(() => {
    scrollTo({ top: 0 })
  }, [aarti.id])
  useEffect(() => {
    if (onBack && aarti.kind !== 'bhajan') setLast(aarti.id)
  }, [aarti.id, aarti.kind, onBack, setLast])

  // Each stanza after the first ends with the refrain, as families sing it.
  const stanzas = useMemo(() => aarti.stanzas.map((s, i) => ({ ...s, lines: i > 0 && aarti.refrain ? [...s.lines, aarti.refrain] : s.lines })), [aarti])

  const pick = (i: number) => {
    setActive(i)
    scrollTo({ top: 0 })
  }
  const step = (d: number) => setSize(Math.min(SIZES.length - 1, Math.max(0, size + d)))
  const ring = 'focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-flame'

  return (
    <main className="mx-auto max-w-xl px-4 pb-4">
      <div className="sticky top-0 z-20 -mx-4 flex items-center gap-1.5 border-b border-black/10 bg-night px-4 py-2">
        {onBack && (
          <button onClick={onBack} className={`h-11 shrink-0 rounded-full border-[1.5px] border-black/15 bg-white px-3 text-[0.95rem] font-semibold text-warm ${ring}`}>
            ‹ {backLabel ?? (aarti.kind === 'bhajan' ? t('bhajanTab') : t('nav_aarti'))}
          </button>
        )}
        <button
          role="switch"
          aria-checked={meaning}
          onClick={() => setMeaning(!meaning)}
          className={`ml-auto flex h-11 shrink-0 items-center gap-2 rounded-full border-[1.5px] border-black/15 bg-white pl-3 pr-2 text-[0.95rem] font-semibold text-warm ${ring}`}
        >
          {t('meaning')}
          <span aria-hidden="true" className={`relative h-6 w-10 rounded-full transition-colors ${meaning ? 'bg-flame' : 'bg-[#d9cfc2]'}`}>
            <span className={`absolute top-[3px] size-[18px] rounded-full bg-white transition-all ${meaning ? 'left-[19px]' : 'left-[3px]'}`} />
          </span>
        </button>
        <div className="flex shrink-0 overflow-hidden rounded-full border-[1.5px] border-black/15 bg-white">
          <button onClick={() => step(-1)} disabled={size <= 0} aria-label={t('aartiSmaller')} className={`h-[41px] w-[42px] font-bold text-warm disabled:opacity-30 ${ring}`}>
            A−
          </button>
          <button onClick={() => step(1)} disabled={size >= SIZES.length - 1} aria-label={t('aartiBigger')} className={`h-[41px] w-[42px] border-l-[1.5px] border-black/15 font-bold text-warm disabled:opacity-30 ${ring}`}>
            A+
          </button>
        </div>
      </div>

      {AARTIS.length > 1 && (
        <div className="mt-3 grid grid-cols-2 gap-1 rounded-full bg-white p-1 ring-1 ring-black/10" role="tablist">
          {AARTIS.map((a, i) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={i === active}
              onClick={() => pick(i)}
              className={`min-h-10 rounded-full px-2 text-[0.95rem] font-semibold leading-tight transition-colors ${ring} ${i === active ? 'bg-flame text-ember' : 'text-dim hover:text-warm'}`}
            >
              {short(l === 'hi' ? a.title_hi : a.title_en)}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <img src={PORTRAIT[aarti.id] ?? PORTRAIT.ganesh} alt="" width={64} height={64} className="size-16 shrink-0 rounded-full object-cover object-top" style={{ background: 'radial-gradient(circle at 50% 40%, #fff3e4, #f6d7b4)', boxShadow: '0 0 0 2px #fff, 0 0 0 3.5px rgba(194,78,6,.45)' }} />
        <h1 className="font-display text-[1.55rem] leading-tight text-warm">{l === 'hi' ? aarti.title_hi : aarti.title_en}</h1>
      </div>

      <YoutubeCard aartiId={aarti.id} />

      <div className="mt-4 grid gap-6">
        {stanzas.map((s, i) => (
          <section key={`${aarti.id}-${i}`}>
            {s.lines.map((line, j) => (
              <p key={j} className={`font-scripture font-semibold leading-[1.6] ${i > 0 && aarti.refrain && j === s.lines.length - 1 ? 'text-flame' : 'text-warm'}`} style={{ fontSize: `${1.3 * scale}rem` }}>
                {line}
              </p>
            ))}
            {meaning && (
              <p className="mt-1.5 rounded-xl bg-white px-3 py-2 leading-relaxed text-dim ring-1 ring-black/5" style={{ fontSize: `${1 * scale}rem` }}>
                {l === 'hi' ? s.meaning_hi : s.meaning_en}
              </p>
            )}
          </section>
        ))}
      </div>

      {aarti.kind !== 'bhajan' && (
      <section className="mt-8 grid gap-4 rounded-3xl bg-white p-4 ring-1 ring-black/10">
        <h2 className="font-display text-[1.35rem] text-flame">{t('aartiAfter')}</h2>
        {AFTER_AARTI.map((a) => (
          <div key={a.id} className="grid gap-1">
            <h3 className="text-[0.9rem] font-bold text-dim">{l === 'hi' ? a.title_hi : a.title_en}</h3>
            {a.lines.map((line, j) => (
              <p key={j} className="font-scripture font-semibold leading-[1.6] text-warm" style={{ fontSize: `${1.15 * scale}rem` }}>
                {line}
              </p>
            ))}
            {meaning && (
              <p className="mt-1 leading-relaxed text-dim" style={{ fontSize: `${0.98 * scale}rem` }}>
                {l === 'hi' ? a.meaning_hi : a.meaning_en}
              </p>
            )}
          </div>
        ))}
      </section>
      )}

      <div className="flex justify-center pb-4 pt-6">
        <button
          onClick={() => {
            buzz(40)
            ringGhanti()
          }}
          className={`btn btn-flame min-h-[3.25rem] px-7 text-[1.1rem] ${ring}`}
        >
          {t('ringBell')}
        </button>
      </div>
    </main>
  )
}
