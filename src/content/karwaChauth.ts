/** Karwa Chauth: general North Indian household vidhi and the Veeravati katha. Original text by Sanatan App. */
import type { Bi, VidhiStep } from './diwaliVidhi'

export const KC_SAMAGRI: Bi[] = [
  { hi: 'मिट्टी या पीतल का करवा, ढक्कन सहित', en: 'A clay or brass karwa (spouted pot) with its lid' },
  { hi: 'छलनी', en: 'A sieve (chhalni)' },
  { hi: 'पूजा की थाली, दीया, बाती, घी', en: 'Puja thali, diya, wick and ghee' },
  { hi: 'रोली, कुमकुम, अक्षत, सिंदूर, हल्दी', en: 'Roli, kumkum, akshat, sindoor, haldi' },
  { hi: 'करवा चौथ माता का चित्र या कैलेंडर', en: 'A picture or calendar of Karwa Chauth Mata' },
  { hi: 'मिट्टी या हल्दी से बनी गौरी माँ', en: 'Gauri Maa made of clay or haldi' },
  { hi: 'जल से भरा लोटा, अर्घ्य के लिए', en: 'A lota of water for the arghya' },
  { hi: 'फूल, मिठाई, मठरी, फल', en: 'Flowers, sweets, mathri and fruit' },
  { hi: 'सुहाग की चीज़ें: चूड़ियाँ, बिंदी, मेहंदी, चुनरी', en: 'Suhaag items: bangles, bindi, mehndi, chunri' },
  { hi: 'सास के लिए बया (मिठाई, कपड़े, मेवा)', en: 'Baya for the mother-in-law (sweets, clothes, dry fruit)' },
]

export const KC_VIDHI: VidhiStep[] = [
  {
    title: { hi: 'भोर में सरगी', en: 'Sargi before dawn' },
    body: {
      hi: 'सूर्योदय से पहले उठकर स्नान करें और सास की दी हुई सरगी खाएँ: फल, मेवा, मिठाई, फेनी। पानी भी इसी समय पी लें, क्योंकि इसके बाद चाँद निकलने तक व्रत रहता है।',
      en: 'Rise before sunrise, bathe and eat the sargi your mother-in-law has given: fruit, dry fruit, sweets and pheni. Drink water now too, because the fast lasts until the moon rises.',
    },
  },
  {
    title: { hi: 'व्रत का संकल्प', en: 'Take the vow' },
    body: {
      hi: 'हाथ में जल, अक्षत और फूल लेकर मन में पति की लंबी आयु और परिवार के सुख की कामना करें, फिर यह संकल्प बोलें।',
      en: 'Hold water, akshat and a flower in your hand, wish for your husband’s long life and your family’s happiness, then say this vow.',
    },
    mantra: 'मम सुखसौभाग्य पुत्रपौत्रादि सुस्थिर श्री प्राप्तये करक चतुर्थी व्रतमहं करिष्ये॥',
  },
  {
    title: { hi: 'दिन भर का व्रत', en: 'The day’s fast' },
    body: {
      hi: 'परंपरा में यह निर्जला व्रत है, यानी चाँद निकलने तक न अन्न, न जल। जो बहनें गर्भवती हैं, बीमार हैं या दवा लेती हैं, वे फल और जल लेकर व्रत रखें। भाव ही सबसे बड़ा है।',
      en: 'By tradition this is a nirjala fast: no food or water until moonrise. If you are pregnant, unwell or on medicine, keep the fast with fruit and water. The devotion is what counts.',
    },
  },
  {
    title: { hi: 'शाम का शृंगार और चौकी', en: 'Evening shringar and the chowki' },
    body: {
      hi: 'शाम को सोलह शृंगार करें। चौकी पर करवा चौथ माता का चित्र रखें, उसके सामने गौरी माँ और गणेश जी को बिठाएँ। करवे में जल भरें, ढक्कन पर चावल या मिठाई रखें और उस पर रोली से स्वास्तिक बनाएँ।',
      en: 'In the evening, dress in full shringar. Place the Karwa Chauth Mata picture on the chowki with Gauri Maa and Ganesh ji in front. Fill the karwa with water, put rice or sweets on its lid and draw a swastik on it with roli.',
    },
  },
  {
    title: { hi: 'पूजा', en: 'The puja' },
    body: {
      hi: 'पूजा मुहूर्त में दीया जलाएँ। गौरी माँ, शिव जी, गणेश जी और कार्तिकेय जी को रोली, अक्षत और फूल चढ़ाएँ। हर एक का नाम लेकर प्रणाम करें।',
      en: 'Light the diya during the puja muhurat. Offer roli, akshat and flowers to Gauri Maa, Shiv ji, Ganesh ji and Kartikeya ji, bowing to each by name.',
    },
    mantra: 'ॐ शिवायै नमः। ॐ नमः शिवाय। ॐ षण्मुखाय नमः। ॐ गणेशाय नमः॥',
  },
  {
    title: { hi: 'कथा और थाली फेरना', en: 'Katha and passing the thali' },
    body: {
      hi: 'सब बहनें घेरा बनाकर बैठें और करवा चौथ की कथा सुनें। कथा के बीच अपनी-अपनी थाली सात बार एक-दूसरे को आगे बढ़ाएँ। कथा इसी ऐप के “कथा” भाग में है।',
      en: 'Sit in a circle with the other women and hear the Karwa Chauth katha. During it, pass your thalis around the circle seven times. The katha is in the “Katha” part of this page.',
    },
  },
  {
    title: { hi: 'बया और आशीर्वाद', en: 'Baya and blessings' },
    body: {
      hi: 'पूजा के बाद सास को बया दें, उनके पैर छुएँ और आशीर्वाद लें। सास न हों तो घर की किसी बड़ी स्त्री को दें।',
      en: 'After the puja, give the baya to your mother-in-law, touch her feet and take her blessing. If she is not there, give it to another elder woman of the family.',
    },
  },
  {
    title: { hi: 'चाँद को अर्घ्य', en: 'Arghya to the moon' },
    body: {
      hi: 'चाँद निकलने पर छलनी में दीया रखकर पहले चाँद को, फिर पति को देखें। करवे या लोटे के जल से चाँद को अर्घ्य दें। फिर पति के हाथ से जल पीकर और पहला कौर खाकर व्रत खोलें।',
      en: 'When the moon rises, hold the diya in the sieve and look first at the moon, then at your husband. Offer water to the moon from the karwa or lota. Then break the fast with water and the first bite from your husband’s hand.',
    },
    mantra: 'ॐ सोमाय नमः॥',
  },
]

export const KC_KATHA: { title: Bi; paras: Bi[] } = {
  title: { hi: 'वीरावती की कथा', en: 'The story of Veeravati' },
  paras: [
    {
      hi: 'बहुत पहले एक साहूकार के सात बेटे और एक बेटी थी, जिसका नाम वीरावती था। सातों भाई अपनी इकलौती बहन को बहुत प्यार करते थे और उसे ज़रा भी दुखी नहीं देख सकते थे।',
      en: 'Long ago a merchant had seven sons and one daughter, named Veeravati. The seven brothers loved their only sister dearly and could not bear to see her in any pain.',
    },
    {
      hi: 'विवाह के बाद पहली करवा चौथ पर वीरावती मायके आई थी। उसने भोर से निर्जला व्रत रखा। शाम होते-होते भूख और प्यास से वह बेहाल हो गई, पर चाँद अभी निकला नहीं था।',
      en: 'On her first Karwa Chauth after marriage, Veeravati was at her parents’ home. She had fasted without water since dawn. By evening she was faint with hunger and thirst, and the moon had still not risen.',
    },
    {
      hi: 'बहन की यह हालत भाइयों से देखी न गई। उन्होंने गाँव के बाहर एक पेड़ पर चढ़कर छलनी के पीछे दीया जला दिया। दूर से वह रोशनी उगते चाँद जैसी दिखी। भाइयों ने कहा, “बहन, चाँद निकल आया।”',
      en: 'The brothers could not watch her suffer. One of them climbed a tree outside the village and lit a lamp behind a sieve. From afar the light looked like the rising moon. “Sister, the moon is up,” they said.',
    },
    {
      hi: 'वीरावती ने उसे चाँद समझकर अर्घ्य दिया और भोजन करने बैठी। पहले कौर में बाल निकला, दूसरे में छींक आई, और तीसरे कौर पर ससुराल से ख़बर आई कि उसके पति नहीं रहे।',
      en: 'Taking it for the moon, Veeravati offered arghya and sat down to eat. In the first bite she found a hair, at the second she sneezed, and at the third came word from her in-laws that her husband had died.',
    },
    {
      hi: 'वीरावती रोती हुई ससुराल पहुँची। वहाँ उसे माँ पार्वती (कुछ कथाओं में इंद्राणी) के दर्शन हुए। माँ ने बताया कि उसका व्रत झूठे चाँद को देखकर टूट गया था। वीरावती ने क्षमा माँगी और पति के पास बैठकर पूरे साल हर चौथ का व्रत पूरी श्रद्धा से रखा।',
      en: 'Weeping, Veeravati went to her in-laws’ home. There Maa Parvati (in some tellings, Indrani) appeared to her and told her the fast had been broken by a false moon. Veeravati asked forgiveness, stayed beside her husband, and kept every Chauth fast that year with full devotion.',
    },
    {
      hi: 'अगली करवा चौथ पर उसने विधि से व्रत रखा और सच्चे चाँद को अर्घ्य दिया। उसकी श्रद्धा से प्रसन्न होकर माँ ने उसके पति को फिर से जीवन दे दिया। तभी से सुहागिनें यह व्रत सच्चे मन से और चाँद देखकर ही खोलती हैं।',
      en: 'The next Karwa Chauth she kept the fast properly and offered arghya to the true moon. Pleased by her devotion, the Mother gave her husband his life again. Since then, married women keep this fast with a true heart and break it only on seeing the real moon.',
    },
    {
      hi: 'हे करवा माता, जैसे वीरावती का सुहाग लौटाया, वैसे ही सबका सुहाग बनाए रखना।',
      en: 'O Karwa Mata, as you returned Veeravati’s husband to her, keep every wife’s husband safe.',
    },
  ],
}

export const KC_GREETINGS: Bi[] = [
  { hi: 'करवा माता आपके सुहाग को सदा अमर रखें।', en: 'May Karwa Mata keep your bond strong forever.' },
  { hi: 'चाँद की रोशनी आपके जीवन में प्रेम और सुख भर दे।', en: 'May the moonlight fill your life with love and joy.' },
  { hi: 'आपको करवा चौथ की हार्दिक शुभकामनाएँ।', en: 'Warm Karwa Chauth wishes to you.' },
  { hi: 'आपका व्रत सफल हो और आपकी जोड़ी सदा सलामत रहे।', en: 'May your fast be fruitful and may your pair stay blessed forever.' },
  { hi: 'चाँद की तरह आपका प्यार भी हर साल और निखरे।', en: 'Like the moon, may your love glow brighter every year.' },
  { hi: 'माँ गौरी आपको अखंड सौभाग्य का आशीर्वाद दें।', en: 'May Maa Gauri bless you with lasting good fortune in marriage.' },
  { hi: 'सात जन्मों का यह साथ हर जन्म में ऐसे ही बना रहे।', en: 'May this bond of seven lifetimes stay just like this in every life.' },
  { hi: 'मेहंदी का रंग और सिंदूर की लाली सदा बनी रहे।', en: 'May the colour of mehndi and the red of sindoor always stay.' },
  { hi: 'करवे का जल आपके घर में सुख और शांति भर दे।', en: 'May the water of the karwa fill your home with joy and peace.' },
  { hi: 'भूखे-प्यासे रहकर माँगी हर दुआ पूरी हो।', en: 'May every prayer made while fasting come true.' },
  { hi: 'पति-पत्नी का यह प्रेम और विश्वास सदा अटूट रहे।', en: 'May this love and trust between husband and wife never break.' },
  { hi: 'सपरिवार आपको करवा चौथ की बहुत-बहुत बधाई।', en: 'Many Karwa Chauth greetings to you and your family.' },
]
