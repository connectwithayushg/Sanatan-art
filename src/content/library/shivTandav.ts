/** Shiv Tandav Stotram, attributed to Ravana (traditional, public domain), in its usually recited form, checked against Sanskrit Wikisource. Meanings written for Sanatan App. */
import type { LibText } from './types'

const SHLOKA: [string, string, string][] = [
  [
    'जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्॥',
    'जिनकी जटाओं के वन से बहती गंगा की धारा ने धरती को पवित्र किया, जिनके गले में साँपों की ऊँची माला लटकती है, और जिन्होंने डम-डम बजते डमरू के साथ प्रचंड तांडव किया, वे शिव हमारा कल्याण करें।',
    'With the Ganga pouring from the forest of his hair to make the ground holy, a tall garland of serpents hanging from his neck, he danced the fierce Tandav to the drum’s dam-dam-dam. May that Shiva bring us good.',
  ],
  [
    'जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी-\nविलोलवीचिवल्लरीविराजमानमूर्धनि।\nधगद्धगद्धगज्ज्वलल्ललाटपट्टपावके\nकिशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम॥',
    'जिनका मस्तक जटाओं में घूमती गंगा की चंचल लहरों से शोभित है, जिनके ललाट पर धक-धक अग्नि जलती है, और जिनके सिर पर बालचंद्र है, उन शिव में मेरा प्रेम हर क्षण बना रहे।',
    'His head is adorned by the restless waves of the heavenly river whirling in his locks, fire blazes on his forehead, and a young moon crowns him. May my love for him grow every moment.',
  ],
  [
    'धराधरेन्द्रनन्दिनीविलासबन्धुबन्धुर-\nस्फुरद्दिगन्तसन्ततिप्रमोदमानमानसे।\nकृपाकटाक्षधोरणीनिरुद्धदुर्धरापदि\nक्वचिद्दिगम्बरे मनो विनोदमेतु वस्तुनि॥',
    'पर्वतराज की पुत्री पार्वती के साथ जिनका मन प्रसन्न रहता है, जो सब दिशाओं के प्राणियों में बसते हैं, और जिनकी कृपा-दृष्टि कठिन विपत्तियों को रोक देती है, उन दिगंबर शिव में मेरा मन आनंद पाए।',
    'His mind delights in the mountain king’s daughter, he lives in all beings to the ends of every direction, and his merciful glance stops the hardest calamities. May my mind find joy in that sky-clad Lord.',
  ],
  [
    'जटाभुजङ्गपिङ्गलस्फुरत्फणामणिप्रभा-\nकदम्बकुङ्कुमद्रवप्रलिप्तदिग्वधूमुखे।\nमदान्धसिन्धुरस्फुरत्त्वगुत्तरीयमेदुरे\nमनो विनोदमद्भुतं बिभर्तु भूतभर्तरि॥',
    'जटाओं में लिपटे साँपों के फनों की मणियों के प्रकाश से दिशाएँ केसर से रँगी लगती हैं, और जो मतवाले हाथी की खाल ओढ़े हैं, उन भूतनाथ में मेरा मन अद्भुत आनंद पाए।',
    'The gems on the hoods of the serpents in his locks paint every direction as if with saffron, and he wears the hide of a maddened elephant. May my mind find wondrous delight in that lord of all beings.',
  ],
  [
    'सहस्रलोचनप्रभृत्यशेषलेखशेखर-\nप्रसूनधूलिधोरणीविधूसराङ्घ्रिपीठभूः।\nभुजङ्गराजमालया निबद्धजाटजूटकः\nश्रियै चिराय जायतां चकोरबन्धुशेखरः॥',
    'इंद्र आदि सब देवताओं के सिर के फूलों की धूल से जिनके चरण धूसर हैं, और जिनकी जटाएँ नागराज की माला से बँधी हैं, वे चंद्रशेखर शिव हमें चिरकाल तक समृद्धि दें।',
    'His feet are grey with pollen from the flowers on the heads of Indra and all the gods who bow to him, and his hair is tied with the king of serpents. May the moon-crowned Lord grant us lasting prosperity.',
  ],
  [
    'ललाटचत्वरज्वलद्धनञ्जयस्फुलिङ्गभा-\nनिपीतपञ्चसायकं नमन्निलिम्पनायकम्।\nसुधामयूखलेखया विराजमानशेखरं\nमहाकपालि सम्पदे शिरो जटालमस्तु नः॥',
    'जिन्होंने ललाट की अग्नि की चिंगारी से कामदेव को भस्म कर दिया, जिन्हें देवराज इंद्र नमन करते हैं, जिनके सिर पर चंद्रमा की कला शोभित है, वे जटाधारी कपाली शिव हमें संपत्ति दें।',
    'He burned Kamadeva with a spark from the fire on his brow, Indra bows to him, and the crescent moon adorns his head. May that matted-haired, skull-bearing Lord bring us wealth.',
  ],
  [
    'करालभालपट्टिकाधगद्धगद्धगज्ज्वल-\nद्धनञ्जयाहुतीकृतप्रचण्डपञ्चसायके।\nधराधरेन्द्रनन्दिनीकुचाग्रचित्रपत्रक-\nप्रकल्पनैकशिल्पिनि त्रिलोचने रतिर्मम॥',
    'जिनके भयंकर ललाट पर धक-धक जलती अग्नि में कामदेव की आहुति हो गई, और जो पार्वती जी के शृंगार के चित्र बनाने वाले एकमात्र कलाकार हैं, उन त्रिनेत्र शिव में मेरा प्रेम हो।',
    'In the fire blazing on his fierce forehead, Kamadeva was offered up, and he alone is the artist who paints Parvati’s decorations. May my love rest in the three-eyed Lord.',
  ],
  [
    'नवीनमेघमण्डलीनिरुद्धदुर्धरस्फुरत्-\nकुहूनिशीथिनीतमःप्रबन्धबद्धकन्धरः।\nनिलिम्पनिर्झरीधरस्तनोतु कृत्तिसिन्धुरः\nकलानिधानबन्धुरः श्रियं जगद्धुरन्धरः॥',
    'जिनका कंठ नए बादलों से घिरी अमावस की आधी रात जैसा काला है, जो गंगा को धारण करते हैं, गजचर्म ओढ़ते हैं, चंद्रमा से सुंदर हैं और जगत का भार उठाते हैं, वे शिव हमें समृद्धि दें।',
    'His throat is dark as a new-moon midnight hidden by fresh clouds; he bears the Ganga, wears the elephant hide, is lovely with the moon, and carries the burden of the world. May he grant us prosperity.',
  ],
  [
    'प्रफुल्लनीलपङ्कजप्रपञ्चकालिमप्रभा-\nवलम्बिकण्ठकन्दलीरुचिप्रबद्धकन्धरम्।\nस्मरच्छिदं पुरच्छिदं भवच्छिदं मखच्छिदं\nगजच्छिदान्धकच्छिदं तमन्तकच्छिदं भजे॥',
    'जिनका कंठ खिले नीले कमलों जैसा श्यामल चमकता है, और जिन्होंने कामदेव, त्रिपुर, संसार के बंधन, दक्ष के यज्ञ, गजासुर, अंधकासुर और यमराज का अंत किया, मैं उन शिव को भजता हूँ।',
    'His throat glows dark as blooming blue lotuses. He cut down Kama, the three cities, worldly bondage, Daksha’s sacrifice, the elephant demon, Andhaka and Death himself. Him I worship.',
  ],
  [
    'अखर्वसर्वमङ्गलाकलाकदम्बमञ्जरी-\nरसप्रवाहमाधुरीविजृम्भणामधुव्रतम्।\nस्मरान्तकं पुरान्तकं भवान्तकं मखान्तकं\nगजान्तकान्धकान्तकं तमन्तकान्तकं भजे॥',
    'जो सर्वमंगला पार्वती की कलाओं के मधुर रस का पान करने वाले भौंरे हैं, और जिन्होंने काम, त्रिपुर, संसार, यज्ञ, गजासुर, अंधक और यम का अंत किया, मैं उन शिव को भजता हूँ।',
    'He is the bee that drinks the sweet nectar of the arts of all-auspicious Parvati. The ender of Kama, Tripura, worldly life, the sacrifice, the elephant demon, Andhaka and Death: him I worship.',
  ],
  [
    'जयत्वदभ्रविभ्रमभ्रमद्भुजङ्गमश्वस-\nद्विनिर्गमत्क्रमस्फुरत्करालभालहव्यवाट्।\nधिमिद्धिमिद्धिमिध्वनन्मृदङ्गतुङ्गमङ्गल-\nध्वनिक्रमप्रवर्तितप्रचण्डताण्डवः शिवः॥',
    'जिनके ललाट की भयंकर अग्नि घूमते साँपों की फुफकार से और भड़कती है, और धिमि-धिमि बजते मृदंग की मंगल ध्वनि के साथ जिनका प्रचंड तांडव चलता है, उन शिव की जय हो।',
    'The fierce fire on his brow flares with the hissing of whirling serpents, and his mighty Tandav moves to the dhimi-dhimi of the mridang. Victory to Shiva.',
  ],
  [
    'दृषद्विचित्रतल्पयोर्भुजङ्गमौक्तिकस्रजो-\nर्गरिष्ठरत्नलोष्ठयोः सुहृद्विपक्षपक्षयोः।\nतृणारविन्दचक्षुषोः प्रजामहीमहेन्द्रयोः\nसमप्रवृत्तिकः कदा सदाशिवं भजाम्यहम्॥',
    'पत्थर और सुंदर बिछौने में, साँप और मोतियों की माला में, कीमती रत्न और मिट्टी के ढेले में, मित्र और शत्रु में, तिनके और कमल-नयनी में, प्रजा और राजा में एक जैसा भाव रखकर मैं कब सदाशिव को भजूँगा?',
    'When will I worship Sadashiva, seeing a stone and a fine bed, a snake and a pearl necklace, a jewel and a clod of earth, friend and foe, a blade of grass and a lotus-eyed beauty, a subject and a king, all alike?',
  ],
  [
    'कदा निलिम्पनिर्झरीनिकुञ्जकोटरे वसन्\nविमुक्तदुर्मतिः सदा शिरःस्थमञ्जलिं वहन्।\nविमुक्तलोललोचनो ललामभाललग्नकः\nशिवेति मन्त्रमुच्चरन् कदा सुखी भवाम्यहम्॥',
    'कब मैं गंगा किनारे के कुंज में रहते हुए, बुरे विचारों से मुक्त होकर, सदा सिर पर हाथ जोड़े, “शिव” मंत्र जपते हुए सुखी होऊँगा?',
    'When will I be happy, living in a grove on the bank of the Ganga, free of bad thoughts, hands always folded above my head, chanting the mantra “Shiva”?',
  ],
  [
    'निलिम्पनाथनागरीकदम्बमौलमल्लिका-\nनिगुम्फनिर्भरक्षरन्मधूष्णिकामनोहरः।\nतनोतु नो मनोमुदं विनोदिनीमहर्निशं\nपरश्रियः परं पदं तदङ्गजत्विषां चयः॥',
    'देवांगनाओं के जूड़ों में गुँथी मल्लिका की मालाओं से टपकते मधु की सुगंध जैसी मनोहर, शिव के अंगों की कांति हमारे मन को दिन-रात आनंद दे।',
    'Like the fragrance of honey dripping from jasmine woven into the hair of heavenly maidens, may the radiance of Shiva’s body delight our minds day and night.',
  ],
  [
    'प्रचण्डवाडवानलप्रभाशुभप्रचारणी\nमहाष्टसिद्धिकामिनीजनावहूतजल्पना।\nविमुक्तवामलोचनाविवाहकालिकध्वनिः\nशिवेति मन्त्रभूषणा जगज्जयाय जायताम्॥',
    'समुद्र की प्रचंड वडवाग्नि जैसी पापों को जलाने वाली, आठों सिद्धियों को बुलाने वाली, और “शिव” मंत्र से सजी, शिव-पार्वती विवाह की मंगल ध्वनि संसार की विजय के लिए हो।',
    'Burning away sin like the fierce fire beneath the sea, calling forth the eight siddhis, adorned with the mantra “Shiva”: may the auspicious sound of Shiva’s wedding bring victory to the world.',
  ],
  [
    'इमं हि नित्यमेवमुक्तमुत्तमोत्तमं स्तवं\nपठन्स्मरन्ब्रुवन्नरो विशुद्धिमेति सन्ततम्।\nहरे गुरौ सुभक्तिमाशु याति नान्यथा गतिं\nविमोहनं हि देहिनां सुशङ्करस्य चिन्तनम्॥',
    'जो मनुष्य इस उत्तम स्तोत्र को रोज़ पढ़ता, याद करता और बोलता है, वह सदा पवित्र रहता है और गुरु शिव की भक्ति जल्दी पाता है। इसके सिवा कोई गति नहीं। शंकर का चिंतन ही प्राणियों का मोह दूर करता है।',
    'Whoever reads, remembers and recites this finest of hymns every day is always purified and quickly gains devotion to Shiva, the guru; there is no other way. Thinking of Shankar removes the delusion of all beings.',
  ],
]

export const SHIV_TANDAV: LibText = {
  id: 'shiv-tandav',
  shelf: 'stotra',
  title: { hi: 'शिव तांडव स्तोत्र', en: 'Shiv Tandav Stotram' },
  by: { hi: 'रावण कृत', en: 'Attributed to Ravana' },
  inside: { hi: '16 श्लोक · अर्थ सहित', en: '16 shlokas · with meanings' },
  img: '/art/path/shiv.webp',
  lang: 'sa',
  keys: 'shiv tandav stotram tandava ravan shiva sanskrit',
  closing: '॥ इति रावणकृतं शिवताण्डवस्तोत्रं सम्पूर्णम् ॥',
  verses: [
    ...SHLOKA.map(([text, hi, en]) => ({ text, meaning: { hi, en } })),
    {
      label: { hi: 'फलश्रुति', en: 'Phalashruti' },
      text: 'पूजावसानसमये दशवक्त्रगीतं\nयः शम्भुपूजनपरं पठति प्रदोषे।\nतस्य स्थिरां रथगजेन्द्रतुरङ्गयुक्तां\nलक्ष्मीं सदैव सुमुखीं प्रददाति शम्भुः॥',
      meaning: {
        hi: 'जो पूजा के अंत में प्रदोष के समय रावण का गाया यह स्तोत्र पढ़ता है, शंभु उसे रथ, हाथी और घोड़ों सहित स्थिर लक्ष्मी देते हैं।',
        en: 'Whoever reads this hymn, sung by ten-headed Ravana, at the end of puja in the Pradosh hour is granted by Shambhu lasting wealth, with chariots, elephants and horses.',
      },
    },
  ],
}
