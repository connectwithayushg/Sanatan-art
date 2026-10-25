import type { Bi } from '../diwaliVidhi'

/** One verse of a text: the words as recited, an optional small label (दोहा, चौपाई 3), and an optional meaning. */
export interface Verse {
  label?: Bi
  text: string
  meaning?: Bi
}

export type ShelfId = 'top' | 'chalisa' | 'stotra' | 'mantra' | 'granth' | 'katha' | 'tyohar'

/** A text in the Path library, read in one continuous tile. */
export interface LibText {
  id: string
  shelf: ShelfId
  title: Bi
  by: Bi
  /** What is inside, shown on the cover: "40 चौपाई · अर्थ सहित" */
  inside: Bi
  img: string
  /** Sanskrit texts are set a little larger and in the scripture face. */
  lang: 'hi' | 'sa'
  verses: Verse[]
  /** Said at the end, e.g. "॥ जय श्री राम ॥" */
  closing?: string
  /** Searched as well as the title, for people typing in English. */
  keys: string
  /** The deity on the cover; such covers are drawn inside a temple arch. */
  deity?: string
  /** A katha told as paragraphs: no verse numbers, and the meaning is the English telling. */
  prose?: boolean
  /** The verses are kept in library/more/<id>.json and load when the text is opened. */
  lazy?: boolean
}
