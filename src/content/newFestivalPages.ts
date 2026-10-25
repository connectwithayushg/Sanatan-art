/** Sharad Purnima, Ahoi Ashtami, Chhath, Dev Uthani Ekadashi and Kartik Purnima: general North Indian practice, cross-checked against several sources; where homes differ the page says so. Text written for Sanatan App. */
import type { FestivalPage } from './festivalPages'

export const SHARAD_PURNIMA: FestivalPage = {
  id: 'sharad-purnima',
  tithi: { hi: 'आश्विन पूर्णिमा', en: 'Ashvin Purnima' },
  intro: {
    hi: 'साल की सबसे उजली पूर्णिमा। माना जाता है कि इस रात चंद्रमा सोलह कलाओं से पूर्ण होता है और उसकी चाँदनी में अमृत बरसता है। इसी रात माँ लक्ष्मी घूमकर पूछती हैं “को जागर्ति?” (कौन जाग रहा है?), इसलिए इसे कोजागरी पूर्णिमा भी कहते हैं।',
    en: 'The brightest full moon of the year. It is believed that the moon is complete with all sixteen kalas tonight and its light rains amrit. Maa Lakshmi is said to go about asking “Ko jagarti?” (who is awake?), so it is also called Kojagari Purnima.',
  },
  vidhiIntro: { hi: 'शाम को चाँद निकलने पर, घर में खीर बनाकर।', en: 'In the evening when the moon rises, with kheer made at home.' },
  vidhi: [
    {
      title: { hi: 'स्नान और संकल्प', en: 'Bath and sankalp' },
      body: {
        hi: 'सुबह स्नान करके व्रत का संकल्प लें। व्रत अपनी श्रद्धा और सामर्थ्य के अनुसार रखें; कई लोग फलाहार रखते हैं।',
        en: 'Bathe in the morning and take the vow of the fast. Keep it as your faith and strength allow; many take only fruit.',
      },
    },
    {
      title: { hi: 'लक्ष्मी-नारायण पूजा', en: 'Lakshmi-Narayan puja' },
      body: {
        hi: 'चौकी पर लाल कपड़ा बिछाकर माँ लक्ष्मी (और भगवान विष्णु) की मूर्ति या चित्र रखें। घी का दीया जलाएँ और रोली, अक्षत, फूल चढ़ाएँ।',
        en: 'Spread a red cloth on a chowki and place a murti or picture of Maa Lakshmi (and Lord Vishnu). Light a ghee diya and offer roli, akshat and flowers.',
      },
      mantra: 'ॐ श्रीं महालक्ष्म्यै नमः॥',
    },
    {
      title: { hi: 'खीर बनाएँ', en: 'Make the kheer' },
      body: { hi: 'शाम को दूध और चावल की खीर बनाएँ।', en: 'In the evening cook kheer of milk and rice.' },
    },
    {
      title: { hi: 'चंद्र दर्शन और अर्घ्य', en: 'See the moon, offer arghya' },
      body: {
        hi: 'चाँद निकलने पर लोटे से जल का अर्घ्य दें और चंद्र देव को प्रणाम करें।',
        en: 'When the moon rises, offer arghya of water from a lota and bow to Chandra Dev.',
      },
      mantra: 'ॐ सोमाय नमः॥',
    },
    {
      title: { hi: 'खीर चाँदनी में', en: 'Kheer in the moonlight' },
      body: {
        hi: 'खीर को पतले कपड़े या जाली से ढककर खुले आसमान के नीचे चाँदनी में रखें। फिर भोग लगाकर प्रसाद बाँटें। कितनी देर रखनी है, यह हर घर में अलग है: कोई कुछ घंटे, कोई पूरी रात।',
        en: 'Cover the kheer with a thin cloth or net and keep it under the open sky in the moonlight. Then offer it as bhog and share it as prasad. How long it stays out differs from home to home: a few hours, or all night.',
      },
    },
    {
      title: { hi: 'जागरण और आरती', en: 'Jagran and aarti' },
      body: {
        hi: 'रात में भजन-कीर्तन करें, लक्ष्मी जी की आरती गाएँ और कथा सुनें।',
        en: 'Sing bhajans at night, sing Lakshmi ji’s aarti and hear the katha.',
      },
    },
  ],
  samagri: [
    { hi: 'चौकी, लाल कपड़ा', en: 'Chowki and red cloth' },
    { hi: 'लक्ष्मी जी की मूर्ति या चित्र', en: 'Murti or picture of Lakshmi ji' },
    { hi: 'घी का दीया, धूप', en: 'Ghee diya, dhoop' },
    { hi: 'रोली, अक्षत, फूल', en: 'Roli, akshat, flowers' },
    { hi: 'जल का लोटा', en: 'Lota of water' },
    { hi: 'खीर: दूध, चावल, चीनी या मिश्री', en: 'Kheer: milk, rice, sugar or mishri' },
    { hi: 'खीर ढकने को पतला कपड़ा या जाली', en: 'A thin cloth or net to cover the kheer' },
  ],
  katha: {
    title: { hi: 'साहूकार की दो बेटियाँ', en: 'The merchant’s two daughters' },
    paras: [
      {
        hi: 'एक साहूकार की दो बेटियाँ थीं। दोनों पूर्णिमा का व्रत रखती थीं, पर बड़ी बेटी पूरा व्रत विधि से करती थी और छोटी अधूरा छोड़ देती थी।',
        en: 'A merchant had two daughters. Both kept the Purnima fast, but the elder kept it fully and by the rules, while the younger left it unfinished.',
      },
      {
        hi: 'विवाह के बाद छोटी बेटी की संतान जन्म लेते ही मर जाती थी। पंडितों ने बताया कि अधूरे व्रत के कारण ऐसा हो रहा है, पूर्णिमा का पूरा व्रत करो।',
        en: 'After marriage the younger daughter’s children died soon after birth. The pandits said it was because of the unfinished fast, and told her to keep the Purnima fast completely.',
      },
      {
        hi: 'उसने पूरा व्रत किया। पुत्र हुआ, पर वह भी कुछ ही दिन में चल बसा। उसने बालक को पीढ़े पर लिटाकर कपड़े से ढक दिया और बड़ी बहन को बुलाकर उसी पीढ़े पर बैठने को कहा।',
        en: 'She kept the whole fast. A son was born, but he too passed away within days. She laid the child on a low seat, covered him with a cloth, and asked her elder sister to sit on that very seat.',
      },
      {
        hi: 'बड़ी बहन का घाघरा बालक को छूते ही वह रोने लगा। बड़ी बहन ने कहा, “तू मुझे कलंक लगाना चाहती थी?” छोटी बहन बोली, “यह तो पहले से ही मृत था। तेरे पुण्य से यह जीवित हो गया।”',
        en: 'The moment the elder sister’s skirt touched the child, he began to cry. She said, “Did you want to put a blot on me?” The younger replied, “He was already gone. He is alive because of your merit.”',
      },
      {
        hi: 'तब से उसने पूरे नगर में पूर्णिमा का पूरा व्रत करने की बात फैलाई। सीख: व्रत श्रद्धा से और पूरा करें।',
        en: 'From then on she spread the word through the whole town to keep the Purnima fast completely. The lesson: keep a vrat with faith, and keep it whole.',
      },
    ],
  },
  regional: [
    { hi: 'बंगाल, ओडिशा, असम: कोजागरी लक्ष्मी पूजा, रात में लक्ष्मी पूजन और अल्पना।', en: 'Bengal, Odisha, Assam: Kojagari Lakshmi Puja, worship of Lakshmi at night, with alpana designs.' },
    { hi: 'महाराष्ट्र: कोजागिरी, चाँदनी में रखा मसाला दूध।', en: 'Maharashtra: Kojagiri, spiced milk set out in the moonlight.' },
    { hi: 'ब्रज: रास पूर्णिमा, श्रीकृष्ण के महारास की रात।', en: 'Braj: Raas Purnima, the night of Shri Krishna’s Maharaas.' },
    { hi: 'ओडिशा: कुमार पूर्णिमा, जिसे अविवाहित लड़कियाँ मनाती हैं; इस दिन कार्तिकेय जी का जन्म माना जाता है।', en: 'Odisha: Kumar Purnima, kept by unmarried girls; Kartikeya is believed to have been born this day.' },
  ],
  greetings: [
    { hi: 'शरद पूर्णिमा की चाँदनी आपके जीवन में अमृत बरसाए।', en: 'May the Sharad Purnima moonlight rain amrit on your life.' },
    { hi: 'माँ लक्ष्मी आपके घर सुख और समृद्धि लेकर आएँ।', en: 'May Maa Lakshmi bring joy and plenty to your home.' },
    { hi: 'आपको शरद पूर्णिमा की हार्दिक शुभकामनाएँ।', en: 'Warm Sharad Purnima wishes to you.' },
  ],
  card: { title: { hi: 'शरद पूर्णिमा', en: 'Sharad Purnima' }, blessing: '॥ अमृत की चाँदनी ॥', groups: ['moon', 'lakshmi', 'diya'], picture: 'LryOyGjm1bo' },
  aartis: ['lakshmi', 'jagdish'],
}

export const AHOI_ASHTAMI: FestivalPage = {
  id: 'ahoi-ashtami',
  tithi: { hi: 'कार्तिक कृष्ण अष्टमी', en: 'Kartik Krishna Ashtami' },
  intro: {
    hi: 'माताएँ अपनी संतान की लंबी आयु और कुशलता के लिए अहोई माता का व्रत रखती हैं। दिन भर निर्जला व्रत रखकर शाम को तारे देखकर अर्घ्य दिया जाता है। जिनके संतान नहीं है, वे भी संतान की कामना से यह व्रत रखती हैं।',
    en: 'Mothers keep this fast to Ahoi Mata for the long life and well-being of their children. After a day without water, arghya is offered on seeing the stars in the evening. Women hoping for a child keep it too.',
  },
  vidhiIntro: { hi: 'शाम को तारे निकलने से पहले पूजा की तैयारी कर लें।', en: 'Have the puja ready before the stars come out.' },
  vidhi: [
    {
      title: { hi: 'सुबह संकल्प', en: 'Morning sankalp' },
      body: {
        hi: 'स्नान करके संतान की कुशलता के लिए व्रत का संकल्प लें। अधिकतर माताएँ निर्जला व्रत रखती हैं। गर्भवती, बीमार या दवा लेने वाली माताएँ फल और जल लेकर व्रत रख सकती हैं।',
        en: 'Bathe and take the vow for your children’s well-being. Most mothers keep the fast without water. Mothers who are expecting, unwell or on medicine may keep it with fruit and water.',
      },
    },
    {
      title: { hi: 'अहोई माता का चित्र', en: 'Picture of Ahoi Mata' },
      body: {
        hi: 'दीवार पर गेरू से अहोई माता बनाएँ, साथ में सेह (साहू), उसके बच्चे और सात पुत्र। चाहें तो बाज़ार से अहोई माता का छपा चित्र लगाएँ।',
        en: 'Draw Ahoi Mata on the wall with geru, with the hedgehog (sehi), her young and the seven sons. Or put up a printed picture of Ahoi Mata.',
      },
    },
    {
      title: { hi: 'कलश और करवा', en: 'Kalash and karwa' },
      body: {
        hi: 'जल से भरा लोटा रखें और उस पर करवा रखें। कई घरों में वही करवा लेते हैं जो करवा चौथ पर इस्तेमाल हुआ था।',
        en: 'Place a lota of water and set a karwa on it. Many homes use the same karwa as on Karwa Chauth.',
      },
    },
    {
      title: { hi: 'शाम की पूजा', en: 'Evening puja' },
      body: {
        hi: 'दीया जलाकर रोली, अक्षत और दूध से अहोई माता की पूजा करें। सामने मूली, सिंघाड़े और पकवान रखें। हाथ में चावल के दाने लेकर कथा सुनें।',
        en: 'Light a diya and worship Ahoi Mata with roli, akshat and milk. Place radish, water chestnut and pakwan before her. Listen to the katha with grains of rice in your hand.',
      },
    },
    {
      title: { hi: 'स्याऊ माला', en: 'The Syau mala' },
      body: {
        hi: 'कई घरों में चाँदी की स्याऊ (सेह) और मोतियों की माला पूजा के बाद पहनी जाती है, और हर साल संतान के नाम का एक मोती जोड़ा जाता है। यह हर घर की अपनी परंपरा है।',
        en: 'In many homes a silver Syau (hedgehog) and a string of beads is worn after the puja, and each year a bead is added for each child. This is each family’s own custom.',
      },
    },
    {
      title: { hi: 'तारों को अर्घ्य', en: 'Arghya to the stars' },
      body: {
        hi: 'शाम को तारे दिखने पर लोटे के जल और चावल से अर्घ्य दें, फिर व्रत खोलें। कुछ घरों में चाँद देखकर व्रत खोला जाता है (इस दिन चाँद देर रात निकलता है)।',
        en: 'When the stars appear, offer arghya with water and rice from the lota, then break the fast. Some homes break it on seeing the moon (which rises late tonight).',
      },
    },
  ],
  samagri: [
    { hi: 'गेरू, या अहोई माता का चित्र', en: 'Geru, or a picture of Ahoi Mata' },
    { hi: 'जल का लोटा, करवा', en: 'Lota of water, karwa' },
    { hi: 'रोली, अक्षत, दूध', en: 'Roli, akshat, milk' },
    { hi: 'घी का दीया, धूप', en: 'Ghee diya, dhoop' },
    { hi: 'मूली, सिंघाड़े', en: 'Radish, water chestnuts' },
    { hi: 'पकवान: मठरी, पूड़े', en: 'Pakwan: mathri, poode' },
    { hi: 'चाँदी की स्याऊ माला (वैकल्पिक)', en: 'Silver Syau mala (optional)' },
  ],
  katha: {
    title: { hi: 'साहूकार की पत्नी और सेह', en: 'The merchant’s wife and the hedgehog' },
    paras: [
      {
        hi: 'एक साहूकार के सात बेटे थे। दीवाली से पहले घर लीपने के लिए साहूकार की पत्नी जंगल में मिट्टी लेने गई।',
        en: 'A merchant had seven sons. Before Diwali, the merchant’s wife went to the forest to dig clay for plastering the house.',
      },
      {
        hi: 'मिट्टी खोदते समय उसकी कुदाल गलती से एक सेह के बच्चे को लग गई और वह मर गया। उसे बहुत दुख हुआ, पर वह मिट्टी लेकर घर लौट आई।',
        en: 'While digging, her spade accidentally struck a baby hedgehog and it died. She was deeply sorry, but she carried the clay home.',
      },
      {
        hi: 'कुछ ही समय में उसके बेटे एक-एक करके चल बसे। दुखी होकर उसने गाँव की बड़ी-बूढ़ी स्त्रियों को सारी बात बताई।',
        en: 'Before long her sons passed away one by one. In grief she told the whole story to the elder women of the village.',
      },
      {
        hi: 'उन्होंने कहा, “तुमने अपना दोष सच्चे मन से माना है, इससे आधा पाप कट गया। कार्तिक कृष्ण अष्टमी को सेह और उसके बच्चों का चित्र बनाकर अहोई माता की पूजा करो और क्षमा माँगो।”',
        en: 'They said, “You have admitted your fault from the heart, and half the sin is gone. On Kartik Krishna Ashtami, draw the hedgehog and her young, worship Ahoi Mata and ask forgiveness.”',
      },
      {
        hi: 'उसने हर साल श्रद्धा से यह व्रत किया। अहोई माता की कृपा से उसका घर फिर से संतान से भर गया। तभी से यह व्रत संतान की रक्षा के लिए रखा जाता है।',
        en: 'She kept this vrat with faith every year. By Ahoi Mata’s grace her home was filled with children again. Since then the vrat is kept for the protection of children.',
      },
    ],
  },
  regional: [
    { hi: 'कुछ घरों में साहूकार की बेटी और स्याऊ के शाप की दूसरी कथा पढ़ी जाती है। अपने घर की कथा ही पढ़ें।', en: 'Some homes read a second katha, of the merchant’s daughter and Syau’s curse. Read the katha your own family reads.' },
    { hi: 'व्रत अधिकतर तारे देखकर खोला जाता है, कुछ घरों में चाँद देखकर।', en: 'The fast is mostly broken on seeing the stars, in some homes on seeing the moon.' },
    { hi: 'दक्षिण भारत के अमान्त पंचांग में यही तिथि आश्विन कृष्ण अष्टमी कहलाती है, तारीख़ वही रहती है। यह व्रत मुख्यतः उत्तर भारत में रखा जाता है।', en: 'In the Amanta calendar of the south this tithi is called Ashvin Krishna Ashtami, the date is the same. The vrat is kept mainly in North India.' },
  ],
  greetings: [
    { hi: 'अहोई माता आपकी संतान को लंबी आयु और सुख दें।', en: 'May Ahoi Mata give your children long life and happiness.' },
    { hi: 'माँ का आशीर्वाद सदा आपके परिवार पर बना रहे।', en: 'May a mother’s blessing always rest on your family.' },
    { hi: 'आपको अहोई अष्टमी की हार्दिक शुभकामनाएँ।', en: 'Warm Ahoi Ashtami wishes to you.' },
  ],
  card: { title: { hi: 'अहोई अष्टमी', en: 'Ahoi Ashtami' }, blessing: '॥ संतान की रक्षा ॥', groups: ['diya', 'lakshmi', 'moon'], picture: 'cM8X2DDvnGE' },
  aartis: ['ahoi', 'ambe', 'ganesh'],
}

export const CHHATH: FestivalPage = {
  id: 'chhath',
  tithi: { hi: 'कार्तिक शुक्ल षष्ठी', en: 'Kartik Shukla Shashthi' },
  intro: {
    hi: 'चार दिन का महापर्व, सूर्य देव और छठी मैया (षष्ठी देवी) की उपासना का। व्रती संतान की कुशलता, सुख और आरोग्य के लिए लगभग 36 घंटे का निर्जला व्रत रखते हैं। यह अकेला पर्व है जिसमें डूबते और उगते, दोनों सूर्य को अर्घ्य दिया जाता है। इस साल: 13 नवंबर नहाय-खाय, 14 नवंबर खरना, 15 नवंबर संध्या अर्घ्य, 16 नवंबर उषा अर्घ्य।',
    en: 'A four-day festival of Surya Dev and Chhathi Maiya (Shashthi Devi). Vratis keep a waterless fast of about 36 hours for their children’s well-being and health. It is the only festival where arghya is offered to both the setting and the rising sun. This year: 13 Nov Nahay-Khay, 14 Nov Kharna, 15 Nov evening arghya, 16 Nov morning arghya.',
  },
  vidhiIntro: { hi: 'चार दिन की विधि। नीचे हर दिन एक कदम है।', en: 'A four-day vidhi, one step for each day.' },
  vidhi: [
    {
      title: { hi: 'पहला दिन: नहाय-खाय (13 नवंबर)', en: 'Day 1: Nahay-Khay (13 Nov)' },
      body: {
        hi: 'नदी या घर में स्नान करके घर की पूरी सफ़ाई करें। व्रती सात्विक भोजन एक बार लेते हैं: लौकी की सब्ज़ी, चने की दाल और चावल।',
        en: 'Bathe in a river or at home and clean the whole house. The vrati eats one pure meal: lauki sabzi, chana dal and rice.',
      },
    },
    {
      title: { hi: 'दूसरा दिन: खरना (14 नवंबर)', en: 'Day 2: Kharna (14 Nov)' },
      body: {
        hi: 'दिन भर व्रत रखें। शाम को गुड़ की खीर (रसियाव) और रोटी का प्रसाद बनाकर पूजा करें और वही ग्रहण करें। इसके बाद अगले दिन के अर्घ्य तक निर्जला व्रत चलता है।',
        en: 'Fast through the day. In the evening make the prasad of jaggery kheer (rasiyaav) and roti, offer it and eat it. After this the waterless fast continues until the next day’s arghya.',
      },
    },
    {
      title: { hi: 'तीसरा दिन: संध्या अर्घ्य (15 नवंबर)', en: 'Day 3: Evening arghya (15 Nov)' },
      body: {
        hi: 'ठेकुआ, फल और गन्ने से सजे बाँस के सूप और दउरा लेकर परिवार के साथ घाट जाएँ। पानी में खड़े होकर डूबते सूर्य को अर्घ्य दें। सूर्यास्त का समय ऊपर देखें।',
        en: 'Take the bamboo soop and daura decorated with thekua, fruit and sugarcane, and go to the ghat with the family. Stand in the water and offer arghya to the setting sun. See the sunset time above.',
      },
      mantra: 'ॐ एहि सूर्य सहस्रांशो तेजोराशे जगत्पते।\nअनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर॥',
    },
    {
      title: { hi: 'चौथा दिन: उषा अर्घ्य और पारण (16 नवंबर)', en: 'Day 4: Morning arghya and parana (16 Nov)' },
      body: {
        hi: 'भोर में फिर घाट पर जाकर उगते सूर्य को अर्घ्य दें। प्रसाद बाँटें और व्रत खोलें। कई व्रती केवल छठ के गीत गाते हुए अर्घ्य देते हैं।',
        en: 'Go to the ghat again before dawn and offer arghya to the rising sun. Share the prasad and break the fast. Many vratis offer arghya singing Chhath songs instead of a mantra.',
      },
    },
  ],
  samagri: [
    { hi: 'बाँस का सूप और दउरा या टोकरी', en: 'Bamboo soop and daura or basket' },
    { hi: 'ठेकुआ, कसार', en: 'Thekua, kasar' },
    { hi: 'गन्ना, केला, नारियल', en: 'Sugarcane, banana, coconut' },
    { hi: 'नींबू या डाभ, सिंघाड़ा', en: 'Lemon or dabh, water chestnut' },
    { hi: 'अदरक और हल्दी का पौधा, शकरकंद', en: 'Ginger and turmeric plant, sweet potato' },
    { hi: 'दीया, सिंदूर, नए वस्त्र', en: 'Diya, sindoor, new clothes' },
    { hi: 'अर्घ्य के लिए दूध और जल का लोटा', en: 'Milk and a lota of water for arghya' },
  ],
  katha: {
    title: { hi: 'राजा प्रियव्रत और षष्ठी देवी', en: 'King Priyavrat and Shashthi Devi' },
    paras: [
      {
        hi: 'स्वायंभुव मनु के पुत्र राजा प्रियव्रत के कोई संतान नहीं थी। महर्षि कश्यप ने पुत्रेष्टि यज्ञ कराया और रानी को यज्ञ की खीर दी।',
        en: 'King Priyavrat, son of Swayambhuva Manu, had no child. Maharishi Kashyap performed a putreshti yagya and gave the queen the yagya’s kheer.',
      },
      {
        hi: 'रानी ने पुत्र को जन्म दिया, पर वह मृत था। दुखी राजा पुत्र को लेकर श्मशान गए और वियोग में प्राण त्यागने लगे।',
        en: 'The queen gave birth to a son, but he was lifeless. In grief the king carried the child to the cremation ground and was about to give up his own life.',
      },
      {
        hi: 'तभी एक दिव्य देवी प्रकट हुईं और बोलीं, “मैं ब्रह्मा की मानस पुत्री षष्ठी देवी हूँ। मैं बालकों की रक्षा करती हूँ। मेरी पूजा करो और दूसरों को भी प्रेरित करो।”',
        en: 'Then a divine goddess appeared and said, “I am Shashthi Devi, the mind-born daughter of Brahma. I protect children. Worship me and inspire others to do so too.”',
      },
      {
        hi: 'देवी के स्पर्श से बालक जीवित हो गया। राजा ने शुक्ल षष्ठी को विधि से देवी की पूजा की, और तभी से षष्ठी (छठी मैया) की पूजा की परंपरा चली।',
        en: 'At the goddess’s touch the child came alive. The king worshipped her properly on Shukla Shashthi, and from then began the tradition of worshipping Shashthi (Chhathi Maiya).',
      },
    ],
  },
  beliefs: [
    { hi: 'कहा जाता है कि सूर्य पुत्र कर्ण रोज़ पानी में खड़े होकर सूर्य को अर्घ्य देते थे।', en: 'It is said that Karna, son of Surya, offered arghya to the sun daily, standing in water.' },
    { hi: 'कुछ कथाओं में द्रौपदी ने पांडवों का राजपाट लौटाने के लिए छठ का व्रत किया।', en: 'In some tellings Draupadi kept the Chhath vrat so the Pandavas might regain their kingdom.' },
  ],
  regional: [
    { hi: 'छठ मुख्यतः बिहार, झारखंड, पूर्वी उत्तर प्रदेश और नेपाल के मधेस में मनाया जाता है, अब हर शहर में।', en: 'Chhath is kept mainly in Bihar, Jharkhand, eastern Uttar Pradesh and Nepal’s Madhesh, and now in every city.' },
    { hi: 'जहाँ नदी नहीं है, वहाँ तालाब, घाट या घर की छत पर बने कुंड में अर्घ्य दिया जाता है।', en: 'Where there is no river, arghya is offered at a pond, a ghat, or a small tank made on the rooftop.' },
    { hi: 'चैत्र मास में भी छठ होता है (चैती छठ)।', en: 'Chhath is also kept in the month of Chaitra (Chaiti Chhath).' },
    { hi: 'छठ के लोकगीत इस पर्व का बड़ा हिस्सा हैं। सामग्री और नियम हर घर की परंपरा के अनुसार थोड़े अलग हो सकते हैं।', en: 'Chhath folk songs are a big part of the festival. Items and rules may differ a little in each family’s tradition.' },
  ],
  greetings: [
    { hi: 'छठी मैया आपके परिवार की रक्षा करें।', en: 'May Chhathi Maiya protect your family.' },
    { hi: 'सूर्य देव आपके जीवन को प्रकाश और आरोग्य से भर दें।', en: 'May Surya Dev fill your life with light and health.' },
    { hi: 'आपको छठ पूजा की हार्दिक शुभकामनाएँ।', en: 'Warm Chhath Puja wishes to you.' },
  ],
  card: { title: { hi: 'छठ पूजा', en: 'Chhath Puja' }, blessing: '॥ जय छठी मैया ॥', groups: ['diya', 'devta'], picture: 'xisPXJqwQkA' },
  aartis: ['surya', 'jagdish'],
}

export const DEV_UTHANI: FestivalPage = {
  id: 'dev-uthani',
  tithi: { hi: 'कार्तिक शुक्ल एकादशी', en: 'Kartik Shukla Ekadashi' },
  intro: {
    hi: 'आषाढ़ की देवशयनी एकादशी से चार महीने की योगनिद्रा के बाद आज भगवान विष्णु जागते हैं। चातुर्मास समाप्त होता है और विवाह, गृह प्रवेश जैसे मांगलिक कार्य फिर शुरू होते हैं। इसी दिन से तुलसी जी का शालिग्राम जी से विवाह किया जाता है।',
    en: 'After four months of yoga-nidra since Devshayani Ekadashi, Lord Vishnu wakes today. Chaturmas ends and auspicious events like weddings and griha pravesh begin again. Tulsi ji’s marriage to Shaligram ji is held from this day.',
  },
  vidhiIntro: { hi: 'दिन में व्रत, शाम को भगवान को जगाना और तुलसी विवाह।', en: 'A fast in the day; in the evening waking the Lord and Tulsi Vivah.' },
  vidhi: [
    {
      title: { hi: 'व्रत और संकल्प', en: 'Fast and sankalp' },
      body: {
        hi: 'सुबह स्नान करके एकादशी व्रत का संकल्प लें। एकादशी के नियम: चावल और अन्न नहीं, सात्विक आचरण।',
        en: 'Bathe in the morning and take the Ekadashi vow. The rules of Ekadashi: no rice or grain, and a pure way of living.',
      },
    },
    {
      title: { hi: 'आँगन में भगवान के चरण', en: 'The Lord’s footprints' },
      body: {
        hi: 'आँगन या पूजा स्थान पर गेरू या आटे से भगवान के चरण बनाएँ।',
        en: 'Draw the Lord’s footprints with geru or flour in the courtyard or puja place.',
      },
    },
    {
      title: { hi: 'भोग रखकर ढकें', en: 'Offerings, covered' },
      body: {
        hi: 'वहाँ बेर, सिंघाड़ा, गन्ना, मौसमी फल और मिठाई रखें और ऊपर से डलिया या छलनी ढक दें।',
        en: 'Place ber, water chestnut, sugarcane, seasonal fruit and sweets there and cover them with a basket or sieve.',
      },
    },
    {
      title: { hi: 'दीया जलाएँ', en: 'Light the diya' },
      body: { hi: 'घी का दीया जलाएँ और भजन-कीर्तन करें।', en: 'Light a ghee diya and sing bhajans.' },
    },
    {
      title: { hi: 'भगवान को जगाएँ', en: 'Wake the Lord' },
      body: {
        hi: 'शंख, घंटी और थाली बजाकर भगवान को जगाएँ। कई घरों में लोकगीत “उठो देव, बैठो देव” भी गाया जाता है।',
        en: 'Blow the shankh, ring the bell and beat a thali to wake the Lord. Many homes also sing the folk song “Utho Dev, Baitho Dev”.',
      },
      mantra: 'उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज।\nउत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु॥',
    },
    {
      title: { hi: 'तुलसी विवाह', en: 'Tulsi Vivah' },
      body: {
        hi: 'गन्ने का मंडप बनाएँ। तुलसी जी को चुनरी और श्रृंगार चढ़ाएँ और शालिग्राम जी के साथ विवाह की रस्में (फेरे, मंगलाष्टक) करें।',
        en: 'Make a mandap of sugarcane. Offer a chunri and shringar to Tulsi ji and perform the wedding rites with Shaligram ji (pheras, mangalashtak).',
      },
    },
    {
      title: { hi: 'पारण', en: 'Parana' },
      body: {
        hi: 'अगले दिन द्वादशी को सूर्योदय के बाद शुभ समय में व्रत खोलें।',
        en: 'Break the fast the next day, on Dwadashi, after sunrise at an auspicious time.',
      },
    },
  ],
  samagri: [
    { hi: 'गेरू या आटा, गन्ने', en: 'Geru or flour, sugarcane' },
    { hi: 'बेर, सिंघाड़ा, शकरकंद, मौसमी फल', en: 'Ber, water chestnut, sweet potato, seasonal fruit' },
    { hi: 'मिठाई, डलिया या छलनी', en: 'Sweets, a basket or sieve' },
    { hi: 'घी का दीया, धूप', en: 'Ghee diya, dhoop' },
    { hi: 'शंख, घंटी, थाली', en: 'Shankh, bell, thali' },
    { hi: 'तुलसी का गमला, शालिग्राम जी', en: 'Tulsi plant, Shaligram ji' },
    { hi: 'लाल चुनरी, श्रृंगार का सामान', en: 'Red chunri, shringar items' },
  ],
  katha: {
    title: { hi: 'राजा और सच्चा भक्त', en: 'The king and the true devotee' },
    paras: [
      {
        hi: 'एक राज्य में एकादशी के दिन प्रजा से लेकर पशुओं तक किसी को अन्न नहीं दिया जाता था। एक दिन दूसरे राज्य का एक व्यक्ति नौकरी माँगने आया। राजा ने शर्त रखी कि एकादशी को अन्न नहीं मिलेगा, और वह मान गया।',
        en: 'In one kingdom, on Ekadashi no one, from the people to the animals, was given grain. One day a man from another kingdom came asking for work. The king set a condition: no grain on Ekadashi, and he agreed.',
      },
      {
        hi: 'एकादशी पर उसे फलाहार मिला, पर भूख नहीं मिटी। वह अन्न माँगने लगा। राजा ने आटा, दाल, चावल दे दिए। उसने नदी पर स्नान करके भोजन बनाया और भगवान को बुलाया। भगवान आए, भोजन किया और चले गए।',
        en: 'On Ekadashi he was given fruit, but his hunger was not eased. He asked for grain. The king gave flour, dal and rice. He bathed in the river, cooked, and called the Lord. The Lord came, ate and left.',
      },
      {
        hi: 'अगली एकादशी पर उसने दुगुना सामान माँगा, क्योंकि भगवान भी उसके साथ खाते हैं। राजा को विश्वास नहीं हुआ और वह पेड़ के पीछे छिपकर देखने लगा।',
        en: 'On the next Ekadashi he asked for double, because the Lord eats with him. The king did not believe it and hid behind a tree to watch.',
      },
      {
        hi: 'इस बार भगवान शाम तक नहीं आए। तब उस भक्त ने कहा, “प्रभु, आप नहीं आए तो मैं इसी नदी में प्राण त्याग दूँगा।” उसके सच्चे प्रेम से भगवान प्रकट हुए, भोजन किया और उसे अपने धाम ले गए।',
        en: 'This time the Lord did not come by evening. The devotee said, “Prabhu, if you do not come I will give up my life in this river.” Moved by his true love, the Lord appeared, ate, and took him to his abode.',
      },
      {
        hi: 'राजा समझ गया कि भगवान को दिखावा नहीं, सच्चा मन चाहिए। उस दिन से वह सच्चे मन से एकादशी का व्रत करने लगा।',
        en: 'The king understood that the Lord wants no show, only a true heart. From that day he kept Ekadashi with a sincere heart.',
      },
    ],
  },
  more: [
    {
      title: { hi: 'तुलसी विवाह की कथा', en: 'The story of Tulsi Vivah' },
      paras: [
        {
          hi: 'वृंदा भगवान विष्णु की परम भक्त और पतिव्रता थीं। उनका विवाह बलशाली दानवराज जलंधर से हुआ। वृंदा के पतिव्रत के बल से जलंधर को कोई हरा नहीं पाता था, और वह देवताओं को सताने लगा।',
          en: 'Vrinda was a great devotee of Lord Vishnu and a devoted wife. She was married to the mighty demon king Jalandhar. By the strength of her devotion to her husband, no one could defeat Jalandhar, and he began to trouble the devas.',
        },
        {
          hi: 'सृष्टि की रक्षा के लिए भगवान विष्णु ने माया से जलंधर का रूप धारण किया, जिससे वृंदा का व्रत खंडित हुआ और जलंधर युद्ध में मारा गया।',
          en: 'To protect creation, Lord Vishnu took Jalandhar’s form through his maya. Vrinda’s vow was broken and Jalandhar was killed in battle.',
        },
        {
          hi: 'सच जानकर वृंदा ने भगवान को पत्थर होने का शाप दिया, और भगवान शालिग्राम शिला बन गए। देवताओं की प्रार्थना पर वृंदा ने शाप वापस लिया। जहाँ वे सती हुईं, वहाँ तुलसी का पौधा उगा।',
          en: 'Learning the truth, Vrinda cursed the Lord to become stone, and he became the Shaligram shila. At the devas’ prayer she took back the curse. Where she gave up her life, a Tulsi plant grew.',
        },
        {
          hi: 'भगवान ने कहा, “तुम तुलसी के रूप में सदा मेरे साथ रहोगी। तुलसी के बिना मैं भोग स्वीकार नहीं करूँगा, और हर वर्ष मेरे शालिग्राम रूप से तुम्हारा विवाह होगा।” इसी की याद में तुलसी विवाह होता है।',
          en: 'The Lord said, “As Tulsi you will always be with me. Without Tulsi I will not accept bhog, and every year you will be wed to my Shaligram form.” Tulsi Vivah is held in remembrance of this.',
        },
      ],
      pics: [{ src: '/art/katha/tulsi-1.webp', alt: { hi: 'तुलसी विवाह', en: 'Tulsi Vivah' }, after: 3 }],
    },
  ],
  regional: [
    { hi: 'इस साल एकादशी 20 नवंबर को सुबह 7:15 से 21 नवंबर को सुबह 6:31 तक है (दिल्ली, Drik Panchang)। स्मार्त परंपरा 20 नवंबर को और वैष्णव परंपरा (जैसे ISKCON) 21 नवंबर को व्रत रखती है। अपने घर की परंपरा मानें।', en: 'This year Ekadashi runs from 7:15 am on 20 Nov to 6:31 am on 21 Nov (Delhi, Drik Panchang). The Smarta tradition fasts on 20 Nov and the Vaishnava tradition (such as ISKCON) on 21 Nov. Follow your own family’s tradition.' },
    { hi: 'तुलसी विवाह कुछ घरों में एकादशी की शाम, कुछ में द्वादशी को और कुछ जगह कार्तिक पूर्णिमा तक किसी भी दिन होता है।', en: 'Tulsi Vivah is held in some homes on the evening of Ekadashi, in some on Dwadashi, and in some places on any day up to Kartik Purnima.' },
    { hi: 'महाराष्ट्र में इसी एकादशी पर पंढरपुर की कार्तिकी यात्रा होती है।', en: 'In Maharashtra the Kartiki Yatra of Pandharpur is held on this Ekadashi.' },
    { hi: 'उत्तर भारत में इसे “देव उठाना” कहते हैं, और उसी रात से गन्ना खाना शुरू होता है।', en: 'In North India it is called “Dev Uthana”, and eating sugarcane begins from that night.' },
  ],
  greetings: [
    { hi: 'भगवान विष्णु जागें और आपके घर में मंगल करें।', en: 'May Lord Vishnu wake and bring blessings to your home.' },
    { hi: 'तुलसी माता आपके आँगन को सदा हरा-भरा रखें।', en: 'May Tulsi Mata keep your courtyard green and blessed.' },
    { hi: 'आपको देवउठनी एकादशी की हार्दिक शुभकामनाएँ।', en: 'Warm Dev Uthani Ekadashi wishes to you.' },
  ],
  card: { title: { hi: 'देवउठनी एकादशी', en: 'Dev Uthani Ekadashi' }, blessing: '॥ उठो देव, बैठो देव ॥', groups: ['diya', 'lakshmi', 'krishna'], picture: 'H4ilfu3vftk' },
  aartis: ['tulsi', 'jagdish', 'lakshmi'],
}

export const KARTIK_PURNIMA: FestivalPage = {
  id: 'kartik-purnima',
  tithi: { hi: 'कार्तिक पूर्णिमा', en: 'Kartik Purnima' },
  intro: {
    hi: 'कार्तिक मास का सबसे पवित्र दिन। इस दिन गंगा स्नान और दीपदान का विशेष महत्व है। भगवान शिव ने इसी दिन त्रिपुरासुर का संहार किया था, इसलिए इसे त्रिपुरी पूर्णिमा भी कहते हैं। काशी में इस रात घाटों पर लाखों दीये जलाए जाते हैं, जिसे देव दीपावली कहते हैं।',
    en: 'The holiest day of the month of Kartik. Bathing in the Ganga and lighting lamps are especially important today. Lord Shiva destroyed the demon Tripurasur on this day, so it is also called Tripuri Purnima. In Kashi lakhs of lamps are lit on the ghats tonight, called Dev Deepawali.',
  },
  vidhiIntro: { hi: 'सुबह स्नान, दिन में पूजा, शाम को दीपदान।', en: 'A bath in the morning, puja in the day, lamps in the evening.' },
  vidhi: [
    {
      title: { hi: 'स्नान', en: 'The holy bath' },
      body: {
        hi: 'भोर में गंगा या किसी पवित्र नदी में स्नान करें। घर पर हों तो नहाने के पानी में थोड़ा गंगाजल मिला लें।',
        en: 'Bathe before dawn in the Ganga or another sacred river. At home, add a little Gangajal to the bath water.',
      },
    },
    {
      title: { hi: 'विष्णु और शिव पूजा', en: 'Vishnu and Shiv puja' },
      body: {
        hi: 'भगवान विष्णु और भगवान शिव की पूजा करें। कई घरों में इस दिन सत्यनारायण कथा भी होती है।',
        en: 'Worship Lord Vishnu and Lord Shiva. Many homes also hold the Satyanarayan katha today.',
      },
      mantra: 'ॐ नमः शिवाय॥',
    },
    {
      title: { hi: 'तुलसी के पास दीया', en: 'A diya by Tulsi' },
      body: { hi: 'कार्तिक मास का अंतिम दीपदान तुलसी जी के पास करें।', en: 'Light the last lamp of the month of Kartik beside Tulsi ji.' },
    },
    {
      title: { hi: 'शाम का दीपदान', en: 'Lamps in the evening' },
      body: {
        hi: 'शाम को नदी, तालाब या मंदिर में दीये जलाएँ। घर के द्वार पर भी दीये रखें।',
        en: 'In the evening light lamps at a river, pond or temple. Place lamps at your door too.',
      },
    },
    {
      title: { hi: 'दान', en: 'Daan' },
      body: { hi: 'अन्न, वस्त्र या दीप का दान शुभ माना जाता है। जो सामर्थ्य हो, वही दें।', en: 'Giving grain, clothes or a lamp is considered auspicious. Give as you are able.' },
    },
    {
      title: { hi: 'चंद्र अर्घ्य', en: 'Arghya to the moon' },
      body: { hi: 'रात को चाँद निकलने पर जल का अर्घ्य दें।', en: 'At night when the moon rises, offer arghya of water.' },
    },
  ],
  samagri: [
    { hi: 'गंगाजल', en: 'Gangajal' },
    { hi: 'मिट्टी के दीये, घी या तेल, बाती', en: 'Clay diyas, ghee or oil, wicks' },
    { hi: 'फूल, रोली, अक्षत', en: 'Flowers, roli, akshat' },
    { hi: 'तुलसी दल, बेलपत्र', en: 'Tulsi leaves, bel patra' },
    { hi: 'दान का सामान', en: 'Items for daan' },
  ],
  katha: {
    title: { hi: 'त्रिपुरारि शिव', en: 'Tripurari Shiv' },
    paras: [
      {
        hi: 'तारकासुर के तीन पुत्र थे: तारकाक्ष, कमलाक्ष और विद्युन्माली। तपस्या से उन्होंने ब्रह्मा जी से तीन उड़ने वाले नगर (त्रिपुर) पाए और वर माँगा कि उनका अंत तभी हो, जब तीनों नगर एक सीध में आएँ और कोई एक ही बाण से तीनों को भेद दे।',
        en: 'Tarakasur had three sons: Tarakaksha, Kamalaksha and Vidyunmali. Through tapasya they received three flying cities (Tripura) from Brahma ji, with the boon that they could be destroyed only when the three cities stood in one line and someone pierced all three with a single arrow.',
      },
      {
        hi: 'वर पाकर वे तीनों लोकों को सताने लगे। देवता भगवान शिव की शरण में गए।',
        en: 'With the boon they began to trouble the three worlds. The devas took refuge in Lord Shiva.',
      },
      {
        hi: 'पृथ्वी रथ बनी और भगवान विष्णु बाण बने। कार्तिक पूर्णिमा को जैसे ही तीनों नगर एक सीध में आए, महादेव ने एक बाण से तीनों का अंत कर दिया।',
        en: 'The earth became the chariot and Lord Vishnu the arrow. On Kartik Purnima, as soon as the three cities came in one line, Mahadev ended all three with a single arrow.',
      },
      {
        hi: 'तब से शिव जी को त्रिपुरारि कहा गया। देवताओं ने प्रसन्न होकर काशी में दीये जलाए, और यही देव दीपावली कहलाई।',
        en: 'Since then Shiv ji is called Tripurari. The overjoyed devas lit lamps in Kashi, and this is what is called Dev Deepawali.',
      },
    ],
  },
  beliefs: [
    { hi: 'भगवान विष्णु का मत्स्य अवतार भी इसी दिन माना जाता है।', en: 'The Matsya avatar of Lord Vishnu is also believed to be on this day.' },
    { hi: 'कार्तिक मास के स्नान और दीपदान का समापन इसी दिन होता है।', en: 'The month-long Kartik bath and deepdaan end today.' },
    { hi: 'इसी दिन गुरु नानक जयंती (प्रकाश पर्व) भी है। सभी को प्रकाश पर्व की शुभकामनाएँ।', en: 'Today is also Guru Nanak Jayanti (Prakash Parv). Greetings to all on Prakash Parv.' },
  ],
  regional: [
    { hi: 'वाराणसी: देव दीपावली, घाटों पर दीपोत्सव और गंगा आरती।', en: 'Varanasi: Dev Deepawali, the festival of lamps on the ghats and the Ganga aarti.' },
    { hi: 'राजस्थान: पुष्कर मेला और पुष्कर सरोवर में स्नान।', en: 'Rajasthan: the Pushkar fair and a bath in Pushkar lake.' },
    { hi: 'दक्षिण भारत: कार्तिगई दीपम इसके आसपास होता है, पर वह कृत्तिका नक्षत्र से तय होता है और तारीख़ अलग हो सकती है।', en: 'South India: Karthigai Deepam falls around this time, but it is set by the Krittika nakshatra and the date may differ.' },
  ],
  greetings: [
    { hi: 'देव दीपावली के दीये आपके जीवन को रोशन करें।', en: 'May the lamps of Dev Deepawali light up your life.' },
    { hi: 'भगवान शिव और विष्णु की कृपा आप पर सदा बनी रहे।', en: 'May the grace of Lord Shiva and Vishnu stay with you always.' },
    { hi: 'आपको कार्तिक पूर्णिमा की हार्दिक शुभकामनाएँ।', en: 'Warm Kartik Purnima wishes to you.' },
  ],
  card: { title: { hi: 'कार्तिक पूर्णिमा', en: 'Kartik Purnima' }, blessing: '॥ हर हर महादेव ॥', groups: ['diya', 'moon', 'devta'], picture: '-32lKp1bi9k' },
  aartis: ['ganga', 'shiv', 'jagdish'],
}
