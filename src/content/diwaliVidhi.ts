/** Diwali Lakshmi Puja: general household vidhi. Original text by Sanatan App. */
export interface Bi { hi: string; en: string }
export interface VidhiStep { title: Bi; body: Bi; mantra?: string }

export const SAMAGRI: Bi[] = [
  { hi: 'लक्ष्मी जी और गणेश जी की मूर्ति या चित्र', en: 'Murti or picture of Lakshmi ji and Ganesh ji' },
  { hi: 'चौकी और लाल या पीला कपड़ा', en: 'A low stool (chowki) with a red or yellow cloth' },
  { hi: 'जल से भरा कलश, आम के पत्ते, नारियल', en: 'Kalash filled with water, mango leaves, a coconut' },
  { hi: 'रोली/कुमकुम, हल्दी, अक्षत (साबुत चावल)', en: 'Roli/kumkum, haldi, akshat (unbroken rice)' },
  { hi: 'फूल, माला, कमल या कमलगट्टा', en: 'Flowers, garland, lotus or lotus seeds (kamalgatta)' },
  { hi: 'घी या तेल के दीये, बाती, कपूर', en: 'Ghee or oil diyas, wicks, camphor' },
  { hi: 'धूप/अगरबत्ती', en: 'Dhoop or incense sticks' },
  { hi: 'गंगाजल, पंचामृत', en: 'Ganga jal and panchamrit' },
  { hi: 'खील-बताशे, मिठाई, फल, पान-सुपारी', en: 'Kheel-batashe, sweets, fruits, betel leaf and supari' },
  { hi: 'सिक्के / नए नोट, बही-खाता या कलम (यदि परंपरा हो)', en: 'Coins or new notes, account books or pens (if it is your tradition)' },
]

export const VIDHI: VidhiStep[] = [
  {
    title: { hi: 'घर की सफ़ाई और तैयारी', en: 'Clean and prepare the home' },
    body: {
      hi: 'संध्या से पहले घर साफ़ करें, द्वार पर रंगोली बनाएँ और तोरण लगाएँ। स्नान करके स्वच्छ वस्त्र पहनें।',
      en: 'Before evening, clean the house, make rangoli at the entrance and hang a toran. Bathe and wear clean clothes.',
    },
  },
  {
    title: { hi: 'चौकी सजाएँ', en: 'Set up the chowki' },
    body: {
      hi: 'उत्तर या पूर्व दिशा में चौकी रखें, उस पर लाल/पीला कपड़ा बिछाएँ और गणेश जी व लक्ष्मी जी को स्थापित करें। पास में जल से भरा कलश रखें, उस पर आम के पत्ते और नारियल रखें।',
      en: 'Place the chowki facing north or east, spread the red or yellow cloth and seat Ganesh ji and Lakshmi ji on it. Keep the water-filled kalash beside them, topped with mango leaves and a coconut.',
    },
  },
  {
    title: { hi: 'पवित्रीकरण और संकल्प', en: 'Purify and take the sankalp' },
    body: {
      hi: 'गंगाजल छिड़ककर स्वयं और पूजा स्थान को पवित्र करें। दाएँ हाथ में जल, अक्षत और फूल लेकर अपना नाम, गोत्र और पूजा का उद्देश्य मन में बोलें, फिर जल भूमि पर छोड़ दें।',
      en: 'Sprinkle Ganga jal on yourself and the puja space. Holding water, akshat and a flower in your right hand, say your name, gotra and the purpose of the puja, then release the water to the ground.',
    },
    mantra: 'ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा। यः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥',
  },
  {
    title: { hi: 'पहले गणेश पूजन', en: 'Worship Ganesh ji first' },
    body: {
      hi: 'गणेश जी को तिलक लगाएँ, अक्षत, फूल, दूर्वा और लड्डू अर्पित करें। हर शुभ कार्य गणेश जी से आरंभ होता है।',
      en: 'Apply tilak to Ganesh ji and offer akshat, flowers, durva grass and laddoos. Every auspicious act begins with Ganesh ji.',
    },
    mantra: 'ॐ गं गणपतये नमः॥',
  },
  {
    title: { hi: 'लक्ष्मी पूजन', en: 'Worship Lakshmi ji' },
    body: {
      hi: 'लक्ष्मी जी का ध्यान करके आवाहन करें। कुमकुम, अक्षत, फूल, कमल और माला अर्पित करें। सिक्के, नए नोट और बही-खाते भी पूजा में रखें। श्रद्धा से मंत्र का 11, 21 या 108 बार जाप करें।',
      en: 'Meditate on Lakshmi ji and invite her presence. Offer kumkum, akshat, flowers, lotus and a garland. Place coins, new notes and account books in the puja too. Chant the mantra 11, 21 or 108 times with devotion.',
    },
    mantra: 'ॐ श्रीं महालक्ष्म्यै नमः॥',
  },
  {
    title: { hi: 'भोग अर्पित करें', en: 'Offer bhog' },
    body: {
      hi: 'खील-बताशे, मिठाई, फल और पान-सुपारी का भोग लगाएँ। धूप और दीप दिखाएँ।',
      en: 'Offer kheel-batashe, sweets, fruits and betel with supari. Show dhoop and the diya.',
    },
  },
  {
    title: { hi: 'आरती करें', en: 'Perform the aarti' },
    body: {
      hi: 'घी के दीये और कपूर से पहले गणेश जी की, फिर लक्ष्मी जी की आरती करें। परिवार सहित घंटी बजाते हुए गाएँ।',
      en: 'With a ghee diya and camphor, do Ganesh ji’s aarti first, then Lakshmi ji’s. Sing together as a family while ringing the bell.',
    },
  },
  {
    title: { hi: 'दीपदान', en: 'Light diyas across the home' },
    body: {
      hi: 'पूजा के दीपक से दीये जलाकर घर के मुख्य द्वार, आँगन, तुलसी, रसोई और जल-स्थान पर रखें।',
      en: 'From the puja lamp, light diyas and place them at the main door, courtyard, tulsi, kitchen and water storage.',
    },
  },
  {
    title: { hi: 'क्षमा प्रार्थना और प्रसाद', en: 'Seek forgiveness and share prasad' },
    body: {
      hi: 'पूजा में हुई किसी भी भूल के लिए हाथ जोड़कर क्षमा माँगें। फिर परिवार और पड़ोसियों में प्रसाद बाँटें।',
      en: 'With folded hands, ask forgiveness for any mistakes in the puja. Then share prasad with family and neighbours.',
    },
  },
]

export const GREETINGS: Bi[] = [
  { hi: 'माँ लक्ष्मी आपके घर सुख, समृद्धि और शांति लेकर आएँ।', en: 'May Maa Lakshmi bless your home with joy, prosperity and peace.' },
  { hi: 'दीपों का यह प्रकाश आपके जीवन का हर अंधकार दूर करे।', en: 'May the light of these diyas remove every darkness from your life.' },
  { hi: 'आपको और आपके परिवार को दीपावली की हार्दिक शुभकामनाएँ।', en: 'Warm Diwali wishes to you and your whole family.' },
  { hi: 'गणेश जी और माँ लक्ष्मी की कृपा आप पर सदा बनी रहे।', en: 'May Ganesh ji and Maa Lakshmi always bless you.' },
  { hi: 'इस दीपावली आपके घर में खुशियों के दीप जलें।', en: 'This Diwali, may lamps of joy glow in your home.' },
  { hi: 'दीपों का पर्व आपके जीवन में नई रोशनी और नई उमंग लाए।', en: 'May the festival of lamps bring new light and new joy to your life.' },
  { hi: 'आपके घर धन-धान्य के भंडार सदा भरे रहें।', en: 'May your home always be full of wealth and plenty.' },
  { hi: 'जैसे श्री राम के आने पर अयोध्या जगमगाई, वैसे ही आपका घर रोशन रहे।', en: 'As Ayodhya shone when Shri Ram came home, may your home always shine.' },
  { hi: 'रंगोली के रंग और दीयों की रोशनी आपके जीवन को सुंदर बनाएँ।', en: 'May the colours of rangoli and the glow of diyas make your life beautiful.' },
  { hi: 'माँ लक्ष्मी आपके घर पधारें और सदा के लिए वहीं बस जाएँ।', en: 'May Maa Lakshmi visit your home and stay there forever.' },
  { hi: 'आपका हर दिन दीवाली जैसा उजला और मीठा हो।', en: 'May every day of yours be as bright and sweet as Diwali.' },
  { hi: 'सपरिवार आपको शुभ दीपावली और मंगलमय नववर्ष।', en: 'A happy Diwali and a blessed new year to you and your family.' },
]
