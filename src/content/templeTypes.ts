/** Shared shapes for the temple data files. */
export type GroupId = 'jy' | 'cd' | 'ccd' | 'puri' | 'kumbh' | 'ashta' | 'pk' | 'pb' | 'bhoota' | 'braj'

export interface L {
  hi: string
  en: string
}
export interface Nearby {
  name: L
  dist: L
  text: L
  /** id of another temple in this list whose photo is shown in the popup */
  photoOf?: string
}
export interface Temple {
  id: string
  name: L
  place: L
  /** state code used on the map (see indiaMap) */
  state: string
  groups: GroupId[]
  /** order among the 12 Jyotirlingas, 1 to 12 */
  jyNo?: number
  tags: L[]
  importance: L
  katha: L
  history: L
  todo: L[]
  best: L
  rules: L
  how: { road: L; rail: L; air: L }
  /** official website, when one could be confirmed */
  site?: string
  maps: string
  nearby: Nearby[]
  video?: { id: string; title: string; channel: string }
  /** where traditions or claims differ */
  note?: L
}

export const l = (hi: string, en: string): L => ({ hi, en })
