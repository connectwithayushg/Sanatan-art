import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AARTIS, type Aarti } from '../../content/aartis'
import { BHAJANS, BHAJAN_INFO } from '../../content/bhajans'
import { useStored } from '../../lib/useStored'
import { DEITIES } from '../../content/deities'
import { DeityPhoto } from '../../ui/DeityPhoto'
import { PageHeading, SectionHeading } from '../../ui/PageHeading'
import { AartiView, DEITY_OF, PORTRAIT } from '../diwali/AartiView'

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

/** The complete existing library, grouped by deity without a resume-reading pattern. */
export function AartiLibrary({ id, open }: { id: string | null; open: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [term, setTerm] = useState('')
  const [deity, setDeity] = useState('')
  const [showDeities, setShowDeities] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [mode, setMode] = useStored<'aarti' | 'bhajan'>('aartiMode', 'aarti')
  const chosen = AARTIS.find((a) => a.id === id) ?? BHAJANS.find((a) => a.id === id)
  if (chosen) return <AartiView key={chosen.id} aartis={[chosen]} onBack={() => history.back()} />

  const bhajans = mode === 'bhajan'
  const source = bhajans ? BHAJANS : AARTIS
  const q = term.trim().toLowerCase()
  const haystack = (a: Aarti) => `${a.title_hi} ${a.title_en} ${a.id} ${INFO[a.id]?.find ?? BHAJAN_INFO[a.id]?.find ?? ''} ${a.kind === 'stuti' ? 'stuti स्तुति' : a.kind === 'bhajan' ? 'bhajan भजन' : 'aarti आरती'}`.toLowerCase()
  const found = source.filter((a) => (!q || haystack(a).includes(q)) && (!deity || DEITY_OF[a.id] === deity))
  const todays = AARTIS.filter((a) => INFO[a.id]?.days.includes(new Date().getDay()))
  const primary = ['shiv', 'ganesh', 'hanuman', 'lakshmi']
  const deities = [...primary.map((id) => DEITIES.find((d) => d.id === id)!), ...DEITIES.filter((d) => !primary.includes(d.id))]
  const filtered = !!q || !!deity
  const visible = filtered || showAll ? found : found.slice(0, 6)
  const row = (a: Aarti) => (
    <li key={a.id}>
      <button className="reading-row" onClick={() => open(a.id)}>
        <DeityPhoto id={DEITY_OF[a.id]} fallback={PORTRAIT[a.id]} />
        <span><strong>{hi ? a.title_hi : a.title_en}</strong><small>{a.kind === 'stuti' ? t('aartiStuti') : t('read')}</small></span>
        <span className="row-arrow" aria-hidden="true">›</span>
      </button>
    </li>
  )

  return (
    <main className="tab-page aarti-library">
      <PageHeading title={t(bhajans ? 'bhajanTab' : 'nav_aarti')} subtitle={t('r_aartiIntro')} image="/art/redesign/aarti-banner.webp" />
      <div className="page-content">
        <label className="library-search" htmlFor="aarti-search">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="10" cy="10" r="6.5" /><path d="m15 15 5 5" /></svg>
          <input id="aarti-search" type="search" value={term} onChange={(e) => setTerm(e.target.value)} placeholder={t(bhajans ? 'bhajanSearch' : 'aartiSearch')} aria-label={t(bhajans ? 'bhajanSearch' : 'aartiSearch')} />
          {term && <button onClick={() => setTerm('')} aria-label={t('close')}>×</button>}
        </label>
        <div className="library-switch" role="group" aria-label={t('aartiOrBhajan')}>
          {(['aarti', 'bhajan'] as const).map((m) => <button key={m} aria-pressed={mode === m} onClick={() => { setMode(m); setTerm(''); setDeity(''); setShowAll(false) }}>{t(m === 'aarti' ? 'nav_aarti' : 'bhajanTab')}</button>)}
        </div>
        {!filtered && !bhajans && todays.length > 0 && (
          <section className="today-aarti"><h2>{t('aartiToday')}</h2><ul>{todays.map(row)}</ul></section>
        )}
        {!q && !deity && (
          <section>
            <SectionHeading title={t('r_aartiCollection')} onAll={() => setShowDeities(!showDeities)} expanded={showDeities} />
            <ul className="photo-grid deity-grid">
              {(showDeities ? deities : deities.slice(0, 4)).map((d) => (
                <li key={d.id}><button className="photo-tile deity-tile" aria-pressed={deity === d.id} onClick={() => { setDeity(deity === d.id ? '' : d.id); setShowAll(true) }}>
                  <DeityPhoto id={d.id} />
                  <span>{hi ? d.name_hi : d.name_en}<span aria-hidden="true">›</span></span>
                </button></li>
              ))}
            </ul>
          </section>
        )}
        <section id="aarti-results" aria-live="polite">
          <SectionHeading title={deity ? (hi ? DEITIES.find((d) => d.id === deity)!.name_hi : DEITIES.find((d) => d.id === deity)!.name_en) : t(bhajans ? 'allBhajans' : 'allAartis')} onAll={!filtered ? () => setShowAll(!showAll) : undefined} expanded={showAll} />
          {deity && <button className="clear-filter" onClick={() => setDeity('')}>{t('r_clearFilter')} ×</button>}
          {visible.length ? <ol className="reading-list">{visible.map(row)}</ol> : <p className="empty-state">{t(bhajans ? 'bhajanNone' : 'aartiNone')}</p>}
        </section>
      </div>
    </main>
  )
}
