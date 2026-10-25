/**
 * State-wise temples, south, centre and west: Madhya Pradesh, Gujarat, Telangana, Andhra Pradesh, Karnataka, Goa, Kerala,
 * Tamil Nadu, Puducherry. Shown on the state map. Facts cross-checked between Wikipedia, temple trusts and state tourism
 * pages. Many south Indian temples have dress codes and admit only Hindus to the sanctum; the pages say so. Distances are rounded.
 */
import { l, type Temple } from './templeTypes'

const ASK = l(
  'त्योहारों पर भीड़ बहुत होती है। दर्शन का समय और नियम बदलते रहते हैं, इसलिए मंदिर से पूछ लें।',
  'It is very crowded at festivals. Darshan timings and rules change, so check with the temple.',
)
const DRESS = l(
  'पारंपरिक कपड़े ज़रूरी हैं: पुरुष धोती या मुंडु (ऊपर का वस्त्र उतारकर या अंगवस्त्र के साथ), महिलाएँ साड़ी या सलवार-दुपट्टा। गर्भगृह में आमतौर पर सिर्फ़ हिंदुओं का प्रवेश है।',
  'Traditional dress is required: men in a dhoti or mundu (bare-chested or with an angavastram), women in a saree or salwar with dupatta. Usually only Hindus may enter the sanctum.',
)
const SHAKTI = l('शक्तिपीठ', 'Shakti Peeth')
const DIVYA = l('108 दिव्य देशम', '108 Divya Desam')

export const SOUTH_TEMPLES: Temple[] = [
  {
    id: 'ram-raja-orchha',
    name: l('राम राजा मंदिर, ओरछा', 'Ram Raja Temple, Orchha'),
    place: l('ओरछा, निवाड़ी ज़िला, मध्य प्रदेश', 'Orchha, Niwari district, Madhya Pradesh'),
    state: 'MP',
    groups: [],
    tags: [l('श्री राम', 'Shri Ram'), l('राजा के रूप में पूजा', 'Worshipped as king')],
    importance: l(
      'भारत का अनोखा मंदिर जहाँ श्री राम भगवान के साथ-साथ राजा के रूप में पूजे जाते हैं। रोज़ मध्य प्रदेश पुलिस उन्हें "गार्ड ऑफ़ ऑनर" देती है, और मंदिर एक महल में है। भक्त मानते हैं कि ओरछा के राजा आज भी राम राजा ही हैं।',
      'A unique temple where Shri Ram is worshipped as both God and king. Every day the Madhya Pradesh police give him a guard of honour, and the shrine is in a palace. Devotees hold that Orchha’s king is still Ram Raja.',
    ),
    katha: l(
      'लोककथा है कि रानी गणेश कुँवरि राम भक्त थीं और राजा मधुकर शाह कृष्ण भक्त। रानी अयोध्या गईं और कठिन तपस्या के बाद श्री राम ने बाल रूप में ओरछा आना स्वीकार किया, तीन शर्तों पर: वे सिर्फ़ पुष्य नक्षत्र में चलेंगे, ओरछा पहुँचकर वहाँ के राजा होंगे, और जहाँ पहली बार बैठाए जाएँगे, वहीं रहेंगे। चतुर्भुज मंदिर बन रहा था, इसलिए रानी ने उन्हें महल में रखा, और वे वहीं विराजमान हो गए।',
      'The folk story says Queen Ganesh Kunwari was devoted to Ram and King Madhukar Shah to Krishna. The queen went to Ayodhya, and after hard penance Ram agreed to come to Orchha as a child on three conditions: he would travel only under Pushya nakshatra, would become king of Orchha on arrival, and would stay wherever he was first seated. The Chaturbhuj temple was still being built, so the queen kept him in her palace, and there he stayed.',
    ),
    history: l(
      'परंपरा इस घटना को 16वीं सदी (लगभग 1575) की बताती है। रानी के महल को ही राम राजा मंदिर बना दिया गया, और उनके लिए बना ऊँचा चतुर्भुज मंदिर पास में खड़ा है।',
      'Tradition dates this to the 16th century (about 1575). The queen’s palace became the Ram Raja temple, and the tall Chaturbhuj temple built for him stands close by.',
    ),
    todo: [
      l('राम राजा के दर्शन और गार्ड ऑफ़ ऑनर', 'Darshan of Ram Raja and the guard of honour'),
      l('चतुर्भुज मंदिर, ओरछा क़िला और बेतवा किनारे की छतरियाँ', 'The Chaturbhuj temple, Orchha fort and the cenotaphs on the Betwa'),
    ],
    best: l('अक्टूबर से मार्च। राम नवमी और विवाह पंचमी पर विशेष उत्सव।', 'October to March. Special festivals at Ram Navami and Vivah Panchami.'),
    rules: l('दर्शन का समय दोपहर में बंद रहता है; समय पहले पता कर लें। मंदिर में फ़ोटो की मनाही हो सकती है।', 'The temple closes in the afternoon; check timings first. Photos may not be allowed inside.'),
    how: {
      road: l('झाँसी से लगभग 16 किमी।', 'About 16 km from Jhansi.'),
      rail: l('झाँसी जंक्शन; ओरछा स्टेशन पर कुछ गाड़ियाँ रुकती हैं।', 'Jhansi Junction; a few trains stop at Orchha station.'),
      air: l('ग्वालियर या खजुराहो हवाई अड्डा।', 'Gwalior or Khajuraho airport.'),
    },
    maps: 'Ram Raja Temple, Orchha',
    note: l('मूर्ति अयोध्या से कैसे आई, इस पर इतिहासकारों के मत अलग हैं; ऊपर की कथा स्थानीय परंपरा है।', 'Historians differ on how the image came from Ayodhya; the story above is local tradition.'),
    nearby: [
      { name: l('श्री राम जन्मभूमि मंदिर, अयोध्या', 'Shri Ram Janmabhoomi Mandir, Ayodhya'), dist: l('लगभग 450 किमी', 'About 450 km'), text: l('श्री राम की जन्मभूमि का नया मंदिर।', 'The new temple at Shri Ram’s birthplace.'), photoOf: 'ayodhya-ram-mandir' },
    ],
  },
  {
    id: 'ambaji',
    name: l('माँ अंबाजी', 'Maa Ambaji'),
    place: l('अंबाजी, बनासकांठा ज़िला, गुजरात', 'Ambaji, Banaskantha district, Gujarat'),
    state: 'GJ',
    groups: [],
    tags: [SHAKTI, l('अरासुरी अंबा', 'Arasuri Amba')],
    importance: l(
      'गुजरात का सबसे बड़ा शक्तिपीठ, अरावली की अरासुर पहाड़ियों में। यहाँ कोई मूर्ति नहीं है: गर्भगृह में श्री वीसा यंत्र की पूजा होती है, और उसे ऐसे सजाया जाता है कि माँ का रूप दिखे। मान्यता है कि यहाँ सती का हृदय गिरा था।',
      'Gujarat’s greatest Shakti Peeth, in the Arasur hills of the Aravallis. There is no idol: the sanctum holds the Shri Visa Yantra, adorned so that it appears as the Mother. Sati’s heart is believed to have fallen here.',
    ),
    katha: l(
      'पास के गब्बर पर्वत को माँ का मूल स्थान माना जाता है। एक कथा है कि श्री कृष्ण का मुंडन संस्कार यहीं हुआ, और दूसरी कि रुक्मिणी जी ने यहाँ माँ अंबा की पूजा की थी।',
      'The nearby Gabbar hill is held to be the Mother’s original seat. One story says Shri Krishna’s first head-shaving was done here, and another that Rukmini worshipped Maa Amba here.',
    ),
    history: l(
      'मंदिर बहुत प्राचीन माना जाता है; वर्तमान संगमरमर का मंदिर और सोने का शिखर हाल के दशकों में बने। प्रबंधन श्री आरासुरी अंबाजी माता देवस्थान ट्रस्ट करता है।',
      'The temple is held to be very old; the present marble temple and its gold spire were built in recent decades. The Shri Arasuri Ambaji Mata Devasthan Trust manages it.',
    ),
    todo: [
      l('वीसा यंत्र रूप में माँ के दर्शन', 'Darshan of the Mother as the Visa Yantra'),
      l('गब्बर पर्वत की चढ़ाई या रोपवे', 'Climb Gabbar hill or take the ropeway'),
      l('भाद्रपद पूर्णिमा का पदयात्रा मेला', 'The Bhadrapada Purnima walking pilgrimage fair'),
    ],
    best: l('अक्टूबर से मार्च। भाद्रपद पूर्णिमा और नवरात्र (गरबा) में बहुत भीड़।', 'October to March. Very crowded at Bhadrapada Purnima and Navratri (garba).'),
    rules: l('गर्भगृह में यंत्र की फ़ोटो लेना मना है। शालीन कपड़े पहनें।', 'Photographing the yantra is not allowed. Dress modestly.'),
    how: {
      road: l('पालनपुर से लगभग 65 किमी, माउंट आबू से लगभग 45 किमी।', 'About 65 km from Palanpur and 45 km from Mount Abu.'),
      rail: l('आबू रोड स्टेशन, लगभग 20 किमी।', 'Abu Road station, about 20 km.'),
      air: l('अहमदाबाद या उदयपुर हवाई अड्डा।', 'Ahmedabad or Udaipur airport.'),
    },
    site: 'https://ambajitemple.in',
    maps: 'Ambaji Temple, Banaskantha',
    note: l('शक्तिपीठों की सूचियाँ अलग-अलग ग्रंथों में अलग हैं; हृदय गिरने की मान्यता स्थानीय और सबसे आम है।', 'Lists of Shakti Peeths differ between texts; the heart tradition is the local and most common one.'),
    nearby: [
      { name: l('द्वारकाधीश, द्वारका', 'Dwarkadhish, Dwarka'), dist: l('लगभग 550 किमी', 'About 550 km'), text: l('चार धामों में से एक।', 'One of the Char Dham.'), photoOf: 'dwarkadhish' },
    ],
  },
  {
    id: 'yadadri',
    name: l('श्री लक्ष्मी नरसिंह स्वामी, यादगिरिगुट्टा', 'Sri Lakshmi Narasimha Swamy, Yadagirigutta'),
    place: l('यादगिरिगुट्टा, यादाद्री भुवनगिरि ज़िला, तेलंगाना', 'Yadagirigutta, Yadadri Bhuvanagiri district, Telangana'),
    state: 'TG',
    groups: [],
    tags: [l('नरसिंह', 'Narasimha'), l('विष्णु', 'Vishnu')],
    importance: l(
      'पहाड़ी पर भगवान नरसिंह का गुफा मंदिर, जहाँ वे ज्वाला, योगानंद और गंडभेरुंड रूपों में पूजे जाते हैं। तेलंगाना का सबसे प्रसिद्ध तीर्थ। 2016-2022 में पूरा मंदिर काले कृष्ण शिला पत्थर से फिर बना, बिना सीमेंट के।',
      'A hilltop cave shrine of Narasimha, worshipped here in his Jwala, Yogananda and Gandabherunda forms. Telangana’s best-known pilgrimage. Between 2016 and 2022 the whole temple was rebuilt in black Krishna Shila stone, without cement.',
    ),
    katha: l(
      'मान्यता है कि ऋष्यशृंग के पुत्र यादर्षि ने यहाँ तपस्या की, और प्रसन्न होकर भगवान नरसिंह ने यहाँ रूपों में दर्शन दिए। इसी से पहाड़ी का नाम यादगिरि पड़ा।',
      'It is believed that Yadarshi, son of the sage Rishyashringa, did penance here, and Narasimha, pleased, appeared to him in several forms. So the hill is called Yadagiri.',
    ),
    history: l(
      'पुराना गुफा मंदिर सदियों पुराना है। नया मंदिर 28 मार्च 2022 को खुला। 2014 में नाम यादाद्री रखा गया था; बाद में राज्य सरकार ने पुराना नाम यादगिरिगुट्टा लौटा दिया।',
      'The old cave shrine is centuries old. The new temple opened on 28 March 2022. It was renamed Yadadri in 2014; the state government later restored the old name Yadagirigutta.',
    ),
    todo: [
      l('गुफा में नरसिंह स्वामी के दर्शन', 'Darshan of Narasimha Swamy in the cave'),
      l('नए मंदिर का पत्थर का शिल्प', 'The stone carving of the new temple'),
    ],
    best: l('अक्टूबर से मार्च। फाल्गुन में ब्रह्मोत्सव और नरसिंह जयंती पर विशेष उत्सव।', 'October to March. Special festivals at the Phalgun Brahmotsavam and Narasimha Jayanti.'),
    rules: DRESS,
    how: {
      road: l('हैदराबाद से लगभग 60 किमी।', 'About 60 km from Hyderabad.'),
      rail: l('रायगिर (यादाद्री) स्टेशन, लगभग 6 किमी; भुवनगिरि भी पास है।', 'Raigir (Yadadri) station, about 6 km; Bhuvanagiri is also near.'),
      air: l('हैदराबाद हवाई अड्डा, लगभग 90 किमी।', 'Hyderabad airport, about 90 km.'),
    },
    maps: 'Sri Lakshmi Narasimha Swamy Temple, Yadagirigutta',
    nearby: [
      { name: l('भद्राचलम', 'Bhadrachalam'), dist: l('लगभग 300 किमी', 'About 300 km'), text: l('गोदावरी किनारे श्री सीता-रामचंद्र स्वामी।', 'Sri Sita-Ramachandra Swamy on the Godavari.'), photoOf: 'bhadrachalam' },
    ],
  },
  {
    id: 'bhadrachalam',
    name: l('श्री सीता रामचंद्र स्वामी, भद्राचलम', 'Sri Sita Ramachandra Swamy, Bhadrachalam'),
    place: l('गोदावरी के किनारे, भद्राचलम, भद्राद्री कोठागुडेम ज़िला, तेलंगाना', 'On the Godavari, Bhadrachalam, Bhadradri Kothagudem district, Telangana'),
    state: 'TG',
    groups: [],
    tags: [l('श्री राम', 'Shri Ram')],
    importance: l(
      'दक्षिण भारत का सबसे प्रसिद्ध राम मंदिर, जिसे "दक्षिण की अयोध्या" कहते हैं। यहाँ श्री राम चतुर्भुज रूप में, सीता जी और लक्ष्मण जी के साथ हैं। राम नवमी पर होने वाला सीता-राम कल्याणम (विवाह उत्सव) बहुत प्रसिद्ध है।',
      'South India’s most famous Ram temple, called "the Ayodhya of the south". Ram is here in a four-armed form with Sita and Lakshmana. The Sita-Rama Kalyanam (wedding festival) on Ram Navami is very famous.',
    ),
    katha: l(
      'मान्यता है कि वनवास में श्री राम पास के पर्णशाला में रहे। भद्र ऋषि (मेरु पर्वत के पुत्र) ने यहाँ तपस्या की और श्री राम ने उन्हें दर्शन दिए; पहाड़ी का नाम भद्राद्रि उन्हीं से पड़ा।',
      'It is believed Ram lived at nearby Parnashala during the exile. The sage Bhadra did penance here and Ram appeared to him; the hill, Bhadradri, is named after him.',
    ),
    history: l(
      '17वीं सदी में कंचर्ला गोपन्ना (भक्त रामदासु) ने, जो गोलकुंडा के तहसीलदार थे, राजस्व के धन से मंदिर बनवाया और इसके लिए कारागार भी भोगा। उनके कीर्तन आज भी गाए जाते हैं। परंपरा है कि राम-लक्ष्मण ने स्वयं आकर सुल्तान को धन लौटाया।',
      'In the 17th century Kancherla Gopanna (Bhakta Ramadasu), a Golconda revenue officer, built the temple with revenue money and was jailed for it. His kirtans are still sung. Tradition says Ram and Lakshmana themselves came and repaid the Sultan.',
    ),
    todo: [
      l('सीता-रामचंद्र स्वामी के दर्शन', 'Darshan of Sita-Ramachandra Swamy'),
      l('गोदावरी स्नान', 'Bathe in the Godavari'),
      l('पर्णशाला (लगभग 35 किमी)', 'Parnashala (about 35 km)'),
    ],
    best: l('अक्टूबर से मार्च। राम नवमी (कल्याणम) और वैकुंठ एकादशी पर बहुत भीड़।', 'October to March. Very crowded at Ram Navami (Kalyanam) and Vaikuntha Ekadashi.'),
    rules: DRESS,
    how: {
      road: l('हैदराबाद से लगभग 310 किमी, विजयवाड़ा से लगभग 180 किमी।', 'About 310 km from Hyderabad and 180 km from Vijayawada.'),
      rail: l('भद्राचलम रोड (कोठागुडेम) स्टेशन, लगभग 40 किमी।', 'Bhadrachalam Road (Kothagudem) station, about 40 km.'),
      air: l('राजमुंदरी या विजयवाड़ा हवाई अड्डा।', 'Rajahmundry or Vijayawada airport.'),
    },
    maps: 'Sri Sita Ramachandra Swamy Temple, Bhadrachalam',
    nearby: [
      { name: l('श्री लक्ष्मी नरसिंह स्वामी, यादगिरिगुट्टा', 'Sri Lakshmi Narasimha Swamy, Yadagirigutta'), dist: l('लगभग 300 किमी', 'About 300 km'), text: l('पहाड़ी पर नरसिंह का गुफा मंदिर।', 'The hilltop cave shrine of Narasimha.'), photoOf: 'yadadri' },
    ],
  },
  {
    id: 'tirumala',
    name: l('श्री वेंकटेश्वर स्वामी, तिरुमला', 'Sri Venkateswara Swamy, Tirumala'),
    place: l('तिरुमला पहाड़ियाँ, तिरुपति ज़िला, आंध्र प्रदेश', 'Tirumala hills, Tirupati district, Andhra Pradesh'),
    state: 'AP',
    groups: [],
    tags: [l('विष्णु', 'Vishnu'), l('बालाजी', 'Balaji'), DIVYA],
    importance: l(
      'दुनिया के सबसे अधिक दर्शन किए जाने वाले मंदिरों में से एक। सात पहाड़ियों (शेषाचलम) पर भगवान वेंकटेश्वर (बालाजी, श्रीनिवास, गोविंदा) विराजते हैं, जिन्हें कलियुग का देवता माना जाता है। भक्त यहाँ मुंडन कराकर बाल अर्पित करते हैं, और तिरुपति लड्डू प्रसिद्ध प्रसाद है।',
      'One of the most visited temples in the world. On the seven hills (Seshachalam) sits Venkateswara (Balaji, Srinivasa, Govinda), held to be the god of the Kali Yuga. Devotees offer their hair here, and the Tirupati laddu is the famous prasad.',
    ),
    katha: l(
      'कथा है कि भृगु ऋषि के अपमान पर माँ लक्ष्मी वैकुंठ छोड़कर धरती पर आईं, और उन्हें खोजते हुए भगवान विष्णु श्रीनिवास रूप में यहाँ आए। उन्होंने राजा आकाश राज की पुत्री पद्मावती से विवाह किया, और विवाह के लिए कुबेर से ऋण लिया। मान्यता है कि भक्तों का चढ़ावा उसी ऋण को चुकाने में जाता है।',
      'The story says that after Sage Bhrigu’s insult Lakshmi left Vaikuntha for earth, and Vishnu, searching for her, came here as Srinivasa. He married Padmavati, daughter of King Akasha Raja, and borrowed from Kubera for the wedding. Devotees’ offerings are believed to go towards repaying that loan.',
    ),
    history: l(
      'मंदिर का उल्लेख संगम साहित्य और आलवार संतों के भजनों में है। पल्लव, चोल, पांड्य और विजयनगर राजाओं ने इसे दान दिया; कृष्णदेव राय कई बार यहाँ आए। आज तिरुमला तिरुपति देवस्थानम (TTD) प्रबंधन करता है।',
      'The temple appears in Sangam literature and the hymns of the Alvars. Pallava, Chola, Pandya and Vijayanagara kings endowed it; Krishnadevaraya came several times. Today Tirumala Tirupati Devasthanams (TTD) manages it.',
    ),
    todo: [
      l('श्री वेंकटेश्वर के दर्शन', 'Darshan of Sri Venkateswara'),
      l('अलिपिरि या श्रीवारी मेट्टु से पैदल चढ़ाई', 'Walk up from Alipiri or Srivari Mettu'),
      l('तिरुचानूर में माँ पद्मावती के दर्शन', 'Darshan of Maa Padmavati at Tiruchanur'),
    ],
    best: l('सालभर; सितंबर से फ़रवरी मौसम अच्छा। ब्रह्मोत्सव (आश्विन) और वैकुंठ एकादशी पर बहुत भीड़।', 'All year; the weather is best from September to February. Very crowded at the Brahmotsavam (Ashwin) and Vaikuntha Ekadashi.'),
    rules: l('दर्शन टिकट और कमरे सिर्फ़ TTD की आधिकारिक वेबसाइट या ऐप से लें; दलालों से बचें। पारंपरिक कपड़े ज़रूरी हैं। मोबाइल और कैमरा मंदिर में मना हैं।', 'Book darshan tickets and rooms only on TTD’s official website or app; avoid touts. Traditional dress is required. Phones and cameras are not allowed in the temple.'),
    how: {
      road: l('तिरुपति से तिरुमला लगभग 22 किमी घाट रोड।', 'Tirumala is about 22 km up the ghat road from Tirupati.'),
      rail: l('तिरुपति स्टेशन; रेणिगुंटा जंक्शन भी पास है।', 'Tirupati station; Renigunta Junction is also near.'),
      air: l('तिरुपति (रेणिगुंटा) हवाई अड्डा, लगभग 40 किमी।', 'Tirupati (Renigunta) airport, about 40 km.'),
    },
    site: 'https://www.tirumala.org',
    maps: 'Sri Venkateswara Swamy Temple, Tirumala',
    nearby: [
      { name: l('श्रीकालहस्ती', 'Srikalahasti'), dist: l('लगभग 40 किमी', 'About 40 km'), text: l('पंच भूत स्थलों में वायु लिंग।', 'The wind linga among the Pancha Bhoota Sthalams.'), photoOf: 'srikalahasti' },
    ],
  },
  {
    id: 'kanaka-durga',
    name: l('माँ कनक दुर्गा, विजयवाड़ा', 'Maa Kanaka Durga, Vijayawada'),
    place: l('इंद्रकीलाद्रि पहाड़ी, कृष्णा नदी, विजयवाड़ा, आंध्र प्रदेश', 'Indrakeeladri hill, Krishna river, Vijayawada, Andhra Pradesh'),
    state: 'AP',
    groups: [],
    tags: [l('देवी', 'Devi')],
    importance: l(
      'कृष्णा नदी के किनारे इंद्रकीलाद्रि पहाड़ी पर माँ कनक दुर्गा का मंदिर। आंध्र प्रदेश का दूसरा सबसे बड़ा तीर्थ माना जाता है। दशहरे में माँ के अलग-अलग रूपों में अलंकार होते हैं।',
      'The temple of Maa Kanaka Durga on Indrakeeladri hill above the Krishna river, counted Andhra Pradesh’s second-largest pilgrimage. At Dasara the Mother is adorned in a different form each day.',
    ),
    katha: l(
      'मान्यता है कि माँ ने यहाँ महिषासुर का वध किया, और इंद्रकील ऋषि की तपस्या पर पहाड़ी पर निवास करने का वरदान दिया। एक और कथा है कि अर्जुन ने यहीं पाशुपतास्त्र के लिए शिव की तपस्या की, इसी से "विजय"-वाड़ा नाम माना जाता है।',
      'The Mother is believed to have slain Mahishasura here and, at the penance of the sage Indrakeela, agreed to dwell on the hill. Another story says Arjuna did penance to Shiva here for the Pashupata weapon, which is said to give "Vijaya"-wada its name.',
    ),
    history: l(
      'मंदिर बहुत पुराना माना जाता है और कई शिलालेख मिलते हैं। आदि शंकराचार्य से यहाँ श्री चक्र की स्थापना जोड़ी जाती है। अब इसका प्रबंधन आंध्र प्रदेश का देवस्थान विभाग करता है।',
      'The temple is held to be very old and has many inscriptions. The installation of a Sri Chakra here is linked to Adi Shankaracharya. The Andhra Pradesh endowments department now manages it.',
    ),
    todo: [
      l('माँ कनक दुर्गा और मल्लेश्वर स्वामी के दर्शन', 'Darshan of Maa Kanaka Durga and Malleswara Swamy'),
      l('दशहरे के अलंकार और कृष्णा नदी में तेप्पोत्सव', 'The Dasara adornments and the float festival on the Krishna'),
    ],
    best: l('अक्टूबर से मार्च। दशहरा (शरन्नवरात्रि) पर बहुत भीड़।', 'October to March. Very crowded at Dasara (Sharad Navratri).'),
    rules: DRESS,
    how: {
      road: l('विजयवाड़ा शहर में।', 'In Vijayawada.'),
      rail: l('विजयवाड़ा जंक्शन, लगभग 2 किमी।', 'Vijayawada Junction, about 2 km.'),
      air: l('विजयवाड़ा (गन्नवरम) हवाई अड्डा, लगभग 20 किमी।', 'Vijayawada (Gannavaram) airport, about 20 km.'),
    },
    maps: 'Kanaka Durga Temple, Vijayawada',
    nearby: [
      { name: l('श्रीशैलम मल्लिकार्जुन', 'Srisailam Mallikarjuna'), dist: l('लगभग 260 किमी', 'About 260 km'), text: l('ज्योतिर्लिंग और शक्तिपीठ दोनों।', 'Both a Jyotirlinga and a Shakti Peeth.'), photoOf: 'mallikarjuna' },
    ],
  },
  {
    id: 'udupi-krishna',
    name: l('श्री कृष्ण मठ, उडुपी', 'Sri Krishna Matha, Udupi'),
    place: l('उडुपी, कर्नाटक', 'Udupi, Karnataka'),
    state: 'KA',
    groups: [],
    tags: [l('कृष्ण', 'Krishna'), l('माध्व', 'Madhva')],
    importance: l(
      'बाल कृष्ण का प्रसिद्ध मंदिर, जिसकी स्थापना द्वैत दर्शन के आचार्य श्री मध्वाचार्य ने की। यहाँ कृष्ण के दर्शन सीधे नहीं, बल्कि नौ छेदों वाली चाँदी की खिड़की (नवग्रह किंडी) से होते हैं। मठ का भोजन प्रसाद भी प्रसिद्ध है।',
      'The famous temple of child Krishna, founded by Sri Madhvacharya, teacher of Dvaita philosophy. Krishna is seen not directly but through a silver window with nine holes (the Navagraha Kindi). The matha’s meal prasad is also famous.',
    ),
    katha: l(
      'परंपरा है कि भक्त कनकदास को नीची जाति का मानकर मंदिर में आने नहीं दिया गया। उन्होंने पीछे की दीवार के पास भजन गाया, तो दीवार में दरार पड़ी और मूर्ति उनकी ओर घूम गई। वह खिड़की "कनकन किंडी" कहलाती है।',
      'Tradition says the devotee Kanakadasa was kept out of the temple for his low caste. He sang outside the back wall; the wall cracked and the image turned to face him. That window is called "Kanakana Kindi".',
    ),
    history: l(
      'श्री मध्वाचार्य ने 13वीं सदी में मूर्ति स्थापित की; परंपरा है कि मूर्ति एक डूबे जहाज़ के गोपीचंदन के ढेले में मिली। पूजा आठ मठ (अष्ट मठ) बारी-बारी से दो-दो साल करते हैं, जिसे पर्याय कहते हैं।',
      'Sri Madhvacharya installed the image in the 13th century; tradition says it was found in a lump of gopichandan clay from a wrecked ship. Eight mathas (the Ashta Mathas) take turns running worship for two years each, called the Paryaya.',
    ),
    todo: [
      l('नवग्रह किंडी से श्री कृष्ण के दर्शन', 'Darshan of Krishna through the Navagraha Kindi'),
      l('कनकन किंडी और मध्व सरोवर', 'The Kanakana Kindi and Madhva Sarovara'),
      l('मठ का भोजन प्रसाद', 'The matha’s meal prasad'),
    ],
    best: l('अक्टूबर से मार्च। जन्माष्टमी और पर्याय उत्सव (हर दो साल, जनवरी) पर बहुत भीड़।', 'October to March. Very crowded at Janmashtami and the Paryaya festival (every two years, in January).'),
    rules: DRESS,
    how: {
      road: l('मंगलुरु से लगभग 60 किमी।', 'About 60 km from Mangaluru.'),
      rail: l('उडुपी स्टेशन (कोंकण रेलवे), लगभग 4 किमी।', 'Udupi station (Konkan Railway), about 4 km.'),
      air: l('मंगलुरु हवाई अड्डा, लगभग 55 किमी।', 'Mangaluru airport, about 55 km.'),
    },
    maps: 'Sri Krishna Matha, Udupi',
    nearby: [
      { name: l('महाबलेश्वर, गोकर्ण', 'Mahabaleshwar, Gokarna'), dist: l('लगभग 200 किमी', 'About 200 km'), text: l('रावण के आत्मलिंग वाला शिव मंदिर।', 'The Shiva temple of Ravana’s Atmalinga.'), photoOf: 'gokarna' },
    ],
  },
  {
    id: 'chamundeshwari',
    name: l('माँ चामुंडेश्वरी, मैसूरु', 'Maa Chamundeshwari, Mysuru'),
    place: l('चामुंडी पहाड़ी, मैसूरु, कर्नाटक', 'Chamundi hill, Mysuru, Karnataka'),
    state: 'KA',
    groups: [],
    tags: [SHAKTI, l('मैसूर दशहरा', 'Mysuru Dasara')],
    importance: l(
      'चामुंडी पहाड़ी पर माँ चामुंडेश्वरी का मंदिर, जो मैसूर राजवंश की कुलदेवी हैं। प्रसिद्ध मैसूर दशहरे में जंबू सवारी में माँ की मूर्ति सोने के हौदे में निकलती है। कई परंपराएँ इसे शक्तिपीठ मानती हैं, जहाँ सती के केश गिरे।',
      'The temple of Maa Chamundeshwari on Chamundi hill, family goddess of the Mysuru royal house. At the famous Mysuru Dasara her image rides in a golden howdah in the Jamboo Savari. Several traditions count it a Shakti Peeth where Sati’s hair fell.',
    ),
    katha: l(
      'मान्यता है कि माँ ने यहीं महिषासुर का वध किया, जिसके नाम पर मैसूर (महिषूरु) नगर का नाम पड़ा। पहाड़ी पर महिषासुर की बड़ी प्रतिमा भी है।',
      'It is believed the Mother slew Mahishasura here, after whom the city of Mysuru (Mahishuru) is named. There is a large statue of Mahishasura on the hill.',
    ),
    history: l(
      'मूल मंदिर 12वीं सदी के होयसल काल का माना जाता है। ऊँचा गोपुरम 17वीं-19वीं सदी में वोडेयार राजाओं ने बनवाया। 1659 में दोड्ड देवराज वोडेयार ने लगभग 1,000 सीढ़ियाँ बनवाईं, जिनके रास्ते में एक पत्थर से बना विशाल नंदी है।',
      'The original shrine is thought to be from the 12th-century Hoysala period. The tall gopuram was added by the Wodeyar kings in the 17th to 19th centuries. In 1659 Dodda Devaraja Wodeyar built about 1,000 steps, with a huge monolithic Nandi on the way.',
    ),
    todo: [
      l('माँ चामुंडेश्वरी के दर्शन', 'Darshan of Maa Chamundeshwari'),
      l('सीढ़ियों से चढ़ाई और विशाल नंदी', 'Climb the steps and see the giant Nandi'),
      l('दशहरा और जंबू सवारी', 'Dasara and the Jamboo Savari'),
    ],
    best: l('अक्टूबर से फ़रवरी। दशहरा और आषाढ़ के शुक्रवारों को बहुत भीड़।', 'October to February. Very crowded at Dasara and on the Fridays of Ashadha.'),
    rules: ASK,
    how: {
      road: l('मैसूरु शहर से लगभग 13 किमी; बेंगलुरु से लगभग 150 किमी।', 'About 13 km from Mysuru city; about 150 km from Bengaluru.'),
      rail: l('मैसूरु जंक्शन।', 'Mysuru Junction.'),
      air: l('मैसूरु हवाई अड्डा; बेंगलुरु बड़ा विकल्प।', 'Mysuru airport; Bengaluru is the larger option.'),
    },
    maps: 'Chamundeshwari Temple, Mysuru',
    note: l('शक्तिपीठों की सूचियाँ अलग-अलग ग्रंथों में अलग हैं।', 'Lists of Shakti Peeths differ between texts.'),
    nearby: [
      { name: l('श्रीरंगपट्टण', 'Srirangapatna'), dist: l('लगभग 20 किमी', 'About 20 km'), text: l('कावेरी के द्वीप पर श्री रंगनाथ स्वामी का प्राचीन मंदिर।', 'The old temple of Sri Ranganatha on an island in the Kaveri.') },
    ],
  },
  {
    id: 'gokarna',
    name: l('महाबलेश्वर मंदिर, गोकर्ण', 'Mahabaleshwar Temple, Gokarna'),
    place: l('गोकर्ण, उत्तर कन्नड़ ज़िला, कर्नाटक', 'Gokarna, Uttara Kannada district, Karnataka'),
    state: 'KA',
    groups: [],
    tags: [l('शिव', 'Shiva'), l('आत्मलिंग', 'Atmalinga')],
    importance: l(
      'अरब सागर के किनारे भगवान शिव के आत्मलिंग का मंदिर, जिसे "दक्षिण की काशी" कहते हैं। भक्त समुद्र में स्नान करके दर्शन करते हैं। लिंग का सिर्फ़ ऊपरी भाग दिखता है, जो गाय के कान जैसे आकार के गड्ढे में है।',
      'The temple of Shiva’s Atmalinga on the Arabian Sea, called "the Kashi of the south". Devotees bathe in the sea before darshan. Only the top of the linga is seen, in a hollow shaped like a cow’s ear.',
    ),
    katha: l(
      'रावण ने कठोर तपस्या से शिव से आत्मलिंग माँगा, इस शर्त पर कि उसे कहीं धरती पर न रखे। देवताओं के कहने पर गणेश जी बालक बनकर आए; संध्या के समय रावण ने लिंग उन्हें थमाया, और गणेश जी ने उसे यहीं धरती पर रख दिया। रावण ने उखाड़ने की कोशिश की तो लिंग गाय के कान जैसा मुड़ गया, इसी से नाम गोकर्ण।',
      'Ravana won Shiva’s Atmalinga by hard penance, on the condition he never set it on the ground. At the gods’ request Ganesha came as a boy; at dusk Ravana handed him the linga, and Ganesha set it down here. When Ravana tried to pull it out it twisted like a cow’s ear, hence the name Gokarna.',
    ),
    history: l(
      'मंदिर का उल्लेख पुराणों और महाभारत में है। वर्तमान मंदिर द्रविड़ शैली का है; इसके प्रबंधन पर कई वर्षों से अदालत में मामले चले हैं।',
      'The temple is mentioned in the Puranas and the Mahabharata. The present temple is in the Dravidian style; its management has been in the courts for many years.',
    ),
    todo: [
      l('कोटि तीर्थ या समुद्र में स्नान, फिर आत्मलिंग के दर्शन', 'Bathe at Koti Tirtha or the sea, then darshan of the Atmalinga'),
      l('महागणपति मंदिर (जिन्होंने लिंग रखा)', 'The Maha Ganapati temple (of the Ganesha who set the linga down)'),
    ],
    best: l('अक्टूबर से मार्च। महाशिवरात्रि पर बड़ा रथोत्सव। बरसात में समुद्र तेज़ रहता है।', 'October to March. A big chariot festival at Mahashivratri. The sea is rough in the monsoon.'),
    rules: DRESS,
    how: {
      road: l('कुमटा से लगभग 30 किमी, कारवार से लगभग 60 किमी।', 'About 30 km from Kumta and 60 km from Karwar.'),
      rail: l('गोकर्ण रोड स्टेशन (कोंकण रेलवे), लगभग 10 किमी।', 'Gokarna Road station (Konkan Railway), about 10 km.'),
      air: l('गोवा (डाबोलिम) हवाई अड्डा, लगभग 140 किमी।', 'Goa (Dabolim) airport, about 140 km.'),
    },
    maps: 'Mahabaleshwar Temple, Gokarna',
    nearby: [
      { name: l('श्री कृष्ण मठ, उडुपी', 'Sri Krishna Matha, Udupi'), dist: l('लगभग 200 किमी', 'About 200 km'), text: l('मध्वाचार्य के स्थापित बाल कृष्ण।', 'Child Krishna installed by Madhvacharya.'), photoOf: 'udupi-krishna' },
    ],
  },
  {
    id: 'mangueshi',
    name: l('श्री मंगेशी मंदिर', 'Shri Mangueshi Temple'),
    place: l('मंगेशी, प्रियोल, फोंडा, उत्तर गोवा', 'Mangeshi, Priol, Ponda, North Goa'),
    state: 'GA',
    groups: [],
    tags: [l('शिव', 'Shiva')],
    importance: l(
      'गोवा का सबसे बड़ा और प्रसिद्ध हिंदू मंदिर, भगवान शिव के मंगेश रूप को समर्पित। यह गौड़ सारस्वत ब्राह्मणों के कई परिवारों के कुलदेवता हैं। मंदिर का सात मंज़िला दीपस्तंभ गोवा की पहचान है।',
      'Goa’s largest and best-known Hindu temple, dedicated to Shiva as Mangesh. He is the family deity of many Gaud Saraswat Brahmin families. The temple’s seven-storeyed lamp tower is an emblem of Goa.',
    ),
    katha: l(
      'कथा है कि शिव ने बाघ का रूप लेकर पार्वती को डराया; पार्वती ने घबराकर "त्राहि माम् गिरीश" (हे पर्वतों के स्वामी, मेरी रक्षा करो) कहा। "माम् गिरीश" से नाम मंगिरीश, फिर मंगेश बना।',
      'The story is that Shiva took the form of a tiger to frighten Parvati; startled, she cried "Trahi mam Girisha" (Lord of the mountains, protect me). From "mam Girisha" came Mangirisha, and then Mangesh.',
    ),
    history: l(
      'मूल मंदिर कुठ्ठाली (कोर्टालिम) में था। 1560 के आसपास पुर्तगाली शासन के धार्मिक दमन से बचाने के लिए लिंग को फोंडा के प्रियोल गाँव लाया गया, जो तब हिंदू राजाओं के अधीन था। वर्तमान मंदिर 18वीं सदी में बना और बाद में बढ़ाया गया।',
      'The original temple was at Kutthali (Cortalim). Around 1560, to save it from religious persecution under Portuguese rule, the linga was moved to Priol in Ponda, then under Hindu rulers. The present temple was built in the 18th century and later enlarged.',
    ),
    todo: [
      l('श्री मंगेश के दर्शन', 'Darshan of Shri Mangesh'),
      l('दीपस्तंभ और मंदिर का सरोवर', 'The lamp tower and the temple tank'),
      l('पास का श्री शांतादुर्गा मंदिर, कवळे', 'The nearby Shri Shantadurga temple, Kavlem'),
    ],
    best: l('अक्टूबर से मार्च। माघ में जात्रा और महाशिवरात्रि पर उत्सव।', 'October to March. The jatra in Magha and festivals at Mahashivratri.'),
    rules: l('शालीन कपड़े ज़रूरी हैं (कंधे और घुटने ढके)। गर्भगृह में फ़ोटो मना है।', 'Modest dress is required (shoulders and knees covered). No photos in the sanctum.'),
    how: {
      road: l('पणजी से लगभग 22 किमी, फोंडा से लगभग 7 किमी।', 'About 22 km from Panaji and 7 km from Ponda.'),
      rail: l('मडगाँव या करमली स्टेशन।', 'Madgaon or Karmali station.'),
      air: l('गोवा (डाबोलिम) हवाई अड्डा, लगभग 30 किमी; मोपा भी विकल्प।', 'Goa (Dabolim) airport, about 30 km; Mopa is also an option.'),
    },
    maps: 'Shri Mangueshi Temple, Ponda',
    nearby: [
      { name: l('श्री शांतादुर्गा, कवळे', 'Shri Shantadurga, Kavlem'), dist: l('लगभग 10 किमी', 'About 10 km'), text: l('शिव और विष्णु में शांति कराने वाली माँ दुर्गा।', 'Maa Durga who made peace between Shiva and Vishnu.') },
    ],
  },
  {
    id: 'sabarimala',
    name: l('श्री अय्यप्पा, सबरीमला', 'Sri Ayyappa, Sabarimala'),
    place: l('सबरीमला, पत्तनमतिट्टा ज़िला, केरल', 'Sabarimala, Pathanamthitta district, Kerala'),
    state: 'KL',
    groups: [],
    tags: [l('अय्यप्पा', 'Ayyappa'), l('मंडल व्रत', 'Mandala vrat')],
    importance: l(
      'पश्चिमी घाट के घने जंगल में भगवान अय्यप्पा (हरिहर पुत्र, यानी शिव और मोहिनी रूप विष्णु के पुत्र) का मंदिर। हर साल लाखों भक्त 41 दिन का व्रत रखकर, काले कपड़े पहनकर और सिर पर इरुमुडि (पूजा की पोटली) लेकर पैदल पहुँचते हैं। "स्वामिये शरणम् अय्यप्पा" यहाँ का घोष है।',
      'The temple of Lord Ayyappa (Harihara Putra, son of Shiva and Vishnu as Mohini) deep in the Western Ghats forest. Every year lakhs of devotees keep a 41-day vow, wear black and walk up carrying the irumudi (offering bundle) on their heads. "Swamiye Saranam Ayyappa" is the call here.',
    ),
    katha: l(
      'कथा है कि पंतलम के राजा को जंगल में एक बालक मिला, जिसका नाम मणिकंठन रखा गया। बड़े होकर उन्होंने असुरी महिषी का वध किया और फिर सबरीमला में ध्यान में बैठ गए। यहाँ वे नैष्ठिक ब्रह्मचारी के रूप में पूजे जाते हैं। 18 पवित्र सीढ़ियाँ (पतिनेट्टाम पडि) व्रत रखने वाले ही चढ़ते हैं।',
      'The story says the king of Pandalam found a baby in the forest, named Manikandan. Grown up, he slew the demoness Mahishi and then sat in meditation at Sabarimala. Here he is worshipped as an eternal celibate (naishtika brahmachari). Only those keeping the vow climb the 18 holy steps (Pathinettam Padi).',
    ),
    history: l(
      'मंदिर बहुत पुराना है, और 1950 में आग लगने के बाद फिर बना। त्रावणकोर देवस्वम बोर्ड प्रबंधन करता है। मंदिर साल में कुछ ही समय खुलता है: मंडल पूजा (नवंबर-दिसंबर), मकरविलक्कु (14 जनवरी के आसपास) और हर मलयालम महीने के पहले दिनों में।',
      'The temple is very old and was rebuilt after a fire in 1950. The Travancore Devaswom Board manages it. It opens only at certain times: the Mandala Puja (November-December), Makaravilakku (around 14 January) and the first days of each Malayalam month.',
    ),
    todo: [
      l('41 दिन का मंडल व्रत और इरुमुडि लेकर यात्रा', 'Keep the 41-day Mandala vow and travel with the irumudi'),
      l('पंपा से लगभग 5 किमी पैदल चढ़ाई', 'Walk up about 5 km from Pamba'),
      l('मकरविलक्कु के दिन मकर ज्योति के दर्शन', 'See the Makara Jyothi on Makaravilakku day'),
    ],
    best: l('सिर्फ़ खुलने के दिनों में; मुख्य समय नवंबर से जनवरी। तारीख़ें देवस्वम बोर्ड घोषित करता है।', 'Only on opening days; the main season is November to January. The Devaswom Board announces the dates.'),
    rules: l('दर्शन के लिए केरल पुलिस के वर्चुअल क्यू पोर्टल पर पहले से बुकिंग करनी होती है। परंपरा के अनुसार 10 से 50 वर्ष की महिलाएँ यह यात्रा नहीं करतीं; इस विषय पर सर्वोच्च न्यायालय में मामला विचाराधीन है। पहाड़ी रास्ते पर पानी और ज़रूरी दवाएँ रखें।', 'Darshan must be booked in advance on the Kerala Police virtual queue portal. By tradition women aged 10 to 50 do not make this pilgrimage; the matter is pending before the Supreme Court. Carry water and medicines on the hill path.'),
    how: {
      road: l('पंपा तक बस या गाड़ी; पत्तनमतिट्टा से लगभग 70 किमी।', 'Bus or car to Pamba; about 70 km from Pathanamthitta.'),
      rail: l('चेंगन्नूर या कोट्टयम स्टेशन, लगभग 90 किमी।', 'Chengannur or Kottayam station, about 90 km.'),
      air: l('कोच्चि या तिरुवनंतपुरम हवाई अड्डा, लगभग 160 किमी।', 'Kochi or Thiruvananthapuram airport, about 160 km.'),
    },
    site: 'https://sabarimala.kerala.gov.in',
    maps: 'Sabarimala Sree Dharma Sastha Temple',
    nearby: [
      { name: l('श्री पद्मनाभस्वामी, तिरुवनंतपुरम', 'Sri Padmanabhaswamy, Thiruvananthapuram'), dist: l('लगभग 180 किमी', 'About 180 km'), text: l('अनंत शेष पर लेटे भगवान विष्णु।', 'Vishnu reclining on the serpent Ananta.'), photoOf: 'padmanabhaswamy' },
    ],
  },
  {
    id: 'guruvayur',
    name: l('श्री गुरुवायूरप्पन, गुरुवायूर', 'Sri Guruvayurappan, Guruvayur'),
    place: l('गुरुवायूर, त्रिशूर ज़िला, केरल', 'Guruvayur, Thrissur district, Kerala'),
    state: 'KL',
    groups: [],
    tags: [l('कृष्ण', 'Krishna'), l('विष्णु', 'Vishnu')],
    importance: l(
      'केरल का सबसे प्रसिद्ध कृष्ण मंदिर, जिसे "दक्षिण की द्वारका" कहते हैं। यहाँ भगवान चतुर्भुज विष्णु रूप में हैं पर बाल कृष्ण के रूप में पूजे जाते हैं। यहाँ बच्चों का अन्नप्राशन, तुलाभारम (भक्त के वज़न के बराबर दान) और विवाह बहुत होते हैं।',
      'Kerala’s most famous Krishna temple, called "the Dwarka of the south". The Lord is in a four-armed Vishnu form but worshipped as child Krishna. Children’s first-rice ceremonies, thulabharam (offering one’s weight in goods) and weddings are very common here.',
    ),
    katha: l(
      'मान्यता है कि यह मूर्ति द्वारका में स्वयं कृष्ण ने पूजी थी। द्वारका के डूबने पर देवगुरु बृहस्पति (गुरु) और वायु देव ने इसे बचाकर यहाँ स्थापित किया, इसी से नाम गुरु-वायु-ऊर। नारायणीयम की रचना मेल्पत्तूर नारायण भट्टतिरि ने यहीं की।',
      'The image is believed to have been worshipped by Krishna himself at Dwarka. When Dwarka sank, Brihaspati (Guru) and Vayu rescued it and installed it here, hence Guru-Vayu-ur. Melpathur Narayana Bhattathiri composed the Narayaneeyam here.',
    ),
    history: l(
      'मंदिर के लिखित उल्लेख 16वीं सदी से मिलते हैं, पर परंपरा इसे बहुत पुराना मानती है। 1931-32 के गुरुवायूर सत्याग्रह के बाद 1947 में सभी जातियों के हिंदुओं के लिए द्वार खुले। गुरुवायूर देवस्वम प्रबंधन करता है, जिसके पास दर्जनों हाथी हैं (पुन्नत्तूर कोट्टा)।',
      'Written records of the temple go back to the 16th century, though tradition holds it far older. After the Guruvayur Satyagraha of 1931-32, it opened to Hindus of all castes in 1947. The Guruvayur Devaswom manages it and keeps dozens of elephants (Punnathur Kotta).',
    ),
    todo: [
      l('निर्माल्य (सुबह 3 बजे) या किसी भी पूजा पर दर्शन', 'Darshan at nirmalyam (3 am) or any puja'),
      l('तुलाभारम या अन्नप्राशन', 'Thulabharam or a first-rice ceremony'),
      l('पुन्नत्तूर कोट्टा का हाथी शिविर', 'The Punnathur Kotta elephant camp'),
    ],
    best: l('सालभर; अक्टूबर से मार्च मौसम अच्छा। एकादशी (वृश्चिक मास) और विषु पर बहुत भीड़।', 'All year; the weather is best from October to March. Very crowded at Guruvayur Ekadashi (Vrischikam) and Vishu.'),
    rules: l('सिर्फ़ हिंदुओं का प्रवेश है। पुरुष मुंडु पहनें और ऊपर का वस्त्र उतारें; महिलाएँ साड़ी या सलवार-दुपट्टा पहनें। मोबाइल अंदर मना है।', 'Only Hindus may enter. Men wear a mundu and go bare-chested; women wear a saree or salwar with dupatta. Phones are not allowed inside.'),
    how: {
      road: l('त्रिशूर से लगभग 28 किमी।', 'About 28 km from Thrissur.'),
      rail: l('गुरुवायूर स्टेशन, पैदल दूरी पर; त्रिशूर बड़ा स्टेशन।', 'Guruvayur station, within walking distance; Thrissur is the main station.'),
      air: l('कोच्चि हवाई अड्डा, लगभग 80 किमी।', 'Kochi airport, about 80 km.'),
    },
    site: 'https://guruvayurdevaswom.in',
    maps: 'Guruvayur Sri Krishna Temple',
    nearby: [
      { name: l('श्री पद्मनाभस्वामी, तिरुवनंतपुरम', 'Sri Padmanabhaswamy, Thiruvananthapuram'), dist: l('लगभग 280 किमी', 'About 280 km'), text: l('केरल का प्रसिद्ध विष्णु मंदिर।', 'Kerala’s famous Vishnu temple.'), photoOf: 'padmanabhaswamy' },
    ],
  },
  {
    id: 'padmanabhaswamy',
    name: l('श्री पद्मनाभस्वामी मंदिर', 'Sri Padmanabhaswamy Temple'),
    place: l('पूर्वी क़िला, तिरुवनंतपुरम, केरल', 'East Fort, Thiruvananthapuram, Kerala'),
    state: 'KL',
    groups: [],
    tags: [l('विष्णु', 'Vishnu'), DIVYA],
    importance: l(
      'भगवान विष्णु अनंत शेषनाग पर योगनिद्रा में लेटे हैं; लगभग 18 फ़ुट की मूर्ति तीन द्वारों से देखी जाती है: पहले से मुख, दूसरे से नाभि-कमल पर ब्रह्मा, तीसरे से चरण। तिरुवनंतपुरम (अनंत का नगर) का नाम इन्हीं से है। यह 108 दिव्य देशमों में से एक है।',
      'Vishnu reclines in yoga-nidra on the serpent Ananta; the image, about 18 ft long, is seen through three doors: the face through the first, Brahma on the navel-lotus through the second, the feet through the third. Thiruvananthapuram (city of Ananta) is named after him. It is one of the 108 Divya Desams.',
    ),
    katha: l(
      'परंपरा है कि दिवाकर मुनि (या बिल्वमंगल स्वामी) को एक नटखट बालक मिला, जो एक पेड़ में छिप गया। पेड़ गिरा तो वह अनंतशयन विष्णु के रूप में बदल गया, जिसका विस्तार मीलों तक था। मुनि की प्रार्थना पर भगवान ने छोटा रूप लिया, जिसे तीन द्वारों से देखा जा सके।',
      'Tradition says the sage Divakara (or Bilvamangala Swami) met a playful boy who hid in a tree. The tree fell and became Vishnu reclining on Ananta, stretching for miles. At the sage’s prayer the Lord took a smaller form, one that could be seen through three doors.',
    ),
    history: l(
      'मंदिर का उल्लेख आलवार संतों के भजनों में है। 1750 में त्रावणकोर के राजा मार्तंड वर्मा ने राज्य भगवान पद्मनाभ को अर्पित कर दिया और स्वयं को उनका दास (पद्मनाभदास) कहा। 2011 में मंदिर के तहख़ानों में अपार ख़ज़ाना मिला। 2020 के सर्वोच्च न्यायालय के निर्णय के बाद प्रबंधन में त्रावणकोर राजपरिवार की भूमिका बनी रही।',
      'The temple is praised in the hymns of the Alvars. In 1750 King Marthanda Varma of Travancore dedicated his kingdom to Padmanabha and called himself the Lord’s servant (Padmanabhadasa). In 2011 immense treasure was found in the temple’s vaults. After the Supreme Court’s 2020 ruling the Travancore royal family kept its role in the management.',
    ),
    todo: [
      l('तीन द्वारों से अनंतशयन के दर्शन', 'Darshan of the reclining Lord through the three doors'),
      l('पद्मतीर्थ सरोवर और पत्थर के गलियारे', 'The Padma Theertham tank and the stone corridors'),
    ],
    best: l('अक्टूबर से मार्च। अल्पशि और पैंकुनि उत्सव (साल में दो बार) पर आराट्टु शोभायात्रा।', 'October to March. The Aarattu procession at the Alpashi and Painkuni festivals (twice a year).'),
    rules: l('सिर्फ़ हिंदुओं का प्रवेश है। सख़्त ड्रेस कोड: पुरुष मुंडु (ऊपर का वस्त्र नहीं), महिलाएँ साड़ी या मुंडु-नेरियतु (मंदिर के पास किराए पर मिल जाते हैं)। मोबाइल और कैमरा मना हैं।', 'Only Hindus may enter. Strict dress code: men in a mundu (bare-chested), women in a saree or mundu-neriyathu (available for hire near the temple). Phones and cameras are not allowed.'),
    how: {
      road: l('तिरुवनंतपुरम शहर के बीच में।', 'In the centre of Thiruvananthapuram.'),
      rail: l('तिरुवनंतपुरम सेंट्रल, लगभग 1 किमी।', 'Thiruvananthapuram Central, about 1 km.'),
      air: l('तिरुवनंतपुरम हवाई अड्डा, लगभग 6 किमी।', 'Thiruvananthapuram airport, about 6 km.'),
    },
    maps: 'Sree Padmanabhaswamy Temple, Thiruvananthapuram',
    nearby: [
      { name: l('श्री अय्यप्पा, सबरीमला', 'Sri Ayyappa, Sabarimala'), dist: l('लगभग 180 किमी', 'About 180 km'), text: l('पश्चिमी घाट के जंगल में अय्यप्पा का मंदिर।', 'Ayyappa’s temple in the Western Ghats forest.'), photoOf: 'sabarimala' },
      { name: l('रामेश्वरम', 'Rameshwaram'), dist: l('लगभग 400 किमी', 'About 400 km'), text: l('ज्योतिर्लिंग और चार धाम।', 'A Jyotirlinga and one of the Char Dham.'), photoOf: 'rameshwaram' },
    ],
  },
  {
    id: 'meenakshi',
    name: l('माँ मीनाक्षी सुंदरेश्वर, मदुरै', 'Maa Meenakshi Sundareswarar, Madurai'),
    place: l('मदुरै, तमिलनाडु', 'Madurai, Tamil Nadu'),
    state: 'TN',
    groups: [],
    tags: [l('देवी', 'Devi'), l('शिव', 'Shiva')],
    importance: l(
      'माँ मीनाक्षी (पार्वती) और सुंदरेश्वर (शिव) का विशाल मंदिर, जिसके चारों ओर रंग-बिरंगी हज़ारों मूर्तियों वाले 14 गोपुरम हैं। मदुरै शहर इसी मंदिर के चारों ओर बसा है। यहाँ पहले माँ मीनाक्षी के दर्शन करने की परंपरा है।',
      'The vast temple of Maa Meenakshi (Parvati) and Sundareswarar (Shiva), ringed by 14 gopurams covered with thousands of colourful figures. The city of Madurai grew up around it. The custom is to have darshan of Meenakshi first.',
    ),
    katha: l(
      'कथा है कि पांड्य राजा मलयध्वज की यज्ञ-अग्नि से तीन स्तनों वाली कन्या प्रकट हुई, और कहा गया कि पति को देखते ही तीसरा स्तन लुप्त होगा। मीनाक्षी ने राज्य संभाला और दिग्विजय में कैलाश पहुँचीं; शिव को देखते ही वैसा हुआ। फिर शिव सुंदरेश्वर बनकर मदुरै आए और दोनों का विवाह हुआ, जिसे विष्णु जी ने कराया।',
      'The story says a girl with three breasts rose from the sacrificial fire of the Pandya king Malayadhwaja, and it was foretold that the third would vanish when she saw her husband. Meenakshi ruled the kingdom and, on her conquests, reached Kailash; on seeing Shiva it happened. Shiva then came to Madurai as Sundareswarar and they were married, with Vishnu giving the bride away.',
    ),
    history: l(
      'मंदिर का उल्लेख संगम साहित्य में है। 14वीं सदी में (1310 के आसपास) मलिक काफ़ूर के आक्रमण में यह लूटा और टूटा। 16वीं-17वीं सदी में नायक राजाओं, ख़ासकर विश्वनाथ नायक और तिरुमलै नायक, ने इसे आज के रूप में बनवाया।',
      'The temple appears in Sangam literature. In the 14th century (around 1310) it was plundered and damaged in Malik Kafur’s invasion. In the 16th and 17th centuries the Nayak kings, especially Vishwanatha Nayak and Tirumalai Nayak, built it in its present form.',
    ),
    todo: [
      l('माँ मीनाक्षी और सुंदरेश्वर के दर्शन', 'Darshan of Maa Meenakshi and Sundareswarar'),
      l('हज़ार स्तंभों का मंडप और स्वर्ण कमल सरोवर', 'The Hall of a Thousand Pillars and the Golden Lotus tank'),
      l('रात की पल्लियरै (शयन) पूजा', 'The night palliyarai (bedtime) puja'),
    ],
    best: l('अक्टूबर से मार्च। चित्तिरै उत्सव (अप्रैल-मई) में मीनाक्षी कल्याणम पर बहुत भीड़।', 'October to March. Very crowded at the Meenakshi Kalyanam in the Chithirai festival (April-May).'),
    rules: l('शालीन पारंपरिक कपड़े ज़रूरी हैं (कंधे और घुटने ढके)। मोबाइल अंदर नहीं ले जा सकते; जमा करने की सुविधा है। गर्भगृह में आमतौर पर सिर्फ़ हिंदुओं का प्रवेश है।', 'Modest traditional dress is required (shoulders and knees covered). Phones cannot be taken inside; there is a deposit counter. Usually only Hindus may enter the sanctum.'),
    how: {
      road: l('मदुरै शहर के बीच में।', 'In the centre of Madurai.'),
      rail: l('मदुरै जंक्शन, लगभग 1.5 किमी।', 'Madurai Junction, about 1.5 km.'),
      air: l('मदुरै हवाई अड्डा, लगभग 12 किमी।', 'Madurai airport, about 12 km.'),
    },
    site: 'https://maduraimeenakshi.hrce.tn.gov.in',
    maps: 'Meenakshi Amman Temple, Madurai',
    nearby: [
      { name: l('रामेश्वरम', 'Rameshwaram'), dist: l('लगभग 170 किमी', 'About 170 km'), text: l('ज्योतिर्लिंग और चार धाम।', 'A Jyotirlinga and one of the Char Dham.'), photoOf: 'rameshwaram' },
      { name: l('श्री रंगनाथस्वामी, श्रीरंगम', 'Sri Ranganathaswamy, Srirangam'), dist: l('लगभग 140 किमी', 'About 140 km'), text: l('108 दिव्य देशमों में पहला।', 'The first of the 108 Divya Desams.'), photoOf: 'srirangam' },
    ],
  },
  {
    id: 'srirangam',
    name: l('श्री रंगनाथस्वामी, श्रीरंगम', 'Sri Ranganathaswamy, Srirangam'),
    place: l('श्रीरंगम द्वीप, तिरुचिरापल्ली, तमिलनाडु', 'Srirangam island, Tiruchirappalli, Tamil Nadu'),
    state: 'TN',
    groups: [],
    tags: [l('विष्णु', 'Vishnu'), DIVYA],
    importance: l(
      'कावेरी और कोल्लिडम नदियों के बीच द्वीप पर भगवान रंगनाथ (शेषनाग पर लेटे विष्णु) का मंदिर, जो 108 दिव्य देशमों में पहला और सबसे प्रमुख है। लगभग 156 एकड़ में फैला यह दुनिया के सबसे बड़े पूजित मंदिरों में है, जिसमें सात परकोटे और 21 गोपुरम हैं।',
      'The temple of Lord Ranganatha (Vishnu reclining on Shesha) on an island between the Kaveri and Kollidam rivers, first and foremost of the 108 Divya Desams. Spread over about 156 acres, it is among the largest temples in worship in the world, with seven enclosures and 21 gopurams.',
    ),
    katha: l(
      'कथा है कि यह विग्रह ब्रह्मा जी ने पूजा, फिर इक्ष्वाकु वंश को मिला और श्री राम ने भी पूजा। राम जी ने इसे विभीषण को दिया। लंका जाते हुए विभीषण ने इसे कावेरी के किनारे रखा, और फिर यह उठा नहीं; भगवान ने कहा कि वे यहीं रहेंगे, पर दक्षिण की ओर (लंका की ओर) मुख करके।',
      'The story says this image was worshipped by Brahma, then passed to the Ikshvaku line and was worshipped by Ram. Ram gave it to Vibhishana. On his way to Lanka, Vibhishana set it down on the Kaveri, and it would not rise again; the Lord said he would stay here, but facing south, towards Lanka.',
    ),
    history: l(
      'चोल, पांड्य, होयसल और विजयनगर राजाओं ने मंदिर को बढ़ाया। श्री रामानुजाचार्य यहीं रहे और श्री वैष्णव परंपरा को व्यवस्थित किया। 14वीं सदी के आक्रमण के बाद विग्रह दशकों तक बाहर रहा। 73 मीटर ऊँचा राजगोपुरम 1987 में पूरा हुआ।',
      'Chola, Pandya, Hoysala and Vijayanagara kings enlarged the temple. Sri Ramanujacharya lived here and organised the Sri Vaishnava tradition. After the 14th-century invasions the image was kept away for decades. The 73 m Rajagopuram was completed in 1987.',
    ),
    todo: [
      l('श्री रंगनाथ के दर्शन', 'Darshan of Sri Ranganatha'),
      l('श्री रामानुजाचार्य का सन्निधि', 'The shrine of Sri Ramanujacharya'),
      l('वैकुंठ एकादशी पर परमपद वासल (स्वर्ग द्वार)', 'The Paramapada Vasal (gate of heaven) on Vaikuntha Ekadashi'),
    ],
    best: l('अक्टूबर से मार्च। वैकुंठ एकादशी (मार्गशीर्ष) का 21 दिन का उत्सव सबसे बड़ा है।', 'October to March. The 21-day Vaikuntha Ekadashi festival (Margashirsha) is the biggest.'),
    rules: DRESS,
    how: {
      road: l('तिरुचिरापल्ली शहर से लगभग 9 किमी।', 'About 9 km from Tiruchirappalli city.'),
      rail: l('श्रीरंगम स्टेशन; तिरुचिरापल्ली जंक्शन बड़ा स्टेशन।', 'Srirangam station; Tiruchirappalli Junction is the main station.'),
      air: l('तिरुचिरापल्ली हवाई अड्डा, लगभग 15 किमी।', 'Tiruchirappalli airport, about 15 km.'),
    },
    maps: 'Sri Ranganathaswamy Temple, Srirangam',
    nearby: [
      { name: l('जम्बुकेश्वर, तिरुवनैकावल', 'Jambukeswarar, Thiruvanaikaval'), dist: l('लगभग 2 किमी', 'About 2 km'), text: l('पंच भूत स्थलों में जल लिंग।', 'The water linga among the Pancha Bhoota Sthalams.'), photoOf: 'jambukeswarar' },
      { name: l('माँ मीनाक्षी, मदुरै', 'Maa Meenakshi, Madurai'), dist: l('लगभग 140 किमी', 'About 140 km'), text: l('14 गोपुरमों वाला विशाल मंदिर।', 'The vast temple with 14 gopurams.'), photoOf: 'meenakshi' },
    ],
  },
  {
    id: 'manakula-vinayagar',
    name: l('श्री मनकुल विनायगर', 'Sri Manakula Vinayagar'),
    place: l('व्हाइट टाउन, पुडुचेरी', 'White Town, Puducherry'),
    state: 'PY',
    groups: [],
    tags: [l('गणेश', 'Ganesha')],
    importance: l(
      'पुडुचेरी का सबसे प्रसिद्ध मंदिर, भगवान गणेश (भुवनेश्वर गणपति रूप, समुद्र की ओर पूर्वमुखी) को समर्पित। गणेश जी के 16 रूपों की चित्रकारी और लगभग 18 फ़ुट का सोने से मढ़ा ध्वजस्तंभ यहाँ की पहचान हैं।',
      'Puducherry’s best-known temple, dedicated to Ganesha (in the Bhuvaneshwar Ganapati form, facing east to the sea). Paintings of the 16 forms of Ganesha and a gold-plated flagstaff about 18 ft tall are its marks.',
    ),
    katha: l(
      'नाम तमिल शब्दों "मनल" (रेत) और "कुलम" (तालाब) से बना है, क्योंकि मंदिर के पास पहले रेत से भरा तालाब था। लोककथा है कि फ्रांसीसी शासन में मूर्ति को कई बार समुद्र में फेंका गया, पर हर बार वह फिर अपनी जगह पर मिली।',
      'The name comes from the Tamil words "manal" (sand) and "kulam" (pond), for the sandy pond that once lay beside it. The folk story says that under French rule the image was thrown into the sea several times, yet each time it was found back in its place.',
    ),
    history: l(
      'मंदिर पुडुचेरी में फ्रांसीसियों के बसने (1666) से पहले का माना जाता है। फ्रांसीसी शासन के दौरान इसे गिराने की कोशिशें हुईं, पर स्थानीय हिंदुओं के विरोध से यह बचा रहा।',
      'The temple is thought to predate the French settlement of Puducherry (1666). During French rule there were attempts to demolish it, but protests by local Hindus saved it.',
    ),
    todo: [
      l('श्री मनकुल विनायगर के दर्शन', 'Darshan of Sri Manakula Vinayagar'),
      l('गणेश जी के 16 रूपों की चित्रकारी', 'The paintings of Ganesha’s 16 forms'),
      l('पास का समुद्र तट (प्रोमेनेड)', 'The nearby seafront promenade'),
    ],
    best: l('अक्टूबर से मार्च। विनायक चतुर्थी और ब्रह्मोत्सव (अगस्त-सितंबर) पर विशेष उत्सव।', 'October to March. Special festivals at Vinayaka Chaturthi and the Brahmotsavam (August-September).'),
    rules: ASK,
    how: {
      road: l('चेन्नई से लगभग 150 किमी (ईस्ट कोस्ट रोड)।', 'About 150 km from Chennai (East Coast Road).'),
      rail: l('पुडुचेरी स्टेशन, लगभग 1.5 किमी।', 'Puducherry station, about 1.5 km.'),
      air: l('चेन्नई हवाई अड्डा; पुडुचेरी में कुछ उड़ानें।', 'Chennai airport; a few flights to Puducherry.'),
    },
    maps: 'Manakula Vinayagar Temple, Puducherry',
    nearby: [
      { name: l('नटराज मंदिर, चिदंबरम', 'Nataraja Temple, Chidambaram'), dist: l('लगभग 70 किमी', 'About 70 km'), text: l('पंच भूत स्थलों में आकाश तत्व।', 'The sky element among the Pancha Bhoota Sthalams.'), photoOf: 'chidambaram' },
    ],
  },
]
