/** Shri Hanuman Chalisa by Goswami Tulsidas (public domain). Meanings written for Sanatan App. */
import type { Bi } from './diwaliVidhi'
import type { LibText } from './library/types'

export interface PathVerse {
  label: Bi
  text: string
  meaning: Bi
}

const doha = { hi: 'दोहा', en: 'Doha' }
const ch = (n: number) => ({ hi: `चौपाई ${n}`, en: `Chaupai ${n}` })

const CHAUPAI: [string, string, string][] = [
  ['जय हनुमान ज्ञान गुण सागर।\nजय कपीस तिहुँ लोक उजागर॥', 'हे हनुमान जी, आपकी जय हो। आप ज्ञान और गुणों के सागर हैं। हे वानरराज, आपकी जय हो, आप तीनों लोकों में प्रकाश फैलाते हैं।', 'Victory to Hanuman, ocean of wisdom and virtue. Victory to the lord of the vanaras, who lights up the three worlds.'],
  ['राम दूत अतुलित बल धामा।\nअंजनि-पुत्र पवनसुत नामा॥', 'आप श्री राम के दूत हैं, अतुलनीय बल के धाम हैं। आप अंजनि-पुत्र और पवनसुत के नाम से जाने जाते हैं।', 'You are Ram’s messenger and the home of matchless strength, known as Anjani’s son and son of the Wind.'],
  ['महावीर विक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥', 'आप महावीर हैं, पराक्रमी हैं, वज्र जैसे अंगों वाले हैं। आप बुरी बुद्धि को दूर करते हैं और अच्छी बुद्धि वालों के साथी हैं।', 'Great hero, mighty, with limbs strong as a thunderbolt, you drive away bad thinking and stand by those of good sense.'],
  ['कंचन बरन बिराज सुवेसा।\nकानन कुण्डल कुंचित केसा॥', 'आपका रंग सोने जैसा है और आप सुंदर वेश में शोभित हैं। कानों में कुंडल हैं और बाल घुँघराले हैं।', 'Golden in colour, you shine in fine clothes, with rings in your ears and curling hair.'],
  ['हाथ वज्र औ ध्वजा बिराजै।\nकाँधे मूँज जनेऊ साजै॥', 'आपके हाथ में वज्र (गदा) और ध्वजा शोभित है, और कंधे पर मूँज का जनेऊ सजा है।', 'In your hands shine the mace and the flag, and a sacred thread of munj grass rests on your shoulder.'],
  ['शंकर सुवन केसरीनन्दन।\nतेज प्रताप महा जग वन्दन॥', 'आप शंकर जी के अवतार और केसरी जी के पुत्र हैं। आपके तेज और प्रताप की सारा संसार वंदना करता है।', 'Born of Shankar, joy of Kesari, your radiance and glory are honoured by the whole world.'],
  ['विद्यावान गुणी अति चातुर।\nराम काज करिबे को आतुर॥', 'आप विद्वान हैं, गुणवान हैं, बहुत चतुर हैं, और श्री राम के काम करने को सदा उत्सुक रहते हैं।', 'Learned, virtuous and very wise, you are always eager to do Ram’s work.'],
  ['प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥', 'आप प्रभु की कथा सुनने के रसिया हैं। श्री राम, लक्ष्मण और सीता जी आपके मन में बसते हैं।', 'You delight in hearing the Lord’s story. Ram, Lakshman and Sita live in your heart.'],
  ['सूक्ष्म रूप धरि सियहिं दिखावा।\nविकट रूप धरि लंक जरावा॥', 'आपने छोटा रूप धरकर सीता जी को दर्शन दिए और भयंकर रूप धरकर लंका जलाई।', 'Taking a tiny form you appeared before Sita, and taking a fearsome form you set Lanka on fire.'],
  ['भीम रूप धरि असुर संहारे।\nरामचन्द्र के काज संवारे॥', 'आपने विशाल रूप धरकर असुरों का संहार किया और श्री रामचंद्र जी के काम पूरे किए।', 'Taking a mighty form you destroyed the demons and completed Ramchandra’s tasks.'],
  ['लाय सजीवन लखन जियाये।\nश्रीरघुवीर हरषि उर लाये॥', 'आप संजीवनी बूटी लाए और लक्ष्मण जी को जीवित किया। श्री रघुवीर ने प्रसन्न होकर आपको गले लगा लिया।', 'You brought the Sanjeevani herb and brought Lakshman back to life, and Shri Raghuvir joyfully held you to his heart.'],
  ['रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥', 'श्री रघुपति ने आपकी बहुत प्रशंसा की और कहा, “तुम मुझे भाई भरत के समान प्रिय हो।”', 'Raghupati praised you greatly and said, “You are as dear to me as my brother Bharat.”'],
  ['सहस बदन तुम्हरो यश गावैं।\nअस कहि श्री पति कंठ लगावैं॥', '“हज़ार मुखों वाले शेषनाग भी तुम्हारा यश गाएँ,” ऐसा कहकर लक्ष्मीपति श्री राम ने आपको गले लगाया।', '“May the thousand-mouthed Shesh sing your glory,” said the Lord of Lakshmi, and embraced you.'],
  ['सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥', 'सनक आदि ऋषि, ब्रह्मा आदि देवता, मुनिश्रेष्ठ, नारद जी, सरस्वती जी और शेषनाग भी,', 'Sanak and the sages, Brahma and the gods, the great munis, Narad, Saraswati and the king of serpents,'],
  ['जम कुबेर दिकपाल जहां ते।\nकवि कोबिद कहि सके कहां ते॥', 'यमराज, कुबेर और सब दिशाओं के रक्षक भी आपका यश पूरा नहीं कह सकते, तो कवि और विद्वान कैसे कह सकेंगे?', 'Yama, Kubera and the guardians of the directions cannot tell all your glory; how then could poets and scholars?'],
  ['तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥', 'आपने सुग्रीव पर बड़ा उपकार किया। उन्हें श्री राम से मिलाया और राजपद दिलाया।', 'You did Sugriva a great kindness: you brought him to Ram and gave him back his throne.'],
  ['तुम्हरो मन्त्र विभीषन माना।\nलंकेश्वर भये सब जग जाना॥', 'विभीषण ने आपकी सलाह मानी और वे लंका के राजा बने, यह सारा संसार जानता है।', 'Vibhishan followed your counsel and became king of Lanka, as the whole world knows.'],
  ['जुग सहस्र योजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥', 'हज़ारों योजन दूर स्थित सूर्य को आपने मीठा फल समझकर निगल लिया था।', 'The sun, thousands of yojanas away, you swallowed, taking it for a sweet fruit.'],
  ['प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लांघि गए अचरज नाहीं॥', 'प्रभु की अँगूठी मुँह में रखकर आप समुद्र लाँघ गए, इसमें कोई आश्चर्य नहीं।', 'Holding the Lord’s ring in your mouth you leapt across the ocean; no wonder in that.'],
  ['दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥', 'संसार में जितने भी कठिन काम हैं, वे सब आपकी कृपा से आसान हो जाते हैं।', 'Every hard task in the world becomes easy by your grace.'],
  ['राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥', 'आप श्री राम के द्वार के रखवाले हैं। आपकी आज्ञा के बिना वहाँ कोई प्रवेश नहीं कर सकता।', 'You guard Ram’s door, and no one enters without your leave.'],
  ['सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डरना॥', 'आपकी शरण में आने वाले को सब सुख मिलते हैं। जब आप रक्षक हैं, तो किसी से क्या डरना?', 'Whoever comes to your shelter finds every happiness. With you as protector, why fear anyone?'],
  ['आपन तेज सम्हारो आपै।\nतीनों लोक हांक तें कांपै॥', 'अपने तेज को आप ही सँभाल सकते हैं। आपकी एक हुंकार से तीनों लोक काँप उठते हैं।', 'Only you can hold your own power; the three worlds tremble at your roar.'],
  ['भूत पिशाच निकट नहिं आवै।\nमहावीर जब नाम सुनावै॥', 'जहाँ महावीर का नाम लिया जाता है, वहाँ भूत-पिशाच पास नहीं आते।', 'Ghosts and evil spirits do not come near where the name of Mahavir is spoken.'],
  ['नासै रोग हरै सब पीरा।\nजपत निरंतर हनुमत बीरा॥', 'वीर हनुमान जी का निरंतर जाप करने से रोग नष्ट होते हैं और सब पीड़ा दूर होती है।', 'Chanting the name of brave Hanuman without pause destroys disease and takes away all pain.'],
  ['संकट ते हनुमान छुड़ावै।\nमन क्रम वचन ध्यान जो लावै॥', 'जो मन, कर्म और वचन से हनुमान जी का ध्यान करता है, उसे वे हर संकट से छुड़ाते हैं।', 'Hanuman frees from every trouble those who hold him in mind, deed and word.'],
  ['सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥', 'तपस्वी राजा श्री राम सबसे ऊपर हैं, और उनके सब काम आपने पूरे किए।', 'Above all stands Ram, the ascetic king, and you accomplished all his work.'],
  ['और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥', 'जो कोई भी अपनी इच्छा लेकर आपके पास आता है, उसे जीवन में असीम फल मिलता है।', 'Whoever brings you any wish receives its fruit in life beyond measure.'],
  ['चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥', 'चारों युगों में आपका प्रताप है। आपका प्रकाश सारे जगत में प्रसिद्ध है।', 'Your glory shines through all four yugas, and your light is known throughout the world.'],
  ['साधु सन्त के तुम रखवारे।\nअसुर निकन्दन राम दुलारे॥', 'आप साधु-संतों के रक्षक हैं, असुरों का नाश करने वाले हैं और श्री राम के दुलारे हैं।', 'You protect the saints and the good, you destroy the demons, and you are Ram’s beloved.'],
  ['अष्ट सिद्धि नवनिधि के दाता।\nअस बर दीन जानकी माता॥', 'माता जानकी ने आपको वरदान दिया है कि आप आठ सिद्धियाँ और नौ निधियाँ दे सकें।', 'Mother Janaki gave you the boon to grant the eight siddhis and the nine treasures.'],
  ['राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥', 'राम नाम का अमृत आपके पास है। आप सदा श्री रघुपति के सेवक बने रहें।', 'You hold the nectar of Ram’s name. May you ever remain Raghupati’s servant.'],
  ['तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥', 'आपके भजन से श्री राम मिलते हैं और जन्म-जन्म के दुख भूल जाते हैं।', 'Singing your praise, one reaches Ram and forgets the sorrows of many lifetimes.'],
  ['अन्तकाल रघुबर पुर जाई।\nजहाँ जन्म हरि-भक्त कहाई॥', 'अंत समय में भक्त श्री रघुबर के धाम जाता है, और जहाँ भी जन्म ले, हरि का भक्त कहलाता है।', 'At the end the devotee goes to Raghuvar’s abode, and wherever born, is called a devotee of Hari.'],
  ['और देवता चित्त न धरई।\nहनुमत सेई सर्व सुख करई॥', 'दूसरे देवताओं का ध्यान न भी करे, तो भी हनुमान जी की सेवा से सब सुख मिलते हैं।', 'Even without turning the mind to other gods, serving Hanuman brings every happiness.'],
  ['संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥', 'जो बलवान वीर हनुमान जी का स्मरण करता है, उसके संकट कट जाते हैं और सब पीड़ा मिट जाती है।', 'Troubles are cut away and all pain is erased for one who remembers mighty, brave Hanuman.'],
  ['जय जय जय हनुमान गोसाई।\nकृपा करहु गुरुदेव की नाई॥', 'हे स्वामी हनुमान जी, आपकी जय हो, जय हो, जय हो। गुरुदेव की तरह मुझ पर कृपा कीजिए।', 'Victory, victory, victory to Lord Hanuman. Be kind to me as a guru is.'],
  ['जो शत बार पाठ कर कोई।\nछूटहिं बंदि महा सुख होई॥', 'जो कोई इसका सौ बार पाठ करता है, वह बंधनों से छूट जाता है और उसे महान सुख मिलता है।', 'Whoever recites this a hundred times is freed from bonds and finds great joy.'],
  ['जो यह पढ़ै हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥', 'जो यह हनुमान चालीसा पढ़ता है, उसे सिद्धि मिलती है। इसके साक्षी स्वयं गौरीपति शिव जी हैं।', 'Whoever reads this Hanuman Chalisa succeeds; Gauri’s lord, Shiva himself, is witness.'],
  ['तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महँ डेरा॥', 'तुलसीदास सदा हरि के सेवक हैं। हे नाथ, मेरे हृदय में निवास कीजिए।', 'Tulsidas, ever the servant of Hari, prays: Lord, make your home in my heart.'],
]

export const CHALISA: PathVerse[] = [
  {
    label: doha,
    text: 'श्री गुरु चरन सरोज रज, निज मनु मुकुर सुधारि।\nबरनउं रघुबर विमल जसु, जो दायकु फल चारि॥',
    meaning: {
      hi: 'श्री गुरु के चरण-कमलों की धूल से अपने मन रूपी दर्पण को साफ़ करके, मैं श्री रघुबर के निर्मल यश का वर्णन करता हूँ, जो धर्म, अर्थ, काम और मोक्ष, चारों फल देता है।',
      en: 'Cleaning the mirror of my mind with the dust of my guru’s lotus feet, I sing the pure glory of Raghuvar, which gives all four fruits of life: dharma, wealth, fulfilment and liberation.',
    },
  },
  {
    label: doha,
    text: 'बुद्धिहीन तनु जानिकै, सुमिरौं पवन-कुमार।\nबल बुद्धि विद्या देहु मोहिं, हरहु कलेश विकार॥',
    meaning: {
      hi: 'अपने को बुद्धिहीन जानकर मैं पवनपुत्र हनुमान जी का स्मरण करता हूँ। हे प्रभु, मुझे बल, बुद्धि और विद्या दीजिए और मेरे दुख और दोष दूर कीजिए।',
      en: 'Knowing myself to be without wisdom, I remember you, son of the Wind. Give me strength, wisdom and knowledge, and take away my troubles and faults.',
    },
  },
  ...CHAUPAI.map(([text, hi, en], i) => ({ label: ch(i + 1), text, meaning: { hi, en } })),
  {
    label: doha,
    text: 'पवनतनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',
    meaning: {
      hi: 'हे पवनपुत्र, संकट हरने वाले, मंगल की मूर्ति, हे देवराज, श्री राम, लक्ष्मण और सीता जी के साथ मेरे हृदय में बसिए।',
      en: 'Son of the Wind, remover of troubles, form of all that is auspicious, king among gods: live in my heart, together with Ram, Lakshman and Sita.',
    },
  },
]

/** The chalisa as a Path library text: dohas keep their label, chaupais are numbered by the reader. */
export const HANUMAN_CHALISA: LibText = {
  id: 'chalisa',
  shelf: 'chalisa',
  title: { hi: 'श्री हनुमान चालीसा', en: 'Shri Hanuman Chalisa' },
  by: { hi: 'गोस्वामी तुलसीदास कृत', en: 'By Goswami Tulsidas' },
  inside: { hi: '40 चौपाई · अर्थ सहित', en: '40 verses · with meanings' },
  img: '/art/thumb/1qvWMJv_NUU.jpg',
  lang: 'hi',
  keys: 'hanuman chalisa bajrangbali tulsidas mangalvar tuesday shanivar',
  closing: '॥ जय श्री राम ॥',
  verses: CHALISA.map((v) => (v.label === doha ? v : { text: v.text, meaning: v.meaning })),
}
