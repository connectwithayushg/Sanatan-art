/**
 * State-wise temples, north: Jammu & Kashmir, Punjab, Himachal Pradesh, Haryana, Delhi, Rajasthan, Bihar.
 * These are not in a pilgrimage list; they appear on the state map. Facts cross-checked between Wikipedia, temple boards
 * and state tourism pages. Where dates rest on tradition or sources differ, the page says so. Distances are rounded.
 */
import { l, type Temple } from './templeTypes'

const ASK = l(
  'त्योहारों और नवरात्र में भीड़ बहुत होती है। दर्शन का समय और नियम बदलते रहते हैं, इसलिए मंदिर से पूछ लें।',
  'It is very crowded at festivals and Navratri. Darshan timings and rules change, so check with the temple.',
)
const SHAKTI = l('शक्तिपीठ', 'Shakti Peeth')

export const NORTH_TEMPLES: Temple[] = [
  {
    id: 'vaishno-devi',
    name: l('माता वैष्णो देवी', 'Mata Vaishno Devi'),
    place: l('त्रिकूट पर्वत, कटरा, रियासी ज़िला, जम्मू और कश्मीर', 'Trikuta hills, Katra, Reasi district, Jammu & Kashmir'),
    state: 'JK',
    groups: [],
    tags: [l('देवी', 'Devi'), l('गुफा मंदिर', 'Cave shrine')],
    importance: l(
      'भारत के सबसे अधिक दर्शन किए जाने वाले मंदिरों में से एक। त्रिकूट पर्वत की गुफा में तीन पिंडियों के रूप में माँ महाकाली, महालक्ष्मी और महासरस्वती विराजती हैं। हर साल लगभग एक करोड़ भक्त कटरा से पैदल चढ़ाई करके दर्शन करते हैं।',
      'One of the most visited shrines in India. In a cave on the Trikuta hills the Mother is worshipped as three pindis: Mahakali, Mahalakshmi and Mahasaraswati. About ten million devotees a year walk up from Katra for darshan.',
    ),
    katha: l(
      'लोककथा है कि माँ ने वैष्णवी नाम की कन्या के रूप में जन्म लिया और त्रिकूट पर तपस्या की। भैरोनाथ उनका पीछा करते रहे; माँ अर्धकुंवारी की गुफा में नौ महीने रहीं, फिर भवन की गुफा में भैरो का वध किया। भैरो का सिर पास की पहाड़ी पर गिरा, और क्षमा माँगने पर माँ ने वरदान दिया कि उनके दर्शन के बाद भैरो के दर्शन से ही यात्रा पूरी होगी। पंडित श्रीधर के भंडारे की कथा भी यहीं से जुड़ी है।',
      'The folk story says the Mother was born as a girl named Vaishnavi and did penance on Trikuta. Bhairon Nath pursued her; she stayed nine months in the Ardhkuwari cave, then slew Bhairon at the cave of the Bhawan. His head fell on a nearby hill, and when he begged forgiveness she blessed him: the yatra is complete only with his darshan after hers. The story of Pandit Shridhar’s feast is also linked to this place.',
    ),
    history: l(
      'गुफा बहुत प्राचीन मानी जाती है, पर लिखित इतिहास बाद का है। 1846 में महाराजा गुलाब सिंह के समय धर्मार्थ ट्रस्ट बना। 1986 से श्री माता वैष्णो देवी श्राइन बोर्ड प्रबंधन करता है, जिसके अध्यक्ष जम्मू-कश्मीर के उपराज्यपाल होते हैं।',
      'The cave is held to be very ancient, though the written record is later. In 1846, under Maharaja Gulab Singh, the Dharmarth Trust was set up. Since 1986 the Shri Mata Vaishno Devi Shrine Board, chaired by the Lieutenant Governor of J&K, manages the shrine.',
    ),
    todo: [
      l('कटरा से भवन तक लगभग 12 किमी की चढ़ाई (पैदल, घोड़ा, पालकी या बैटरी कार; हेलीकॉप्टर सांझीछत तक)', 'The climb of about 12 km from Katra to the Bhawan (on foot, pony, palki or battery car; helicopter to Sanjhichhat)'),
      l('तीन पिंडियों के दर्शन', 'Darshan of the three pindis'),
      l('अर्धकुंवारी गुफा और भैरो मंदिर के दर्शन', 'Ardhkuwari cave and the Bhairon temple'),
    ],
    best: l('मार्च से जून और सितंबर से अक्टूबर। नवरात्र में बहुत भीड़; सर्दी में बर्फ़ गिर सकती है और बरसात में भूस्खलन का ख़तरा रहता है।', 'March to June and September to October. Navratri is very crowded; winter can bring snow and the monsoon brings landslide risk.'),
    rules: l('यात्रा के लिए पंजीकरण (RFID यात्रा कार्ड) ज़रूरी है, जो कटरा में या श्राइन बोर्ड की आधिकारिक वेबसाइट पर मिलता है। चमड़े का सामान और मोबाइल भवन में मना हो सकता है; लॉकर मिलते हैं।', 'Registration (an RFID yatra card) is required, from Katra or the Shrine Board’s official website. Leather items and phones may not be allowed at the Bhawan; lockers are available.'),
    how: {
      road: l('जम्मू से कटरा लगभग 50 किमी।', 'Katra is about 50 km from Jammu.'),
      rail: l('श्री माता वैष्णो देवी कटरा रेलवे स्टेशन।', 'Shri Mata Vaishno Devi Katra railway station.'),
      air: l('जम्मू हवाई अड्डा, लगभग 50 किमी।', 'Jammu airport, about 50 km.'),
    },
    site: 'https://www.maavaishnodevi.org',
    maps: 'Mata Vaishno Devi Bhawan, Katra',
    note: l('कुछ परंपराएँ इसे शक्तिपीठ मानती हैं (सती का सिर या दायाँ हाथ गिरने का स्थान), पर इस पर मत अलग-अलग हैं।', 'Some traditions count it as a Shakti Peeth (where Sati’s head or right arm fell), but views differ.'),
    nearby: [
      { name: l('भैरो मंदिर', 'Bhairon temple'), dist: l('भवन से लगभग 2 किमी ऊपर', 'About 2 km above the Bhawan'), text: l('मान्यता है कि यहाँ दर्शन से ही यात्रा पूरी होती है।', 'The yatra is believed complete only with darshan here.') },
      { name: l('अर्धकुंवारी', 'Ardhkuwari'), dist: l('रास्ते में, लगभग आधी चढ़ाई पर', 'On the way, about halfway up'), text: l('वह गुफा जहाँ माँ नौ महीने रहीं, गर्भजून कहलाती है।', 'The cave where the Mother stayed nine months, called Garbh Joon.') },
    ],
  },
  {
    id: 'amarnath',
    name: l('अमरनाथ गुफा', 'Amarnath Cave'),
    place: l('पहलगाम तहसील, अनंतनाग ज़िला, जम्मू और कश्मीर', 'Pahalgam tehsil, Anantnag district, Jammu & Kashmir'),
    state: 'JK',
    groups: [],
    tags: [l('शिव', 'Shiva'), l('बर्फ़ानी बाबा', 'Barfani Baba')],
    importance: l(
      'लगभग 3,888 मीटर ऊँची गुफा में बर्फ़ का प्राकृतिक शिवलिंग बनता है, जिसे बाबा बर्फ़ानी कहते हैं। यह हर साल गर्मियों में बढ़ता है और फिर घटता है। यात्रा सावन में होती है और रक्षाबंधन (श्रावण पूर्णिमा) पर पूरी होती है।',
      'In a cave at about 3,888 m a natural lingam of ice forms, called Baba Barfani. It grows each summer and then shrinks. The yatra is held in Sawan and ends on Raksha Bandhan (Shravan Purnima).',
    ),
    katha: l(
      'मान्यता है कि यहीं भगवान शिव ने माता पार्वती को अमरत्व का रहस्य (अमर कथा) सुनाया। कथा कोई और न सुने, इसलिए रास्ते में उन्होंने नंदी को पहलगाम में, चंद्रमा को चंदनवाड़ी में, नागों को शेषनाग में और गणेश जी को महागुनस पर छोड़ा। लोककथा है कि गुफा में रहने वाले कबूतरों के जोड़े ने कथा सुन ली और अमर हो गए।',
      'It is believed that here Shiva told Parvati the secret of immortality (the Amar Katha). So that no one else would hear, on the way he left Nandi at Pahalgam, the moon at Chandanwari, the serpents at Sheshnag and Ganesha at Mahagunas. The folk story says a pair of doves in the cave heard it and became immortal.',
    ),
    history: l(
      'गुफा का उल्लेख पुराने कश्मीरी ग्रंथों में मिलता है। एक लोकप्रिय कथा के अनुसार 19वीं सदी में बूटा मलिक नाम के गड़रिये ने इसे फिर खोजा। आज श्री अमरनाथजी श्राइन बोर्ड (2000 से) सरकार के साथ यात्रा का प्रबंधन करता है।',
      'The cave is mentioned in old Kashmiri texts. A popular story says a shepherd named Buta Malik rediscovered it in the 19th century. Today the Shri Amarnathji Shrine Board (since 2000) runs the yatra with the government.',
    ),
    todo: [
      l('बर्फ़ के शिवलिंग के दर्शन', 'Darshan of the ice lingam'),
      l('पहलगाम-चंदनवाड़ी-शेषनाग-पंचतरणी का लंबा रास्ता (लगभग 46 किमी) या बालटाल का छोटा पर खड़ा रास्ता (लगभग 14 किमी)', 'The long route via Pahalgam, Chandanwari, Sheshnag and Panchtarni (about 46 km) or the short, steep Baltal route (about 14 km)'),
    ],
    best: l('सिर्फ़ यात्रा के दिनों में (आमतौर पर जुलाई-अगस्त)। हर साल तारीख़ें श्राइन बोर्ड घोषित करता है।', 'Only during the yatra (usually July to August). The Shrine Board announces the dates each year.'),
    rules: l('पहले से पंजीकरण और स्वास्थ्य प्रमाणपत्र अनिवार्य है। उम्र की सीमा और बाकी नियम हर साल बोर्ड तय करता है। गर्म कपड़े, बरसाती और ज़रूरी दवाएँ रखें; ऊँचाई पर साँस फूल सकती है।', 'Advance registration and a health certificate are compulsory. The age limit and other rules are set by the Board each year. Carry warm clothes, rain gear and medicines; breathing can be hard at this height.'),
    how: {
      road: l('श्रीनगर से पहलगाम लगभग 95 किमी, बालटाल लगभग 95 किमी।', 'Pahalgam and Baltal are each about 95 km from Srinagar.'),
      rail: l('जम्मू तवी या कटरा तक रेल, आगे सड़क से।', 'Rail to Jammu Tawi or Katra, then by road.'),
      air: l('श्रीनगर हवाई अड्डा।', 'Srinagar airport.'),
    },
    site: 'https://jksasb.nic.in',
    maps: 'Amarnath Cave',
    note: l('गुफा की खोज के बारे में अलग-अलग कथाएँ हैं (भृगु ऋषि और बूटा मलिक)। रास्तों की दूरी अलग-अलग स्रोतों में थोड़ी अलग है।', 'There are different stories of the cave’s discovery (Sage Bhrigu and Buta Malik). Route distances differ a little between sources.'),
    nearby: [
      { name: l('माता वैष्णो देवी', 'Mata Vaishno Devi'), dist: l('जम्मू क्षेत्र में, सड़क से लगभग 300 किमी', 'In the Jammu region, about 300 km by road'), text: l('बहुत से भक्त दोनों यात्राएँ साथ करते हैं।', 'Many devotees make both yatras together.'), photoOf: 'vaishno-devi' },
    ],
  },
  {
    id: 'durgiana',
    name: l('श्री दुर्ग्याणा मंदिर', 'Shri Durgiana Temple'),
    place: l('लोहगढ़ गेट के पास, अमृतसर, पंजाब', 'Near Lohgarh Gate, Amritsar, Punjab'),
    state: 'PB',
    groups: [],
    tags: [l('देवी', 'Devi'), l('लक्ष्मी नारायण', 'Lakshmi Narayan')],
    importance: l(
      'अमृतसर का सबसे प्रसिद्ध हिंदू मंदिर। माँ दुर्गा के नाम पर बना यह मंदिर सरोवर के बीच है और इसमें लक्ष्मी नारायण जी भी विराजते हैं। चाँदी के दरवाज़ों के कारण इसे "सिल्वर टेम्पल" भी कहते हैं।',
      'Amritsar’s best-known Hindu temple. Named after Maa Durga, it stands in the middle of a sacred tank and also houses Lakshmi Narayan. Its silver doors give it the name "Silver Temple".',
    ),
    katha: l(
      'परिसर में बड़ा हनुमान मंदिर है। लोककथा है कि लव और कुश ने अश्वमेध का घोड़ा रोका और हनुमान जी को यहीं बाँध दिया था। इसी से नवरात्र में लंगूर मेला लगता है, जब मन्नत वाले बच्चे लंगूर का वेश पहनते हैं।',
      'The complex has the Bada Hanuman temple. The folk story says Lav and Kush stopped the Ashwamedha horse and tied Hanuman here. This is the origin of the Langur Mela in Navratri, when children with a vow dress as langurs.',
    ),
    history: l(
      'पुराना मंदिर 18वीं सदी का ईंटों का ढाँचा था। 1921 में गुरु हरसाई मल कपूर ने इसे हरमंदिर साहिब की शैली में फिर बनवाया: बीच में मंदिर, चारों ओर सरोवर और पुल। कुछ स्रोत मूल मंदिर को 16वीं सदी का बताते हैं, पर इसका पक्का प्रमाण नहीं है।',
      'The old temple was an 18th-century brick building. In 1921 Guru Harsai Mal Kapoor rebuilt it in the style of Harmandir Sahib: the shrine in the middle, a tank around it and a bridge. Some sources date the first temple to the 16th century, without firm proof.',
    ),
    todo: [
      l('माँ दुर्गा और लक्ष्मी नारायण जी के दर्शन', 'Darshan of Maa Durga and Lakshmi Narayan'),
      l('बड़ा हनुमान मंदिर और शीतला माता मंदिर', 'The Bada Hanuman and Sheetla Mata temples'),
      l('नवरात्र का लंगूर मेला', 'The Langur Mela in Navratri'),
    ],
    best: l('अक्टूबर से मार्च। दशहरा, दीवाली और जन्माष्टमी पर विशेष सजावट।', 'October to March. Special decorations at Dussehra, Diwali and Janmashtami.'),
    rules: ASK,
    how: {
      road: l('अमृतसर बस अड्डे से लगभग 1.5 किमी।', 'About 1.5 km from Amritsar bus stand.'),
      rail: l('अमृतसर जंक्शन, लगभग 1 किमी।', 'Amritsar Junction, about 1 km.'),
      air: l('अमृतसर हवाई अड्डा, लगभग 12 किमी।', 'Amritsar airport, about 12 km.'),
    },
    maps: 'Shri Durgiana Temple, Amritsar',
    nearby: [
      { name: l('हरमंदिर साहिब (स्वर्ण मंदिर)', 'Harmandir Sahib (Golden Temple)'), dist: l('लगभग 2 किमी', 'About 2 km'), text: l('सिखों का सबसे पवित्र गुरुद्वारा।', 'The holiest gurdwara of the Sikhs.') },
    ],
  },
  {
    id: 'jwalamukhi',
    name: l('माँ ज्वालामुखी (ज्वाला जी)', 'Maa Jwalamukhi (Jwala Ji)'),
    place: l('ज्वालामुखी, कांगड़ा ज़िला, हिमाचल प्रदेश', 'Jawalamukhi, Kangra district, Himachal Pradesh'),
    state: 'HP',
    groups: [],
    tags: [SHAKTI, l('अखंड ज्योति', 'Eternal flame')],
    importance: l(
      'यहाँ कोई मूर्ति नहीं है। चट्टानों से निकलती प्राकृतिक ज्योतियाँ ही माँ का रूप मानी जाती हैं और सदियों से बिना तेल-बाती के जल रही हैं। मान्यता है कि यहाँ सती की जीभ गिरी थी।',
      'There is no idol here. Natural flames rising from the rock are worshipped as the Mother and have burned for centuries without oil or wick. Sati’s tongue is believed to have fallen here.',
    ),
    katha: l(
      'लोककथा है कि एक ग्वाले ने देखा कि एक कन्या उसकी गाय का दूध पी जाती है। पीछा करने पर उसे पहाड़ पर ज्योति दिखी। राजा भूमि चंद ने यहाँ मंदिर बनवाया। एक और कथा है कि अकबर ने ज्योति बुझाने की कोशिश की, न बुझने पर सोने का छत्र चढ़ाया, जो किसी अनजान धातु में बदल गया।',
      'The folk story says a cowherd saw a girl drinking his cow’s milk; following her, he saw a flame on the hill. Raja Bhumi Chand built a temple here. Another story says Akbar tried to put out the flame, failed, and offered a gold parasol, which turned into an unknown metal.',
    ),
    history: l(
      'मंदिर बहुत पुराना है। महाराजा रणजीत सिंह ने 19वीं सदी में इसका गुंबद सोने से मढ़वाया। ज्योतियों का कारण प्राकृतिक गैस माना जाता है, पर इस पर भी मत अलग हैं।',
      'The temple is very old. Maharaja Ranjit Singh had its dome gilded in the 19th century. The flames are thought to come from natural gas, though views differ on that too.',
    ),
    todo: [
      l('ज्योतियों के दर्शन', 'Darshan of the flames'),
      l('गोरख डिब्बी (जहाँ पानी उबलता दिखता है पर ठंडा होता है)', 'Gorakh Dibbi (water that looks boiling but is cool)'),
    ],
    best: l('मार्च से जून और सितंबर से नवंबर। चैत्र और आश्विन नवरात्र में मेला लगता है।', 'March to June and September to November. Fairs are held in the Chaitra and Ashwin Navratris.'),
    rules: ASK,
    how: {
      road: l('कांगड़ा से लगभग 30 किमी, धर्मशाला से लगभग 56 किमी।', 'About 30 km from Kangra and 56 km from Dharamshala.'),
      rail: l('कांगड़ा घाटी की छोटी लाइन का ज्वालामुखी रोड स्टेशन; बड़ी लाइन के लिए ऊना या पठानकोट।', 'Jawalamukhi Road on the Kangra Valley narrow-gauge line; for broad gauge, Una or Pathankot.'),
      air: l('गग्गल (कांगड़ा) हवाई अड्डा, लगभग 45 किमी।', 'Gaggal (Kangra) airport, about 45 km.'),
    },
    maps: 'Jwalamukhi Temple, Kangra',
    note: l('शक्तिपीठों की सूचियाँ अलग-अलग ग्रंथों में अलग हैं; जीभ गिरने की मान्यता सबसे आम है।', 'Lists of Shakti Peeths differ between texts; the tongue tradition is the most common.'),
    nearby: [
      { name: l('माँ चिंतपूर्णी', 'Maa Chintpurni'), dist: l('लगभग 35 किमी', 'About 35 km'), text: l('ऊना ज़िले का शक्तिपीठ, छिन्नमस्तिका देवी।', 'The Shakti Peeth of Una district, Chhinnamastika Devi.'), photoOf: 'chintpurni' },
      { name: l('माँ नैना देवी', 'Maa Naina Devi'), dist: l('लगभग 120 किमी', 'About 120 km'), text: l('बिलासपुर की पहाड़ी पर शक्तिपीठ।', 'The hilltop Shakti Peeth of Bilaspur.'), photoOf: 'naina-devi' },
    ],
  },
  {
    id: 'naina-devi',
    name: l('माँ नैना देवी', 'Maa Naina Devi'),
    place: l('नैना देवी, बिलासपुर ज़िला, हिमाचल प्रदेश', 'Naina Devi, Bilaspur district, Himachal Pradesh'),
    state: 'HP',
    groups: [],
    tags: [SHAKTI],
    importance: l(
      'शिवालिक की पहाड़ी पर बना शक्तिपीठ, जहाँ मान्यता है कि सती के नेत्र (नैन) गिरे थे। यहाँ से गोविंद सागर झील दिखती है। पंजाब और हिमाचल के भक्त बड़ी संख्या में आते हैं।',
      'A Shakti Peeth on a Shivalik hilltop, where Sati’s eyes (nain) are believed to have fallen. It looks over the Gobind Sagar lake. Devotees from Punjab and Himachal come in large numbers.',
    ),
    katha: l(
      'लोककथा है कि नैना नाम के गुज्जर बालक ने देखा कि उसकी गाय एक पत्थर पर अपने आप दूध गिराती है। माँ ने सपने में दर्शन दिए। राजा बीर चंद ने स्वयं यह देखा और वहाँ मंदिर बनवाकर उसका नाम बालक के नाम पर रखा।',
      'The folk story says a Gujjar boy named Naina saw his cow pour milk on a stone by itself. The Mother appeared to him in a dream. Raja Bir Chand saw it for himself, built a temple there and named it after the boy.',
    ),
    history: l(
      'मंदिर का निर्माण बिलासपुर (कहलूर) के राजा बीर चंद से जोड़ा जाता है। आज मंदिर का प्रबंधन हिमाचल सरकार का मंदिर न्यास करता है।',
      'The temple is linked to Raja Bir Chand of Bilaspur (Kahlur). Today a Himachal government temple trust manages it.',
    ),
    todo: [
      l('माँ के नेत्र रूप पिंडी के दर्शन', 'Darshan of the Mother as the eyes'),
      l('पहाड़ी से गोविंद सागर का दृश्य', 'The view of Gobind Sagar from the hill'),
    ],
    best: l('मार्च से जून और सितंबर से नवंबर। श्रावण अष्टमी और नवरात्र में मेला।', 'March to June and September to November. Fairs at Shravan Ashtami and Navratri.'),
    rules: ASK,
    how: {
      road: l('आनंदपुर साहिब से लगभग 20 किमी, चंडीगढ़ से लगभग 105 किमी।', 'About 20 km from Anandpur Sahib and 105 km from Chandigarh.'),
      rail: l('आनंदपुर साहिब या कीरतपुर साहिब स्टेशन।', 'Anandpur Sahib or Kiratpur Sahib station.'),
      air: l('चंडीगढ़ हवाई अड्डा।', 'Chandigarh airport.'),
    },
    maps: 'Shri Naina Devi Temple, Bilaspur',
    note: l('आनंदपुर साहिब से नया रोपवे बनने की योजना कई साल से है; पहुँचने से पहले पता कर लें कि रोपवे चल रहा है या नहीं।', 'A new ropeway from Anandpur Sahib has been planned for years; check before you go whether a ropeway is running.'),
    nearby: [
      { name: l('माँ चिंतपूर्णी', 'Maa Chintpurni'), dist: l('लगभग 100 किमी', 'About 100 km'), text: l('ऊना ज़िले का शक्तिपीठ।', 'The Shakti Peeth of Una district.'), photoOf: 'chintpurni' },
    ],
  },
  {
    id: 'chintpurni',
    name: l('माँ चिंतपूर्णी', 'Maa Chintpurni'),
    place: l('चिंतपूर्णी, ऊना ज़िला, हिमाचल प्रदेश', 'Chintpurni, Una district, Himachal Pradesh'),
    state: 'HP',
    groups: [],
    tags: [SHAKTI, l('छिन्नमस्तिका', 'Chhinnamastika')],
    importance: l(
      'माँ छिन्नमस्तिका का शक्तिपीठ। "चिंतपूर्णी" यानी चिंता दूर करने वाली माँ। यहाँ भक्त मन्नत के लिए मौली (लाल धागा) बाँधते हैं।',
      'The Shakti Peeth of Maa Chhinnamastika. "Chintpurni" means the Mother who ends worries. Devotees tie a red thread (mauli) here with a wish.',
    ),
    katha: l(
      'परंपरा है कि सारस्वत ब्राह्मण भक्त माई दास को माँ ने सपने में यहाँ पिंडी रूप में दर्शन दिए, और उन्होंने यहीं पूजा शुरू की। आज भी पुजारी उन्हीं के वंशज माने जाते हैं।',
      'Tradition says the Mother appeared in a dream to her devotee Mai Das, a Saraswat Brahmin, as a pindi at this spot, and he began worship here. The priests are still said to be his descendants.',
    ),
    history: l(
      'यह मंदिर कई सदियों पुराना माना जाता है। अब इसका प्रबंधन हिमाचल सरकार का मंदिर न्यास करता है।',
      'The temple is held to be several centuries old. A Himachal government temple trust now manages it.',
    ),
    todo: [
      l('माँ की पिंडी के दर्शन', 'Darshan of the Mother’s pindi'),
      l('मन्नत की मौली बाँधना', 'Tie a mauli with a wish'),
    ],
    best: l('मार्च से जून और सितंबर से नवंबर। नवरात्र और श्रावण में मेला।', 'March to June and September to November. Fairs in Navratri and Shravan.'),
    rules: ASK,
    how: {
      road: l('ऊना से लगभग 40 किमी; पंजाब के होशियारपुर से भी पास।', 'About 40 km from Una; also close to Hoshiarpur in Punjab.'),
      rail: l('अंब अंदौरा स्टेशन, लगभग 20 किमी।', 'Amb Andaura station, about 20 km.'),
      air: l('गग्गल (कांगड़ा) या चंडीगढ़ हवाई अड्डा।', 'Gaggal (Kangra) or Chandigarh airport.'),
    },
    maps: 'Mata Chintpurni Temple, Una',
    note: l('सती का कौन सा अंग यहाँ गिरा, इस पर ग्रंथों में मत अलग हैं (चरण या मस्तक)।', 'Texts differ on which part of Sati fell here (the feet or the forehead).'),
    nearby: [
      { name: l('माँ ज्वालामुखी', 'Maa Jwalamukhi'), dist: l('लगभग 35 किमी', 'About 35 km'), text: l('अखंड ज्योति वाला शक्तिपीठ।', 'The Shakti Peeth of the eternal flame.'), photoOf: 'jwalamukhi' },
    ],
  },
  {
    id: 'mansa-devi',
    name: l('माता मनसा देवी', 'Mata Mansa Devi'),
    place: l('बिलासपुर गाँव, पंचकूला, हरियाणा (चंडीगढ़ के पास)', 'Bilaspur village, Panchkula, Haryana (near Chandigarh)'),
    state: 'HR',
    groups: [],
    tags: [l('देवी', 'Devi')],
    importance: l(
      'शिवालिक की तलहटी में माँ मनसा देवी का मंदिर, जो चंडीगढ़ क्षेत्र का सबसे बड़ा तीर्थ है। "मनसा" यानी मन की इच्छा पूरी करने वाली। नवरात्र के मेले में लाखों भक्त आते हैं।',
      'The temple of Maa Mansa Devi in the Shivalik foothills, the biggest shrine of the Chandigarh area. "Mansa" means she who fulfils the wishes of the heart. Lakhs of devotees come to the Navratri fairs.',
    ),
    katha: l(
      'भक्त इसे सती के मस्तिष्क से जुड़ा स्थान मानते हैं, हालाँकि यह प्रमुख 51 शक्तिपीठों की हर सूची में नहीं है।',
      'Devotees link the site to Sati’s forehead, though it is not in every list of the main 51 Shakti Peeths.',
    ),
    history: l(
      'मुख्य मंदिर मणीमाजरा के महाराजा गोपाल सिंह ने 1811 से 1815 के बीच बनवाया। लगभग 200 मीटर दूर पटियाला मंदिर 1840 में पटियाला के महाराजा करम सिंह ने बनवाया। अब श्री माता मनसा देवी श्राइन बोर्ड प्रबंधन करता है।',
      'The main temple was built between 1811 and 1815 by Maharaja Gopal Singh of Manimajra. The Patiala temple, about 200 m away, was built in 1840 by Maharaja Karam Singh of Patiala. The Shri Mata Mansa Devi Shrine Board now manages it.',
    ),
    todo: [
      l('माँ मनसा देवी के दर्शन', 'Darshan of Maa Mansa Devi'),
      l('पास के पटियाला मंदिर और चंडी माता मंदिर (चंडीगढ़ का नाम इन्हीं से)', 'The nearby Patiala temple and the Chandi Mata temple (which gave Chandigarh its name)'),
    ],
    best: l('सालभर। चैत्र और आश्विन नवरात्र में बड़ा मेला।', 'All year. Big fairs in the Chaitra and Ashwin Navratris.'),
    rules: ASK,
    how: {
      road: l('चंडीगढ़ से लगभग 10 किमी।', 'About 10 km from Chandigarh.'),
      rail: l('चंडीगढ़ या चंडी मंदिर स्टेशन।', 'Chandigarh or Chandi Mandir station.'),
      air: l('चंडीगढ़ हवाई अड्डा।', 'Chandigarh airport.'),
    },
    site: 'https://mansadevi.org.in',
    maps: 'Mata Mansa Devi Mandir, Panchkula',
    nearby: [
      { name: l('चंडी माता मंदिर, चंडी मंदिर', 'Chandi Mata temple, Chandi Mandir'), dist: l('लगभग 10 किमी', 'About 10 km'), text: l('माँ चंडी का मंदिर, जिनके नाम पर चंडीगढ़ बना।', 'The temple of Maa Chandi, after whom Chandigarh is named.') },
    ],
  },
  {
    id: 'jyotisar',
    name: l('ज्योतिसर, कुरुक्षेत्र', 'Jyotisar, Kurukshetra'),
    place: l('ज्योतिसर, कुरुक्षेत्र, हरियाणा', 'Jyotisar, Kurukshetra, Haryana'),
    state: 'HR',
    groups: [],
    tags: [l('गीता उपदेश स्थल', 'Where the Gita was spoken')],
    importance: l(
      'परंपरा के अनुसार यहीं महाभारत युद्ध से पहले श्री कृष्ण ने अर्जुन को भगवद गीता का उपदेश दिया और विराट रूप दिखाया। यहाँ का पुराना बरगद उसी वृक्ष का वंश माना जाता है।',
      'By tradition, here before the Mahabharata war Shri Krishna gave Arjuna the teaching of the Bhagavad Gita and showed his universal form. The old banyan here is held to descend from that tree.',
    ),
    katha: l(
      'अर्जुन युद्ध के मैदान में अपने ही परिवार को देखकर शस्त्र छोड़ बैठे। तब सारथी बने श्री कृष्ण ने उन्हें कर्म, ज्ञान और भक्ति का मार्ग समझाया, जो गीता के 18 अध्यायों में है।',
      'Seeing his own family on the battlefield, Arjuna laid down his weapons. Then Krishna, his charioteer, explained the paths of action, knowledge and devotion, set out in the 18 chapters of the Gita.',
    ),
    history: l(
      'माना जाता है कि आदि शंकराचार्य ने इस स्थान को गीता उपदेश की जगह के रूप में पहचाना। यहाँ एक पुराना शिव मंदिर भी है। हरियाणा सरकार ने ज्योतिसर को सँवारा है और हर साल अंतरराष्ट्रीय गीता महोत्सव होता है।',
      'Adi Shankaracharya is said to have identified this as the place of the Gita teaching. There is an old Shiva temple here too. The Haryana government has developed Jyotisar, and the International Gita Mahotsav is held every year.',
    ),
    todo: [
      l('पवित्र बरगद और कृष्ण-अर्जुन रथ की झाँकी', 'The sacred banyan and the Krishna-Arjuna chariot tableau'),
      l('शाम का लाइट एंड साउंड शो', 'The evening light and sound show'),
      l('ब्रह्म सरोवर और सन्निहित सरोवर में स्नान', 'Bathe at Brahma Sarovar and Sannihit Sarovar'),
    ],
    best: l('अक्टूबर से मार्च। गीता जयंती (मार्गशीर्ष शुक्ल एकादशी) के आसपास गीता महोत्सव।', 'October to March. The Gita Mahotsav is held around Gita Jayanti (Margashirsha Shukla Ekadashi).'),
    rules: ASK,
    how: {
      road: l('कुरुक्षेत्र (थानेसर) शहर के पास, पेहोवा रोड पर; दिल्ली से लगभग 160 किमी।', 'Near Kurukshetra (Thanesar) town on the Pehowa road; about 160 km from Delhi.'),
      rail: l('कुरुक्षेत्र जंक्शन।', 'Kurukshetra Junction.'),
      air: l('चंडीगढ़ हवाई अड्डा, लगभग 100 किमी।', 'Chandigarh airport, about 100 km.'),
    },
    maps: 'Jyotisar, Kurukshetra',
    nearby: [
      { name: l('ब्रह्म सरोवर', 'Brahma Sarovar'), dist: l('कुरुक्षेत्र शहर में', 'In Kurukshetra town'), text: l('सूर्य ग्रहण पर स्नान के लिए प्रसिद्ध विशाल सरोवर।', 'A vast tank famous for bathing at solar eclipses.') },
    ],
  },
  {
    id: 'akshardham-delhi',
    name: l('स्वामिनारायण अक्षरधाम', 'Swaminarayan Akshardham'),
    place: l('पांडव नगर, यमुना किनारे, दिल्ली', 'Pandav Nagar, on the Yamuna, Delhi'),
    state: 'DL',
    groups: [],
    tags: [l('स्वामिनारायण', 'Swaminarayan')],
    importance: l(
      'दिल्ली का विशाल मंदिर परिसर, जो भारतीय संस्कृति और शिल्प को दिखाता है। मध्य में भगवान स्वामिनारायण की मूर्ति है, साथ में सीता-राम, राधा-कृष्ण, शिव-पार्वती और लक्ष्मी-नारायण।',
      'Delhi’s vast temple complex showing Indian culture and craft. At its centre is the murti of Bhagwan Swaminarayan, with Sita-Ram, Radha-Krishna, Shiva-Parvati and Lakshmi-Narayan.',
    ),
    katha: l(
      '"अक्षरधाम" का अर्थ है भगवान का दिव्य धाम। स्वामिनारायण संप्रदाय भगवान स्वामिनारायण (1781-1830) को परब्रह्म मानता है, जिन्होंने किशोर उम्र में नीलकंठ वर्णी के रूप में पूरे भारत की पैदल यात्रा की।',
      '"Akshardham" means the divine abode of God. The Swaminarayan tradition holds Bhagwan Swaminarayan (1781-1830) to be the Supreme; as a teenager, named Nilkanth Varni, he walked across all of India.',
    ),
    history: l(
      'BAPS संस्था ने प्रमुख स्वामी महाराज के मार्गदर्शन में इसे बनवाया और 6 नवंबर 2005 को इसका उद्घाटन हुआ। गुलाबी बलुआ पत्थर और संगमरमर से बना है, बिना लोहे-स्टील के। 148 हाथियों वाला गजेंद्र पीठ इसकी पहचान है।',
      'BAPS built it under the guidance of Pramukh Swami Maharaj, and it opened on 6 November 2005. It is made of pink sandstone and marble with no iron or steel. The Gajendra Peeth with 148 elephants is a landmark.',
    ),
    todo: [
      l('मुख्य मंदिर के दर्शन', 'Darshan in the main temple'),
      l('प्रदर्शनियाँ, नौका विहार और शाम का जल प्रदर्शन (टिकट वाले)', 'The exhibitions, boat ride and evening water show (ticketed)'),
    ],
    best: l('अक्टूबर से मार्च। सोमवार को आमतौर पर बंद रहता है; पहले से देख लें।', 'October to March. It is usually closed on Mondays; check before going.'),
    rules: l('मोबाइल, कैमरा और बैग अंदर ले जाने की अनुमति नहीं; बाहर जमा करने की सुविधा है। शालीन कपड़े पहनें।', 'Phones, cameras and bags are not allowed inside; there is a cloakroom. Dress modestly.'),
    how: {
      road: l('राष्ट्रीय राजमार्ग 24 पर, नोएडा मोड़ के पास।', 'On National Highway 24 near the Noida turn.'),
      rail: l('अक्षरधाम मेट्रो स्टेशन (ब्लू लाइन); बड़ा स्टेशन हज़रत निज़ामुद्दीन या नई दिल्ली।', 'Akshardham metro station (Blue Line); main stations Hazrat Nizamuddin or New Delhi.'),
      air: l('दिल्ली IGI हवाई अड्डा, लगभग 25 किमी।', 'Delhi IGI airport, about 25 km.'),
    },
    site: 'https://akshardham.com',
    maps: 'Swaminarayan Akshardham, New Delhi',
    nearby: [
      { name: l('लक्ष्मीनारायण मंदिर (बिड़ला मंदिर)', 'Laxminarayan Temple (Birla Mandir)'), dist: l('लगभग 10 किमी', 'About 10 km'), text: l('1939 में बना दिल्ली का प्रसिद्ध मंदिर।', 'Delhi’s famous temple, completed in 1939.'), photoOf: 'laxminarayan-delhi' },
    ],
  },
  {
    id: 'laxminarayan-delhi',
    name: l('लक्ष्मीनारायण मंदिर (बिड़ला मंदिर)', 'Laxminarayan Temple (Birla Mandir)'),
    place: l('मंदिर मार्ग, कनॉट प्लेस के पास, नई दिल्ली', 'Mandir Marg, near Connaught Place, New Delhi'),
    state: 'DL',
    groups: [],
    tags: [l('विष्णु', 'Vishnu')],
    importance: l(
      'नई दिल्ली का प्रसिद्ध लक्ष्मी-नारायण मंदिर। साथ में शिव, गणेश, हनुमान, दुर्गा और बुद्ध के छोटे मंदिर हैं। गांधी जी ने इसका उद्घाटन इस शर्त पर किया कि इसके द्वार हर जाति के लोगों के लिए खुले रहेंगे।',
      'New Delhi’s famous Lakshmi-Narayan temple, with smaller shrines to Shiva, Ganesha, Hanuman, Durga and the Buddha. Gandhi ji opened it on the condition that it would be open to people of every caste.',
    ),
    katha: l(
      'भगवान विष्णु और माँ लक्ष्मी यहाँ सृष्टि के पालक और समृद्धि की देवी के रूप में साथ पूजे जाते हैं। मंदिर की दीवारों पर गीता के उपदेश और पुराणों के दृश्य बने हैं।',
      'Vishnu and Lakshmi are worshipped together here as the preserver of creation and the goddess of prosperity. The walls carry teachings from the Gita and scenes from the Puranas.',
    ),
    history: l(
      'उद्योगपति बलदेव दास बिड़ला और उनके पुत्र जुगल किशोर बिड़ला ने 1933 से 1939 के बीच इसे बनवाया। नागर शैली के इस मंदिर का शिखर लगभग 49 मीटर ऊँचा है।',
      'Industrialist Baldeo Das Birla and his son Jugal Kishore Birla built it between 1933 and 1939. The Nagara-style temple’s main spire is about 49 m high.',
    ),
    todo: [
      l('लक्ष्मी-नारायण जी के दर्शन', 'Darshan of Lakshmi-Narayan'),
      l('जन्माष्टमी पर विशेष सजावट', 'Special decorations at Janmashtami'),
    ],
    best: l('सालभर। जन्माष्टमी और दीवाली पर बहुत भीड़।', 'All year. Very crowded at Janmashtami and Diwali.'),
    rules: l('प्रवेश निःशुल्क। मोबाइल और कैमरा अंदर ले जाने पर रोक हो सकती है।', 'Entry is free. Phones and cameras may not be allowed inside.'),
    how: {
      road: l('कनॉट प्लेस से लगभग 2 किमी।', 'About 2 km from Connaught Place.'),
      rail: l('आर के आश्रम मार्ग मेट्रो स्टेशन, लगभग 1.5 किमी; नई दिल्ली स्टेशन, लगभग 3 किमी।', 'RK Ashram Marg metro, about 1.5 km; New Delhi station, about 3 km.'),
      air: l('दिल्ली IGI हवाई अड्डा, लगभग 16 किमी।', 'Delhi IGI airport, about 16 km.'),
    },
    maps: 'Laxminarayan Temple, Mandir Marg, New Delhi',
    nearby: [
      { name: l('स्वामिनारायण अक्षरधाम', 'Swaminarayan Akshardham'), dist: l('लगभग 10 किमी', 'About 10 km'), text: l('यमुना किनारे विशाल मंदिर परिसर।', 'The vast temple complex on the Yamuna.'), photoOf: 'akshardham-delhi' },
    ],
  },
  {
    id: 'khatu-shyam',
    name: l('खाटू श्याम जी', 'Khatu Shyam Ji'),
    place: l('खाटू, सीकर ज़िला, राजस्थान', 'Khatu, Sikar district, Rajasthan'),
    state: 'RJ',
    groups: [],
    tags: [l('श्याम बाबा', 'Shyam Baba'), l('हारे का सहारा', 'Support of the defeated')],
    importance: l(
      'बर्बरीक के शीश की पूजा श्याम बाबा के रूप में होती है, जिन्हें "हारे का सहारा" कहते हैं। फाल्गुन मेले में लाखों भक्त रींगस से निशान (ध्वज) लेकर पैदल आते हैं।',
      'The head of Barbarika is worshipped here as Shyam Baba, called "the support of the defeated". At the Phalgun fair lakhs of devotees walk from Reengus carrying a nishan (flag).',
    ),
    katha: l(
      'भीम के पौत्र और घटोत्कच के पुत्र बर्बरीक ने हारने वाले पक्ष की ओर से लड़ने का वचन लिया था। श्री कृष्ण ने युद्ध से पहले ब्राह्मण बनकर उनसे शीश का दान माँगा, और बर्बरीक ने दे दिया। प्रसन्न होकर कृष्ण ने वरदान दिया कि कलियुग में वे श्याम नाम से पूजे जाएँगे। युद्ध उन्होंने पहाड़ी पर रखे शीश से देखा।',
      'Barbarika, grandson of Bhima and son of Ghatotkacha, had vowed to fight for the losing side. Before the war Krishna, disguised as a Brahmin, asked for his head as a gift, and Barbarika gave it. Pleased, Krishna blessed him to be worshipped as Shyam in the Kali Yuga. He watched the war from his head placed on a hill.',
    ),
    history: l(
      'परंपरा है कि शीश खाटू में धरती से मिला, जहाँ आज श्याम कुंड है, और राजा रूप सिंह चौहान ने सपने के आदेश पर मंदिर बनवाया (परंपरागत तिथि 1027 ई.)। वर्तमान मंदिर सफ़ेद मकराना संगमरमर का है।',
      'Tradition says the head was found in the ground at Khatu, where Shyam Kund now is, and Raja Roop Singh Chauhan built the temple after a dream (traditional date 1027 CE). The present temple is of white Makrana marble.',
    ),
    todo: [
      l('श्याम बाबा के दर्शन', 'Darshan of Shyam Baba'),
      l('श्याम कुंड में स्नान', 'Bathe in Shyam Kund'),
      l('फाल्गुन मेले में रींगस से निशान यात्रा (लगभग 17 किमी)', 'The nishan yatra from Reengus at the Phalgun fair (about 17 km)'),
    ],
    best: l('अक्टूबर से मार्च। फाल्गुन शुक्ल एकादशी-द्वादशी के मेले में बहुत भीड़।', 'October to March. Very crowded at the fair on Phalgun Shukla Ekadashi and Dwadashi.'),
    rules: ASK,
    how: {
      road: l('जयपुर से लगभग 80 किमी, सीकर से लगभग 45 किमी।', 'About 80 km from Jaipur and 45 km from Sikar.'),
      rail: l('रींगस जंक्शन, लगभग 17 किमी।', 'Reengus Junction, about 17 km.'),
      air: l('जयपुर हवाई अड्डा।', 'Jaipur airport.'),
    },
    maps: 'Khatu Shyam Ji Temple, Khatu',
    nearby: [
      { name: l('सालासर बालाजी', 'Salasar Balaji'), dist: l('लगभग 100 किमी', 'About 100 km'), text: l('दाढ़ी-मूँछ वाले हनुमान जी का प्रसिद्ध धाम।', 'The famous shrine of Hanuman with beard and moustache.'), photoOf: 'salasar-balaji' },
    ],
  },
  {
    id: 'salasar-balaji',
    name: l('सालासर बालाजी', 'Salasar Balaji'),
    place: l('सालासर, चूरू ज़िला, राजस्थान', 'Salasar, Churu district, Rajasthan'),
    state: 'RJ',
    groups: [],
    tags: [l('हनुमान', 'Hanuman')],
    importance: l(
      'राजस्थान का प्रसिद्ध हनुमान धाम। यहाँ बालाजी (हनुमान जी) दाढ़ी-मूँछ वाले स्वरूप में हैं, जो अनोखा है। भक्त नारियल बाँधकर मन्नत माँगते हैं।',
      'Rajasthan’s famous Hanuman shrine. Here Balaji (Hanuman) has a beard and moustache, which is rare. Devotees tie a coconut with a wish.',
    ),
    katha: l(
      'लोककथा है कि असोटा गाँव में एक किसान का हल एक मूर्ति से टकराया; खोदने पर बालाजी की मूर्ति निकली। उसकी पत्नी ने उस दिन बाजरे का चूरमा भोग लगाया, जो आज भी यहाँ का प्रसाद है। सालासर के भक्त मोहनदास जी और असोटा के ठाकुर को सपने में आदेश मिला कि मूर्ति सालासर लाई जाए।',
      'The folk story says a farmer’s plough struck an idol at Asota village; digging, he found an image of Balaji. His wife offered churma of bajra that day, still the prasad here. Mohandas ji, a devotee of Salasar, and the Thakur of Asota were told in dreams to bring the idol to Salasar.',
    ),
    history: l(
      'परंपरा के अनुसार मूर्ति की स्थापना विक्रम संवत 1811 (1754 ई.) में हुई। मंदिर की सेवा आज भी मोहनदास जी की परंपरा के लोग करते हैं।',
      'By tradition the idol was installed in Vikram Samvat 1811 (1754 CE). Worship is still run by people of Mohandas ji’s line.',
    ),
    todo: [
      l('बालाजी के दर्शन और चूरमे का भोग', 'Darshan of Balaji and an offering of churma'),
      l('मन्नत का नारियल बाँधना', 'Tie a coconut with a wish'),
      l('मोहनदास जी की धूनी', 'The dhuni of Mohandas ji'),
    ],
    best: l('अक्टूबर से मार्च। चैत्र और आश्विन पूर्णिमा पर बड़ा मेला।', 'October to March. Big fairs on Chaitra and Ashwin Purnima.'),
    rules: ASK,
    how: {
      road: l('जयपुर-बीकानेर राजमार्ग पर; सुजानगढ़ से लगभग 27 किमी, जयपुर से लगभग 170 किमी।', 'On the Jaipur-Bikaner highway; about 27 km from Sujangarh and 170 km from Jaipur.'),
      rail: l('सुजानगढ़ या सीकर स्टेशन।', 'Sujangarh or Sikar station.'),
      air: l('जयपुर हवाई अड्डा।', 'Jaipur airport.'),
    },
    maps: 'Salasar Balaji Temple',
    nearby: [
      { name: l('खाटू श्याम जी', 'Khatu Shyam Ji'), dist: l('लगभग 100 किमी', 'About 100 km'), text: l('श्याम बाबा का धाम, फाल्गुन मेले के लिए प्रसिद्ध।', 'Shyam Baba’s shrine, famous for its Phalgun fair.'), photoOf: 'khatu-shyam' },
    ],
  },
  {
    id: 'pushkar-brahma',
    name: l('ब्रह्मा मंदिर, पुष्कर', 'Brahma Temple, Pushkar'),
    place: l('पुष्कर, अजमेर ज़िला, राजस्थान', 'Pushkar, Ajmer district, Rajasthan'),
    state: 'RJ',
    groups: [],
    tags: [l('ब्रह्मा', 'Brahma'), l('तीर्थराज', 'Tirtharaj')],
    importance: l(
      'सृष्टिकर्ता ब्रह्मा जी के बहुत कम मंदिरों में सबसे प्रसिद्ध। गर्भगृह में चतुर्मुख ब्रह्मा जी और माँ गायत्री हैं। पुष्कर सरोवर को तीर्थराज कहा जाता है।',
      'The best known of the very few temples of Brahma, the creator. The sanctum holds four-faced Brahma with Maa Gayatri. Pushkar Lake is called Tirtharaj, king of pilgrim places.',
    ),
    katha: l(
      'पद्म पुराण के अनुसार ब्रह्मा जी ने कमल से असुर वज्रनाभ का वध किया; कमल की पंखुड़ियाँ गिरीं और तीन सरोवर बने, जिनमें पुष्कर एक है। यहाँ यज्ञ के समय सावित्री जी देर से आईं, तो ब्रह्मा जी ने गायत्री जी के साथ यज्ञ किया। रुष्ट होकर सावित्री जी ने शाप दिया कि ब्रह्मा जी की पूजा पुष्कर के सिवा कहीं नहीं होगी।',
      'In the Padma Purana, Brahma slew the demon Vajranabha with a lotus; its petals fell and formed three lakes, one of them Pushkar. At his yagna here Savitri was late, so Brahma performed it with Gayatri. Angered, Savitri cursed that Brahma would be worshipped nowhere but Pushkar.',
    ),
    history: l(
      'वर्तमान मंदिर का ढाँचा लगभग 14वीं सदी का माना जाता है। आदि शंकराचार्य से जीर्णोद्धार जुड़ा है, और बाद में रतलाम के महाराजा जवत राज ने मरम्मत करवाई।',
      'The present structure is thought to be from about the 14th century. Its restoration is linked to Adi Shankaracharya, and later repairs to Maharaja Jawat Raj of Ratlam.',
    ),
    todo: [
      l('ब्रह्मा जी के दर्शन', 'Darshan of Brahma'),
      l('पुष्कर सरोवर के घाटों पर स्नान', 'Bathe at the ghats of Pushkar Lake'),
      l('रत्नागिरि पहाड़ी पर सावित्री माता मंदिर (रोपवे भी है)', 'The Savitri Mata temple on Ratnagiri hill (there is a ropeway)'),
    ],
    best: l('अक्टूबर से मार्च। कार्तिक पूर्णिमा पर स्नान और पुष्कर मेला।', 'October to March. The Kartik Purnima bath and the Pushkar fair.'),
    rules: l('परंपरा के अनुसार विवाहित पुरुष गर्भगृह में नहीं जाते; पूजा संन्यासी पुजारी के हाथों होती है। घाटों पर जूते उतारें और फ़ोटो से पहले पूछें।', 'By tradition married men do not enter the sanctum; worship is done through a sanyasi priest. Remove footwear at the ghats and ask before taking photos.'),
    how: {
      road: l('अजमेर से लगभग 14 किमी।', 'About 14 km from Ajmer.'),
      rail: l('अजमेर जंक्शन।', 'Ajmer Junction.'),
      air: l('किशनगढ़ हवाई अड्डा, लगभग 40 किमी; जयपुर भी विकल्प।', 'Kishangarh airport, about 40 km; Jaipur is also an option.'),
    },
    maps: 'Brahma Temple, Pushkar',
    nearby: [
      { name: l('सावित्री माता मंदिर', 'Savitri Mata temple'), dist: l('पुष्कर में, पहाड़ी पर', 'In Pushkar, on the hill'), text: l('ब्रह्मा जी की पहली पत्नी सावित्री जी का मंदिर।', 'The temple of Savitri, Brahma’s first wife.') },
    ],
  },
  {
    id: 'shrinathji',
    name: l('श्रीनाथजी, नाथद्वारा', 'Shrinathji, Nathdwara'),
    place: l('नाथद्वारा, राजसमंद ज़िला, राजस्थान', 'Nathdwara, Rajsamand district, Rajasthan'),
    state: 'RJ',
    groups: [],
    tags: [l('कृष्ण', 'Krishna'), l('पुष्टिमार्ग', 'Pushtimarg')],
    importance: l(
      'पुष्टिमार्ग का प्रमुख तीर्थ। श्रीनाथजी सात वर्ष के बालक कृष्ण हैं, जो बायाँ हाथ उठाकर गोवर्धन धारण किए हुए हैं। मंदिर को "श्रीनाथजी की हवेली" कहते हैं, क्योंकि यहाँ ठाकुर जी घर के बालक की तरह पूजे जाते हैं।',
      'The chief shrine of Pushtimarg. Shrinathji is Krishna as a seven-year-old, his left hand raised holding up Govardhan. The temple is called "Shrinathji’s haveli" because Thakur ji is cared for like a child of the house.',
    ),
    katha: l(
      'मान्यता है कि श्रीनाथजी का स्वरूप गोवर्धन पर्वत से प्रकट हुआ और वहीं पहले पूजा हुई। वल्लभाचार्य जी ने सेवा की रीति स्थापित की।',
      'Shrinathji’s form is believed to have emerged from Govardhan hill, where he was first worshipped. Vallabhacharya established the manner of his seva.',
    ),
    history: l(
      'औरंगज़ेब के समय मूर्ति की रक्षा के लिए 1669-1672 के आसपास उसे ब्रज से ले जाया गया। मेवाड़ के महाराणा राज सिंह ने शरण दी; परंपरा है कि सिहाड़ गाँव में रथ का पहिया धँस गया, और वहीं (आज के नाथद्वारा में) मंदिर बना।',
      'Around 1669-1672, in Aurangzeb’s time, the image was taken from Braj for its safety. Maharana Raj Singh of Mewar gave it refuge; tradition says the chariot wheel sank at Sihad village, and the temple was built there, in today’s Nathdwara.',
    ),
    todo: [
      l('दिन की आठ झाँकियाँ (मंगला से शयन तक)', 'The eight darshans of the day (from Mangala to Shayan)'),
      l('पिछवाई चित्रकला देखना', 'See the Pichwai paintings'),
      l('अन्नकूट (गोवर्धन पूजा) का उत्सव', 'The Annakut festival at Govardhan Puja'),
    ],
    best: l('अक्टूबर से मार्च। जन्माष्टमी, दीवाली-अन्नकूट और होली पर विशेष झाँकियाँ।', 'October to March. Special darshans at Janmashtami, Diwali-Annakut and Holi.'),
    rules: l('दर्शन सिर्फ़ झाँकियों के तय समय पर खुलते हैं और कुछ मिनट ही रहते हैं; समय मंदिर से पता करें। मोबाइल और कैमरा मना है।', 'The shrine opens only at the set darshan times, for a few minutes each; check the times with the temple. Phones and cameras are not allowed.'),
    how: {
      road: l('उदयपुर से लगभग 48 किमी।', 'About 48 km from Udaipur.'),
      rail: l('मावली जंक्शन या उदयपुर सिटी स्टेशन।', 'Mavli Junction or Udaipur City station.'),
      air: l('उदयपुर (डबोक) हवाई अड्डा, लगभग 50 किमी।', 'Udaipur (Dabok) airport, about 50 km.'),
    },
    maps: 'Shrinathji Temple, Nathdwara',
    nearby: [
      { name: l('गिरिराज गोवर्धन', 'Giriraj Govardhan'), dist: l('ब्रज में, लगभग 600 किमी', 'In Braj, about 600 km'), text: l('जहाँ श्रीनाथजी पहले प्रकट हुए माने जाते हैं।', 'Where Shrinathji is believed to have first appeared.'), photoOf: 'govardhan-giriraj' },
    ],
  },
  {
    id: 'vishnupad',
    name: l('विष्णुपद मंदिर, गया', 'Vishnupad Temple, Gaya'),
    place: l('फल्गु नदी के किनारे, गया, बिहार', 'On the Phalgu river, Gaya, Bihar'),
    state: 'BR',
    groups: [],
    tags: [l('विष्णु', 'Vishnu'), l('पिंडदान', 'Pind daan')],
    importance: l(
      'यहाँ बेसाल्ट पत्थर (धर्मशिला) पर भगवान विष्णु के चरण का लगभग 40 सेमी का चिह्न है। गया पितरों के श्राद्ध और पिंडदान का सबसे बड़ा तीर्थ है, और यह मंदिर उसका केंद्र।',
      'A footprint of Vishnu, about 40 cm long, is marked on a basalt stone (the Dharmashila). Gaya is the foremost place for the shraddha and pind daan of ancestors, and this temple is its centre.',
    ),
    katha: l(
      'गयासुर नाम का असुर इतना पवित्र हो गया कि उसके दर्शन से ही लोग स्वर्ग जाने लगे। देवताओं के कहने पर भगवान विष्णु ने उसकी छाती पर चरण रखकर उसे धरती में दबाया। गयासुर ने वरदान माँगा कि यहाँ पिंडदान करने वालों के पितरों को मुक्ति मिले।',
      'The demon Gayasura became so pure that people reached heaven merely by seeing him. At the gods’ request Vishnu placed his foot on his chest and pressed him into the earth. Gayasura asked for a boon: that the ancestors of those who offer pinda here would find liberation.',
    ),
    history: l(
      'मूल मंदिर की तिथि अज्ञात है। वर्तमान अष्टकोणीय मंदिर (लगभग 30 मीटर ऊँचा) 1787 में इंदौर की महारानी अहिल्याबाई होल्कर ने बनवाया। यहाँ गयावाल ब्राह्मण परंपरागत पुरोहित हैं।',
      'The date of the first temple is unknown. The present octagonal temple (about 30 m high) was built in 1787 by Maharani Ahilyabai Holkar of Indore. The Gayawal Brahmins are the hereditary priests.',
    ),
    todo: [
      l('विष्णु चरण के दर्शन', 'Darshan of Vishnu’s footprint'),
      l('पितरों के लिए पिंडदान (पंडे के माध्यम से)', 'Pind daan for ancestors (through a priest)'),
      l('फल्गु नदी और अक्षयवट', 'The Phalgu river and the Akshayavat banyan'),
    ],
    best: l('अक्टूबर से मार्च। पितृ पक्ष (भाद्रपद-आश्विन) में पितृपक्ष मेला लगता है और बहुत भीड़ होती है।', 'October to March. In Pitru Paksha (Bhadrapada-Ashwin) the Pitrupaksha Mela is held and it is very crowded.'),
    rules: l('पिंडदान की दक्षिणा पहले तय कर लें। गैर-हिंदुओं के प्रवेश पर रोक हो सकती है।', 'Agree the fee for pind daan in advance. Entry may be restricted for non-Hindus.'),
    how: {
      road: l('पटना से लगभग 100 किमी; बोधगया से लगभग 12 किमी।', 'About 100 km from Patna; about 12 km from Bodh Gaya.'),
      rail: l('गया जंक्शन, लगभग 3 किमी।', 'Gaya Junction, about 3 km.'),
      air: l('गया हवाई अड्डा, लगभग 10 किमी।', 'Gaya airport, about 10 km.'),
    },
    maps: 'Vishnupad Temple, Gaya',
    nearby: [
      { name: l('मंगला गौरी मंदिर', 'Mangla Gauri temple'), dist: l('गया में, पास ही', 'In Gaya, close by'), text: l('पहाड़ी पर देवी का प्राचीन मंदिर, शक्तिपीठ माना जाता है।', 'An old hilltop temple of the Devi, held to be a Shakti Peeth.') },
      { name: l('मुंडेश्वरी मंदिर', 'Mundeshwari Temple'), dist: l('लगभग 200 किमी', 'About 200 km'), text: l('भारत के सबसे पुराने पूजित मंदिरों में गिना जाता है।', 'Counted among the oldest temples still in worship in India.'), photoOf: 'mundeshwari' },
    ],
  },
  {
    id: 'mundeshwari',
    name: l('माँ मुंडेश्वरी मंदिर', 'Maa Mundeshwari Temple'),
    place: l('मुंडेश्वरी पहाड़ी, रामगढ़, कैमूर ज़िला, बिहार', 'Mundeshwari hill, Ramgarh, Kaimur district, Bihar'),
    state: 'BR',
    groups: [],
    tags: [l('देवी', 'Devi'), l('शिव', 'Shiva'), l('प्राचीन', 'Ancient')],
    importance: l(
      'पहाड़ी पर बना अष्टकोणीय पत्थर का मंदिर, जिसे भारत के सबसे पुराने लगातार पूजित मंदिरों में गिना जाता है। यहाँ माँ मुंडेश्वरी (दस भुजा वाली, भैंसे पर सवार) और चतुर्मुख शिवलिंग हैं।',
      'An octagonal stone temple on a hill, counted among the oldest temples in continuous worship in India. It houses Maa Mundeshwari (ten-armed, riding a buffalo) and a four-faced Shiva linga.',
    ),
    katha: l(
      'मान्यता है कि माँ ने यहाँ चंड-मुंड असुरों में से मुंड का वध किया, इसी से नाम मुंडेश्वरी पड़ा। यहाँ बलि की परंपरा में बकरे को मारा नहीं जाता: पुजारी अक्षत छिड़कते हैं और बकरा कुछ देर अचेत होकर फिर उठ जाता है।',
      'It is believed the Mother slew Munda, one of the demons Chanda and Munda, here, giving her the name Mundeshwari. In the offering custom here the goat is not killed: the priest sprinkles rice grains, the goat falls still for a moment and then rises.',
    ),
    history: l(
      'मंदिर 1915 से भारतीय पुरातत्व सर्वेक्षण (ASI) के संरक्षण में है। तिथि पर मत अलग हैं: बिहार धार्मिक न्यास बोर्ड 108 ई. बताता है, ASI की पट्टिका 635 ई., और कई इतिहासकार 6वीं-7वीं सदी मानते हैं। शिखर टूट चुका है; मरम्मत में छत डाली गई।',
      'The temple has been protected by the Archaeological Survey of India since 1915. Its date is disputed: the Bihar Religious Trust Board says 108 CE, the ASI plaque 635 CE, and many historians the 6th-7th century. The spire is lost; a roof was added during repairs.',
    ),
    todo: [
      l('माँ मुंडेश्वरी और चतुर्मुख शिवलिंग के दर्शन', 'Darshan of Maa Mundeshwari and the four-faced linga'),
      l('पहाड़ी पर पुराने पत्थर के अवशेष देखना', 'See the old stone remains on the hill'),
    ],
    best: l('अक्टूबर से मार्च। रामनवमी, शिवरात्रि और नवरात्र में मेला।', 'October to March. Fairs at Ram Navami, Shivratri and Navratri.'),
    rules: ASK,
    how: {
      road: l('भभुआ से लगभग 14 किमी; वाराणसी से लगभग 100 किमी।', 'About 14 km from Bhabua; about 100 km from Varanasi.'),
      rail: l('भभुआ रोड (मोहनिया) स्टेशन, लगभग 22 किमी।', 'Bhabua Road (Mohania) station, about 22 km.'),
      air: l('वाराणसी हवाई अड्डा, लगभग 100 किमी।', 'Varanasi airport, about 100 km.'),
    },
    maps: 'Mundeshwari Temple, Kaimur',
    nearby: [
      { name: l('काशी विश्वनाथ, वाराणसी', 'Kashi Vishwanath, Varanasi'), dist: l('लगभग 100 किमी', 'About 100 km'), text: l('12 ज्योतिर्लिंगों में से एक।', 'One of the 12 Jyotirlingas.'), photoOf: 'kashi-vishwanath' },
    ],
  },
]
