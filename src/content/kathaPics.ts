import type { Bi } from './diwaliVidhi'

/** A katha picture, shown after paragraph `after` (0 = after the first paragraph). Paintings made for Sanatan App, in the spirit of classic story-book art. */
export interface KathaPic {
  src: string
  alt: Bi
  after: number
}

const pic = (name: string, after: number, hi: string, en: string): KathaPic => ({ src: `/art/katha/${name}.webp`, alt: { hi, en }, after })

export const KATHA_PICS: Record<string, KathaPic[]> = {
  'sharad-purnima': [
    pic('sharad-1', 0, 'दोनों बहनें पूर्णिमा का व्रत करती हैं', 'The two sisters keep the Purnima fast'),
    pic('sharad-2', 2, 'छोटी बहन का दुख, बड़ी बहन आती है', 'The younger sister grieves, the elder comes'),
    pic('sharad-3', 3, 'बड़ी बहन के स्पर्श से बालक जीवित', 'At the elder sister’s touch the child lives'),
  ],
  'karwa-chauth': [
    pic('kc-1', 1, 'भूख-प्यास से व्याकुल वीरावती, चिंतित भाई', 'Veeravati, faint with hunger, and her worried brothers'),
    pic('kc-2', 2, 'भाई पेड़ पर चलनी में दीया दिखाते हैं', 'A brother shows a lamp through a sieve from the tree'),
    pic('kc-3', 5, 'माता पार्वती की कृपा से पति का जीवन लौटता है', 'By Maa Parvati’s grace her husband’s life returns'),
  ],
  'ahoi-ashtami': [
    pic('ahoi-1', 1, 'मिट्टी खोदते समय भूल हो जाती है', 'A mistake while digging the earth'),
    pic('ahoi-2', 3, 'बड़ी-बूढ़ी स्त्रियाँ राह बताती हैं', 'The elder women show the way'),
    pic('ahoi-3', 4, 'अहोई माता की पूजा, संतान का सुख', 'Worship of Ahoi Mata, the joy of children'),
  ],
  dhanteras: [
    pic('dhanteras-1', 0, 'समुद्र मंथन से अमृत कलश लेकर धन्वंतरि प्रकट', 'Dhanvantari rises from the churning with the pot of amrit'),
    pic('dhanteras-2', 3, 'गहनों और दीयों की चमक से यमराज लौट जाते हैं', 'Dazzled by jewels and lamps, Yamraj turns back'),
  ],
  'choti-diwali': [
    pic('choti-1', 2, 'श्रीकृष्ण और सत्यभामा गरुड़ पर', 'Shri Krishna and Satyabhama on Garuda'),
    pic('choti-2', 3, 'मुक्त हुई कन्याएँ, दीयों से स्वागत', 'The freed women, welcomed with lamps'),
  ],
  govardhan: [
    pic('govardhan-1', 0, 'बाल कृष्ण नंद बाबा से पूछते हैं', 'Little Krishna asks Nand Baba'),
    pic('govardhan-2', 2, 'इंद्र का क्रोध, सात दिन वर्षा', 'Indra’s anger, seven days of rain'),
    pic('govardhan-3', 3, 'छोटी उँगली पर गोवर्धन, सब ब्रजवासी सुरक्षित', 'Govardhan on his little finger, all of Braj safe'),
  ],
  'bhai-dooj': [
    pic('bhaidooj-1', 1, 'यमुना जी भाई यमराज का स्वागत करती हैं', 'Yamuna welcomes her brother Yamraj'),
    pic('bhaidooj-2', 2, 'तिलक और प्रेम से भोजन', 'Tilak, and a meal made with love'),
    pic('bhaidooj-3', 3, 'यमराज बहन को वरदान देते हैं', 'Yamraj gives his sister a boon'),
  ],
  chhath: [
    pic('chhath-1', 0, 'महर्षि कश्यप का पुत्रेष्टि यज्ञ', 'Maharishi Kashyap’s putreshti yagya'),
    pic('chhath-2', 3, 'षष्ठी देवी बालक को जीवन देती हैं', 'Shashthi Devi gives the child life'),
    pic('chhath-3', 3, 'घाट पर डूबते सूर्य को अर्घ्य', 'Arghya to the setting sun at the ghat'),
  ],
  'dev-uthani': [
    pic('devuthani-1', 1, 'भगवान भक्त के साथ भोजन करते हैं', 'The Lord eats with his devotee'),
    pic('devuthani-2', 2, 'राजा पेड़ के पीछे से देखता है', 'The king watches from behind a tree'),
    pic('devuthani-3', 3, 'सच्चे प्रेम से भगवान प्रकट होते हैं', 'True love brings the Lord'),
  ],
  'kartik-purnima': [
    pic('kartik-1', 0, 'आकाश में तीन नगर, त्रिपुर', 'The three flying cities, Tripura'),
    pic('kartik-2', 2, 'एक बाण से त्रिपुर का अंत', 'One arrow ends Tripura'),
    pic('kartik-3', 3, 'देवता काशी में दीये जलाते हैं', 'The gods light lamps in Kashi'),
  ],
  diwali: [
    pic('diwali-1', 0, 'श्री राम, सीता जी, लक्ष्मण जी और हनुमान जी पुष्पक विमान से अयोध्या लौटते हैं', 'Shri Ram, Sita ji, Lakshman ji and Hanuman ji return to Ayodhya in the Pushpak vimana'),
    pic('diwali-2', 1, 'अयोध्या दीयों से जगमगाकर अपने राजा का स्वागत करती है', 'Ayodhya welcomes its king with a sea of lamps'),
    pic('diwali-3', 3, 'समुद्र मंथन से कमल पर माँ लक्ष्मी प्रकट होती हैं', 'Maa Lakshmi rises on a lotus from the churning of the ocean'),
  ],
}

/** Dev Uthani's second katha (Tulsi Vivah) has its own picture. */
export const TULSI_PIC: KathaPic = pic('tulsi-1', 3, 'तुलसी विवाह', 'Tulsi Vivah')
