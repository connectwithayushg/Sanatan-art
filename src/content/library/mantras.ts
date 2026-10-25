/** Everyday mantras and shlokas (traditional Sanskrit, public domain). Meanings written for Sanatan App. */
import type { LibText } from './types'

export const MANTRAS: LibText = {
  id: 'mantra',
  shelf: 'mantra',
  title: { hi: 'रोज़ के मंत्र', en: 'Everyday mantras' },
  by: { hi: 'पूजा में बोले जाने वाले मुख्य मंत्र और श्लोक', en: 'The mantras and shlokas said in daily puja' },
  inside: { hi: '9 मंत्र · अर्थ सहित', en: '9 mantras · with meanings' },
  img: '/art/thumb/0ixU5CM6Xig.jpg',
  lang: 'sa',
  keys: 'mantra gayatri mahamrityunjay mrityunjaya vakratunda ganesh saraswati guru shanti karpur gauram hanuman manojavam vasudevaya',
  closing: '॥ ॐ शान्तिः शान्तिः शान्तिः ॥',
  verses: [
    {
      label: { hi: 'गायत्री मंत्र', en: 'Gayatri Mantra' },
      text: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
      meaning: {
        hi: 'हम उस प्रकाशमान सविता देव के श्रेष्ठ तेज का ध्यान करते हैं, जो धरती, आकाश और स्वर्ग में व्याप्त हैं। वे हमारी बुद्धि को सही राह पर चलाएँ।',
        en: 'We meditate on the glorious light of the divine Savitr, who fills earth, sky and heaven. May he guide our minds.',
      },
    },
    {
      label: { hi: 'महामृत्युंजय मंत्र', en: 'Mahamrityunjay Mantra' },
      text: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥',
      meaning: {
        hi: 'हम तीन नेत्रों वाले शिव की पूजा करते हैं, जो सुगंधित हैं और सबका पोषण करते हैं। जैसे पकी ककड़ी बेल से अपने आप छूट जाती है, वैसे ही हम मृत्यु के बंधन से छूटें, अमरता से नहीं।',
        en: 'We worship the three-eyed Lord, fragrant, who nourishes all. As a ripe cucumber falls free from its vine, may we be freed from death, and not from immortality.',
      },
    },
    {
      label: { hi: 'गणेश वंदना', en: 'Ganesh Vandana' },
      text: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
      meaning: {
        hi: 'हे टेढ़ी सूँड वाले, विशाल शरीर वाले, करोड़ों सूर्यों जैसे तेजस्वी गणेश देव, मेरे सब काम सदा बिना विघ्न के पूरे कीजिए।',
        en: 'O Lord with the curved trunk and mighty body, bright as a billion suns, keep all my work free of obstacles, always.',
      },
    },
    {
      label: { hi: 'सरस्वती वंदना', en: 'Saraswati Vandana' },
      text: 'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता\nया वीणावरदण्डमण्डितकरा या श्वेतपद्मासना।\nया ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता\nसा मां पातु सरस्वती भगवती निःशेषजाड्यापहा॥',
      meaning: {
        hi: 'जो कुंद के फूल, चंद्रमा और बर्फ़ के हार जैसी उजली हैं, सफ़ेद वस्त्र पहनती हैं, हाथ में वीणा लिए सफ़ेद कमल पर बैठी हैं, और जिन्हें ब्रह्मा, विष्णु और शंकर सदा प्रणाम करते हैं, वे सारी जड़ता दूर करने वाली भगवती सरस्वती मेरी रक्षा करें।',
        en: 'She who is white as jasmine, the moon and a garland of snow, dressed in white, her hands graced by the veena, seated on a white lotus, ever honoured by Brahma, Vishnu and Shankar: may that Goddess Saraswati, who removes all dullness, protect me.',
      },
    },
    {
      label: { hi: 'गुरु वंदना', en: 'Guru Vandana' },
      text: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परब्रह्म तस्मै श्रीगुरवे नमः॥',
      meaning: {
        hi: 'गुरु ही ब्रह्मा हैं, गुरु ही विष्णु हैं, गुरु ही महेश्वर हैं। गुरु साक्षात परब्रह्म हैं। ऐसे श्री गुरु को नमस्कार।',
        en: 'The guru is Brahma, the guru is Vishnu, the guru is Maheshvara. The guru is the Supreme itself. Salutations to that guru.',
      },
    },
    {
      label: { hi: 'हनुमान वंदना', en: 'Hanuman Vandana' },
      text: 'मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।\nवातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये॥',
      meaning: {
        hi: 'जो मन जैसे तेज़ हैं, पवन जैसे वेग वाले हैं, इंद्रियों को जीत चुके हैं, बुद्धिमानों में श्रेष्ठ हैं, उन पवनपुत्र, वानर सेना के प्रमुख, श्री राम के दूत की मैं शरण लेता हूँ।',
        en: 'Swift as the mind, fast as the wind, master of the senses, foremost of the wise, son of the Wind, chief of the vanara army, messenger of Shri Ram: in him I take refuge.',
      },
    },
    {
      label: { hi: 'वासुदेव मंत्र', en: 'Vasudev Mantra' },
      text: 'ॐ नमो भगवते वासुदेवाय॥',
      meaning: {
        hi: 'भगवान वासुदेव (श्री कृष्ण, श्री विष्णु) को मेरा नमस्कार। इसे 108 बार जपा जाता है।',
        en: 'Salutations to Lord Vasudev, Shri Krishna and Shri Vishnu. It is often chanted 108 times.',
      },
    },
    {
      label: { hi: 'कर्पूरगौरं', en: 'Karpur Gauram' },
      text: 'कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्।\nसदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥',
      meaning: {
        hi: 'कपूर जैसे गोरे, करुणा के अवतार, संसार के सार, नागराज की माला पहनने वाले, जो सदा हृदय-कमल में बसते हैं, उन भव (शिव) को भवानी सहित मैं नमन करता हूँ। यह आरती के बाद बोला जाता है।',
        en: 'White as camphor, mercy made flesh, the essence of the world, wearing the king of serpents as a garland, ever dwelling in the lotus of the heart: to Shiva with Bhavani, I bow. It is said after the aarti.',
      },
    },
    {
      label: { hi: 'शांति मंत्र', en: 'Shanti Mantra' },
      text: 'सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःखभाग्भवेत्॥',
      meaning: {
        hi: 'सब सुखी हों, सब निरोगी रहें, सब मंगल देखें, और कोई भी दुख का भागी न बने।',
        en: 'May all be happy, may all be free of illness, may all see what is good, and may no one suffer.',
      },
    },
  ],
}
