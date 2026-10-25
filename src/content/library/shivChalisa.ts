/** Shri Shiv Chalisa by Ayodhyadas (traditional, public domain). Meanings written for Sanatan App. */
import type { LibText } from './types'

const doha = { hi: 'दोहा', en: 'Doha' }

const CHAUPAI: [string, string, string][] = [
  ['जय गिरिजा पति दीन दयाला।\nसदा करत सन्तन प्रतिपाला॥', 'हे गिरिजापति, दीनों पर दया करने वाले, आपकी जय हो। आप सदा संतों का पालन करते हैं।', 'Victory to the lord of Girija, kind to the humble, who always looks after the saints.'],
  ['भाल चन्द्रमा सोहत नीके।\nकानन कुण्डल नागफनी के॥', 'माथे पर चंद्रमा सुंदर लगता है और कानों में नाग के फन के कुंडल हैं।', 'The moon shines on your brow, and serpent hoods are your earrings.'],
  ['अंग गौर शिर गंग बहाये।\nमुण्डमाल तन क्षार लगाए॥', 'आपका शरीर गोरा है, सिर से गंगा बहती है, गले में मुंडमाला है और शरीर पर भस्म लगी है।', 'Fair of body, the Ganga flowing from your head, a garland of skulls, and ash on your skin.'],
  ['वस्त्र खाल बाघम्बर सोहे।\nछवि को देखि नाग मन मोहे॥', 'आप बाघ की खाल पहने शोभित हैं। आपकी छवि देखकर नाग भी मोहित हो जाते हैं।', 'You wear a tiger skin, and even the serpents are charmed by your form.'],
  ['मैना मातु की ह्वै दुलारी।\nबाम अंग सोहत छवि न्यारी॥', 'माता मैना की दुलारी पार्वती जी आपके बाएँ ओर विराजती हैं। यह छवि अनोखी है।', 'Mother Maina’s beloved daughter, Parvati, sits at your left side, a wondrous sight.'],
  ['कर त्रिशूल सोहत छवि भारी।\nकरत सदा शत्रुन क्षयकारी॥', 'हाथ में त्रिशूल बहुत शोभा देता है, जो सदा शत्रुओं का नाश करता है।', 'The trident shines grandly in your hand and always destroys enemies.'],
  ['नन्दि गणेश सोहै तहँ कैसे।\nसागर मध्य कमल हैं जैसे॥', 'वहाँ नंदी और गणेश जी ऐसे शोभित हैं, जैसे सागर के बीच कमल खिले हों।', 'Nandi and Ganesh shine there like lotuses in the middle of the sea.'],
  ['कार्तिक श्याम और गणराऊ।\nया छवि को कहि जात न काऊ॥', 'कार्तिकेय और गणपति के साथ आपकी यह छवि ऐसी है कि कोई इसका वर्णन नहीं कर सकता।', 'With Kartikeya and Ganapati beside you, no one can describe this sight.'],
  ['देवन जबहीं जाय पुकारा।\nतब ही दुख प्रभु आप निवारा॥', 'जब भी देवताओं ने जाकर पुकारा, प्रभु, आपने तभी उनका दुख दूर किया।', 'Whenever the gods came and called to you, Lord, you took away their suffering at once.'],
  ['किया उपद्रव तारक भारी।\nदेवन सब मिलि तुमहिं जुहारी॥', 'जब तारकासुर ने भारी उत्पात मचाया, तब सब देवताओं ने मिलकर आपसे विनती की।', 'When the demon Tarak caused great havoc, all the gods together prayed to you.'],
  ['तुरत षडानन आप पठायउ।\nलवनिमेष महँ मारि गिरायउ॥', 'आपने तुरंत छह मुख वाले कार्तिकेय को भेजा, जिन्होंने पलक झपकते ही उसे मार गिराया।', 'At once you sent six-faced Kartikeya, who struck him down in the blink of an eye.'],
  ['आप जलंधर असुर संहारा।\nसुयश तुम्हार विदित संसारा॥', 'आपने जलंधर असुर का संहार किया। आपका यश सारे संसार में प्रसिद्ध है।', 'You destroyed the demon Jalandhar, and your glory is known throughout the world.'],
  ['त्रिपुरासुर सन युद्ध मचाई।\nसबहिं कृपा कर लीन बचाई॥', 'त्रिपुरासुर से युद्ध करके आपने कृपा करके सबको बचा लिया।', 'You fought Tripurasura and in your kindness saved everyone.'],
  ['किया तपहिं भागीरथ भारी।\nपुरब प्रतिज्ञा तासु पुरारी॥', 'भगीरथ ने भारी तप किया, और हे त्रिपुरारी, आपने गंगा को धारण करके उनकी प्रतिज्ञा पूरी की।', 'Bhagirath did great penance, and you, slayer of Tripura, fulfilled his vow by receiving the Ganga.'],
  ['दानिन महँ तुम सम कोउ नाहीं।\nसेवक स्तुति करत सदाहीं॥', 'दान देने वालों में आपके समान कोई नहीं। सेवक सदा आपकी स्तुति करते हैं।', 'Among givers there is none like you; your servants praise you always.'],
  ['वेद नाम महिमा तव गाई।\nअकथ अनादि भेद नहिं पाई॥', 'वेदों ने आपके नाम की महिमा गाई, पर आप अकथनीय और अनादि हैं। आपका भेद कोई नहीं पा सका।', 'The Vedas sing the glory of your name, yet you are beyond words and without beginning; no one has found your secret.'],
  ['प्रकटी उदधि मंथन में ज्वाला।\nजरत सुरासुर भए विहाला॥', 'समुद्र मंथन में विष की ज्वाला प्रकट हुई, जिसमें जलते हुए देवता और असुर बेहाल हो गए।', 'When the ocean was churned, a fire of poison rose, and gods and demons alike were in agony.'],
  ['कीन्ही दया तहं करी सहाई।\nनीलकण्ठ तब नाम कहाई॥', 'तब आपने दया करके विष पी लिया और सबकी सहायता की। तभी से आप नीलकंठ कहलाए।', 'You showed mercy and drank it to save them, and so you came to be called Neelkanth, the blue-throated.'],
  ['पूजन रामचन्द्र जब कीन्हा।\nजीत के लंक विभीषण दीन्हा॥', 'जब श्री रामचंद्र जी ने आपका पूजन किया, तब उन्होंने लंका जीतकर विभीषण को दे दी।', 'When Ramchandra worshipped you, he won Lanka and gave it to Vibhishan.'],
  ['सहस कमल में हो रहे धारी।\nकीन्ह परीक्षा तबहिं पुरारी॥', 'जब हज़ार कमलों से आपकी पूजा हो रही थी, तब हे त्रिपुरारी, आपने भक्त की परीक्षा ली।', 'When you were being worshipped with a thousand lotuses, you, slayer of Tripura, put the devotee to the test.'],
  ['एक कमल प्रभु राखेउ जोई।\nकमल नयन पूजन चहं सोई॥', 'प्रभु ने एक कमल छिपा लिया, तो भक्त ने उसकी जगह अपना कमल जैसा नेत्र अर्पित करना चाहा।', 'The Lord hid one lotus, and the devotee resolved to offer his own lotus-like eye in its place.'],
  ['कठिन भक्ति देखी प्रभु शंकर।\nभए प्रसन्न दिए इच्छित वर॥', 'ऐसी कठिन भक्ति देखकर प्रभु शंकर प्रसन्न हुए और मनचाहा वर दिया।', 'Seeing such hard devotion, Lord Shankar was pleased and granted the boon he wished for.'],
  ['जय जय जय अनन्त अविनाशी।\nकरत कृपा सब के घटवासी॥', 'हे अनंत, अविनाशी, आपकी जय हो। आप सबके हृदय में बसकर सब पर कृपा करते हैं।', 'Victory to the endless, the undying, who dwells in every heart and is kind to all.'],
  ['दुष्ट सकल नित मोहि सतावै।\nभ्रमत रहौं मोहि चैन न आवै॥', 'सब बुराइयाँ मुझे रोज़ सताती हैं। मैं भटकता रहता हूँ और मुझे चैन नहीं मिलता।', 'All evils trouble me every day; I wander about and find no peace.'],
  ['त्राहि त्राहि मैं नाथ पुकारो।\nयेहि अवसर मोहि आन उबारो॥', 'हे नाथ, मैं “बचाओ, बचाओ” पुकारता हूँ। इसी समय आकर मेरा उद्धार कीजिए।', '“Save me, save me,” I cry, Lord. Come now and rescue me.'],
  ['लै त्रिशूल शत्रुन को मारो।\nसंकट से मोहि आन उबारो॥', 'त्रिशूल लेकर शत्रुओं को मारिए और आकर मुझे संकट से उबारिए।', 'Take up your trident, strike down my enemies, and come lift me out of trouble.'],
  ['मात-पिता भ्राता सब होई।\nसंकट में पूछत नहिं कोई॥', 'माता, पिता, भाई सब होते हैं, पर संकट में कोई नहीं पूछता।', 'Mother, father and brothers are all there, yet in trouble no one asks after me.'],
  ['स्वामी एक है आस तुम्हारी।\nआय हरहु मम संकट भारी॥', 'हे स्वामी, मुझे केवल आपकी आशा है। आकर मेरा भारी संकट दूर कीजिए।', 'Lord, you are my only hope. Come and take away my heavy trouble.'],
  ['धन निर्धन को देत सदा हीं।\nजो कोई जांचे सो फल पाहीं॥', 'आप निर्धनों को सदा धन देते हैं। जो भी आपसे माँगता है, उसे फल मिलता है।', 'You always give wealth to the poor; whoever asks of you receives.'],
  ['अस्तुति केहि विधि करैं तुम्हारी।\nक्षमहु नाथ अब चूक हमारी॥', 'हम आपकी स्तुति किस विधि से करें, नहीं जानते। हे नाथ, हमारी भूलें क्षमा कीजिए।', 'We do not know how to praise you rightly. Forgive our mistakes, Lord.'],
  ['शंकर हो संकट के नाशन।\nमंगल कारण विघ्न विनाशन॥', 'हे शंकर, आप संकटों का नाश करने वाले, मंगल करने वाले और विघ्न मिटाने वाले हैं।', 'Shankar, you destroy troubles, bring all that is good and remove obstacles.'],
  ['योगी यति मुनि ध्यान लगावैं।\nशारद नारद शीश नवावैं॥', 'योगी, यति और मुनि आपका ध्यान करते हैं, और सरस्वती और नारद जी आपको शीश नवाते हैं।', 'Yogis, ascetics and sages meditate on you; Saraswati and Narad bow their heads to you.'],
  ['नमो नमो जय नमः शिवाय।\nसुर ब्रह्मादिक पार न पाय॥', 'आपको बार-बार नमस्कार, ॐ नमः शिवाय। ब्रह्मा आदि देवता भी आपका पार नहीं पा सके।', 'Salutations again and again: Om Namah Shivaya. Even Brahma and the gods could not find your limit.'],
  ['जो यह पाठ करे मन लाई।\nता पर होत है शम्भु सहाई॥', 'जो मन लगाकर यह पाठ करता है, शंभु उसकी सहायता करते हैं।', 'Whoever reads this with a focused mind, Shambhu helps them.'],
  ['ऋनियाँ जो कोई हो अधिकारी।\nपाठ करे सो पावन हारी॥', 'जो कर्ज़ में डूबा हो, वह यह पाठ करे तो पवित्र होकर कर्ज़ से छूट जाता है।', 'Anyone burdened with debt who reads this is cleansed and set free.'],
  ['पुत्र हीन कर इच्छा जोई।\nनिश्चय शिव प्रसाद तेहि होई॥', 'जो संतान की इच्छा रखता है, उसे निश्चय ही शिव जी का प्रसाद मिलता है।', 'One who longs for a child surely receives Shiva’s blessing.'],
  ['पण्डित त्रयोदशी को लावे।\nध्यान पूर्वक होम करावे॥', 'त्रयोदशी के दिन पंडित को बुलाकर ध्यान से हवन कराए।', 'On Trayodashi, call a pandit and have a havan done with devotion.'],
  ['त्रयोदशी व्रत करै हमेशा।\nताके तन नहीं रहै कलेशा॥', 'जो हमेशा त्रयोदशी (प्रदोष) का व्रत करता है, उसके शरीर में कोई कष्ट नहीं रहता।', 'Whoever always keeps the Trayodashi (Pradosh) fast has no suffering in the body.'],
  ['धूप दीप नैवेद्य चढ़ावे।\nशंकर सम्मुख पाठ सुनावे॥', 'धूप, दीप और नैवेद्य चढ़ाकर शंकर जी के सामने यह पाठ सुनाए।', 'Offer incense, a lamp and food, and recite this before Shankar.'],
  ['जन्म जन्म के पाप नसावे।\nअन्त धाम शिवपुर में पावे॥', 'इससे जन्म-जन्म के पाप नष्ट होते हैं और अंत में शिवलोक में स्थान मिलता है।', 'The sins of many lives are destroyed, and at the end one reaches Shiva’s abode.'],
  ['कहैं अयोध्यादास आस तुम्हारी।\nजानि सकल दुःख हरहु हमारी॥', 'अयोध्यादास कहते हैं, मुझे आपकी ही आशा है। यह जानकर हमारे सब दुख हर लीजिए।', 'Ayodhyadas says: you are my hope; knowing this, take away all our sorrows.'],
]

export const SHIV_CHALISA: LibText = {
  id: 'shiv-chalisa',
  shelf: 'chalisa',
  title: { hi: 'श्री शिव चालीसा', en: 'Shri Shiv Chalisa' },
  by: { hi: 'अयोध्यादास कृत', en: 'By Ayodhyadas' },
  inside: { hi: '40 चौपाई · अर्थ सहित', en: '40 verses · with meanings' },
  img: '/art/thumb/JxJ15qeVisk.jpg',
  lang: 'hi',
  keys: 'shiv chalisa shiva shankar bholenath somvar monday',
  closing: '॥ हर हर महादेव ॥',
  verses: [
    {
      label: doha,
      text: 'जय गणेश गिरिजा सुवन, मंगल मूल सुजान।\nकहत अयोध्यादास तुम, देहु अभय वरदान॥',
      meaning: {
        hi: 'हे गिरिजा के पुत्र गणेश जी, आपकी जय हो। आप मंगल के मूल और ज्ञानी हैं। अयोध्यादास विनती करते हैं कि मुझे निर्भयता का वरदान दीजिए।',
        en: 'Victory to Ganesh, son of Girija, root of all that is good, and wise. Ayodhyadas prays: grant me the boon of fearlessness.',
      },
    },
    ...CHAUPAI.map(([text, hi, en]) => ({ text, meaning: { hi, en } })),
    {
      label: doha,
      text: 'नित्त नेम कर प्रातः ही, पाठ करौं चालीसा।\nतुम मेरी मनोकामना, पूर्ण करो जगदीश॥',
      meaning: {
        hi: 'मैं रोज़ नियम से सुबह यह चालीसा पढ़ता हूँ। हे जगदीश, मेरी मनोकामना पूरी कीजिए।',
        en: 'Every morning I read this chalisa as my daily practice. Lord of the world, fulfil my heart’s wish.',
      },
    },
    {
      label: doha,
      text: 'मगसर छठि हेमन्त ऋतु, संवत चौसठ जान।\nअस्तुति चालीसा शिवहि, पूर्ण कीन कल्याण॥',
      meaning: {
        hi: 'हेमंत ऋतु में, अगहन (मार्गशीर्ष) की षष्ठी को, संवत चौंसठ में, शिव जी की यह चालीसा सबके कल्याण के लिए पूरी हुई।',
        en: 'In the cool season, on the sixth day of Margashirsha in Samvat sixty-four, this chalisa in praise of Shiva was completed, for the good of all.',
      },
    },
  ],
}
