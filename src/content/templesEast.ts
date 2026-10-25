/**
 * State-wise temples, east and north-east: Sikkim, Arunachal Pradesh, Manipur, Tripura, Meghalaya, Assam, West Bengal,
 * Jharkhand, Odisha, Chhattisgarh. Shown on the state map. Facts cross-checked between Wikipedia, state tourism pages and
 * news reports. Shakti Peeth lists differ between texts; where they do, the page says so. Distances are rounded.
 */
import { l, type Temple } from './templeTypes'

const ASK = l(
  'त्योहारों और नवरात्र में भीड़ बहुत होती है। दर्शन का समय और नियम बदलते रहते हैं, इसलिए मंदिर से पूछ लें।',
  'It is very crowded at festivals and Navratri. Darshan timings and rules change, so check with the temple.',
)
const SHAKTI = l('शक्तिपीठ', 'Shakti Peeth')
const PEETH_NOTE = l('शक्तिपीठों की सूचियाँ अलग-अलग ग्रंथों में अलग हैं; यहाँ स्थानीय और सबसे आम मान्यता लिखी है।', 'Lists of Shakti Peeths differ between texts; this page gives the local and most common belief.')
const ILP = l('अरुणाचल प्रदेश जाने के लिए भारतीय नागरिकों को इनर लाइन परमिट (ILP) चाहिए, जो ऑनलाइन मिलता है।', 'Indian citizens need an Inner Line Permit (ILP) to enter Arunachal Pradesh; it is issued online.')

export const EAST_TEMPLES: Temple[] = [
  {
    id: 'siddhesvara-dham',
    name: l('सिद्धेश्वर धाम (चार धाम), नामची', 'Siddhesvara Dham (Char Dham), Namchi'),
    place: l('सोलोफोक पहाड़ी, नामची, सिक्किम', 'Solophok hill, Namchi, Sikkim'),
    state: 'SK',
    groups: [],
    tags: [l('शिव', 'Shiva'), l('किरातेश्वर', 'Kirateshwar')],
    importance: l(
      'सिक्किम का सबसे बड़ा हिंदू तीर्थ परिसर। पहाड़ी पर भगवान शिव की लगभग 108 फ़ुट ऊँची प्रतिमा है, और चारों धाम (बद्रीनाथ, जगन्नाथ पुरी, द्वारका, रामेश्वरम) तथा 12 ज्योतिर्लिंगों के प्रतिरूप एक ही जगह बने हैं। जो भक्त दूर नहीं जा सकते, वे यहाँ सबके दर्शन करते हैं।',
      'Sikkim’s largest Hindu pilgrimage complex. A statue of Shiva about 108 ft tall stands on the hill, with replicas of the four Dhams (Badrinath, Jagannath Puri, Dwarka, Rameshwaram) and the 12 Jyotirlingas in one place. Devotees who cannot travel far have darshan of all of them here.',
    ),
    katha: l(
      'यहाँ भगवान शिव का किरातेश्वर रूप भी पूजा जाता है। महाभारत की कथा है कि अर्जुन ने पाशुपतास्त्र के लिए तपस्या की, तो शिव किरात (शिकारी) के वेश में आए और अर्जुन की परीक्षा लेकर उसे अस्त्र दिया। सिक्किम में किरातेश्वर को शिव का स्थानीय रूप माना जाता है।',
      'Shiva is also worshipped here as Kirateshwar. In the Mahabharata, when Arjuna did penance for the Pashupata weapon, Shiva came disguised as a Kirata hunter, tested Arjuna and gave him the weapon. In Sikkim, Kirateshwar is held to be the local form of Shiva.',
    ),
    history: l(
      'सिक्किम सरकार ने यह परिसर बनवाया और 8 नवंबर 2011 को इसका प्राण-प्रतिष्ठा समारोह जगद्गुरु शंकराचार्य स्वामी स्वरूपानंद सरस्वती ने किया।',
      'The Sikkim government built the complex, and it was consecrated on 8 November 2011 by Jagadguru Shankaracharya Swami Swaroopanand Saraswati.',
    ),
    todo: [
      l('शिव प्रतिमा और किरातेश्वर के दर्शन', 'Darshan of the Shiva statue and Kirateshwar'),
      l('चारों धाम और 12 ज्योतिर्लिंगों के प्रतिरूप', 'The replicas of the four Dhams and 12 Jyotirlingas'),
      l('साफ़ मौसम में कंचनजंगा का दृश्य', 'A view of Kangchenjunga in clear weather'),
    ],
    best: l('मार्च से मई और अक्टूबर से दिसंबर। शिवरात्रि पर विशेष पूजा।', 'March to May and October to December. Special worship at Shivratri.'),
    rules: l('परिसर में प्रवेश शुल्क लगता है। पहाड़ी पर मौसम जल्दी बदलता है, इसलिए गर्म कपड़े रखें।', 'There is an entry fee. Weather on the hill changes quickly, so carry warm clothes.'),
    how: {
      road: l('नामची से लगभग 5 किमी, गंगटोक से लगभग 80 किमी।', 'About 5 km from Namchi and 80 km from Gangtok.'),
      rail: l('न्यू जलपाईगुड़ी (NJP), लगभग 100 किमी।', 'New Jalpaiguri (NJP), about 100 km.'),
      air: l('बागडोगरा हवाई अड्डा, लगभग 110 किमी; पाकयोंग भी विकल्प।', 'Bagdogra airport, about 110 km; Pakyong is also an option.'),
    },
    maps: 'Siddhesvara Dham, Namchi',
    nearby: [
      { name: l('समद्रुपत्से', 'Samdruptse'), dist: l('नामची के पास', 'Near Namchi'), text: l('गुरु पद्मसंभव की विशाल प्रतिमा वाली पहाड़ी।', 'A hill with a huge statue of Guru Padmasambhava.') },
    ],
  },
  {
    id: 'parshuram-kund',
    name: l('परशुराम कुंड', 'Parshuram Kund'),
    place: l('लोहित नदी, लोहित ज़िला, अरुणाचल प्रदेश', 'Lohit river, Lohit district, Arunachal Pradesh'),
    state: 'AR',
    groups: [],
    tags: [l('पवित्र कुंड', 'Sacred pool'), l('मकर संक्रांति', 'Makar Sankranti')],
    importance: l(
      'लोहित नदी के किनारे का पवित्र कुंड, जहाँ मकर संक्रांति पर लाखों तक भक्त स्नान के लिए आते हैं। इसे "पूर्वोत्तर का कुंभ" भी कहा जाता है।',
      'A sacred pool on the Lohit river, where devotees come in very large numbers to bathe at Makar Sankranti. It is also called "the Kumbh of the North-East".',
    ),
    katha: l(
      'कथा है कि पिता जमदग्नि की आज्ञा पर परशुराम ने अपनी माता रेणुका का वध किया। उस पाप से उनका फरसा हाथ से चिपक गया। अनेक तीर्थों के बाद यहाँ ब्रह्म कुंड में स्नान करने पर फरसा हाथ से छूटा और वे पाप से मुक्त हुए।',
      'The story is that on his father Jamadagni’s order Parashurama slew his mother Renuka. For that sin his axe stuck to his hand. After many pilgrimages he bathed here in the Brahma Kund, the axe fell from his hand and he was freed of the sin.',
    ),
    history: l(
      'स्थान का उल्लेख कालिका पुराण से जोड़ा जाता है। पुराना कुंड 1950 के असम भूकंप में बदल गया; अब नदी के किनारे घाट और नया परिसर बना है, और राज्य सरकार हर साल परशुराम कुंड मेला आयोजित करती है।',
      'The place is linked to the Kalika Purana. The old pool changed in the 1950 Assam earthquake; there are now ghats and a new complex on the riverbank, and the state government holds the Parshuram Kund Mela every year.',
    ),
    todo: [
      l('मकर संक्रांति पर लोहित नदी में स्नान', 'Bathe in the Lohit at Makar Sankranti'),
      l('घाट पर परशुराम मंदिर के दर्शन', 'Darshan at the Parashurama temple on the ghat'),
    ],
    best: l('नवंबर से मार्च। मकर संक्रांति (जनवरी) का मेला मुख्य समय है।', 'November to March. The Makar Sankranti fair (January) is the main time.'),
    rules: ILP,
    how: {
      road: l('तेज़ू से लगभग 48 किमी, वाकरो सबसे पास का क़स्बा।', 'About 48 km from Tezu; Wakro is the nearest town.'),
      rail: l('तिनसुकिया या डिब्रूगढ़ स्टेशन।', 'Tinsukia or Dibrugarh station.'),
      air: l('डिब्रूगढ़ हवाई अड्डा; तेज़ू हवाई अड्डे पर कुछ उड़ानें।', 'Dibrugarh airport; a few flights to Tezu airport.'),
    },
    maps: 'Parshuram Kund, Lohit',
    note: l('कुछ कथाओं में परशुराम के पिता का वध लिखा मिलता है, पर पुराणों में माता रेणुका की कथा है।', 'Some retellings say he killed his father, but the Puranas tell of his mother Renuka.'),
    nearby: [
      { name: l('माँ कामाख्या, गुवाहाटी', 'Maa Kamakhya, Guwahati'), dist: l('लगभग 550 किमी', 'About 550 km'), text: l('पूर्वोत्तर का सबसे प्रसिद्ध शक्तिपीठ।', 'The best-known Shakti Peeth of the North-East.'), photoOf: 'kamakhya' },
    ],
  },
  {
    id: 'govindajee',
    name: l('श्री गोविंदजी मंदिर', 'Shree Govindajee Temple'),
    place: l('राजमहल परिसर, इंफाल, मणिपुर', 'Royal palace grounds, Imphal, Manipur'),
    state: 'MN',
    groups: [],
    tags: [l('राधा-कृष्ण', 'Radha-Krishna'), l('वैष्णव', 'Vaishnav')],
    importance: l(
      'मणिपुर का सबसे प्रमुख वैष्णव मंदिर, जो पुराने राजमहल के पास है। मुख्य गर्भगृह में राधा-गोविंदजी, और दोनों ओर कृष्ण-बलराम तथा जगन्नाथ-बलभद्र-सुभद्रा हैं। यहाँ होने वाली मणिपुरी रासलीला प्रसिद्ध है।',
      'Manipur’s foremost Vaishnav temple, next to the old royal palace. The main sanctum holds Radha-Govindaji, with Krishna-Balarama and Jagannath-Balabhadra-Subhadra on either side. The Manipuri Ras Lila performed here is famous.',
    ),
    katha: l(
      'परंपरा है कि महाराज जय सिंह (भाग्यचंद्र) को सपने में आदेश मिला कि कैना की पहाड़ी पर कटहल के पेड़ से गोविंदजी की मूर्ति बनवाई जाए। उन्होंने वैसा ही किया, और यहीं से मणिपुरी रासलीला की परंपरा भी उनसे जुड़ी है।',
      'Tradition says Maharaja Jai Singh (Bhagyachandra) was told in a dream to have the image of Govindaji carved from a jackfruit tree on the Kaina hill. He did so, and the Manipuri Ras Lila tradition is also traced to him.',
    ),
    history: l(
      'महाराज नर सिंह ने 1846 में मंदिर बनवाया। 1868 के भूकंप में यह टूटा, और महाराज चंद्रकीर्ति के समय फिर बना (1876)। 1891 के आंग्ल-मणिपुर युद्ध में मूर्तियाँ हटाई गईं और 1908 में फिर स्थापित हुईं। मंदिर के सोने से मढ़े दो गुंबद हैं।',
      'Maharaja Nara Singh built the temple in 1846. It was damaged in the 1868 earthquake and rebuilt under Maharaja Chandrakirti (1876). The images were moved during the 1891 Anglo-Manipur war and reinstalled in 1908. The temple has two gold-plated domes.',
    ),
    todo: [
      l('राधा-गोविंदजी के दर्शन और आरती', 'Darshan and aarti of Radha-Govindaji'),
      l('रासलीला या संकीर्तन (त्योहारों पर)', 'Ras Lila or sankirtan (at festivals)'),
    ],
    best: l('अक्टूबर से मार्च। जन्माष्टमी, रथ यात्रा और रास पूर्णिमा पर विशेष उत्सव।', 'October to March. Special festivals at Janmashtami, Rath Yatra and Ras Purnima.'),
    rules: l('मंदिर में पारंपरिक, शालीन कपड़े पहनें। यात्रा से पहले मणिपुर की ताज़ा स्थिति और सरकारी सलाह देख लें।', 'Wear modest, traditional clothes. Check the current situation and official advice for Manipur before travelling.'),
    how: {
      road: l('इंफाल शहर के बीच में।', 'In the centre of Imphal.'),
      rail: l('दीमापुर (नागालैंड), लगभग 215 किमी।', 'Dimapur (Nagaland), about 215 km.'),
      air: l('इंफाल हवाई अड्डा, लगभग 8 किमी।', 'Imphal airport, about 8 km.'),
    },
    maps: 'Shree Govindajee Temple, Imphal',
    nearby: [],
  },
  {
    id: 'tripura-sundari',
    name: l('माँ त्रिपुर सुंदरी (माताबाड़ी)', 'Maa Tripura Sundari (Matabari)'),
    place: l('उदयपुर, गोमती ज़िला, त्रिपुरा', 'Udaipur, Gomati district, Tripura'),
    state: 'TR',
    groups: [],
    tags: [SHAKTI],
    importance: l(
      '51 शक्तिपीठों में से एक, जहाँ मान्यता है कि सती का दायाँ चरण गिरा था। मंदिर कछुए की पीठ जैसी पहाड़ी (कूर्म पीठ) पर है, जिसे शक्ति मंदिर के लिए सबसे पवित्र आकार माना जाता है। गर्भगृह में माँ त्रिपुर सुंदरी और छोटी माँ (चंडी) की काले पत्थर की मूर्तियाँ हैं।',
      'One of the 51 Shakti Peeths, where Sati’s right foot is believed to have fallen. The temple stands on a hillock shaped like a tortoise’s back (Kurma Peeth), held to be the holiest shape for a Shakti temple. The sanctum has black stone images of Maa Tripura Sundari and Chhoti Maa (Chandi).',
    ),
    katha: l(
      'परंपरा है कि महाराज धन्य माणिक्य को सपने में माँ ने आदेश दिया कि पहाड़ी पर बने विष्णु मंदिर में उनकी स्थापना हो। इसी से मंदिर में शक्ति और विष्णु दोनों की परंपरा जुड़ी है।',
      'Tradition says the Mother told Maharaja Dhanya Manikya in a dream to install her in the Vishnu temple on the hillock. This links both Shakti and Vishnu traditions to the temple.',
    ),
    history: l(
      'मंदिर लगभग 1501 ई. में महाराज धन्य माणिक्य ने बंगाल की एक-रत्न शैली में बनवाया। पास का कल्याण सागर सरोवर दुर्लभ कछुओं के लिए जाना जाता है।',
      'Maharaja Dhanya Manikya built the temple around 1501 CE in the Bengali ek-ratna style. The Kalyan Sagar lake beside it is known for its rare turtles.',
    ),
    todo: [
      l('माँ त्रिपुर सुंदरी और छोटी माँ के दर्शन', 'Darshan of Maa Tripura Sundari and Chhoti Maa'),
      l('कल्याण सागर के किनारे परिक्रमा', 'Walk round Kalyan Sagar'),
    ],
    best: l('अक्टूबर से मार्च। दीवाली पर बड़ा मेला लगता है।', 'October to March. A big fair is held at Diwali.'),
    rules: ASK,
    how: {
      road: l('अगरतला से लगभग 55 किमी।', 'About 55 km from Agartala.'),
      rail: l('उदयपुर (त्रिपुरा) स्टेशन, अगरतला-सबरूम लाइन पर।', 'Udaipur (Tripura) station on the Agartala-Sabroom line.'),
      air: l('अगरतला हवाई अड्डा।', 'Agartala airport.'),
    },
    maps: 'Tripura Sundari Temple, Udaipur, Tripura',
    note: PEETH_NOTE,
    nearby: [],
  },
  {
    id: 'nartiang',
    name: l('नरतियांग दुर्गा मंदिर', 'Nartiang Durga Temple'),
    place: l('नरतियांग, पश्चिम जयंतिया हिल्स, मेघालय', 'Nartiang, West Jaintia Hills, Meghalaya'),
    state: 'ML',
    groups: [],
    tags: [SHAKTI, l('जयंतेश्वरी', 'Jainteshwari')],
    importance: l(
      'मेघालय का शक्तिपीठ, जहाँ मान्यता है कि सती की बाईं जंघा गिरी थी। यहाँ माँ जयंती (जयंतेश्वरी) और भैरव कामदीश्वर के रूप में पूजे जाते हैं। पूजा में हिंदू और खासी-जयंतिया दोनों परंपराएँ मिलती हैं।',
      'Meghalaya’s Shakti Peeth, where Sati’s left thigh is believed to have fallen. The Mother is worshipped as Jayanti (Jainteshwari) and the Bhairava as Kamadishwar. Hindu and Khasi-Jaintia traditions meet in the worship.',
    ),
    katha: l(
      'परंपरा है कि जयंतिया राजा जसो माणिक को सपने में माँ ने दर्शन दिए, और उन्होंने यहाँ मंदिर बनवाया। दुर्गा पूजा में माँ का रूप मूर्ति नहीं, गेंदे के फूलों से सजा केले का तना होता है, जिसे चौथे दिन मिंतदू नदी में विसर्जित किया जाता है।',
      'Tradition says the Jaintia king Jaso Manik saw the Mother in a dream and built a temple here. At Durga Puja the Mother is not an idol but a banana stem decked with marigolds, immersed in the Myntdu river on the fourth day.',
    ),
    history: l(
      'मंदिर लगभग 600 साल पुराना माना जाता है और जयंतिया राजाओं की ग्रीष्मकालीन राजधानी नरतियांग में है। पास ही एक शिव मंदिर में पुरानी तोपें रखी हैं।',
      'The temple is held to be about 600 years old and stands at Nartiang, the summer capital of the Jaintia kings. A Shiva temple nearby holds old cannons.',
    ),
    todo: [
      l('माँ जयंतेश्वरी के दर्शन', 'Darshan of Maa Jainteshwari'),
      l('पास के नरतियांग के विशाल पत्थर (मोनोलिथ)', 'The great standing stones (monoliths) of Nartiang nearby'),
    ],
    best: l('अक्टूबर से अप्रैल। दुर्गा पूजा पर विशेष उत्सव।', 'October to April. A special festival at Durga Puja.'),
    rules: ASK,
    how: {
      road: l('जोवाई से लगभग 25 किमी, शिलांग से लगभग 65 किमी।', 'About 25 km from Jowai and 65 km from Shillong.'),
      rail: l('गुवाहाटी स्टेशन, लगभग 160 किमी।', 'Guwahati station, about 160 km.'),
      air: l('शिलांग (उमरोई) या गुवाहाटी हवाई अड्डा।', 'Shillong (Umroi) or Guwahati airport.'),
    },
    maps: 'Nartiang Durga Temple',
    note: PEETH_NOTE,
    nearby: [
      { name: l('माँ कामाख्या, गुवाहाटी', 'Maa Kamakhya, Guwahati'), dist: l('लगभग 160 किमी', 'About 160 km'), text: l('पूर्वोत्तर का सबसे प्रसिद्ध शक्तिपीठ।', 'The best-known Shakti Peeth of the North-East.'), photoOf: 'kamakhya' },
    ],
  },
  {
    id: 'kamakhya',
    name: l('माँ कामाख्या', 'Maa Kamakhya'),
    place: l('नीलाचल पहाड़ी, गुवाहाटी, असम', 'Nilachal hill, Guwahati, Assam'),
    state: 'AS',
    groups: [],
    tags: [SHAKTI, l('तंत्र पीठ', 'Tantra peeth')],
    importance: l(
      'सबसे पुराने और प्रमुख शक्तिपीठों में से एक, और तंत्र साधना का बड़ा केंद्र। गर्भगृह गुफा जैसा है और ज़मीन से नीचे है; यहाँ कोई मूर्ति नहीं, बल्कि योनि आकार की शिला की पूजा होती है, जिस पर प्राकृतिक झरने का जल बहता है। आसपास दस महाविद्याओं के मंदिर हैं।',
      'One of the oldest and foremost Shakti Peeths and a great centre of Tantra. The sanctum is cave-like and below ground; there is no idol, but a yoni-shaped stone, wet by a natural spring, is worshipped. Temples of the ten Mahavidyas stand around it.',
    ),
    katha: l(
      'मान्यता है कि सती का योनि भाग यहाँ गिरा। हर साल आषाढ़ में अंबुबाची के समय माना जाता है कि माँ रजस्वला होती हैं; तीन दिन मंदिर बंद रहता है और चौथे दिन खुलता है। इसे सृष्टि की शक्ति के उत्सव के रूप में मनाया जाता है।',
      'Sati’s yoni is believed to have fallen here. Each year in Ashadha, at Ambubachi, the Mother is believed to menstruate; the temple stays closed for three days and opens on the fourth. It is celebrated as a festival of the power of creation.',
    ),
    history: l(
      'पूजा बहुत प्राचीन है। पुराना मंदिर नष्ट होने के बाद कोच राजा नरनारायण ने 1565 में इसे फिर बनवाया, और बाद में अहोम राजाओं ने इसका विस्तार किया। इस मिली-जुली शैली को नीलाचल शैली कहते हैं।',
      'Worship here is very ancient. After the old temple was destroyed, the Koch king Nara Narayan rebuilt it in 1565, and later the Ahom kings extended it. This mixed style is called the Nilachal style.',
    ),
    todo: [
      l('गर्भगृह में माँ के दर्शन', 'Darshan of the Mother in the sanctum'),
      l('दस महाविद्याओं के मंदिर', 'The temples of the ten Mahavidyas'),
      l('उमानंद द्वीप और ब्रह्मपुत्र', 'Umananda island and the Brahmaputra'),
    ],
    best: l('अक्टूबर से अप्रैल। अंबुबाची मेला (जून) और दुर्गा पूजा में बहुत भीड़।', 'October to April. Ambubachi Mela (June) and Durga Puja are very crowded.'),
    rules: l('लंबी कतार लगती है; विशेष दर्शन के लिए टिकट मिलता है। यहाँ बलि की परंपरा है, जिसे जानकर जाएँ। अंबुबाची के तीन दिन गर्भगृह बंद रहता है।', 'Queues are long; tickets are sold for special darshan. There is a tradition of animal sacrifice here, so be aware before going. The sanctum is closed for the three days of Ambubachi.'),
    how: {
      road: l('गुवाहाटी शहर में, पहाड़ी पर सड़क से।', 'In Guwahati, up the hill by road.'),
      rail: l('गुवाहाटी स्टेशन, लगभग 8 किमी; कामाख्या स्टेशन भी पास है।', 'Guwahati station, about 8 km; Kamakhya station is also close.'),
      air: l('गुवाहाटी हवाई अड्डा, लगभग 20 किमी।', 'Guwahati airport, about 20 km.'),
    },
    maps: 'Kamakhya Temple, Guwahati',
    note: PEETH_NOTE,
    nearby: [
      { name: l('उमानंद मंदिर', 'Umananda Temple'), dist: l('लगभग 8 किमी, नदी के द्वीप पर', 'About 8 km, on a river island'), text: l('ब्रह्मपुत्र के बीच मोर द्वीप पर शिव मंदिर।', 'A Shiva temple on Peacock Island in the Brahmaputra.'), photoOf: 'umananda' },
    ],
  },
  {
    id: 'umananda',
    name: l('उमानंद मंदिर', 'Umananda Temple'),
    place: l('मोर द्वीप, ब्रह्मपुत्र नदी, गुवाहाटी, असम', 'Peacock Island, Brahmaputra river, Guwahati, Assam'),
    state: 'AS',
    groups: [],
    tags: [l('शिव', 'Shiva')],
    importance: l(
      'ब्रह्मपुत्र के बीच छोटे से मोर द्वीप पर भगवान शिव का मंदिर। यहाँ तक नाव से जाते हैं। "उमानंद" यानी उमा (पार्वती) का आनंद।',
      'A Shiva temple on little Peacock Island in the middle of the Brahmaputra, reached by boat. "Umananda" means the joy of Uma (Parvati).',
    ),
    katha: l(
      'मान्यता है कि यहाँ शिव भयानंद रूप में रहे। जब कामदेव ने उनकी तपस्या भंग की, तो शिव के क्रोध से वह भस्म हो गया; इसी से इस पहाड़ी का नाम भस्माचल पड़ा।',
      'It is believed Shiva lived here as Bhayananda. When Kamadeva broke his meditation, Shiva’s anger burned him to ashes; so the hill is called Bhasmachal.',
    ),
    history: l(
      'मंदिर 1694 में अहोम राजा गदाधर सिंह के समय बना। 1897 के भूकंप में यह बहुत टूटा और बाद में एक स्थानीय व्यापारी ने फिर बनवाया। द्वीप पर गुप्त काल के बाद की पत्थर की मूर्तियाँ भी मिलती हैं।',
      'The temple was built in 1694 under the Ahom king Gadadhar Singha. It was badly damaged in the 1897 earthquake and later rebuilt by a local merchant. Post-Gupta stone sculptures are also found on the island.',
    ),
    todo: [
      l('नाव से नदी पार कर शिव के दर्शन', 'Cross the river by boat for darshan of Shiva'),
      l('सीढ़ियाँ चढ़कर ब्रह्मपुत्र का दृश्य', 'Climb the steps for a view of the Brahmaputra'),
    ],
    best: l('अक्टूबर से अप्रैल। महाशिवरात्रि पर बड़ा उत्सव। बाढ़ के समय नावें बंद हो सकती हैं।', 'October to April. A big festival at Mahashivratri. Boats may stop during floods.'),
    rules: ASK,
    how: {
      road: l('उमानंद (कचारी) घाट से नाव, गुवाहाटी शहर में।', 'Boat from Umananda (Kachari) ghat in Guwahati.'),
      rail: l('गुवाहाटी स्टेशन, लगभग 2 किमी घाट तक।', 'Guwahati station, about 2 km to the ghat.'),
      air: l('गुवाहाटी हवाई अड्डा, लगभग 25 किमी।', 'Guwahati airport, about 25 km.'),
    },
    maps: 'Umananda Temple, Guwahati',
    nearby: [
      { name: l('माँ कामाख्या', 'Maa Kamakhya'), dist: l('लगभग 8 किमी', 'About 8 km'), text: l('नीलाचल पहाड़ी पर प्रमुख शक्तिपीठ।', 'The great Shakti Peeth on Nilachal hill.'), photoOf: 'kamakhya' },
    ],
  },
  {
    id: 'dakshineswar',
    name: l('दक्षिणेश्वर काली मंदिर', 'Dakshineswar Kali Temple'),
    place: l('दक्षिणेश्वर, हुगली नदी के किनारे, कोलकाता, पश्चिम बंगाल', 'Dakshineswar, on the Hooghly, Kolkata, West Bengal'),
    state: 'WB',
    groups: [],
    tags: [l('माँ काली', 'Maa Kali'), l('रामकृष्ण परमहंस', 'Ramakrishna Paramahamsa')],
    importance: l(
      'हुगली किनारे माँ भवतारिणी (काली) का मंदिर, जहाँ श्री रामकृष्ण परमहंस पुजारी रहे और साधना की। माँ काली शिव की छाती पर खड़ी हैं। नौ शिखरों वाला मुख्य मंदिर बंगाल की नवरत्न शैली का सुंदर उदाहरण है।',
      'The temple of Maa Bhavatarini (Kali) on the Hooghly, where Sri Ramakrishna Paramahamsa served as priest and did his sadhana. Kali stands on Shiva’s chest. The nine-spired main temple is a fine example of Bengal’s navaratna style.',
    ),
    katha: l(
      'परंपरा है कि रानी रासमणि काशी की यात्रा पर निकलने वाली थीं, तभी माँ काली ने सपने में कहा कि गंगा किनारे यहीं उनका मंदिर बनाकर पूजा करें। श्री रामकृष्ण को यहीं माँ के दर्शन हुए, और उनकी पत्नी माँ सारदा देवी भी यहीं रहीं।',
      'Tradition says Rani Rashmoni was about to set out for Kashi when Maa Kali told her in a dream to build her temple here on the Ganga and worship her. Sri Ramakrishna had his visions of the Mother here, and his wife Ma Sarada Devi also lived here.',
    ),
    history: l(
      'रानी रासमणि ने 1847 से 1855 के बीच मंदिर बनवाया और 31 मई 1855 को माँ की स्थापना हुई। पहले पुजारी रामकुमार थे; 1856 में उनके बाद उनके छोटे भाई श्री रामकृष्ण पुजारी बने। परिसर में 12 शिव मंदिर और राधा-कृष्ण मंदिर भी हैं।',
      'Rani Rashmoni built the temple between 1847 and 1855, and the Mother was installed on 31 May 1855. The first priest was Ramkumar; after him, in 1856, his younger brother Sri Ramakrishna became priest. The complex also has 12 Shiva temples and a Radha-Krishna temple.',
    ),
    todo: [
      l('माँ भवतारिणी के दर्शन', 'Darshan of Maa Bhavatarini'),
      l('श्री रामकृष्ण का कमरा और पंचवटी', 'Sri Ramakrishna’s room and the Panchavati'),
      l('नाव से बेलूर मठ', 'A boat across to Belur Math'),
    ],
    best: l('अक्टूबर से मार्च। काली पूजा (दीवाली की अमावस्या) और स्नान यात्रा पर बहुत भीड़।', 'October to March. Very crowded at Kali Puja (the Diwali new moon) and Snana Yatra.'),
    rules: l('मंदिर में मोबाइल और कैमरा मना हो सकता है; जमा करने की सुविधा है। सुबह जल्दी जाने पर कतार छोटी होती है।', 'Phones and cameras may not be allowed in the temple; there is a deposit counter. Queues are shorter early in the morning.'),
    how: {
      road: l('कोलकाता शहर के उत्तर में, विवेकानंद सेतु के पास।', 'In north Kolkata, near the Vivekananda Setu.'),
      rail: l('दक्षिणेश्वर रेलवे और मेट्रो स्टेशन, पैदल दूरी पर।', 'Dakshineswar railway and metro stations, within walking distance.'),
      air: l('कोलकाता हवाई अड्डा, लगभग 12 किमी।', 'Kolkata airport, about 12 km.'),
    },
    maps: 'Dakshineswar Kali Temple, Kolkata',
    nearby: [
      { name: l('बेलूर मठ', 'Belur Math'), dist: l('नदी के पार, लगभग 4 किमी', 'Across the river, about 4 km'), text: l('स्वामी विवेकानंद द्वारा स्थापित रामकृष्ण मठ और मिशन का मुख्यालय।', 'The headquarters of the Ramakrishna Math and Mission, founded by Swami Vivekananda.') },
      { name: l('कालीघाट काली मंदिर', 'Kalighat Kali Temple'), dist: l('लगभग 15 किमी', 'About 15 km'), text: l('कोलकाता का प्राचीन शक्तिपीठ।', 'Kolkata’s ancient Shakti Peeth.'), photoOf: 'kalighat' },
    ],
  },
  {
    id: 'kalighat',
    name: l('कालीघाट काली मंदिर', 'Kalighat Kali Temple'),
    place: l('कालीघाट, कोलकाता, पश्चिम बंगाल', 'Kalighat, Kolkata, West Bengal'),
    state: 'WB',
    groups: [],
    tags: [SHAKTI, l('माँ काली', 'Maa Kali')],
    importance: l(
      '51 शक्तिपीठों में से एक, जहाँ मान्यता है कि सती के दाएँ पैर की उँगलियाँ गिरी थीं। कोलकाता नाम भी "कालीघाट" से जुड़ा माना जाता है। माँ काली की मूर्ति की बड़ी आँखें और लंबी सुनहरी जीभ उनकी पहचान हैं।',
      'One of the 51 Shakti Peeths, where the toes of Sati’s right foot are believed to have fallen. The name Kolkata is also thought to be linked to "Kalighat". The Mother’s large eyes and long golden tongue are her mark here.',
    ),
    katha: l(
      'मान्यता है कि भगवान विष्णु के सुदर्शन चक्र से सती के शरीर के भाग अलग हुए, और यहाँ आदि गंगा के किनारे उनके पैर की उँगलियाँ गिरीं। यहाँ भैरव नकुलेश्वर के रूप में पूजे जाते हैं।',
      'It is believed that when Vishnu’s Sudarshan Chakra parted Sati’s body, her toes fell here on the Adi Ganga. The Bhairava is worshipped here as Nakuleshwar.',
    ),
    history: l(
      'वर्तमान मंदिर सबर्ण रॉय चौधरी परिवार के संरक्षण में 1798 से 1809 के बीच बना। यह बंगाल की आठचाला शैली में है। 2024 में बड़े जीर्णोद्धार में शिखरों पर सोना चढ़ाया गया।',
      'The present temple was built between 1798 and 1809 under the patronage of the Sabarna Roy Choudhury family, in Bengal’s ath-chala style. In a major renovation in 2024 the spires were covered in gold.',
    ),
    todo: [
      l('माँ काली के दर्शन', 'Darshan of Maa Kali'),
      l('नकुलेश्वर भैरव मंदिर', 'The Nakuleshwar Bhairava temple'),
    ],
    best: l('अक्टूबर से मार्च। काली पूजा, दुर्गा पूजा, पोइला बैशाख और अमावस्या पर बहुत भीड़।', 'October to March. Very crowded at Kali Puja, Durga Puja, Poila Baisakh and on new-moon days.'),
    rules: l('मंदिर में पंडे दर्शन के लिए पैसे माँग सकते हैं; आधिकारिक कतार से ही जाएँ। यहाँ बलि की परंपरा है।', 'Touts may ask for money for darshan; use the official queue. There is a tradition of animal sacrifice here.'),
    how: {
      road: l('दक्षिण कोलकाता में।', 'In south Kolkata.'),
      rail: l('कालीघाट मेट्रो स्टेशन, लगभग 1 किमी; हावड़ा स्टेशन लगभग 9 किमी।', 'Kalighat metro, about 1 km; Howrah station about 9 km.'),
      air: l('कोलकाता हवाई अड्डा, लगभग 22 किमी।', 'Kolkata airport, about 22 km.'),
    },
    maps: 'Kalighat Kali Temple, Kolkata',
    note: PEETH_NOTE,
    nearby: [
      { name: l('दक्षिणेश्वर काली मंदिर', 'Dakshineswar Kali Temple'), dist: l('लगभग 15 किमी', 'About 15 km'), text: l('रानी रासमणि का बनवाया मंदिर, जहाँ रामकृष्ण परमहंस रहे।', 'Rani Rashmoni’s temple, where Ramakrishna Paramahamsa lived.'), photoOf: 'dakshineswar' },
      { name: l('तारापीठ', 'Tarapith'), dist: l('लगभग 220 किमी', 'About 220 km'), text: l('माँ तारा का तंत्र पीठ।', 'The Tantra seat of Maa Tara.'), photoOf: 'tarapith' },
    ],
  },
  {
    id: 'tarapith',
    name: l('तारापीठ', 'Tarapith'),
    place: l('तारापीठ, रामपुरहाट, बीरभूम ज़िला, पश्चिम बंगाल', 'Tarapith, Rampurhat, Birbhum district, West Bengal'),
    state: 'WB',
    groups: [],
    tags: [SHAKTI, l('माँ तारा', 'Maa Tara')],
    importance: l(
      'माँ तारा (दस महाविद्याओं में दूसरी) का प्रसिद्ध तंत्र पीठ, जिसके पास श्मशान है। संत बामाखेपा ने यहीं साधना की, और उनकी समाधि भी यहीं है। मान्यता है कि यहाँ सती की तीसरी आँख (नेत्र) गिरी थी।',
      'The famous Tantra seat of Maa Tara (second of the ten Mahavidyas), beside a cremation ground. The saint Bamakhepa did his sadhana here, and his samadhi is here too. Sati’s third eye is believed to have fallen here.',
    ),
    katha: l(
      'एक कथा है कि ऋषि वशिष्ठ ने यहाँ माँ तारा की साधना करके सिद्धि पाई। दूसरी प्रसिद्ध कथा में माँ तारा शिव को, जिन्होंने विष पिया था, बालक की तरह स्तनपान कराकर विष का कष्ट शांत करती हैं; मूर्ति में यही रूप है।',
      'One story says Sage Vashistha attained siddhi here through the worship of Maa Tara. Another famous story has Tara nursing Shiva like a child after he drank the poison, easing its burning; the image here shows that form.',
    ),
    history: l(
      'मंदिर द्वारका नदी के किनारे है और कई बार फिर बना है। 19वीं सदी के संत बामाखेपा (वामाखेपा) के कारण यह स्थान बहुत प्रसिद्ध हुआ।',
      'The temple is on the Dwarka river and has been rebuilt several times. It became very famous because of the 19th-century saint Bamakhepa (Vamakhepa).',
    ),
    todo: [
      l('माँ तारा के दर्शन', 'Darshan of Maa Tara'),
      l('बामाखेपा की समाधि', 'The samadhi of Bamakhepa'),
    ],
    best: l('अक्टूबर से मार्च। कौशिकी अमावस्या (भाद्रपद) और काली पूजा पर बहुत भीड़।', 'October to March. Very crowded at Kaushiki Amavasya (Bhadrapada) and Kali Puja.'),
    rules: l('यह तंत्र पीठ है और पास में श्मशान है। पंडों से दक्षिणा पहले तय करें; आधिकारिक कतार से जाएँ।', 'This is a Tantra seat with a cremation ground beside it. Agree any fee with priests first; use the official queue.'),
    how: {
      road: l('रामपुरहाट से लगभग 9 किमी, कोलकाता से लगभग 220 किमी।', 'About 9 km from Rampurhat and 220 km from Kolkata.'),
      rail: l('रामपुरहाट जंक्शन या तारापीठ रोड स्टेशन।', 'Rampurhat Junction or Tarapith Road station.'),
      air: l('कोलकाता हवाई अड्डा; दुर्गापुर भी विकल्प।', 'Kolkata airport; Durgapur is also an option.'),
    },
    maps: 'Tarapith Temple, Birbhum',
    note: PEETH_NOTE,
    nearby: [
      { name: l('कालीघाट काली मंदिर', 'Kalighat Kali Temple'), dist: l('लगभग 220 किमी', 'About 220 km'), text: l('कोलकाता का प्राचीन शक्तिपीठ।', 'Kolkata’s ancient Shakti Peeth.'), photoOf: 'kalighat' },
    ],
  },
  {
    id: 'rajrappa',
    name: l('माँ छिन्नमस्तिका, रजरप्पा', 'Maa Chhinnamastika, Rajrappa'),
    place: l('रजरप्पा, रामगढ़ ज़िला, झारखंड', 'Rajrappa, Ramgarh district, Jharkhand'),
    state: 'JH',
    groups: [],
    tags: [l('महाविद्या', 'Mahavidya'), l('देवी', 'Devi')],
    importance: l(
      'दामोदर और भैरवी (भेड़ा) नदी के संगम पर माँ छिन्नमस्तिका का मंदिर, जो दस महाविद्याओं में से एक हैं। झारखंड का सबसे प्रसिद्ध देवी तीर्थ। यहाँ प्राकृतिक शिला पर अष्टधातु का आवरण चढ़ाकर माँ की पूजा होती है।',
      'The temple of Maa Chhinnamastika, one of the ten Mahavidyas, at the meeting of the Damodar and Bhairavi (Bhera) rivers. Jharkhand’s best-known Devi shrine. The Mother is worshipped as a natural rock covered with an eight-metal sheath.',
    ),
    katha: l(
      'छिन्नमस्ता का रूप त्याग का प्रतीक है: कथा है कि अपनी भूखी सहचरियों जया और विजया की भूख मिटाने के लिए माँ ने स्वयं अपना सिर काटा, और गले से निकली रक्त की तीन धाराओं से तीनों ने तृप्ति पाई।',
      'Chhinnamasta’s form stands for self-giving: the story says that to feed her hungry companions Jaya and Vijaya, the Mother cut off her own head, and three streams of blood from her neck fed all three.',
    ),
    history: l(
      'मंदिर बहुत पुराना माना जाता है; पुराने मंदिर की जगह नया मंदिर बना है। परिसर में तारा, भुवनेश्वरी, भैरवी, मातंगी जैसी महाविद्याओं, दक्षिण काली, सूर्य, हनुमान और शिव के मंदिर भी हैं।',
      'The temple is held to be very old; a new temple stands in place of the old one. The complex also has temples of Mahavidyas such as Tara, Bhuvaneshwari, Bhairavi and Matangi, and of Dakshina Kali, Surya, Hanuman and Shiva.',
    ),
    todo: [
      l('माँ छिन्नमस्तिका के दर्शन', 'Darshan of Maa Chhinnamastika'),
      l('दामोदर-भैरवी संगम और रजरप्पा जलप्रपात', 'The Damodar-Bhairavi confluence and Rajrappa falls'),
    ],
    best: l('अक्टूबर से मार्च। मकर संक्रांति, विजयादशमी और नवरात्र में मेला।', 'October to March. Fairs at Makar Sankranti, Vijayadashami and Navratri.'),
    rules: l('यहाँ बलि की परंपरा है। संगम पर नदी के बहाव का ध्यान रखें।', 'There is a tradition of animal sacrifice here. Mind the current at the confluence.'),
    how: {
      road: l('रामगढ़ कैंट से लगभग 28 किमी, राँची से लगभग 80 किमी।', 'About 28 km from Ramgarh Cantonment and 80 km from Ranchi.'),
      rail: l('रामगढ़ कैंट स्टेशन।', 'Ramgarh Cantonment station.'),
      air: l('राँची हवाई अड्डा।', 'Ranchi airport.'),
    },
    maps: 'Maa Chhinnamastika Temple, Rajrappa',
    note: l('कुछ भक्त इसे शक्तिपीठ मानते हैं, पर यह 51 शक्तिपीठों की प्रमुख सूचियों में नहीं है।', 'Some devotees count it as a Shakti Peeth, but it is not in the main lists of the 51.'),
    nearby: [
      { name: l('बाबा बैद्यनाथ धाम, देवघर', 'Baba Baidyanath Dham, Deoghar'), dist: l('लगभग 250 किमी', 'About 250 km'), text: l('12 ज्योतिर्लिंगों में से एक।', 'One of the 12 Jyotirlingas.'), photoOf: 'vaidyanath' },
    ],
  },
  {
    id: 'lingaraj',
    name: l('लिंगराज मंदिर', 'Lingaraj Temple'),
    place: l('पुराना शहर, भुवनेश्वर, ओडिशा', 'Old Town, Bhubaneswar, Odisha'),
    state: 'OD',
    groups: [],
    tags: [l('शिव', 'Shiva'), l('हरिहर', 'Harihara')],
    importance: l(
      'भुवनेश्वर का सबसे बड़ा और प्रसिद्ध मंदिर। यहाँ स्वयंभू लिंग की पूजा लिंगराज (शिव) के रूप में होती है, और पूजा में बेलपत्र के साथ तुलसी भी चढ़ती है, इसलिए उन्हें हरिहर (शिव और विष्णु एक साथ) माना जाता है। लगभग 55 मीटर ऊँचा शिखर कलिंग शैली का उत्कृष्ट उदाहरण है।',
      'Bhubaneswar’s largest and most famous temple. A self-formed linga is worshipped here as Lingaraj (Shiva), offered tulsi as well as bel leaves, so he is held to be Harihara (Shiva and Vishnu as one). The tower of about 55 m is a masterpiece of the Kalinga style.',
    ),
    katha: l(
      'एकाम्र पुराण के अनुसार भुवनेश्वर एकाम्र क्षेत्र है, जहाँ शिव ने वास किया। मान्यता है कि पास का बिंदु सागर सरोवर पृथ्वी के सब तीर्थों के जल की बूँदों से बना है।',
      'In the Ekamra Purana, Bhubaneswar is the Ekamra Kshetra where Shiva made his home. The nearby Bindu Sagar lake is believed to hold drops of water from every holy place on earth.',
    ),
    history: l(
      'मंदिर 11वीं सदी में सोमवंशी राजाओं के समय बना, परंपरा इसे राजा ययाति केशरी से जोड़ती है। बाद में गंग राजाओं ने इसमें जोड़ किए। परिसर में 100 से अधिक छोटे मंदिर हैं।',
      'The temple was built in the 11th century under the Somavamshi kings; tradition links it to King Yayati Keshari. The Ganga kings added to it later. The complex has more than 100 smaller shrines.',
    ),
    todo: [
      l('लिंगराज के दर्शन', 'Darshan of Lingaraj'),
      l('बिंदु सागर में स्नान', 'Bathe in Bindu Sagar'),
      l('अशोकाष्टमी की रुकुना रथ यात्रा', 'The Rukuna Rath Yatra on Ashokashtami'),
    ],
    best: l('अक्टूबर से मार्च। महाशिवरात्रि (फाल्गुन) पर बहुत भीड़।', 'October to March. Very crowded at Mahashivratri (Phalgun).'),
    rules: l('मंदिर परिसर में सिर्फ़ हिंदुओं का प्रवेश है; दूसरों के लिए दीवार के पास एक देखने का मंच है। मोबाइल और कैमरा अंदर मना है।', 'Only Hindus may enter the compound; others can use a viewing platform by the wall. Phones and cameras are not allowed inside.'),
    how: {
      road: l('भुवनेश्वर शहर में; पुरी से लगभग 60 किमी।', 'In Bhubaneswar; about 60 km from Puri.'),
      rail: l('भुवनेश्वर स्टेशन, लगभग 5 किमी।', 'Bhubaneswar station, about 5 km.'),
      air: l('भुवनेश्वर हवाई अड्डा, लगभग 4 किमी।', 'Bhubaneswar airport, about 4 km.'),
    },
    maps: 'Lingaraj Temple, Bhubaneswar',
    nearby: [
      { name: l('जगन्नाथ पुरी', 'Jagannath Puri'), dist: l('लगभग 60 किमी', 'About 60 km'), text: l('चार धामों में से एक।', 'One of the Char Dham.'), photoOf: 'jagannath-puri' },
    ],
  },
  {
    id: 'danteshwari',
    name: l('माँ दंतेश्वरी', 'Maa Danteshwari'),
    place: l('दंतेवाड़ा, छत्तीसगढ़', 'Dantewada, Chhattisgarh'),
    state: 'CG',
    groups: [],
    tags: [SHAKTI, l('बस्तर की कुलदेवी', 'Family goddess of Bastar')],
    importance: l(
      'बस्तर की कुलदेवी माँ दंतेश्वरी का मंदिर, शंखिनी और डंकिनी नदियों के संगम पर। मान्यता है कि यहाँ सती का दाँत (दंत) गिरा, इसी से नाम दंतेवाड़ा। बस्तर का 75 दिन का दशहरा माँ दंतेश्वरी को समर्पित है।',
      'The temple of Maa Danteshwari, family goddess of Bastar, at the meeting of the Shankhini and Dankini rivers. Sati’s tooth (dant) is believed to have fallen here, giving Dantewada its name. Bastar’s 75-day Dussehra is dedicated to her.',
    ),
    katha: l(
      'परंपरा है कि काकतीय वंश के राजा अन्नमदेव वारंगल से बस्तर आए, तो माँ ने उनसे कहा कि वे आगे चलें और पीछे मुड़कर न देखें; जहाँ नदी की रेत में उनके पायल की आवाज़ रुकी और राजा ने मुड़कर देखा, माँ वहीं ठहर गईं।',
      'Tradition says when King Annamdev of the Kakatiya line came from Warangal to Bastar, the Mother told him to walk ahead and not look back; where the sound of her anklets stopped in the river sand and the king turned round, she stayed.',
    ),
    history: l(
      'मंदिर का संबंध 14वीं सदी के काकतीय (बस्तर) राजाओं से है। गर्भगृह की काले पत्थर की मूर्ति बहुत प्राचीन मानी जाती है। बस्तर दशहरे में माँ की डोली जगदलपुर ले जाई जाती है।',
      'The temple is linked to the 14th-century Kakatiya (Bastar) kings. The black stone image in the sanctum is held to be very ancient. At Bastar Dussehra the Mother’s palanquin is carried to Jagdalpur.',
    ),
    todo: [
      l('माँ दंतेश्वरी के दर्शन', 'Darshan of Maa Danteshwari'),
      l('शंखिनी-डंकिनी संगम', 'The Shankhini-Dankini confluence'),
      l('बस्तर दशहरा (आश्विन)', 'Bastar Dussehra (Ashwin)'),
    ],
    best: l('अक्टूबर से फ़रवरी। नवरात्र और बस्तर दशहरे में विशेष उत्सव।', 'October to February. Special festivals in Navratri and Bastar Dussehra.'),
    rules: l('गर्भगृह में जाने के लिए पुरुषों को धोती पहननी होती है (मंदिर में मिल जाती है)। यात्रा से पहले क्षेत्र की ताज़ा सरकारी सलाह देख लें।', 'Men must wear a dhoti to enter the sanctum (available at the temple). Check current official advice for the area before travelling.'),
    how: {
      road: l('जगदलपुर से लगभग 85 किमी।', 'About 85 km from Jagdalpur.'),
      rail: l('दंतेवाड़ा स्टेशन (किरंदुल-विशाखापत्तनम लाइन)।', 'Dantewada station (Kirandul-Visakhapatnam line).'),
      air: l('जगदलपुर हवाई अड्डा; रायपुर बड़ा विकल्प।', 'Jagdalpur airport; Raipur is the larger option.'),
    },
    maps: 'Maa Danteshwari Temple, Dantewada',
    note: PEETH_NOTE,
    nearby: [
      { name: l('चित्रकोट जलप्रपात', 'Chitrakote Falls'), dist: l('लगभग 120 किमी', 'About 120 km'), text: l('इंद्रावती नदी का विशाल जलप्रपात।', 'The great waterfall of the Indravati river.') },
    ],
  },
  {
    id: 'bamleshwari',
    name: l('माँ बम्लेश्वरी, डोंगरगढ़', 'Maa Bamleshwari, Dongargarh'),
    place: l('डोंगरगढ़, राजनांदगाँव ज़िला, छत्तीसगढ़', 'Dongargarh, Rajnandgaon district, Chhattisgarh'),
    state: 'CG',
    groups: [],
    tags: [l('देवी', 'Devi')],
    importance: l(
      'लगभग 1,600 फ़ुट ऊँची पहाड़ी पर माँ बम्लेश्वरी का मंदिर, जहाँ लगभग 1,000 सीढ़ियाँ चढ़कर या रोपवे से पहुँचते हैं। नीचे छोटी बम्लेश्वरी का मंदिर है। नवरात्र में छत्तीसगढ़ का सबसे बड़ा मेला यहीं लगता है।',
      'The temple of Maa Bamleshwari on a hill about 1,600 ft high, reached by about 1,000 steps or a ropeway. Below is the temple of Chhoti Bamleshwari. Chhattisgarh’s biggest Navratri fair is held here.',
    ),
    katha: l(
      'लोककथा राजा कामसेन (कामाख्या नगरी) और संगीतकार माधवानल तथा नर्तकी कामकंदला की प्रेमकथा से जुड़ी है। कथा है कि राजा विक्रमादित्य और कामसेन के युद्ध के बाद माँ की कृपा से सबका भला हुआ, और राजा ने पहाड़ी पर माँ का मंदिर बनवाया।',
      'The folk story is tied to King Kamsen of Kamakhya Nagri and the love of the musician Madhavanal and the dancer Kamkandala. It says that after the war between King Vikramaditya and Kamsen, all ended well by the Mother’s grace, and the king built her temple on the hill.',
    ),
    history: l(
      'मंदिर लगभग 2,000 साल पुराना बताया जाता है, पर यह परंपरा है। डोंगरगढ़ का पुराना नाम कामावती नगरी माना जाता है।',
      'The temple is said to be about 2,000 years old, though this is tradition. Dongargarh’s old name is held to be Kamavati Nagri.',
    ),
    todo: [
      l('पहाड़ी पर बड़ी बम्लेश्वरी के दर्शन', 'Darshan of Badi Bamleshwari on the hill'),
      l('नीचे छोटी बम्लेश्वरी के दर्शन', 'Darshan of Chhoti Bamleshwari below'),
      l('नवरात्र में ज्योति कलश', 'The jyoti kalash lamps in Navratri'),
    ],
    best: l('अक्टूबर से मार्च। चैत्र और आश्विन नवरात्र में बड़ा मेला।', 'October to March. Big fairs in the Chaitra and Ashwin Navratris.'),
    rules: ASK,
    how: {
      road: l('राजनांदगाँव से लगभग 35 किमी, रायपुर से लगभग 100 किमी।', 'About 35 km from Rajnandgaon and 100 km from Raipur.'),
      rail: l('डोंगरगढ़ स्टेशन (हावड़ा-मुंबई लाइन)।', 'Dongargarh station (Howrah-Mumbai line).'),
      air: l('रायपुर हवाई अड्डा।', 'Raipur airport.'),
    },
    maps: 'Maa Bamleshwari Temple, Dongargarh',
    nearby: [
      { name: l('माँ दंतेश्वरी, दंतेवाड़ा', 'Maa Danteshwari, Dantewada'), dist: l('लगभग 450 किमी', 'About 450 km'), text: l('बस्तर की कुलदेवी का शक्तिपीठ।', 'The Shakti Peeth of Bastar’s family goddess.'), photoOf: 'danteshwari' },
    ],
  },
]
