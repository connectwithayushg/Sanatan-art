/**
 * Panch Kedar: the five Shiva temples of Garhwal where, in the legend, the parts of Shiva in bull form appeared. Kedarnath
 * (the hump) is already in the first set of pages. Facts cross-checked between Wikipedia and trekking guides; trek lengths and
 * opening dates differ by source and year, so they are "about" and the committee announces the dates.
 */
import { l, type Temple } from './templeTypes'

const KATHA = (part: { hi: string; en: string }) =>
  l(
    `लोककथा है कि महाभारत के बाद पांडव शिव जी से क्षमा माँगने निकले। शिव जी बैल का रूप लेकर गढ़वाल में छिप गए। भीम ने उन्हें पहचान लिया, पर शिव जी भूमि में समा गए और पाँच स्थानों पर अलग-अलग अंगों के रूप में प्रकट हुए। यहाँ ${part.hi} पूजे जाते हैं।`,
    `A folk tale says that after the Mahabharata the Pandavas set out to seek Shiva’s forgiveness. Shiva hid in the Garhwal hills as a bull. Bhima recognised him, but Shiva sank into the earth and appeared in five places as different parts. Here ${part.en} is worshipped.`,
  )
const NEXT = (id: string, hi: string, en: string) => ({
  name: l(hi, en),
  dist: l('पंच केदार क्रम में अगला', 'Next in the Panch Kedar order'),
  text: l('पंच केदार का अगला मंदिर। पूरी सूची के लिए पंच केदार श्रेणी देखें।', 'The next of the Panch Kedar temples. See the Panch Kedar list for all five.'),
  photoOf: id,
})
const NOTE = l(
  'पंच केदार का क्रम सामान्यतः केदारनाथ, तुंगनाथ, रुद्रनाथ, मध्यमहेश्वर, कल्पेश्वर बताया जाता है, पर कुछ सूचियों में क्रम अलग मिलता है। परंपरा के अनुसार पंच केदार के बाद बद्रीनाथ में विष्णु जी के दर्शन किए जाते हैं।',
  'The Panch Kedar order is usually given as Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, Kalpeshwar, but some lists differ. By tradition, pilgrims visit Vishnu at Badrinath after the Panch Kedar.',
)
const RULES = l(
  'ऊँचाई पर मौसम तेज़ी से बदलता है; गर्म कपड़े, बरसाती और अच्छे जूते साथ रखें। पंजीकरण और परमिट के नियम बदलते रहते हैं, इसलिए यात्रा से पहले स्थानीय प्रशासन या मंदिर समिति से पूछ लें।',
  'The weather changes fast at altitude; carry warm clothes, a rain cover and good shoes. Registration and permit rules change, so check with the local administration or the temple committee before you go.',
)
const AIR = l('जॉली ग्रांट, देहरादून।', 'Jolly Grant, Dehradun.')
const RAIL = l('ऋषिकेश या हरिद्वार।', 'Rishikesh or Haridwar.')

export const KEDAR_TEMPLES: Temple[] = [
  {
    id: 'tungnath',
    name: l('तुंगनाथ', 'Tungnath'),
    place: l('चोपता के पास, रुद्रप्रयाग ज़िला, उत्तराखंड', 'Near Chopta, Rudraprayag district, Uttarakhand'),
    state: 'UK',
    groups: ['pk'],
    tags: [l('पंच केदार', 'Panch Kedar')],
    importance: l(
      'लगभग 3,680 मीटर की ऊँचाई पर, दुनिया के सबसे ऊँचे शिव मंदिरों में से एक और पंच केदार में सबसे ऊँचा। यहाँ शिव जी की भुजाओं (बाहु) की पूजा होती है।',
      'At about 3,680 m, one of the highest Shiva temples in the world and the highest of the Panch Kedar. Shiva’s arms (bahu) are worshipped here.',
    ),
    katha: KATHA(l('शिव जी की भुजाएँ', 'Shiva’s arms')),
    history: l(
      'माना जाता है कि मंदिर लगभग एक हज़ार साल पुराना है और पांडवों ने इसकी स्थापना की। लोकमान्यता है कि राम जी ने पास की चंद्रशिला चोटी पर तप किया और रावण ने भी यहाँ शिव जी की तपस्या की। यहाँ के पुजारी मक्कूमठ के स्थानीय मैठाणी ब्राह्मण हैं, जबकि अन्य केदार मंदिरों में दक्षिण भारत से पुजारी आते हैं।',
      'The temple is believed to be about a thousand years old, founded by the Pandavas. Tradition says Rama meditated on the nearby Chandrashila peak and that Ravana also worshipped Shiva here. The priests are local Maithani Brahmins of Makkumath, unlike the other Kedar temples where priests come from south India.',
    ),
    todo: [
      l('तुंगनाथ महादेव के दर्शन', 'Darshan of Tungnath Mahadev'),
      l('चोपता से चढ़ाई, फिर लगभग 1.5 से 2 किमी ऊपर चंद्रशिला', 'The climb from Chopta, and Chandrashila about 1.5 to 2 km above'),
      l('चंद्रशिला से नंदा देवी, चौखंबा और केदार शिखर के दृश्य', 'Views of Nanda Devi, Chaukhamba and the Kedar peaks from Chandrashila'),
    ],
    best: l('अप्रैल से सितंबर। भारी बर्फ़ के कारण मंदिर लगभग छह महीने बंद रहता है।', 'April to September. The temple is closed for about six months because of heavy snow.'),
    rules: RULES,
    how: {
      road: l('चोपता तक सड़क (ऋषिकेश से देवप्रयाग, श्रीनगर और रुद्रप्रयाग होकर), फिर चोपता से लगभग 4 से 5 किमी की चढ़ाई (4 से 5 घंटे)।', 'Road to Chopta (from Rishikesh via Devprayag, Srinagar and Rudraprayag), then about 4 to 5 km on foot from Chopta (4 to 5 hours).'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Tungnath Temple, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('चंद्रशिला', 'Chandrashila'), dist: l('मंदिर से लगभग 1.5 से 2 किमी ऊपर', 'About 1.5 to 2 km above the temple'), text: l('चंद्रशिला शिखर से हिमालय की चोटियों का नज़ारा मिलता है। मान्यता है कि राम जी ने यहाँ तप किया।', 'The Chandrashila summit gives a view of the Himalayan peaks. It is believed Rama meditated here.') },
      { name: l('मक्कूमठ (सर्दियों का आसन)', 'Makkumath (winter seat)'), dist: l('लगभग 29 किमी', 'About 29 km'), text: l('सर्दियों में मंदिर बंद होने पर तुंगनाथ जी की प्रतीक मूर्ति और पुजारी मक्कूमठ के मार्कंडेश्वर मंदिर में आ जाते हैं।', 'When the temple closes for winter, the symbolic image of Tungnath and the priests move to the Markandeshwar temple at Makkumath.') },
      NEXT('rudranath', 'रुद्रनाथ', 'Rudranath'),
    ],
    video: { id: 'lITNOLKby_Y', title: 'Panch Kedar, Kedarnath (Temples of India)', channel: 'Prasar Bharati Archives' },
  },
  {
    id: 'rudranath',
    name: l('रुद्रनाथ', 'Rudranath'),
    place: l('गोपेश्वर के पास, चमोली ज़िला, उत्तराखंड', 'Near Gopeshwar, Chamoli district, Uttarakhand'),
    state: 'UK',
    groups: ['pk'],
    tags: [l('पंच केदार', 'Panch Kedar')],
    importance: l(
      'लगभग 3,600 मीटर पर, बुरांश के जंगल और घास के मैदानों के बीच प्राकृतिक चट्टान का मंदिर, जहाँ शिव जी के मुख की नीलकंठ महादेव रूप में पूजा होती है। इसे पंच केदार में सबसे कठिन चढ़ाई वाला माना जाता है।',
      'At about 3,600 m, a natural rock temple among rhododendron forest and meadows, where Shiva’s face is worshipped as Neelkanth Mahadev. It is often considered the hardest to reach of the Panch Kedar.',
    ),
    katha: KATHA(l('शिव जी का मुख', 'Shiva’s face')),
    history: l(
      'माना जाता है कि मंदिर की स्थापना पांडवों ने की। पास बहने वाली वैतरणी (रुद्रगंगा) को मोक्ष की नदी माना जाता है, इसलिए लोग यहाँ पितरों के लिए पिंडदान भी करते हैं। सर्दियों में रुद्रनाथ की प्रतीक मूर्ति गोपेश्वर के गोपीनाथ मंदिर में लाई जाती है।',
      'The temple is believed to have been founded by the Pandavas. The nearby Vaitarani (Rudraganga) is regarded as a river of salvation, so people also offer pind for their ancestors here. In winter a symbolic image of Rudranath is brought to the Gopinath temple in Gopeshwar.',
    ),
    todo: [
      l('रुद्रनाथ (नीलकंठ महादेव) के दर्शन', 'Darshan of Rudranath (Neelkanth Mahadev)'),
      l('सूर्य, चंद्र, तारा और मान कुंड', 'The Surya, Chandra, Tara and Mana kunds'),
      l('वैतरणी (रुद्रगंगा) के किनारे पितृ-तर्पण', 'Pitru tarpan on the banks of the Vaitarani (Rudraganga)'),
    ],
    best: l('मई के अंत से अक्टूबर के आरंभ तक; कपाट खुलने और बंद होने की तिथियाँ हर वर्ष बदलती हैं।', 'Late May to early October; the opening and closing dates change every year.'),
    rules: RULES,
    how: {
      road: l('सगर गाँव तक सड़क (गोपेश्वर के पास), फिर लगभग 20 किमी की कठिन पैदल चढ़ाई (रास्ते के अनुसार 17 से 24 किमी)।', 'Road to Sagar village (near Gopeshwar), then a hard trek of about 20 km (17 to 24 km depending on the route).'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Rudranath Temple, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('गोपेश्वर (सर्दियों का आसन)', 'Gopeshwar (winter seat)'), dist: l('यात्रा का आधार नगर', 'The base town for the trek'), text: l('सर्दियों में रुद्रनाथ जी की पूजा गोपेश्वर के गोपीनाथ मंदिर में होती है।', 'In winter Rudranath is worshipped at the Gopinath temple in Gopeshwar.') },
      NEXT('madhyamaheshwar', 'मध्यमहेश्वर', 'Madhyamaheshwar'),
    ],
    video: { id: 'lITNOLKby_Y', title: 'Panch Kedar, Kedarnath (Temples of India)', channel: 'Prasar Bharati Archives' },
  },
  {
    id: 'madhyamaheshwar',
    name: l('मध्यमहेश्वर', 'Madhyamaheshwar'),
    place: l('गौंडार, रुद्रप्रयाग ज़िला, उत्तराखंड', 'Gaundar, Rudraprayag district, Uttarakhand'),
    state: 'UK',
    groups: ['pk'],
    tags: [l('पंच केदार', 'Panch Kedar')],
    importance: l(
      'लगभग 3,497 मीटर पर, चौखंबा शिखरों के सामने हरे घास के मैदान में बसा मंदिर। यहाँ शिव जी की नाभि और मध्य भाग की पूजा होती है। गर्भगृह में काले पत्थर का नाभि के आकार का शिवलिंग है।',
      'At about 3,497 m, in a green meadow facing the Chaukhamba peaks. Shiva’s navel and middle part are worshipped here. The sanctum holds a navel-shaped linga of black stone.',
    ),
    katha: KATHA(l('शिव जी की नाभि और मध्य भाग', 'Shiva’s navel and middle part')),
    history: l(
      'माना जाता है कि मंदिर भीम ने बनवाया। यहाँ के पुजारी कर्नाटक के वीरशैव जंगम परंपरा से आते हैं। सर्दियों में प्रतीक मूर्ति ऊखीमठ ले जाई जाती है। मंदिर के पास पार्वती और अर्धनारीश्वर के छोटे मंदिर भी हैं।',
      'The temple is believed to have been built by Bhima. The priests come from the Veerashaiva Jangama tradition of Karnataka. In winter the symbolic image is taken to Ukhimath. Small shrines of Parvati and Ardhanarishwara stand beside it.',
    ),
    todo: [
      l('मध्यमहेश्वर के दर्शन', 'Darshan of Madhyamaheshwar'),
      l('लगभग 2 किमी ऊपर बूढ़ा मध्यमहेश्वर', 'Budha Madhyamaheshwar about 2 km above'),
      l('चौखंबा और केदार शिखरों के दृश्य', 'Views of the Chaukhamba and Kedar peaks'),
    ],
    best: l('मई से अक्टूबर; अक्टूबर के बाद बर्फ़ और ठंड बढ़ जाती है।', 'May to October; snow and cold increase after October.'),
    rules: RULES,
    how: {
      road: l('रांसी (या अकतोलीधार) गाँव तक सड़क (ऊखीमठ के पास), फिर लगभग 16 से 18 किमी की पैदल यात्रा, गौंडार गाँव होकर।', 'Road to Ransi (or Aktolidhar) village (near Ukhimath), then a trek of about 16 to 18 km via Gaundar village.'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Madhyamaheshwar Temple, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('ऊखीमठ (सर्दियों का आसन)', 'Ukhimath (winter seat)'), dist: l('यात्रा का आधार नगर', 'The base town for the trek'), text: l('सर्दियों में मध्यमहेश्वर जी की पूजा ऊखीमठ में होती है।', 'In winter Madhyamaheshwar is worshipped at Ukhimath.') },
      NEXT('kalpeshwar', 'कल्पेश्वर', 'Kalpeshwar'),
    ],
    video: { id: 'lITNOLKby_Y', title: 'Panch Kedar, Kedarnath (Temples of India)', channel: 'Prasar Bharati Archives' },
  },
  {
    id: 'kalpeshwar',
    name: l('कल्पेश्वर', 'Kalpeshwar'),
    place: l('उर्गम घाटी, चमोली ज़िला, उत्तराखंड', 'Urgam valley, Chamoli district, Uttarakhand'),
    state: 'UK',
    groups: ['pk'],
    tags: [l('पंच केदार', 'Panch Kedar')],
    importance: l(
      'लगभग 2,200 मीटर की ऊँचाई पर, उर्गम घाटी का छोटा पत्थर का मंदिर, जहाँ गुफा के रास्ते से पहुँचकर शिव जी की जटाओं की पूजा होती है। पंच केदार में यही एकमात्र है जो साल भर खुला रहता है।',
      'At about 2,200 m, a small stone temple in the Urgam valley, reached through a cave passage, where Shiva’s matted locks (jata) are worshipped. It is the only one of the Panch Kedar open all year.',
    ),
    katha: KATHA(l('शिव जी की जटाएँ', 'Shiva’s matted locks')),
    history: l(
      'पांडवों से जुड़ी मान्यता के अलावा यहाँ के पुजारी आदि शंकराचार्य के शिष्यों की दशनामी परंपरा से बताए जाते हैं। रास्ते में बूढ़ा केदार का छोटा मंदिर मिलता है और उर्गम गाँव में ध्यान बद्री का मंदिर है।',
      'Besides the Pandava tradition, the priests are said to come from the Dasnami line of Adi Shankara’s disciples. A small Budha Kedar temple lies on the way, and the Dhyan Badri temple is in Urgam village.',
    ),
    todo: [
      l('कल्पेश्वर महादेव के दर्शन', 'Darshan of Kalpeshwar Mahadev'),
      l('उर्गम गाँव में ध्यान बद्री के दर्शन', 'Visit Dhyan Badri in Urgam village'),
      l('कल्पगंगा और अलकनंदा के संगम का रास्ता', 'The route past the Kalpganga-Alaknanda confluence'),
    ],
    best: l('साल भर खुला; मार्च से जून और सितंबर से नवंबर सबसे सुहावने। बरसात में सड़क खराब हो सकती है।', 'Open all year; March to June and September to November are the most pleasant. The road can be poor in the monsoon.'),
    rules: RULES,
    how: {
      road: l('ऋषिकेश-बद्रीनाथ मार्ग से हेलंग, फिर उर्गम और देवग्राम तक सड़क (ऋषिकेश से लगभग 253 किमी)। देवग्राम से मंदिर तक थोड़ी पैदल दूरी है, जो स्रोतों में 300 मीटर से 2 किमी तक बताई गई है।', 'Take the Rishikesh-Badrinath road to Helang, then the road to Urgam and Devgram (about 253 km from Rishikesh). From Devgram it is a short walk, given in sources as 300 m to 2 km.'),
      rail: l('ऋषिकेश लगभग 255 किमी।', 'Rishikesh, about 255 km.'),
      air: l('जॉली ग्रांट, देहरादून, लगभग 272 किमी।', 'Jolly Grant, Dehradun, about 272 km.'),
    },
    maps: 'Kalpeshwar Temple, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('ध्यान बद्री, उर्गम', 'Dhyan Badri, Urgam'), dist: l('उर्गम गाँव में', 'In Urgam village'), text: l('सप्त बद्री में से एक विष्णु मंदिर, उर्गम गाँव में।', 'One of the Sapta Badri Vishnu temples, in Urgam village.') },
      { name: l('बद्रीनाथ (परंपरा का अगला पड़ाव)', 'Badrinath (the traditional next stop)'), dist: l('पंच केदार के बाद', 'After the Panch Kedar'), text: l('परंपरा है कि पंच केदार के बाद बद्रीनाथ में विष्णु जी के दर्शन किए जाते हैं।', 'By tradition, pilgrims visit Vishnu at Badrinath after the Panch Kedar.'), photoOf: 'badrinath' },
    ],
    video: { id: 'lITNOLKby_Y', title: 'Panch Kedar, Kedarnath (Temples of India)', channel: 'Prasar Bharati Archives' },
  },
]
