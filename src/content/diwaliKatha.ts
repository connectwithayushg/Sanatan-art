/** Why Diwali is kept: Shri Ram’s return to Ayodhya, and Maa Lakshmi rising from the ocean. Text written for Sanatan App from Drik Panchang, Bharat Discovery and the Vishnu Purana. */
import type { Bi } from './diwaliVidhi'
import { KATHA_PICS, type KathaPic } from './kathaPics'

const pics = KATHA_PICS.diwali

export const DIWALI_KATHA: { title: Bi; paras: Bi[]; pics: KathaPic[]; more: { title: Bi; paras: Bi[]; pics: KathaPic[] }[]; note: Bi } = {
  title: { hi: 'श्री राम का अयोध्या लौटना', en: 'Shri Ram returns to Ayodhya' },
  paras: [
    {
      hi: 'चौदह वर्ष का वनवास पूरा करके और लंका में रावण पर विजय पाकर श्री राम, सीता जी और लक्ष्मण जी पुष्पक विमान से अयोध्या लौटे। साथ में हनुमान जी भी थे।',
      en: 'After fourteen years in the forest and the victory over Ravan in Lanka, Shri Ram, Sita ji and Lakshman ji returned to Ayodhya in the Pushpak vimana. Hanuman ji was with them.',
    },
    {
      hi: 'वह कार्तिक अमावस्या की अँधेरी रात थी। अपने राजा के स्वागत में अयोध्या के लोगों ने हर घर, हर गली और सरयू के घाटों पर घी के दीये जला दिए। पूरी नगरी रोशनी से जगमगा उठी।',
      en: 'It was the dark night of Kartik Amavasya. To welcome their king, the people of Ayodhya lit ghee lamps in every home, every lane and on the ghats of the Saryu. The whole city shone with light.',
    },
    {
      hi: 'तभी से इस रात दीये जलाकर अँधेरे पर उजाले की, और बुराई पर अच्छाई की जीत का उत्सव मनाया जाता है।',
      en: 'Since then this night is kept with lamps, as a celebration of light over darkness and good over evil.',
    },
  ],
  pics: pics.slice(0, 2),
  more: [
    {
      title: { hi: 'माँ लक्ष्मी का प्रकट होना', en: 'Maa Lakshmi appears' },
      paras: [
        {
          hi: 'देवताओं और असुरों ने मिलकर क्षीर सागर का मंथन किया। मंथन से कई रत्न निकले, और उनमें माँ लक्ष्मी कमल पर विराजमान होकर प्रकट हुईं। उन्होंने भगवान विष्णु का वरण किया।',
          en: 'The devas and asuras together churned the ocean of milk. Many jewels came out, and among them Maa Lakshmi appeared seated on a lotus. She chose Lord Vishnu.',
        },
        {
          hi: 'इसीलिए धन, सुख और समृद्धि के लिए दीवाली की रात माँ लक्ष्मी की पूजा होती है। माना जाता है कि इस रात वे घर-घर आती हैं, इसलिए घर साफ़ रखकर दीये जलाए जाते हैं।',
          en: 'That is why Maa Lakshmi is worshipped on Diwali night for wealth, joy and plenty. She is believed to visit homes tonight, so homes are kept clean and lit with lamps.',
        },
      ],
      pics: [{ ...pics[2], after: 0 }],
    },
  ],
  note: {
    hi: 'परंपराओं में अंतर: कुछ पंचांग (जैसे Drik Panchang) माँ लक्ष्मी के प्रकट होने को धनतेरस से जोड़ते हैं, कुछ कार्तिक अमावस्या से। इसलिए कथा में दिन का नाम नहीं लिखा।',
    en: 'Traditions differ: some panchangs (such as Drik Panchang) link Lakshmi’s appearance to Dhanteras, others to Kartik Amavasya. So the katha does not name the day.',
  },
}
