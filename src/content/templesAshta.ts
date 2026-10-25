/**
 * Ashtavinayak: the eight self-formed (swayambhu) Ganesha shrines around Pune, in the traditional order of the yatra.
 * Facts cross-checked between Wikipedia and regional travel guides; distances differ between sources, so they are "about".
 * There is no single official site for the circuit, so no website link is given.
 */
import { l, type Temple } from './templeTypes'

const next = (id: string, hi: string, en: string) => ({
  name: l(hi, en),
  dist: l('यात्रा क्रम में अगला', 'Next on the yatra'),
  text: l('अष्टविनायक यात्रा का अगला पड़ाव। पूरी सूची के लिए अष्टविनायक श्रेणी देखें।', 'The next stop on the Ashtavinayak yatra. See the Ashtavinayak list for all eight.'),
  photoOf: id,
})
const RULES = l(
  'गणेश चतुर्थी और अंगारकी चतुर्थी पर बहुत भीड़ होती है। दर्शन का समय और पूजा के नियम स्थानीय देवस्थान से पूछ लें।',
  'It is very crowded on Ganesh Chaturthi and Angarki Chaturthi. Ask the local devasthan about darshan timings and puja rules.',
)
const BEST = l('सालभर; अक्टूबर से फरवरी सबसे आरामदायक। बरसात में रास्ते सुंदर पर फिसलन भरे हो सकते हैं।', 'All year; October to February is the most comfortable. Roads are scenic but can be slippery in the monsoon.')
const PUNE_AIR = l('पुणे (लोहेगाँव) हवाई अड्डा मुख्य द्वार है।', 'Pune (Lohegaon) airport is the main gateway.')

export const ASHTA_TEMPLES: Temple[] = [
  {
    id: 'mayureshwar',
    name: l('मयूरेश्वर, मोरगाँव', 'Mayureshwar, Morgaon'),
    place: l('मोरगाँव, बारामती तालुका, पुणे ज़िला', 'Morgaon, Baramati taluka, Pune district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 1/8', 'Ashtavinayak 1/8')],
    importance: l(
      'अष्टविनायक यात्रा का पहला और अंतिम मंदिर। गणपत्य संप्रदाय इसे सबसे प्रमुख पीठ मानता है। मान्यता है कि मोरगाँव का दर्शन किए बिना यात्रा पूरी नहीं होती।',
      'The first and last temple of the Ashtavinayak yatra, and the foremost seat of the Ganapatya tradition. It is believed the yatra is not complete without returning to Morgaon.',
    ),
    katha: l(
      'गणेश पुराण के अनुसार त्रेता युग में गणेश जी मोर पर सवार, छह भुजाओं वाले मयूरेश्वर के रूप में प्रकट हुए और असुर सिंधु का वध किया। गाँव का नाम मोर (मयूर) से माना जाता है।',
      'According to the Ganesha Purana, in the Treta Yuga Ganesha appeared as six-armed Mayureshwar, riding a peacock, and slew the demon Sindhu. The village is said to be named after the peacock (mor).',
    ),
    history: l(
      'मंदिर काले पत्थर का है और उसके चारों कोनों पर मीनार जैसे स्तंभ हैं, जिससे दूर से यह मस्जिद जैसा दिखता है। कहा जाता है कि यह रक्षा के लिए किया गया। निर्माण की सही तिथि निश्चित नहीं। पेशवाओं ने मंदिर को संरक्षण दिया और संत मोरया गोसावी इससे जुड़े हैं।',
      'The temple is of black stone, with minaret-like pillars at its four corners, so from a distance it resembles a mosque; it is said this was done for protection. The exact date of building is uncertain. The Peshwas patronised the temple and the saint Morya Gosavi is associated with it.',
    ),
    todo: [
      l('मयूरेश्वर के दर्शन', 'Darshan of Mayureshwar'),
      l('द्वार के सामने नंदी की अनोखी मूर्ति देखें', 'See the unusual Nandi statue facing the temple'),
      l('चारों द्वारों पर गणेश जी के चार रूप देखें', 'See Ganesha’s four forms at the four gates'),
      l('यात्रा पूरी करने वाले यहीं लौटकर दर्शन करते हैं', 'Pilgrims who finish the yatra return here for a second darshan'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('पुणे से लगभग 55 से 65 किमी (स्रोतों में अंतर है); पुणे-सोलापुर मार्ग से बारामती की ओर मुड़कर।', 'About 55 to 65 km from Pune (sources differ); take the Pune-Solapur road and turn towards Baramati.'),
      rail: l('पुणे जंक्शन मुख्य स्टेशन है; रास्ते में छोटे स्टेशन भी हैं, नक्शे में देख लें।', 'Pune Junction is the main station; smaller stations lie on the way, check a map app.'),
      air: PUNE_AIR,
    },
    maps: 'Mayureshwar Temple, Morgaon',
    note: l('अष्टविनायक का क्रम परंपरा में मोरगाँव, सिद्धटेक, पाली, महाड, थेऊर, लेण्याद्रि, ओझर, रांजणगाँव बताया जाता है। यात्री सुविधा के हिसाब से क्रम बदल लेते हैं।', 'The traditional order is Morgaon, Siddhatek, Pali, Mahad, Theur, Lenyadri, Ozar, Ranjangaon. Pilgrims often change the order for convenience.'),
    nearby: [next('siddhivinayak-siddhatek', 'सिद्धिविनायक, सिद्धटेक', 'Siddhivinayak, Siddhatek')],
  },
  {
    id: 'siddhivinayak-siddhatek',
    name: l('सिद्धिविनायक, सिद्धटेक', 'Siddhivinayak, Siddhatek'),
    place: l('सिद्धटेक, कर्जत तालुका, अहिल्यानगर ज़िला', 'Siddhatek, Karjat taluka, Ahilyanagar district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 2/8', 'Ashtavinayak 2/8')],
    importance: l(
      'भीमा नदी के किनारे एक छोटी पहाड़ी पर बसा मंदिर। यहाँ गणेश जी की सूँड़ दाईं ओर है, जो अष्टविनायक में सिर्फ़ यहीं है। माना जाता है कि दाईं सूँड़ वाले गणेश जी शक्तिशाली पर कठिनता से प्रसन्न होने वाले हैं।',
      'A temple on a small hill by the Bhima river. Ganesha’s trunk turns to the right here, the only one among the eight. A right-trunked Ganesha is believed to be very powerful but harder to please.',
    ),
    katha: l(
      'मुद्गल पुराण के अनुसार सृष्टि के आरंभ में विष्णु जी मधु और कैटभ से नहीं जीत पा रहे थे। शिव जी ने बताया कि गणेश जी की आराधना नहीं की गई। विष्णु जी ने यहाँ तप किया, सिद्धियाँ पाईं और दोनों असुरों को हराया। इसी से जगह का नाम सिद्धटेक पड़ा।',
      'According to the Mudgala Purana, at the start of creation Vishnu could not defeat the demons Madhu and Kaitabha. Shiva told him he had not invoked Ganesha. Vishnu did penance here, gained siddhis and defeated them. The place was named Siddhatek after this.',
    ),
    history: l(
      'मंदिर उत्तर की ओर मुख किए हुए है। पेशवा सेनापति हरिपंत फड़के की कथा प्रसिद्ध है, जिन्होंने पद खोने पर यहाँ 21 परिक्रमाएँ कीं। मंदिर तक के पत्थर के रास्ते का संबंध उनके बादामी किले की विजय से जोड़ा जाता है।',
      'The temple faces north. The Peshwa general Haripant Phadke is said to have made 21 circumambulations here after losing his post, and the stone path is linked to his later victory at Badami fort.',
    ),
    todo: [
      l('सिद्धिविनायक के दर्शन', 'Darshan of Siddhivinayak'),
      l('पहाड़ी की परिक्रमा, जिसमें लगभग 30 मिनट लगते हैं', 'Circumambulate the hill, which takes about 30 minutes'),
      l('भीमा नदी के किनारे कुछ समय बिताएँ', 'Spend a while on the Bhima river bank'),
    ],
    best: BEST,
    rules: l('पहाड़ी की परिक्रमा का रास्ता पक्का नहीं है, इसलिए आरामदायक जूते पहनें। बाकी नियम स्थानीय देवस्थान से पूछ लें।', 'The path around the hill is not paved, so wear comfortable footwear. Ask the local devasthan about other rules.'),
    how: {
      road: l('पुणे से लगभग 90 से 100 किमी (स्रोतों में अंतर है)। नदी के दक्षिण में शिरापुर गाँव से नाव या नए पुल से भी पहुँचा जा सकता है।', 'About 90 to 100 km from Pune (sources differ). From Shirapur village across the river you can reach it by boat or the newer bridge.'),
      rail: l('दौंड स्टेशन लगभग 19 किमी।', 'Daund station is about 19 km away.'),
      air: PUNE_AIR,
    },
    maps: 'Siddhivinayak Temple, Siddhatek',
    nearby: [next('ballaleshwar', 'बल्लालेश्वर, पाली', 'Ballaleshwar, Pali')],
  },
  {
    id: 'ballaleshwar',
    name: l('बल्लालेश्वर, पाली', 'Ballaleshwar, Pali'),
    place: l('पाली, सुधागढ़ तालुका, रायगढ़ ज़िला', 'Pali, Sudhagad taluka, Raigad district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 3/8', 'Ashtavinayak 3/8')],
    importance: l(
      'एकमात्र गणेश मंदिर जो भक्त के नाम से जाना जाता है। सरसगढ़ किले और अंबा नदी के बीच बसा है। यहाँ प्रसाद में मोदक की जगह बेसन के लड्डू चढ़ते हैं।',
      'The only Ganesha temple known by a devotee’s name. It stands between Sarasgad fort and the Amba river. Besan laddus, not modaks, are offered as prasad here.',
    ),
    katha: l(
      'पाली के सेठ कल्याण का बेटा बल्लाल बचपन से गणेश भक्त था और दोस्तों के साथ जंगल में एक पत्थर की गणेश रूप में पूजा करता था। नाराज़ पिता ने पूजा का सामान तोड़ दिया और बल्लाल को पेड़ से बाँधकर पीटा। कथा है कि गणेश जी ब्राह्मण के रूप में प्रकट हुए, उसे मुक्त किया और वहीं रहने का वचन दिया।',
      'Ballal, son of the merchant Kalyan of Pali, was a devotee of Ganesha who worshipped a stone as Ganesha in the forest with his friends. His angry father broke up the worship and beat him and tied him to a tree. The story is that Ganesha appeared as a Brahmin, freed him and promised to stay there.',
    ),
    history: l(
      'पुराना लकड़ी का मंदिर 1760 के आसपास पत्थर के मंदिर में बदला गया (फड़णवीस परिवार)। निर्माण में जोड़ने के लिए पिघला हुआ सीसा इस्तेमाल हुआ बताया जाता है। मंदिर पूर्वमुखी है और दक्षिणायन के बाद सूर्य की किरणें सुबह मूर्ति पर पड़ती हैं। एक घंटा चिमाजी अप्पा पुर्तगालियों से जीतकर लाए थे।',
      'The old wooden temple was rebuilt in stone around 1760 (the Phadnis family). Molten lead is said to have been used to join the stones. It faces east, and after the southward turn of the sun its rays fall on the idol at sunrise. A bell here was brought by Chimaji Appa after defeating the Portuguese.',
    ),
    todo: [
      l('बल्लालेश्वर के दर्शन', 'Darshan of Ballaleshwar'),
      l('पीछे धुंडी विनायक का पश्चिममुखी मंदिर', 'The west-facing Dhundi Vinayak temple behind'),
      l('मंदिर के दो सरोवर देखें', 'See the two lakes beside the temple'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('पुणे से लोनावला और खोपोली होकर लगभग 110 किमी; मुंबई से पनवेल और खोपोली होकर लगभग 125 किमी।', 'About 110 km from Pune via Lonavala and Khopoli; about 125 km from Mumbai via Panvel and Khopoli.'),
      rail: l('कर्जत स्टेशन लगभग 30 किमी।', 'Karjat station is about 30 km away.'),
      air: l('पुणे या मुंबई हवाई अड्डा।', 'Pune or Mumbai airport.'),
    },
    maps: 'Ballaleshwar Temple, Pali',
    nearby: [next('varadvinayak', 'वरदविनायक, महाड', 'Varadvinayak, Mahad')],
  },
  {
    id: 'varadvinayak',
    name: l('वरदविनायक, महाड', 'Varadvinayak, Mahad'),
    place: l('महाड, खालापुर तालुका, रायगढ़ ज़िला', 'Mahad, Khalapur taluka, Raigad district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 4/8', 'Ashtavinayak 4/8')],
    importance: l(
      'वर और सफलता देने वाले गणेश जी का मंदिर, खोपोली के पास। अष्टविनायक में यही मंदिर मुंबई के सबसे पास है। यहाँ भक्तों को गर्भगृह के भीतर मूर्ति के पास जाकर पूजा करने की अनुमति बताई जाती है।',
      'The temple of Ganesha as giver of boons and success, near Khopoli, and the closest of the eight to Mumbai. Devotees are said to be allowed to go up to the idol inside the sanctum and offer their own prayers.',
    ),
    katha: l(
      'कथा है कि ऋषि गृत्समद यहाँ वन में गणेश जी की आराधना करते थे और उन्होंने गणेश जी को वरद विनायक नाम दिया। गृत्समद मंत्र "गणानां त्वा" के लिए प्रसिद्ध हैं।',
      'It is told that the sage Grutsamad worshipped Ganesha in the forest here and named him Varada Vinayaka. He is known for the mantra "Gananam tva".',
    ),
    history: l(
      'मान्यता है कि मूर्ति पास की झील में डूबी मिली थी, इसलिए उसका रूप घिसा हुआ है। लगभग 1725 में कल्याण के सूबेदार रामजी महादेव बिवलकर ने मंदिर बनवाया। मूर्ति पूर्वमुखी है, सूँड़ बाईं ओर है और एक तेल का दीपक बहुत लंबे समय से लगातार जलता बताया जाता है।',
      'The idol is said to have been found immersed in the nearby lake, hence its weathered look. Around 1725 Ramji Mahadev Biwalkar, subhedar of Kalyan, built the temple. The idol faces east with the trunk to the left, and an oil lamp is said to have burned without a break for a very long time.',
    ),
    todo: [
      l('वरदविनायक के दर्शन', 'Darshan of Varadvinayak'),
      l('गर्भगृह के पास जाकर स्वयं पूजा करने की व्यवस्था', 'Offer your own puja close to the idol, where the system allows it'),
      l('मंदिर के चारों ओर चार हाथी की मूर्तियाँ देखें', 'See the four elephant statues around the temple'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('मुंबई-पुणे मार्ग से खोपोली के पास लगभग 3 किमी अंदर; पुणे से लगभग 80 से 88 किमी, मुंबई से 63 से 75 किमी (स्रोतों में अंतर)।', 'About 3 km off the Mumbai-Pune road near Khopoli; roughly 80 to 88 km from Pune and 63 to 75 km from Mumbai (sources differ).'),
      rail: l('खोपोली स्टेशन लगभग 6 किमी; कर्जत लगभग 24 किमी।', 'Khopoli station is about 6 km away; Karjat about 24 km.'),
      air: l('पुणे या मुंबई हवाई अड्डा।', 'Pune or Mumbai airport.'),
    },
    maps: 'Varadvinayak Temple, Mahad',
    nearby: [next('chintamani-theur', 'चिंतामणि, थेऊर', 'Chintamani, Theur')],
  },
  {
    id: 'chintamani-theur',
    name: l('चिंतामणि, थेऊर', 'Chintamani, Theur'),
    place: l('थेऊर, हवेली तालुका, पुणे ज़िला', 'Theur, Haveli taluka, Pune district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 5/8', 'Ashtavinayak 5/8')],
    importance: l(
      'अष्टविनायक में पुणे के सबसे पास का मंदिर, भीमा और मुला-मुठा नदियों के संगम के पास। मन की बेचैनी दूर करने वाले चिंतामणि गणेश के रूप में पूजे जाते हैं।',
      'The Ashtavinayak temple nearest to Pune, near the meeting of the Bhima and the Mula-Mutha rivers. Ganesha is worshipped here as Chintamani, the one who calms the restless mind.',
    ),
    katha: l(
      'मुद्गल पुराण के अनुसार राजकुमार गण ने ऋषि कपिल से इच्छा पूरी करने वाला चिंतामणि रत्न छीन लिया। कपिल की प्रार्थना पर गणेश जी ने गण का वध करके रत्न लौटाया, पर कपिल ने रत्न गणेश जी के गले में पहना दिया। कदंब वृक्ष के कारण इस जगह का पुराना नाम कदंबनगर कहा जाता है।',
      'According to the Mudgala Purana, prince Gana seized the wish-fulfilling Chintamani jewel from the sage Kapila. At Kapila’s prayer Ganesha slew Gana and returned the jewel, but Kapila hung it on Ganesha’s neck. The place was once called Kadambanagar after the kadamb tree.',
    ),
    history: l(
      'वर्तमान मंदिर संत मोरया गोसावी के वंश से जुड़ा माना जाता है। पेशवा माधवराव प्रथम (1745 से 1772) ने लकड़ी का सभामंडप और अन्य निर्माण करवाए और अपने अंतिम दिन यहीं बिताए। मंदिर में चिमाजी अप्पा द्वारा पुर्तगालियों से जीता हुआ एक बड़ा यूरोपीय घंटा लगा है।',
      'The present temple is linked to the family line of the saint Morya Gosavi. The Peshwa Madhavrao I (1745 to 1772) added the wooden assembly hall and other work and spent his last days here. A large European bell, taken by Chimaji Appa from the Portuguese, hangs in the temple.',
    ),
    todo: [
      l('चिंतामणि के दर्शन', 'Darshan of Chintamani'),
      l('मंदिर के पीछे कदंब तीर्थ सरोवर', 'The Kadamb Tirtha lake behind the temple'),
      l('पेशवा वाड़ा और लकड़ी का सभामंडप', 'The Peshwa wada and the wooden assembly hall'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('पुणे से लगभग 25 किमी, हडपसर और लोनी काळभोर होकर पुणे-सोलापुर मार्ग से।', 'About 25 km from Pune via Hadapsar and Loni Kalbhor on the Pune-Solapur road.'),
      rail: l('पुणे जंक्शन से सड़क मार्ग।', 'By road from Pune Junction.'),
      air: PUNE_AIR,
    },
    maps: 'Chintamani Temple, Theur',
    nearby: [next('girijatmaj', 'गिरिजात्मज, लेण्याद्रि', 'Girijatmaj, Lenyadri')],
  },
  {
    id: 'girijatmaj',
    name: l('गिरिजात्मज, लेण्याद्रि', 'Girijatmaj, Lenyadri'),
    place: l('लेण्याद्रि, जुन्नर तालुका, पुणे ज़िला', 'Lenyadri, Junnar taluka, Pune district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 6/8', 'Ashtavinayak 6/8')],
    importance: l(
      'अष्टविनायक में अकेला मंदिर जो पहाड़ पर, बौद्ध गुफाओं के बीच है। गुफा संख्या 7 की दो कोठरियों में गणेश जी की पूजा होती है। मान्यता है कि यहीं माता पार्वती ने गणेश जी को पुत्र रूप में पाने के लिए तप किया।',
      'The only one of the eight on a mountain, among Buddhist caves. Ganesha is worshipped in two cells of Cave 7. It is believed Parvati did her penance here to have Ganesha as her son.',
    ),
    katha: l(
      'गणेश पुराण के अनुसार शिव जी ने पार्वती को गणेश मंत्र "गं" दिया और पार्वती ने यहाँ बारह वर्ष तप किया। प्रसन्न होकर गणेश जी ने पुत्र रूप में जन्म लेने का वर दिया। गणेश चतुर्थी के दिन मिट्टी की मूर्ति में प्राण आए। "गिरिजात्मज" का अर्थ पार्वती का पुत्र है।',
      'According to the Ganesha Purana, Shiva gave Parvati the Ganesha mantra "Gam" and she did penance here for twelve years. Pleased, Ganesha granted her the boon of being born as her son; on Ganesh Chaturthi a clay image came alive. "Girijatmaj" means the son of Parvati.',
    ),
    history: l(
      'लेण्याद्रि की लगभग 30 गुफाएँ पहली से तीसरी सदी की बौद्ध गुफाएँ हैं। गुफा 7 मूल रूप से बौद्ध विहार था, जिसकी दो कोठरियाँ बाद में गणेश पूजा के लिए ले ली गईं। मूर्ति गुफा की दीवार में ही गढ़ी हुई है और उस पर सिंदूर चढ़ा है। मंदिर दक्षिणमुखी है, पर स्थानीय मान्यता है कि गणेश जी का मुख उत्तर की ओर है।',
      'The roughly 30 caves of Lenyadri are Buddhist caves of the 1st to 3rd century. Cave 7 was originally a Buddhist vihara, two of whose cells were later taken for Ganesha worship. The image is carved on the cave wall itself and covered with sindoor. The temple faces south, but local belief holds that the deity faces north.',
    ),
    todo: [
      l('गिरिजात्मज के दर्शन (पहाड़ी पर चढ़कर)', 'Darshan of Girijatmaj, after climbing the hill'),
      l('बौद्ध गुफाएँ देखें, खास तौर पर गुफा 6 का चैत्य', 'See the Buddhist caves, especially the chaitya in Cave 6'),
      l('सुबह जल्दी चढ़ाई शुरू करें', 'Start the climb early in the morning'),
    ],
    best: l('अक्टूबर से फरवरी। बरसात में सीढ़ियाँ फिसलन भरी हो सकती हैं।', 'October to February. The steps can be slippery in the monsoon.'),
    rules: l('लगभग 280 से 300 सीढ़ियाँ चढ़नी होती हैं (स्रोतों में गिनती अलग है), इसलिए बुज़ुर्गों के लिए धीरे-धीरे और आराम से जाएँ। आरामदायक जूते पहनें।', 'There are about 280 to 300 steps (sources count differently), so older visitors should go slowly. Wear comfortable footwear.'),
    how: {
      road: l('जुन्नर से लगभग 5 किमी; पुणे से लगभग 95 किमी।', 'About 5 km from Junnar; about 95 km from Pune.'),
      rail: l('पुणे जंक्शन मुख्य स्टेशन है; आगे सड़क से।', 'Pune Junction is the main station; continue by road.'),
      air: PUNE_AIR,
    },
    maps: 'Girijatmaj Ganpati Temple, Lenyadri',
    nearby: [next('vighnahar', 'विघ्नहर, ओझर', 'Vighnahar, Ozar')],
  },
  {
    id: 'vighnahar',
    name: l('विघ्नहर, ओझर', 'Vighnahar, Ozar'),
    place: l('ओझर, जुन्नर तालुका, पुणे ज़िला', 'Ozar, Junnar taluka, Pune district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 7/8', 'Ashtavinayak 7/8')],
    importance: l(
      'कुकड़ी नदी के किनारे विघ्नहर्ता गणेश का मंदिर, जो विघ्नासुर पर गणेश जी की विजय की कथा से जुड़ा है। ऊँचे शिखर पर सोने की परत चढ़ी है।',
      'A temple of Ganesha as remover of obstacles on the Kukadi river, tied to the story of his victory over the demon Vignasura. The tall spire is covered with gold.',
    ),
    katha: l(
      'कथा है कि राजा अभिनंदन के यज्ञ में इंद्र को भाग न मिला, तो इंद्र ने काल को भेजा। काल विघ्नासुर बनकर यज्ञ में बाधा डालने लगा। ऋषियों की प्रार्थना पर गणेश जी ने उसे हराया। विघ्नासुर ने शरण लेकर वचन दिया कि वह वहीं रहेगा जहाँ गणेश जी की पूजा नहीं होती, और गणेश जी का नाम विघ्नेश्वर पड़ा।',
      'The story goes that Indra got no share in King Abhinandana’s sacrifice, so he sent Kala (Time). Kala became the demon Vignasura and disrupted the sacrifice. At the sages’ prayer Ganesha defeated him. Vignasura surrendered and agreed to dwell only where Ganesha is not invoked, and Ganesha took the name Vigneshwara.',
    ),
    history: l(
      'पेशवा बाजीराव प्रथम के भाई चिमाजी अप्पा ने वसई का किला पुर्तगालियों से जीतने के बाद मंदिर का जीर्णोद्धार कराया और शिखर पर सोना चढ़वाया। 1967 में गणेश भक्त अप्पा शास्त्री जोशी ने फिर मरम्मत कराई।',
      'After taking Vasai fort from the Portuguese, Chimaji Appa, brother of the Peshwa Baji Rao I, renovated the temple and had the spire gilded. It was renovated again in 1967 by the devotee Appa Shastri Joshi.',
    ),
    todo: [
      l('विघ्नहर के दर्शन', 'Darshan of Vighnahar'),
      l('स्वर्ण शिखर और परिसर की दीवारें देखें', 'See the golden spire and the walled courtyard'),
      l('कुकड़ी नदी के किनारे कुछ देर बैठें', 'Sit for a while by the Kukadi river'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('पुणे-नाशिक मार्ग से नारायणगाँव के आगे लगभग 9 किमी; पुणे से लगभग 85 किमी।', 'Off the Pune-Nashik highway, about 9 km past Narayangaon; about 85 km from Pune.'),
      rail: l('पुणे जंक्शन मुख्य स्टेशन है; आगे सड़क से।', 'Pune Junction is the main station; continue by road.'),
      air: PUNE_AIR,
    },
    maps: 'Vighnahar Ganpati Temple, Ozar',
    nearby: [next('mahaganapati', 'महागणपति, रांजणगाँव', 'Mahaganapati, Ranjangaon')],
  },
  {
    id: 'mahaganapati',
    name: l('महागणपति, रांजणगाँव', 'Mahaganapati, Ranjangaon'),
    place: l('रांजणगाँव, शिरूर तालुका, पुणे ज़िला', 'Ranjangaon, Shirur taluka, Pune district'),
    state: 'MH',
    groups: ['ashta'],
    tags: [l('अष्टविनायक 8/8', 'Ashtavinayak 8/8')],
    importance: l(
      'अष्टविनायक का आठवाँ मंदिर, जहाँ गणेश जी महागणपति के रूप में पूजे जाते हैं। मान्यता है कि शिव जी ने यहीं गणेश जी की पूजा करके त्रिपुरासुर पर विजय पाई। परंपरा के अनुसार इसके बाद यात्री मोरगाँव लौटते हैं।',
      'The eighth temple of the Ashtavinayak, where Ganesha is worshipped as Mahaganapati. It is believed Shiva worshipped Ganesha here before defeating Tripurasura. By tradition, pilgrims then return to Morgaon.',
    ),
    katha: l(
      'कथा है कि त्रिपुरासुर को तीन नगरों (सोने, चाँदी और लोहे के) का वरदान था, जो एक सीध में आने पर ही नष्ट हो सकते थे। नारद जी की सलाह पर शिव जी ने पहले गणेश जी को प्रणाम किया और तब बाण चलाया। जहाँ पूजा की, वहाँ मंदिर बना और नगर का नाम मणिपुर पड़ा, जो अब रांजणगाँव है।',
      'The story is that Tripurasura had a boon of three cities (of gold, silver and iron) that could be destroyed only when aligned. On Narada’s advice Shiva first bowed to Ganesha and then shot his arrow. The temple stands where he worshipped, and the town was called Manipur, now Ranjangaon.',
    ),
    history: l(
      'कुछ स्रोत मंदिर को 9वीं से 10वीं सदी का बताते हैं। पेशवा माधवराव ने मूर्ति के चारों ओर पत्थर का गर्भगृह बनवाया। मंदिर पूर्वमुखी है और दक्षिणायन में सूर्य की किरणें मूर्ति पर पड़ती हैं। एक लोकमान्यता है कि असली मूर्ति (दस सूँड़ और बीस भुजाओं वाली) तहखाने में छिपी है, पर मंदिर प्रशासन इसे नहीं मानता।',
      'Some sources date the temple to the 9th to 10th century. The Peshwa Madhavrao built the stone sanctum around the idol. It faces east and in the southward sun the rays fall on the idol. A local belief says the original ten-trunked, twenty-armed idol is hidden in a vault, but the temple authorities deny this.',
    ),
    todo: [
      l('महागणपति के दर्शन', 'Darshan of Mahaganapati'),
      l('द्वार पर जय और विजय की मूर्तियाँ देखें', 'See the Jay and Vijay statues at the gate'),
      l('यात्रा पूरी करने के बाद मोरगाँव लौटकर दर्शन', 'After finishing the yatra, return to Morgaon for darshan'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('पुणे से पुणे-अहिल्यानगर मार्ग पर लगभग 50 किमी; शिरूर से लगभग 21 किमी पहले।', 'About 50 km from Pune on the Pune-Ahilyanagar road; about 21 km before Shirur.'),
      rail: l('पुणे जंक्शन मुख्य स्टेशन है; आगे सड़क से।', 'Pune Junction is the main station; continue by road.'),
      air: PUNE_AIR,
    },
    maps: 'Mahaganapati Temple, Ranjangaon',
    nearby: [next('mayureshwar', 'मयूरेश्वर, मोरगाँव (समापन)', 'Mayureshwar, Morgaon (to close)')],
  },
]
