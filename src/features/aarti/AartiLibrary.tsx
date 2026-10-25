import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS, type Aarti } from '../../content/aartis'
import { BHAJANS, BHAJAN_INFO } from '../../content/bhajans'
import { useStored } from '../../lib/useStored'
import { AartiView, PORTRAIT } from '../diwali/AartiView'

/** When each aarti is usually sung (weekdays are 0 = Sunday), and the names people type to find it. */
const INFO: Record<string, { hi: string; en: string; days: number[]; find: string }> = {
  ganesh: { hi: 'हर पूजा के आरंभ में, बुधवार', en: 'At the start of every puja, Wednesdays', days: [3], find: 'ganesh ganpati ganesha गणपति विनायक' },
  lakshmi: { hi: 'शुक्रवार और दीवाली', en: 'Fridays and Diwali', days: [5], find: 'lakshmi laxmi mahalakshmi लक्ष्मी महालक्ष्मी दीवाली दिवाली diwali' },
  jagdish: { hi: 'हर शाम, गुरुवार', en: 'Every evening, Thursdays', days: [4], find: 'jagdish jagdeesh vishnu hari विष्णु हरि जगदीश' },
  shiv: { hi: 'सोमवार और शिवरात्रि', en: 'Mondays and Shivratri', days: [1], find: 'shiv shiva shankar mahadev bholenath शिव शंकर महादेव भोलेनाथ ओंकारा omkara' },
  hanuman: { hi: 'मंगलवार और शनिवार', en: 'Tuesdays and Saturdays', days: [2, 6], find: 'hanuman bajrang balaji बजरंग बली बालाजी पवनपुत्र' },
  ambe: { hi: 'नवरात्रि और रविवार', en: 'Navratri and Sundays', days: [0], find: 'ambe durga gauri mata devi navratri दुर्गा गौरी माता देवी नवरात्रि' },
  kunjbihari: { hi: 'जन्माष्टमी और एकादशी', en: 'Janmashtami and Ekadashi', days: [], find: 'krishna kunj bihari kanha कृष्ण कान्हा गिरिधर' },
  ram: { hi: 'राम नवमी, दशहरा और दीवाली', en: 'Ram Navami, Dussehra and Diwali', days: [], find: 'ram raghuvar rama रघुवर राम रामचन्द्र' },
  ramstuti: { hi: 'राम जी की आरती के साथ', en: 'Along with the Ram aarti', days: [], find: 'ram stuti kripalu ramchandra राम स्तुति कृपालु रामचन्द्र' },
  kali: { hi: 'काली पूजा, अमावस्या और नवरात्रि', en: 'Kali Puja, Amavasya and Navratri', days: [], find: 'kali kaali maa mata jagdambe काली माँ माता जगदम्बे अम्बे' },
  khatu: { hi: 'एकादशी और फाल्गुन मेला', en: 'Ekadashi and the Phalgun Mela', days: [], find: 'khatu shyam baba shyam hare खाटू श्याम बाबा हारे का सहारा' },
  govardhan: { hi: 'गोवर्धन पूजा', en: 'Govardhan Puja', days: [], find: 'govardhan giriraj krishna गोवर्धन गिरिराज कृष्ण' },
  sukhkarta: { hi: 'गणेश चतुर्थी, मराठी आरती', en: 'Ganesh Chaturthi, Marathi aarti', days: [], find: 'sukhkarta dukhharta ganesh ganpati marathi jai dev mangalmurti सुखकर्ता दुखहर्ता गणपति मंगलमूर्ति' },
  shendur: { hi: 'गणेश चतुर्थी', en: 'Ganesh Chaturthi', days: [], find: 'shendur lal chadhayo ganesh ganpati शेंदुर लाल चढ़ायो गणपति गणराज' },
  satyanarayan: { hi: 'सत्यनारायण कथा, पूर्णिमा', en: 'Satyanarayan Katha, Purnima', days: [], find: 'satyanarayan lakshmi ramana vishnu purnima katha सत्यनारायण लक्ष्मी रमणा पूर्णिमा' },
  brihaspati: { hi: 'गुरुवार', en: 'Thursdays', days: [4], find: 'brihaspati guru dev thursday guruvar vrat बृहस्पति गुरुवार गुरु देव' },
  gangadhar: { hi: 'सोमवार और सावन', en: 'Mondays and Sawan', days: [], find: 'gangadhar shiv shiva har har mahadev sawan गंगाधर शिव हर हर महादेव' },
  parvati: { hi: 'तीज और गौरी पूजा', en: 'Teej and Gauri puja', days: [], find: 'parvati gauri teej uma mata पार्वती गौरी तीज उमा' },
  balaji: { hi: 'मंगलवार', en: 'Tuesdays', days: [], find: 'hanumat veera balaji hanuman bajrang हनुमत वीरा बालाजी हनुमान' },
  vaishno: { hi: 'नवरात्रि', en: 'Navratri', days: [], find: 'vaishno devi vaishnavi mata jammu navratri वैष्णो देवी वैष्णवी माता' },
  santoshi: { hi: 'शुक्रवार व्रत', en: 'Friday vrat', days: [5], find: 'santoshi mata friday shukravar vrat संतोषी माता शुक्रवार' },
  banke: { hi: 'जन्माष्टमी, वृंदावन', en: 'Janmashtami, Vrindavan', days: [], find: 'banke bihari vrindavan krishna बांके बिहारी वृंदावन कृष्ण' },
  yugal: { hi: 'राधाष्टमी और जन्माष्टमी', en: 'Radhashtami and Janmashtami', days: [], find: 'yugal kishore radha krishna radhe युगलकिशोर राधा कृष्ण राधे' },
  sita: { hi: 'सीता नवमी और राम नवमी', en: 'Sita Navami and Ram Navami', days: [], find: 'sita janaki janak dulari mata सीता जानकी जनक दुलारी' },
  saraswati: { hi: 'बसंत पंचमी', en: 'Basant Panchami', days: [], find: 'saraswati sarasvati basant vasant panchami vidya सरस्वती बसंत पंचमी विद्या' },
  gayatri: { hi: 'गायत्री जयंती', en: 'Gayatri Jayanti', days: [], find: 'gayatri mata aarti गायत्री माता' },
  surya: { hi: 'रविवार और छठ पूजा', en: 'Sundays and Chhath Puja', days: [0], find: 'surya suryadev sun chhath ravivar सूर्य सूर्यदेव छठ रविवार' },
  shani: { hi: 'शनिवार', en: 'Saturdays', days: [6], find: 'shani shanidev saturday shanivar शनि शनिदेव शनिवार' },
  bhairav: { hi: 'काल भैरव अष्टमी, रविवार', en: 'Kaal Bhairav Ashtami, Sundays', days: [], find: 'bhairav kaal bhairav bhairo baba भैरव काल भैरव भैरो बाबा' },
  ganga: { hi: 'गंगा दशहरा और कार्तिक पूर्णिमा', en: 'Ganga Dussehra and Kartik Purnima', days: [], find: 'ganga gange mata dussehra kartik purnima गंगा गंगे माता दशहरा' },
  tulsi: { hi: 'कार्तिक मास, देवउठनी एकादशी', en: 'Kartik month, Dev Uthani Ekadashi', days: [], find: 'tulsi tulasi mata kartik vivah dev uthani तुलसी माता कार्तिक विवाह देवउठनी' },
  karwa: { hi: 'करवा चौथ', en: 'Karwa Chauth', days: [], find: 'karwa chauth karva maiya करवा चौथ करवा मैया' },
  ahoi: { hi: 'अहोई अष्टमी', en: 'Ahoi Ashtami', days: [], find: 'ahoi ashtami mata अहोई अष्टमी माता' },
  vishwakarma: { hi: 'विश्वकर्मा पूजा', en: 'Vishwakarma Puja', days: [], find: 'vishwakarma puja विश्वकर्मा पूजा' },
}

/** All aartis as a list with a search box; one opens as a page to read. */
export function AartiLibrary({ id, open }: { id: string | null; open: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [last] = useStored<string>('aartiLast', '')
  const [term, setTerm] = useState('')
  const [mode, setMode] = useStored<'aarti' | 'bhajan'>('aartiMode', 'aarti')
  const chosen = AARTIS.find((a) => a.id === id) ?? BHAJANS.find((a) => a.id === id)
  if (chosen) return <AartiView key={chosen.id} aartis={[chosen]} onBack={() => history.back()} />

  const today = new Date().getDay()
  const isToday = (a: Aarti) => INFO[a.id]?.days.includes(today) ?? false
  const q = term.trim().toLowerCase()
  const bhajans = mode === 'bhajan'
  const haystack = (a: Aarti) => `${a.title_hi} ${a.title_en} ${a.id} ${INFO[a.id]?.find ?? BHAJAN_INFO[a.id]?.find ?? ''} ${a.kind === 'stuti' ? 'stuti स्तुति' : a.kind === 'bhajan' ? 'bhajan भजन' : 'aarti आरती'}`.toLowerCase()

  const row = (a: Aarti, i: number) => {
    const w = INFO[a.id] ?? BHAJAN_INFO[a.id]
    const now = isToday(a)
    return (
      <li key={a.id} className="rise" style={{ animationDelay: `${i * 30}ms` }}>
        <button
          onClick={() => open(a.id)}
          className={`flex w-full items-center gap-4 rounded-3xl bg-white px-3.5 py-2.5 text-left transition active:scale-[0.99] ${now ? 'ring-2 ring-flame' : 'ring-1 ring-black/10 hover:ring-black/20'}`}
        >
          <img
            src={PORTRAIT[a.id]}
            alt=""
            width={64}
            height={64}
            loading="lazy"
            className="size-16 shrink-0 rounded-full object-cover object-top"
            style={{ background: 'radial-gradient(circle at 50% 40%, #fff3e4, #f6d7b4)', boxShadow: '0 0 0 2px #fff, 0 0 0 3.5px rgba(194,78,6,.45)' }}
          />
          <span className="min-w-0 flex-1">
            {now && <span className="mb-1 inline-block rounded-full bg-flame px-3 py-0.5 text-[0.9rem] font-bold text-ember">{t('aartiToday')}</span>}
            <span className="block font-display text-[1.4rem] leading-tight text-warm">
              {hi ? a.title_hi : a.title_en}
              {a.kind === 'stuti' && <span className="ml-2 rounded-full border border-black/15 px-2 align-middle font-sans text-[0.8rem] text-dim">{t('aartiStuti')}</span>}
            </span>
            {w && <span className="block text-[1rem] text-dim">{hi ? w.hi : w.en}</span>}
          </span>
          <span aria-hidden="true" className="text-3xl text-flame">›</span>
        </button>
      </li>
    )
  }

  // Without a search: today's aartis, then the one read last time, then everything else.
  const todays = AARTIS.filter(isToday)
  const lastOne = AARTIS.find((a) => a.id === last && !isToday(a))
  const rest = AARTIS.filter((a) => !isToday(a) && a !== lastOne)
  const found = (bhajans ? BHAJANS : AARTIS).filter((a) => haystack(a).includes(q))
  const group = 'mb-2 mt-5 text-[0.9rem] font-bold tracking-wide text-dim'

  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      <h1 className="sr-only">{t(bhajans ? 'bhajanTab' : 'nav_aarti')}</h1>
      <div className="mx-auto grid w-fit grid-cols-2 gap-1 rounded-full border-[1.5px] border-[#ead9c4] bg-white p-1" role="group" aria-label={t('aartiOrBhajan')}>
        {(['aarti', 'bhajan'] as const).map((m) => (
          <button
            key={m}
            onClick={() => {
              setMode(m)
              setTerm('')
            }}
            aria-pressed={mode === m}
            className={`min-h-10 rounded-full px-6 text-[0.95rem] font-bold transition ${mode === m ? 'bg-flame text-white' : 'text-dim'}`}
          >
            {t(m === 'aarti' ? 'nav_aarti' : 'bhajanTab')}
          </button>
        ))}
      </div>
      <label className="mt-4 flex h-[3.25rem] items-center gap-2.5 rounded-2xl bg-white px-3.5 ring-1 ring-black/15 focus-within:ring-2 focus-within:ring-flame" htmlFor="aarti-search">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-dim">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M15.5 15.5 L20 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <input
          id="aarti-search"
          type="text"
          inputMode="search"
          enterKeyHint="search"
          style={{ outline: 'none' }}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={t(bhajans ? 'bhajanSearch' : 'aartiSearch')}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[1.1rem] text-warm placeholder:text-dim"
        />
        {term && (
          <button type="button" onClick={() => setTerm('')} aria-label="✕" className="grid size-9 shrink-0 place-items-center rounded-full text-xl text-dim active:scale-95">
            ✕
          </button>
        )}
      </label>

      {q ? (
        found.length ? (
          <ol className="mt-4 grid gap-3">{found.map(row)}</ol>
        ) : (
          <p className="mt-8 text-center text-[1.05rem] text-dim">{t(bhajans ? 'bhajanNone' : 'aartiNone')}</p>
        )
      ) : (
        bhajans ? (
          <>
            <h2 className={group}>{t('allBhajans')}</h2>
            <ol className="grid gap-3">{BHAJANS.map(row)}</ol>
          </>
        ) : (
        <>
          {todays.length > 0 && <ol className="mt-4 grid gap-3">{todays.map(row)}</ol>}
          {lastOne && (
            <>
              <h2 className={group}>{t('aartiLast')}</h2>
              <ol className="grid gap-3">{row(lastOne, 0)}</ol>
            </>
          )}
          <h2 className={group}>{t('allAartis')}</h2>
          <ol className="grid gap-3">{rest.map(row)}</ol>
        </>
        )
      )}
    </main>
  )
}
