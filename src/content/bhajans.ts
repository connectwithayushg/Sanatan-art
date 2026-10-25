/** Famous bhajans, stotras and mantras (public domain texts). Meanings are original to Sanatan App. */
import { CHALISA } from './chalisa'
import type { Aarti, Stanza } from './aartis'
import { BHAJANS2 as B } from './bhajans2'
import { HANUMAN_ASHTAK } from './library/hanumanAshtak'
import { SHIV_TANDAV } from './library/shivTandav'
import { DURGA_CHALISA } from './library/durgaChalisa'
import { MANTRAS } from './library/mantras'
import type { LibText, Verse } from './library/types'

const st = (lines: string[], meaning_hi: string, meaning_en: string): Stanza => ({ lines, meaning_hi, meaning_en })

/** Shown on each row of the bhajan list: the deity it belongs to, what it is, and the names people type to find it. */
export interface BhajanInfo {
  deity: string
  hi: string
  en: string
  find: string
}

export const ACHYUTAM: Aarti = {
  id: 'achyutam',
  title_hi: 'अच्युतं केशवं',
  title_en: 'Achyutam Keshavam',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['अच्युतं केशवं कृष्ण दामोदरं,', 'राम नारायणं जानकी वल्लभम्॥'], 'अच्युत, केशव, कृष्ण, दामोदर, राम और नारायण, जानकी जी के प्रिय प्रभु के नामों का स्मरण।', 'Remembering the names of the Lord: Achyuta, Keshava, Krishna, Damodara, Rama and Narayana, beloved of Janaki.'),
    st(['अच्युतं केशवं रामनारायणं कृष्णदामोदरं वासुदेवं हरिम्।', 'श्रीधरं माधवं गोपिकावल्लभं जानकीनायकं रामचन्द्रं भजे॥'], 'मैं अच्युत, केशव, राम, नारायण, कृष्ण, दामोदर, वासुदेव और हरि का भजन करता हूँ। श्रीधर, माधव, गोपियों के प्रिय और जानकी जी के स्वामी श्री रामचंद्र का भी।', 'I worship Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva and Hari; Shridhara, Madhava, the beloved of the gopis, and Ramachandra, lord of Janaki.'),
    st(['अच्युतं केशवं सत्यभामाधवं माधवं श्रीधरं राधिकाराधितम्।', 'इन्दिरामन्दिरं चेतसा सुन्दरं देवकीनन्दनं नन्दनं सन्दधे॥'], 'मैं उन अच्युत, केशव का ध्यान करता हूँ जो सत्यभामा के स्वामी हैं, राधिका जी से पूजित हैं, लक्ष्मी जी का निवास हैं, मन को सुंदर लगते हैं और देवकी तथा नंद जी के लाल हैं।', 'I meditate on Achyuta, lord of Satyabhama, worshipped by Radhika, the home of Lakshmi, beautiful to the heart, son of Devaki and darling of Nanda.'),
  ],
}

export const MADHURASHTAKAM: Aarti = {
  id: 'madhurashtakam',
  title_hi: 'मधुराष्टकम्: अधरं मधुरं',
  title_en: 'Madhurashtakam',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['अधरं मधुरं वदनं मधुरं नयनं मधुरं हसितं मधुरम्।', 'हृदयं मधुरं गमनं मधुरं मधुराधिपतेरखिलं मधुरम्॥ १॥'], 'उनके होंठ मधुर हैं, मुख मधुर है, नेत्र और मुस्कान मधुर हैं, हृदय और चाल मधुर है। मधुरता के स्वामी का सब कुछ मधुर है।', 'His lips are sweet, his face, eyes and smile are sweet, his heart and his walk are sweet. Everything about the Lord of sweetness is sweet.'),
    st(['वचनं मधुरं चरितं मधुरं वसनं मधुरं वलितं मधुरम्।', 'चलितं मधुरं भ्रमितं मधुरं मधुराधिपतेरखिलं मधुरम्॥ २॥'], 'उनके वचन, चरित्र, वस्त्र और मुद्रा मधुर हैं। उनका चलना और घूमना भी मधुर है।', 'His words, deeds, clothes and posture are sweet. His movements and his wandering are sweet.'),
    st(['वेणुर्मधुरो रेणुर्मधुरः पाणिर्मधुरः पादौ मधुरौ।', 'नृत्यं मधुरं सख्यं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ३॥'], 'उनकी वंशी मधुर है, चरणों की धूल मधुर है, हाथ और चरण मधुर हैं। उनका नृत्य और मित्रता मधुर है।', 'His flute is sweet, the dust of his feet is sweet, his hands and feet are sweet. His dance and his friendship are sweet.'),
    st(['गीतं मधुरं पीतं मधुरं भुक्तं मधुरं सुप्तं मधुरम्।', 'रूपं मधुरं तिलकं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ४॥'], 'उनका गीत, पान करना, भोजन करना और सोना मधुर है। उनका रूप और तिलक मधुर है।', 'His song, his drinking, his eating and his sleep are sweet. His form and his tilak are sweet.'),
    st(['करणं मधुरं तरणं मधुरं हरणं मधुरं रमणं मधुरम्।', 'वमितं मधुरं शमितं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ५॥'], 'उनके कर्म मधुर हैं, पार उतारना मधुर है, माखन चुराना मधुर है, उनकी क्रीड़ा मधुर है। उनका अर्पण और उनकी शांति भी मधुर है।', 'His deeds are sweet, his carrying us across is sweet, his butter-stealing is sweet, his play is sweet. His offerings and his calm are sweet.'),
    st(['गुञ्जा मधुरा माला मधुरा यमुना मधुरा वीची मधुरा।', 'सलिलं मधुरं कमलं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ६॥'], 'गुंजा की माला मधुर है, यमुना और उसकी लहरें मधुर हैं। जल और कमल भी मधुर हैं।', 'His garland of gunja berries is sweet, the Yamuna and her waves are sweet. The water and the lotus are sweet.'),
    st(['गोपी मधुरा लीला मधुरा युक्तं मधुरं मुक्तं मधुरम्।', 'दृष्टं मधुरं शिष्टं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ७॥'], 'गोपियाँ और उनकी लीला मधुर है। उनका मिलन और उनसे मिलने वाली मुक्ति मधुर है। उनकी दृष्टि और शिष्टता मधुर है।', 'The gopis and his leela are sweet. His union and the liberation he gives are sweet; his glance and his grace are sweet.'),
    st(['गोपा मधुरा गावो मधुरा यष्टिर्मधुरा सृष्टिर्मधुरा।', 'दलितं मधुरं फलितं मधुरं मधुराधिपतेरखिलं मधुरम्॥ ८॥'], 'ग्वाले और गायें मधुर हैं, उनकी छड़ी और उनकी सृष्टि मधुर है। उनका संहार और उनका फल देना भी मधुर है।', 'The cowherds and cows are sweet, his staff and his creation are sweet. His destroying and his granting of fruit are sweet.'),
  ],
}

export const THUMAK: Aarti = {
  id: 'thumak',
  title_hi: 'ठुमक चलत रामचंद्र',
  title_en: 'Thumak Chalat Ramchandra',
  kind: 'bhajan',
  refrain: 'ठुमक चलत रामचंद्र, बाजत पैंजनियाँ॥',
  stanzas: [
    st(['ठुमक चलत रामचंद्र, बाजत पैंजनियाँ॥'], 'बाल श्री रामचंद्र जी ठुमक-ठुमक कर चलते हैं और उनकी पैंजनियाँ बजती हैं।', 'Child Ramchandra walks with a tiny dancing step, and his anklets ring.'),
    st(['किलकि किलकि उठत धाय, गिरत भूमि लटपटाय।', 'धाय मात गोद लेत, दशरथ की रनियाँ॥'], 'वे किलकारी मारकर दौड़ते हैं और लड़खड़ाकर धरती पर गिर पड़ते हैं। दशरथ जी की रानी दौड़कर उन्हें गोद में उठा लेती हैं।', 'He laughs and runs, then stumbles and falls to the ground. Dasharatha’s queen runs and lifts him into her lap.'),
    st(['अंचल रज अंग झारि, विविध भाँति सो दुलारि।', 'तन मन धन वारि वारि, कहत मृदु बचनियाँ॥'], 'माँ आँचल से उनके शरीर की धूल झाड़ती हैं और कई तरह से दुलारती हैं। तन, मन और धन न्योछावर करके वे मीठे वचन कहती हैं।', 'The mother brushes the dust off him with her anchal and fondles him in many ways. Offering her body, mind and wealth to him, she speaks soft words.'),
    st(['विद्रुम से अरुण अधर, बोलत मुख मधुर मधुर।', 'सुभग नासिका में चारु, लटकत लटकनियाँ॥'], 'उनके होंठ मूँगे जैसे लाल हैं और मुख से मीठे बोल निकलते हैं। सुंदर नासिका में प्यारी लटकन झूलती है।', 'His lips are red like coral and sweet words come from his mouth. A lovely ornament hangs from his fine nose.'),
    st(['तुलसीदास अति आनंद, देख के मुखारविंद।', 'रघुवर छबि के समान, रघुवर छबि बनियाँ॥'], 'तुलसीदास जी उनका मुखकमल देखकर बहुत आनंदित हैं। श्री रघुवर की छवि के समान बस उन्हीं की छवि है।', 'Tulsidas is full of joy at the sight of his lotus face. Only Raghuvar’s image matches Raghuvar’s image.'),
  ],
}

export const RAM_DHUN: Aarti = {
  id: 'ramdhun',
  title_hi: 'श्री राम जय राम जय जय राम',
  title_en: 'Shri Ram Jai Ram Jai Jai Ram',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['श्री राम जय राम जय जय राम॥'], 'श्री राम की जय हो, राम की जय हो, बार-बार राम की जय हो। यह राम नाम का जप है, जिसे तेरह अक्षरों का तारक मंत्र भी कहते हैं।', 'Glory to Shri Ram, glory to Ram, glory again and again to Ram. It is the chant of Ram’s name, also called the thirteen-syllable taraka mantra.'),
  ],
}

export const MAHAMRITYUNJAY: Aarti = {
  id: 'mrityunjay',
  title_hi: 'महामृत्युंजय मंत्र',
  title_en: 'Maha Mrityunjaya Mantra',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।', 'उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात्॥'], 'हम तीन नेत्रों वाले, सुगंध और पोषण बढ़ाने वाले शिव जी की आराधना करते हैं। जैसे पका हुआ खीरा अपनी बेल से सहज ही छूट जाता है, वैसे ही हम मृत्यु के बंधन से मुक्त होकर अमृत की ओर बढ़ें।', 'We worship the three-eyed Shiv, who gives fragrance and nourishment. As a ripe cucumber slips easily from its vine, may we be freed from the bondage of death and move towards immortality.'),
  ],
}

export const YA_DEVI: Aarti = {
  id: 'yadevi',
  title_hi: 'या देवी सर्वभूतेषु',
  title_en: 'Ya Devi Sarvabhuteshu',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता।', 'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥'], 'जो देवी सब प्राणियों में शक्ति के रूप में रहती हैं, उन्हें बार-बार नमस्कार है।', 'To the Devi who lives in all beings as strength, I bow again and again.'),
    st(['या देवी सर्वभूतेषु शान्तिरूपेण संस्थिता।', 'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥'], 'जो देवी सब प्राणियों में शांति के रूप में रहती हैं, उन्हें बार-बार नमस्कार है।', 'To the Devi who lives in all beings as peace, I bow again and again.'),
    st(['या देवी सर्वभूतेषु लक्ष्मीरूपेण संस्थिता।', 'नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥'], 'जो देवी सब प्राणियों में लक्ष्मी, यानी समृद्धि के रूप में रहती हैं, उन्हें बार-बार नमस्कार है।', 'To the Devi who lives in all beings as Lakshmi, prosperity, I bow again and again.'),
  ],
}

export const VAKRATUNDA: Aarti = {
  id: 'vakratunda',
  title_hi: 'वक्रतुण्ड महाकाय',
  title_en: 'Vakratunda Mahakaya',
  kind: 'bhajan',
  refrain: '',
  stanzas: [
    st(['वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥'], 'हे घुमावदार सूँड और विशाल शरीर वाले, करोड़ों सूर्यों के समान तेजस्वी देव, मेरे सब कामों को सदा बिना विघ्न के पूरा कीजिए।', 'O Lord with the curved trunk and mighty body, radiant as a crore suns, free all my undertakings from obstacles, always.'),
  ],
}

/** The chalisa is the same text as in the Path tab, laid out as stanzas. */
export const CHALISA_BHAJAN: Aarti = {
  id: 'chalisa',
  title_hi: 'श्री हनुमान चालीसा',
  title_en: 'Shri Hanuman Chalisa',
  kind: 'bhajan',
  refrain: '',
  stanzas: CHALISA.map((v) => st(v.text.split('\n'), v.meaning.hi, v.meaning.en)),
}

const verse = (v: Verse) => st(v.text.split('\n'), v.meaning?.hi ?? '', v.meaning?.en ?? '')
/** A text from the Path library shown as a bhajan; the words stay the same as in Path. */
const fromPath = (id: string, title_hi: string, title_en: string, verses: Verse[]): Aarti => ({ id, title_hi, title_en, kind: 'bhajan', refrain: '', stanzas: verses.map(verse) })
const whole = (t: LibText, id: string) => fromPath(id, t.title.hi, t.title.en, t.verses)
const mantra = (i: number, id: string, title_hi: string, title_en: string) => fromPath(id, title_hi, title_en, [MANTRAS.verses[i]])

/** In list order: Krishna, Ram, Hanuman, Shiv, Devi, Ganesh, Vishnu, Lakshmi, Saraswati, then for everyone. */
export const BHAJANS: Aarti[] = [
  ACHYUTAM, MADHURASHTAKAM, B.harekrishna, B.govindhare, B.maiya, B.meera, B.govindbolo, B.radhamadhav, mantra(6, 'vasudev', 'ॐ नमो भगवते वासुदेवाय', 'Om Namo Bhagavate Vasudevaya'),
  THUMAK, RAM_DHUN, B.payoji, B.raghupati, B.bhayepragat, B.mangalbhavan,
  CHALISA_BHAJAN, whole(HANUMAN_ASHTAK, 'hanumanashtak'), B.bajrangbaan, mantra(5, 'manojavam', 'मनोजवं मारुततुल्यवेगं', 'Manojavam Marutatulyavegam'),
  MAHAMRITYUNJAY, B.rudrashtakam, B.panchakshar, B.lingashtakam, whole(SHIV_TANDAV, 'shivtandav'), B.omnamahshivay,
  YA_DEVI, B.mahishasura, B.sarvamangala, whole(DURGA_CHALISA, 'durgachalisa'),
  VAKRATUNDA, B.gajananam, B.ganeshchalisa, B.omgan,
  B.shantakaram, B.mahalakshmi,
  mantra(3, 'yakundendu', 'या कुन्देन्दुतुषारहारधवला', 'Ya Kundendu Tushara Hara Dhavala'),
  mantra(0, 'gayatrimantra', 'गायत्री मंत्र', 'Gayatri Mantra'),
  B.vaishnavjan,
]

export const BHAJAN_INFO: Record<string, BhajanInfo> = {
  achyutam: { deity: 'krishna', hi: 'श्री कृष्ण · भजन', en: 'Shri Krishna · Bhajan', find: 'achyutam keshavam krishna damodaram achyuta अच्युतम केशव कृष्ण दामोदर' },
  madhurashtakam: { deity: 'krishna', hi: 'श्री कृष्ण · स्तोत्र', en: 'Shri Krishna · Stotra', find: 'madhurashtakam adharam madhuram krishna vallabhacharya मधुराष्टकम अधरं मधुरं कृष्ण' },
  thumak: { deity: 'ram', hi: 'श्री राम · भजन', en: 'Shri Ram · Bhajan', find: 'thumak chalat ramchandra tulsidas ram bal ram ठुमक चलत रामचंद्र राम तुलसीदास' },
  ramdhun: { deity: 'ram', hi: 'श्री राम · धुन', en: 'Shri Ram · Dhun', find: 'ram dhun jai ram taraka mantra shri ram jai ram राम धुन जय राम तारक' },
  chalisa: { deity: 'hanuman', hi: 'श्री हनुमान · पाठ', en: 'Shri Hanuman · Path', find: 'hanuman chalisa bajrang balaji tulsidas हनुमान चालीसा बजरंग बली' },
  mrityunjay: { deity: 'shiv', hi: 'भगवान शिव · मंत्र', en: 'Lord Shiv · Mantra', find: 'mahamrityunjaya mrityunjay shiv shiva mantra महामृत्युंजय शिव मंत्र त्र्यम्बकं' },
  yadevi: { deity: 'durga', hi: 'माँ दुर्गा · स्तुति', en: 'Maa Durga · Stuti', find: 'ya devi sarvabhuteshu durga devi navratri shakti या देवी सर्वभूतेषु दुर्गा नवरात्रि' },
  vakratunda: { deity: 'ganesh', hi: 'श्री गणेश · मंत्र', en: 'Shri Ganesh · Mantra', find: 'vakratunda mahakaya ganesh ganpati shloka वक्रतुण्ड महाकाय गणेश गणपति' },
  harekrishna: { deity: 'krishna', hi: 'श्री कृष्ण · मंत्र', en: 'Shri Krishna · Mantra', find: 'hare krishna hare rama mahamantra kirtan हरे कृष्ण हरे राम महामंत्र कीर्तन' },
  govindhare: { deity: 'krishna', hi: 'श्री कृष्ण · धुन', en: 'Shri Krishna · Dhun', find: 'shri krishna govind hare murari hey nath narayan vasudev श्री कृष्ण गोविंद हरे मुरारी नारायण वासुदेव' },
  maiya: { deity: 'krishna', hi: 'श्री कृष्ण · भजन', en: 'Shri Krishna · Bhajan', find: 'maiya mori main nahi makhan khayo surdas bal krishna मैया मोरी मैं नहिं माखन खायो सूरदास' },
  meera: { deity: 'krishna', hi: 'श्री कृष्ण · भजन', en: 'Shri Krishna · Bhajan', find: 'mere to girdhar gopal meera meerabai मेरे तो गिरधर गोपाल मीरा मीराबाई' },
  govindbolo: { deity: 'krishna', hi: 'श्री कृष्ण · धुन', en: 'Shri Krishna · Dhun', find: 'govind bolo hari gopal bolo radha raman hari गोविंद बोलो हरि गोपाल बोलो राधा रमण' },
  radhamadhav: { deity: 'krishna', hi: 'श्री कृष्ण · भजन', en: 'Shri Krishna · Bhajan', find: 'jai radha madhav kunj bihari gopi jana vallabh जय राधा माधव कुंज बिहारी गोपीजन वल्लभ' },
  vasudev: { deity: 'krishna', hi: 'श्री कृष्ण · मंत्र', en: 'Shri Krishna · Mantra', find: 'om namo bhagavate vasudevaya dwadashakshar mantra ॐ नमो भगवते वासुदेवाय' },
  payoji: { deity: 'ram', hi: 'श्री राम · भजन', en: 'Shri Ram · Bhajan', find: 'payoji maine ram ratan dhan payo meera meerabai पायो जी मैंने राम रतन धन पायो मीरा' },
  raghupati: { deity: 'ram', hi: 'श्री राम · धुन', en: 'Shri Ram · Dhun', find: 'raghupati raghav raja ram patit pavan sita ram रघुपति राघव राजाराम पतित पावन सीताराम' },
  bhayepragat: { deity: 'ram', hi: 'श्री राम · स्तुति', en: 'Shri Ram · Stuti', find: 'bhaye pragat kripala deendayala ram navami tulsidas भए प्रगट कृपाला दीनदयाला राम नवमी तुलसीदास' },
  mangalbhavan: { deity: 'ram', hi: 'श्री राम · पाठ', en: 'Shri Ram · Path', find: 'mangal bhavan amangal hari ramcharitmanas chaupai tulsidas मंगल भवन अमंगल हारी रामचरितमानस चौपाई' },
  hanumanashtak: { deity: 'hanuman', hi: 'श्री हनुमान · पाठ', en: 'Shri Hanuman · Path', find: 'sankat mochan hanuman ashtak baal samay ravi bhaksh liyo संकटमोचन हनुमान अष्टक बाल समय रवि भक्ष लियो' },
  bajrangbaan: { deity: 'hanuman', hi: 'श्री हनुमान · पाठ', en: 'Shri Hanuman · Path', find: 'bajrang baan hanuman tulsidas बजरंग बाण हनुमान' },
  manojavam: { deity: 'hanuman', hi: 'श्री हनुमान · मंत्र', en: 'Shri Hanuman · Mantra', find: 'manojavam marutatulyavegam hanuman vandana shloka मनोजवं मारुततुल्यवेगं हनुमान वंदना' },
  rudrashtakam: { deity: 'shiv', hi: 'भगवान शिव · स्तोत्र', en: 'Lord Shiv · Stotra', find: 'rudrashtakam namami shamishan nirvan roopam tulsidas रुद्राष्टकम नमामीशमीशान निर्वाणरूपं' },
  panchakshar: { deity: 'shiv', hi: 'भगवान शिव · स्तोत्र', en: 'Lord Shiv · Stotra', find: 'shiv panchakshar stotra nagendra haraya namah shivaya शिव पंचाक्षर स्तोत्र नागेन्द्रहाराय' },
  lingashtakam: { deity: 'shiv', hi: 'भगवान शिव · स्तोत्र', en: 'Lord Shiv · Stotra', find: 'lingashtakam brahma murari surarchita lingam shivling लिंगाष्टकम ब्रह्ममुरारि शिवलिंग' },
  shivtandav: { deity: 'shiv', hi: 'भगवान शिव · स्तोत्र', en: 'Lord Shiv · Stotra', find: 'shiv tandav stotram jatatavi ravan शिव तांडव स्तोत्र जटाटवी रावण' },
  omnamahshivay: { deity: 'shiv', hi: 'भगवान शिव · धुन', en: 'Lord Shiv · Dhun', find: 'om namah shivaya dhun shiv mantra panchakshari ॐ नमः शिवाय धुन' },
  mahishasura: { deity: 'durga', hi: 'माँ दुर्गा · स्तोत्र', en: 'Maa Durga · Stotra', find: 'aigiri nandini ayi giri nandini mahishasura mardini navratri अयि गिरिनन्दिनि महिषासुरमर्दिनि नवरात्रि' },
  sarvamangala: { deity: 'durga', hi: 'माँ दुर्गा · मंत्र', en: 'Maa Durga · Mantra', find: 'sarva mangala mangalye shive sarvartha sadhike durga सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके' },
  durgachalisa: { deity: 'durga', hi: 'माँ दुर्गा · चालीसा', en: 'Maa Durga · Chalisa', find: 'durga chalisa namo namo durge sukh karni दुर्गा चालीसा नमो नमो दुर्गे' },
  gajananam: { deity: 'ganesh', hi: 'श्री गणेश · स्तोत्र', en: 'Shri Ganesh · Stotra', find: 'gajananam bhootganadi sevitam kapittha jambu ganesh shloka गजाननं भूतगणादिसेवितं गणेश' },
  ganeshchalisa: { deity: 'ganesh', hi: 'श्री गणेश · चालीसा', en: 'Shri Ganesh · Chalisa', find: 'ganesh chalisa jai ganpati sadgun sadan गणेश चालीसा जय गणपति सदगुण सदन' },
  omgan: { deity: 'ganesh', hi: 'श्री गणेश · मंत्र', en: 'Shri Ganesh · Mantra', find: 'om gam ganapataye namah ganesh mantra ॐ गं गणपतये नमः' },
  shantakaram: { deity: 'vishnu', hi: 'भगवान विष्णु · स्तोत्र', en: 'Lord Vishnu · Stotra', find: 'shantakaram bhujagashayanam vishnu shloka शान्ताकारं भुजगशयनं विष्णु' },
  mahalakshmi: { deity: 'lakshmi', hi: 'माँ लक्ष्मी · स्तोत्र', en: 'Maa Lakshmi · Stotra', find: 'mahalakshmi ashtakam namastestu mahamaye diwali महालक्ष्मी अष्टकम नमस्तेऽस्तु महामाये दीवाली' },
  yakundendu: { deity: 'saraswati', hi: 'माँ सरस्वती · स्तुति', en: 'Maa Saraswati · Stuti', find: 'ya kundendu tushar har dhavala saraswati vandana basant panchami या कुन्देन्दु सरस्वती वंदना' },
  gayatrimantra: { deity: 'gayatri', hi: 'गायत्री माता · मंत्र', en: 'Gayatri Mata · Mantra', find: 'gayatri mantra om bhur bhuva swaha गायत्री मंत्र ॐ भूर्भुवः स्वः' },
  vaishnavjan: { deity: 'vishnu', hi: 'भगवान विष्णु · भजन', en: 'Lord Vishnu · Bhajan', find: 'vaishnav jan to tene kahiye narsinh mehta gandhi वैष्णव जन तो तेने कहिए नरसिंह मेहता' },
}
