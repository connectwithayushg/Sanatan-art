/** Dhanteras, Choti Diwali, Govardhan Puja and Bhai Dooj: general North Indian household practice. Text written for Sanatan App. */
import type { Bi, VidhiStep } from './diwaliVidhi'
import type { KathaPic } from './kathaPics'
import { AHOI_ASHTAMI, CHHATH, DEV_UTHANI, KARTIK_PURNIMA, SHARAD_PURNIMA } from './newFestivalPages'

export interface FestivalPage {
  id: string
  tithi: Bi
  intro: Bi
  vidhiIntro: Bi
  vidhi: VidhiStep[]
  samagri: Bi[]
  katha: { title: Bi; paras: Bi[] }
  /** Further kathas of the day, each with its own pictures */
  more?: { title: Bi; paras: Bi[]; pics?: KathaPic[] }[]
  /** “It is also said” lines shown under the katha */
  beliefs?: Bi[]
  /** How the day differs from region to region and home to home */
  regional?: Bi[]
  greetings: Bi[]
  card: { title: Bi; blessing: string; groups: string[]; picture: string }
  aartis: string[]
}

export const DHANTERAS: FestivalPage = {
  id: 'dhanteras',
  tithi: { hi: 'कार्तिक कृष्ण त्रयोदशी', en: 'Kartik Krishna Trayodashi' },
  intro: {
    hi: 'आज भगवान धन्वंतरि अमृत कलश लेकर प्रकट हुए थे। आरोग्य के लिए धन्वंतरि जी, धन के लिए कुबेर जी और माँ लक्ष्मी की पूजा होती है। शाम को घर के बाहर यम के लिए दीया जलाया जाता है।',
    en: 'On this day Lord Dhanvantari rose from the ocean holding the pot of amrit. Families worship Dhanvantari for health, and Kuber and Maa Lakshmi for wealth. In the evening a lamp is lit outside the house for Yama.',
  },
  vidhiIntro: { hi: 'शाम को प्रदोष काल में, पूरे परिवार के साथ।', en: 'In the evening, during Pradosh Kaal, with the whole family.' },
  vidhi: [
    {
      title: { hi: 'घर की सफ़ाई और ख़रीदारी', en: 'Clean the house and shop' },
      body: {
        hi: 'दिन में घर साफ़ करें और मुख्य द्वार पर रंगोली बनाएँ। परंपरा है कि आज बर्तन, चाँदी, सोना या झाड़ू ख़रीदी जाती है। जो सामर्थ्य हो, वही लें।',
        en: 'Clean the house during the day and draw a rangoli at the main door. By custom people buy a utensil, silver, gold or a new broom today. Buy only what you can afford.',
      },
    },
    {
      title: { hi: 'चौकी सजाएँ', en: 'Set up the chowki' },
      body: {
        hi: 'उत्तर दिशा में चौकी पर लाल कपड़ा बिछाएँ। गणेश जी, माँ लक्ष्मी, कुबेर जी और धन्वंतरि जी का चित्र रखें। नए बर्तन या सिक्के भी पास में रखें।',
        en: 'Spread a red cloth on a chowki facing north. Place pictures of Ganesh ji, Maa Lakshmi, Kuber ji and Dhanvantari ji. Keep the new utensil or coins beside them.',
      },
    },
    {
      title: { hi: 'गणेश वंदना', en: 'Begin with Ganesh ji' },
      body: { hi: 'दीया जलाकर पहले गणेश जी को रोली, अक्षत और फूल चढ़ाएँ।', en: 'Light the diya and first offer roli, akshat and flowers to Ganesh ji.' },
      mantra: 'ॐ गं गणपतये नमः॥',
    },
    {
      title: { hi: 'धन्वंतरि पूजा', en: 'Dhanvantari puja' },
      body: {
        hi: 'परिवार के अच्छे स्वास्थ्य की कामना करते हुए धन्वंतरि जी को फूल, फल और मिठाई चढ़ाएँ।',
        en: 'Praying for the family’s good health, offer flowers, fruit and sweets to Dhanvantari ji.',
      },
      mantra: 'ॐ धन्वन्तरये नमः॥',
    },
    {
      title: { hi: 'कुबेर और लक्ष्मी पूजा', en: 'Kuber and Lakshmi puja' },
      body: {
        hi: 'कुबेर जी और माँ लक्ष्मी को रोली, अक्षत, फूल और मिठाई चढ़ाएँ। नए बर्तन में थोड़ा अनाज या मिठाई रखकर भोग लगाएँ। फिर लक्ष्मी जी की आरती करें।',
        en: 'Offer roli, akshat, flowers and sweets to Kuber ji and Maa Lakshmi. Put a little grain or sweets in the new utensil as bhog. Then sing the Lakshmi aarti.',
      },
      mantra: 'ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये धनधान्यसमृद्धिं मे देहि दापय स्वाहा॥',
    },
    {
      title: { hi: 'यम दीपदान', en: 'A lamp for Yama' },
      body: {
        hi: 'आटे का चौमुखा दीया बनाकर उसमें सरसों का तेल डालें। घर के मुख्य द्वार के बाहर दक्षिण दिशा की ओर मुँह करके रखें और यह मंत्र बोलें। माना जाता है इससे परिवार अकाल मृत्यु के भय से बचा रहता है।',
        en: 'Make a four-wick lamp of dough and fill it with mustard oil. Place it outside the main door facing south and say this mantra. It is believed to keep the family safe from untimely death.',
      },
      mantra: 'मृत्युना पाशदण्डाभ्यां कालेन श्यामया सह।\nत्रयोदश्यां दीपदानात् सूर्यजः प्रीयतां मम॥',
    },
  ],
  samagri: [
    { hi: 'लाल कपड़ा और चौकी', en: 'A red cloth and a chowki' },
    { hi: 'गणेश, लक्ष्मी, कुबेर और धन्वंतरि जी का चित्र', en: 'Pictures of Ganesh, Lakshmi, Kuber and Dhanvantari' },
    { hi: 'नया बर्तन, सिक्के या चाँदी', en: 'A new utensil, coins or silver' },
    { hi: 'घी का दीया, बाती, धूप', en: 'Ghee diya, wick and incense' },
    { hi: 'आटे का चौमुखा दीया, सरसों का तेल', en: 'A four-wick dough lamp and mustard oil' },
    { hi: 'रोली, अक्षत, हल्दी, फूल', en: 'Roli, akshat, haldi and flowers' },
    { hi: 'मिठाई, फल, धनिया के बीज', en: 'Sweets, fruit and coriander seeds' },
  ],
  katha: {
    title: { hi: 'धन्वंतरि और यम दीपदान की कथा', en: 'Dhanvantari, and the lamp for Yama' },
    paras: [
      {
        hi: 'जब देवताओं और असुरों ने समुद्र मंथन किया, तो कार्तिक कृष्ण त्रयोदशी के दिन भगवान धन्वंतरि हाथ में अमृत का कलश लेकर प्रकट हुए। वे आयुर्वेद के देवता हैं, इसलिए इस दिन अच्छे स्वास्थ्य की प्रार्थना की जाती है और बर्तन ख़रीदे जाते हैं।',
        en: 'When the gods and asuras churned the ocean, Lord Dhanvantari rose on Kartik Krishna Trayodashi holding a pot of amrit. He is the god of Ayurveda, so on this day people pray for health and buy new vessels.',
      },
      {
        hi: 'एक और कथा राजा हिम के पुत्र की है। ज्योतिषियों ने बताया था कि विवाह के चौथे दिन साँप के काटने से उसकी मृत्यु होगी।',
        en: 'Another story is of King Hima’s son. Astrologers had foretold that he would die of a snakebite on the fourth day of his marriage.',
      },
      {
        hi: 'उस रात उसकी पत्नी ने उसे सोने नहीं दिया। उसने कमरे के द्वार पर अपने सारे गहने और सोने-चाँदी के सिक्कों का ढेर लगा दिया और चारों ओर दीये जला दिए। फिर वह रात भर कहानियाँ सुनाती और गीत गाती रही।',
        en: 'That night his wife would not let him sleep. She piled all her jewellery and gold and silver coins at the door and lit lamps all around. Then she told stories and sang songs all night.',
      },
      {
        hi: 'जब यमराज साँप बनकर आए, तो दीयों और सोने की चमक से उनकी आँखें चौंधिया गईं। वे गहनों के ढेर पर बैठकर रात भर उसके गीत सुनते रहे और सुबह चुपचाप लौट गए। इस तरह पत्नी की समझदारी से राजकुमार के प्राण बच गए।',
        en: 'When Yama came as a snake, the glow of the lamps and the gold dazzled him. He sat on the heap of jewels listening to her songs all night, and at dawn he quietly went away. So the wife’s wisdom saved the prince.',
      },
      {
        hi: 'तभी से धनतेरस की शाम यम के लिए दीया जलाया जाता है, ताकि परिवार पर अकाल मृत्यु की छाया न पड़े।',
        en: 'Since then a lamp is lit for Yama on the evening of Dhanteras, so that untimely death does not touch the family.',
      },
    ],
  },
  greetings: [
    { hi: 'धन्वंतरि जी आपको आरोग्य दें और कुबेर जी भंडार भरें।', en: 'May Dhanvantari give you health and Kuber fill your stores.' },
    { hi: 'माँ लक्ष्मी आपके घर सुख-समृद्धि लेकर आएँ।', en: 'May Maa Lakshmi bring joy and plenty to your home.' },
    { hi: 'आपको धनतेरस की हार्दिक शुभकामनाएँ।', en: 'Warm Dhanteras wishes to you.' },
    { hi: 'धनतेरस पर आपके घर में धन और आरोग्य दोनों बरसें।', en: 'This Dhanteras, may both wealth and health pour into your home.' },
    { hi: 'आपके घर का हर बर्तन अन्न से और हर तिजोरी धन से भरी रहे।', en: 'May every pot in your home be full of grain and every chest full of wealth.' },
    { hi: 'भगवान धन्वंतरि आपको और आपके परिवार को निरोगी रखें।', en: 'May Bhagwan Dhanvantari keep you and your family free of illness.' },
    { hi: 'यमदीप की रोशनी आपके परिवार की सदा रक्षा करे।', en: 'May the light of the Yam-deep always protect your family.' },
    { hi: 'कुबेर जी की कृपा से आपके घर कभी कमी न आए।', en: 'By Kuber ji\'s grace, may your home never lack anything.' },
    { hi: 'इस धनतेरस खरीदा हर बर्तन सौभाग्य लेकर आए।', en: 'May every vessel bought this Dhanteras bring good fortune.' },
    { hi: 'स्वस्थ तन और सुखी मन ही सबसे बड़ा धन है। आपको दोनों मिलें।', en: 'A healthy body and a happy mind are the greatest wealth. May you have both.' },
    { hi: 'दीपावली के पाँच दिनों का यह शुभ आरंभ आपके लिए मंगलमय हो।', en: 'May this auspicious start of the five days of Diwali be blessed for you.' },
    { hi: 'सपरिवार आपको धनतेरस की बहुत-बहुत बधाई।', en: 'Many Dhanteras greetings to you and your family.' },
  ],
  card: { title: { hi: 'शुभ धनतेरस', en: 'Shubh Dhanteras' }, blessing: '॥ आरोग्य और समृद्धि ॥', groups: ['lakshmi', 'diya', 'ganesh'], picture: 'lakshmi' },
  aartis: ['lakshmi', 'ganesh'],
}

export const CHOTI_DIWALI: FestivalPage = {
  id: 'choti-diwali',
  tithi: { hi: 'कार्तिक कृष्ण चतुर्दशी', en: 'Kartik Krishna Chaturdashi' },
  intro: {
    hi: 'इसे नरक चतुर्दशी और रूप चौदस भी कहते हैं। इस दिन श्री कृष्ण ने नरकासुर का वध किया था। शाम को घर में दीये जलाए जाते हैं, और अगली सुबह सूर्योदय से पहले उबटन लगाकर स्नान किया जाता है।',
    en: 'It is also called Narak Chaturdashi and Roop Chaudas. On this day Shri Krishna defeated the demon Narakasura. Lamps are lit at home in the evening, and the next morning people bathe with ubtan before sunrise.',
  },
  vidhiIntro: { hi: 'शाम का दीपदान और अगली सुबह का अभ्यंग स्नान।', en: 'Lamps in the evening, and the abhyang bath the next morning.' },
  vidhi: [
    {
      title: { hi: 'घर और आँगन की सफ़ाई', en: 'Clean the house and courtyard' },
      body: {
        hi: 'दीवाली से पहले घर का कोना-कोना साफ़ करें। टूटा-फूटा, बेकार सामान हटा दें। माना जाता है कि इससे दरिद्रता घर से बाहर जाती है।',
        en: 'Clean every corner of the house before Diwali and clear out broken, useless things. It is believed that this sends poverty out of the home.',
      },
    },
    {
      title: { hi: 'शाम का दीपदान', en: 'Evening lamps' },
      body: {
        hi: 'सूर्यास्त के बाद घर के द्वार, आँगन, रसोई, पानी की जगह और तुलसी के पास दीये जलाएँ। कई घरों में चौदह दीये जलाने की परंपरा है।',
        en: 'After sunset, light lamps at the door, in the courtyard, kitchen, near the water and by the tulsi. Many homes light fourteen lamps.',
      },
    },
    {
      title: { hi: 'यम के लिए दीया', en: 'A lamp for Yama' },
      body: {
        hi: 'घर के बाहर दक्षिण की ओर मुँह करके सरसों के तेल का एक दीया रखें और यमराज को प्रणाम करें।',
        en: 'Place a mustard-oil lamp outside the house facing south and bow to Yamaraj.',
      },
      mantra: 'ॐ यमाय नमः॥',
    },
    {
      title: { hi: 'हनुमान जी और श्री कृष्ण की पूजा', en: 'Puja of Hanuman ji and Shri Krishna' },
      body: {
        hi: 'कई परिवार आज हनुमान जी को सिंदूर और चमेली का तेल चढ़ाते हैं और हनुमान चालीसा पढ़ते हैं। श्री कृष्ण को माखन-मिश्री का भोग लगाएँ।',
        en: 'Many families offer sindoor and jasmine oil to Hanuman ji today and read the Hanuman Chalisa. Offer makhan-mishri to Shri Krishna.',
      },
    },
    {
      title: { hi: 'अगली सुबह अभ्यंग स्नान', en: 'Abhyang bath the next morning' },
      body: {
        hi: 'सूर्योदय से पहले उठकर तिल के तेल की मालिश करें, फिर बेसन, हल्दी और चंदन का उबटन लगाकर स्नान करें। इसे रूप चौदस का स्नान कहते हैं। स्नान का समय ऊपर दिया गया है।',
        en: 'Rise before sunrise, massage with sesame oil, then bathe after applying an ubtan of besan, haldi and sandalwood. This is the Roop Chaudas bath. Its time is given above.',
      },
    },
  ],
  samagri: [
    { hi: 'मिट्टी के दीये, बाती, तेल', en: 'Clay diyas, wicks and oil' },
    { hi: 'सरसों के तेल का एक बड़ा दीया', en: 'One large mustard-oil lamp' },
    { hi: 'सिंदूर और चमेली का तेल', en: 'Sindoor and jasmine oil' },
    { hi: 'माखन-मिश्री, मिठाई', en: 'Makhan-mishri and sweets' },
    { hi: 'उबटन: बेसन, हल्दी, चंदन, तिल का तेल', en: 'Ubtan: besan, haldi, sandalwood, sesame oil' },
  ],
  katha: {
    title: { hi: 'नरकासुर वध की कथा', en: 'How Narakasura was defeated' },
    paras: [
      {
        hi: 'प्राग्ज्योतिषपुर में नरकासुर नाम का एक शक्तिशाली असुर राज करता था। उसे वरदान था, और अपनी शक्ति के घमंड में उसने देवताओं और ऋषियों को सताना शुरू कर दिया।',
        en: 'In Pragjyotishpur ruled a powerful asura named Narakasura. Proud of a boon he had won, he began to torment the gods and the sages.',
      },
      {
        hi: 'उसने देवमाता अदिति के कुंडल छीन लिए और सोलह हज़ार एक सौ कन्याओं को बंदी बना लिया। दुखी देवता श्री कृष्ण की शरण में गए।',
        en: 'He seized the earrings of Aditi, mother of the gods, and held 16,100 young women captive. The troubled gods went to Shri Krishna for help.',
      },
      {
        hi: 'श्री कृष्ण सत्यभामा जी के साथ गरुड़ पर बैठकर प्राग्ज्योतिषपुर गए। भयंकर युद्ध के बाद कार्तिक कृष्ण चतुर्दशी के दिन उन्होंने नरकासुर का अंत किया।',
        en: 'Shri Krishna rode Garuda to Pragjyotishpur with Satyabhama. After a fierce battle, on Kartik Krishna Chaturdashi, he put an end to Narakasura.',
      },
      {
        hi: 'सब कन्याएँ मुक्त हुईं और अदिति माँ को उनके कुंडल लौटा दिए गए। लोगों ने इस विजय की खुशी में दीये जलाए। कहते हैं, अंत समय में नरकासुर ने माँगा था कि इस दिन सूर्योदय से पहले स्नान करने वाले को नरक का भय न रहे।',
        en: 'All the women were set free and Aditi’s earrings were returned. People lit lamps to celebrate the victory. It is said that at the end Narakasura asked that whoever bathes before sunrise on this day be free from the fear of hell.',
      },
      {
        hi: 'इसीलिए यह दिन नरक चतुर्दशी कहलाता है, और दीवाली से एक दिन पहले छोटी दीवाली के रूप में मनाया जाता है। (दक्षिण भारत की कई परंपराओं में माना जाता है कि नरकासुर का वध स्वयं सत्यभामा जी ने किया था।)',
        en: 'That is why the day is called Narak Chaturdashi, and it is kept as Choti Diwali, the day before Diwali. (In many South Indian traditions, Satyabhama herself defeats Narakasura.)',
      },
    ],
  },
  greetings: [
    { hi: 'दीयों की रोशनी आपके घर से हर अँधेरा दूर करे।', en: 'May the light of the diyas drive every darkness from your home.' },
    { hi: 'श्री कृष्ण आपके जीवन के सब संकट हरें।', en: 'May Shri Krishna take away every trouble in your life.' },
    { hi: 'आपको छोटी दीवाली की हार्दिक शुभकामनाएँ।', en: 'Warm Choti Diwali wishes to you.' },
    { hi: 'नरक चतुर्दशी का दीया आपके घर की हर बुराई दूर करे।', en: 'May the lamp of Narak Chaturdashi drive every evil from your home.' },
    { hi: 'जैसे श्री कृष्ण ने नरकासुर को हराया, वैसे ही आपकी हर मुश्किल हारे।', en: 'As Shri Krishna defeated Narakasur, may every difficulty of yours be defeated.' },
    { hi: 'रूप चौदस पर आपका तन-मन दोनों निखरें।', en: 'This Roop Chaudas, may both your body and mind glow.' },
    { hi: 'हनुमान जी आपको बल, बुद्धि और विद्या दें।', en: 'May Hanuman ji give you strength, wisdom and learning.' },
    { hi: 'कल की दीवाली से पहले आज का हर दीया शुभ समाचार लाए।', en: 'Before tomorrow\'s Diwali, may every lamp today bring good news.' },
    { hi: 'आपके घर के हर कोने में रोशनी और हर दिल में प्रेम हो।', en: 'May every corner of your home have light and every heart have love.' },
    { hi: 'यम का दीया आपके परिवार को लंबी आयु दे।', en: 'May the lamp for Yam give your family long life.' },
    { hi: 'छोटी दीवाली की रौनक आपके जीवन में सदा बनी रहे।', en: 'May the sparkle of Choti Diwali stay in your life forever.' },
    { hi: 'सपरिवार आपको छोटी दीवाली और रूप चौदस की शुभकामनाएँ।', en: 'Choti Diwali and Roop Chaudas wishes to you and your family.' },
  ],
  card: { title: { hi: 'छोटी दीवाली', en: 'Choti Diwali' }, blessing: '॥ शुभ दीपावली ॥', groups: ['diya', 'krishna', 'lakshmi'], picture: 'diya-1' },
  aartis: ['hanuman', 'kunjbihari'],
}

export const GOVARDHAN: FestivalPage = {
  id: 'govardhan',
  tithi: { hi: 'कार्तिक शुक्ल प्रतिपदा', en: 'Kartik Shukla Pratipada' },
  intro: {
    hi: 'आज के दिन श्री कृष्ण ने गोवर्धन पर्वत उठाकर ब्रजवासियों की इंद्र के प्रकोप से रक्षा की थी। गोबर से गोवर्धन बनाकर उसकी पूजा और परिक्रमा होती है, और अन्नकूट का भोग लगता है।',
    en: 'On this day Shri Krishna lifted Govardhan hill to shelter the people of Braj from Indra’s anger. Families shape Govardhan from cow dung, worship it, walk around it and offer the Annakut.',
  },
  vidhiIntro: { hi: 'सुबह या शाम के मुहूर्त में, परिवार के साथ।', en: 'In the morning or evening muhurat, with the family.' },
  vidhi: [
    {
      title: { hi: 'गोवर्धन बनाएँ', en: 'Shape Govardhan' },
      body: {
        hi: 'आँगन में गाय के गोबर से लेटे हुए पुरुष के आकार में गोवर्धन जी बनाएँ। उनकी नाभि की जगह एक कटोरी या दीया रखें। फूल, रुई और खील से सजाएँ।',
        en: 'In the courtyard, shape Govardhan ji from cow dung in the form of a reclining figure. Place a small bowl or diya where the navel is. Decorate with flowers, cotton and puffed rice.',
      },
    },
    {
      title: { hi: 'अन्नकूट तैयार करें', en: 'Prepare the Annakut' },
      body: {
        hi: 'जितने हो सकें उतने पकवान बनाएँ: कढ़ी, चावल, बाजरा, मिली-जुली सब्ज़ी, पूरी, मिठाई। इसे अन्नकूट कहते हैं। कई मंदिरों में छप्पन भोग लगता है।',
        en: 'Cook as many dishes as you can: kadhi, rice, bajra, mixed vegetables, puris and sweets. This is the Annakut. Many temples offer fifty-six dishes.',
      },
    },
    {
      title: { hi: 'पूजा', en: 'The puja' },
      body: {
        hi: 'दीया जलाकर गोवर्धन जी को रोली, अक्षत, फूल, दूध और बताशे चढ़ाएँ। नाभि की कटोरी में दूध, दही, शहद डालें। फिर यह मंत्र बोलें।',
        en: 'Light the diya and offer roli, akshat, flowers, milk and batashe to Govardhan ji. Pour milk, curd and honey into the bowl at the navel. Then say this mantra.',
      },
      mantra: 'गोवर्धन धराधार गोकुल त्राणकारक।\nविष्णुबाहु कृतोच्छ्राय गवां कोटिप्रदो भव॥',
    },
    {
      title: { hi: 'परिक्रमा', en: 'Walk around Govardhan' },
      body: {
        hi: 'हाथ में जल का लोटा लेकर, धार गिराते हुए, गोवर्धन जी की परिक्रमा करें। कई घरों में सात परिक्रमा होती है और साथ में जौ बिखेरते चलते हैं; अपने घर की परंपरा मानें। बच्चे और बड़े सब साथ चलें।',
        en: 'Holding a lota of water and pouring a thin stream, walk around Govardhan ji. Many homes go around seven times, scattering barley; follow your family’s custom. Let children and elders walk together.',
      },
    },
    {
      title: { hi: 'गौ पूजा', en: 'Worship the cow' },
      body: {
        hi: 'यदि पास में गाय हो, तो उसे नहलाकर तिलक लगाएँ, गुड़ और रोटी खिलाएँ। गाय श्री कृष्ण को सबसे प्रिय है।',
        en: 'If there is a cow nearby, bathe her, put a tilak on her forehead and feed her jaggery and roti. The cow is dearest to Shri Krishna.',
      },
    },
    {
      title: { hi: 'भोग और आरती', en: 'Bhog and aarti' },
      body: {
        hi: 'अन्नकूट का भोग लगाएँ, गोवर्धन जी और कुंजबिहारी जी की आरती गाएँ, फिर प्रसाद सबमें बाँटें।',
        en: 'Offer the Annakut, sing the Govardhan and Kunj Bihari aartis, then share the prasad with everyone.',
      },
    },
  ],
  samagri: [
    { hi: 'गाय का गोबर', en: 'Cow dung' },
    { hi: 'दूध, दही, शहद, बताशे', en: 'Milk, curd, honey and batashe' },
    { hi: 'रोली, अक्षत, फूल, रुई, खील', en: 'Roli, akshat, flowers, cotton and puffed rice' },
    { hi: 'जल का लोटा, जौ', en: 'A lota of water and barley' },
    { hi: 'दीया, बाती, घी', en: 'Diya, wick and ghee' },
    { hi: 'अन्नकूट के पकवान', en: 'Annakut dishes' },
  ],
  katha: {
    title: { hi: 'गोवर्धन लीला', en: 'The lifting of Govardhan' },
    paras: [
      {
        hi: 'ब्रज में हर साल इंद्र देव की पूजा होती थी। एक बार नन्हे कृष्ण ने देखा कि सब लोग बड़ी तैयारी में लगे हैं। उन्होंने नंद बाबा से पूछा, “यह पूजा किसकी है, और क्यों?”',
        en: 'Every year the people of Braj worshipped Indra. One year little Krishna saw everyone busy with grand preparations and asked Nand Baba, “Whose puja is this, and why?”',
      },
      {
        hi: 'नंद बाबा ने बताया कि इंद्र वर्षा करते हैं। कृष्ण बोले, “हमारी गायें तो गोवर्धन पर्वत पर चरती हैं, वही हमें घास, फल और जल देता है। हमें गोवर्धन और अपनी गायों की पूजा करनी चाहिए।”',
        en: 'Nand Baba said that Indra sends the rain. Krishna replied, “Our cows graze on Govardhan hill. It gives us grass, fruit and water. We should worship Govardhan and our cows.”',
      },
      {
        hi: 'ब्रजवासियों ने वैसा ही किया। इससे इंद्र क्रोधित हो गए और उन्होंने ब्रज पर मूसलाधार वर्षा शुरू कर दी। सात दिन तक पानी बरसता रहा।',
        en: 'The people of Braj did so. Indra grew angry and sent a terrible downpour on Braj. For seven days the rain did not stop.',
      },
      {
        hi: 'तब श्री कृष्ण ने गोवर्धन पर्वत को अपनी छोटी उँगली पर उठा लिया। सारे ब्रजवासी, ग्वाले और गायें उसके नीचे सुरक्षित रहे।',
        en: 'Then Shri Krishna lifted Govardhan hill on his little finger. All the people of Braj, the cowherds and the cows sheltered safely beneath it.',
      },
      {
        hi: 'इंद्र को अपनी भूल समझ आई। उन्होंने वर्षा रोक दी और श्री कृष्ण से क्षमा माँगी। तभी से इस दिन गोवर्धन की पूजा और अन्नकूट का उत्सव मनाया जाता है।',
        en: 'Indra understood his mistake. He stopped the rain and asked Shri Krishna’s forgiveness. Since then Govardhan is worshipped and the Annakut is celebrated on this day.',
      },
    ],
  },
  greetings: [
    { hi: 'गिरधारी आपके घर को अन्न और सुख से भरा रखें।', en: 'May Giridhari keep your home full of food and happiness.' },
    { hi: 'जैसे गोवर्धन ने ब्रज की रक्षा की, वैसे ही श्री कृष्ण आपकी रक्षा करें।', en: 'As Govardhan sheltered Braj, may Shri Krishna shelter you.' },
    { hi: 'आपको गोवर्धन पूजा की हार्दिक शुभकामनाएँ।', en: 'Warm Govardhan Puja wishes to you.' },
    { hi: 'अन्नकूट का प्रसाद आपके घर में सदा बरकत लाए।', en: 'May the Annakoot prasad always bring abundance to your home.' },
    { hi: 'गोवर्धन महाराज आपके घर-आँगन को खुशियों से भर दें।', en: 'May Govardhan Maharaj fill your home and courtyard with happiness.' },
    { hi: 'गौ माता की सेवा से आपके घर सुख-शांति बनी रहे।', en: 'Through the service of Gau Mata, may peace and joy stay in your home.' },
    { hi: 'जैसे गिरधारी ने छोटी उँगली पर पर्वत उठाया, वैसे ही वे आपका हर बोझ उठाएँ।', en: 'As Giridhari lifted the mountain on his little finger, may he lift every burden of yours.' },
    { hi: 'ब्रज की भक्ति और प्रेम आपके जीवन में भी उतरे।', en: 'May the devotion and love of Braj come into your life too.' },
    { hi: 'आपकी हर फ़सल लहलहाए और हर रसोई भरी रहे।', en: 'May every crop of yours flourish and every kitchen stay full.' },
    { hi: 'श्री कृष्ण की बाँसुरी की तरह आपका जीवन मधुर हो।', en: 'May your life be as sweet as the flute of Shri Krishna.' },
    { hi: 'इस गोवर्धन पूजा आपके घर छप्पन भोग जैसी मिठास हो।', en: 'This Govardhan Puja, may your home have the sweetness of chhappan bhog.' },
    { hi: 'सपरिवार आपको अन्नकूट और गोवर्धन पूजा की बधाई।', en: 'Annakoot and Govardhan Puja greetings to you and your family.' },
  ],
  card: { title: { hi: 'गोवर्धन पूजा', en: 'Govardhan Puja' }, blessing: '॥ जय गिरधारी ॥', groups: ['krishna', 'diya'], picture: 'krishna-1' },
  aartis: ['govardhan', 'kunjbihari'],
}

export const BHAI_DOOJ: FestivalPage = {
  id: 'bhai-dooj',
  tithi: { hi: 'कार्तिक शुक्ल द्वितीया', en: 'Kartik Shukla Dwitiya' },
  intro: {
    hi: 'आज के दिन यमुना जी ने अपने भाई यमराज को घर बुलाकर तिलक किया था। बहनें भाई को तिलक लगाकर, आरती उतारकर उसकी लंबी आयु की कामना करती हैं। इसे यम द्वितीया भी कहते हैं।',
    en: 'On this day Yamuna welcomed her brother Yama home and put a tilak on his forehead. Sisters put tilak on their brothers, do their aarti and pray for their long life. It is also called Yama Dwitiya.',
  },
  vidhiIntro: { hi: 'दोपहर के शुभ समय में तिलक करें।', en: 'Put the tilak during the afternoon muhurat.' },
  vidhi: [
    {
      title: { hi: 'थाली सजाएँ', en: 'Prepare the thali' },
      body: {
        hi: 'थाली में रोली, अक्षत, दीया, मिठाई, सूखा नारियल (गोला) और कलावा रखें। आटे से चौक बनाकर भाई के बैठने के लिए आसन बिछाएँ।',
        en: 'Put roli, akshat, a diya, sweets, a dry coconut and kalava in the thali. Draw a chowk with flour and lay a seat for your brother.',
      },
    },
    {
      title: { hi: 'भाई को बिठाएँ', en: 'Seat your brother' },
      body: {
        hi: 'भाई को पूर्व या उत्तर की ओर मुँह करके बिठाएँ। उसके सिर पर रुमाल या कपड़ा रखें।',
        en: 'Seat your brother facing east or north, with a handkerchief or cloth on his head.',
      },
    },
    {
      title: { hi: 'तिलक और रक्षा', en: 'Tilak and blessing' },
      body: {
        hi: 'भाई के माथे पर रोली और अक्षत का तिलक लगाएँ और हाथ में कलावा बाँधें। तिलक लगाते हुए यह पंक्ति बोलने की परंपरा है।',
        en: 'Put a tilak of roli and akshat on your brother’s forehead and tie kalava on his wrist. Many sisters say this line while putting the tilak.',
      },
      mantra: 'गंगा पूजे यमुना को, यमी पूजे यमराज को।\nसुभद्रा पूजे कृष्ण को, गंगा यमुना नीर बहे,\nमेरे भाई की आयु बढ़े॥',
    },
    {
      title: { hi: 'आरती और मिठाई', en: 'Aarti and sweets' },
      body: {
        hi: 'दीये से भाई की आरती उतारें, उसे गोला और मिठाई दें और उसका मुँह मीठा कराएँ।',
        en: 'Circle the diya before your brother in aarti, give him the coconut and sweets, and feed him something sweet.',
      },
    },
    {
      title: { hi: 'भाई का उपहार', en: 'The brother’s gift' },
      body: {
        hi: 'भाई बहन के पैर छूकर या प्रणाम करके उसे उपहार देता है और सदा उसकी रक्षा का वचन देता है। परंपरा है कि आज भाई बहन के घर भोजन करे।',
        en: 'The brother bows to his sister, gives her a gift and promises always to protect her. By custom, the brother eats at his sister’s home today.',
      },
    },
  ],
  samagri: [
    { hi: 'रोली, अक्षत, कलावा', en: 'Roli, akshat and kalava' },
    { hi: 'दीया, बाती, घी', en: 'Diya, wick and ghee' },
    { hi: 'सूखा नारियल (गोला)', en: 'A dry coconut' },
    { hi: 'मिठाई, बताशे', en: 'Sweets and batashe' },
    { hi: 'आटा (चौक के लिए), आसन', en: 'Flour for the chowk, and a seat' },
    { hi: 'रुमाल या छोटा कपड़ा', en: 'A handkerchief or small cloth' },
  ],
  katha: {
    title: { hi: 'यमुना और यमराज की कथा', en: 'Yamuna and Yama' },
    paras: [
      {
        hi: 'सूर्य देव की पुत्री यमुना अपने भाई यमराज से बहुत प्रेम करती थीं। वे बार-बार यमराज को अपने घर भोजन पर बुलातीं, पर यमराज अपने काम में इतने व्यस्त रहते कि आ ही नहीं पाते।',
        en: 'Yamuna, daughter of the Sun, loved her brother Yama dearly. Again and again she invited him home for a meal, but Yama was so busy with his work that he never came.',
      },
      {
        hi: 'एक दिन, कार्तिक शुक्ल द्वितीया को, यमराज अचानक बहन के घर पहुँच गए। यमुना की खुशी का ठिकाना न रहा।',
        en: 'One day, on Kartik Shukla Dwitiya, Yama arrived at his sister’s home without warning. Yamuna was overjoyed.',
      },
      {
        hi: 'उन्होंने भाई का स्वागत किया, माथे पर तिलक लगाया, आरती उतारी और प्रेम से तरह-तरह के पकवान खिलाए।',
        en: 'She welcomed her brother, put a tilak on his forehead, did his aarti and lovingly fed him many dishes.',
      },
      {
        hi: 'प्रसन्न होकर यमराज ने कहा, “बहन, वर माँगो।” यमुना बोलीं, “हर साल आज के दिन आप मेरे घर आएँ, और जो भाई आज बहन से तिलक करवाए, उसे अकाल मृत्यु का भय न हो।” यमराज ने “तथास्तु” कहा।',
        en: 'Pleased, Yama said, “Sister, ask for a boon.” Yamuna said, “Come to my home on this day every year, and let any brother who takes tilak from his sister today have no fear of untimely death.” Yama said, “So be it.”',
      },
      {
        hi: 'एक और कथा है कि नरकासुर को हराकर लौटे श्री कृष्ण का उनकी बहन सुभद्रा ने इसी दिन तिलक और आरती से स्वागत किया था। तभी से भाई दूज मनाया जाता है।',
        en: 'Another story says that when Shri Krishna returned after defeating Narakasura, his sister Subhadra welcomed him on this day with tilak and aarti. Bhai Dooj has been kept ever since.',
      },
    ],
  },
  greetings: [
    { hi: 'भाई-बहन का यह प्यार सदा ऐसे ही बना रहे।', en: 'May the love between brother and sister always stay like this.' },
    { hi: 'मेरे भाई की आयु लंबी हो और जीवन सुखी हो।', en: 'May my brother live long and live happily.' },
    { hi: 'आपको भाई दूज की हार्दिक शुभकामनाएँ।', en: 'Warm Bhai Dooj wishes to you.' },
    { hi: 'तिलक का यह टीका मेरे भाई की हर बला टाले।', en: 'May this tilak keep every misfortune away from my brother.' },
    { hi: 'जैसे यमुना जी ने यमराज को टीका किया, वैसे ही हर बहन का प्यार भाई की रक्षा करे।', en: 'As Yamuna ji gave tilak to Yamraj, may every sister\'s love protect her brother.' },
    { hi: 'दूर रहकर भी हमारे दिल सदा पास रहें। शुभ भाई दूज।', en: 'Even when far apart, may our hearts always stay close. Happy Bhai Dooj.' },
    { hi: 'मेरे भाई को सफलता, सेहत और ढेर सारी खुशियाँ मिलें।', en: 'May my brother have success, good health and lots of happiness.' },
    { hi: 'बचपन की लड़ाइयाँ और ढेर सारा प्यार, यही है भाई-बहन का त्योहार।', en: 'Childhood quarrels and lots of love: that is the festival of brother and sister.' },
    { hi: 'माथे पर टीका और मुँह में मिठाई, बहन की दुआ सदा भाई के साथ रहे।', en: 'Tilak on the forehead and sweets to eat: may a sister\'s blessing always stay with her brother.' },
    { hi: 'मेरी बहन का घर सदा सुख और प्रेम से भरा रहे।', en: 'May my sister\'s home always be full of happiness and love.' },
    { hi: 'यम द्वितीया का यह पर्व आपके रिश्ते को और मज़बूत करे।', en: 'May this festival of Yam Dwitiya make your bond even stronger.' },
    { hi: 'सपरिवार आपको भाई दूज की बहुत-बहुत शुभकामनाएँ।', en: 'Many Bhai Dooj wishes to you and your family.' },
  ],
  card: { title: { hi: 'भाई दूज', en: 'Bhai Dooj' }, blessing: '॥ भाई की लंबी आयु ॥', groups: ['diya', 'ganesh'], picture: 'diya-1' },
  aartis: ['ganesh', 'jagdish'],
}

export const FESTIVAL_PAGES: Record<string, FestivalPage> = {
  'sharad-purnima': SHARAD_PURNIMA,
  'ahoi-ashtami': AHOI_ASHTAMI,
  dhanteras: DHANTERAS,
  'choti-diwali': CHOTI_DIWALI,
  govardhan: GOVARDHAN,
  'bhai-dooj': BHAI_DOOJ,
  chhath: CHHATH,
  'dev-uthani': DEV_UTHANI,
  'kartik-purnima': KARTIK_PURNIMA,
}
