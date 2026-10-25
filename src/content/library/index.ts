/** The Path library: every text, grouped into shelves so the Path tab stays easy to scan. */
import type { Bi } from '../diwaliVidhi'
import { HANUMAN_CHALISA } from '../chalisa'
import { FESTIVAL_PAGES } from '../festivalPages'
import { FESTIVALS } from '../festivals'
import { KC_KATHA } from '../karwaChauth'
import { DURGA_CHALISA } from './durgaChalisa'
import { FROM_BHAJANS } from './fromBhajans'
import { HANUMAN_ASHTAK } from './hanumanAshtak'
import { MANTRAS } from './mantras'
import { MORE } from './more'
import { SHIV_CHALISA } from './shivChalisa'
import { SHIV_TANDAV } from './shivTandav'
import type { LibText, ShelfId, Verse } from './types'

export type { LibText, ShelfId, Verse } from './types'

/** The first texts kept their paintings in the reader; on the shelves every text now shows its deity in the arch. */
const withDeity = (t: LibText, deity: string): LibText => ({ ...t, deity, img: `/art/path/${deity}.webp` })

export const TEXTS: LibText[] = [
  withDeity(HANUMAN_CHALISA, 'hanuman'),
  withDeity(SHIV_CHALISA, 'shiv'),
  withDeity(DURGA_CHALISA, 'durga'),
  withDeity(HANUMAN_ASHTAK, 'hanuman'),
  withDeity(SHIV_TANDAV, 'shiv'),
  MANTRAS,
  ...FROM_BHAJANS,
  // Sundar Kand is a granth, so like the Gita it keeps a painting.
  ...Object.values(MORE).map((t) => (t.id === 'sundar-kand' ? { ...t, img: '/art/thumb/1qvWMJv_NUU.jpg', deity: undefined } : t)),
]
export const textById = (id: string) => TEXTS.find((t) => t.id === id)

const bodies = import.meta.glob<Verse[]>('./more/*.json', { import: 'default' })
/** The verses of a long text, fetched the first time it is opened. */
export const loadVerses = (id: string) => bodies[`./more/${id}.json`]?.() ?? Promise.resolve([])

/** A cover on a shelf: a text in the library, the Gita, or a festival's katha. */
export interface Cover {
  title: Bi
  inside: Bi
  img: string
  /** Path inside the app, e.g. "path/shiv-chalisa" or "tyohar/dhanteras/katha" */
  to: string
  /** A deity picture, drawn inside a temple arch; paintings of scenes stay rectangular. */
  arch?: boolean
}

export interface Shelf {
  id: ShelfId
  title: Bi
  line: Bi
  covers: Cover[]
}

const fromText = (t: LibText): Cover => ({ title: t.title, inside: t.inside, img: t.img, to: `path/${t.id}`, arch: !!t.deity })
const GITA: Cover = { title: { hi: 'श्रीमद्भगवद्गीता', en: 'Bhagavad Gita' }, inside: { hi: '18 अध्याय · 700 श्लोक', en: '18 chapters · 700 verses' }, img: '/art/thumb/bxYwhPIFOcA.jpg', to: 'path/gita' }
/** Covers in the order given: most read and most searched first. */
const pick = (...ids: string[]): Cover[] => ids.map((id) => (id === 'gita' ? GITA : fromText(textById(id)!)))

const festName = (id: string): Bi => {
  const f = FESTIVALS.find((x) => x.id === id)
  return { hi: f?.name_hi ?? '', en: f?.name_en ?? '' }
}

const KATHAS: Cover[] = [
  { title: KC_KATHA.title, inside: { hi: 'करवा चौथ', en: 'Karwa Chauth' }, img: '/art/thumb/jJ_CskRaG3g.jpg', to: 'tyohar/karwa-chauth/katha' },
  ...(['dhanteras', 'choti-diwali', 'govardhan', 'bhai-dooj'] as const).map((id, i) => ({
    title: FESTIVAL_PAGES[id].katha.title,
    inside: festName(id),
    img: ['/art/thumb/LEwZuOq84Ww.jpg', '/art/thumb/-32lKp1bi9k.jpg', '/art/thumb/-jeARsrDO1c.jpg', '/art/thumb/xisPXJqwQkA.jpg'][i],
    to: `tyohar/${id}/katha`,
  })),
]

export const SHELVES: Shelf[] = [
  {
    id: 'top',
    title: { hi: 'सबसे प्रिय पाठ', en: 'Most loved' },
    line: { hi: 'जो सबसे ज़्यादा पढ़े जाते हैं', en: 'What people read the most' },
    covers: pick('chalisa', 'sundar-kand', 'gita', 'satyanarayan-katha', 'shiv-chalisa', 'durga-chalisa', 'bajrang-baan', 'vishnu-sahasranama'),
  },
  {
    id: 'chalisa',
    title: { hi: 'चालीसा', en: 'Chalisa' },
    line: { hi: '40 चौपाइयों की स्तुति', en: 'Hymns of forty verses' },
    covers: pick('chalisa', 'shiv-chalisa', 'durga-chalisa', 'ganesh-chalisa', 'lakshmi-chalisa', 'shani-chalisa', 'krishna-chalisa', 'saraswati-chalisa', 'vishnu-chalisa', 'ram-chalisa', 'santoshi-chalisa', 'kali-chalisa'),
  },
  {
    id: 'katha',
    title: { hi: 'व्रत कथा', en: 'Vrat kathas' },
    line: { hi: 'सत्यनारायण, सातों वार, प्रदोष और एकादशी', en: 'Satyanarayan, the seven weekdays, Pradosh and Ekadashi' },
    covers: pick(
      // The Ekadashis follow the calendar: Rama and Devuthani come first in Kartik, then Utpanna and Mokshada.
      'satyanarayan-katha', 'somvar-vrat-katha', 'rama-ekadashi-katha', 'devuthani-ekadashi-katha', 'utpanna-ekadashi-katha', 'mokshada-ekadashi-katha',
      'shukravar-santoshi-katha', 'mangalvar-vrat-katha', 'guruvar-vrat-katha', 'shanivar-vrat-katha', 'pradosh-vrat-katha', 'ravivar-vrat-katha', 'budhvar-vrat-katha',
    ),
  },
  {
    id: 'stotra',
    title: { hi: 'स्तोत्र और अष्टक', en: 'Stotras and ashtaks' },
    line: { hi: 'स्तुतियाँ, रोज़ पढ़ने के लिए', en: 'Hymns to read every day' },
    covers: pick(
      'bajrang-baan', 'hanuman-ashtak', 'shiv-tandav', 'ram-raksha', 'vishnu-sahasranama', 'durga-kavach', 'rudrashtakam', 'aditya-hridayam', 'mahishasura-mardini',
      'ganesh-atharvashirsha', 'shri-suktam', 'lingashtakam', 'siddha-kunjika', 'kanakdhara-stotra', 'shiv-mahimna', 'shiv-panchakshar', 'mahalakshmi-ashtakam',
      'achyutashtakam', 'madhurashtakam', 'sankatnashan-ganesh', 'bhaja-govindam',
    ),
  },
  {
    id: 'granth',
    title: { hi: 'ग्रंथ', en: 'Scriptures' },
    line: { hi: 'पवित्र ग्रंथ, अध्याय के अनुसार', en: 'Holy books, chapter by chapter' },
    covers: pick('gita', 'sundar-kand'),
  },
  {
    id: 'tyohar',
    title: { hi: 'त्योहार कथा', en: 'Festival kathas' },
    line: { hi: 'हर त्योहार की कथा', en: 'The story of each festival' },
    covers: KATHAS,
  },
  {
    id: 'mantra',
    title: { hi: 'मंत्र', en: 'Mantras' },
    line: { hi: 'जाप और पूजा के मंत्र', en: 'For japa and puja' },
    covers: TEXTS.filter((t) => t.shelf === 'mantra').map(fromText),
  },
]
