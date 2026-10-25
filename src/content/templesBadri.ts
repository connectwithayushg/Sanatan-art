/**
 * Panch Badri: the five Vishnu temples of the Badri Kshetra in Garhwal. Badrinath itself is in the first set of pages.
 * The five-temple list is not fixed: the usual list is Badrinath, Adi Badri, Yogadhyan Badri, Bhavishya Badri and Vriddha Badri,
 * while some lists use Dhyan Badri instead of Vriddha Badri (Sapta Badri adds Dhyan Badri and Ardha Badri).
 * Facts cross-checked between Wikipedia (Sapta Badri) and regional guides; access details change, so they are "about".
 */
import { l, type Temple } from './templeTypes'

const NOTE = l(
  'पंच बद्री की सूची हर स्थान पर एक जैसी नहीं मिलती। प्रचलित सूची में बद्रीनाथ, आदि बद्री, योगध्यान बद्री, भविष्य बद्री और वृद्ध बद्री हैं, जबकि कुछ सूचियों में वृद्ध बद्री की जगह ध्यान बद्री गिना जाता है। सप्त बद्री में ध्यान बद्री और अर्ध बद्री भी जुड़ते हैं।',
  'The Panch Badri list is not the same everywhere. The usual list is Badrinath, Adi Badri, Yogadhyan Badri, Bhavishya Badri and Vriddha Badri, while some lists count Dhyan Badri instead of Vriddha Badri. The Sapta Badri adds Dhyan Badri and Ardha Badri.',
)
const RULES = l(
  'सड़क और पैदल रास्तों की स्थिति मौसम पर निर्भर है। जाने से पहले स्थानीय प्रशासन या मंदिर समिति से पूछ लें। बाकी नियम मंदिर के पुजारी या समिति बताएँगे।',
  'Road and trail conditions depend on the weather. Check with the local administration or the temple committee before you go. The priests or committee will tell you the other rules.',
)
const RAIL = l('ऋषिकेश या हरिद्वार।', 'Rishikesh or Haridwar.')
const AIR = l('जॉली ग्रांट, देहरादून।', 'Jolly Grant, Dehradun.')
const BADRINATH = {
  name: l('बद्रीनाथ', 'Badrinath'),
  dist: l('पंच बद्री का मुख्य मंदिर', 'The chief Panch Badri temple'),
  text: l('बद्री विशाल, लगभग 3,133 मीटर पर। सर्दियों में कपाट बंद रहते हैं।', 'Badri Vishal, at about 3,133 m. The doors are closed in winter.'),
  photoOf: 'badrinath',
}

export const BADRI_TEMPLES: Temple[] = [
  {
    id: 'adi-badri',
    name: l('आदि बद्री', 'Adi Badri'),
    place: l('कर्णप्रयाग के पास, चमोली ज़िला, उत्तराखंड', 'Near Karnaprayag, Chamoli district, Uttarakhand'),
    state: 'UK',
    groups: ['pb'],
    tags: [l('पंच बद्री', 'Panch Badri')],
    importance: l(
      'सप्त बद्री में पहला बद्री। चांदपुर गढ़ी के पास लगभग 16 छोटे मंदिरों के समूह में से एक। गर्भगृह में काले पत्थर की लगभग एक मीटर ऊँची विष्णु प्रतिमा है, जिसके हाथों में गदा, कमल और चक्र हैं।',
      'The first of the Sapta Badri, one of a group of about 16 small shrines near Chandpur Garhi. The sanctum holds a black stone Vishnu of about one metre, holding a mace, a lotus and a discus.',
    ),
    katha: l(
      'परंपरा है कि जब मौसम के कारण बद्रीनाथ का मार्ग बंद रहता था, तब तीर्थयात्री यहीं भगवान विष्णु की पूजा करते थे। कहा जाता है कि जब बद्रीनाथ भविष्य बद्री में चले जाएँगे, तब आदि बद्री योग बद्री कहलाएगा।',
      'It is a tradition that when the way to Badrinath was closed by weather, pilgrims worshipped Vishnu here. It is said that when Badrinath moves to Bhavishya Badri, Adi Badri will be called Yog Badri.',
    ),
    history: l(
      'इस समूह के सात मंदिर गुप्त काल के उत्तरार्ध (5वीं से 8वीं सदी) में बने माने जाते हैं, और परंपरा आदि शंकराचार्य को इनका निर्माता बताती है। परिसर बहुत छोटा, लगभग 14 मीटर गुणा 30 मीटर है और मंदिरों की ऊँचाई 2 से 6 मीटर है। पुजारी दक्षिण भारत से आते हैं।',
      'Seven temples of this group are placed in the later Gupta period (5th to 8th century), and tradition credits Adi Shankaracharya with them. The complex is tiny, about 14 m by 30 m, and the temples are 2 to 6 m high. The priests come from south India.',
    ),
    todo: [
      l('आदि बद्री में विष्णु जी के दर्शन', 'Darshan of Vishnu at Adi Badri'),
      l('छोटे मंदिरों के पूरे समूह की परिक्रमा', 'Walk round the whole cluster of small temples'),
      l('पास की चांदपुर गढ़ी देखें', 'See the nearby Chandpur Garhi fort'),
    ],
    best: l('मार्च से जून और सितंबर से नवंबर। यह मंदिर बद्रीनाथ से नीचे है, इसलिए बर्फ़ का असर कम रहता है।', 'March to June and September to November. It lies below Badrinath, so snow matters less.'),
    rules: RULES,
    how: {
      road: l('कर्णप्रयाग से रानीखेत मार्ग पर लगभग 17 किमी; ऋषिकेश से कर्णप्रयाग लगभग 200 किमी।', 'About 17 km from Karnaprayag on the Ranikhet road; Karnaprayag is about 200 km from Rishikesh.'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Adi Badri Temple, Karnaprayag, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('चांदपुर गढ़ी', 'Chandpur Garhi'), dist: l('लगभग 3 किमी', 'About 3 km'), text: l('पहाड़ी पर पुराना किला, जिसे गढ़वाल के परमार राजाओं ने बनवाया था।', 'An old hilltop fort built by the Parmar kings of Garhwal.') },
      BADRINATH,
    ],
  },
  {
    id: 'vriddha-badri',
    name: l('वृद्ध बद्री', 'Vriddha Badri'),
    place: l('अणिमठ गाँव, जोशीमठ के पास, चमोली ज़िला', 'Animath village, near Joshimath, Chamoli district'),
    state: 'UK',
    groups: ['pb'],
    tags: [l('पंच बद्री', 'Panch Badri')],
    importance: l(
      'यहाँ भगवान विष्णु वृद्ध (बूढ़े) रूप में पूजे जाते हैं। यह मंदिर साल भर खुला रहता है और जोशीमठ से लगभग 7 किमी दूर है।',
      'Vishnu is worshipped here in the form of an old man (vriddha). The temple is open all year and lies about 7 km from Joshimath.',
    ),
    katha: l(
      'कथा है कि देवर्षि नारद यहाँ तप कर रहे थे और विष्णु जी ने उन्हें वृद्ध के रूप में दर्शन दिए। मान्यता है कि बद्रीनाथ की मूल प्रतिमा विश्वकर्मा ने बनाई थी और यहीं पूजी गई। कलियुग के आने पर विष्णु जी वहाँ से हट गए, और बाद में आदि शंकराचार्य को नारद कुंड से प्रतिमा मिली, जिसे उन्होंने बद्रीनाथ में स्थापित किया।',
      'It is told that the sage Narada was doing penance here and Vishnu appeared to him as an old man. The original Badrinath image is said to have been made by Vishwakarma and worshipped here. When Kali Yuga began Vishnu withdrew, and Adi Shankaracharya later found the image in Narad Kund and installed it at Badrinath.',
    ),
    history: l(
      'परंपरा के अनुसार आदि शंकराचार्य ने बद्रीनाथ में स्थापना से पहले यहाँ पूजा की थी। पुजारी दक्षिण भारत के ब्राह्मण हैं। मंदिर सादा और छोटा है।',
      'By tradition Adi Shankaracharya worshipped here before installing the image at Badrinath. The priests are Brahmins from south India. The shrine is simple and small.',
    ),
    todo: [
      l('वृद्ध बद्री में विष्णु जी के दर्शन', 'Darshan of Vishnu at Vriddha Badri'),
      l('बद्रीनाथ की मूल मूर्ति की कथा सुनें', 'Hear the story of the original Badrinath image'),
      l('जोशीमठ से बद्रीनाथ यात्रा के बीच रुककर दर्शन', 'A stop on the way from Joshimath to Badrinath'),
    ],
    best: l('साल भर खुला; मार्च से जून और सितंबर से नवंबर सबसे अच्छे।', 'Open all year; March to June and September to November are best.'),
    rules: RULES,
    how: {
      road: l('ऋषिकेश-बद्रीनाथ मार्ग पर जोशीमठ से लगभग 7 किमी। स्रोतों में इसे सड़क और 7 किमी पैदल दोनों बताया गया है, इसलिए वर्तमान रास्ता पूछ लें।', 'About 7 km from Joshimath on the Rishikesh-Badrinath road. Sources describe it as both a road drive and a 7 km walk, so ask about the current route.'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Vriddha Badri Temple, Animath, Joshimath',
    note: NOTE,
    nearby: [
      { name: l('भविष्य बद्री', 'Bhavishya Badri'), dist: l('पंच बद्री का अगला मंदिर', 'Another Panch Badri temple'), text: l('जोशीमठ के आगे सुभाईं गाँव में, घने जंगल के रास्ते से।', 'In Subhain village beyond Joshimath, reached through dense forest.'), photoOf: 'bhavishya-badri' },
      BADRINATH,
    ],
  },
  {
    id: 'bhavishya-badri',
    name: l('भविष्य बद्री', 'Bhavishya Badri'),
    place: l('सुभाईं गाँव, तपोवन के पास, चमोली ज़िला', 'Subhain village, near Tapovan, Chamoli district'),
    state: 'UK',
    groups: ['pb'],
    tags: [l('पंच बद्री', 'Panch Badri')],
    importance: l(
      'भविष्य का बद्री। लगभग 2,744 मीटर की ऊँचाई पर घने जंगल के बीच स्थित, कैलाश-मानसरोवर के पुराने यात्रा मार्ग पर। मान्यता है कि भविष्य में बद्रीनाथ की पूजा यहीं होगी।',
      'The Badri of the future, at about 2,744 m amid dense forest, on the old pilgrim route to Kailash and Manasarovar. It is believed that in the future Badrinath will be worshipped here.',
    ),
    katha: l(
      'मान्यता है कि जब संसार में पाप बहुत बढ़ जाएगा, तब नर और नारायण पर्वत बद्रीनाथ का मार्ग बंद कर देंगे। तब बद्रीनाथ भविष्य बद्री में प्रकट होंगे और यहीं पूजे जाएँगे। यह कथा जोशीमठ के नरसिंह मंदिर से भी जुड़ी है।',
      'The belief is that when evil grows too great in the world, the mountains of Nara and Narayana will block the way to Badrinath. Badrinath will then appear at Bhavishya Badri and be worshipped here. The story is also tied to the Narasimha temple in Joshimath.',
    ),
    history: l(
      'वर्तमान में यहाँ नरसिंह (विष्णु जी के सिंह-मुख अवतार) की प्रतिमा है। मंदिर धौली गंगा के किनारे पुराने तीर्थ मार्ग पर है।',
      'At present the shrine holds an image of Narasimha, the lion-faced avatar of Vishnu. It lies on the old pilgrim route along the Dhauli Ganga.',
    ),
    todo: [
      l('भविष्य बद्री के दर्शन', 'Darshan at Bhavishya Badri'),
      l('जंगल के रास्ते पैदल यात्रा', 'The forest walk to the temple'),
      l('जोशीमठ में नरसिंह मंदिर के दर्शन', 'Visit the Narasimha temple in Joshimath'),
    ],
    best: l('मई से अक्टूबर। बारिश और बर्फ़ में रास्ता कठिन हो जाता है।', 'May to October. The trail is hard in rain and snow.'),
    rules: RULES,
    how: {
      road: l('जोशीमठ से तपोवन होकर सलधार तक लगभग 19 किमी सड़क, फिर लगभग 6 किमी जंगल का पैदल रास्ता।', 'About 19 km by road from Joshimath via Tapovan to Saldhar, then about 6 km on a forest trail.'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Bhavishya Badri Temple, Subhain, Uttarakhand',
    note: NOTE,
    nearby: [
      { name: l('नरसिंह बद्री, जोशीमठ', 'Narasingh Badri, Joshimath'), dist: l('जोशीमठ में', 'In Joshimath'), text: l('शालिग्राम पत्थर की नरसिंह प्रतिमा। मान्यता है कि जब इसकी एक भुजा टूटेगी, तब बद्रीनाथ का मार्ग बंद होकर भविष्य बद्री चलेगा। सर्दियों में बद्रीनाथ के पुजारी यहाँ पूजा करते हैं।', 'A Shaligram stone Narasimha image. It is believed that when its one arm falls, the way to Badrinath will close and Bhavishya Badri will take over. In winter the priests of Badrinath worship here.') },
      BADRINATH,
    ],
  },
  {
    id: 'yogdhyan-badri',
    name: l('योगध्यान बद्री', 'Yogadhyan Badri'),
    place: l('पांडुकेश्वर, चमोली ज़िला, उत्तराखंड', 'Pandukeshwar, Chamoli district, Uttarakhand'),
    state: 'UK',
    groups: ['pb'],
    tags: [l('पंच बद्री', 'Panch Badri')],
    importance: l(
      'पांडुकेश्वर में लगभग 1,829 मीटर पर, ध्यान की मुद्रा में विष्णु जी का मंदिर, इसलिए नाम योगध्यान बद्री। मान्यता है कि यह मंदिर बद्रीनाथ जितना ही प्राचीन है। पुजारी दक्षिण भारत के भट्ट हैं।',
      'At Pandukeshwar, about 1,829 m, a temple of Vishnu in meditation, hence the name Yogadhyan Badri. It is believed to be as old as Badrinath. The priests are Bhatts from south India.',
    ),
    katha: l(
      'कथा है कि पांडवों के पिता राजा पांडु ने यहाँ विष्णु जी की तपस्या करके अपने पाप से मुक्ति पाई, और पांडवों का जन्म भी यहीं माना जाता है। कुरुक्षेत्र के बाद पांडव यहाँ प्रायश्चित के लिए आए, ऐसी मान्यता है। परंपरा में सर्दियों में बद्रीनाथ की उत्सव मूर्ति यहाँ लाई जाती है।',
      'The story is that Pandu, father of the Pandavas, did penance to Vishnu here and was freed of his sin, and the Pandavas are said to have been born here. After Kurukshetra the Pandavas are believed to have come here to atone. By tradition, Badrinath’s festival image is brought here for the winter.',
    ),
    history: l(
      'यहाँ मिले ताम्रपत्र कत्यूरी शासन के आरंभिक काल की ओर संकेत करते हैं। प्रतिमा ध्यान की मुद्रा में है; स्रोत उसे शालिग्राम पत्थर की बताते हैं, जबकि परंपरा में पांडु द्वारा कांस्य प्रतिमा की स्थापना भी कही जाती है।',
      'Copper plates found here point to early Katyuri rule. The image is in a meditative posture; sources describe it as of Shaligram stone, while tradition also speaks of a bronze image installed by Pandu.',
    ),
    todo: [
      l('योगध्यान बद्री में दर्शन', 'Darshan at Yogadhyan Badri'),
      l('बद्रीनाथ यात्रा में इसे साथ जोड़ें, यह मार्ग पर ही है', 'Add it to a Badrinath trip, since it lies on the way'),
      l('पांडु और पांडवों से जुड़ी कथा सुनें', 'Hear the story of Pandu and the Pandavas'),
    ],
    best: l('मई से अक्टूबर के आसपास; सर्दियों में बर्फ़ पड़ती है।', 'Around May to October; it snows here in winter.'),
    rules: RULES,
    how: {
      road: l('ऋषिकेश-बद्रीनाथ मार्ग पर बद्रीनाथ से लगभग 23 किमी पहले, गोविंद घाट के पास; ऋषिकेश से लगभग 277 किमी।', 'On the Rishikesh-Badrinath road about 23 km before Badrinath, near Govind Ghat; about 277 km from Rishikesh.'),
      rail: RAIL,
      air: AIR,
    },
    maps: 'Yogadhyan Badri Temple, Pandukeshwar',
    note: NOTE,
    nearby: [
      { name: l('गोविंद घाट', 'Govind Ghat'), dist: l('पास में', 'Close by'), text: l('हेमकुंड साहिब और फूलों की घाटी की यात्रा का आधार स्थान।', 'The base for the trips to Hemkund Sahib and the Valley of Flowers.') },
      BADRINATH,
    ],
  },
]
