/**
 * Pancha Bhoota Sthalam: the five Shiva temples of the south that stand for the five elements (earth, water, fire, air, space).
 * Facts cross-checked between Wikipedia and regional guides. Timings and ritual fees change, so they are left to the temples.
 */
import { l, type Temple } from './templeTypes'

const NOTE = l(
  'पंच भूत स्थलों के क्रम में परंपरा पृथ्वी (कांचीपुरम), जल (तिरुवनैकावल), अग्नि (तिरुवन्नामलै), वायु (श्रीकालहस्ती) और आकाश (चिदंबरम) गिनती है। कुछ सूचियों में आकाश के लिए चिदंबरम की जगह दूसरा स्थान भी बताया जाता है।',
  'Tradition counts earth (Kanchipuram), water (Thiruvanaikaval), fire (Tiruvannamalai), air (Srikalahasti) and space (Chidambaram). Some lists name another place for space instead of Chidambaram.',
)
const RULES = l(
  'दक्षिण भारत के कई मंदिरों में वेशभूषा के नियम होते हैं (प्रायः पारंपरिक वस्त्र)। प्रवेश, अभिषेक और विशेष पूजा के नियम मंदिर के काउंटर पर पूछ लें।',
  'Many south Indian temples have a dress code (usually traditional wear). Ask at the counter about entry, abhishek and special pujas.',
)
const BEST = l('अक्टूबर से मार्च; गर्मी में दोपहर बहुत तेज़ धूप रहती है।', 'October to March; afternoons are very hot in summer.')
const next = (id: string, hi: string, en: string) => ({
  name: l(hi, en),
  dist: l('पंच भूत क्रम में अगला', 'Next in the Pancha Bhoota order'),
  text: l('पंच भूत स्थलों का अगला मंदिर। पूरी सूची के लिए पंच भूत श्रेणी देखें।', 'The next of the five elemental temples. See the Pancha Bhoota list for all five.'),
  photoOf: id,
})

export const BHOOTA_TEMPLES: Temple[] = [
  {
    id: 'ekambareswarar',
    name: l('एकांबरेश्वर (पृथ्वी)', 'Ekambareswarar (Earth)'),
    place: l('कांचीपुरम, तमिलनाडु', 'Kanchipuram, Tamil Nadu'),
    state: 'TN',
    groups: ['bhoota'],
    tags: [l('पंच भूत: पृथ्वी', 'Pancha Bhoota: Earth')],
    importance: l(
      'पंच भूत स्थलों में पृथ्वी तत्व का मंदिर। शिव जी यहाँ पृथ्वी लिंग के रूप में पूजे जाते हैं और देवी एलवर्कुझली के साथ विराजमान हैं। परिसर लगभग 23 से 25 एकड़ में फैला है, जो भारत के बड़े मंदिर परिसरों में गिना जाता है।',
      'The temple of the earth element among the Pancha Bhoota. Shiva is worshipped as the Prithvi linga, with the goddess Elavarkuzhali. The complex spreads over about 23 to 25 acres, among the largest temple complexes in India.',
    ),
    katha: l(
      'कथा है कि पार्वती जी ने वेगवती नदी के किनारे आम के पेड़ के नीचे रेत का शिवलिंग बनाकर तप किया। शिव जी ने परीक्षा के लिए अग्नि और गंगा भेजीं, पर पार्वती जी की भक्ति अडिग रही। एक कथा में बाढ़ से लिंग को बचाने के लिए देवी ने उसे गले लगा लिया, और शिव जी प्रकट होकर उनसे विवाह किया।',
      'The story is that Parvati did penance under a mango tree by the Vegavati river, making a linga of sand. Shiva tested her by sending fire and the Ganga, but her devotion held. In one version the river flooded and she embraced the linga to save it, and Shiva appeared and married her.',
    ),
    history: l(
      'मंदिर बहुत प्राचीन है और कम से कम छठी-सातवीं सदी से जाना जाता है। वर्तमान पत्थर का ढाँचा चोल काल (9वीं सदी) का माना जाता है और बाद में विजयनगर राजाओं ने विस्तार किया। दक्षिण का राजगोपुरम लगभग 57 से 59 मीटर ऊँचा, ग्यारह मंज़िला है, जो दक्षिण भारत के ऊँचे गोपुरमों में है। सहस्र स्तंभ मंडप विजयनगर काल का है। मंदिर का प्रबंध तमिलनाडु का हिंदू धार्मिक एवं धर्मार्थ विभाग करता है।',
      'The temple is very old and known from at least the 6th to 7th century. The present stone structure is dated to the Chola period (9th century) with later additions by the Vijayanagara kings. The southern gopuram is about 57 to 59 m high and eleven-storeyed, among the tallest towers in the south. The thousand-pillared hall is of the Vijayanagara period. The temple is run by the Tamil Nadu Hindu Religious and Charitable Endowments Department.',
    ),
    todo: [
      l('एकांबरेश्वर और देवी के दर्शन', 'Darshan of Ekambareswarar and the goddess'),
      l('आम के पुराने वृक्ष (स्थल वृक्ष) के दर्शन', 'See the old mango tree, the sacred tree of the temple'),
      l('सहस्र स्तंभ मंडप और ऊँचा राजगोपुरम देखें', 'See the thousand-pillared hall and the tall gopuram'),
      l('पास के कामाक्षी मंदिर के दर्शन', 'Visit the nearby Kamakshi temple'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('कांचीपुरम चेन्नई से लगभग 70 किमी है; शहर में मंदिर तक ऑटो या टैक्सी।', 'Kanchipuram is about 70 km from Chennai; take an auto or taxi in town.'),
      rail: l('कांचीपुरम स्टेशन; चेन्नई से बसें और ट्रेनें भी हैं।', 'Kanchipuram station; buses and trains also run from Chennai.'),
      air: l('चेन्नई अंतरराष्ट्रीय हवाई अड्डा।', 'Chennai International Airport.'),
    },
    maps: 'Ekambareswarar Temple, Kanchipuram',
    note: NOTE,
    nearby: [
      { name: l('कामाक्षी अम्मन मंदिर', 'Kamakshi Amman Temple'), dist: l('कांचीपुरम में ही', 'In Kanchipuram itself'), text: l('देवी कामाक्षी का प्रसिद्ध शक्तिपीठ, कांची की सप्त पुरी में गिना जाने वाला मंदिर।', 'The famous Shakti Peeth of Goddess Kamakshi, the temple counted for Kanchi among the Sapta Puri.'), photoOf: 'kamakshi' },
      next('jambukeswarar', 'जम्बुकेश्वर', 'Jambukeswarar'),
    ],
  },
  {
    id: 'jambukeswarar',
    name: l('जम्बुकेश्वर (जल)', 'Jambukeswarar (Water)'),
    place: l('तिरुवनैकावल, तिरुचिरापल्ली ज़िला, तमिलनाडु', 'Thiruvanaikaval, Tiruchirappalli district, Tamil Nadu'),
    state: 'TN',
    groups: ['bhoota'],
    tags: [l('पंच भूत: जल', 'Pancha Bhoota: Water')],
    importance: l(
      'पंच भूत स्थलों में जल तत्व का मंदिर। शिव जी यहाँ जम्बुकेश्वर और देवी अखिलांडेश्वरी के रूप में पूजे जाते हैं। मान्यता है कि गर्भगृह में भूमिगत जल की धारा है।',
      'The temple of the water element among the Pancha Bhoota. Shiva is worshipped as Jambukeswarar and the goddess as Akilandeswari. The sanctum is said to have an underground stream.',
    ),
    katha: l(
      'कथा है कि पार्वती जी ने कावेरी के जल से लिंग बनाकर जंबू (जामुन) वृक्ष के नीचे पूजा की। इसे अप्पु (जल) लिंग कहा जाता है। यहाँ एक हाथी और एक मकड़ी की कथा भी है: मकड़ी लिंग पर जाला बुनती, हाथी जल चढ़ाते हुए उसे हटा देता। एक दिन दोनों की लड़ाई में दोनों की मृत्यु हुई और शिव जी ने दोनों को मुक्त किया। तिरु-आनै-कावल का अर्थ "हाथी का पवित्र वन" बताया जाता है।',
      'The story is that Parvati made a linga from Kaveri water and worshipped under the jambu (java plum) tree; it is called the Appu (water) linga. There is also the tale of an elephant and a spider: the spider wove a web over the linga and the elephant tore it down while pouring water. They fought one day and both died, and Shiva freed them. Thiru-aanai-kaa is said to mean "the holy forest of the elephant".',
    ),
    history: l(
      'मंदिर में चोल काल के शिलालेख हैं। परंपरा में कहा जाता है कि मकड़ी अगले जन्म में चोल राजा कोचेंगट बने और उन्होंने 70 मंदिर बनवाए, जिनमें यह भी एक है; उन्होंने गर्भगृह का द्वार इतना छोटा रखा कि हाथी भीतर न जा सके। बाहरी परकोटा लगभग 1.6 किमी लंबा है। गर्भगृह में दर्शन एक पत्थर की खिड़की (नौ छेदों वाली) से होते हैं।',
      'The temple has inscriptions from the Chola period. Tradition says the spider was reborn as the Chola king Kochengannan, who built 70 temples including this one, and made the sanctum doorway too small for an elephant to enter. The outer wall is about 1.6 km long. The deity is viewed through a stone window with nine openings.',
    ),
    todo: [
      l('जम्बुकेश्वर और अखिलांडेश्वरी के दर्शन', 'Darshan of Jambukeswarar and Akilandeswari'),
      l('स्थल वृक्ष, सफ़ेद जामुन का पेड़ देखें', 'See the sacred tree, the white jambu'),
      l('नौ छेदों वाली खिड़की से दर्शन', 'Have darshan through the nine-opening window'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('तिरुचिरापल्ली (त्रिची) और श्रीरंगम के पास; शहर से ऑटो या बस।', 'Close to Tiruchirappalli (Trichy) and Srirangam; take an auto or bus from the city.'),
      rail: l('तिरुचिरापल्ली जंक्शन या श्रीरंगम स्टेशन।', 'Tiruchirappalli Junction or Srirangam station.'),
      air: l('तिरुचिरापल्ली हवाई अड्डा।', 'Tiruchirappalli airport.'),
    },
    maps: 'Jambukeswarar Temple, Thiruvanaikaval',
    note: NOTE,
    nearby: [next('annamalaiyar', 'अरुणाचलेश्वर', 'Arunachaleswarar')],
  },
  {
    id: 'annamalaiyar',
    name: l('अरुणाचलेश्वर (अग्नि)', 'Arunachaleswarar (Fire)'),
    place: l('तिरुवन्नामलै, तमिलनाडु', 'Tiruvannamalai, Tamil Nadu'),
    state: 'TN',
    groups: ['bhoota'],
    tags: [l('पंच भूत: अग्नि', 'Pancha Bhoota: Fire')],
    importance: l(
      'पंच भूत स्थलों में अग्नि तत्व का मंदिर, अरुणाचल पहाड़ी की तलहटी में। शिव जी यहाँ अन्नामलैयार के रूप में पूजे जाते हैं और पहाड़ी को ही शिव का स्वरूप माना जाता है। देवी उन्नामुलै अम्मन हैं।',
      'The temple of the fire element among the Pancha Bhoota, at the foot of the Arunachala hill. Shiva is worshipped here as Annamalaiyar and the hill itself is regarded as his form. The goddess is Unnamulai Amman.',
    ),
    katha: l(
      'शिव पुराण के अनुसार ब्रह्मा और विष्णु में श्रेष्ठता पर विवाद हुआ। तब शिव जी अनंत अग्नि-स्तंभ (ज्योतिर्लिंग) बनकर प्रकट हुए। विष्णु वराह बनकर नीचे का छोर खोजने गए और ब्रह्मा हंस बनकर ऊपर का, पर कोई अंत न पा सका। इसी अग्नि-रूप की स्मृति में यहाँ कार्तिगई दीपम मनाया जाता है।',
      'According to the Shiva Purana, Brahma and Vishnu quarrelled over who was greater. Shiva appeared as an endless pillar of fire (jyotirlinga). Vishnu went down as a boar to find its base and Brahma went up as a swan to find its top, but neither found an end. Karthigai Deepam remembers this fire form.',
    ),
    history: l(
      'देवारम (7वीं सदी) में इस मंदिर का वर्णन है। वर्तमान पत्थर का ढाँचा चोल काल (9वीं सदी) का माना जाता है और विजयनगर राजाओं ने इसे बढ़ाया। पूर्वी राजगोपुरम लगभग 66 मीटर ऊँचा, ग्यारह मंज़िला है। परिसर लगभग 10 हेक्टेयर में फैला है और मंदिर का प्रबंध तमिलनाडु का हिंदू धार्मिक एवं धर्मार्थ विभाग करता है।',
      'The temple is described in the Tevaram (7th century). The present stone structure is dated to the Chola period (9th century) and was enlarged by the Vijayanagara kings. The eastern gopuram is about 66 m high and eleven-storeyed. The complex covers about 10 hectares and is run by the Tamil Nadu Hindu Religious and Charitable Endowments Department.',
    ),
    todo: [
      l('अन्नामलैयार और उन्नामुलै अम्मन के दर्शन', 'Darshan of Annamalaiyar and Unnamulai Amman'),
      l('पूर्णिमा पर अरुणाचल की गिरिवलम (परिक्रमा)', 'Girivalam, the circuit of Arunachala, on full moon days'),
      l('कार्तिगई दीपम पर पहाड़ी की चोटी पर जलता दीपक देखें', 'See the beacon lit on the hilltop at Karthigai Deepam'),
    ],
    best: l('अक्टूबर से मार्च। कार्तिगई दीपम (नवंबर-दिसंबर) पर बहुत भीड़ होती है।', 'October to March. Karthigai Deepam (November to December) is very crowded.'),
    rules: RULES,
    how: {
      road: l('चेन्नई से लगभग 190 किमी; बेंगलुरु और पुडुचेरी से भी बसें हैं।', 'About 190 km from Chennai; buses also run from Bengaluru and Puducherry.'),
      rail: l('तिरुवन्नामलै स्टेशन।', 'Tiruvannamalai station.'),
      air: l('चेन्नई, बेंगलुरु या पुडुचेरी हवाई अड्डा।', 'Chennai, Bengaluru or Puducherry airport.'),
    },
    maps: 'Arunachaleswarar Temple, Tiruvannamalai',
    note: NOTE,
    nearby: [next('srikalahasti', 'श्रीकालहस्ती', 'Srikalahasti')],
  },
  {
    id: 'srikalahasti',
    name: l('श्रीकालहस्ती (वायु)', 'Srikalahasti (Air)'),
    place: l('श्रीकालहस्ती, तिरुपति ज़िला, आंध्र प्रदेश', 'Srikalahasti, Tirupati district, Andhra Pradesh'),
    state: 'AP',
    groups: ['bhoota'],
    tags: [l('पंच भूत: वायु', 'Pancha Bhoota: Air'), l('राहु-केतु क्षेत्र', 'Rahu-Ketu kshetra')],
    importance: l(
      'पंच भूत स्थलों में वायु तत्व का मंदिर, जहाँ शिव जी कालहस्तीश्वर के रूप में पूजे जाते हैं और देवी ज्ञानप्रसूनांबिका हैं। इसे दक्षिण कैलास और राहु-केतु क्षेत्र भी कहा जाता है। कहा जाता है कि यह भारत का एकमात्र मंदिर है जो सूर्य और चंद्र ग्रहण में भी खुला रहता है।',
      'The temple of the air element among the Pancha Bhoota, where Shiva is worshipped as Kalahasteeswara with the goddess Gnana Prasunambika. It is also called Dakshina Kailasam and a Rahu-Ketu kshetra. It is said to be the one temple in India that stays open during solar and lunar eclipses.',
    ),
    katha: l(
      'परंपरा में वायु देव ने कपूर के शिवलिंग की तपस्या की, इसलिए यह वायु लिंग कहलाया। यहाँ कन्नप्पा की कथा भी जुड़ी है: शिकारी कन्नप्पा ने शिवलिंग से बहते रक्त को रोकने के लिए अपनी दोनों आँखें अर्पित करने की ठानी, तब शिव जी ने उसे रोककर मोक्ष दिया। मकड़ी (श्री), साँप (काला) और हाथी (हस्ती) की कथा से भी नाम समझाया जाता है।',
      'By tradition the wind god Vayu did penance to a camphor linga, so it is called the Vayu linga. The story of Kannappa is tied here: the hunter Kannappa resolved to offer both his eyes to stop blood flowing from the linga, and Shiva stopped him and granted moksha. The name is also explained by the spider (Sri), the snake (Kala) and the elephant (Hasti).',
    ),
    history: l(
      'लगभग 11वीं सदी में चोल राजा राजेंद्र प्रथम ने मंदिर का मुख्य ढाँचा बनवाया और कुलोत्तुंग प्रथम ने गोपुरम बनवाए। लगभग 1516 में कृष्णदेवराय के समय 120 फुट ऊँचा राजगोपुरम और सौ स्तंभों वाला मंडप बना। राजगोपुरम 26 मई 2010 को गिर गया और मूल रूप में दोबारा बनकर 18 जनवरी 2017 को प्रतिष्ठित हुआ।',
      'Around the 11th century the Chola king Rajendra I built the main structure and Kulottunga I the gopurams. Around 1516, under Krishnadevaraya, the 120-foot rajagopuram and the hundred-pillared hall were added. The rajagopuram collapsed on 26 May 2010 and was rebuilt in its original form and consecrated on 18 January 2017.',
    ),
    todo: [
      l('कालहस्तीश्वर और ज्ञानप्रसूनांबिका के दर्शन', 'Darshan of Kalahasteeswara and Gnana Prasunambika'),
      l('राहु-केतु पूजा के लिए मंदिर का आधिकारिक काउंटर देखें', 'For Rahu-Ketu puja, use the temple’s official counter'),
      l('सुवर्णमुखी नदी के किनारे बैठें', 'Sit a while by the Swarnamukhi river'),
    ],
    best: BEST,
    rules: l('राहु-केतु पूजा और अभिषेक के टिकट मंदिर के आधिकारिक काउंटर या वेबसाइट से लें; बाहर के एजेंटों से सावधान रहें। प्रवेश के नियम मंदिर से पूछ लें।', 'Take Rahu-Ketu puja and abhishek tickets only from the temple’s official counter or website, and be careful with outside agents. Ask the temple about entry rules.'),
    how: {
      road: l('तिरुपति से लगभग 36 किमी।', 'About 36 km from Tirupati.'),
      rail: l('श्रीकालहस्ती स्टेशन लगभग 3 किमी।', 'Srikalahasti station is about 3 km away.'),
      air: l('तिरुपति हवाई अड्डा।', 'Tirupati airport.'),
    },
    maps: 'Srikalahasti Temple, Andhra Pradesh',
    note: NOTE,
    nearby: [next('chidambaram', 'चिदंबरम', 'Chidambaram')],
  },
  {
    id: 'chidambaram',
    name: l('चिदंबरम (आकाश)', 'Chidambaram (Space)'),
    place: l('चिदंबरम, कडलूर ज़िला, तमिलनाडु', 'Chidambaram, Cuddalore district, Tamil Nadu'),
    state: 'TN',
    groups: ['bhoota'],
    tags: [l('पंच भूत: आकाश', 'Pancha Bhoota: Space')],
    importance: l(
      'नटराज, यानी नृत्य के स्वामी शिव जी का मंदिर, जो पंच भूत स्थलों में आकाश तत्व का माना जाता है। "चिदंबरम" का अर्थ "चेतना का मंच" बताया जाता है। मंदिर की दीवारों पर भरतनाट्यम की नींव माने जाने वाले नाट्यशास्त्र के सभी 108 करण (नृत्य मुद्राएँ) उकेरे हैं।',
      'The temple of Nataraja, Shiva as lord of dance, counted as the space element among the Pancha Bhoota. "Chidambaram" is said to mean "the stage of consciousness". The walls carry all 108 karanas (dance postures) of the Natya Shastra, the foundation of Bharatanatyam.',
    ),
    katha: l(
      'यहाँ शिव जी आनंद तांडव करते नटराज के रूप में स्वर्ण सभा (पोन अंबलम) में विराजमान हैं। आकाश तत्व के प्रतीक के रूप में एक परदे के पीछे का रिक्त स्थान पूजा जाता है, जिसे चिदंबरम रहस्य कहते हैं। (यह स्थानीय परंपरा है, श्रद्धा के अनुसार समझें।)',
      'Here Shiva is enshrined as Nataraja, performing the Ananda Tandava, in the golden hall (Pon Ambalam). As a symbol of the space element, an empty space behind a curtain is worshipped, called the Chidambaram Rahasyam. (This is local tradition, to be understood in faith.)',
    ),
    history: l(
      'मंदिर प्राचीन है और 6वीं-7वीं सदी के अप्पर और संबंदर के भजनों में नृत्य करते शिव का उल्लेख है। चोल राजा नटराज को कुलदेवता मानते थे। ताम्रपत्रों के अनुसार गर्भगृह की स्वर्ण छत परांतक चोल प्रथम ने बनवाई। मंदिर का वर्तमान ढाँचा मुख्यतः 12वीं-13वीं सदी का है। यह मंदिर पंच भूत स्थल और पंच सभा स्थल, दोनों में गिना जाता है। पूजा दीक्षितर परंपरा के पुजारी करते हैं।',
      'The temple is ancient and the hymns of Appar and Sambandar (6th to 7th century) mention the dancing Shiva. The Cholas regarded Nataraja as their family deity. Copper-plate inscriptions say the golden roof was made by Parantaka Chola I. Most of the present structure is of the 12th to 13th century. It is counted among both the Pancha Bhoota and the Pancha Sabha sthalams. The priests belong to the Dikshitar tradition.',
    ),
    todo: [
      l('स्वर्ण सभा में नटराज के दर्शन', 'Darshan of Nataraja in the golden hall'),
      l('गोपुरमों पर उकेरी नृत्य मुद्राएँ देखें', 'See the dance postures carved on the gateway towers'),
      l('शिवगंगा सरोवर और सहस्र स्तंभ मंडप', 'The Sivaganga tank and the thousand-pillared hall'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('चेन्नई से लगभग 230 किमी; पुडुचेरी से लगभग 70 किमी।', 'About 230 km from Chennai; about 70 km from Puducherry.'),
      rail: l('चिदंबरम स्टेशन।', 'Chidambaram station.'),
      air: l('चेन्नई, तिरुचिरापल्ली या पुडुचेरी हवाई अड्डा।', 'Chennai, Tiruchirappalli or Puducherry airport.'),
    },
    maps: 'Thillai Nataraja Temple, Chidambaram',
    note: NOTE,
    nearby: [next('ekambareswarar', 'एकांबरेश्वर (क्रम का आरंभ)', 'Ekambareswarar (start of the order)')],
  },
]
