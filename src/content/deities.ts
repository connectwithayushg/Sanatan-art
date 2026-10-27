/** The deities of the home mandir. Weekdays are 0 = Sunday; the day's deity is shown first. */
export interface Deity {
  id: string
  name_hi: string
  name_en: string
  /** Full picture for the shrine, and a small one for the picker */
  photo: string
  thumb: string
  /** The deity cut out of its photo, shown with no frame */
  cutout?: string
  /** Square crop of Ayush's own photo for the home page; deities without one are left off home. */
  home?: string
  /** One cut-out per weekday (0 = Sunday), so the darshan changes every day; falls back to cutout. */
  week?: string[]
  /** Approved complete Mandir scene; daily variants preserve the same deity and architecture. */
  shrineScene?: { lit: string; unlit: string }
  shrineScenes?: { lit: string; unlit: string }[]
  /** Sideways nudge of the cut-out, in % of its width, so the deity's face sits on the halo's centre line. */
  dx?: number
  /** Head and shoulders from the cut-out, for the round picker */
  face?: string
  /** Picture for cards people send (never the Canva paintings) */
  card?: string
  aarti: string
  mantra: string
  days: number[]
}

/** Bal Gopal (Laddu Gopal): the Krishna mandir can show him instead of Shri Krishna. */
export const BAL_GOPAL = { name_hi: 'बाल गोपाल', name_en: 'Bal Gopal', photo: '/art/deity/balgopal-cut.webp', thumb: '/art/deity/balgopal-face.webp', cutout: '/art/deity/balgopal-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/balgopal/${n}.webp`), face: '/art/deity/balgopal-face.webp', home: '/art/deity/balgopal-home.webp' }

/** Shivling: the Shiv ji mandir can show the Shivling instead of Shiv ji (Ayush's own photo, one picture all week). */
export const SHIVLING = { name_hi: 'शिवलिंग', name_en: 'Shivling', photo: '/art/deity/shivling-cut.webp', thumb: '/art/deity/shivling-face.webp', cutout: '/art/deity/shivling-cut.webp', week: undefined, face: '/art/deity/shivling-face.webp', dx: 0 }

export const DEITIES: Deity[] = [
  { id: 'ganesh', name_hi: 'गणेश जी', name_en: 'Ganesh ji', photo: '/art/deity/ganesh-cut.webp', thumb: '/art/deity/ganesh-face.webp', cutout: '/art/deity/ganesh-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/ganesh/${n}.webp`), face: '/art/deity/ganesh-face.webp', home: '/art/deity/ganesh-home.webp', card: '/art/photo/fv3EpXA6jCA.jpg', aarti: 'ganesh', mantra: 'ॐ गं गणपतये नमः', days: [3] },
  { id: 'shiv', shrineScene: { lit: '/art/redesign/approved-mandir/shiv-2.webp', unlit: '/art/redesign/approved-mandir/shiv-2-unlit.webp' }, shrineScenes: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ lit: `/art/redesign/approved-mandir/shiv-${n}.webp`, unlit: `/art/redesign/approved-mandir/shiv-${n}-unlit.webp` })), name_hi: 'शिव जी', name_en: 'Shiv ji', photo: '/art/deity/shiv-cut.webp', thumb: '/art/deity/shiv-face.webp', cutout: '/art/deity/shiv-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/shiv/${n}.webp`), face: '/art/deity/shiv-face.webp', home: '/art/deity/shiv-home.webp', card: '/art/photo/JxJ15qeVisk.jpg', aarti: 'shiv', mantra: 'ॐ नमः शिवाय', days: [1] },
  { id: 'hanuman', name_hi: 'हनुमान जी', name_en: 'Hanuman ji', photo: '/art/deity/hanuman-cut.webp', thumb: '/art/deity/hanuman-face.webp', cutout: '/art/deity/hanuman-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/hanuman/${n}.webp`), face: '/art/deity/hanuman-face.webp', home: '/art/deity/hanuman-home.webp', card: '/art/photo/1qvWMJv_NUU.jpg', aarti: 'hanuman', mantra: 'ॐ हं हनुमते नमः', days: [2, 6] },
  { id: 'vishnu', name_hi: 'विष्णु जी', name_en: 'Vishnu ji', photo: '/art/deity/vishnu-cut.webp', thumb: '/art/deity/vishnu-face.webp', cutout: '/art/deity/vishnu-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/vishnu/${n}.webp`), face: '/art/deity/vishnu-face.webp', home: '/art/deity/vishnu-home.webp', card: '/art/photo/99DGEk5yHqg.jpg', aarti: 'jagdish', mantra: 'ॐ नमो भगवते वासुदेवाय', days: [4] },
  { id: 'lakshmi', name_hi: 'लक्ष्मी माँ', name_en: 'Lakshmi Maa', photo: '/art/deity/lakshmi-cut.webp', thumb: '/art/deity/lakshmi-face.webp', cutout: '/art/deity/lakshmi-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/lakshmi/${n}.webp`), face: '/art/deity/lakshmi-face.webp', home: '/art/deity/lakshmi-home.webp', card: '/art/lakshmi-1896.jpg', aarti: 'lakshmi', mantra: 'ॐ श्रीं महालक्ष्म्यै नमः', days: [5] },
  { id: 'durga', name_hi: 'दुर्गा माँ', name_en: 'Durga Maa', photo: '/art/deity/durga-cut.webp', thumb: '/art/deity/durga-face.webp', cutout: '/art/deity/durga-cut.webp', face: '/art/deity/durga-face.webp', home: '/art/deity/durga-home.webp', card: '/art/photo/vruHKfa-Fi0.jpg', aarti: 'ambe', mantra: 'ॐ दुं दुर्गायै नमः', days: [0] },
  { id: 'krishna', name_hi: 'श्री कृष्ण', name_en: 'Shri Krishna', photo: '/art/deity/krishna-cut.webp', thumb: '/art/deity/krishna-face.webp', cutout: '/art/deity/krishna-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/krishna/${n}.webp`), face: '/art/deity/krishna-face.webp', home: '/art/deity/krishna-home.webp', card: '/art/photo/bxYwhPIFOcA.jpg', aarti: 'kunjbihari', mantra: 'ॐ नमो भगवते वासुदेवाय', days: [] },
  { id: 'ram', name_hi: 'राम जी', name_en: 'Ram ji', photo: '/art/deity/ram-cut.webp', thumb: '/art/deity/ram-face.webp', cutout: '/art/deity/ram-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/ram/${n}.webp`), face: '/art/deity/ram-face.webp', aarti: 'ram', mantra: 'ॐ श्री रामाय नमः', days: [] },
  { id: 'kali', name_hi: 'काली माँ', name_en: 'Kali Maa', photo: '/art/deity/kali-cut.webp', thumb: '/art/deity/kali-face.webp', cutout: '/art/deity/kali-cut.webp', week: [1, 2, 3, 4, 5, 6, 7].map((n) => `/art/deity/kali/${n}.webp`), face: '/art/deity/kali-face.webp', aarti: 'kali', mantra: 'ॐ क्रीं कालिकायै नमः', days: [] },
  { id: 'khatu', name_hi: 'खाटू श्याम जी', name_en: 'Khatu Shyam ji', photo: '/art/deity/khatu-cut.webp', thumb: '/art/deity/khatu-face.webp', cutout: '/art/deity/khatu-cut.webp', face: '/art/deity/khatu-face.webp', aarti: 'khatu', mantra: 'ॐ श्री श्याम देवाय नमः', days: [] },
]

export const deityOfDay = (weekday: number) => DEITIES.find((d) => d.days.includes(weekday)) ?? DEITIES[0]
