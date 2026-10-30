/** Sankat Mochan Hanuman Ashtak by Goswami Tulsidas (public domain). Meanings written for Sanatan App. */
import type { LibText } from './types'

const REFRAIN = 'को नहिं जानत है जग में कपि, संकटमोचन नाम तिहारो॥'

const STANZAS: [string, string, string][] = [
  [
    'बाल समय रबि भक्षि लियो तब, तीनहुँ लोक भयो अँधियारो।\nताहि सों त्रास भयो जग को, यह संकट काहु सों जात न टारो॥\nदेवन आनि करी बिनती तब, छाँड़ि दियो रबि कष्ट निवारो।',
    'बचपन में आपने सूर्य को निगल लिया, तो तीनों लोकों में अँधेरा छा गया। सारा जगत डर गया और यह संकट किसी से टल नहीं रहा था। तब देवताओं ने आकर विनती की, और आपने सूर्य को छोड़कर कष्ट दूर किया। हे कपि, संसार में कौन नहीं जानता कि आपका नाम संकटमोचन है?',
    'As a child you swallowed the sun, and darkness fell on the three worlds. The whole world was afraid, and no one could lift this trouble. When the gods came and pleaded, you let the sun go and ended their distress. Who in the world does not know your name is Sankat Mochan, remover of troubles?',
  ],
  [
    'बालि की त्रास कपीस बसै गिरि, जात महाप्रभु पंथ निहारो।\nचौंकि महामुनि साप दियो तब, चाहिय कौन बिचार बिचारो॥\nकै द्विज रूप लिवाय महाप्रभु, सो तुम दास के सोक निवारो।',
    'बाली के डर से वानरराज सुग्रीव पर्वत पर रहते थे और महाप्रभु श्री राम की राह देखते थे। महामुनि के शाप के कारण बाली वहाँ नहीं आ सकता था, फिर भी सुग्रीव चिंता में थे कि क्या उपाय करें। तब आप ब्राह्मण का रूप धरकर महाप्रभु को ले आए और अपने सेवक का शोक दूर किया।',
    'Afraid of Bali, Sugriva lived on the mountain, watching the road for the great Lord. A sage’s curse kept Bali away, yet Sugriva did not know what to do. You took the form of a brahmin, brought the Lord to him, and ended your servant’s grief.',
  ],
  [
    'अंगद के सँग लेन गये सिय, खोज कपीस यह बैन उचारो।\nजीवत ना बचिहौ हम सों जु, बिना सुधि लाए इहाँ पगु धारो॥\nहेरि थके तट सिंधु सबै तब, लाय सिया-सुधि प्रान उबारो।',
    'आप अंगद के साथ सीता जी को खोजने गए। सुग्रीव ने कहा था कि जो सीता जी की खबर लाए बिना लौटेगा, वह जीवित नहीं बचेगा। समुद्र के किनारे सब खोजते-खोजते थक गए, तब आपने सीता जी की खबर लाकर सबके प्राण बचाए।',
    'You went with Angad to search for Sita, and Sugriva had warned that no one who came back without news of her would be spared. All searched until they were exhausted on the shore of the sea; then you brought news of Sita and saved everyone’s lives.',
  ],
  [
    'रावन त्रास दई सिय को सब, राक्षसि सों कहि सोक निवारो।\nताहि समय हनुमान महाप्रभु, जाय महा रजनीचर मारो॥\nचाहत सीय असोक सों आगि सु, दै प्रभु मुद्रिका सोक निवारो।',
    'रावण ने सीता जी को बहुत डराया और राक्षसियों से कहा कि उनका शोक छुड़वाकर उन्हें मनाएँ। उसी समय महाप्रभु हनुमान जी ने जाकर बड़े-बड़े राक्षसों को मारा। सीता जी अशोक वृक्ष से अग्नि माँग रही थीं, तब आपने प्रभु की अँगूठी देकर उनका शोक दूर किया।',
    'Ravana terrified Sita and told the demonesses to wear her down. Then great Hanuman went and slew mighty demons. When Sita begged the Ashoka tree for fire, you gave her the Lord’s ring and ended her sorrow.',
  ],
  [
    'बान लग्यो उर लछिमन के तब, प्रान तजे सुत रावन मारो।\nलै गृह बैद्य सुषेन समेत, तबै गिरि द्रोन सु बीर उपारो॥\nआनि सजीवन हाथ दई तब, लछिमन के तुम प्रान उबारो।',
    'जब रावण के पुत्र मेघनाद का बाण लक्ष्मण जी की छाती में लगा और उनके प्राण जाने लगे, तब आप वैद्य सुषेण को उनके घर समेत ले आए और द्रोण पर्वत उखाड़ लाए। संजीवनी लाकर हाथ में दी और लक्ष्मण जी के प्राण बचाए।',
    'When the arrow of Ravana’s son struck Lakshman in the chest and his life was slipping away, you brought the physician Sushen along with his house, and uprooted Mount Drona. You placed the Sanjeevani in his hands and saved Lakshman’s life.',
  ],
  [
    'रावन जुद्ध अजान कियो तब, नाग कि फाँस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल, मोह भयो यह संकट भारो॥\nआनि खगेस तबै हनुमान जु, बंधन काटि सुत्रास निवारो।',
    'रावण ने छल से युद्ध किया और सब पर नागपाश डाल दिया। श्री रघुनाथ समेत सारी सेना मूर्छित हो गई। यह भारी संकट था। तब हनुमान जी, आप गरुड़ जी को ले आए, जिन्होंने बंधन काटकर भय दूर किया।',
    'Ravana fought by trickery and cast the serpent noose over all, and Shri Raghunath and the whole army fell senseless. It was a grave crisis. Then you brought Garuda, who cut the bonds and ended the terror.',
  ],
  [
    'बंधु समेत जबै अहिरावन, लै रघुनाथ पताल सिधारो।\nदेबिहिं पूजि भली बिधि सों बलि, देउ सबै मिलि मंत्र बिचारो॥\nजाय सहाय भयो तब ही, अहिरावन सैन्य समेत सँहारो।',
    'जब अहिरावण श्री रघुनाथ और उनके भाई को पाताल ले गया, और वहाँ सबने मिलकर देवी की पूजा करके उनकी बलि देने का विचार किया, तब आप सहायता के लिए पहुँचे और अहिरावण का सेना सहित संहार किया।',
    'When Ahiravan carried Shri Raghunath and his brother down to the underworld, and all there plotted to sacrifice them after worshipping the goddess, you came to help and destroyed Ahiravan with his whole army.',
  ],
  [
    'काज किये बड़ देवन के तुम, बीर महाप्रभु देखि बिचारो।\nकौन सो संकट मोर गरीब को, जो तुमसों नहिं जात है टारो॥\nबेगि हरो हनुमान महाप्रभु, जो कछु संकट होय हमारो।',
    'हे वीर महाप्रभु, आपने देवताओं के बड़े-बड़े काम किए। ज़रा सोचकर देखिए, मुझ गरीब का ऐसा कौन सा संकट है जो आपसे न टल सके? हे महाप्रभु हनुमान, मेरा जो भी संकट हो, उसे जल्दी हर लीजिए।',
    'Brave great Lord, you did great deeds for the gods. Think: what trouble of a poor soul like me could you not remove? Great Hanuman, quickly take away whatever trouble is mine.',
  ],
]

export const HANUMAN_ASHTAK: LibText = {
  id: 'hanuman-ashtak',
  shelf: 'stotra',
  title: { hi: 'संकटमोचन हनुमान अष्टक', en: 'Sankat Mochan Hanuman Ashtak' },
  by: { hi: 'गोस्वामी तुलसीदास कृत', en: 'By Goswami Tulsidas' },
  inside: { hi: '8 छंद · अर्थ सहित', en: '8 stanzas · with meanings' },
  img: '/art/path/hanuman.webp',
  lang: 'hi',
  keys: 'hanuman ashtak ashtakam sankat mochan bajrangbali mangalvar tuesday',
  closing: '॥ जय श्री राम ॥',
  verses: [
    ...STANZAS.map(([text, hi, en]) => ({ text: `${text}\n${REFRAIN}`, meaning: { hi, en } })),
    {
      label: { hi: 'दोहा', en: 'Doha' },
      text: 'लाल देह लाली लसे, अरु धरि लाल लँगूर।\nबज्र देह दानव दलन, जय जय जय कपि सूर॥',
      meaning: {
        hi: 'आपका शरीर लाल है और उस पर लाली शोभित है, और आपकी पूँछ भी लाल है। वज्र जैसे शरीर वाले, दानवों का नाश करने वाले कपिवीर, आपकी जय हो, जय हो, जय हो।',
        en: 'Your body is red and glows crimson, and your tail too is red. Thunderbolt-bodied destroyer of demons, victory, victory, victory to you, hero among the vanaras.',
      },
    },
  ],
}
