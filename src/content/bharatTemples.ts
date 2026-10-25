/**
 * भारत के मंदिर, phase 1: the 12 Jyotirlingas, the Char Dham and the Chota Char Dham (17 temples; Rameshwaram, Kedarnath
 * and Badrinath belong to two lists each). Text written for Sanatan App. Facts were cross-checked against at least two
 * sources each (Wikipedia, the temple's or government's own site, state tourism and travel guides). Distances are rounded
 * road distances and differ a little between sources, so they are written as "about". Darshan and aarti timings, fees
 * and booking rules change, so they are left to the temple's official site. Where traditions or claims differ, the page says so.
 * Photos: Wikimedia Commons and Unsplash, credited in PHOTO_CREDITS.
 * The 31 pages for the short categories (Sapta Puri, Kumbh, Ashtavinayak, Panch Kedar, Panch Badri, Pancha Bhoota, Braj) are in
 * the temples*.ts files and are merged below.
 */
import { l, type GroupId, type L, type Temple } from './templeTypes'
import { ASHTA_TEMPLES } from './templesAshta'
import { KEDAR_TEMPLES } from './templesKedar'
import { BADRI_TEMPLES } from './templesBadri'
import { BHOOTA_TEMPLES } from './templesBhoota'
import { PURI_TEMPLES } from './templesPuri'
import { BRAJ_TEMPLES } from './templesBraj'
import { NORTH_TEMPLES } from './templesNorth'
import { EAST_TEMPLES } from './templesEast'
import { SOUTH_TEMPLES } from './templesSouth'
export type { L, Nearby, Temple, GroupId } from './templeTypes'


const FIRST_TEMPLES: Temple[] = [
  {
    id: 'somnath',
    name: l('सोमनाथ', 'Somnath'),
    place: l('प्रभास पाटन, वेरावल, गिर सोमनाथ ज़िला', 'Prabhas Patan, Veraval, Gir Somnath district'),
    state: 'GJ',
    groups: ['jy'],
    jyNo: 1,
    tags: [l('ज्योतिर्लिंग 1/12', 'Jyotirlinga 1/12')],
    importance: l(
      'बारह ज्योतिर्लिंगों में पहला। अरब सागर के किनारे बसा यह मंदिर कई बार टूटा और हर बार फिर खड़ा हुआ, इसलिए इसे श्रद्धा के पुनर्जन्म का प्रतीक माना जाता है।',
      'The first of the twelve Jyotirlingas. Standing on the Arabian Sea shore, it was destroyed several times and rose again each time, so it is seen as a symbol of faith reborn.',
    ),
    katha: l(
      'कथा है कि चंद्र देव (सोम) को श्राप से अपनी कांति खोनी पड़ी। उन्होंने यहाँ शिव जी की आराधना की और कांति वापस पाई। सोम के नाथ, इसलिए सोमनाथ। मंदिर के पास कपिला, हिरण और सरस्वती नदियों का त्रिवेणी संगम माना जाता है।',
      'The story is that the moon god Soma lost his lustre to a curse. He worshipped Shiva here and regained it. The Lord of Soma, hence Somnath. A Triveni sangam of the Kapila, Hiran and Saraswati rivers is placed near the temple.',
    ),
    history: l(
      'पहले मंदिर का समय निश्चित नहीं है। शिलालेखों और इतिहास के अनुसार यह मंदिर 11वीं से 18वीं सदी के बीच कई बार तोड़ा गया और बनाया गया। 18वीं सदी में अहिल्याबाई होल्कर ने पास में एक छोटा मंदिर बनवाया। वर्तमान मंदिर, मारु-गुर्जर शैली में, सरदार पटेल के आदेश से बना और मई 1951 में पूरा हुआ।',
      'The date of the first temple is uncertain. It was broken and rebuilt many times between roughly the 11th and 18th centuries. In the 18th century Ahilyabai Holkar built a smaller temple nearby. The present temple, in the Maru-Gurjara style, was begun on Sardar Patel’s orders and completed in May 1951.',
    ),
    todo: [
      l('सोमनाथ महादेव के दर्शन और जलाभिषेक', 'Darshan of Somnath Mahadev and abhishek'),
      l('समुद्र किनारे सोमनाथ की आरती', 'The aarti by the sea'),
      l('त्रिवेणी संगम में स्नान या आचमन', 'Bath or achaman at the Triveni sangam'),
      l('भालका तीर्थ के दर्शन', 'Visit Bhalka Tirth'),
    ],
    best: l('अक्टूबर से मार्च; गर्मी में दोपहर तेज़ धूप होती है।', 'October to March; afternoons are hot in summer.'),
    rules: l('मोबाइल और कैमरे के नियम मंदिर ट्रस्ट तय करता है; प्रवेश द्वार पर लॉकर पूछ लें।', 'Rules on phones and cameras are set by the trust; ask about lockers at the gate.'),
    how: {
      road: l('वेरावल से लगभग 7 किमी। जूनागढ़ से लगभग 82 किमी।', 'About 7 km from Veraval. About 82 km from Junagadh.'),
      rail: l('वेरावल जंक्शन, लगभग 7 किमी।', 'Veraval Junction, about 7 km.'),
      air: l('केशोद हवाई अड्डा, लगभग 55 किमी (उड़ानें कम हैं)। दीव भी लगभग 85 किमी।', 'Keshod airport, about 55 km (few flights). Diu is about 85 km.'),
    },
    site: 'https://somnath.org',
    maps: 'Somnath Temple, Prabhas Patan, Veraval',
    nearby: [
      { name: l('त्रिवेणी संगम', 'Triveni Sangam'), dist: l('लगभग 1.5 किमी', 'About 1.5 km'), text: l('कपिला, हिरण और सरस्वती का संगम माना जाता है। मंदिर आने वाले यहाँ स्नान या आचमन करते हैं।', 'Held to be the meeting of the Kapila, Hiran and Saraswati. Pilgrims bathe or take achaman here.') },
      { name: l('भालका तीर्थ', 'Bhalka Tirth'), dist: l('लगभग 4 से 5 किमी', 'About 4 to 5 km'), text: l('मान्यता है कि यहीं भगवान कृष्ण ने अपनी लीला समेटी। यहाँ कृष्ण जी का छोटा मंदिर है।', 'It is believed that Lord Krishna closed his earthly lila here. There is a small Krishna temple.') },
    ],
    video: { id: 'efV4nifmvRk', title: 'Somnath Temple, Pride of Gujarat', channel: 'Gujarat Tourism' },
  },
  {
    id: 'mallikarjuna',
    name: l('मल्लिकार्जुन', 'Mallikarjuna'),
    place: l('श्रीशैलम, नंद्याल ज़िला', 'Srisailam, Nandyal district'),
    state: 'AP',
    groups: ['jy'],
    jyNo: 2,
    tags: [l('ज्योतिर्लिंग 2/12', 'Jyotirlinga 2/12'), l('शक्तिपीठ', 'Shakti Peeth')],
    importance: l(
      'नल्लमला पहाड़ियों पर कृष्णा नदी के किनारे। यह दुर्लभ स्थान है जहाँ ज्योतिर्लिंग और शक्तिपीठ (माँ भ्रमराम्बा) एक ही परिसर में हैं।',
      'On the Nallamala hills by the Krishna river. It is a rare place where a Jyotirlinga and a Shakti Peeth (Maa Bhramaramba) share one complex.',
    ),
    katha: l(
      'कथा है कि शिव-पार्वती ने पुत्रों के विवाह तय किए तो कार्तिकेय रूठकर क्रौंच पर्वत चले गए। माता-पिता उन्हें मनाने आए और देवताओं के कहने पर पास ही रुक गए। वही स्थान श्रीशैलम कहलाया। मल्लिका (चमेली) के फूलों से पूजा होने के कारण नाम मल्लिकार्जुन पड़ा, ऐसा माना जाता है।',
      'The story is that when Shiva and Parvati arranged marriages for their sons, Kartikeya left in a huff for Mount Krauncha. His parents came to bring him back and, at the devas’ request, stayed nearby. That place became Srisailam. The lingam is said to be named Mallikarjuna because it was worshipped with mallika (jasmine) flowers.',
    ),
    history: l(
      'शिलालेखों के अनुसार मंदिर दूसरी सदी (सातवाहन काल) से जाना जाता है। बाद के बड़े निर्माण 14वीं-15वीं सदी में विजयनगर के हरिहर प्रथम के समय के हैं। परिसर में चार गोपुरम हैं। आज इसका संचालन आंध्र प्रदेश सरकार का देवस्थानम करता है।',
      'Inscriptions show the temple was known from the 2nd century (Satavahana period). Most later additions date to Harihara I of Vijayanagara in the 14th to 15th centuries. The complex has four gateway towers. Today it is run by the Andhra Pradesh government’s devasthanam.',
    ),
    todo: [
      l('मल्लिकार्जुन स्वामी के दर्शन', 'Darshan of Mallikarjuna Swamy'),
      l('भ्रमराम्बा देवी के दर्शन', 'Darshan of Bhramaramba Devi'),
      l('पाताल गंगा (कृष्णा नदी) में स्नान', 'A bath at Pathala Ganga (Krishna river)'),
      l('साक्षी गणपति और शिखरेश्वरम', 'Sakshi Ganapati and Shikhareshwaram'),
    ],
    best: l('अक्टूबर से फरवरी। महाशिवरात्रि पर भारी भीड़ होती है।', 'October to February. Maha Shivaratri is very crowded.'),
    rules: l('स्पर्श दर्शन में पारंपरिक वस्त्र (धोती, साड़ी) चाहिए, नियम देवस्थानम की साइट पर देखें।', 'Sparsha darshan needs traditional dress (dhoti, saree); see the devasthanam site for the rules.'),
    how: {
      road: l('हैदराबाद से लगभग 215 किमी (5 से 6 घंटे)। श्रीशैलम में रेलवे स्टेशन या हवाई अड्डा नहीं है।', 'About 215 km from Hyderabad (5 to 6 hours). Srisailam has no railway station or airport.'),
      rail: l('मारकापुर रोड, लगभग 85 किमी।', 'Markapur Road, about 85 km.'),
      air: l('हैदराबाद, लगभग 215 किमी। कुरनूल भी लगभग 180 से 190 किमी।', 'Hyderabad, about 215 km. Kurnool is about 180 to 190 km.'),
    },
    site: 'https://srisailadevasthanam.org',
    maps: 'Mallikarjuna Swamy Temple, Srisailam',
    nearby: [
      { name: l('पाताल गंगा', 'Pathala Ganga'), dist: l('लगभग 1 किमी (852 सीढ़ियाँ)', 'About 1 km (852 steps)'), text: l('कृष्णा नदी का घाट। यहाँ का जल शिवलिंग के अभिषेक में प्रयोग होता है। सीढ़ियों की जगह रोपवे भी है।', 'The Krishna river ghat. Its water is used to bathe the lingam. A ropeway is available as an alternative to the steps.') },
      { name: l('साक्षी गणपति', 'Sakshi Ganapati'), dist: l('लगभग 3 किमी', 'About 3 km'), text: l('मान्यता है कि गणेश जी यहाँ भक्तों की यात्रा के साक्षी बनते हैं। श्रीशैलम से लौटते समय लोग यहाँ रुकते हैं।', 'It is believed Ganesh ji is the witness of every pilgrim’s visit here. Pilgrims stop here on the way back.') },
    ],
  },
  {
    id: 'mahakaleshwar',
    name: l('महाकालेश्वर', 'Mahakaleshwar'),
    place: l('उज्जैन, शिप्रा नदी के तट पर', 'Ujjain, on the banks of the Shipra'),
    state: 'MP',
    groups: ['jy'],
    jyNo: 3,
    tags: [l('ज्योतिर्लिंग 3/12', 'Jyotirlinga 3/12'), l('सप्त पुरी: अवंतिका', 'Sapta Puri: Avantika')],
    importance: l(
      'काल के भी स्वामी। यह एकमात्र ज्योतिर्लिंग है जो दक्षिणमुखी माना जाता है। लिंग को स्वयंभू माना जाता है। उज्जैन को पुराणों में अवंतिका कहा गया, सात मोक्षदायिनी पुरियों में से एक।',
      'Lord even of time. It is held to be the only south-facing (dakshinamukhi) Jyotirlinga, and the lingam is regarded as swayambhu. Puranas call Ujjain Avantika, one of the seven moksha-giving cities.',
    ),
    katha: l(
      'शिव पुराण के अनुसार शिव जी यहाँ अनंत ज्योति-स्तंभ के रूप में प्रकट हुए। परंपरा में महाकाल को उज्जैन का राजा माना जाता है, इसलिए श्रावण-भाद्रपद में उनकी सवारी नगर भ्रमण पर निकलती है।',
      'According to the Shiva Purana, Shiva appeared here as an endless pillar of light. Tradition treats Mahakal as the king of Ujjain, so his sawari goes around the city in Shravan and Bhadrapad.',
    ),
    history: l(
      '13वीं सदी (1234-35) में इल्तुतमिश ने उज्जैन पर हमला कर मंदिर परिसर तोड़ा। 18वीं सदी में मराठा शासन के समय मंदिर का पुनर्निर्माण हुआ। आज का महाकाल लोक गलियारा हाल के वर्षों में बना है।',
      'In 1234-35 Iltutmish raided Ujjain and destroyed the temple complex. The temple was rebuilt in the 18th century under Maratha rule. The present Mahakal Lok corridor is a recent addition.',
    ),
    todo: [
      l('भस्म आरती (सुबह लगभग 4 बजे, पहले से पंजीकरण ज़रूरी)', 'Bhasma aarti (around 4 am, advance registration needed)'),
      l('महाकाल के दर्शन और जलाभिषेक', 'Darshan and jalabhishek of Mahakal'),
      l('महाकाल लोक घूमना', 'Walk through Mahakal Lok'),
      l('शिप्रा के रामघाट पर आरती', 'The evening aarti at Ram Ghat on the Shipra'),
    ],
    best: l('अक्टूबर से मार्च; श्रावण में सवारी के दिन और महाशिवरात्रि पर बहुत भीड़।', 'October to March; very crowded on Shravan sawari days and Maha Shivaratri.'),
    rules: l('भस्म आरती के लिए आधिकारिक पोर्टल पर ऑनलाइन पंजीकरण होता है। पहचान पत्र साथ रखें। दलालों से बचें।', 'Bhasma aarti is booked online on the official portal. Carry an ID. Avoid touts.'),
    how: {
      road: l('उज्जैन शहर के भीतर; स्टेशन से लगभग 2 किमी।', 'Inside Ujjain city; about 2 km from the station.'),
      rail: l('उज्जैन जंक्शन, लगभग 2 किमी।', 'Ujjain Junction, about 2 km.'),
      air: l('इंदौर, लगभग 55 से 58 किमी (सवा घंटा)।', 'Indore, about 55 to 58 km (about 1 hour 15 minutes).'),
    },
    site: 'https://shrimahakaleshwar.mp.gov.in',
    maps: 'Mahakaleshwar Jyotirlinga Temple, Ujjain',
    nearby: [
      { name: l('हरसिद्धि माता मंदिर', 'Harsiddhi Mata Temple'), dist: l('बहुत पास, पैदल', 'Very close, on foot'), text: l('शक्तिपीठ माना जाता है। कथा में राजा विक्रमादित्य की आराध्य देवी। दीपमालिका वाले स्तंभ प्रसिद्ध हैं।', 'Counted as a Shakti Peeth. In legend the goddess worshipped by King Vikramaditya. The lamp pillars are famous.') },
      { name: l('काल भैरव मंदिर', 'Kal Bhairav Temple'), dist: l('लगभग 4 किमी', 'About 4 km'), text: l('उज्जैन के कोतवाल कहे जाने वाले काल भैरव। परंपरा में महाकाल के दर्शन के साथ यहाँ भी जाते हैं।', 'Kal Bhairav, called the kotwal (guardian) of Ujjain. Pilgrims traditionally visit here along with Mahakal.') },
    ],
    video: { id: 'hgJNaAB1vsA', title: 'Shri Mahakal Lok, Mahakal Corridor', channel: 'Madhya Pradesh Tourism' },
  },
  {
    id: 'omkareshwar',
    name: l('ओंकारेश्वर', 'Omkareshwar'),
    place: l('मांधाता द्वीप, नर्मदा तट, खंडवा ज़िला', 'Mandhata island, Narmada, Khandwa district'),
    state: 'MP',
    groups: ['jy'],
    jyNo: 4,
    tags: [l('ज्योतिर्लिंग 4/12', 'Jyotirlinga 4/12')],
    importance: l(
      'नर्मदा के बीच एक द्वीप, जिसका आकार ॐ जैसा माना जाता है। यहाँ ओंकारेश्वर और नदी के दूसरे किनारे ममलेश्वर (अमरेश्वर), दोनों शिव मंदिर साथ-साथ पूजे जाते हैं।',
      'An island in the Narmada, said to be shaped like the ॐ sign. Omkareshwar and, on the other bank, Mamleshwar (Amareshwar), are worshipped together.',
    ),
    katha: l(
      'पुराणों में इसका उल्लेख है। मंदिर की परंपरा है कि शिव जी तीनों लोकों का भ्रमण कर रात्रि में यहाँ विश्राम करते हैं, इसलिए रात की शयन आरती का विशेष महत्व है।',
      'The Puranas mention it. Temple tradition holds that Shiva, after wandering the three worlds, rests here at night, which is why the night shayan aarti has special importance.',
    ),
    history: l(
      'विवरणों के अनुसार मंदिर 11वीं सदी में मालवा के परमार राजाओं ने बनवाया। बाद में आक्रमणों से क्षति हुई। 18वीं सदी में होलकर शासकों, गौतमा बाई और अहिल्याबाई होलकर, ने इसका पुनर्निर्माण कराया।',
      'Accounts say the temple was built by the Paramara kings of Malwa in the 11th century. It was damaged in later raids. In the 18th century the Holkar rulers, Gautama Bai and Ahilyabai Holkar, rebuilt it.',
    ),
    todo: [
      l('ओंकारेश्वर के दर्शन, नर्मदा जल से अभिषेक', 'Darshan of Omkareshwar, abhishek with Narmada water'),
      l('ममलेश्वर के दर्शन', 'Darshan at Mamleshwar'),
      l('ओंकार पर्वत की परिक्रमा', 'Parikrama of Omkar Parvat'),
      l('नर्मदा आरती और नाव से नदी दर्शन', 'Narmada aarti and a boat ride'),
    ],
    best: l('अक्टूबर से मार्च। बरसात में नर्मदा उफान पर रहती है।', 'October to March. The Narmada is in spate during the monsoon.'),
    rules: l('दर्शन के लिए अलग-अलग कतारें हैं; समय और शुल्क ट्रस्ट की साइट पर देखें।', 'There are separate queues; check timings and fees on the trust site.'),
    how: {
      road: l('इंदौर से लगभग 77 किमी (2 से 2.5 घंटे)। उज्जैन और खंडवा से भी बसें।', 'About 77 km from Indore (2 to 2.5 hours). Buses also run from Ujjain and Khandwa.'),
      rail: l('ओंकारेश्वर रोड (मोरटक्का), लगभग 12 किमी। इंदौर जंक्शन लगभग 77 किमी।', 'Omkareshwar Road (Mortakka), about 12 km. Indore Junction is about 77 km.'),
      air: l('इंदौर, लगभग 77 से 88 किमी।', 'Indore, about 77 to 88 km.'),
    },
    site: 'https://shriomkareshwar.org',
    maps: 'Omkareshwar Jyotirlinga Temple, Mandhata',
    nearby: [
      { name: l('ममलेश्वर मंदिर', 'Mamleshwar Temple'), dist: l('नदी के दूसरे किनारे, बहुत पास', 'On the other bank, very close'), text: l('ओंकारेश्वर का ही अंग माना जाता है। दर्शन के लिए पुल या नाव से जाते हैं।', 'Considered part of the Omkareshwar darshan. Reached by the bridge or by boat.') },
      { name: l('ओंकार पर्वत परिक्रमा', 'Omkar Parvat Parikrama'), dist: l('लगभग 7 किमी का पैदल मार्ग', 'A walk of about 7 km'), text: l('मांधाता पर्वत के चारों ओर नर्मदा जल लेकर परिक्रमा की परंपरा है। मार्ग में सिद्धनाथ और गौरी सोमनाथ मंदिर आते हैं।', 'The tradition is to circle Mandhata hill carrying Narmada water. The route passes the Siddhanath and Gauri Somnath temples.') },
    ],
    video: { id: 'D5VbC5kZkPU', title: 'Omkareshwar Diaries', channel: 'Madhya Pradesh Tourism' },
  },
  {
    id: 'kedarnath',
    name: l('केदारनाथ', 'Kedarnath'),
    place: l('रुद्रप्रयाग ज़िला, उत्तराखंड', 'Rudraprayag district, Uttarakhand'),
    state: 'UK',
    groups: ['jy', 'ccd'],
    jyNo: 5,
    tags: [l('ज्योतिर्लिंग 5/12', 'Jyotirlinga 5/12'), l('छोटा चार धाम', 'Chota Char Dham'), l('पंच केदार', 'Panch Kedar')],
    importance: l(
      'मंदाकिनी के किनारे हिमालय में लगभग 3,583 मीटर की ऊँचाई पर, बारह ज्योतिर्लिंगों में सबसे ऊँचा। छोटा चार धाम और पंच केदार का पहला केदार।',
      'In the Himalayas by the Mandakini at about 3,583 m, the highest of the twelve Jyotirlingas. Part of the Chota Char Dham and the first of the Panch Kedar.',
    ),
    katha: l(
      'लोककथा है कि महाभारत के बाद पांडव शिव जी से क्षमा माँगने आए। शिव जी बैल का रूप लेकर छिप गए, पर पहचान लिए गए। वे भूमि में समाने लगे तो भीम ने उनकी पीठ (कूबड़) पकड़ ली। वही पीठ केदारनाथ में पूजी जाती है, बाकी अंग चार अन्य स्थानों पर प्रकट हुए। यही पंच केदार हैं।',
      'A folk tale says that after the Mahabharata the Pandavas went to seek Shiva’s forgiveness. He hid as a bull but was recognised. As he sank into the ground Bhima caught his hump. That hump is worshipped at Kedarnath, and other parts appeared at four other places. These are the Panch Kedar.',
    ),
    history: l(
      'मंदिर की मूल तिथि निश्चित नहीं। मान्यता है कि आदि शंकराचार्य ने इसका जीर्णोद्धार कराया, और उनकी समाधि मंदिर के पीछे है। 2013 की भीषण बाढ़ में आसपास सब बह गया, पर मंदिर के पीछे की एक बड़ी शिला (अब भीम शिला) ने मंदिर को बचा लिया।',
      'The temple’s original date is uncertain. Adi Shankaracharya is believed to have revived it, and his samadhi is behind the temple. In the great 2013 flood much of the surroundings was swept away, but a large boulder behind the temple (now called Bhim Shila) protected it.',
    ),
    todo: [
      l('बाबा केदार के दर्शन और अभिषेक', 'Darshan and abhishek of Baba Kedar'),
      l('संध्या आरती', 'The evening aarti'),
      l('भीम शिला और शंकराचार्य समाधि', 'Bhim Shila and Shankaracharya’s samadhi'),
      l('भैरवनाथ मंदिर के दर्शन', 'Visit the Bhairavnath temple'),
    ],
    best: l('मई से जून और सितंबर से अक्टूबर। बरसात में भूस्खलन का खतरा रहता है।', 'May to June and September to October. Landslides are a risk in the monsoon.'),
    rules: l('यात्रा पंजीकरण अनिवार्य है (आधिकारिक पोर्टल से)। हेलीकॉप्टर का टिकट सिर्फ़ IRCTC की आधिकारिक साइट से लें। सर्दी के कपड़े और बरसाती साथ रखें।', 'Yatra registration is mandatory (on the official portal). Book helicopters only on the official IRCTC site. Carry warm clothes and a rain cover.'),
    how: {
      road: l('गौरीकुंड तक सड़क, फिर लगभग 16 से 17 किमी पैदल (6 से 8 घंटे)। हेलीकॉप्टर फाटा, सिरसी और गुप्तकाशी से।', 'Road up to Gaurikund, then about 16 to 17 km on foot (6 to 8 hours). Helicopters fly from Phata, Sersi and Guptkashi.'),
      rail: l('ऋषिकेश (या हरिद्वार जंक्शन)। ऋषिकेश से गौरीकुंड लगभग 210 किमी।', 'Rishikesh (or Haridwar Junction). About 210 km from Rishikesh to Gaurikund.'),
      air: l('जॉली ग्रांट, देहरादून।', 'Jolly Grant, Dehradun.'),
    },
    site: 'https://badrinath-kedarnath.gov.in',
    maps: 'Kedarnath Temple, Uttarakhand',
    note: l('कपाट बंद होने पर बाबा केदार की पूजा ऊखीमठ के ओंकारेश्वर मंदिर में होती है। कपाट खुलने और बंद होने की तिथि हर वर्ष मंदिर समिति घोषित करती है।', 'When the doors close for winter, Baba Kedar is worshipped at the Omkareshwar temple in Ukhimath. The opening and closing dates are announced by the temple committee each year.'),
    nearby: [
      { name: l('भैरवनाथ मंदिर', 'Bhairavnath Temple'), dist: l('मंदिर के पास, ऊपर पहाड़ी पर', 'Near the temple, on the ridge above'), text: l('भैरव जी को केदार क्षेत्र का रक्षक माना जाता है। मान्यता है कि कपाट बंद रहने पर वे क्षेत्र की रक्षा करते हैं।', 'Bhairav ji is regarded as the guardian of the Kedar region. It is believed he guards the area while the doors are closed.') },
      { name: l('त्रियुगीनारायण', 'Triyuginarayan'), dist: l('लगभग 27 से 31 किमी', 'About 27 to 31 km'), text: l('मान्यता है कि यहीं शिव-पार्वती का विवाह हुआ। उस विवाह की अखंड धूनी आज भी जलती है।', 'It is believed Shiva and Parvati were married here. The sacred fire of that wedding is said to burn still.') },
      { name: l('ऊखीमठ', 'Ukhimath'), dist: l('सर्दियों का आसन', 'Winter seat'), text: l('सर्दियों में केदारनाथ के कपाट बंद होने पर बाबा केदार की पूजा यहीं के ओंकारेश्वर मंदिर में होती है।', 'When Kedarnath’s doors close in winter, Baba Kedar is worshipped here at the Omkareshwar temple.') },
    ],
    video: { id: 'lITNOLKby_Y', title: 'Panch Kedar, Kedarnath (Temples of India)', channel: 'Prasar Bharati Archives' },
  },
  {
    id: 'bhimashankar',
    name: l('भीमाशंकर', 'Bhimashankar'),
    place: l('खेड़ तालुका, पुणे ज़िला, सह्याद्रि', 'Khed taluka, Pune district, Sahyadri'),
    state: 'MH',
    groups: ['jy'],
    jyNo: 6,
    tags: [l('ज्योतिर्लिंग 6/12', 'Jyotirlinga 6/12')],
    importance: l(
      'सह्याद्रि के घने जंगल में, भीमा नदी के उद्गम के पास। यह भीमाशंकर वन्यजीव अभयारण्य के भीतर है, जहाँ बड़ी गिलहरी (शेकरू) मिलती है।',
      'In the dense Sahyadri forest near the source of the Bhima river. It lies within the Bhimashankar Wildlife Sanctuary, home of the Indian giant squirrel (shekru).',
    ),
    katha: l(
      'पुराण में त्रिपुरासुर ने ब्रह्मा जी से वर पाकर तीनों लोकों को सताया। शिव जी ने भीमशंकर रूप में उसका संहार किया। कहते हैं कि युद्ध के बाद उनके पसीने से भीमा नदी बनी। देवताओं के आग्रह पर शिव जी यहीं लिंग रूप में रुके। कार्तिक पूर्णिमा पर इसी विजय का उत्सव मनाया जाता है।',
      'In the Purana, Tripurasura, with a boon from Brahma, tormented the three worlds. Shiva destroyed him in the Bhimashankara form. After the battle his sweat is said to have become the Bhima river. At the devas’ request Shiva stayed here as a lingam. Kartik Purnima marks that victory.',
    ),
    history: l(
      'मंदिर की सरकारी साइट इसके 1212 में पुनर्निर्माण का उल्लेख करती है। 18वीं सदी में नाना फडणवीस ने सभामंडप और शिखर बनवाए। पेशवा चिमाजी अप्पा ने 1739 में वसई की जीत के बाद पुर्तगालियों से मिली एक विशाल घंटा यहाँ चढ़ाया। मान्यता है कि शिवाजी महाराज और पेशवाओं ने मंदिर की पूजा के लिए सहयोग दिया।',
      'The temple’s official site mentions restoration in 1212. In the 18th century Nana Phadnavis built the assembly hall and spire. Peshwa Chimaji Appa offered a large bell taken from the Portuguese after the 1739 victory at Vasai. Shivaji Maharaj and the Peshwas are said to have supported the temple’s worship.',
    ),
    todo: [
      l('भीमाशंकर के दर्शन', 'Darshan of Bhimashankar'),
      l('मंदिर के पीछे मोक्षकुंड तीर्थ', 'Mokshakund Tirth behind the temple'),
      l('कमलजा माता मंदिर', 'Kamalja Mata temple'),
      l('जंगल में प्रकृति-भ्रमण', 'A nature walk in the forest'),
    ],
    best: l('अगस्त से फरवरी। बरसात में हरियाली और कोहरा, पर फिसलन और धीमी गाड़ी।', 'August to February. The monsoon is green and misty but slippery and slow.'),
    rules: l('मंदिर तक पहुँचने के लिए बस स्टैंड से लगभग 5 किमी का रास्ता है। समय बदलते रहते हैं, ट्रस्ट की साइट देखें।', 'The temple is about 5 km from the bus stand. Timings change, check the trust site.'),
    how: {
      road: l('पुणे से लगभग 110 किमी (3.5 घंटे), राजगुरुनगर और मंचर होकर। पुणे के शिवाजीनगर से एम.एस.आर.टी.सी. बसें।', 'About 110 km from Pune (3.5 hours) via Rajgurunagar and Manchar. MSRTC buses run from Shivajinagar, Pune.'),
      rail: l('सीधी ट्रेन नहीं है। पुणे सबसे सुविधाजनक है।', 'No direct train. Pune is the practical rail hub.'),
      air: l('पुणे हवाई अड्डा, लगभग 105 से 125 किमी।', 'Pune airport, about 105 to 125 km.'),
    },
    site: 'https://shreebhimashankar.com',
    maps: 'Bhimashankar Temple, Pune',
    note: l('भीमाशंकर की पहचान को लेकर कुछ परंपराएँ अलग मत रखती हैं। महाराष्ट्र का यह मंदिर सबसे अधिक माना जाता है।', 'A few traditions hold a different view on which place is Bhimashankar. The Maharashtra temple is the most widely accepted.'),
    nearby: [
      { name: l('मोक्षकुंड तीर्थ', 'Mokshakund Tirth'), dist: l('मंदिर के पीछे', 'Behind the temple'), text: l('एक पवित्र कुंड, जहाँ तीर्थयात्री स्नान या आचमन करते हैं।', 'A sacred pool where pilgrims bathe or take achaman.') },
      { name: l('कमलजा माता मंदिर', 'Kamalja Mata Temple'), dist: l('परिसर के पास', 'Near the complex'), text: l('पार्वती जी का एक रूप माने जाने वाली कमलजा देवी का मंदिर, जो भीमाशंकर यात्रा का अंग माना जाता है।', 'The temple of Kamalja Devi, held to be a form of Parvati, usually visited as part of the Bhimashankar yatra.') },
    ],
  },
  {
    id: 'kashi-vishwanath',
    name: l('काशी विश्वनाथ', 'Kashi Vishwanath'),
    place: l('वाराणसी, उत्तर प्रदेश, गंगा तट', 'Varanasi, Uttar Pradesh, on the Ganga'),
    state: 'UP',
    groups: ['jy'],
    jyNo: 7,
    tags: [l('ज्योतिर्लिंग 7/12', 'Jyotirlinga 7/12'), l('सप्त पुरी: काशी', 'Sapta Puri: Kashi')],
    importance: l(
      'विश्व के नाथ, विश्वेश्वर। काशी को शिव जी की प्रिय नगरी और मोक्ष की नगरी माना जाता है। मान्यता है कि पहला ज्योतिर्लिंग यहीं प्रकट हुआ।',
      'Lord of the Universe, Vishweshwar. Kashi is held to be Shiva’s beloved city and a city of moksha. It is believed the first Jyotirlinga manifested here.',
    ),
    katha: l(
      'काशी को शिव जी के त्रिशूल पर टिकी नगरी कहा जाता है, जो प्रलय में भी नष्ट नहीं होती। परंपरा है कि मृत्यु के समय शिव जी स्वयं यहाँ तारक मंत्र देते हैं।',
      'Kashi is said to rest on Shiva’s trident and to survive even the great dissolution. Tradition holds that at the time of death Shiva himself gives the tarak mantra here.',
    ),
    history: l(
      'यह मंदिर इतिहास में कई बार तोड़ा और बनाया गया। इसकी तिथियों और कारणों पर इतिहासकारों में चर्चा है। वर्तमान मंदिर 1780 में अहिल्याबाई होल्कर ने बनवाया। 1835 में महाराजा रणजीत सिंह ने शिखर के लिए सोना दान दिया। 13 दिसंबर 2021 को काशी विश्वनाथ धाम (गलियारा) का उद्घाटन हुआ, जिससे मंदिर गंगा घाट से सीधे जुड़ गया।',
      'The temple was demolished and rebuilt several times, and historians discuss the dates and reasons. The present temple was built in 1780 by Ahilyabai Holkar. In 1835 Maharaja Ranjit Singh donated gold for the spire. The Kashi Vishwanath Dham corridor was inaugurated on 13 December 2021, linking the temple directly to the Ganga ghats.',
    ),
    todo: [
      l('विश्वनाथ जी के दर्शन', 'Darshan of Vishwanath ji'),
      l('गंगा स्नान, फिर दर्शन (परंपरा)', 'A Ganga bath first, then darshan (tradition)'),
      l('काल भैरव के दर्शन, मान्यता है कि पहले उनके', 'Kal Bhairav darshan; tradition says to go to him first'),
      l('दशाश्वमेध घाट की गंगा आरती (शाम)', 'Ganga aarti at Dashashwamedh Ghat (evening)'),
    ],
    best: l('अक्टूबर से मार्च। श्रावण सोमवार और महाशिवरात्रि पर बहुत भीड़।', 'October to March. Shravan Mondays and Maha Shivaratri are extremely crowded.'),
    rules: l('मंदिर में मोबाइल, बैग जैसी चीज़ें अंदर नहीं ले जाने दी जातीं; निःशुल्क लॉकर की व्यवस्था है। सुगम दर्शन और आरती की बुकिंग सिर्फ़ आधिकारिक पोर्टल से करें।', 'Phones and bags are generally not allowed inside; free lockers are provided. Book sugam darshan and aarti only on the official portal.'),
    how: {
      road: l('पुराने शहर की गलियों में, गाड़ी से पहले कुछ दूरी तक ही जा सकते हैं; आगे पैदल या रिक्शा।', 'In the old city lanes; vehicles stop at some distance, then walk or take a rickshaw.'),
      rail: l('वाराणसी जंक्शन, लगभग 4 से 6 किमी।', 'Varanasi Junction, about 4 to 6 km.'),
      air: l('लाल बहादुर शास्त्री अंतरराष्ट्रीय हवाई अड्डा, लगभग 25 किमी।', 'Lal Bahadur Shastri International Airport, about 25 km.'),
    },
    site: 'https://shrikashivishwanath.org',
    maps: 'Kashi Vishwanath Temple, Varanasi',
    nearby: [
      { name: l('अन्नपूर्णा मंदिर', 'Annapurna Temple'), dist: l('बहुत पास, विश्वनाथ गली में', 'Very close, in Vishwanath Gali'), text: l('काशी की अन्नपूर्णा देवी, जिनसे कोई भूखा नहीं लौटता, ऐसी मान्यता है। विश्वनाथ दर्शन के साथ यहाँ आना परंपरा है।', 'Annapurna Devi of Kashi, from whom none is believed to go hungry. Visiting her with Vishwanath is the tradition.') },
      { name: l('काल भैरव मंदिर', 'Kal Bhairav Temple'), dist: l('लगभग 1 किमी', 'About 1 km'), text: l('काशी के कोतवाल। परंपरा में काशी की यात्रा पहले उनके दर्शन से शुरू होती है।', 'The kotwal (guardian) of Kashi. By tradition a Kashi visit begins with his darshan.') },
      { name: l('संकट मोचन हनुमान मंदिर', 'Sankat Mochan Hanuman Temple'), dist: l('लगभग 3 से 4 किमी', 'About 3 to 4 km'), text: l('हनुमान जी का प्रसिद्ध मंदिर, जो मंगलवार और शनिवार को भक्तों से भरा रहता है।', 'A famous Hanuman temple, thronged on Tuesdays and Saturdays.') },
      { name: l('सारनाथ', 'Sarnath'), dist: l('लगभग 8 से 9 किमी', 'About 8 to 9 km'), text: l('वह स्थान जहाँ बुद्ध ने पहला उपदेश दिया। काशी के साथ अक्सर देखा जाता है।', 'Where the Buddha gave his first sermon. Often visited along with Kashi.') },
    ],
  },
  {
    id: 'trimbakeshwar',
    name: l('त्र्यंबकेश्वर', 'Trimbakeshwar'),
    place: l('त्र्यंबक, नाशिक ज़िला, ब्रह्मगिरि की तलहटी', 'Trimbak, Nashik district, at the foot of Brahmagiri'),
    state: 'MH',
    groups: ['jy'],
    jyNo: 8,
    tags: [l('ज्योतिर्लिंग 8/12', 'Jyotirlinga 8/12'), l('गोदावरी उद्गम', 'Source of the Godavari')],
    importance: l(
      'यहाँ के लिंग के तीन मुख हैं, ब्रह्मा, विष्णु और महेश के प्रतीक। यह गोदावरी (दक्षिण की गंगा) के उद्गम के पास है। ब्रह्मगिरि, नीलगिरि और कालगिरि पहाड़ियों के बीच बसा है। नाशिक कुंभ का भी अंग।',
      'The lingam here has three faces, standing for Brahma, Vishnu and Mahesh. It lies near the source of the Godavari (the Ganga of the South), between the Brahmagiri, Nilagiri and Kalagiri hills. It is also part of the Nashik Kumbh.',
    ),
    katha: l(
      'कथा है कि ऋषि गौतम पर गौहत्या का दोष लगा तो उन्होंने शिव जी की आराधना की। शिव जी ने गंगा को यहाँ प्रकट किया, जो गोदावरी कहलाईं। मंदिर परिसर के कुशावर्त कुंड को गोदावरी का स्रोत माना जाता है।',
      'The story is that sage Gautama was accused of killing a cow and prayed to Shiva. Shiva made Ganga appear here, and she became the Godavari. The Kushavarta kund in the temple area is regarded as a source of the Godavari.',
    ),
    history: l(
      'मंदिर के ट्रस्ट के अनुसार वर्तमान मंदिर पेशवा बालाजी बाजीराव (नानासाहेब, 1740 से 1760) ने पुराने मंदिर की जगह बनवाया। मंदिर पत्थर से बना है और चारों दिशाओं में द्वार हैं।',
      'According to the temple trust, the present temple was built by Peshwa Balaji Bajirao (Nanasaheb, 1740 to 1760) in place of an older one. It is built of stone and has gates on all four sides.',
    ),
    todo: [
      l('त्रिमुखी लिंग के दर्शन', 'Darshan of the three-faced lingam'),
      l('कुशावर्त कुंड में स्नान', 'A bath at Kushavarta kund'),
      l('ब्रह्मगिरि पर गोदावरी उद्गम तक चढ़ाई', 'Climb Brahmagiri to the Godavari source'),
      l('नारायण नागबली, कालसर्प शांति जैसी पूजा (केवल यहीं की जाती है, ऐसा बताया जाता है)', 'Rituals such as Narayan Nagbali and Kalsarpa shanti (said to be done only here)'),
    ],
    best: l('अक्टूबर से फरवरी; बरसात में ब्रह्मगिरि पर हरियाली पर फिसलन।', 'October to February; Brahmagiri is green in the monsoon but slippery.'),
    rules: l('पूजा के लिए ट्रस्ट के पंजीकृत पुरोहित से ही बात करें। दर्शन का समय ट्रस्ट की साइट पर देखें।', 'For rituals, speak only to the trust’s registered priests. See the trust site for darshan timings.'),
    how: {
      road: l('नाशिक शहर से लगभग 28 से 30 किमी। मुंबई से लगभग 180 से 200 किमी (4 से 5 घंटे)।', 'About 28 to 30 km from Nashik. About 180 to 200 km from Mumbai (4 to 5 hours).'),
      rail: l('नाशिक रोड स्टेशन, लगभग 30 से 39 किमी।', 'Nashik Road station, about 30 to 39 km.'),
      air: l('नाशिक (ओज़र) हवाई अड्डा, उड़ानें सीमित; मुंबई अधिक सुविधाजनक है।', 'Nashik (Ozar) airport has limited flights; Mumbai is more convenient.'),
    },
    site: 'https://trimbakeshwartrust.com',
    maps: 'Trimbakeshwar Shiva Temple, Nashik',
    nearby: [
      { name: l('ब्रह्मगिरि पर्वत', 'Brahmagiri Hill'), dist: l('लगभग 2 से 3 किमी की चढ़ाई', 'A climb of about 2 to 3 km'), text: l('गोदावरी का उद्गम इसी पर्वत से बताया जाता है। 600 से अधिक पत्थर की सीढ़ियाँ हैं।', 'The Godavari is said to rise on this hill. There are over 600 stone steps.') },
      { name: l('अंजनेरी पर्वत', 'Anjaneri Hill'), dist: l('लगभग 10 से 11 किमी', 'About 10 to 11 km'), text: l('परंपरा में हनुमान जी की माता अंजना का स्थान। यहाँ से आसपास की पहाड़ियों का सुंदर दृश्य मिलता है।', 'In tradition the place of Anjana, Hanuman ji’s mother. It offers fine views of the surrounding hills.') },
    ],
    video: { id: 'lWIlEmUhAHY', title: 'Documentary: Jyotirling Trimbakeshwar', channel: 'Doordarshan Sahyadri' },
  },
  {
    id: 'vaidyanath',
    name: l('वैद्यनाथ', 'Vaidyanath'),
    place: l('देवघर, झारखंड', 'Deoghar, Jharkhand'),
    state: 'JH',
    groups: ['jy'],
    jyNo: 9,
    tags: [l('ज्योतिर्लिंग 9/12', 'Jyotirlinga 9/12'), l('शक्तिपीठ', 'Shakti Peeth')],
    importance: l(
      'वैद्य के नाथ, यानी रोगों से मुक्ति देने वाले शिव। यहाँ ज्योतिर्लिंग के साथ शक्तिपीठ भी माना जाता है, जहाँ माना जाता है कि सती का हृदय गिरा था। श्रावण में बोल बम की कांवड़ यात्रा के लिए प्रसिद्ध।',
      'The Lord of Physicians, Shiva the healer. Here a Shakti Peeth is also counted, where Sati’s heart is believed to have fallen. Famous for the Bol Bam kanwar yatra in Shravan.',
    ),
    katha: l(
      'कथा है कि रावण ने शिव जी को प्रसन्न करने के लिए अपने सिर चढ़ाए। शिव जी ने उसे कामना लिंग दिया, इस शर्त के साथ कि जहाँ रखा जाएगा वहीं स्थापित हो जाएगा। देवताओं की युक्ति से रावण को रुकना पड़ा। लिंग एक चरवाहे बैजू को सौंपा गया, जिसने उसे भूमि पर रख दिया। लिंग वहीं रह गया। बैजू के नाम से इसे बैद्यनाथ भी कहा जाता है।',
      'The story is that Ravana offered his heads to please Shiva. Shiva gave him the Kamna Linga on the condition that it would settle wherever it was first set down. The devas contrived to make Ravana stop. He handed the lingam to a shepherd, Baiju, who put it on the ground. It stayed there. The name Baidyanath is also linked to Baiju.',
    ),
    history: l(
      'मत्स्य पुराण में इस स्थान को "आरोग्य बैद्यनाथ" कहा गया है। परिसर में मुख्य मंदिर के साथ 21 अन्य मंदिर हैं। अंग्रेज़ी शासन में भी तीर्थयात्रियों की व्यवस्था पर अधिकारी ध्यान देते थे।',
      'The Matsya Purana calls the place "Arogya Baidyanath". The complex has the main temple and 21 other temples. Even under British rule officials took an interest in managing pilgrims’ offerings.',
    ),
    todo: [
      l('बाबा बैद्यनाथ के दर्शन, गंगाजल से जलाभिषेक', 'Darshan of Baba Baidyanath, jalabhishek with Ganga water'),
      l('श्रावण में सुल्तानगंज से कांवड़ यात्रा', 'The kanwar yatra from Sultanganj in Shravan'),
      l('परिसर के अन्य मंदिर और शिवगंगा सरोवर', 'The other temples and the Shivaganga pond in the complex'),
      l('बासुकीनाथ के दर्शन (परंपरा)', 'Darshan at Basukinath (tradition)'),
    ],
    best: l('अक्टूबर से मार्च। श्रावण में अपार भीड़ होती है; पहले से योजना बनाएँ।', 'October to March. Shravan is hugely crowded; plan well ahead.'),
    rules: l('श्रावण मेले में रास्ते और प्रवेश के विशेष नियम लागू होते हैं। मंदिर की साइट देखें।', 'During the Shravani Mela, special routes and entry rules apply. See the temple site.'),
    how: {
      road: l('देवघर शहर के भीतर।', 'Inside Deoghar town.'),
      rail: l('जसीडीह जंक्शन, लगभग 7 किमी (हावड़ा-दिल्ली मार्ग)।', 'Jasidih Junction, about 7 km (Howrah-Delhi line).'),
      air: l('देवघर हवाई अड्डा, लगभग 9 से 12 किमी।', 'Deoghar airport, about 9 to 12 km.'),
    },
    site: 'https://www.babadham.org',
    maps: 'Baidyanath Temple, Deoghar',
    note: l('बैद्यनाथ ज्योतिर्लिंग के स्थान पर परंपराएँ भिन्न हैं। देवघर (झारखंड) के साथ महाराष्ट्र के परली और हिमाचल के बैजनाथ को भी कुछ लोग यह स्थान मानते हैं।', 'Traditions differ on the site of the Vaidyanath Jyotirlinga. Besides Deoghar (Jharkhand), some people also hold Parli in Maharashtra and Baijnath in Himachal to be the place.'),
    nearby: [
      { name: l('बासुकीनाथ मंदिर', 'Basukinath Temple'), dist: l('लगभग 43 से 48 किमी', 'About 43 to 48 km'), text: l('परंपरा में बैद्यनाथ की यात्रा बासुकीनाथ के दर्शन से पूरी मानी जाती है। श्रावण की कांवड़ यात्रा यहीं समाप्त होती है।', 'Tradition holds that the Baidyanath yatra is completed with darshan at Basukinath. The Shravan kanwar yatra ends here.') },
      { name: l('तपोवन', 'Tapovan'), dist: l('शहर के पास (गुफाएँ और पहाड़ी)', 'Near the town (caves and hill)'), text: l('एक पहाड़ी स्थल, जहाँ साधु-संतों की तपस्या की परंपरा बताई जाती है।', 'A hill site associated with the tradition of ascetics doing tapasya.') },
    ],
  },
  {
    id: 'nageshwar',
    name: l('नागेश्वर', 'Nageshwar'),
    place: l('दारुकावन, द्वारका के पास, देवभूमि द्वारका ज़िला', 'Near Dwarka, Devbhumi Dwarka district'),
    state: 'GJ',
    groups: ['jy'],
    jyNo: 10,
    tags: [l('ज्योतिर्लिंग 10/12', 'Jyotirlinga 10/12')],
    importance: l(
      'शिव पुराण में वर्णित ज्योतिर्लिंग। नागों के स्वामी रूप में पूजे जाते हैं और विष के भय से रक्षा करने वाले माने जाते हैं। द्वारका से बेट द्वारका के मार्ग पर, सौराष्ट्र के तट के पास।',
      'A Jyotirlinga described in the Shiva Purana. Worshipped as lord of the nagas and believed to protect from the fear of poison. It lies on the route from Dwarka to Bet Dwarka, near the Saurashtra coast.',
    ),
    katha: l(
      'दारुक नामक राक्षस ने दारुकावन में भक्त सुप्रिया और अन्य को बंदी बना लिया। सुप्रिया के शिव मंत्र जपने से शिव जी प्रकट हुए, राक्षस का नाश किया और यहाँ ज्योतिर्लिंग के रूप में नागेश्वर कहलाए।',
      'A demon named Daruka held the devotee Supriya and others captive in Darukavana. Supriya’s chanting of Shiva’s mantra brought Shiva, who destroyed the demon and stayed here as the Jyotirlinga, called Nageshwar.',
    ),
    history: l(
      'यह मंदिर आज के रूप में आधुनिक निर्माण है, जिसके सामने शिव जी की विशाल प्रतिमा है। प्राचीन उल्लेख इसे नागेश्वर के रूप में बताते हैं, पर स्थान को लेकर मतभेद हैं (नीचे देखें)।',
      'The temple as seen today is largely a modern construction, with a large statue of Shiva in front. Ancient references name Nageshwar, but there are differing views on the place (see below).',
    ),
    todo: [
      l('नागेश्वर महादेव के दर्शन और अभिषेक', 'Darshan and abhishek of Nageshwar Mahadev'),
      l('मंदिर के सामने शिव प्रतिमा', 'The Shiva statue in front of the temple'),
      l('द्वारकाधीश और बेट द्वारका के साथ यात्रा', 'Combine with Dwarkadhish and Bet Dwarka'),
    ],
    best: l('अक्टूबर से मार्च।', 'October to March.'),
    rules: l('दर्शन का समय और नियम मंदिर ट्रस्ट से पूछ लें।', 'Check timings and rules with the temple trust.'),
    how: {
      road: l('द्वारका से लगभग 17 किमी (टैक्सी या ऑटो)।', 'About 17 km from Dwarka (taxi or auto).'),
      rail: l('द्वारका या ओखा स्टेशन।', 'Dwarka or Okha station.'),
      air: l('जामनगर, लगभग 126 से 137 किमी (द्वारका तक)।', 'Jamnagar, about 126 to 137 km (to Dwarka).'),
    },
    site: 'https://www.nageshwarjyotirling.com',
    maps: 'Nageshwar Jyotirlinga Temple, Dwarka',
    note: l('नागेश्वर ज्योतिर्लिंग के स्थान पर तीन दावे हैं: द्वारका (गुजरात), औंढा नागनाथ (महाराष्ट्र) और जागेश्वर (उत्तराखंड)। सबसे अधिक माना जाने वाला और सबसे अधिक दर्शन किया जाने वाला द्वारका वाला है।', 'There are three claims for the Nageshwar Jyotirlinga: Dwarka (Gujarat), Aundha Nagnath (Maharashtra) and Jageshwar (Uttarakhand). The Dwarka one is the most widely accepted and most visited.'),
    nearby: [
      { name: l('द्वारकाधीश मंदिर', 'Dwarkadhish Temple'), dist: l('लगभग 17 किमी', 'About 17 km'), text: l('श्री कृष्ण का मंदिर, चार धाम में पश्चिम का धाम।', 'The temple of Shri Krishna, the western dham of the Char Dham.'), photoOf: 'dwarkadhish' },
      { name: l('बेट द्वारका', 'Bet Dwarka'), dist: l('द्वारका से लगभग 30 से 36 किमी (ओखा होकर)', 'About 30 to 36 km from Dwarka (via Okha)'), text: l('समुद्र के बीच का द्वीप, जो कृष्ण जी का निवास माना जाता है। अब सुदर्शन सेतु से भी जाया जा सकता है।', 'An island in the sea, believed to be Krishna’s residence. It can now also be reached by the Sudarshan Setu.') },
    ],
  },
  {
    id: 'rameshwaram',
    name: l('रामेश्वरम', 'Rameshwaram'),
    place: l('रामेश्वरम द्वीप, रामनाथपुरम ज़िला', 'Rameswaram island, Ramanathapuram district'),
    state: 'TN',
    groups: ['jy', 'cd'],
    jyNo: 11,
    tags: [l('ज्योतिर्लिंग 11/12', 'Jyotirlinga 11/12'), l('चार धाम', 'Char Dham')],
    importance: l(
      'दक्षिण का धाम और 11वाँ ज्योतिर्लिंग। मान्यता है कि लंका जाने से पहले श्री राम ने यहाँ शिव जी की पूजा की। यहाँ भारत के किसी भी मंदिर का सबसे लंबा गलियारा है।',
      'The southern dham and the 11th Jyotirlinga. It is believed that before crossing to Lanka Shri Ram worshipped Shiva here. It has the longest corridor of any temple in India.',
    ),
    katha: l(
      'परंपरा है कि राम जी ने रेत से लिंग (रामलिंगम) बनाया, जबकि हनुमान जी कैलाश से जो लिंग (विश्वलिंगम) लाए, उसकी पूजा पहले की जाती है। मंदिर के भीतर 22 तीर्थ (कुएँ) राम जी के 22 बाणों से जुड़े माने जाते हैं।',
      'Tradition says Ram made a lingam of sand (Ramalingam), while the lingam Hanuman brought from Kailash (Vishvalingam) is worshipped first. The 22 theerthams (wells) inside the temple are associated with Ram’s 22 arrows.',
    ),
    history: l(
      'पांड्य राजवंश ने 12वीं सदी में मंदिर का विस्तार किया। वर्तमान रूप 17वीं सदी का माना जाता है। तीसरा गलियारा (चोक्कट्टन मंडपम) 18वीं सदी के अंत में सेतुपतियों ने बनवाया। राजगोपुरम लगभग 53 मीटर ऊँचा है।',
      'The Pandya dynasty expanded the temple in the 12th century. The present form is believed to date from the 17th century. The third corridor (Chokkattan Mandapam) was built by the Sethupathis in the late 18th century. The rajagopuram is about 53 m high.',
    ),
    todo: [
      l('अग्नि तीर्थम (समुद्र) में स्नान', 'A bath at Agni Theertham (the sea)'),
      l('मंदिर के 22 तीर्थों में स्नान (मंदिर के काउंटर से ही)', 'Bathe at the 22 theerthams (only through the temple counter)'),
      l('रामनाथस्वामी के दर्शन', 'Darshan of Ramanathaswamy'),
      l('धनुषकोडी और राम सेतु तट', 'Dhanushkodi and the Ram Setu shore'),
    ],
    best: l('अक्टूबर से अप्रैल। गर्मी में बहुत उमस और धूप।', 'October to April. Summers are very hot and humid.'),
    rules: l('22 तीर्थों में स्नान की व्यवस्था सिर्फ़ मंदिर के आधिकारिक काउंटर से करें। बाहर के दलाल कई गुना शुल्क लेते हैं।', 'Arrange the 22 theertham baths only at the temple’s official counter. Touts outside charge many times more.'),
    how: {
      road: l('पंबन पुल से मदुरै और अन्य शहरों से सड़क संपर्क। मदुरै से लगभग 170 किमी।', 'Road links to Madurai and other cities over the Pamban bridge. About 170 km from Madurai.'),
      rail: l('रामेश्वरम स्टेशन, मंदिर से लगभग 1 से 1.3 किमी। मदुरै से सीधी ट्रेनें।', 'Rameswaram station, about 1 to 1.3 km from the temple. Direct trains from Madurai.'),
      air: l('मदुरै, लगभग 170 से 176 किमी (3 से 4 घंटे)।', 'Madurai, about 170 to 176 km (3 to 4 hours).'),
    },
    site: 'https://rameswaramtemple.tn.gov.in',
    maps: 'Ramanathaswamy Temple, Rameswaram',
    nearby: [
      { name: l('अग्नि तीर्थम', 'Agni Theertham'), dist: l('मंदिर के पास, समुद्र तट पर', 'Near the temple, on the shore'), text: l('मुख्य तीर्थ माना जाता है। परंपरा में पहले यहाँ स्नान करके फिर मंदिर के 22 तीर्थों और दर्शन की ओर जाते हैं।', 'Regarded as the main theertham. By tradition one bathes here first and then moves to the 22 theerthams and darshan.') },
      { name: l('धनुषकोडी', 'Dhanushkodi'), dist: l('लगभग 18 से 22 किमी', 'About 18 to 22 km'), text: l('द्वीप का पूर्वी छोर, जहाँ से राम सेतु की दिशा देखी जाती है।', 'The eastern tip of the island, from where the direction of Ram Setu is viewed.') },
    ],
    video: { id: 'zcrMkt462QM', title: 'Rameswaram Ramanathaswamy Temple', channel: 'Tamil Nadu Tourism' },
  },
  {
    id: 'grishneshwar',
    name: l('घृष्णेश्वर', 'Grishneshwar'),
    place: l('वेरुल, एलोरा के पास, छत्रपति संभाजीनगर ज़िला', 'Verul, near Ellora, Chhatrapati Sambhajinagar district'),
    state: 'MH',
    groups: ['jy'],
    jyNo: 12,
    tags: [l('ज्योतिर्लिंग 12/12', 'Jyotirlinga 12/12')],
    importance: l(
      'बारह ज्योतिर्लिंगों में अंतिम। यह एलोरा की गुफाओं से लगभग 1 किमी पर है और लाल पत्थर से बना है, जिस पर बारीक नक्काशी है।',
      'The last of the twelve Jyotirlingas. It is about 1 km from the Ellora Caves and is built of red stone with fine carving.',
    ),
    katha: l(
      'पुराण में ब्राह्मण सुधर्मा की पत्नी सुदेहा संतानहीन थी। उसने अपनी छोटी बहन घुश्मा से सुधर्मा का विवाह कराया। घुश्मा शिव भक्त थी। ईर्ष्या में सुदेहा ने घुश्मा के पुत्र को मार डाला, पर घुश्मा की भक्ति से वह जीवित हो उठा। घुश्मा के कहने पर शिव जी ने सुदेहा को क्षमा किया और यहाँ घुश्मेश्वर के रूप में रुक गए।',
      'In the Purana, Sudeha, wife of the Brahmin Sudharma, had no children. She had him marry her younger sister Ghushma, a devotee of Shiva. Out of jealousy Sudeha killed Ghushma’s son, but he was restored through Ghushma’s devotion. At Ghushma’s request Shiva forgave Sudeha and stayed here as Ghushmeshwar.',
    ),
    history: l(
      'मंदिर 13वीं-14वीं सदी में टूटा और कई बार बना-बिगड़ा। 16वीं सदी में मालोजी भोसले ने इसका जीर्णोद्धार किया। वर्तमान रूप 1729 में इंदौर की गौतमा बाई होलकर ने बनवाया। गर्भगृह के सामने बड़ी नंदी प्रतिमा है।',
      'The temple was destroyed in the 13th and 14th centuries and rebuilt several times. Maloji Bhosale restored it in the 16th century. The present form was built in 1729 by Gautama Bai Holkar of Indore. A large Nandi statue sits in front of the sanctum.',
    ),
    todo: [
      l('घृष्णेश्वर महादेव के दर्शन और अभिषेक', 'Darshan and abhishek of Ghrishneshwar Mahadev'),
      l('पास की एलोरा गुफाएँ (मंगलवार को बंद)', 'The nearby Ellora Caves (closed on Tuesdays)'),
      l('दौलताबाद किला', 'Daulatabad fort'),
    ],
    best: l('अक्टूबर से मार्च; बरसात में एलोरा की हरियाली अच्छी लगती है।', 'October to March; Ellora is lovely and green in the monsoon.'),
    rules: l('गर्भगृह में पुरुषों के ऊपरी वस्त्र उतारने की स्थानीय परंपरा बताई जाती है। आने से पहले मंदिर से पूछ लें।', 'A local custom of men removing upper garments in the sanctum is reported. Check with the temple before you go.'),
    how: {
      road: l('छत्रपति संभाजीनगर से लगभग 30 से 31 किमी, सरकारी बस या टैक्सी (लगभग 45 मिनट)।', 'About 30 to 31 km from Chhatrapati Sambhajinagar by state bus or taxi (about 45 minutes).'),
      rail: l('छत्रपति संभाजीनगर स्टेशन, लगभग 29 किमी।', 'Chhatrapati Sambhajinagar station, about 29 km.'),
      air: l('छत्रपति संभाजीनगर हवाई अड्डा, लगभग 35 किमी।', 'Chhatrapati Sambhajinagar airport, about 35 km.'),
    },
    site: 'https://chhatrapatisambhajinagar.maharashtra.gov.in/en/tourist-place/ellora-leni-and-ghrishneshwar-jyotirlinga-temple-verul/',
    maps: 'Grishneshwar Temple, Verul',
    nearby: [
      { name: l('एलोरा की गुफाएँ', 'Ellora Caves'), dist: l('लगभग 1 किमी', 'About 1 km'), text: l('यूनेस्को विश्व धरोहर: हिंदू, बौद्ध और जैन गुफाएँ, जिनमें कैलास मंदिर प्रसिद्ध है। मंगलवार को बंद।', 'UNESCO World Heritage: Hindu, Buddhist and Jain caves, with the famous Kailasa temple. Closed on Tuesdays.') },
      { name: l('दौलताबाद किला', 'Daulatabad Fort'), dist: l('लगभग 11 किमी', 'About 11 km'), text: l('पहाड़ी पर बना प्राचीन किला, जो पहले देवगिरि कहलाता था।', 'An ancient hill fort, formerly known as Devagiri.') },
    ],
  },
  {
    id: 'badrinath',
    name: l('बद्रीनाथ', 'Badrinath'),
    place: l('चमोली ज़िला, उत्तराखंड, अलकनंदा के तट पर', 'Chamoli district, Uttarakhand, on the Alaknanda'),
    state: 'UK',
    groups: ['cd', 'ccd'],
    tags: [l('चार धाम', 'Char Dham'), l('छोटा चार धाम', 'Chota Char Dham'), l('108 दिव्य देशम', '108 Divya Desam'), l('पंच बद्री: विशाल बद्री', 'Panch Badri: Vishal Badri')],
    importance: l(
      'उत्तर का धाम। भगवान विष्णु यहाँ बद्रीनारायण रूप में पूजे जाते हैं, लगभग 3,133 मीटर की ऊँचाई पर। सामने नर पर्वत है। लगभग एक फुट की काली शालिग्राम मूर्ति स्वयंभू मानी जाती है।',
      'The northern dham. Lord Vishnu is worshipped here as Badrinarayan at about 3,133 m. Nar Parbat stands opposite. The roughly one-foot black shaligram image is held to be self-manifested.',
    ),
    katha: l(
      'मान्यता है कि भगवान विष्णु ने यहाँ तपस्या की और लक्ष्मी जी ने बेर (बदरी) के वृक्ष के रूप में उन्हें धूप-बारिश से बचाया, इसलिए बद्रीनाथ। मंदिर के नीचे तप्त कुंड के गर्म सल्फर जल में दर्शन से पहले स्नान की परंपरा है।',
      'It is believed Vishnu did tapasya here and Lakshmi shaded him from sun and rain as a badri (jujube) tree, hence Badrinath. By tradition one bathes in the hot sulphur water of Tapt Kund below the temple before darshan.',
    ),
    history: l(
      'परंपरा के अनुसार आदि शंकराचार्य ने नौवीं सदी में बद्रीनाथ को तीर्थ के रूप में स्थापित किया। गढ़वाल के राजा ने 16वीं सदी में मूर्ति को वर्तमान मंदिर में स्थापित किया। 1803 के भूकंप के बाद जयपुर के राजा ने मंदिर का बड़ा पुनर्निर्माण कराया। मुख्य पुजारी (रावल) परंपरा से केरल के नंबूदरी ब्राह्मण होते हैं।',
      'Tradition holds that Adi Shankaracharya established Badrinath as a pilgrimage site in the 9th century. A Garhwal king installed the image in the present temple in the 16th century. After the 1803 earthquake the King of Jaipur largely rebuilt it. The head priest (Rawal) is traditionally a Nambudiri Brahmin from Kerala.',
    ),
    todo: [
      l('तप्त कुंड में स्नान', 'A bath at Tapt Kund'),
      l('बद्रीनारायण के दर्शन और आरती', 'Darshan and aarti of Badrinarayan'),
      l('माणा गाँव, भारत का आखिरी गाँव', 'Mana village, the last village of India'),
      l('वसुधारा झरना (माणा से पैदल)', 'Vasudhara falls (on foot from Mana)'),
    ],
    best: l('मई से जून और सितंबर से अक्टूबर। मंदिर लगभग छह महीने खुलता है।', 'May to June and September to October. The temple is open for about six months.'),
    rules: l('यात्रा पंजीकरण आधिकारिक पोर्टल से करें। कपाट खुलने (अक्षय तृतीया के आसपास) और बंद होने (अक्टूबर-नवंबर) की तिथि हर वर्ष घोषित होती है।', 'Register for the yatra on the official portal. Opening (around Akshaya Tritiya) and closing (October-November) dates are announced each year.'),
    how: {
      road: l('ऋषिकेश से लगभग 295 से 300 किमी (10 से 12 घंटे), देवप्रयाग, रुद्रप्रयाग, चमोली और जोशीमठ होकर।', 'About 295 to 300 km from Rishikesh (10 to 12 hours) via Devprayag, Rudraprayag, Chamoli and Joshimath.'),
      rail: l('ऋषिकेश; हरिद्वार जंक्शन से बेहतर ट्रेन संपर्क।', 'Rishikesh; Haridwar Junction has better train links.'),
      air: l('जॉली ग्रांट, देहरादून, लगभग 314 से 320 किमी।', 'Jolly Grant, Dehradun, about 314 to 320 km.'),
    },
    site: 'https://badrinath-kedarnath.gov.in',
    maps: 'Badrinath Temple, Uttarakhand',
    nearby: [
      { name: l('माणा गाँव', 'Mana Village'), dist: l('लगभग 3 किमी', 'About 3 km'), text: l('भारत-तिब्बत सीमा से पहले का आखिरी गाँव। यहाँ व्यास गुफा और भीम पुल हैं।', 'The last village before the India-Tibet border. It has Vyas Gufa and Bhim Pul.') },
      { name: l('वसुधारा झरना', 'Vasudhara Falls'), dist: l('लगभग 9 किमी (माणा से 6 किमी पैदल)', 'About 9 km (6 km on foot from Mana)'), text: l('ऊँचा झरना, जिसकी बूँदें बिखरकर नीचे गिरती हैं। चढ़ाई कठिन है, मौसम देखकर जाएँ।', 'A tall waterfall whose water breaks into spray. The climb is hard, go after checking the weather.') },
      { name: l('योगध्यान बद्री, पांडुकेश्वर', 'Yogadhyan Badri, Pandukeshwar'), dist: l('बद्रीनाथ मार्ग पर', 'On the Badrinath road'), text: l('पंच बद्री में से एक। शीतकाल में कपाट बंद होने पर बद्री जी की पूजा जोशीमठ में होती है।', 'One of the Panch Badri. In winter when the doors close, Badri ji is worshipped at Joshimath.') },
    ],
    video: { id: 'NyOkJUCxSM0', title: 'Badrinath, Where divinity resides', channel: 'Uttarakhand Tourism' },
  },
  {
    id: 'dwarkadhish',
    name: l('द्वारकाधीश', 'Dwarkadhish'),
    place: l('द्वारका, देवभूमि द्वारका ज़िला, गोमती तट', 'Dwarka, Devbhumi Dwarka district, on the Gomti'),
    state: 'GJ',
    groups: ['cd'],
    tags: [l('चार धाम: पश्चिम', 'Char Dham: West'), l('सप्त पुरी: द्वारका', 'Sapta Puri: Dwarka')],
    importance: l(
      'श्री कृष्ण की राजधानी द्वारका, यानी द्वारका के अधीश। चार धाम में पश्चिम का धाम। मंदिर को जगत मंदिर भी कहते हैं।',
      'Dwarka, the capital of Shri Krishna, so the Lord of Dwarka. The western dham of the Char Dham. The temple is also called Jagat Mandir.',
    ),
    katha: l(
      'मान्यता है कि कृष्ण जी ने समुद्र से भूमि लेकर द्वारका बसाई। रुक्मिणी जी का अलग मंदिर है, जहाँ परंपरा में दुर्वासा ऋषि के श्राप की कथा जुड़ी है।',
      'It is believed Krishna reclaimed land from the sea to found Dwarka. Rukmini ji has a separate temple, tied in tradition to the sage Durvasa’s curse.',
    ),
    history: l(
      'पुरातत्त्व के अनुसार यहाँ मंदिर का अस्तित्व कम से कम 200 ईसा पूर्व से माना जाता है। 15वीं-16वीं सदी में मंदिर का पुनर्निर्माण और विस्तार हुआ। मंदिर पाँच मंज़िला है, 72 स्तंभों पर टिका, और शिखर लगभग 78 मीटर ऊँचा है। उस पर विशाल ध्वज लहराता है, जो दिन में कई बार बदला जाता है।',
      'Archaeology places a temple here from at least 200 BCE. It was rebuilt and enlarged in the 15th to 16th centuries. It has five storeys on 72 pillars, and the spire is about 78 m high. A large flag flies from it and is changed several times a day.',
    ),
    todo: [
      l('द्वारकाधीश के दर्शन', 'Darshan of Dwarkadhish'),
      l('ध्वज चढ़ाने का दर्शन', 'See the flag-hoisting'),
      l('स्वर्ग द्वार से गोमती घाट (56 सीढ़ियाँ)', 'Swarga Dwar down 56 steps to the Gomti ghat'),
      l('रुक्मिणी मंदिर, नागेश्वर और बेट द्वारका', 'Rukmini temple, Nageshwar and Bet Dwarka'),
    ],
    best: l('अक्टूबर से मार्च। जन्माष्टमी पर बहुत भीड़।', 'October to March. Janmashtami is very crowded.'),
    rules: l('दर्शन के समय और ध्वज के समय की जानकारी मंदिर की साइट पर देखें।', 'See the temple site for darshan and flag times.'),
    how: {
      road: l('राष्ट्रीय राजमार्ग से द्वारका शहर। जामनगर से लगभग 130 किमी।', 'Dwarka town is on the national highway. About 130 km from Jamnagar.'),
      rail: l('द्वारका स्टेशन, मंदिर से लगभग 1 से 2.5 किमी।', 'Dwarka station, about 1 to 2.5 km from the temple.'),
      air: l('जामनगर, लगभग 126 से 137 किमी। पोरबंदर भी लगभग 100 किमी।', 'Jamnagar, about 126 to 137 km. Porbandar is about 100 km.'),
    },
    site: 'https://www.dwarkadhish.org',
    maps: 'Dwarkadhish Temple, Dwarka',
    nearby: [
      { name: l('नागेश्वर ज्योतिर्लिंग', 'Nageshwar Jyotirlinga'), dist: l('लगभग 17 किमी', 'About 17 km'), text: l('बारह ज्योतिर्लिंगों में दसवाँ, द्वारका से बेट द्वारका के मार्ग पर।', 'The tenth of the twelve Jyotirlingas, on the road from Dwarka to Bet Dwarka.'), photoOf: 'nageshwar' },
      { name: l('बेट द्वारका', 'Bet Dwarka'), dist: l('लगभग 30 से 36 किमी (ओखा होकर)', 'About 30 to 36 km (via Okha)'), text: l('समुद्र के बीच का द्वीप, जो कृष्ण जी का निवास माना जाता है। सुदर्शन सेतु से भी जा सकते हैं।', 'An island in the sea, believed to be Krishna’s residence. It can also be reached by the Sudarshan Setu.') },
    ],
    video: { id: 'TGUHeqDztns', title: 'Dwarkadhish Temple, Khushboo Gujarat Ki', channel: 'Gujarat Tourism' },
  },
  {
    id: 'jagannath-puri',
    name: l('जगन्नाथ पुरी', 'Jagannath Puri'),
    place: l('पुरी, ओडिशा, बंगाल की खाड़ी के तट पर', 'Puri, Odisha, on the Bay of Bengal'),
    state: 'OD',
    groups: ['cd'],
    tags: [l('चार धाम: पूर्व', 'Char Dham: East'), l('सप्त पुरी नहीं; पुरुषोत्तम क्षेत्र', 'Purushottam Kshetra')],
    importance: l(
      'पूर्व का धाम। यहाँ भगवान जगन्नाथ (विष्णु जी का रूप), बलभद्र और सुभद्रा की काष्ठ मूर्तियाँ पूजी जाती हैं, सुदर्शन के साथ। विश्व प्रसिद्ध रथ यात्रा का स्थान।',
      'The eastern dham. Wooden images of Lord Jagannath (a form of Vishnu), Balabhadra and Subhadra are worshipped, with Sudarshan. The home of the world-famous Rath Yatra.',
    ),
    katha: l(
      'अषाढ़ मास में रथ यात्रा में तीनों देवता अपने रथों में बैठकर लगभग 3 किमी दूर गुंडिचा मंदिर जाते हैं। हर 8, 12 या 19 वर्ष में नबकलेवर होता है, जब लकड़ी की मूर्तियाँ बदली जाती हैं। मंदिर की रसोई का महाप्रसाद दिन में छह बार अर्पित होता है और पूर्णतः शाकाहारी है।',
      'In the month of Ashadha, in the Rath Yatra the three deities ride their chariots to the Gundicha temple about 3 km away. Every 8, 12 or 19 years the Nabakalebara is held, when the wooden images are replaced. Mahaprasad from the temple kitchen is offered six times a day and is wholly vegetarian.',
    ),
    history: l(
      'मंदिर अभिलेखों में राजा इंद्रद्युम्न को प्रथम मंदिर का श्रेय दिया जाता है। वर्तमान परिसर 11वीं-12वीं सदी में अनंतवर्मन चोडगंग देव के समय से बना। शिखर पर आठ आरों वाला नीलचक्र (अष्टधातु, लगभग 3.5 मीटर) है और उस पर ध्वज रोज़ बदला जाता है।',
      'Temple records credit King Indradyumna with the first temple. The present complex was built from the 11th to 12th century, beginning under Anantavarman Chodaganga Deva. The spire is crowned by the eight-spoked Nila Chakra (ashtadhatu, about 3.5 m), and a flag on it is changed every day.',
    ),
    todo: [
      l('जगन्नाथ, बलभद्र और सुभद्रा के दर्शन', 'Darshan of Jagannath, Balabhadra and Subhadra'),
      l('आनंद बाज़ार में महाप्रसाद', 'Mahaprasad at Ananda Bazaar'),
      l('नीलचक्र और ध्वज का दर्शन', 'See the Nila Chakra and the flag'),
      l('गुंडिचा मंदिर और पुरी तट', 'Gundicha temple and the Puri beach'),
    ],
    best: l('अक्टूबर से मार्च। रथ यात्रा (जून-जुलाई) में अपार भीड़।', 'October to March. The Rath Yatra (June-July) is hugely crowded.'),
    rules: l('मंदिर में प्रवेश केवल हिंदुओं के लिए बताया जाता है; पूरा नियम मंदिर प्रशासन तय करता है। अंदर लॉकर और सामान के नियम पहले पूछ लें।', 'Entry is reported to be for Hindus only; the exact rules are set by the temple administration. Ask about lockers and belongings beforehand.'),
    how: {
      road: l('भुवनेश्वर से लगभग 55 से 60 किमी। कोणार्क से लगभग 35 किमी।', 'About 55 to 60 km from Bhubaneswar. About 35 km from Konark.'),
      rail: l('पुरी स्टेशन, मंदिर के पास (कुछ किमी)।', 'Puri station, a few km from the temple.'),
      air: l('भुवनेश्वर (बीजू पटनायक), लगभग 55 से 60 किमी।', 'Bhubaneswar (Biju Patnaik), about 55 to 60 km.'),
    },
    site: 'https://www.shreejagannatha.in',
    maps: 'Shree Jagannath Temple, Puri',
    nearby: [
      { name: l('गुंडिचा मंदिर', 'Gundicha Temple'), dist: l('लगभग 3 किमी', 'About 3 km'), text: l('रथ यात्रा में जगन्नाथ जी यहाँ आते हैं। इसे उनकी मौसी का घर माना जाता है।', 'In the Rath Yatra Jagannath ji comes here. It is regarded as his aunt’s house.') },
      { name: l('कोणार्क सूर्य मंदिर', 'Konark Sun Temple'), dist: l('लगभग 35 किमी', 'About 35 km'), text: l('13वीं सदी का सूर्य मंदिर, रथ के आकार का, यूनेस्को विश्व धरोहर।', 'The 13th-century Sun Temple shaped like a chariot, a UNESCO World Heritage Site.') },
    ],
    video: { id: 'csZ8Rjai2g4', title: 'Rath Yatra at Puri', channel: 'Prasar Bharati Archives' },
  },
  {
    id: 'yamunotri',
    name: l('यमुनोत्री', 'Yamunotri'),
    place: l('उत्तरकाशी ज़िला, उत्तराखंड', 'Uttarkashi district, Uttarakhand'),
    state: 'UK',
    groups: ['ccd'],
    tags: [l('छोटा चार धाम: पहला पड़ाव', 'Chota Char Dham: first stop')],
    importance: l(
      'यमुना नदी का उद्गम और छोटा चार धाम की यात्रा का पहला पड़ाव। लगभग 3,291 मीटर की ऊँचाई पर, माँ यमुना की काले संगमरमर की मूर्ति पूजी जाती है।',
      'The source of the Yamuna and the first stop of the Chota Char Dham yatra. At about 3,291 m, a black marble image of Maa Yamuna is worshipped.',
    ),
    katha: l(
      'यमुना जी को सूर्य देव की पुत्री और यमराज की बहन माना जाता है। मान्यता है कि यमुना में स्नान से यम के भय से मुक्ति मिलती है। मंदिर के पास सूर्य कुंड नाम का गर्म जल का स्रोत है।',
      'Yamuna ji is regarded as the daughter of Surya Dev and sister of Yamraj. It is believed that bathing in the Yamuna frees one from the fear of Yama. Near the temple is a hot spring called Surya Kund.',
    ),
    history: l(
      'वर्तमान मंदिर 19वीं सदी में टिहरी गढ़वाल के महाराजा प्रताप शाह ने बनवाया। बर्फ़ और बाढ़ से मंदिर दो बार नष्ट हुआ और दोबारा बनाया गया। सूर्य कुंड का पानी इतना गर्म बताया जाता है कि उसमें चावल और आलू पक जाते हैं, जो प्रसाद में चढ़ते हैं।',
      'The present temple was built in the 19th century by Maharaja Pratap Shah of Tehri Garhwal. It was destroyed twice by snow and flood and rebuilt each time. The water of Surya Kund is said to be hot enough to cook rice and potatoes, which are offered as prasad.',
    ),
    todo: [
      l('यमुना मैया के दर्शन', 'Darshan of Yamuna Maiya'),
      l('सूर्य कुंड के पास चावल की पोटली से प्रसाद', 'Prasad of rice cooked in a cloth bag at Surya Kund'),
      l('जानकी चट्टी से पैदल यात्रा', 'The trek from Janki Chatti'),
    ],
    best: l('मई से जून और सितंबर से अक्टूबर।', 'May to June and September to October.'),
    rules: l('यात्रा पंजीकरण आधिकारिक पोर्टल से करें। मंदिर तक सड़क नहीं है, लगभग 6 किमी पैदल चढ़ाई है; पालकी और घोड़े मिलते हैं।', 'Register for the yatra on the official portal. There is no road to the temple; the walk is about 6 km uphill, with palanquins and ponies available.'),
    how: {
      road: l('जानकी चट्टी तक सड़क (बड़कोट होकर), फिर लगभग 6 किमी पैदल (2 से 3 घंटे)। देहरादून से जानकी चट्टी लगभग 175 से 180 किमी।', 'Road to Janki Chatti (via Barkot), then about 6 km on foot (2 to 3 hours). About 175 to 180 km from Dehradun to Janki Chatti.'),
      rail: l('देहरादून सबसे निकट; ऋषिकेश और हरिद्वार भी।', 'Dehradun is nearest; Rishikesh and Haridwar also.'),
      air: l('जॉली ग्रांट, देहरादून।', 'Jolly Grant, Dehradun.'),
    },
    site: 'https://uttarakhandtourism.gov.in',
    maps: 'Yamunotri Temple, Uttarkashi',
    note: l('मंदिर अक्षय तृतीया पर खुलता है और यम द्वितीया (भाई दूज) पर शीतकाल के लिए बंद होता है। सर्दियों में माँ यमुना की पूजा खरसाली गाँव में होती है।', 'The temple opens on Akshaya Tritiya and closes for winter on Yama Dwitiya (Bhai Dooj). In winter Maa Yamuna is worshipped at Kharsali village.'),
    nearby: [
      { name: l('जानकी चट्टी', 'Janki Chatti'), dist: l('6 किमी, पैदल यात्रा का आरंभ', '6 km, start of the trek'), text: l('सड़क का अंतिम पड़ाव। यहीं से पैदल या पालकी से मंदिर तक जाते हैं।', 'The last road stop. From here you go on foot or by palanquin to the temple.') },
      { name: l('खरसाली', 'Kharsali'), dist: l('शीतकालीन आसन', 'Winter seat'), text: l('यमुना जी का शीतकालीन निवास। सर्दियों में पूजा यहीं होती है।', 'The winter residence of Yamuna ji. Worship is held here in winter.') },
    ],
    video: { id: 'lPVJN58K9cA', title: 'Namaste Uttarakhand: Yamunotri Dham', channel: 'Doordarshan Uttarakhand' },
  },
  {
    id: 'gangotri',
    name: l('गंगोत्री', 'Gangotri'),
    place: l('उत्तरकाशी ज़िला, उत्तराखंड, भागीरथी के तट पर', 'Uttarkashi district, Uttarakhand, on the Bhagirathi'),
    state: 'UK',
    groups: ['ccd'],
    tags: [l('छोटा चार धाम: दूसरा पड़ाव', 'Chota Char Dham: second stop')],
    importance: l(
      'गंगा जी का धाम, जहाँ से भागीरथी निकलती है। देवप्रयाग में अलकनंदा से मिलने के बाद वह गंगा कहलाती है। ऊँचाई 3,000 मीटर से अधिक।',
      'The dham of Ganga ji, where the Bhagirathi flows out. After meeting the Alaknanda at Devprayag she is called the Ganga. The altitude is over 3,000 m.',
    ),
    katha: l(
      'कथा है कि राजा भगीरथ ने अपने पूर्वजों की मुक्ति के लिए तप किया। गंगा जी स्वर्ग से उतरीं, शिव जी ने उन्हें अपनी जटाओं में धारण कर प्रवाह को संभाला। मंदिर के पास की भगीरथ शिला वह स्थान मानी जाती है जहाँ भगीरथ ने तप किया।',
      'The story is that King Bhagirath did tapasya for the liberation of his ancestors. Ganga descended from heaven and Shiva held her in his locks to break her force. The Bhagirath Shila near the temple is held to be where Bhagirath did tapasya.',
    ),
    history: l(
      'मूल मंदिर गोरखा सेनापति अमर सिंह थापा ने बनवाया, और 19वीं सदी में इसका जीर्णोद्धार हुआ। दीपावली (अन्नकूट) पर कपाट बंद होते हैं और अक्षय तृतीया पर खुलते हैं। शीतकाल में माँ गंगा की मूर्ति हर्षिल के पास मुखबा गाँव में रखी जाती है, जहाँ सेमवाल परिवार पूजा करता है।',
      'The original temple was built by the Gorkha general Amar Singh Thapa and restored in the 19th century. The doors close at Diwali (Annakut) and open on Akshaya Tritiya. In winter Maa Ganga’s image is kept at Mukhba village near Harsil, where the Semwal family conducts worship.',
    ),
    todo: [
      l('भागीरथी में स्नान और गंगा जी के दर्शन', 'A bath in the Bhagirathi and darshan of Ganga ji'),
      l('भगीरथ शिला और गंगा आरती', 'Bhagirath Shila and the Ganga aarti'),
      l('गौमुख की यात्रा (परमिट और अनुमति ज़रूरी)', 'The Gaumukh trek (permit required)'),
    ],
    best: l('मई से जून और सितंबर से अक्टूबर।', 'May to June and September to October.'),
    rules: l('यात्रा पंजीकरण आधिकारिक पोर्टल से करें। गौमुख गंगोत्री राष्ट्रीय उद्यान में है, इसलिए प्रवेश परमिट चाहिए और रोज़ सीमित लोगों को अनुमति है।', 'Register for the yatra on the official portal. Gaumukh is inside Gangotri National Park, so an entry permit is needed and only a limited number of people are allowed daily.'),
    how: {
      road: l('उत्तरकाशी से लगभग 99 किमी। ऋषिकेश से लगभग 250 किमी (7 से 8 घंटे)। मंदिर तक सड़क है।', 'About 99 km from Uttarkashi. About 250 km from Rishikesh (7 to 8 hours). A road reaches the temple.'),
      rail: l('ऋषिकेश या हरिद्वार जंक्शन; देहरादून भी।', 'Rishikesh or Haridwar Junction; Dehradun too.'),
      air: l('जॉली ग्रांट, देहरादून, लगभग 237 किमी।', 'Jolly Grant, Dehradun, about 237 km.'),
    },
    site: 'https://uttarakhandtourism.gov.in',
    maps: 'Gangotri Temple, Uttarkashi',
    nearby: [
      { name: l('गौमुख हिमनद', 'Gaumukh Glacier'), dist: l('लगभग 18 किमी पैदल (एक तरफ़)', 'About 18 km on foot (one way)'), text: l('भागीरथी का हिमनद-उद्गम। परमिट अनिवार्य, मौसम देखकर जाएँ।', 'The glacial source of the Bhagirathi. A permit is a must; go after checking the weather.') },
      { name: l('मुखबा गाँव', 'Mukhba Village'), dist: l('शीतकालीन आसन, हर्षिल के पास', 'Winter seat, near Harsil'), text: l('सर्दियों में माँ गंगा की मूर्ति और पूजा यहीं होती है।', 'In winter Maa Ganga’s image and worship are here.') },
    ],
    video: { id: 'TEEfkZpnyd4', title: 'Namaste Uttarakhand: Gangotri Dham', channel: 'Doordarshan Uttarakhand' },
  },
]

/** Extra lists the first 17 temples also belong to (a temple can sit in several lists). */
const ALSO_IN: Record<string, { groups: GroupId[]; tags?: L[] }> = {
  'kashi-vishwanath': { groups: ['puri'] },
  mahakaleshwar: { groups: ['puri', 'kumbh'], tags: [l('कुंभ का स्थान (उज्जैन)', 'A Kumbh place (Ujjain)')] },
  dwarkadhish: { groups: ['puri'] },
  trimbakeshwar: { groups: ['kumbh'], tags: [l('कुंभ का स्थान (नाशिक)', 'A Kumbh place (Nashik)')] },
  kedarnath: { groups: ['pk'] },
  badrinath: { groups: ['pb'] },
}

export const TEMPLES: Temple[] = [
  ...FIRST_TEMPLES.map((t) => {
    const x = ALSO_IN[t.id]
    return x ? { ...t, groups: [...t.groups, ...x.groups], tags: [...t.tags, ...(x.tags ?? [])] } : t
  }),
  ...PURI_TEMPLES,
  ...ASHTA_TEMPLES,
  ...KEDAR_TEMPLES,
  ...BADRI_TEMPLES,
  ...BHOOTA_TEMPLES,
  ...BRAJ_TEMPLES,
  ...NORTH_TEMPLES,
  ...EAST_TEMPLES,
  ...SOUTH_TEMPLES,
]
export const TEMPLE_BY_ID: Record<string, Temple> = Object.fromEntries(TEMPLES.map((t) => [t.id, t]))

export interface TempleGroup {
  id: GroupId
  name: L
  line: L
  /** temple whose photo is the round picture in the category list */
  cover: string
  /** which heading it sits under on the categories page */
  section: 'yatra' | 'place'
}

export const GROUPS: TempleGroup[] = [
  { id: 'jy', section: 'yatra', name: l('12 ज्योतिर्लिंग', '12 Jyotirlingas'), line: l('शिव जी के बारह दिव्य लिंग', 'The twelve divine lingas of Shiva'), cover: 'mahakaleshwar' },
  { id: 'cd', section: 'yatra', name: l('चार धाम', 'Char Dham'), line: l('बद्रीनाथ, द्वारका, पुरी, रामेश्वरम', 'Badrinath, Dwarka, Puri, Rameshwaram'), cover: 'jagannath-puri' },
  { id: 'ccd', section: 'yatra', name: l('छोटा चार धाम', 'Chota Char Dham'), line: l('यमुनोत्री, गंगोत्री, केदारनाथ, बद्रीनाथ', 'Yamunotri, Gangotri, Kedarnath, Badrinath'), cover: 'kedarnath' },
  { id: 'puri', section: 'yatra', name: l('सप्त पुरी', 'Sapta Puri'), line: l('7 मोक्षदायिनी नगरी', 'The 7 moksha-giving cities'), cover: 'kashi-vishwanath' },
  { id: 'kumbh', section: 'yatra', name: l('कुंभ के 4 तीर्थ', 'The 4 Kumbh places'), line: l('प्रयागराज, हरिद्वार, उज्जैन, नाशिक', 'Prayagraj, Haridwar, Ujjain, Nashik'), cover: 'triveni-sangam' },
  { id: 'ashta', section: 'yatra', name: l('अष्टविनायक', 'Ashtavinayak'), line: l('महाराष्ट्र के 8 स्वयंभू गणेश मंदिर', 'Eight self-formed Ganesh temples of Maharashtra'), cover: 'mayureshwar' },
  { id: 'pk', section: 'yatra', name: l('पंच केदार', 'Panch Kedar'), line: l('उत्तराखंड के 5 शिव मंदिर', 'Five Shiva temples of Uttarakhand'), cover: 'madhyamaheshwar' },
  { id: 'pb', section: 'yatra', name: l('पंच बद्री', 'Panch Badri'), line: l('उत्तराखंड के 5 विष्णु मंदिर', 'Five Vishnu temples of Uttarakhand'), cover: 'badrinath' },
  { id: 'bhoota', section: 'yatra', name: l('पंच भूत स्थल', 'Pancha Bhoota Sthalam'), line: l('पाँच तत्वों के 5 शिव मंदिर', 'Five Shiva temples for the five elements'), cover: 'ekambareswarar' },
  { id: 'braj', section: 'place', name: l('ब्रज', 'Braj'), line: l('श्री कृष्ण की लीला भूमि', 'The land of Shri Krishna’s pastimes'), cover: 'banke-bihari' },
]

/** Group lists in pilgrimage order. Some temples belong to two lists. */
export const GROUP_ORDER: Record<GroupId, string[]> = {
  jy: FIRST_TEMPLES.filter((t) => t.jyNo).sort((a, b) => a.jyNo! - b.jyNo!).map((t) => t.id),
  cd: ['badrinath', 'dwarkadhish', 'jagannath-puri', 'rameshwaram'],
  ccd: ['yamunotri', 'gangotri', 'kedarnath', 'badrinath'],
  puri: ['ayodhya-ram-mandir', 'krishna-janmasthan', 'har-ki-pauri', 'kashi-vishwanath', 'kamakshi-amman', 'mahakaleshwar', 'dwarkadhish'],
  kumbh: ['triveni-sangam', 'har-ki-pauri', 'mahakaleshwar', 'trimbakeshwar'],
  ashta: ['mayureshwar', 'siddhivinayak-siddhatek', 'ballaleshwar', 'varadvinayak', 'chintamani-theur', 'girijatmaj', 'vighnahar', 'mahaganapati'],
  pk: ['kedarnath', 'tungnath', 'rudranath', 'madhyamaheshwar', 'kalpeshwar'],
  pb: ['badrinath', 'adi-badri', 'yogdhyan-badri', 'bhavishya-badri', 'vriddha-badri'],
  bhoota: ['ekambareswarar', 'jambukeswarar', 'annamalaiyar', 'srikalahasti', 'chidambaram'],
  braj: ['krishna-janmasthan', 'banke-bihari', 'govardhan-giriraj', 'gokul-nand-bhawan', 'barsana-radha-rani', 'nandgaon'],
}

/** Categories planned for later, shown on the list with a "soon" tag so people know more is coming. */
export const SOON: { id: string; name: L; line: L; cover: string }[] = [
  { id: 'sp', name: l('51 शक्तिपीठ', '51 Shakti Peeths'), line: l('देवी के 51 पीठ', 'The 51 seats of the Devi'), cover: 'kamakshi-amman' },
  { id: 'dd', name: l('108 दिव्य देशम', '108 Divya Desam'), line: l('विष्णु जी के 108 धाम', 'The 108 abodes of Vishnu'), cover: 'badrinath' },
]

/** Photo credits. Wikimedia Commons files are CC BY / CC BY-SA unless noted; the Mahakaleshwar photo is from Unsplash. */
export const PHOTO_CREDITS: Record<string, string> = {
  'amarnath': "Gktambe at English Wikipedia, Public domain, Wikimedia Commons (Cave Temple of Lord Amarnath.jpg)",
  'chamundeshwari': "Rithwik, Public domain, Wikimedia Commons (Chamundeshwari Temple Mysore.jpg)",
  'umananda': "Extreminatethejuice, CC BY-SA 4.0, Wikimedia Commons (Chandrasekhar Temple, Umananda.jpg)",
  'rajrappa': "Flashthomsom, CC0, Wikimedia Commons (Chhinnamastika Temple Rajrappa.jpg)",
  'chintpurni': "Hemant banswal, CC BY-SA 4.0, Wikimedia Commons (Chintpurni.jpg)",
  'dakshineswar': "Knath, CC BY-SA 3.0, Wikimedia Commons (Dakhineshwar Temple beside the Hoogly, West Bengal.JPG)",
  'danteshwari': "Ratnesh1948, CC BY-SA 4.0, Wikimedia Commons (Danteswari Temple 0034.jpg)",
  'govindajee': "Bimal thongam, CC BY-SA 4.0, Wikimedia Commons (FB7A9290.jpg)",
  'kalighat': "Ku423winz1, CC BY-SA 4.0, Wikimedia Commons (Kalighat Kali Temple after renovation.jpg)",
  'kamakhya': "Devkmaravi, CC BY-SA 4.0, Wikimedia Commons (Kamakhya Temple - DEV 8829.jpg)",
  'khatu-shyam': "Indrapal Jangid, CC BY-SA 3.0, Wikimedia Commons (Khatu Shyam Ji - panoramio.jpg)",
  'laxminarayan-delhi': "A.Savin, FAL, Wikimedia Commons (Laxminarayan Temple in New Delhi 03-2016.jpg)",
  'lingaraj': "Satyakam Parthasarathy, CC BY-SA 4.0, Wikimedia Commons (Lingaraj Temple , Bhubaneswar.jpg)",
  'mundeshwari': "Lakshya, CC BY-SA 3.0, Wikimedia Commons (Maa Mundeshwari Devi.jpg)",
  'tarapith': "Pinakpani, CC BY-SA 4.0, Wikimedia Commons (Maa Tara Temple.jpg)",
  'durgiana': "shankar s. from Dubai, CC BY 2.0, Wikimedia Commons (Many of the locals we had spoken to were delighted that the Govt has sanctioned funds for renovation of this temple (38049489065).jpg)",
  'nartiang': "Oliver walsher, CC BY-SA 4.0, Wikimedia Commons (Nartiang Durga temple.jpg)",
  'akshardham-delhi': "Swaminarayan Sanstha, CC BY-SA 3.0, Wikimedia Commons (New Delhi Temple.jpg)",
  'parshuram-kund': "Trideep Dutta Photography, CC BY-SA 4.0, Wikimedia Commons (Parshuram Kund .jpg)",
  'salasar-balaji': "Dausaanoop, CC BY-SA 4.0, Wikimedia Commons (Salasar balaji 02.jpg)",
  'vaishno-devi': "Yatin. 123, CC BY-SA 4.0, Wikimedia Commons (Snowfall in Vaishno Devi.jpg)",
  'tripura-sundari': "Soman, CC BY-SA 3.0, Wikimedia Commons (Tripura Sundari Temple, Udaipur.jpg)",
  'vishnupad': "Deeppsychological, CC BY-SA 4.0, Wikimedia Commons (Vishnupad Temple,Updated.jpg)",
  'bamleshwari': "Dvellakat, CC BY-SA 4.0, Wikimedia Commons (Way to bimbleswari.JPG)",
  'ambaji': "Ms Sarah Welch, CC0, Wikimedia Commons (0081323 Arasuri Ambaji mandir, Shakti Peeth, north Gujarat 011.jpg)",
  'meenakshi': "எஸ்ஸார், CC BY 3.0, Wikimedia Commons (An aerial view of Madurai city from atop of Meenakshi Amman temple.jpg)",
  'siddhesvara-dham': "Prof Ranga Sai, CC BY-SA 4.0, Wikimedia Commons (Chardham Temple Namchi Sikkim.jpg)",
  'guruvayur': "Susmitanair, CC BY-SA 4.0, Wikimedia Commons (Guruvayoor Temple 1.jpg)",
  'jwalamukhi': "Mani kopalle, CC BY-SA 3.0, Wikimedia Commons (Jwala mukhi Temple Kangra.jpg)",
  'kanaka-durga': "Srikar Kashyap, CC BY-SA 4.0, Wikimedia Commons (Kanakadurga Temple gopuram.jpg)",
  'mansa-devi': "Aerorahulraj, CC BY-SA 4.0, Wikimedia Commons (MATA MANSA DEVI-PANCHKULA, HARYANA outer view of temple on top.jpg)",
  'sabarimala': "rajaraman sundaram, CC BY 3.0, Wikimedia Commons (MOUNTAINS SABARIMALA KERALA - panoramio.jpg)",
  'gokarna': "Nvvchar, CC BY-SA 3.0, Wikimedia Commons (Main entry to the Mahabaleshwar Temple at Gokaran.jpg)",
  'manakula-vinayagar': "Prabhupuducherry, CC BY-SA 3.0, Wikimedia Commons (Manakula vinayagar temple north entrance.JPG)",
  'naina-devi': "Devyansh.sharma09, CC BY-SA 4.0, Wikimedia Commons (Naina Devi town, Bilaspur district 2015-09-25 Devyansh4.jpg)",
  'shrinathji': "Unknown artist, Public domain, Wikimedia Commons (Nathdwara srinathji.jpg)",
  'pushkar-brahma': "Gerd Eichmann, CC BY-SA 4.0, Wikimedia Commons (Pushkar-06-Brahmatempel-2018-gje.jpg)",
  'ram-raja-orchha': "Yann, CC BY-SA 4.0, Wikimedia Commons (Ram Raja Temple.jpg)",
  'srirangam': "RUPESH MAURYA, CC BY-SA 4.0, Wikimedia Commons (Ranganathaswamy temple tiruchirappalli.jpg)",
  'padmanabhaswamy': "Rahulrnath001, CC BY-SA 4.0, Wikimedia Commons (Sree Padmanabhaswamy temple 01.jpg)",
  'yadadri': "Ravindraoudeptling, CC BY 4.0, Wikimedia Commons (Sri Lakshminarasimha Swamy Temple Yadagirigutta Yadadri Telangana 02.jpg)",
  'bhadrachalam': "WithShivaram, CC BY-SA 4.0, Wikimedia Commons (Sri sita rama temple bhadrachalam temple view.jpg)",
  'tirumala': "Nikhilb239, CC BY-SA 4.0, Wikimedia Commons (Tirumala 090615.jpg)",
  'udupi-krishna': "Ashok Prabhakaran, CC BY-SA 2.0, Wikimedia Commons (Udupi Sri Krishna Matha Temple.jpg)",
  'jyotisar': "Wikimedia Commons (Jyotisar Banyan.gif)",
  'mangueshi': "Digjot Singh, Unsplash",
  'barsana-radha-rani': "Aliva Sahoo, CC BY-SA 3.0, Wikimedia Commons (Shri Radha Rani Temple (27155).jpg)",
  'chidambaram': "Matthew T Rader, CC BY-SA 4.0, Wikimedia Commons (Nataraja Temple gopuram artwork in Chidambaram, Tamil Nadu.jpg)",
  'srikalahasti': "iMahesh, CC BY-SA 4.0, Wikimedia Commons (Srikalahasti temple and Ghat.jpg)",
  'mahaganapati': "Booradleyp1, CC BY-SA 4.0, Wikimedia Commons (Ranjangaon Mahaganapati Temple Viman.jpg)",
  'triveni-sangam': "This Photo was taken by Timothy A. Gonsalves., CC BY-SA 4.0, Wikimedia Commons (Boat Pilgrims Triveni Sangam Allahabad Jan24 A7C 08513.jpg)",
  'kamakshi-amman': "Pinakpani, CC BY 4.0, Wikimedia Commons (Kamakshi Amman Temple complex and main building at Kanchipuram 22.jpg)",
  'govardhan-giriraj': "Unattributed, Public domain, Wikimedia Commons (Krishna as Giridhari, lifter of the Govardhana Hill.jpg)",
  'banke-bihari': "Kridha20, CC BY-SA 4.0, Wikimedia Commons (Banke Bihari Vrindavan.jpg)",
  'mayureshwar': "Redtigerxyz, CC BY-SA 3.0, Wikimedia Commons (Morgaon.jpg)",
  'jambukeswarar': "SpeakingArch, CC BY-SA 4.0, Wikimedia Commons (Jambukeswarar Temple, Thiruvanaikaval (also Thiruvanaikal, Jambukeswaram) is a famous Shiva temple in Tiruchirapalli (Trichy) district, in the state of Tamil Nadu, India.jpg)",
  'adi-badri': "Vjupadhyay24, CC BY-SA 4.0, Wikimedia Commons (Adibadri panchbadri.jpg)",
  'nandgaon': "Kshitijpatle, CC BY-SA 4.0, Wikimedia Commons (Nandgaon Holi, India.jpg)",
  'girijatmaj': "Srph2116, CC0, Wikimedia Commons (@lenyadri caves ganapati mandir. 03.jpg)",
  'gokul-nand-bhawan': "Goutam1962, CC BY-SA 4.0, Wikimedia Commons (Sri Krishna Balaram Mandir Vrindavan 12.jpg)",
  'bhavishya-badri': "Placeholder: Badrinath temple photo (Priyanath, CC BY-SA 3.0, Wikimedia Commons)",
  'vriddha-badri': "Placeholder: Badrinath temple photo (Priyanath, CC BY-SA 3.0, Wikimedia Commons)",
  'yogdhyan-badri': "Placeholder: Badrinath temple photo (Priyanath, CC BY-SA 3.0, Wikimedia Commons)",
  'annamalaiyar': "Adarsh Pidugu, CC BY-SA 4.0, Wikimedia Commons (Arunachalam_temple_from_a_nearby_hill.jpg)",
  'ballaleshwar': "Borayin Maitreya Larios, CC BY 2.0, Wikimedia Commons (Pali-_Shri_Ballaleshwar.jpg)",
  'vighnahar': "Borayin Maitreya Larios, CC BY 2.0, Wikimedia Commons (Ozhar_-_Shri_Vighnahar.jpg)",
  'siddhivinayak-siddhatek': "Borayin Maitreya Larios, CC BY 2.0, Wikimedia Commons (Siddhi_Vinayak_at_Siddhatek.jpg)",
  'varadvinayak': "Borayin Maitreya Larios, CC BY 2.0, Wikimedia Commons (Ashtavinayak_OM.jpg)",
  'kalpeshwar': "rolling on, CC BY 2.0, Wikimedia Commons (Kalpehswar.jpg)",
  'ayodhya-ram-mandir': "Prime Minister's Office, GODL-India, Wikimedia Commons (Shri_Ram_Janambhoomi_Mandir,_Ayodhya_Dham.jpg)",
  'har-ki-pauri': "Sanatansociety  Picture provided by Peter and Chris Marchand, provides, CC BY-SA 2.5, Wikimedia Commons (Evening_view_of_Har-ki-Pauri,_Haridwar.jpg)",
  'krishna-janmasthan': "Diego Delso, CC BY-SA 4.0, Wikimedia Commons (Mathura_Temple-Mathura-India0002.JPG)",
  'ekambareswarar': "Ssriram mt, CC BY-SA 4.0, Wikimedia Commons (Ekambareswarar5.jpg)",
  'madhyamaheshwar': "Bodhisattwa, CC BY-SA 4.0, Wikimedia Commons (Madhyamaheshwar_Temple,_Uttarakhand.JPG)",
  'rudranath': "rolling on, CC BY-SA 2.0, Wikimedia Commons (Rudranath_temple.jpg)",
  'tungnath': "Varun Shiv Kapur, CC BY 2.0, Wikimedia Commons (Tungnath_temple.jpg)",
  'chintamani-theur': "Borayin Maitreya Larios, CC BY 2.0, Wikimedia Commons (Shri_Cintamani_of_Theur.jpg)",
  somnath: 'B. SurajPatro1997, CC BY-SA 4.0, Wikimedia Commons',
  mallikarjuna: 'Chintohere, public domain, Wikimedia Commons',
  mahakaleshwar: 'Vikram Chouhan, Unsplash',
  omkareshwar: 'Deveshc92, CC BY 4.0, Wikimedia Commons',
  kedarnath: 'Shivam Kumar 766, CC BY-SA 4.0, Wikimedia Commons',
  bhimashankar: 'Sumit Sarswat, CC BY-SA 4.0, Wikimedia Commons',
  'kashi-vishwanath': 'Ashvin Kaitabhya (clicked by Abhishek Pandey), CC BY-SA 4.0, Wikimedia Commons',
  trimbakeshwar: 'Abhideo21, CC BY-SA 4.0, Wikimedia Commons',
  vaidyanath: 'Pinakpani, CC BY 4.0, Wikimedia Commons',
  nageshwar: 'Bkjit, CC BY-SA 4.0, Wikimedia Commons',
  rameshwaram: 'Ssriram mt, CC BY-SA 4.0, Wikimedia Commons',
  grishneshwar: 'Rashmi.parab, CC BY-SA 3.0, Wikimedia Commons',
  badrinath: 'Anubha khare, CC BY-SA 4.0, Wikimedia Commons',
  dwarkadhish: 'Kridha20, CC BY-SA 4.0, Wikimedia Commons',
  'jagannath-puri': 'Prachites, CC BY-SA 3.0, Wikimedia Commons',
  yamunotri: 'Atarax42, CC BY-SA 3.0, Wikimedia Commons',
  gangotri: 'Arupamdas, CC BY-SA 4.0, Wikimedia Commons',
}
