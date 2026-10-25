/** Festivals the app opens a page for, with dates for 2026 (Delhi; checked against Drik Panchang where noted). */
export interface Festival {
  id: string
  name_hi: string
  name_en: string
  /** Local date, YYYY-MM-DD */
  date: string
  line_hi: string
  line_en: string
  /** Painting for the list and the top card, in /art/festival */
  art: string
}

export const FESTIVALS: Festival[] = [
  { id: 'sharad-purnima', name_hi: 'शरद पूर्णिमा', name_en: 'Sharad Purnima', date: '2026-10-25', line_hi: 'चाँदनी में खीर, माँ लक्ष्मी का पूजन', line_en: 'Kheer in the moonlight, Maa Lakshmi puja', art: '/art/festival/sharad-purnima.webp' },
  { id: 'karwa-chauth', name_hi: 'करवा चौथ', name_en: 'Karwa Chauth', date: '2026-10-29', line_hi: 'निर्जला व्रत, चाँद को अर्घ्य', line_en: 'A day-long fast, broken at moonrise', art: '/art/festival/karwa-chauth.webp' },
  { id: 'ahoi-ashtami', name_hi: 'अहोई अष्टमी', name_en: 'Ahoi Ashtami', date: '2026-11-01', line_hi: 'संतान के लिए व्रत, तारों को अर्घ्य', line_en: 'A mother’s fast for her children', art: '/art/festival/ahoi-ashtami.webp' },
  { id: 'dhanteras', name_hi: 'धनतेरस', name_en: 'Dhanteras', date: '2026-11-06', line_hi: 'धन्वंतरि-कुबेर पूजा, यम दीपदान', line_en: 'Dhanvantari and Kuber puja, a lamp for Yama', art: '/art/festival/dhanteras.webp' },
  { id: 'choti-diwali', name_hi: 'छोटी दीपावली', name_en: 'Choti Diwali', date: '2026-11-07', line_hi: 'नरक चतुर्दशी, रूप चौदस', line_en: 'Narak Chaturdashi and Roop Chaudas', art: '/art/festival/choti-diwali.webp' },
  { id: 'diwali', name_hi: 'दीपावली', name_en: 'Diwali', date: '2026-11-08', line_hi: 'लक्ष्मी-गणेश पूजन', line_en: 'Lakshmi and Ganesh puja', art: '/art/festival/diwali.webp' },
  { id: 'govardhan', name_hi: 'गोवर्धन पूजा', name_en: 'Govardhan Puja', date: '2026-11-10', line_hi: 'अन्नकूट और गोवर्धन पूजा', line_en: 'Annakut, and the hill Krishna lifted', art: '/art/festival/govardhan.webp' },
  { id: 'bhai-dooj', name_hi: 'भाई दूज', name_en: 'Bhai Dooj', date: '2026-11-11', line_hi: 'बहन भाई को तिलक करती है', line_en: 'Sisters put tilak on their brothers', art: '/art/festival/bhai-dooj.webp' },
  { id: 'chhath', name_hi: 'छठ पूजा', name_en: 'Chhath Puja', date: '2026-11-15', line_hi: 'डूबते सूर्य को अर्घ्य, 13 से 16 नवंबर', line_en: 'Arghya to the setting sun, 13 to 16 Nov', art: '/art/festival/chhath.webp' },
  { id: 'dev-uthani', name_hi: 'देवउठनी एकादशी', name_en: 'Dev Uthani Ekadashi', date: '2026-11-20', line_hi: 'भगवान विष्णु जागते हैं, तुलसी विवाह', line_en: 'Vishnu wakes, Tulsi Vivah', art: '/art/festival/dev-uthani.webp' },
  { id: 'kartik-purnima', name_hi: 'कार्तिक पूर्णिमा', name_en: 'Kartik Purnima', date: '2026-11-24', line_hi: 'गंगा स्नान, दीपदान, देव दीपावली', line_en: 'Ganga snan, lamps, Dev Deepawali', art: '/art/festival/kartik-purnima.webp' },
]

export const ymd = (d: Date) => new Date(d.getTime() + 330 * 60000).toISOString().slice(0, 10)

/** Festival happening today (India time), if any. */
export const festivalToday = (now = new Date()) => FESTIVALS.find((f) => f.date === ymd(now)) ?? null

/** Next festival from today on, inclusive. */
export const nextFestival = (now = new Date()) => FESTIVALS.find((f) => f.date >= ymd(now)) ?? null

/** Whole days from today (India time) to a festival. */
export const daysUntil = (f: Festival, now = new Date()) =>
  Math.round((Date.parse(f.date) - Date.parse(ymd(now))) / 86400e3)

export const todayIST = (now = new Date()) => {
  const [y, m, d] = ymd(now).split('-').map(Number)
  return { y, m, d }
}
