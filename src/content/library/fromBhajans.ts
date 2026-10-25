/** Stotras and a chalisa that first came in as bhajans, read in Path too: the words and meanings stay the same in both places. */
import type { Aarti } from '../aartis'
import { MADHURASHTAKAM } from '../bhajans'
import { BHAJANS2 as B } from '../bhajans2'
import type { Bi } from '../diwaliVidhi'
import type { LibText, ShelfId } from './types'

const make = (a: Aarti, id: string, shelf: ShelfId, deity: string, by: Bi, inside: Bi, keys: string, closing: string, lang: 'hi' | 'sa' = 'sa'): LibText => ({
  id,
  shelf,
  title: { hi: a.title_hi.split(':')[0], en: a.title_en },
  by,
  inside,
  img: `/art/path/${deity}.webp`,
  deity,
  lang,
  keys,
  closing,
  verses: a.stanzas.map((s) => ({ text: s.lines.join('\n'), meaning: { hi: s.meaning_hi, en: s.meaning_en } })),
})

const shlok = (n: number): Bi => ({ hi: `${n} श्लोक · अर्थ सहित`, en: `${n} verses · with meanings` })

export const FROM_BHAJANS: LibText[] = [
  make(B.bajrangbaan, 'bajrang-baan', 'stotra', 'hanuman', { hi: 'गोस्वामी तुलसीदास कृत (परंपरा से)', en: 'Attributed to Goswami Tulsidas' }, { hi: 'दोहे और चौपाइयाँ · अर्थ सहित', en: 'Dohas and chaupais · with meanings' }, 'bajrang baan hanuman tulsidas mangalvar shanivar sankat', '॥ जय श्री राम ॥', 'hi'),
  make(B.rudrashtakam, 'rudrashtakam', 'stotra', 'shiv', { hi: 'गोस्वामी तुलसीदास कृत', en: 'By Goswami Tulsidas' }, shlok(B.rudrashtakam.stanzas.length), 'rudrashtakam namami shamishan nirvan roopam shiv tulsidas', '॥ हर हर महादेव ॥'),
  make(B.lingashtakam, 'lingashtakam', 'stotra', 'shiv', { hi: 'परंपरा से', en: 'Traditional' }, shlok(B.lingashtakam.stanzas.length), 'lingashtakam brahma murari surarchita lingam shivling', '॥ हर हर महादेव ॥'),
  make(B.panchakshar, 'shiv-panchakshar', 'stotra', 'shiv', { hi: 'आदि शंकराचार्य कृत', en: 'By Adi Shankaracharya' }, shlok(B.panchakshar.stanzas.length), 'shiv panchakshar stotra nagendra haraya namah shivaya', '॥ ॐ नमः शिवाय ॥'),
  make(B.mahishasura, 'mahishasura-mardini', 'stotra', 'durga', { hi: 'आदि शंकराचार्य कृत (परंपरा से)', en: 'Attributed to Adi Shankaracharya' }, shlok(B.mahishasura.stanzas.length), 'aigiri nandini ayi giri nandini mahishasura mardini navratri durga', '॥ जय माता दी ॥'),
  make(B.mahalakshmi, 'mahalakshmi-ashtakam', 'stotra', 'lakshmi', { hi: 'पद्म पुराण से, इंद्र कृत', en: 'From the Padma Purana, sung by Indra' }, shlok(B.mahalakshmi.stanzas.length), 'mahalakshmi ashtakam namastestu mahamaye lakshmi diwali shukravar', '॥ जय माँ लक्ष्मी ॥'),
  make(MADHURASHTAKAM, 'madhurashtakam', 'stotra', 'krishna', { hi: 'श्री वल्लभाचार्य कृत', en: 'By Shri Vallabhacharya' }, shlok(MADHURASHTAKAM.stanzas.length), 'madhurashtakam adharam madhuram krishna vallabhacharya', '॥ जय श्री कृष्ण ॥'),
  make(B.ganeshchalisa, 'ganesh-chalisa', 'chalisa', 'ganesh', { hi: 'परंपरा से', en: 'Traditional' }, { hi: '40 चौपाई · अर्थ सहित', en: '40 verses · with meanings' }, 'ganesh chalisa jai ganpati sadgun sadan budhvar wednesday', '॥ जय श्री गणेश ॥', 'hi'),
]
