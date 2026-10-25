/** Text for the "सनातन क्या है" chapters, "ऐप के बारे में" and the FAQ. Hindi first, English beside it.
 *  Chapter facts were checked against Wikipedia's Sanatana Dharma, Rigveda, Puranas, Bhakti movement and Indus Valley pages,
 *  Hindupedia and a scholarly note on Shankara's dates. Where tradition and historians differ, both are said. */

export interface Bi {
  hi: string
  en: string
}

export interface Chapter {
  id: string
  title: Bi
  line: Bi
  minutes: number
  /** Paragraphs; a paragraph starting with "» " is shown as a highlighted verse. */
  body: { hi: string[]; en: string[] }
  /** A short line from a scripture, shown in its own box. */
  verse?: { sa: string; hi: string; en: string; ref: string }
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'arth',
    title: { hi: 'सनातन का अर्थ', en: 'What “Sanatan” means' },
    line: { hi: 'शाश्वत धर्म, जिसका कोई एक संस्थापक नहीं', en: 'The eternal way, with no single founder' },
    minutes: 2,
    body: {
      hi: [
        '“सनातन” संस्कृत का शब्द है। इसका अर्थ है शाश्वत, यानी जो सदा से है और सदा रहेगा। “धर्म” का अर्थ केवल पूजा-पद्धति नहीं है। इसका मतलब है वह नियम और कर्तव्य जो जीवन और संसार को धारण करते हैं।',
        'इस परंपरा को किसी एक व्यक्ति ने शुरू नहीं किया। यह ऋषियों के अनुभव, चिंतन और साधना की लंबी धारा है, जो पीढ़ी दर पीढ़ी चली आई। परंपरा मानती है कि वेद किसी मनुष्य की रचना नहीं, ऋषियों ने उन्हें साधना में “देखा” था।',
        'एक बात जानने लायक है। “सनातन धर्म” नाम आज हिंदू धर्म के लिए खूब चलता है, पर इतिहासकार बताते हैं कि इसे अपना नाम बताने का चलन बाद का है। हिंदुपीडिया में स्वामी हर्षानंद लिखते हैं कि प्राचीन काल में इसका कोई अलग नाम नहीं था, क्योंकि कोई दूसरा धर्म नहीं था जिससे इसे अलग बताना पड़ता।',
      ],
      en: [
        '“Sanatan” is a Sanskrit word meaning eternal: what has always been and will always be. “Dharma” is more than a way of worship. It means the duties and order that hold up life and the world.',
        'No single person started this tradition. It is a long stream of experience, thought and practice of the rishis, handed down through generations. Tradition holds that the Vedas are not a human composition; the rishis “saw” them in meditation.',
        'One thing is worth knowing. The name “Sanatan Dharma” is widely used for Hinduism today, but historians note that using it as a name for itself is a later habit. Swami Harshananda writes in Hindupedia that the tradition had no particular name in ancient times, because there was no other religion it had to be told apart from.',
      ],
    },
    verse: {
      sa: 'एकं सद् विप्रा बहुधा वदन्ति',
      hi: 'सत्य एक है, ज्ञानी उसे अनेक नामों से कहते हैं।',
      en: 'Truth is one; the wise call it by many names.',
      ref: 'ऋग्वेद 1.164.46',
    },
  },
  {
    id: 'vichar',
    title: { hi: 'मूल विचार', en: 'Core ideas' },
    line: { hi: 'धर्म, कर्म, पुनर्जन्म, मोक्ष, चार पुरुषार्थ', en: 'Dharma, karma, rebirth, moksha, the four goals of life' },
    minutes: 3,
    body: {
      hi: [
        '**आत्मा और ब्रह्म।** हर जीव में एक अविनाशी आत्मा है। उपनिषद सिखाते हैं कि वह उसी परम सत्य, ब्रह्म, से जुड़ी है जो सबमें व्याप्त है। इसीलिए हर प्राणी में ईश्वर को देखने की बात कही जाती है।',
        '**कर्म और पुनर्जन्म।** हम जो करते हैं, उसका फल होता है। परंपरा मानती है कि आत्मा एक देह छोड़कर दूसरी धारण करती है, जैसे मनुष्य पुराने वस्त्र छोड़कर नए पहनता है (गीता 2.22)।',
        '**चार पुरुषार्थ।** जीवन के चार लक्ष्य माने गए हैं: धर्म (कर्तव्य और सदाचार), अर्थ (जीवन के साधन), काम (सुख और सौंदर्य) और मोक्ष (मुक्ति)। धर्म बाकी तीनों की मर्यादा तय करता है।',
        '**अहिंसा और सत्य।** किसी को कष्ट न देना और सच बोलना, दोनों को बड़े गुण माना गया है। गीता कहती है कि कर्म करना तुम्हारा अधिकार है, फल पर नहीं (गीता 2.47)।',
      ],
      en: [
        '**Atman and Brahman.** Every being has an imperishable self, the atman. The Upanishads teach that it is one with the supreme truth, Brahman, which pervades everything. That is why seeing God in every being is taught.',
        '**Karma and rebirth.** What we do has results. Tradition holds that the self leaves one body and takes another, as a person changes old clothes for new (Gita 2.22).',
        '**The four goals.** Life has four aims: dharma (duty and right conduct), artha (the means of living), kama (pleasure and beauty) and moksha (liberation). Dharma sets the limits for the other three.',
        '**Ahimsa and truth.** Not harming others and speaking the truth are held among the highest virtues. The Gita says your right is to the action, not to its fruit (Gita 2.47).',
      ],
    },
    verse: {
      sa: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
      hi: 'तुम्हारा अधिकार केवल कर्म पर है, फल पर कभी नहीं।',
      en: 'You have a right to the action alone, never to its fruits.',
      ref: 'श्रीमद्भगवद्गीता 2.47',
    },
  },
  {
    id: 'shastra',
    title: { hi: 'शास्त्र', en: 'The scriptures' },
    line: { hi: 'वेद, उपनिषद, गीता, रामायण, महाभारत, पुराण', en: 'Vedas, Upanishads, Gita, Ramayana, Mahabharata, Puranas' },
    minutes: 3,
    body: {
      hi: [
        '**श्रुति** यानी “सुना हुआ” ज्ञान। इसमें चार वेद हैं: ऋग्वेद, यजुर्वेद, सामवेद और अथर्ववेद। हर वेद के साथ ब्राह्मण, आरण्यक और उपनिषद जुड़े हैं। उपनिषद वेदों का दार्शनिक भाग हैं।',
        '**स्मृति** यानी “याद किया हुआ” ज्ञान। इसमें धर्मशास्त्र, रामायण, महाभारत और पुराण आते हैं।',
        'वाल्मीकि रामायण में सात कांड हैं और लगभग 24,000 श्लोक माने जाते हैं। महाभारत बहुत विशाल है, आम तौर पर एक लाख श्लोक कहे जाते हैं। श्रीमद्भगवद्गीता महाभारत के भीष्म पर्व में है। उसमें 18 अध्याय और 700 श्लोक हैं।',
        'पुराणों में 18 महापुराण गिने जाते हैं और 18 उपपुराण भी। गोस्वामी तुलसीदास की रामचरितमानस (16वीं सदी) ने रामकथा को आम लोगों की भाषा में घर-घर पहुँचाया।',
      ],
      en: [
        '**Shruti** means “what was heard”. It holds the four Vedas: Rigveda, Yajurveda, Samaveda and Atharvaveda. Each Veda has Brahmanas, Aranyakas and Upanishads attached. The Upanishads are the philosophical part of the Vedas.',
        '**Smriti** means “what was remembered”. It includes the Dharmashastras, the Ramayana, the Mahabharata and the Puranas.',
        'Valmiki’s Ramayana has seven kandas and about 24,000 verses. The Mahabharata is vast, usually said to have a hundred thousand verses. The Bhagavad Gita is in its Bhishma Parva, with 18 chapters and 700 verses.',
        'The Puranas are counted as 18 Mahapuranas and 18 Upapuranas. Tulsidas’s Ramcharitmanas (16th century) took the Ram katha to ordinary homes in a language people spoke.',
      ],
    },
  },
  {
    id: 'itihas',
    title: { hi: 'इतिहास', en: 'History' },
    line: { hi: 'वैदिक युग से भक्ति संतों तक, और आज', en: 'From the Vedic age to the bhakti saints, and today' },
    minutes: 3,
    body: {
      hi: [
        'इतिहास को लेकर परंपरा और इतिहासकारों की राय अलग-अलग है, इसलिए दोनों बताई जा रही हैं। परंपरा वेदों को अनादि मानती है, किसी तारीख में बाँधने योग्य नहीं। इतिहासकार ऋग्वेद के सूक्तों का काल मोटे तौर पर 1500 से 1000 ईसा पूर्व के आसपास मानते हैं। कुछ विद्वान इससे पहले की तिथि भी बताते हैं।',
        'सिंधु घाटी सभ्यता का परिपक्व काल लगभग 2600 से 1900 ईसा पूर्व माना जाता है। उसके बाद का दौर वैदिक काल, फिर उपनिषदों का काल है। रामायण और महाभारत का संकलन लंबे समय में हुआ। पुराणों के पहले रूप विद्वानों के अनुसार तीसरी से दसवीं सदी के बीच बने।',
        'आदि शंकराचार्य ने अद्वैत वेदांत को प्रतिष्ठित किया। इतिहासकार उन्हें 8वीं सदी ईस्वी का मानते हैं, जबकि मठों की परंपरा में उनका काल बहुत पहले बताया जाता है। दक्षिण में आलवार और नयनार संतों से भक्ति की धारा चली (5वीं से 9वीं सदी के बीच)। आगे चलकर रामानुजाचार्य, चैतन्य महाप्रभु (1486 से 1534), कबीर, मीराबाई, सूरदास, तुलसीदास और तुकाराम जैसे संतों ने भक्ति को जन-जन तक पहुँचाया।',
        'आज यह परंपरा त्योहारों, मंदिरों, कुंभ जैसे मेलों और घर-घर की पूजा में जीवित है।',
      ],
      en: [
        'Tradition and historians differ on history, so both are given. Tradition holds the Vedas to be beginningless, not tied to any date. Historians place the hymns of the Rigveda roughly between 1500 and 1000 BCE; some scholars give earlier dates.',
        'The mature phase of the Indus Valley civilisation is dated to about 2600–1900 BCE. After it come the Vedic period and then the age of the Upanishads. The Ramayana and the Mahabharata took shape over a long time. Scholars say the first versions of the Puranas were composed between the 3rd and 10th centuries CE.',
        'Adi Shankaracharya established Advaita Vedanta. Historians place him in the 8th century CE, while the monastic traditions give a much earlier time. In the south the Alvar and Nayanar saints started the bhakti stream (between the 5th and 9th centuries). Later Ramanujacharya, Chaitanya Mahaprabhu (1486–1534), Kabir, Mirabai, Surdas, Tulsidas and Tukaram took bhakti to ordinary people.',
        'Today the tradition lives on in festivals, temples, great fairs like the Kumbh and the daily puja at home.',
      ],
    },
  },
  {
    id: 'parampara',
    title: { hi: 'परंपराएँ', en: 'Traditions' },
    line: { hi: 'शैव, वैष्णव, शाक्त, स्मार्त: एक परिवार, कई मार्ग', en: 'Shaiva, Vaishnava, Shakta, Smarta: one family, many paths' },
    minutes: 2,
    body: {
      hi: [
        'सनातन परंपरा में ईश्वर तक पहुँचने के कई मार्ग माने गए हैं। मोटे तौर पर चार धाराएँ गिनी जाती हैं।',
        '**शैव** शिव को परम मानते हैं। **वैष्णव** विष्णु और उनके अवतार, राम और कृष्ण, को। **शाक्त** देवी, यानी आदिशक्ति को। **स्मार्त** पाँच देवताओं की साथ में पूजा करते हैं: गणेश, सूर्य, विष्णु, शिव और देवी। इसे पंचायतन पूजा कहते हैं।',
        'पंचायतन पूजा का श्रेय शंकराचार्य को दिया जाता है। पर पुरातत्व बताता है कि गुप्त काल के मंदिरों में भी ऐसे पंचायतन मिलते हैं, यानी यह चलन उनसे पहले का है। संभवतः शंकराचार्य ने इसे नया जीवन दिया।',
        'इन धाराओं में आपस में विरोध नहीं माना जाता। एक ही घर में कोई शिव का, कोई कृष्ण का और कोई देवी का भक्त हो सकता है। रीति-रिवाज क्षेत्र के अनुसार बदलते हैं, इसीलिए इस ऐप में जहाँ भेद है वहाँ बताया गया है।',
      ],
      en: [
        'The tradition holds that there are many paths to the divine. Roughly four streams are counted.',
        '**Shaivas** hold Shiva as supreme. **Vaishnavas** hold Vishnu and his avatars, Ram and Krishna. **Shaktas** hold the Devi, the Adi Shakti. **Smartas** worship five deities together: Ganesha, Surya, Vishnu, Shiva and the Devi. This is called Panchayatana puja.',
        'Panchayatana puja is credited to Shankaracharya. But archaeology shows such arrangements in temples of the Gupta period, so the practice is older than him. He probably gave it new life.',
        'These streams are not seen as opposed to each other. In one home, one person may be devoted to Shiva, another to Krishna, another to the Devi. Customs also change from region to region, which is why this app says so wherever they differ.',
      ],
    },
  },
  {
    id: 'jeevan',
    title: { hi: 'दैनिक जीवन में', en: 'In daily life' },
    line: { hi: 'पूजा, व्रत, त्योहार, सेवा', en: 'Puja, vrat, festivals, seva' },
    minutes: 2,
    body: {
      hi: [
        'सनातन धर्म किताबों में कम और रोज़ के जीवन में ज़्यादा जिया जाता है। सुबह उठकर हाथ जोड़ना, दीया जलाना, तुलसी में जल देना, सूर्य को अर्घ्य देना, भोजन से पहले प्रभु को याद करना, ये सब उसी का हिस्सा हैं।',
        'पंचांग इस जीवन की घड़ी है। तिथि, नक्षत्र और मुहूर्त से तय होता है कि पूजा, व्रत और त्योहार कब मनाएँ: एकादशी, पूर्णिमा, अमावस्या, नवरात्रि, दीपावली।',
        'घर की पूजा के साथ दान और सेवा भी इसी धर्म का अंग है: भूखे को भोजन, प्यासे को जल, गाय और पक्षियों की सेवा, बड़ों का सम्मान।',
        'इस ऐप का मकसद यही है कि यह सब रोज़ के जीवन में आपके साथ रहे।',
      ],
      en: [
        'Sanatan Dharma is lived less in books and more in daily life. Folding your hands on waking, lighting a diya, offering water to the tulsi, offering water to the sun, remembering God before a meal: all of this is part of it.',
        'The panchang is the clock of this life. Tithi, nakshatra and muhurat decide when to keep a puja, a vrat or a festival: Ekadashi, Purnima, Amavasya, Navratri, Deepavali.',
        'Along with worship at home, giving and service are part of this dharma too: food for the hungry, water for the thirsty, care of cows and birds, respect for elders.',
        'This app exists to keep all of that with you in everyday life.',
      ],
    },
  },
]

export interface Faq {
  q: Bi
  a: Bi
}

export const FAQS: Faq[] = [
  {
    q: { hi: 'पंचांग कैसे बनता है? छपे कैलेंडर से तिथि अलग क्यों दिख सकती है?', en: 'How is the panchang made? Why can a tithi differ from a printed calendar?' },
    a: {
      hi: 'ऐप सूर्य और चंद्रमा की स्थिति की गणना से पंचांग बनाता है, लाहिड़ी अयनांश के साथ। तिथि दिन के बीच में भी बदल सकती है, और अलग पंचांग अलग गणना-पद्धति या शहर लेते हैं, इसलिए कभी-कभी एक दिन का अंतर दिखता है। त्योहार की तारीख के लिए अपने स्थानीय मंदिर या पंडित जी से भी पूछ लें।',
      en: 'The app calculates the panchang from the positions of the sun and moon, with the Lahiri ayanamsha. A tithi can change in the middle of a day, and different panchangs use different methods or cities, so a one-day difference sometimes shows. For a festival date, also ask your local temple or pandit ji.',
    },
  },
  {
    q: { hi: 'शहर बदलने से मुहूर्त का समय क्यों बदलता है?', en: 'Why do muhurat times change when I change the city?' },
    a: {
      hi: 'सूर्योदय, सूर्यास्त और चंद्रोदय हर शहर में अलग समय पर होते हैं। राहु काल, अभिजित मुहूर्त और पूजा के मुहूर्त इन्हीं पर टिके हैं, इसलिए शहर के हिसाब से बदलते हैं। प्रोफ़ाइल में अपना शहर चुन लीजिए।',
      en: 'Sunrise, sunset and moonrise happen at different times in every city. Rahu Kaal, Abhijit muhurat and puja muhurats depend on them, so they change with the city. Choose your city in the profile.',
    },
  },
  {
    q: { hi: 'दैनिक दर्शन कैसे गिना जाता है?', en: 'How is daily darshan counted?' },
    a: {
      hi: 'मंदिर में दीया जलाएँ, फूल चढ़ाएँ और घंटी बजाएँ। तीनों करने पर उस दिन का एक दर्शन गिना जाता है। संख्या हमेशा कुल दिनों की है। कोई दिन छूट जाए तो भी वह वापस शून्य पर नहीं जाती।',
      en: 'In the Mandir, light the diya, offer flowers and ring the bell. When all three are done, that day counts as one darshan. The number is always the total of days. If you miss a day, it never goes back to zero.',
    },
  },
  {
    q: { hi: 'फ़ोन बदलने या ऐप हटाने पर मेरे दर्शन और जाप का क्या होगा?', en: 'What happens to my darshan and jap if I change phones or delete the app?' },
    a: {
      hi: 'आपकी जानकारी केवल आपके फ़ोन में रहती है, कहीं भेजी नहीं जाती। इसलिए ऐप हटाने या फ़ोन बदलने पर दर्शन और जाप की गिनती मिट जाएगी। भविष्य में हम वैकल्पिक बैकअप जोड़ना चाहते हैं।',
      en: 'Your information stays only on your phone and is not sent anywhere. So if you delete the app or change phones, your darshan and jap counts will be lost. We would like to add an optional backup in future.',
    },
  },
  {
    q: { hi: 'शुभकामना कार्ड व्हाट्सऐप पर कैसे भेजें?', en: 'How do I send a greeting card on WhatsApp?' },
    a: {
      hi: 'होम पर या त्योहार के पेज में कार्ड चुनिए, अपना नाम और संदेश जोड़िए और व्हाट्सऐप का बटन दबाइए।',
      en: 'Pick a card on home or on a festival page, add your name and message, and press the WhatsApp button.',
    },
  },
  {
    q: { hi: 'ऐप को फ़ोन की होम स्क्रीन पर कैसे जोड़ें?', en: 'How do I add the app to my phone’s home screen?' },
    a: {
      hi: 'आईफ़ोन में सफ़ारी में खोलकर नीचे “शेयर” दबाइए, फिर “होम स्क्रीन में जोड़ें”। एंड्रॉइड में क्रोम में ऊपर तीन बिंदुओं से “होम स्क्रीन पर जोड़ें” चुनिए। इसके बाद यह आम ऐप की तरह खुलेगा।',
      en: 'On iPhone, open it in Safari, tap “Share” at the bottom, then “Add to Home Screen”. On Android, in Chrome use the three dots at the top and choose “Add to Home screen”. After that it opens like a normal app.',
    },
  },
  {
    q: { hi: 'क्या ऐप बिना इंटरनेट के चलता है?', en: 'Does the app work without internet?' },
    a: {
      hi: 'एक बार खुलने के बाद ज़्यादातर हिस्से बिना इंटरनेट के भी चलते हैं, जैसे आरती, पाठ और मंदिर। नई तस्वीरें और अपडेट के लिए इंटरनेट चाहिए।',
      en: 'Once it has opened, most parts work without internet, such as aartis, path and the Mandir. New pictures and updates need internet.',
    },
  },
  {
    q: { hi: 'कथा और पूजा विधि कहाँ से ली गई है? मेरे क्षेत्र में रीति अलग है तो?', en: 'Where do the kathas and puja vidhi come from? What if my region’s custom differs?' },
    a: {
      hi: 'कथा और विधि प्रचलित ग्रंथों और भरोसेमंद पंचांग-स्रोतों से मिलाकर लिखी गई हैं। रीति-रिवाज क्षेत्र और परिवार के अनुसार बदलते हैं। जहाँ अलग-अलग मत हैं, वहाँ ऐप में बताया गया है। अपने परिवार या पंडित जी की परंपरा को ही प्राथमिकता दीजिए।',
      en: 'Kathas and vidhi are written by cross-checking well-known texts and trusted panchang sources. Customs differ by region and family. Where views differ, the app says so. Please give priority to your own family’s or pandit ji’s tradition.',
    },
  },
  {
    q: { hi: 'क्या ऐप मुफ़्त है? क्या मेरी जानकारी कहीं जाती है?', en: 'Is the app free? Does my information go anywhere?' },
    a: {
      hi: 'ऐप मुफ़्त है। आपका नाम, शहर, दर्शन और जाप आपके फ़ोन में ही रहते हैं। इनके लिए कोई लॉगिन, फ़ोन नंबर या ईमेल नहीं माँगा जाता।',
      en: 'The app is free. Your name, city, darshan and jap stay on your phone. No login, phone number or email is asked for.',
    },
  },
  {
    q: { hi: 'चित्र और पाठ कहाँ से हैं?', en: 'Where do the pictures and texts come from?' },
    a: {
      hi: 'आरती, गीता और चालीसा के मूल पाठ पारंपरिक हैं (गीता का संस्कृत पाठ: gita/gita, सार्वजनिक डोमेन)। अर्थ, विधि और कथाएँ सनातन ऐप द्वारा लिखी गई हैं। पंचांग की गणना लाहिड़ी अयनांश से होती है। चित्रों में कुछ राजा रवि वर्मा की सार्वजनिक कृतियाँ हैं और कुछ हमारे अपने बनाए चित्र और तस्वीरें।',
      en: 'The original texts of the aartis, the Gita and the chalisas are traditional (Gita Sanskrit text: gita/gita, public domain). The meanings, vidhi and kathas are written by Sanatan App. The panchang is calculated with the Lahiri ayanamsha. Some pictures are public works of Raja Ravi Varma, and others are our own pictures and photographs.',
    },
  },
]

export const ABOUT = {
  tagline: { hi: 'हर घर में पूजा, पाठ और परंपरा, एक ही जगह।', en: 'Puja, path and tradition for every home, in one place.' },
  helps: [
    { t: { hi: 'रोज़ का पंचांग', en: 'The daily panchang' }, d: { hi: 'तिथि, मुहूर्त, राहु काल, आपके शहर के हिसाब से', en: 'Tithi, muhurat, Rahu Kaal, for your city' } },
    { t: { hi: 'घर का मंदिर', en: 'Mandir at home' }, d: { hi: 'दीया, फूल, घंटी और जाप, रोज़ दर्शन', en: 'Diya, flowers, bell and jap, darshan every day' } },
    { t: { hi: 'आरती और पाठ', en: 'Aarti and path' }, d: { hi: 'अर्थ के साथ, बड़े अक्षरों में', en: 'With meanings, in large letters' } },
    { t: { hi: 'त्योहार', en: 'Festivals' }, d: { hi: 'पूजा विधि, कथा और शुभकामना कार्ड', en: 'Puja vidhi, katha and greeting cards' } },
  ],
  why: {
    hi: 'यह ऐप इसलिए बना कि सनातन की परंपरा हर घर में बनी रहे और अगली पीढ़ी तक पहुँचे। जो पूजा, कथा और पंचांग घर के बड़ों से सीखा, वह एक जगह मिल जाए, सही और सरल रूप में। ऐप मुफ़्त है और हिंदी को पहली भाषा मानकर बना है।',
    en: 'This app was made so that the Sanatan tradition stays alive in every home and reaches the next generation. What we learned from our elders about puja, katha and panchang should be in one place, correct and simple. The app is free and made Hindi-first.',
  },
}
