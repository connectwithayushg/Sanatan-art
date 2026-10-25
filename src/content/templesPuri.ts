/**
 * New pages for the Sapta Puri and the Kumbh places: Ayodhya, Mathura, Haridwar, Kanchipuram (Kamakshi) and Prayagraj.
 * The other Sapta Puri and Kumbh cities (Kashi, Ujjain, Dwarka, Nashik) use pages that already exist (Kashi Vishwanath,
 * Mahakaleshwar, Dwarkadhish, Trimbakeshwar). Where a site is under a legal dispute the page says only what is on record.
 * Facts cross-checked between Wikipedia and regional guides; distances differ between sources, so they are "about".
 */
import { l, type Temple } from './templeTypes'

const BEST = l('अक्टूबर से मार्च; गर्मी में दोपहर बहुत गर्म रहती है।', 'October to March; afternoons are very hot in summer.')

export const PURI_TEMPLES: Temple[] = [
  {
    id: 'ayodhya-ram-mandir',
    name: l('श्री राम मंदिर, अयोध्या', 'Shri Ram Mandir, Ayodhya'),
    place: l('अयोध्या, उत्तर प्रदेश', 'Ayodhya, Uttar Pradesh'),
    state: 'UP',
    groups: ['puri'],
    tags: [l('सप्त पुरी', 'Sapta Puri'), l('राम जन्मभूमि', 'Ram Janmabhoomi')],
    importance: l(
      'अयोध्या सप्त पुरियों में पहली है और श्री राम की जन्मभूमि मानी जाती है। मंदिर में गर्भगृह के मुख्य देव बाल रूप के श्री राम लला हैं। मंदिर देश के सबसे अधिक दर्शनार्थियों वाले मंदिरों में गिना जाता है।',
      'Ayodhya is the first of the Sapta Puri and is held to be the birthplace of Shri Ram. The presiding deity of the sanctum is Shri Ram Lalla, Ram as a child. The temple is among the most visited in the country.',
    ),
    katha: l(
      'रामायण के अनुसार अयोध्या इक्ष्वाकु वंश की राजधानी थी, जहाँ राजा दशरथ के पुत्र के रूप में श्री राम का जन्म हुआ। तुलसीदास जी ने श्री राम के बाल रूप को "राम लला" कहा है। सरयू नदी अयोध्या के किनारे बहती है और रामनवमी यहाँ का सबसे बड़ा पर्व है।',
      'According to the Ramayana, Ayodhya was the capital of the Ikshvaku dynasty, where Shri Ram was born as the son of King Dasharatha. Tulsidas called Ram’s child form "Ram Lalla". The Sarayu flows by Ayodhya and Ram Navami is its greatest festival.',
    ),
    history: l(
      'इस स्थान को लेकर 19वीं सदी के मध्य से विवाद रहा। 2019 में सर्वोच्च न्यायालय ने भूमि मंदिर निर्माण के लिए हिंदू पक्ष को दी और मस्जिद के लिए अयोध्या में ही अन्य भूमि दी। अगस्त 2020 में भूमि पूजन हुआ, निर्माण का प्रबंध श्री राम जन्मभूमि तीर्थ क्षेत्र ट्रस्ट ने किया, और 22 जनवरी 2024 को प्राण प्रतिष्ठा हुई।',
      'The site was the subject of a dispute from the mid-19th century. In 2019 the Supreme Court gave the land for the temple and gave other land in Ayodhya for a mosque. The ground-breaking was in August 2020, the Shri Ram Janmabhoomi Teerth Kshetra Trust oversaw construction, and the consecration (pran pratishtha) was on 22 January 2024.',
    ),
    todo: [
      l('श्री राम लला के दर्शन', 'Darshan of Shri Ram Lalla'),
      l('सरयू के घाटों पर संध्या आरती देखें', 'See the evening aarti at the Sarayu ghats'),
      l('हनुमान गढ़ी के दर्शन', 'Visit Hanuman Garhi'),
      l('कनक भवन के दर्शन', 'Visit Kanak Bhawan'),
    ],
    best: l('अक्टूबर से मार्च। रामनवमी (मार्च-अप्रैल) और दीपोत्सव (दीवाली के आसपास) पर बहुत भीड़ होती है।', 'October to March. Ram Navami (March to April) and Deepotsav (around Diwali) are very crowded.'),
    rules: l('दर्शन का समय और पास की व्यवस्था बदलती रहती है। केवल ट्रस्ट की आधिकारिक जानकारी पर भरोसा करें और मोबाइल, सामान जैसी चीज़ों के नियम प्रवेश पर पूछ लें।', 'Darshan timings and pass arrangements change. Rely only on the trust’s official information and ask at entry about phones and bags.'),
    how: {
      road: l('लखनऊ से लगभग 130 किमी; वाराणसी और प्रयागराज से भी सीधी सड़कें हैं।', 'About 130 km from Lucknow; there are direct roads from Varanasi and Prayagraj too.'),
      rail: l('अयोध्या धाम जंक्शन। स्रोतों में मंदिर की दूरी 1 से 7 किमी लिखी है, इसलिए नक्शे में देख लें।', 'Ayodhya Dham Junction. Sources give the distance to the temple as 1 to 7 km, so check a map.'),
      air: l('महर्षि वाल्मीकि अंतरराष्ट्रीय हवाई अड्डा, अयोध्या, मंदिर से लगभग 10 से 12 किमी।', 'Maharishi Valmiki International Airport, Ayodhya, about 10 to 12 km from the temple.'),
    },
    site: 'https://srjbtkshetra.org',
    maps: 'Shri Ram Janmabhoomi Mandir, Ayodhya',
    note: l('स्थल पर 2019 में सर्वोच्च न्यायालय का निर्णय आ चुका है। इस पन्ने में केवल वही दर्ज है जो सार्वजनिक रिकॉर्ड में है।', 'The Supreme Court gave its judgment on the site in 2019. This page records only what is on the public record.'),
    nearby: [
      { name: l('हनुमान गढ़ी', 'Hanuman Garhi'), dist: l('अयोध्या में, पास ही', 'In Ayodhya, close by'), text: l('अयोध्या का प्रसिद्ध हनुमान मंदिर, जहाँ मान्यता है कि हनुमान जी अयोध्या के रक्षक के रूप में रहते हैं।', 'Ayodhya’s well-known Hanuman temple, where Hanuman is believed to stay as the guardian of Ayodhya.') },
      { name: l('सरयू के घाट', 'Sarayu ghats'), dist: l('अयोध्या में', 'In Ayodhya'), text: l('सरयू के किनारे के घाट, जहाँ स्नान और संध्या आरती होती है।', 'The ghats on the Sarayu, where people bathe and attend the evening aarti.') },
    ],
    video: { id: 'v-8ZyrvUGZ8', title: 'Morning Arti of Prabhu Shriram Lalla at Ram Mandir Ayodhya', channel: 'Shri Ram Janmbhoomi Teerth Kshetra' },
  },
  {
    id: 'krishna-janmasthan',
    name: l('श्री कृष्ण जन्मस्थान, मथुरा', 'Shri Krishna Janmasthan, Mathura'),
    place: l('मथुरा, उत्तर प्रदेश', 'Mathura, Uttar Pradesh'),
    state: 'UP',
    groups: ['puri', 'braj'],
    tags: [l('सप्त पुरी', 'Sapta Puri'), l('ब्रज', 'Braj')],
    importance: l(
      'मथुरा सप्त पुरियों में दूसरी है और श्री कृष्ण की जन्मभूमि मानी जाती है। परिसर में केशवदेव मंदिर, गर्भगृह (जिसे जन्मस्थान माना जाता है) और भागवत भवन हैं। जन्माष्टमी पर यहाँ देश भर से भक्त आते हैं।',
      'Mathura is the second of the Sapta Puri and is held to be the birthplace of Shri Krishna. The complex has the Keshavdev temple, the Garbha Griha (held to be the birth spot) and the Bhagavata Bhavan. Devotees come from all over the country on Janmashtami.',
    ),
    katha: l(
      'भागवत की कथा है कि कंस ने अपनी बहन देवकी और वसुदेव को कारागार में रखा। वहीं श्री कृष्ण का जन्म हुआ, और वसुदेव उन्हें यमुना पार गोकुल ले गए। परंपरा के अनुसार श्री कृष्ण के प्रपौत्र वज्रनाभ ने यहाँ पहला मंदिर बनवाया (यह परंपरा है, पुरातात्विक प्रमाण नहीं)।',
      'The Bhagavata story is that Kamsa imprisoned his sister Devaki and Vasudeva. Shri Krishna was born there and Vasudeva carried him across the Yamuna to Gokul. By tradition Krishna’s great-grandson Vajranabh built the first temple here (a tradition, not archaeological proof).',
    ),
    history: l(
      'खुदाई में यहाँ छठी सदी ईसा पूर्व के बर्तन मिले हैं। यहाँ कई मंदिर बने और कई बार नष्ट हुए; 1618 में ओरछा के वीर सिंह देव बुंदेला ने मंदिर बनवाया और 1670 में औरंगज़ेब के समय केशवदेव मंदिर तोड़ा गया। आज का परिसर 20वीं सदी में बना: मदन मोहन मालवीय ने 1944 में भूमि ली, 1951 में ट्रस्ट बना और निर्माण 1953 से 1982 के बीच हुआ। केशवदेव मंदिर 1958 में खोला गया।',
      'Excavations here found pottery of the 6th century BCE. Temples were built and destroyed several times; in 1618 Veer Singh Deo Bundela of Orchha built a temple and in 1670, under Aurangzeb, the Keshavdev temple was destroyed. Today’s complex is of the 20th century: Madan Mohan Malaviya acquired the land in 1944, a trust was formed in 1951 and building ran from 1953 to 1982. The Keshavdev temple was opened in 1958.',
    ),
    todo: [
      l('गर्भगृह और केशवदेव मंदिर के दर्शन', 'Darshan at the Garbha Griha and the Keshavdev temple'),
      l('यमुना किनारे विश्राम घाट पर आरती', 'The aarti at Vishram Ghat on the Yamuna'),
      l('वृंदावन, गोकुल और गोवर्धन की ब्रज यात्रा जोड़ें', 'Add the Braj yatra to Vrindavan, Gokul and Govardhan'),
    ],
    best: l('अक्टूबर से मार्च। जन्माष्टमी (अगस्त-सितंबर) और होली पर बहुत भीड़ होती है।', 'October to March. Janmashtami (August to September) and Holi are very crowded.'),
    rules: l('परिसर में सुरक्षा जाँच होती है और मोबाइल, कैमरा, बैग जैसी चीज़ों पर रोक हो सकती है। प्रवेश पर नियम पूछ लें और लॉकर का उपयोग करें।', 'There is a security check, and phones, cameras and bags may not be allowed. Ask at the entrance and use a locker.'),
    how: {
      road: l('दिल्ली से यमुना एक्सप्रेसवे या NH-19 होकर लगभग 150 से 185 किमी (रास्ते के अनुसार)।', 'About 150 to 185 km from Delhi via the Yamuna Expressway or NH-19 (depending on the route).'),
      rail: l('मथुरा जंक्शन, जहाँ दिल्ली, आगरा और मुंबई की ट्रेनें आती हैं।', 'Mathura Junction, served by trains from Delhi, Agra and Mumbai.'),
      air: l('आगरा सबसे पास का हवाई अड्डा (लगभग 55 किमी); दिल्ली का IGI हवाई अड्डा भी विकल्प है।', 'Agra is the nearest airport (about 55 km); Delhi’s IGI airport is also an option.'),
    },
    maps: 'Shri Krishna Janmasthan Temple, Mathura',
    note: l('परिसर के पास की भूमि के स्वामित्व से जुड़े मुकदमे अदालतों में लंबित हैं। इस पन्ने में केवल सार्वजनिक रिकॉर्ड की बातें दर्ज हैं।', 'Cases about the ownership of land next to the complex are pending in the courts. This page records only what is on the public record.'),
    nearby: [
      { name: l('विश्राम घाट', 'Vishram Ghat'), dist: l('मथुरा में', 'In Mathura'), text: l('यमुना किनारे का मुख्य घाट, जहाँ मान्यता है कि कंस वध के बाद श्री कृष्ण ने विश्राम किया। यहाँ शाम की आरती होती है।', 'The main ghat on the Yamuna, where Shri Krishna is believed to have rested after slaying Kamsa. An evening aarti is held here.') },
      { name: l('बाँके बिहारी, वृंदावन', 'Banke Bihari, Vrindavan'), dist: l('लगभग 12 किमी', 'About 12 km'), text: l('वृंदावन का प्रसिद्ध मंदिर, राधा-कृष्ण के संयुक्त रूप का।', 'Vrindavan’s famous temple of the united form of Radha and Krishna.'), photoOf: 'banke-bihari' },
    ],
  },
  {
    id: 'har-ki-pauri',
    name: l('हर की पौड़ी, हरिद्वार', 'Har Ki Pauri, Haridwar'),
    place: l('हरिद्वार, उत्तराखंड', 'Haridwar, Uttarakhand'),
    state: 'UK',
    groups: ['puri', 'kumbh'],
    tags: [l('सप्त पुरी (मायापुरी)', 'Sapta Puri (Mayapuri)'), l('कुंभ का स्थान', 'A Kumbh place')],
    importance: l(
      'गंगा जहाँ पहाड़ों से निकलकर मैदान में आती हैं, वहाँ का पवित्र घाट। नाम का अर्थ "हरि के चरण" बताया जाता है। हरिद्वार सप्त पुरियों में मायापुरी के रूप में गिना जाता है और चार कुंभ स्थानों में से एक है।',
      'The sacred ghat where the Ganga leaves the mountains and enters the plains. The name is said to mean "the feet of Hari". Haridwar is counted among the Sapta Puri as Mayapuri and is one of the four Kumbh places.',
    ),
    katha: l(
      'मान्यता है कि समुद्र मंथन के बाद गरुड़ जब अमृत का कलश ले जा रहे थे, तब उसकी बूँदें यहाँ ब्रह्म कुंड पर गिरीं। यह कुंभ का आधार है। यह भी माना जाता है कि विष्णु जी ने वैदिक काल में ब्रह्म कुंड की यात्रा की।',
      'It is believed that after the churning of the ocean, as Garuda carried the pot of nectar, drops fell here at Brahma Kund. This is the basis of the Kumbh. It is also held that Vishnu visited Brahma Kund in Vedic times.',
    ),
    history: l(
      'कहा जाता है कि राजा विक्रमादित्य ने ईसा पूर्व पहली सदी में अपने भाई भर्तृहरि की स्मृति में यह घाट बनवाया, जिन्होंने यहाँ तप किया था। 1819 के कुंभ में भगदड़ से 430 लोगों की मृत्यु के बाद घाट को चौड़ा किया गया। 1938 में घाट का विस्तार हुआ और घंटाघर बना।',
      'It is said King Vikramaditya built the ghat in the 1st century BCE in memory of his brother Bhartrihari, who meditated here. After a crush at the 1819 Kumbh killed 430 people, the ghat was widened. It was extended again in 1938 and the clock tower was built.',
    ),
    todo: [
      l('गंगा में स्नान या आचमन', 'A bath or achaman in the Ganga'),
      l('सूर्यास्त के समय गंगा आरती', 'The Ganga aarti at sunset'),
      l('मनसा देवी और चंडी देवी के दर्शन', 'Visit Mansa Devi and Chandi Devi'),
      l('दीपदान: पत्ते के दोनों में दीप बहाना', 'Float a lamp in a leaf cup (deepdaan)'),
    ],
    best: l('अक्टूबर से मार्च। शाम की आरती के समय बहुत भीड़ होती है, इसलिए पहले पहुँच जाएँ।', 'October to March. The evening aarti is very crowded, so arrive early.'),
    rules: l('घाट पर सफ़ाई और धारा के नियमों का ध्यान रखें; बच्चों और बुज़ुर्गों को पानी के पास संभालकर रखें। प्लास्टिक न फेंकें।', 'Respect the cleanliness and current rules at the ghat; keep children and older people safe near the water. Do not throw plastic.'),
    how: {
      road: l('दिल्ली से लगभग 215 किमी; देहरादून और ऋषिकेश से भी सीधी सड़कें हैं।', 'About 215 km from Delhi; direct roads from Dehradun and Rishikesh too.'),
      rail: l('हरिद्वार जंक्शन, जहाँ से घाट कुछ किमी दूर है।', 'Haridwar Junction, a few km from the ghat.'),
      air: l('जॉली ग्रांट, देहरादून।', 'Jolly Grant, Dehradun.'),
    },
    maps: 'Har Ki Pauri, Haridwar',
    note: l('हर साल दशहरे के आसपास गंगा नहर की धारा सफ़ाई और मरम्मत के लिए आंशिक रूप से रोकी जाती है और दीवाली तक बहाल होती है, पर गंगा आरती रोज़ होती है। अगला हरिद्वार अर्ध कुंभ 2027 में बताया जा रहा है; तिथियाँ सरकारी सूचना से देखें।', 'Each year around Dussehra the Ganga canal is partly drained for cleaning and repairs, restored by Diwali, but the Ganga aarti continues daily. The next Haridwar Ardh Kumbh is reported for 2027; check government notices for dates.'),
    nearby: [
      { name: l('मनसा देवी मंदिर', 'Mansa Devi Temple'), dist: l('हरिद्वार में', 'In Haridwar'), text: l('पहाड़ी पर देवी मनसा का प्रसिद्ध मंदिर; ऊपर जाने के लिए पैदल रास्ता और रोपवे है।', 'The well-known hilltop temple of Goddess Mansa; there is a footpath and a ropeway.') },
      { name: l('ऋषिकेश', 'Rishikesh'), dist: l('लगभग 25 किमी', 'About 25 km'), text: l('गंगा किनारे का योग और तीर्थ नगर, लक्ष्मण झूला और त्रिवेणी घाट के लिए प्रसिद्ध।', 'A yoga and pilgrimage town on the Ganga, known for Lakshman Jhula and Triveni Ghat.') },
    ],
  },
  {
    id: 'kamakshi-amman',
    name: l('कामाक्षी अम्मन मंदिर, कांचीपुरम', 'Kamakshi Amman Temple, Kanchipuram'),
    place: l('कांचीपुरम, तमिलनाडु', 'Kanchipuram, Tamil Nadu'),
    state: 'TN',
    groups: ['puri'],
    tags: [l('सप्त पुरी: कांची', 'Sapta Puri: Kanchi'), l('शक्तिपीठ', 'Shakti Peeth')],
    importance: l(
      'कांचीपुरम सप्त पुरियों में से एक है, और यहाँ का कामाक्षी अम्मन मंदिर देवी कामाक्षी (आदि शक्ति) का प्रमुख मंदिर है। इसे शक्तिपीठों में गिना जाता है। मंदिर में विष्णु के वराह रूप का मंदिर भी है, जो एक दिव्य देशम है।',
      'Kanchipuram is one of the Sapta Puri, and its Kamakshi Amman temple is the chief temple of Goddess Kamakshi (Adi Shakti). It is counted among the Shakti Peeths. The temple also has a shrine of Vishnu as Varaha, which is a Divya Desam.',
    ),
    katha: l(
      'देवी कामाक्षी यहाँ पाँच रूपों में पूजी जाती हैं, जिनमें मुख्य कामाक्षी पद्मासन में बैठी हैं, उनके चार हाथों में पाश, अंकुश, ईख का धनुष और पुष्प-बाण हैं। कथा है कि पार्वती जी ने यहाँ तप करके एकांबरेश्वर शिव से विवाह किया। गर्भगृह के सामने श्रीयंत्र है, जिसे आदि शंकराचार्य द्वारा स्थापित माना जाता है।',
      'Goddess Kamakshi is worshipped here in five forms; the main one sits in padmasana, holding a noose, a goad, a sugarcane bow and flower arrows. The story is that Parvati did penance here and married Shiva as Ekambareswarar. A Sri Yantra before the sanctum is believed to have been placed by Adi Shankaracharya.',
    ),
    history: l(
      'माना जाता है कि मंदिर की स्थापना पल्लव राजाओं ने 5वीं से 8वीं सदी के बीच की, और आलवार संतों ने इसकी स्तुति की। 14वीं और 17वीं सदी में इसमें बदलाव हुए। विजयनगर साम्राज्य के पतन के बाद सोने की कामाक्षी की मूर्ति कई जगह ले जाई गई, और 1783 में वर्तमान मंदिर में स्थापित हुई। मंदिर का संचालन श्री कांची कामकोटि पीठम करता है।',
      'The temple is believed to have been founded by the Pallava kings between the 5th and 8th century and was praised by the Alvar saints. It was changed in the 14th and 17th centuries. After the fall of Vijayanagara the golden Kamakshi image was carried to several places and was installed in the present temple in 1783. The temple is run by the Sri Kanchi Kamakoti Peetham.',
    ),
    todo: [
      l('कामाक्षी देवी के दर्शन', 'Darshan of Goddess Kamakshi'),
      l('गायत्री मंडप और श्रीयंत्र देखें', 'See the Gayatri Mandapa and the Sri Yantra'),
      l('एकांबरेश्वर मंदिर के दर्शन (पंच भूत: पृथ्वी)', 'Visit the Ekambareswarar temple (Pancha Bhoota: Earth)'),
    ],
    best: BEST,
    rules: l('दक्षिण भारत के मंदिरों में प्रायः पारंपरिक वस्त्रों का नियम होता है; प्रवेश के नियम काउंटर पर पूछ लें।', 'South Indian temples usually have a traditional dress code; ask at the counter about entry.'),
    how: {
      road: l('चेन्नई से लगभग 70 किमी; बसें और टैक्सी मिलती हैं।', 'About 70 km from Chennai; buses and taxis are available.'),
      rail: l('कांचीपुरम स्टेशन; चेन्नई से ट्रेनें भी हैं।', 'Kanchipuram station; trains also run from Chennai.'),
      air: l('चेन्नई अंतरराष्ट्रीय हवाई अड्डा।', 'Chennai International Airport.'),
    },
    site: 'https://www.kamakoti.org',
    maps: 'Kamakshi Amman Temple, Kanchipuram',
    note: l('शक्तिपीठों की सूची अलग-अलग ग्रंथों में अलग मिलती है; कुछ में कांची को शक्तिपीठ गिना गया है। इसे श्रद्धा की परंपरा की तरह पढ़ें।', 'The list of Shakti Peeths differs between texts; some count Kanchi as one. Read this as a tradition of faith.'),
    nearby: [
      { name: l('एकांबरेश्वर मंदिर', 'Ekambareswarar Temple'), dist: l('कांचीपुरम में ही', 'In Kanchipuram itself'), text: l('पंच भूत स्थलों में पृथ्वी तत्व का शिव मंदिर, जहाँ मान्यता है कि पार्वती जी ने रेत का लिंग बनाकर पूजा की।', 'The Shiva temple of the earth element among the Pancha Bhoota, where Parvati is said to have worshipped a sand linga.'), photoOf: 'ekambareswarar' },
    ],
  },
  {
    id: 'triveni-sangam',
    name: l('त्रिवेणी संगम, प्रयागराज', 'Triveni Sangam, Prayagraj'),
    place: l('प्रयागराज, उत्तर प्रदेश', 'Prayagraj, Uttar Pradesh'),
    state: 'UP',
    groups: ['kumbh'],
    tags: [l('कुंभ का स्थान', 'A Kumbh place')],
    importance: l(
      'गंगा, यमुना और (मान्यता के अनुसार) अदृश्य सरस्वती का संगम। यह कुंभ मेले के चार स्थानों में से एक है। ऋग्वेद का कथन माना जाता है कि जहाँ श्वेत और श्याम नदियाँ मिलती हैं, वहाँ स्नान करने वाले स्वर्ग को पाते हैं।',
      'The confluence of the Ganga, the Yamuna and (by tradition) the invisible Saraswati. It is one of the four places of the Kumbh Mela. A saying attributed to the Rigveda holds that those who bathe where the white and the dark rivers meet rise to heaven.',
    ),
    katha: l(
      'मान्यता है कि सृष्टि के आरंभ में ब्रह्मा जी ने यहाँ यज्ञ किया, इसलिए इसे प्रयाग ("यज्ञ का स्थान") कहा गया। कुंभ की कथा में समुद्र मंथन के अमृत की बूँदें यहाँ भी गिरीं। संगम पर गंगा का जल श्वेत और यमुना का गहरा नीला-हरा दिखता है, जबकि सरस्वती भूमि के नीचे बहती मानी जाती है।',
      'It is believed that Brahma performed a sacrifice here at the start of creation, hence Prayag ("place of sacrifice"). In the Kumbh story drops of nectar from the churning of the ocean fell here too. At the Sangam the Ganga’s water looks white and the Yamuna’s dark blue-green, while the Saraswati is held to flow underground.',
    ),
    history: l(
      'संगम कुंभ मेले का स्थल है, जो हर 12 वर्ष में यहाँ लगता है, और हर वर्ष माघ मेला लगता है। यहाँ कई राष्ट्रीय नेताओं की अस्थियाँ भी प्रवाहित की गई हैं, जिनमें 1949 में महात्मा गांधी की भी शामिल हैं। (अर्ध कुंभ अगली बार 2031 के आसपास बताया जाता है; तिथियाँ सरकारी सूचना से देखें।)',
      'The Sangam is the site of the Kumbh Mela, held here every 12 years, and of the Magh Mela every year. The ashes of several national leaders have been immersed here, including Mahatma Gandhi’s in 1949. (The next Ardh Kumbh is reported for around 2031; check government notices for dates.)',
    ),
    todo: [
      l('संगम पर नाव से जाकर स्नान या आचमन', 'Go by boat to the Sangam for a bath or achaman'),
      l('बड़े हनुमान मंदिर के दर्शन (लेटे हुए हनुमान)', 'Visit the Bade Hanuman temple (reclining Hanuman)'),
      l('किले के भीतर अक्षयवट के दर्शन (प्रवेश की व्यवस्था बदलती रहती है)', 'See the Akshayvat inside the fort (access arrangements change)'),
    ],
    best: l('अक्टूबर से मार्च। जनवरी-फरवरी में माघ मेले के समय भीड़ बहुत बढ़ जाती है।', 'October to March. The crowd grows greatly during the Magh Mela in January to February.'),
    rules: l('नाव का किराया और घाट पहले तय कर लें; आधिकारिक घाट और अधिकृत नाविक चुनें। गहरे पानी में बच्चों और बुज़ुर्गों का ध्यान रखें।', 'Settle the boat fare and the ghat in advance; choose official ghats and authorised boatmen. Take care of children and older people near deep water.'),
    how: {
      road: l('प्रयागराज जंक्शन से संगम लगभग 6 से 9 किमी (घाट के अनुसार), ऑटो या ई-रिक्शा से।', 'From Prayagraj Junction the Sangam is about 6 to 9 km (depending on the ghat), by auto or e-rickshaw.'),
      rail: l('प्रयागराज जंक्शन; नैनी जंक्शन से अरैल घाट पास पड़ता है।', 'Prayagraj Junction; Arail Ghat is close from Naini Junction.'),
      air: l('प्रयागराज (बमरौली) हवाई अड्डा, संगम से लगभग 12 से 15 किमी।', 'Prayagraj (Bamrauli) airport, about 12 to 15 km from the Sangam.'),
    },
    maps: 'Triveni Sangam, Prayagraj',
    note: l('सरस्वती नदी का संगम पर बहना श्रद्धा और परंपरा की मान्यता है; दिखाई केवल गंगा और यमुना देती हैं।', 'The Saraswati flowing at the Sangam is a belief of faith and tradition; only the Ganga and the Yamuna are seen.'),
    nearby: [
      { name: l('बड़े हनुमान मंदिर', 'Bade Hanuman Temple'), dist: l('संगम के पास', 'Near the Sangam'), text: l('गंगा किनारे का प्रसिद्ध मंदिर, जिसमें हनुमान जी की लेटी हुई विशाल मूर्ति है।', 'A well-known temple by the Ganga with a large reclining image of Hanuman.') },
    ],
  },
]
