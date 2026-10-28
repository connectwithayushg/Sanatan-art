import type { Deity } from '../../content/deities'

const HAS_HERO = ['balgopal', 'durga', 'ganesh', 'hanuman', 'kali', 'khatu', 'krishna', 'lakshmi', 'ram', 'vishnu']

/** The ivory shrine photograph for a deity: the original Option 4 Shiva, or the matching shrine scene cropped to the same frame. */
export const heroPicture = (d: Deity) => (d.id === 'shiv' ? '/art/home/hero.webp' : HAS_HERO.includes(d.id) ? `/art/home/hero-${d.id}.webp` : (d.shrineScene?.base ?? '/art/home/hero.webp'))
