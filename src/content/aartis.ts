/** Traditional aarti texts (public domain). Meanings are original to Sanatan App. */
import { AARTIS2 } from './aartis2'

export interface Stanza {
  lines: string[]
  meaning_hi: string
  meaning_en: string
}
export interface Aarti {
  id: string
  title_hi: string
  title_en: string
  refrain: string
  stanzas: Stanza[]
  /** A stuti is a hymn of praise rather than an aarti and is marked in the list; a bhajan is a bhajan, stotra or mantra from the bhajan side of the Aarti tab */
  kind?: 'stuti' | 'bhajan'
}

export const GANESH_AARTI: Aarti = {
  id: 'ganesh',
  title_hi: 'श्री गणेश जी की आरती',
  title_en: 'Shri Ganesh Aarti',
  refrain: 'जय गणेश जय गणेश, जय गणेश देवा॥',
  stanzas: [
    {
      lines: ['जय गणेश जय गणेश, जय गणेश देवा।', 'माता जाकी पार्वती, पिता महादेवा॥'],
      meaning_hi: 'हे गणेश देव, आपकी जय हो। आपकी माता पार्वती और पिता महादेव हैं।',
      meaning_en: 'Victory to you, Lord Ganesh, whose mother is Parvati and father is Mahadev.',
    },
    {
      lines: ['एक दन्त दयावन्त, चार भुजा धारी।', 'माथे सिन्दूर सोहे, मूसे की सवारी॥'],
      meaning_hi: 'एक दाँत वाले, दयालु, चार भुजाओं वाले; माथे पर सिंदूर शोभित है और मूषक आपका वाहन है।',
      meaning_en: 'Single-tusked and compassionate, with four arms; sindoor adorns your forehead and the mouse is your vehicle.',
    },
    {
      lines: ['पान चढ़े फूल चढ़े, और चढ़े मेवा।', 'लड्डुअन का भोग लगे, सन्त करें सेवा॥'],
      meaning_hi: 'आपको पान, फूल और मेवे अर्पित होते हैं, लड्डुओं का भोग लगता है और संत आपकी सेवा करते हैं।',
      meaning_en: 'Betel leaves, flowers and dry fruits are offered to you, laddoos are your bhog, and saints serve you.',
    },
    {
      lines: ['अन्धन को आँख देत, कोढ़िन को काया।', 'बाँझन को पुत्र देत, निर्धन को माया॥'],
      meaning_hi: 'आप अंधों को दृष्टि, रोगियों को स्वस्थ शरीर, निःसंतान को संतान और निर्धनों को धन देते हैं।',
      meaning_en: 'You give sight to the blind, health to the sick, children to the childless and wealth to the poor.',
    },
    {
      lines: ['दीनन की लाज रखो, शम्भु सुतकारी।', 'कामना को पूर्ण करो, जाऊँ बलिहारी॥'],
      meaning_hi: 'हे शिव-पुत्र, दीनों की लाज रखिए और मनोकामना पूरी कीजिए; मैं आप पर न्योछावर हूँ।',
      meaning_en: 'O son of Shiva, protect the honour of the humble and fulfil our wishes; I offer myself to you.',
    },
    {
      lines: ["'सूर' श्याम शरण आए, सफल कीजे सेवा।", 'माता जाकी पार्वती, पिता महादेवा॥'],
      meaning_hi: 'सूरदास कहते हैं: हम आपकी शरण में आए हैं, हमारी सेवा सफल कीजिए।',
      meaning_en: 'Says the poet: we have come to your shelter, please make our worship fruitful.',
    },
  ],
}

export const LAKSHMI_AARTI: Aarti = {
  id: 'lakshmi',
  title_hi: 'श्री लक्ष्मी जी की आरती',
  title_en: 'Shri Lakshmi Aarti',
  refrain: 'ॐ जय लक्ष्मी माता॥',
  stanzas: [
    {
      lines: ['ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।', 'तुमको निशिदिन सेवत, हरि विष्णु विधाता॥'],
      meaning_hi: 'हे लक्ष्मी माता, आपकी जय हो। भगवान विष्णु और ब्रह्मा भी दिन-रात आपकी सेवा करते हैं।',
      meaning_en: 'Victory to you, Mother Lakshmi. Even Vishnu and Brahma serve you day and night.',
    },
    {
      lines: ['उमा, रमा, ब्रह्माणी, तुम ही जग-माता।', 'सूर्य-चन्द्रमा ध्यावत, नारद ऋषि गाता॥'],
      meaning_hi: 'आप ही उमा, रमा और ब्रह्माणी हैं, आप ही जगत की माता हैं। सूर्य-चंद्र आपका ध्यान करते हैं और नारद मुनि आपका गुणगान करते हैं।',
      meaning_en: 'You are Uma, Rama and Brahmani, the mother of the world. The Sun and Moon meditate on you and Sage Narad sings your praise.',
    },
    {
      lines: ['दुर्गा रूप निरंजनी, सुख सम्पत्ति दाता।', 'जो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता॥'],
      meaning_hi: 'आप निर्मल दुर्गा-स्वरूपा हैं, सुख और संपत्ति देने वाली हैं। जो आपका ध्यान करता है, उसे ऋद्धि-सिद्धि और धन मिलता है।',
      meaning_en: 'You are the pure form of Durga, giver of happiness and wealth. Whoever meditates on you gains prosperity, success and riches.',
    },
    {
      lines: ['तुम पाताल-निवासिनि, तुम ही शुभदाता।', 'कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता॥'],
      meaning_hi: 'आप पाताल में भी वास करती हैं, आप ही शुभ देने वाली हैं। आप कर्मों का फल प्रकट करती हैं और संसार-सागर से पार लगाती हैं।',
      meaning_en: 'You dwell even in the netherworld and you alone grant auspiciousness. You reveal the fruit of our deeds and carry us across the ocean of worldly life.',
    },
    {
      lines: ['जिस घर में तुम रहतीं, सब सद्गुण आता।', 'सब सम्भव हो जाता, मन नहीं घबराता॥'],
      meaning_hi: 'जिस घर में आप रहती हैं, वहाँ सब सद्गुण आते हैं, सब कुछ संभव हो जाता है और मन नहीं घबराता।',
      meaning_en: 'Every virtue comes to the home where you live; everything becomes possible and the mind knows no fear.',
    },
    {
      lines: ['तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।', 'खान-पान का वैभव, सब तुमसे आता॥'],
      meaning_hi: 'आपके बिना न यज्ञ होते हैं, न किसी को वस्त्र मिलते हैं। भोजन का सारा वैभव आपसे ही आता है।',
      meaning_en: 'Without you no yagya takes place and no one has clothing; all the abundance of food comes from you.',
    },
    {
      lines: ['शुभ-गुण मन्दिर सुन्दर, क्षीरोदधि-जाता।', 'रत्न चतुर्दश तुम बिन, कोई नहीं पाता॥'],
      meaning_hi: 'आप शुभ गुणों का सुंदर मंदिर हैं और क्षीर सागर से प्रकट हुई हैं। आपके बिना चौदह रत्न कोई नहीं पाता।',
      meaning_en: 'You are a beautiful temple of virtues, born from the ocean of milk. Without you, no one obtains the fourteen jewels.',
    },
    {
      lines: ['महालक्ष्मीजी की आरती, जो कोई जन गाता।', 'उर आनन्द समाता, पाप उतर जाता॥'],
      meaning_hi: 'जो कोई महालक्ष्मी जी की यह आरती गाता है, उसका हृदय आनंद से भर जाता है और पाप दूर हो जाते हैं।',
      meaning_en: 'Whoever sings this aarti of Mahalakshmi is filled with joy, and their sins fall away.',
    },
  ],
}

const st = (lines: string[], meaning_hi: string, meaning_en: string): Stanza => ({ lines, meaning_hi, meaning_en })

export const JAGDISH_AARTI: Aarti = {
  id: 'jagdish',
  title_hi: 'ॐ जय जगदीश हरे',
  title_en: 'Om Jai Jagdish Hare',
  refrain: 'ॐ जय जगदीश हरे॥',
  stanzas: [
    st(['ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।', 'भक्त जनों के संकट, क्षण में दूर करे॥'], 'हे जगत के स्वामी हरि, आपकी जय हो। आप भक्तों के संकट पल भर में दूर करते हैं।', 'Victory to you, Hari, lord of the world, who removes the troubles of devotees in a moment.'),
    st(['जो ध्यावे फल पावे, दुःख विनसे मन का।', 'स्वामी दुःख विनसे मन का।', 'सुख सम्पत्ति घर आवे, कष्ट मिटे तन का॥'], 'जो आपका ध्यान करता है उसे फल मिलता है, मन का दुख मिटता है, घर में सुख-संपत्ति आती है और शरीर का कष्ट दूर होता है।', 'Whoever meditates on you is rewarded: sorrow leaves the mind, happiness and wealth come home, and the body’s pain is eased.'),
    st(['मात-पिता तुम मेरे, शरण गहूँ मैं किसकी।', 'स्वामी शरण गहूँ मैं किसकी।', 'तुम बिन और न दूजा, आस करूँ जिसकी॥'], 'आप ही मेरे माता-पिता हैं, मैं और किसकी शरण लूँ? आपके सिवा कोई दूसरा नहीं जिससे आशा करूँ।', 'You are my mother and father; whose shelter could I seek but yours? There is no one else to hope in.'),
    st(['तुम पूरण परमात्मा, तुम अन्तर्यामी।', 'स्वामी तुम अन्तर्यामी।', 'पारब्रह्म परमेश्वर, तुम सबके स्वामी॥'], 'आप पूर्ण परमात्मा हैं, सबके मन की जानने वाले हैं। आप परब्रह्म परमेश्वर और सबके स्वामी हैं।', 'You are the complete Supreme Self who knows every heart, the highest Brahman and lord of all.'),
    st(['तुम करुणा के सागर, तुम पालन-कर्ता।', 'स्वामी तुम पालन-कर्ता।', 'मैं मूरख खल कामी, कृपा करो भर्ता॥'], 'आप करुणा के सागर और सबका पालन करने वाले हैं। मैं मूर्ख और कामनाओं से भरा हूँ, हे स्वामी, मुझ पर कृपा करें।', 'You are an ocean of compassion and the sustainer of all. I am foolish and full of desires; have mercy on me, Lord.'),
    st(['तुम हो एक अगोचर, सबके प्राणपति।', 'स्वामी सबके प्राणपति।', 'किस विधि मिलूँ दयामय, तुमको मैं कुमति॥'], 'आप एक हैं, इंद्रियों से परे हैं, सबके प्राणों के स्वामी हैं। हे दयामय, मैं अल्पबुद्धि आपसे कैसे मिलूँ?', 'You are the One beyond the senses, lord of every life. O merciful one, how can a dull mind like mine reach you?'),
    st(['दीनबन्धु दुखहर्ता, तुम ठाकुर मेरे।', 'स्वामी तुम ठाकुर मेरे।', 'अपने हाथ उठाओ, द्वार पड़ा तेरे॥'], 'आप दीनों के मित्र और दुख हरने वाले, मेरे ठाकुर हैं। अपना हाथ बढ़ाइए, मैं आपके द्वार पर पड़ा हूँ।', 'Friend of the humble and remover of sorrow, you are my master. Raise your hand to me; I lie at your door.'),
    st(['विषय-विकार मिटाओ, पाप हरो देवा।', 'स्वामी पाप हरो देवा।', 'श्रद्धा-भक्ति बढ़ाओ, सन्तन की सेवा॥'], 'मेरे विषय-विकार मिटाइए, पाप हरिए; मेरी श्रद्धा, भक्ति और संतों की सेवा बढ़ाइए।', 'Wipe away my cravings and faults, take away my sins, and grow my faith, devotion and service to the saints.'),
    st(['श्री जगदीशजी की आरती, जो कोई नर गावे।', 'स्वामी जो कोई नर गावे।', 'कहत शिवानन्द स्वामी, सुख संपत्ति पावे॥'], 'शिवानंद स्वामी कहते हैं: जो कोई श्री जगदीश जी की यह आरती गाता है, उसे सुख और संपत्ति मिलती है।', 'Says Shivanand Swami: whoever sings this aarti of Shri Jagdish gains happiness and prosperity.'),
  ],
}

export const SHIV_AARTI: Aarti = {
  id: 'shiv',
  title_hi: 'ॐ जय शिव ओंकारा',
  title_en: 'Om Jai Shiv Omkara',
  refrain: 'ॐ जय शिव ओंकारा॥',
  stanzas: [
    st(['ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।', 'ब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा॥'], 'हे ओंकार-स्वरूप शिव, आपकी जय हो। ब्रह्मा, विष्णु और सदाशिव आप ही हैं, और पार्वती आपकी अर्धांगिनी हैं।', 'Victory to Shiva, the sacred Om. You are Brahma, Vishnu and Sadashiv, with Parvati as half of your being.'),
    st(['एकानन चतुरानन, पञ्चानन राजे।', 'हंसासन गरुड़ासन, वृषवाहन साजे॥'], 'एक मुख वाले विष्णु, चार मुख वाले ब्रह्मा और पाँच मुख वाले शिव शोभित हैं, जो हंस, गरुड़ और नंदी पर विराजते हैं।', 'One-faced, four-faced and five-faced, you shine as Vishnu, Brahma and Shiva, riding the swan, Garuda and the bull.'),
    st(['दो भुज चार चतुर्भुज, दसभुज अति सोहे।', 'त्रिगुण रूप निरखते, त्रिभुवन जन मोहे॥'], 'दो, चार और दस भुजाओं वाले आपके रूप अति सुंदर हैं; तीनों गुणों वाले आपके रूप को देखकर तीनों लोक मोहित होते हैं।', 'Your two-armed, four-armed and ten-armed forms are beautiful; the three worlds are enchanted by your form of the three gunas.'),
    st(['अक्षमाला वनमाला, मुण्डमाला धारी।', 'त्रिपुरारी कंसारी, कर माला धारी॥'], 'आप रुद्राक्ष, वनमाला और मुंडमाला धारण करते हैं; त्रिपुरासुर और कंस का संहार करने वाले हैं।', 'You wear the rudraksha, the forest garland and the garland of skulls; you destroyed Tripura and Kansa.'),
    st(['श्वेताम्बर पीताम्बर, बाघम्बर अंगे।', 'सनकादिक गरुड़ादिक, भूतादिक संगे॥'], 'आपके अंगों पर श्वेत, पीला और बाघ-चर्म का वस्त्र है; सनकादि ऋषि, गरुड़ और भूतगण आपके साथ रहते हैं।', 'You are clothed in white, in yellow and in tiger skin, with the sages, Garuda and the spirits around you.'),
    st(['कर के मध्य कमण्डलु, चक्र त्रिशूलधारी।', 'सुखकारी दुखहारी, जगपालन कारी॥'], 'हाथों में कमंडल, चक्र और त्रिशूल हैं; आप सुख देने वाले, दुख हरने वाले और जगत का पालन करने वाले हैं।', 'In your hands are the kamandal, the discus and the trident; you give joy, take away sorrow and sustain the world.'),
    st(['ब्रह्मा विष्णु सदाशिव, जानत अविवेका।', 'प्रणवाक्षर मध्ये, ये तीनों एका॥'], 'अज्ञानी ब्रह्मा, विष्णु और शिव को अलग मानते हैं, पर ॐ अक्षर में ये तीनों एक हैं।', 'Only the unwise see Brahma, Vishnu and Shiva as separate; in the syllable Om the three are one.'),
    st(['लक्ष्मी व सावित्री, पार्वती संगा।', 'पार्वती अर्द्धांगी, शिवलहरी गंगा॥'], 'लक्ष्मी, सावित्री और पार्वती साथ हैं; पार्वती आपकी अर्धांगिनी हैं और गंगा आपकी जटाओं में लहराती हैं।', 'Lakshmi, Savitri and Parvati are with you; Parvati is half of you, and the Ganga ripples in your hair.'),
    st(['पर्वत सोहैं पार्वती, शंकर कैलासा।', 'भांग धतूर का भोजन, भस्मी में वासा॥'], 'पर्वत पर पार्वती और कैलास पर शंकर शोभित हैं; भांग-धतूरा आपका भोजन है और भस्म में आपका वास है।', 'Parvati graces the mountain and Shankar dwells on Kailash; bhang and datura are your food and ash your home.'),
    st(['जटा में गंगा बहत है, गल मुण्डन माला।', 'शेष नाग लिपटावत, ओढ़त मृगछाला॥'], 'जटाओं में गंगा बहती है, गले में मुंडमाला है, शेषनाग लिपटे हैं और आप मृगछाला ओढ़ते हैं।', 'The Ganga flows in your matted hair, skulls hang at your throat, the serpent coils around you and you wear a deerskin.'),
    st(['काशी में विराजे विश्वनाथ, नन्दी ब्रह्मचारी।', 'नित उठ दर्शन पावत, महिमा अति भारी॥'], 'काशी में विश्वनाथ के रूप में आप विराजते हैं और नंदी आपके द्वारपाल हैं; जो रोज़ दर्शन करता है उसकी बड़ी महिमा है।', 'In Kashi you reign as Vishwanath with Nandi at your door; great is the blessing of those who see you each morning.'),
    st(['त्रिगुणस्वामी जी की आरती, जो कोइ नर गावे।', 'कहत शिवानन्द स्वामी, मनवांछित फल पावे॥'], 'शिवानंद स्वामी कहते हैं: जो कोई तीनों गुणों के स्वामी की यह आरती गाता है, उसे मनचाहा फल मिलता है।', 'Says Shivanand Swami: whoever sings this aarti of the lord of the three gunas receives what the heart desires.'),
  ],
}

export const HANUMAN_AARTI: Aarti = {
  id: 'hanuman',
  title_hi: 'आरती कीजै हनुमान लला की',
  title_en: 'Aarti Kije Hanuman Lala Ki',
  refrain: 'आरती कीजै हनुमान लला की॥',
  stanzas: [
    st(['आरती कीजै हनुमान लला की।', 'दुष्ट दलन रघुनाथ कला की॥'], 'हनुमान लला की आरती कीजिए, जो दुष्टों का नाश करने वाले और श्री राम की शक्ति हैं।', 'Sing the aarti of dear Hanuman, destroyer of the wicked and the very power of Shri Ram.'),
    st(['जाके बल से गिरिवर कांपे।', 'रोग दोष जाके निकट न झांके॥'], 'जिनके बल से पर्वत काँपते हैं, और रोग-दोष जिनके पास भी नहीं आते।', 'By whose strength the mountains tremble, and near whom no illness or fault dares to come.'),
    st(['अंजनि पुत्र महा बलदाई।', 'सन्तन के प्रभु सदा सहाई॥'], 'माँ अंजनी के पुत्र महाबलशाली हैं और संतों के सदा सहायक हैं।', 'Mother Anjani’s son, giver of great strength, always the helper of the saints.'),
    st(['दे बीरा रघुनाथ पठाए।', 'लंका जारि सिया सुधि लाए॥'], 'श्री राम ने पान का बीड़ा देकर भेजा, और आपने लंका जलाकर सीता जी का समाचार लाया।', 'Shri Ram sent you with the betel of honour, and you burned Lanka and brought back news of Sita.'),
    st(['लंका सो कोट समुद्र-सी खाई।', 'जात पवनसुत बार न लाई॥'], 'लंका जैसा किला और समुद्र जैसी खाई थी, पर पवनपुत्र को पार करने में देर न लगी।', 'Lanka was a fortress with the ocean for a moat, yet the son of the wind crossed it without delay.'),
    st(['लंका जारि असुर संहारे।', 'सियारामजी के काज सवारे॥'], 'लंका जलाकर असुरों का संहार किया और सीता-राम के काम संवारे।', 'You burned Lanka, struck down the demons and set right the work of Sita and Ram.'),
    st(['लक्ष्मण मूर्छित पड़े सकारे।', 'आनि संजीवन प्राण उबारे॥'], 'जब लक्ष्मण मूर्छित पड़े थे, तब संजीवनी लाकर उनके प्राण बचाए।', 'When Lakshman lay unconscious, you brought the Sanjeevani herb and saved his life.'),
    st(['पैठि पाताल तोरि जम-कारे।', 'अहिरावण की भुजा उखारे॥'], 'पाताल में जाकर यम के बंधन तोड़े और अहिरावण की भुजाएँ उखाड़ दीं।', 'You entered the underworld, broke the bonds of death and tore off Ahiravan’s arms.'),
    st(['बाएं भुजा असुरदल मारे।', 'दाहिने भुजा संतजन तारे॥'], 'बाईं भुजा से असुरों को मारा और दाईं भुजा से संतों को पार लगाया।', 'With your left arm you struck the demon host, and with your right you carried the saints across.'),
    st(['सुर नर मुनि आरती उतारें।', 'जय जय जय हनुमान उचारें॥'], 'देवता, मनुष्य और मुनि आपकी आरती उतारते हैं और जय हनुमान बोलते हैं।', 'Gods, people and sages wave the aarti to you, calling out victory to Hanuman.'),
    st(['कंचन थार कपूर लौ छाई।', 'आरती करत अंजना माई॥'], 'सोने की थाली में कपूर की लौ जल रही है, और माँ अंजना आरती कर रही हैं।', 'The camphor flame glows on a golden plate as Mother Anjana performs the aarti.'),
    st(['जो हनुमानजी की आरती गावे।', 'बसि बैकुण्ठ परम पद पावे॥'], 'जो हनुमान जी की यह आरती गाता है, वह बैकुंठ में बसकर परम पद पाता है।', 'Whoever sings this aarti of Hanuman ji dwells in Vaikuntha and attains the highest state.'),
  ],
}

export const AMBE_AARTI: Aarti = {
  id: 'ambe',
  title_hi: 'जय अम्बे गौरी',
  title_en: 'Jai Ambe Gauri',
  refrain: 'ॐ जय अम्बे गौरी॥',
  stanzas: [
    st(['जय अम्बे गौरी, मैया जय श्यामा गौरी।', 'तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥'], 'हे अंबे, हे गौरी, हे श्यामा माँ, आपकी जय हो। विष्णु, ब्रह्मा और शिव दिन-रात आपका ध्यान करते हैं।', 'Victory to Mother Ambe, Gauri and Shyama. Vishnu, Brahma and Shiva meditate on you day and night.'),
    st(['माँग सिन्दूर विराजत, टीको मृगमद को।', 'उज्ज्वल से दोउ नैना, चन्द्रवदन नीको॥'], 'माँग में सिंदूर और माथे पर कस्तूरी का टीका है; दोनों नेत्र उज्ज्वल हैं और मुख चंद्रमा जैसा सुंदर है।', 'Sindoor in your parting, a musk tilak on your brow, two bright eyes and a face lovely as the moon.'),
    st(['कनक समान कलेवर, रक्ताम्बर राजै।', 'रक्तपुष्प गल माला, कण्ठन पर साजै॥'], 'सोने जैसा शरीर लाल वस्त्र में शोभित है, और गले में लाल फूलों की माला है।', 'Your golden form shines in red clothes, with a garland of red flowers at your throat.'),
    st(['केहरि वाहन राजत, खड्ग खप्परधारी।', 'सुर-नर-मुनि-जन सेवत, तिनके दुखहारी॥'], 'आप सिंह पर विराजती हैं, तलवार और खप्पर धारण करती हैं; देव, मनुष्य और मुनि आपकी सेवा करते हैं और आप उनके दुख हरती हैं।', 'You ride the lion, holding the sword and the skull-bowl; gods, people and sages serve you and you end their sorrows.'),
    st(['कानन कुण्डल शोभित, नासाग्रे मोती।', 'कोटिक चन्द्र दिवाकर, सम राजत ज्योति॥'], 'कानों में कुंडल और नाक में मोती शोभित है; आपकी ज्योति करोड़ों चंद्र-सूर्य के समान है।', 'Earrings shine at your ears and a pearl at your nose; your light is like millions of moons and suns.'),
    st(['शुम्भ-निशुम्भ बिदारे, महिषासुर घाती।', 'धूम्र विलोचन नैना, निशिदिन मदमाती॥'], 'आपने शुंभ-निशुंभ को चीर डाला, महिषासुर और धूम्रलोचन को मारा।', 'You tore apart Shumbh and Nishumbh and slew Mahishasur and Dhumralochan.'),
    st(['चण्ड-मुण्ड संहारे, शोणित बीज हरे।', 'मधु-कैटभ दोउ मारे, सुर भयहीन करे॥'], 'चंड-मुंड और रक्तबीज का संहार किया, मधु-कैटभ को मारा और देवताओं को निर्भय किया।', 'You destroyed Chand, Mund and Raktabeej, killed Madhu and Kaitabh and freed the gods from fear.'),
    st(['ब्रह्माणी रुद्राणी, तुम कमला रानी।', 'आगम-निगम-बखानी, तुम शिव पटरानी॥'], 'आप ही ब्रह्माणी, रुद्राणी और कमला हैं; वेद-शास्त्र आपका वर्णन करते हैं, आप शिव की पटरानी हैं।', 'You are Brahmani, Rudrani and Kamala; the scriptures describe you, and you are Shiva’s queen.'),
    st(['चौंसठ योगिनी मंगल गावत, नृत्य करत भैरूँ।', 'बाजत ताल मृदंगा, अरु बाजत डमरु॥'], 'चौंसठ योगिनियाँ मंगल गाती हैं, भैरव नाचते हैं, और ताल, मृदंग व डमरू बजते हैं।', 'Sixty-four yoginis sing your praise and Bhairav dances to the beat of cymbals, drums and damaru.'),
    st(['तुम ही जग की माता, तुम ही हो भरता।', 'भक्तन की दुःख हरता, सुख सम्पत्ति करता॥'], 'आप ही जगत की माता और पालनहार हैं; भक्तों के दुख हरती हैं और सुख-संपत्ति देती हैं।', 'You are the mother and the sustainer of the world; you take away devotees’ sorrows and give joy and wealth.'),
    st(['भुजा चार अति शोभित, वर-मुद्रा धारी।', 'मनवांछित फल पावत, सेवत नर-नारी॥'], 'आपकी चार भुजाएँ अति सुंदर हैं और आप वरदान की मुद्रा में हैं; सेवा करने वाले नर-नारी मनचाहा फल पाते हैं।', 'Your four arms are beautiful, one raised in blessing; every man and woman who serves you receives their wish.'),
    st(['कंचन थाल विराजत, अगर कपूर बाती।', 'श्रीमालकेतु में राजत, कोटि रतन ज्योति॥'], 'सोने की थाली में अगर और कपूर की बाती जल रही है, और करोड़ों रत्नों जैसी ज्योति चमक रही है।', 'On the golden plate burn agar and camphor wicks, glowing like millions of jewels.'),
    st(['श्री अम्बेजी की आरती, जो कोई नर गावै।', 'कहत शिवानन्द स्वामी, सुख सम्पत्ति पावै॥'], 'शिवानंद स्वामी कहते हैं: जो कोई अंबे माँ की यह आरती गाता है, उसे सुख और संपत्ति मिलती है।', 'Says Shivanand Swami: whoever sings this aarti of Ambe Maa gains happiness and prosperity.'),
  ],
}

export const KUNJBIHARI_AARTI: Aarti = {
  id: 'kunjbihari',
  title_hi: 'आरती कुंजबिहारी की',
  title_en: 'Aarti Kunj Bihari Ki',
  refrain: 'आरती कुंजबिहारी की, श्री गिरिधर कृष्ण मुरारी की॥',
  stanzas: [
    st(['आरती कुंजबिहारी की,', 'श्री गिरिधर कृष्ण मुरारी की॥'], 'कुंजों में विहार करने वाले, गोवर्धन धारण करने वाले श्री कृष्ण मुरारी की आरती।', 'The aarti of Krishna who roams the groves of Braj, who held up Govardhan, Murari.'),
    st(['गले में बैजंती माला, बजावै मुरली मधुर बाला।', 'श्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला।', 'गगन सम अंग कांति काली, राधिका चमक रही आली।', 'लतन में ठाढ़े बनमाली, भ्रमर सी अलक, कस्तूरी तिलक, चन्द्र सी झलक;', 'ललित छवि श्यामा प्यारी की॥'], 'गले में वैजयंती माला है, बाल-कृष्ण मीठी मुरली बजाते हैं, कानों में कुंडल चमकते हैं; नंद बाबा के आनंद नंदलाला का शरीर आकाश जैसा साँवला है, साथ में राधा जी चमक रही हैं। लताओं के बीच खड़े वनमाली की भौंरे जैसी लटें, कस्तूरी का तिलक और चाँद जैसी आभा है; श्यामा-प्यारी की छवि मनोहर है।', 'A vaijayanti garland at his neck, the boy plays a sweet flute, earrings gleam at his ears; Nanda’s joy, dark as the sky, with Radha shining beside him. He stands among the vines with curls like bees, a musk tilak and a moonlike glow; lovely is the sight of Radha’s beloved.'),
    st(['कनकमय मोर मुकुट बिलसै, देवता दरसन को तरसैं।', 'गगन सों सुमन रासि बरसै; बजे मुरचंग, मधुर मिरदंग, ग्वालिन संग;', 'अतुल रति गोप कुमारी की॥'], 'सोने का मोर-मुकुट शोभित है, देवता दर्शन को तरसते हैं, आकाश से फूल बरसते हैं; मुरचंग और मृदंग बजते हैं, ग्वालिनें साथ हैं, और गोप-कुमारियों का प्रेम अतुलनीय है।', 'A golden peacock crown shines, the gods long to see him, flowers rain from the sky; the murchang and mridang play among the cowherd girls, whose love is beyond compare.'),
    st(['जहां ते प्रकट भई गंगा, कलुष कलि हारिणि श्रीगंगा।', 'स्मरन ते होत मोह भंगा; बसी सिव सीस, जटा के बीच, हरै अघ कीच;', 'चरन छवि श्रीबनवारी की॥'], 'जिन चरणों से कलियुग के पाप हरने वाली गंगा प्रकट हुईं, जिनके स्मरण से मोह टूटता है, जो गंगा शिव की जटाओं में बसकर पाप का कीचड़ धोती हैं; ऐसी है श्री बनवारी के चरणों की छवि।', 'From these feet came the Ganga who washes away the age’s sins; remembering them breaks delusion; she lives in Shiva’s locks and clears the mire of sin. Such is the beauty of Banwari’s feet.'),
    st(['चमकती उज्ज्वल तट रेनू, बज रही वृंदावन बेनू।', 'चहुं दिसि गोपि ग्वाल धेनू; हंसत मृदु मंद, चांदनी चंद, कटत भव फंद;', 'टेर सुन दीन भिखारी की॥'], 'यमुना तट की उजली रेत चमकती है, वृंदावन में बाँसुरी बजती है, चारों ओर गोपियाँ, ग्वाले और गायें हैं; प्रभु मंद-मंद हँसते हैं, चाँदनी फैली है, संसार के बंधन कटते हैं; हे प्रभु, इस दीन भिखारी की पुकार सुनिए।', 'The bright sand of the riverbank gleams, the flute sounds in Vrindavan, gopis, cowherds and cows all around; he smiles softly in the moonlight and the snares of the world fall away. Hear the call of this humble beggar.'),
  ],
}

export const GOVARDHAN_AARTI: Aarti = {
  id: 'govardhan',
  title_hi: 'श्री गोवर्धन महाराज की आरती',
  title_en: 'Shri Govardhan Aarti',
  refrain: 'तेरे माथे मुकुट विराज रहेओ॥',
  stanzas: [
    st(['श्री गोवर्धन महाराज, ओ महाराज,', 'तेरे माथे मुकुट विराज रहेओ॥'], 'हे गोवर्धन महाराज, आपके माथे पर मुकुट शोभित है।', 'O Govardhan Maharaj, a crown shines on your brow.'),
    st(['तोपे पान चढ़े तोपे फूल चढ़े,', 'तोपे चढ़े दूध की धार॥'], 'आप पर पान और फूल चढ़ते हैं, और दूध की धारा चढ़ती है।', 'Betel leaves and flowers are offered to you, and streams of milk are poured over you.'),
    st(['तेरी सात कोस की परिकम्मा,', 'चकलेश्वर है विश्राम॥'], 'आपकी सात कोस की परिक्रमा है, और चकलेश्वर में विश्राम होता है।', 'Your circuit is seven kos long, with rest at Chakleshwar.'),
    st(['तेरे गले में कण्ठा साज रहेओ,', 'ठोड़ी पे हीरा लाल॥'], 'आपके गले में कंठा सजा है और ठोड़ी पर हीरा-लाल चमक रहा है।', 'A necklace adorns your throat and a ruby gleams on your chin.'),
    st(['तेरे कानन कुण्डल चमक रहेओ,', 'तेरी झाँकी बनी विशाल॥'], 'आपके कानों में कुंडल चमक रहे हैं और आपकी झाँकी विशाल बनी है।', 'Earrings sparkle at your ears, and your shrine is grand.'),
    st(['गिरिराज धरण प्रभु तेरी शरण,', 'करो भक्त का बेड़ा पार॥'], 'हे गिरिराज को धारण करने वाले प्रभु, हम आपकी शरण में हैं; भक्त की नैया पार लगाइए।', 'Lord who held up the king of mountains, we are in your shelter; carry your devotee safely across.'),
  ],
}

export const RAM_STUTI: Aarti = {
  id: 'ramstuti',
  kind: 'stuti',
  title_hi: 'श्री रामचन्द्र कृपालु भजु मन',
  title_en: 'Shri Ramchandra Kripalu',
  refrain: 'श्री रामचन्द्र कृपालु भजु मन हरण भवभय दारुणं॥',
  stanzas: [
    st(['श्री रामचन्द्र कृपालु भजु मन, हरण भवभय दारुणं।', 'नव कंज लोचन कंज मुख, कर कंज पद कंजारुणं॥'], 'हे मन, कृपालु श्री रामचंद्र जी का भजन कर, जो संसार के कठोर भय को हर लेते हैं। उनके नेत्र नए खिले कमल जैसे हैं, और मुख, हाथ तथा चरण लाल कमल के समान हैं।', 'O mind, worship gracious Shri Ramchandra, who takes away the harsh fear of worldly life. His eyes are like fresh lotuses, and his face, hands and feet are like red lotuses.'),
    st(['कन्दर्प अगणित अमित छवि, नव नील नीरद सुन्दरं।', 'पट पीत मानहुँ तड़ित रुचि, शुचि नौमि जनक सुतावरं॥'], 'उनकी सुंदरता अनगिनत कामदेवों से भी अधिक है, वे नए नीले बादल जैसे सुंदर हैं। उनका पीला वस्त्र बिजली की चमक जैसा है; जानकी जी के पति उन पवित्र प्रभु को मैं नमन करता हूँ।', 'His beauty exceeds countless Kamadevas; he is lovely as a new blue rain cloud. His yellow garment gleams like lightning. I bow to the pure lord, husband of Janaki.'),
    st(['भजु दीनबन्धु दिनेश, दानव दैत्य वंश निकन्दनं।', 'रघुनन्द आनन्द कन्द, कौशल चन्द दशरथ नन्दनं॥'], 'दीनों के बंधु, सूर्य के समान तेजस्वी, दानवों और दैत्यों के वंश का नाश करने वाले प्रभु का भजन कर। वे रघुकुल के आनंद, आनंद के मूल, कोसल के चंद्रमा और दशरथ जी के पुत्र हैं।', 'Worship the friend of the humble, radiant as the sun, who ends the line of demons; the joy of the Raghus, root of bliss, moon of Kosala, son of Dasharatha.'),
    st(['सिर मुकुट कुंडल तिलक चारु, उदारु अंग विभूषणं।', 'आजानु भुज शर चाप धर, संग्राम जित खरदूषणं॥'], 'सिर पर मुकुट, कानों में कुंडल, माथे पर सुंदर तिलक और सब अंगों पर आभूषण हैं। घुटनों तक लंबी भुजाओं में धनुष-बाण है, और उन्होंने युद्ध में खर-दूषण को जीता।', 'A crown on his head, earrings, a lovely tilak and ornaments on every limb. His arms reach his knees and hold bow and arrow; he won the battle against Khara and Dushana.'),
    st(['इति वदति तुलसीदास, शंकर शेष मुनि मन रंजनं।', 'मम हृदय कंज निवास कुरु, कामादि खल दल गंजनं॥'], 'तुलसीदास जी कहते हैं: हे शिव, शेषनाग और मुनियों के मन को आनंद देने वाले प्रभु, काम आदि दुष्टों के दल का नाश करने वाले, मेरे हृदय-कमल में निवास कीजिए।', 'So says Tulsidas: O lord who delights Shiva, Shesha and the sages, destroyer of the band of desire and the other vices, dwell in the lotus of my heart.'),
  ],
}

/** Ram aarti, Khatu Shyam and Kali Maa aartis: text checked against Bhakti Bharat, Shubh Panchang and Drik Panchang (21 Oct 2026). */
export const RAM_AARTI: Aarti = {
  id: 'ram',
  title_hi: 'आरती कीजै श्री रघुवर जी की',
  title_en: 'Aarti Kije Shri Raghuvar Ji Ki',
  refrain: 'आरती कीजै श्री रघुवर जी की॥',
  stanzas: [
    st(['आरती कीजै श्री रघुवर जी की,', 'सत चित आनन्द शिव सुन्दर की॥'], 'श्री रघुवर राम की आरती कीजिए, जो सत्य, चेतना और आनंद के स्वरूप हैं, कल्याणकारी और सुंदर हैं।', 'Perform the aarti of Shri Raghuvar, who is truth, awareness and bliss, auspicious and beautiful.'),
    st(['दशरथ तनय कौशल्या नन्दन,', 'सुर मुनि रक्षक दैत्य निकन्दन।', 'अनुगत भक्त भक्त उर चन्दन,', 'मर्यादा पुरुषोत्तम वर की॥'], 'वे दशरथ जी के पुत्र और माता कौशल्या के आनंद हैं, देवताओं और मुनियों के रक्षक और दैत्यों का नाश करने वाले हैं। शरण में आए भक्तों के हृदय के लिए चंदन जैसी ठंडक हैं, ऐसे मर्यादा पुरुषोत्तम की आरती।', 'Son of Dasharatha and joy of Kaushalya, protector of gods and sages, destroyer of demons. Like sandalwood to the hearts of devoted bhaktas, this is the aarti of Maryada Purushottam.'),
    st(['निर्गुण सगुण अनूप रूप निधि,', 'सकल लोक वन्दित विभिन्न विधि।', 'हरण शोक-भय दायक नव निधि,', 'माया रहित दिव्य नर वर की॥'], 'वे निर्गुण भी हैं और सगुण भी, अनुपम रूप के भंडार हैं, और सब लोकों में अनेक प्रकार से वंदित हैं। शोक और भय हरने वाले, नौ निधियाँ देने वाले, माया से परे दिव्य पुरुष की आरती।', 'Both formless and with form, a treasure of unmatched beauty, worshipped in many ways in every world. He removes sorrow and fear, grants the nine treasures, and is divine and free of maya.'),
    st(['जानकी पति सुर अधिपति जगपति,', 'अखिल लोक पालक त्रिलोक गति।', 'विश्व वन्द्य अवन अमित गति,', 'एक मात्र गति सचराचर की॥'], 'वे जानकी जी के पति, देवताओं के स्वामी और जगत के पति हैं, सब लोकों के पालक और तीनों लोकों के सहारे हैं। संसार उनकी वंदना करता है, वे रक्षक हैं और उनकी गति अपार है; चर-अचर सब जीवों का वे ही एकमात्र सहारा हैं।', 'Husband of Janaki, lord of the gods and of the world, sustainer of every realm and refuge of the three worlds. The universe bows to him; he is the protector of limitless reach and the only refuge of all that moves and does not move.'),
    st(['शरणागत वत्सल व्रतधारी,', 'भक्त कल्प तरुवर असुरारी।', 'नाम लेत जग पावनकारी,', 'वानर सखा दीन दुख हर की॥'], 'वे शरण में आने वालों पर स्नेह रखते हैं और अपने व्रत पर अटल रहते हैं। भक्तों के लिए कल्पवृक्ष हैं और असुरों के शत्रु। उनका नाम लेते ही संसार पवित्र हो जाता है; वे वानरों के मित्र हैं और दीनों के दुख हरते हैं।', 'He loves those who take shelter and keeps his vows. He is a wish-granting tree to devotees and the enemy of demons. His name purifies the world; friend of the vanaras, remover of the sorrows of the humble.'),
  ],
}

export const KHATU_AARTI: Aarti = {
  id: 'khatu',
  title_hi: 'ॐ जय श्री श्याम हरे',
  title_en: 'Om Jai Shri Shyam Hare',
  refrain: 'ॐ जय श्री श्याम हरे॥',
  stanzas: [
    st(['ॐ जय श्री श्याम हरे, बाबा जय श्री श्याम हरे।', 'खाटू धाम विराजत, अनुपम रूप धरे॥'], 'श्री श्याम हरे, बाबा श्याम की जय हो। आप खाटू धाम में अनुपम रूप धारण करके विराजमान हैं।', 'Glory to Baba Shri Shyam. You dwell at Khatu Dham in a form beyond compare.'),
    st(['रतन जड़ित सिंहासन, सिर पर चँवर ढुरे।', 'तन केसरिया बागो, कुण्डल श्रवण पड़े॥'], 'आपका सिंहासन रत्नों से जड़ा है और सिर पर चँवर डुलता है। शरीर पर केसरिया बाना है और कानों में कुंडल हैं।', 'Your throne is set with jewels and a chauri is waved over your head. You wear a saffron robe and earrings.'),
    st(['गल पुष्पों की माला, सिर पर मुकुट धरे।', 'खेवत धूप अग्नि पर, दीपक ज्योति जले॥'], 'गले में फूलों की माला है और सिर पर मुकुट। अग्नि पर धूप अर्पित हो रही है और दीपक की ज्योति जल रही है।', 'A garland of flowers at your neck and a crown on your head. Incense is offered on the fire and the lamp burns bright.'),
    st(['मोदक खीर चूरमा, सुवरण थाल भरे।', 'सेवक भोग लगावत, सेवा नित्य करे॥'], 'सोने के थाल मोदक, खीर और चूरमे से भरे हैं। सेवक भोग लगाते हैं और रोज़ आपकी सेवा करते हैं।', 'Golden plates are filled with modak, kheer and churma. Your devotees offer the bhog and serve you every day.'),
    st(['झांझ कटोरा और घड़ियावल, शंख मृदंग घुरे।', 'भक्त आरती गावे, जय-जयकार करे॥'], 'झाँझ, कटोरा, घड़ियाल, शंख और मृदंग बज रहे हैं। भक्त आरती गाते हैं और जय-जयकार करते हैं।', 'Cymbals, bowls, gongs, conches and drums sound. Devotees sing the aarti and call out your praise.'),
    st(['जो ध्यावे फल पावे, सब दुःख से उबरे।', 'सेवक जन निज मुख से, श्री श्याम-श्याम उचरे॥'], 'जो आपका ध्यान करता है, फल पाता है और सब दुखों से उबर जाता है। सेवक अपने मुख से श्याम-श्याम पुकारते हैं।', 'Whoever meditates on you receives the fruit and rises above every sorrow. Your servants call out “Shyam, Shyam” with their own lips.'),
    st(['श्री श्याम बिहारी जी की आरती, जो कोई नर गावे।', 'कहत भक्त-जन, मनवांछित फल पावे॥'], 'जो कोई श्री श्याम बिहारी जी की यह आरती गाता है, भक्त कहते हैं, उसे मनचाहा फल मिलता है।', 'Whoever sings this aarti of Shri Shyam Bihari, say the devotees, receives the fruit of their wish.'),
    st(['तन मन धन सब कुछ है तेरा, हो बाबा सब कुछ है तेरा।', 'तेरा तुझको अर्पण, क्या लागे मेरा॥'], 'तन, मन और धन सब आपका ही है, बाबा। आपका दिया आपको ही अर्पित करता हूँ, इसमें मेरा क्या लगता है।', 'Body, mind and wealth are all yours, Baba. I offer you only what is yours; what is mine in it?'),
    st(['जय श्री श्याम हरे, बाबा जी श्री श्याम हरे।', 'निज भक्तों के तुमने, पूरण काज करे॥'], 'श्री श्याम हरे, बाबा की जय हो। आपने अपने भक्तों के सब काम पूरे किए हैं।', 'Glory to Shri Shyam. You have fulfilled the work of your devotees.'),
  ],
}

export const KALI_AARTI: Aarti = {
  id: 'kali',
  title_hi: 'अम्बे तू है जगदम्बे काली',
  title_en: 'Ambe Tu Hai Jagdambe Kali',
  refrain: 'अम्बे तू है जगदम्बे काली॥',
  stanzas: [
    st(['अम्बे तू है जगदम्बे काली, जय दुर्गे खप्परवाली।', 'तेरे ही गुण गावें भारती, ओ मैया हम सब उतारें तेरी आरती॥'], 'हे अंबे, आप जगदंबा काली हैं, खप्पर धारण करने वाली दुर्गा हैं, आपकी जय हो। हम सब आपके ही गुण गाते हैं; हे माँ, हम सब आपकी आरती उतारते हैं।', 'O Ambe, you are Jagdamba Kali and Durga who holds the skull-bowl; victory to you. We all sing your praises, Mother, and offer you our aarti.'),
    st(['तेरे भक्त जनों पर माता, भीड़ पड़ी है भारी।', 'दानव दल पर टूट पड़ो माँ, करके सिंह सवारी।', 'सौ-सौ सिंहों से बलशाली, अष्ट भुजाओं वाली।', 'दुष्टों को तू ही ललकारती, ओ मैया हम सब उतारें तेरी आरती॥'], 'हे माता, आपके भक्तों पर भारी संकट आया है। सिंह पर सवार होकर दानवों के दल पर टूट पड़िए। आप सौ-सौ सिंहों से बलशाली और आठ भुजाओं वाली हैं, दुष्टों को आप ही ललकारती हैं।', 'Mother, your devotees are in great trouble. Ride your lion and fall upon the army of demons. You are stronger than a hundred lions, eight-armed, and you alone challenge the wicked.'),
    st(['माँ बेटे का है इस जग में, बड़ा ही निर्मल नाता।', 'पूत कपूत सुने हैं पर, ना माता सुनी कुमाता।', 'सब पर करुणा दर्शाने वाली, अमृत बरसाने वाली।', 'दुखियों के दुखड़े निवारती, ओ मैया हम सब उतारें तेरी आरती॥'], 'इस संसार में माँ और बेटे का नाता बहुत निर्मल है। बेटे कपूत सुने हैं, पर माता कभी कुमाता नहीं सुनी। आप सब पर करुणा करती हैं, अमृत बरसाती हैं और दुखियों के दुख दूर करती हैं।', 'The bond of mother and child is the purest in this world. We have heard of bad sons, but never of a bad mother. You show mercy to all, rain nectar, and remove the sorrows of the suffering.'),
    st(['नहीं मांगते धन और दौलत, न चांदी न सोना माँ।', 'हम तो मांगें माँ तेरे मन में, एक छोटा सा कोना।', 'सबकी बिगड़ी बनाने वाली, लाज बचाने वाली।', 'सतियों के सत को संवारती, ओ मैया हम सब उतारें तेरी आरती॥'], 'हम धन-दौलत, चाँदी-सोना नहीं माँगते। हे माँ, हम तो आपके मन में एक छोटा-सा कोना माँगते हैं। आप सबकी बिगड़ी बनाती हैं, लाज बचाती हैं और सतियों के सत को सँवारती हैं।', 'We do not ask for wealth, silver or gold, Mother. We ask only for a small corner in your heart. You mend what is broken, protect our honour and uphold the truth of the faithful.'),
  ],
}

/** Said after any aarti, in this order. */
export const AFTER_AARTI: { id: string; title_hi: string; title_en: string; lines: string[]; meaning_hi: string; meaning_en: string }[] = [
  {
    id: 'karpur',
    title_hi: 'कर्पूर आरती',
    title_en: 'Karpur aarti',
    lines: ['कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम्।', 'सदा वसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि॥'],
    meaning_hi: 'कपूर जैसे गोरे, करुणा के अवतार, संसार के सार और सर्पराज को हार की तरह पहनने वाले शिव, जो सदा हृदय-कमल में बसते हैं, उन्हें माता भवानी सहित मैं नमन करता हूँ।',
    meaning_en: 'I bow to Shiva, fair as camphor, the embodiment of compassion and essence of the world, with the king of serpents as his garland, who always dwells in the lotus of the heart, together with Mother Bhavani.',
  },
  {
    id: 'kshama',
    title_hi: 'क्षमा प्रार्थना',
    title_en: 'Prayer for forgiveness',
    lines: ['आवाहनं न जानामि न जानामि विसर्जनम्।', 'पूजां चैव न जानामि क्षमस्व परमेश्वर॥', 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं सुरेश्वर।', 'यत्पूजितं मया देव परिपूर्णं तदस्तु मे॥'],
    meaning_hi: 'हे परमेश्वर, मैं आपको बुलाना, विदा करना और पूजा की सही विधि नहीं जानता, मुझे क्षमा करें। मंत्र, क्रिया या भक्ति में जो भी कमी रह गई हो, हे देव, मेरी की हुई वह पूजा आपकी कृपा से पूर्ण हो।',
    meaning_en: 'O Supreme Lord, I do not know how to invite you, send you off or perform worship; forgive me. Whatever I have offered, lacking in mantra, rite or devotion, O Lord, let it be made complete.',
  },
]

const R = AARTIS2
/** Grouped by deity, the most sung first in each group. */
export const AARTIS: Aarti[] = [
  GANESH_AARTI, R.sukhkarta, R.shendur,
  LAKSHMI_AARTI,
  JAGDISH_AARTI, R.satyanarayan, R.brihaspati,
  SHIV_AARTI, R.gangadhar, R.parvati,
  HANUMAN_AARTI, R.balaji,
  AMBE_AARTI, R.vaishno, KALI_AARTI, R.santoshi,
  KUNJBIHARI_AARTI, R.banke, R.yugal, GOVARDHAN_AARTI,
  RAM_AARTI, RAM_STUTI, R.sita,
  KHATU_AARTI,
  R.saraswati, R.gayatri, R.surya, R.shani, R.bhairav,
  R.ganga, R.tulsi, R.karwa, R.ahoi, R.vishwakarma,
]
