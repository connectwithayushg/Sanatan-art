/**
 * Braj: the land of Krishna's childhood around Mathura. Mathura's Krishna Janmasthan has its own page (see templesPuri.ts) and is
 * listed here as well. Facts cross-checked between Wikipedia and regional guides. Customs differ between traditions
 * (Pushtimarg, Gaudiya and others), so the pages describe the common ones. Distances are rounded and differ between sources.
 */
import { l, type Temple } from './templeTypes'

const RULES = l(
  'त्योहारों पर भीड़ बहुत होती है। दर्शन का समय और नियम मंदिर की अपनी परंपरा के अनुसार हैं, इसलिए वहीं पूछ लें।',
  'It is very crowded on festivals. Darshan timings and rules follow each temple’s own tradition, so ask there.',
)
const BEST = l('अक्टूबर से मार्च। होली, राधाष्टमी और जन्माष्टमी पर बहुत भीड़ होती है।', 'October to March. Holi, Radhashtami and Janmashtami are very crowded.')
const MATHURA_RAIL = l('मथुरा जंक्शन सबसे पास का बड़ा स्टेशन है; आगे सड़क से।', 'Mathura Junction is the nearest big station; continue by road.')
const AIR = l('आगरा सबसे पास का हवाई अड्डा है; दिल्ली का IGI हवाई अड्डा भी विकल्प है।', 'Agra is the nearest airport; Delhi’s IGI airport is also an option.')

export const BRAJ_TEMPLES: Temple[] = [
  {
    id: 'banke-bihari',
    name: l('बाँके बिहारी मंदिर, वृंदावन', 'Banke Bihari Temple, Vrindavan'),
    place: l('वृंदावन, मथुरा ज़िला, उत्तर प्रदेश', 'Vrindavan, Mathura district, Uttar Pradesh'),
    state: 'UP',
    groups: ['braj'],
    tags: [l('ब्रज', 'Braj')],
    importance: l(
      'वृंदावन का सबसे प्रसिद्ध मंदिर। माना जाता है कि बाँके बिहारी जी राधा और कृष्ण का संयुक्त रूप हैं, और त्रिभंग मुद्रा में खड़े हैं। "बाँके" का अर्थ टेढ़ा, यानी तीन जगह मुड़ा हुआ स्वरूप।',
      'Vrindavan’s best-known temple. Banke Bihari is believed to be the united form of Radha and Krishna, standing in the tribhanga pose. "Banke" means bent, the form bent in three places.',
    ),
    katha: l(
      'स्वामी हरिदास जी निधिवन में जिस विग्रह की पूजा करते थे, उसे कुंज बिहारी कहते थे। उनके शिष्यों ने त्रिभंग मुद्रा के कारण उसे बाँके बिहारी नाम दिया। विग्रह के प्रकट होने का उत्सव बिहार पंचमी पर मनाया जाता है।',
      'Swami Haridas worshipped the image in Nidhivan under the name Kunj Bihari. His disciples named it Banke Bihari for its tribhanga pose. The appearance of the image is celebrated on Bihar Panchami.',
    ),
    history: l(
      'पहले विग्रह की पूजा निधिवन में होती थी। 19वीं सदी में हरिदास जी के साधु और गोस्वामी अनुयायियों के बीच विवाद के बाद गोस्वामियों ने लगभग 1864 में वर्तमान मंदिर बनवाया और विग्रह को यहाँ ले आए।',
      'The image was first worshipped in Nidhivan. In the 19th century, after a dispute between the sadhu and the goswami followers of Haridas, the goswamis built the present temple around 1864 and moved the image here.',
    ),
    todo: [
      l('बाँके बिहारी जी के दर्शन', 'Darshan of Banke Bihari'),
      l('शरद पूर्णिमा पर बाँसुरी के दर्शन (वर्ष में एक बार)', 'See the flute on Sharad Purnima (once a year)'),
      l('निधिवन और राधा रमण मंदिर के दर्शन', 'Visit Nidhivan and the Radha Raman temple'),
    ],
    best: BEST,
    rules: l('यहाँ ठाकुर जी को बालक रूप में पूजा जाता है, इसलिए सुबह की मंगला आरती सिर्फ़ जन्माष्टमी पर होती है और मंदिर में घंटे नहीं लगाए जाते। दर्शन में हर कुछ मिनट पर परदा डाला जाता है। गलियाँ संकरी और भीड़ भरी हैं, इसलिए सामान कम रखें।', 'Here Thakur ji is worshipped as a child, so the early mangala aarti is held only on Janmashtami and no bells hang in the temple. The curtain is drawn every few minutes during darshan. The lanes are narrow and crowded, so carry little.'),
    how: {
      road: l('मथुरा से लगभग 12 किमी; दिल्ली से लगभग 150 किमी।', 'About 12 km from Mathura; about 150 km from Delhi.'),
      rail: l('मथुरा जंक्शन या वृंदावन रोड स्टेशन।', 'Mathura Junction or Vrindavan Road station.'),
      air: AIR,
    },
    maps: 'Banke Bihari Temple, Vrindavan',
    note: l('परदा डालने की रीति के पीछे लोकमान्यता है कि लगातार दर्शन से ठाकुर जी भक्त के साथ चल देते हैं। पूजा की रीतियाँ सेवा परंपरा पर निर्भर करती हैं।', 'The curtain custom rests on a popular belief that uninterrupted darshan would make Thakur ji follow the devotee home. Worship customs depend on the seva tradition.'),
    nearby: [
      { name: l('निधिवन', 'Nidhivan'), dist: l('वृंदावन में, पास ही', 'In Vrindavan, close by'), text: l('वह वन जहाँ स्वामी हरिदास जी ने पहले बाँके बिहारी जी की पूजा की।', 'The grove where Swami Haridas first worshipped Banke Bihari.') },
      { name: l('श्री कृष्ण जन्मस्थान, मथुरा', 'Shri Krishna Janmasthan, Mathura'), dist: l('लगभग 12 किमी', 'About 12 km'), text: l('श्री कृष्ण की जन्मभूमि माना जाने वाला परिसर।', 'The complex held to be Shri Krishna’s birthplace.'), photoOf: 'krishna-janmasthan' },
    ],
  },
  {
    id: 'barsana-radha-rani',
    name: l('राधा रानी मंदिर, बरसाना', 'Radha Rani Temple, Barsana'),
    place: l('बरसाना, मथुरा ज़िला, उत्तर प्रदेश', 'Barsana, Mathura district, Uttar Pradesh'),
    state: 'UP',
    groups: ['braj'],
    tags: [l('ब्रज', 'Braj')],
    importance: l(
      'राधा जी का नगर बरसाना। श्री जी का मंदिर भानुगढ़ पहाड़ी (लगभग 250 मीटर ऊँची) पर है, जहाँ राधा-कृष्ण "लाड़ली लाल" के रूप में पूजे जाते हैं। यहाँ की राधाष्टमी और लट्ठमार होली दुनिया भर में प्रसिद्ध हैं।',
      'Barsana is the town of Radha. The Shriji temple stands on the Bhanugarh hill (about 250 m high), where Radha and Krishna are worshipped as "Laadli Lal". Its Radhashtami and Lathmar Holi are known around the world.',
    ),
    katha: l(
      'लोककथा है कि नंद जी और वृषभानु जी घनिष्ठ मित्र थे। कंस के अत्याचारों से तंग आकर दोनों अपने लोगों के साथ चले गए: नंद जी नंदीश्वर पहाड़ी पर नंदगाँव में और वृषभानु जी भानुगढ़ पहाड़ी पर बरसाना में बसे। इसी से दोनों नगरों की जोड़ी बनी, जिनके बीच लट्ठमार होली खेली जाती है।',
      'The folk story is that Nanda and Vrishabhanu were close friends. Tired of Kamsa’s oppression, both moved with their people: Nanda settled at Nandgaon on the Nandishwar hill and Vrishabhanu at Barsana on the Bhanugarh hill. This paired the two towns, between which Lathmar Holi is played.',
    ),
    history: l(
      'मान्यता है कि मंदिर पहली बार लगभग 5,000 वर्ष पहले श्री कृष्ण के प्रपौत्र वज्रनाभ ने बनवाया (यह परंपरा है)। विग्रह फिर से चैतन्य महाप्रभु के शिष्य नारायण भट्ट को मिले, और 1675 में राजा वीर सिंह देव ने मंदिर बनवाया। वर्तमान ढाँचे में लाल बलुआ पत्थर, मेहराब, गुंबद और भीतर की दीवारों पर चित्र हैं।',
      'Tradition says the temple was first built about 5,000 years ago by Krishna’s great-grandson Vajranabh (a tradition). The images were rediscovered by Narayan Bhatt, a disciple of Chaitanya Mahaprabhu, and the temple was built in 1675 by Raja Veer Singh Deo. The present structure is of red sandstone with arches, domes and paintings on the inner walls.',
    ),
    todo: [
      l('श्री जी (राधा रानी) के दर्शन, 200 से अधिक सीढ़ियाँ चढ़कर', 'Darshan of Shriji (Radha Rani) after climbing 200-plus steps'),
      l('पहाड़ी की चोटी से पूरे बरसाना का दृश्य', 'The view of all Barsana from the hilltop'),
      l('राधाष्टमी या लट्ठमार होली के समय यात्रा', 'Visit around Radhashtami or Lathmar Holi'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('मथुरा से लगभग 50 किमी; वृंदावन और गोवर्धन से भी सड़क है।', 'About 50 km from Mathura; there are roads from Vrindavan and Govardhan too.'),
      rail: MATHURA_RAIL,
      air: AIR,
    },
    maps: 'Shri Radha Rani Temple, Barsana',
    nearby: [
      { name: l('नंदगाँव, नंद भवन', 'Nandgaon, Nand Bhawan'), dist: l('लगभग 8 किमी', 'About 8 km'), text: l('नंदीश्वर पहाड़ी पर नंद राय जी का मंदिर, जहाँ लट्ठमार होली में बरसाना के साथ जोड़ी बनती है।', 'The Nand Rai ji temple on the Nandishwar hill, paired with Barsana in Lathmar Holi.'), photoOf: 'nandgaon' },
    ],
  },
  {
    id: 'govardhan-giriraj',
    name: l('गिरिराज गोवर्धन', 'Giriraj Govardhan'),
    place: l('गोवर्धन, मथुरा ज़िला, उत्तर प्रदेश', 'Govardhan, Mathura district, Uttar Pradesh'),
    state: 'UP',
    groups: ['braj'],
    tags: [l('ब्रज', 'Braj')],
    importance: l(
      'ब्रज का पवित्र केंद्र, एक लगभग 8 किमी लंबी पहाड़ी, जिसे श्री कृष्ण का स्वरूप माना जाता है। श्रद्धालु इसकी परिक्रमा करते हैं। गोवर्धन पूजा का पर्व इसी पर्वत की स्मृति में मनाया जाता है।',
      'The sacred centre of Braj, a hill about 8 km long, held to be a form of Shri Krishna. Devotees circumambulate it. The festival of Govardhan Puja remembers this mountain.',
    ),
    katha: l(
      'भागवत की कथा है कि जब इंद्र के क्रोध से ब्रज में भारी वर्षा हुई, तब श्री कृष्ण ने गोवर्धन पर्वत को अपनी छोटी उँगली पर उठाकर ब्रजवासियों को आश्रय दिया। इसीलिए इसे गिरिराज कहा जाता है।',
      'In the Bhagavata story, when Indra’s anger sent heavy rain on Braj, Shri Krishna lifted the Govardhan hill on his little finger and sheltered the people of Braj. This is why it is called Giriraj.',
    ),
    history: l(
      'पहाड़ी पर बने मंदिर और ढाँचे 16वीं सदी के बाद के हैं; इससे पुराने अवशेषों का कोई ज्ञात पुरातात्विक प्रमाण नहीं है। प्रमुख स्थलों में दानघाटी मंदिर, मानसी गंगा, कुसुम सरोवर और राधा कुंड हैं। परिक्रमा का रास्ता राजस्थान के डीग ज़िले के कुछ हिस्से से भी गुज़रता है।',
      'The temples and structures on the hill date from the 16th century onward; there is no known archaeological evidence of older remains. Key sites include the Danghati temple, Mansi Ganga, Kusum Sarovar and Radha Kund. The circuit also passes through part of Deeg district in Rajasthan.',
    ),
    todo: [
      l('गिरिराज जी की परिक्रमा, लगभग 21 किमी (कई लोग पैदल करते हैं)', 'The parikrama of Giriraj, about 21 km (many walk it)'),
      l('दानघाटी मंदिर के दर्शन', 'Darshan at the Danghati temple'),
      l('मानसी गंगा और राधा कुंड के दर्शन', 'Visit Mansi Ganga and Radha Kund'),
    ],
    best: l('अक्टूबर से मार्च। गोवर्धन पूजा (दीवाली के अगले दिन) और गुरु पूर्णिमा पर बहुत भीड़ होती है।', 'October to March. Govardhan Puja (the day after Diwali) and Guru Purnima are very crowded.'),
    rules: l('परिक्रमा लंबी है, इसलिए पानी, आरामदायक जूते और टोपी साथ रखें; गर्मी में सुबह या शाम को जाएँ। परिक्रमा के रास्ते पर सफ़ाई रखें।', 'The circuit is long, so carry water, comfortable shoes and a cap; in summer go in the morning or evening. Keep the parikrama path clean.'),
    how: {
      road: l('वृंदावन से लगभग 21 किमी; मथुरा से भी सीधी सड़क है।', 'About 21 km from Vrindavan; there is a direct road from Mathura too.'),
      rail: MATHURA_RAIL,
      air: AIR,
    },
    maps: 'Govardhan Hill, Mathura',
    note: l('परिक्रमा की लंबाई अलग-अलग स्रोतों में थोड़ी अलग लिखी मिलती है, और कुछ लोग राधा कुंड वाले हिस्से के साथ अलग गिनती करते हैं।', 'Different sources give slightly different lengths for the circuit, and some count it separately with the Radha Kund stretch.'),
    nearby: [
      { name: l('श्री कृष्ण जन्मस्थान, मथुरा', 'Shri Krishna Janmasthan, Mathura'), dist: l('मथुरा में', 'In Mathura'), text: l('श्री कृष्ण की जन्मभूमि माना जाने वाला परिसर।', 'The complex held to be Shri Krishna’s birthplace.'), photoOf: 'krishna-janmasthan' },
    ],
  },
  {
    id: 'gokul-nand-bhawan',
    name: l('गोकुल, नंद भवन', 'Gokul, Nand Bhawan'),
    place: l('गोकुल, मथुरा ज़िला, उत्तर प्रदेश', 'Gokul, Mathura district, Uttar Pradesh'),
    state: 'UP',
    groups: ['braj'],
    tags: [l('ब्रज', 'Braj')],
    importance: l(
      'भागवत के अनुसार श्री कृष्ण की अधिकांश बाल लीलाएँ गोकुल में हुईं। यमुना किनारे का यह नगर पुष्टिमार्ग का भी प्रमुख केंद्र है, जिसके सात स्वरूपों में से अनेक की सेवा यहाँ होती थी।',
      'According to the Bhagavata, most of Shri Krishna’s childhood pastimes happened in Gokul. This town on the Yamuna is also a major centre of the Pushtimarg tradition, where several of its seven svarupas were once served.',
    ),
    katha: l(
      'कथा है कि वसुदेव जी नवजात श्री कृष्ण को कारागार से यमुना पार करके गोकुल ले आए और नंद जी के घर यशोदा जी के पास रख दिया। यहीं पूतना वध, माखन चोरी और अन्य बाल लीलाओं की कथाएँ कही जाती हैं।',
      'The story is that Vasudeva carried the newborn Shri Krishna across the Yamuna to Gokul and left him with Yashoda in Nanda’s house. The tales of Putana, the butter stealing and other childhood pastimes are told here.',
    ),
    history: l(
      'सोलहवीं सदी से पहले के ग्रंथों में गोकुल और महावन एक ही माने जाते हैं। पुष्टिमार्ग की परंपरा के अनुसार 1550 में वल्लभाचार्य जी ब्रज आए और यमुना माता ने उन्हें गोकुल का खोया हुआ स्थान दिखाया। उनके पुत्र विट्ठलनाथ जी ने गोकुल में निवास करके इसे धार्मिक केंद्र बनाया। गोकुलनाथ हवेली और गोविंद घाट (ठकुरानी घाट) यहाँ के मुख्य स्थल हैं।',
      'In texts before the 16th century Gokul and Mahavan are taken to be the same. By Pushtimarg tradition Vallabhacharya came to Braj in 1550 and Mother Yamuna showed him the lost site of Gokul. His son Vitthalnath settled in Gokul and made it a religious centre. The Gokulnath Haveli and Govind Ghat (Thakurani Ghat) are the main sites.',
    ),
    todo: [
      l('नंद भवन (पुराना गोकुल) के दर्शन', 'Darshan at Nand Bhawan (Old Gokul)'),
      l('गोकुलनाथ हवेली और गोविंद घाट', 'The Gokulnath Haveli and Govind Ghat'),
      l('यमुना किनारे कुछ देर बैठें', 'Sit a while by the Yamuna'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('मथुरा से लगभग 10 से 15 किमी (स्रोतों में अंतर है); यमुना एक्सप्रेसवे पास से गुज़रता है।', 'About 10 to 15 km from Mathura (sources differ); the Yamuna Expressway passes close by.'),
      rail: l('मथुरा जंक्शन लगभग 7 किमी।', 'Mathura Junction, about 7 km.'),
      air: l('आगरा हवाई अड्डा लगभग 54 किमी।', 'Agra airport, about 54 km.'),
    },
    maps: 'Nand Bhavan, Gokul, Mathura',
    note: l('नंद भवन या "चौरासी खंभा" जैसे स्थानों के पुराने होने के दावे परंपरा पर आधारित हैं। गोकुल और महावन के नाम और स्थान को लेकर भी स्रोतों में थोड़ा अंतर मिलता है।', 'Claims about the age of places such as Nand Bhawan or the "84 pillars" rest on tradition. Sources also differ a little on the names and exact places of Gokul and Mahavan.'),
    nearby: [
      { name: l('श्री कृष्ण जन्मस्थान, मथुरा', 'Shri Krishna Janmasthan, Mathura'), dist: l('मथुरा में', 'In Mathura'), text: l('जहाँ से, कथा के अनुसार, वसुदेव जी श्री कृष्ण को गोकुल ले आए।', 'From where, in the story, Vasudeva carried Shri Krishna to Gokul.'), photoOf: 'krishna-janmasthan' },
    ],
  },
  {
    id: 'nandgaon',
    name: l('नंदगाँव, नंद राय जी का मंदिर', 'Nandgaon, Nand Rai ji Temple'),
    place: l('नंदगाँव, मथुरा ज़िला, उत्तर प्रदेश', 'Nandgaon, Mathura district, Uttar Pradesh'),
    state: 'UP',
    groups: ['braj'],
    tags: [l('ब्रज', 'Braj')],
    importance: l(
      'नंदीश्वर पहाड़ी पर बसा नंद बाबा का नगर, जिसका मंदिर पहाड़ी की चोटी पर है। मंदिर में श्री कृष्ण और बलराम की एक जैसी मूर्तियाँ हैं, जिनके दोनों ओर नंद जी और यशोदा जी हैं। यहाँ की लट्ठमार होली बरसाना के साथ खेली जाती है।',
      'The town of Nand Baba on the Nandishwar hill, with the temple on the hilltop. The temple holds identical images of Shri Krishna and Balarama, flanked by Nanda and Yashoda. Its Lathmar Holi is played together with Barsana.',
    ),
    katha: l(
      'लोककथा के अनुसार कंस के अत्याचारों से बचने के लिए नंद जी अपने ब्रजवासियों के साथ नंदीश्वर पहाड़ी पर आकर बसे, और वृषभानु जी बरसाना में। दोनों नगरों में आज भी श्री कृष्ण और राधा जी के मंदिर हैं।',
      'In folk tradition, to escape Kamsa’s oppression Nanda moved with the people of Braj to the Nandishwar hill, and Vrishabhanu to Barsana. Both towns still have temples of Shri Krishna and Radha.',
    ),
    history: l(
      'नगर का पुराना नाम नंदीग्राम था और पहाड़ी को नंदीश्वर या रुद्र पर्वत कहा जाता था, जिसे शिव का स्वरूप माना जाता था। कुछ विद्वानों के अनुसार सोलहवीं सदी से पहले इसका संबंध श्री कृष्ण से प्रमुख नहीं था; आज श्रद्धालु इसे नंद बाबा का निवास मानते हैं। वर्तमान मंदिर 18वीं सदी के मध्य में सिनसिनवार जाट रूप सिंह ने बनवाया। आसपास पावन सरोवर जैसे कई सरोवर श्री कृष्ण की लीलाओं से जुड़े हैं।',
      'The town was formerly Nandigrama and the hill was called Nandishwar or Rudra Parvata, held to be a form of Shiva. Some scholars note that before the 16th century its link to Shri Krishna was not prominent; devotees today hold it to be Nand Baba’s home. The present temple was built in the mid-18th century by the Sinsinwar Jat Roop Singh. Several tanks around, such as Pawan Sarovar, are tied to Shri Krishna’s pastimes.',
    ),
    todo: [
      l('पहाड़ी की चोटी पर नंद राय जी के दर्शन', 'Darshan of Nand Rai ji on the hilltop'),
      l('पावन सरोवर के दर्शन', 'Visit the Pawan Sarovar'),
      l('बरसाना की यात्रा के साथ जोड़ें', 'Combine it with a trip to Barsana'),
    ],
    best: BEST,
    rules: RULES,
    how: {
      road: l('बरसाना से लगभग 8 किमी; मथुरा से लगभग 50 किमी।', 'About 8 km from Barsana; about 50 km from Mathura.'),
      rail: MATHURA_RAIL,
      air: AIR,
    },
    maps: 'Nand Bhavan, Nandgaon, Mathura',
    note: l('नंदगाँव और गोकुल, दोनों को नंद बाबा के निवास से जोड़ा जाता है। परंपराएँ अलग हैं, इसलिए यात्री दोनों के दर्शन करते हैं।', 'Both Nandgaon and Gokul are linked with Nand Baba’s home. The traditions differ, so pilgrims visit both.'),
    nearby: [
      { name: l('राधा रानी मंदिर, बरसाना', 'Radha Rani Temple, Barsana'), dist: l('लगभग 8 किमी', 'About 8 km'), text: l('भानुगढ़ पहाड़ी पर श्री जी का मंदिर, राधा जी का नगर।', 'The Shriji temple on the Bhanugarh hill, the town of Radha.'), photoOf: 'barsana-radha-rani' },
    ],
  },
]
