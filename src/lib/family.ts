import { useMemo } from 'react'
import { todayIST } from '../content/festivals'
import { masaAt, tithiAt } from './panchang/daily'
import { useStored } from './useStored'

/** A tithi as printed calendars name it: 1–30 and the Purnimanta month index (see masaAt). */
export interface FamilyTithi {
  n: number
  masa: number
}

/** One person in "मेरा परिवार". Dates are YYYY-MM-DD from the date picker. Stored only on this phone. */
export interface Member {
  id: string
  name: string
  rel: string
  bd?: string
  an?: string
  /** Remind by Hindu tithi instead of the calendar date */
  byTithi?: boolean
  tb?: FamilyTithi
  ta?: FamilyTithi
}

export const RELATIONS = ['mother', 'father', 'parents', 'wife', 'husband', 'son', 'daughter', 'brother', 'sister', 'grandparent', 'friend', 'other'] as const
export const MAX_MEMBERS = 30

export interface Occasion {
  member: Member
  kind: 'bd' | 'an'
  /** 0 = today */
  days: number
  /** ISO date of the occasion */
  date: string
  byTithi: boolean
}

const SCAN_DAYS = 400
const iso = (ms: number) => new Date(ms).toISOString().slice(0, 10)
const dayMs = 86400e3
/** 06:00 IST, around sunrise, where calendars take the day's tithi */
const sunriseUtc = (ms: number) => ms + 30 * 60e3

export function useFamily() {
  return useStored<Member[]>('family', [])
}

/** The tithi and month a calendar date fell on, so it can be found again every year. */
export function tithiOfDate(dateIso: string): FamilyTithi | undefined {
  const [y, m, d] = dateIso.split('-').map(Number)
  if (!y || !m || !d) return undefined
  const at = new Date(sunriseUtc(Date.UTC(y, m - 1, d)))
  const t = tithiAt(at)
  return { n: t.n, masa: masaAt(at, t.paksha).i }
}

/** Next date for a calendar birthday or anniversary: this year or next. 29 Feb falls on 28 Feb in other years. */
function nextCalendar(dateIso: string, from: number, y: number): number | undefined {
  const [, m, d] = dateIso.split('-').map(Number)
  if (!m || !d) return undefined
  for (const yr of [y, y + 1]) {
    const leap = (yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0
    const ms = Date.UTC(yr, m - 1, m === 2 && d === 29 && !leap ? 28 : d)
    if (ms >= from) return ms
  }
}

/** Every upcoming birthday and anniversary within a year, soonest first. Tithi dates are found by walking day by day, once. */
export function nextOccasions(members: Member[], now = new Date()): Occasion[] {
  const t = todayIST(now)
  const from = Date.UTC(t.y, t.m - 1, t.d)
  const out: Occasion[] = []
  const wanted = new Map<string, { n: number; masa: number; hit?: number }>()
  const want = (x?: FamilyTithi) => {
    if (x) wanted.set(`${x.n}/${x.masa}`, { ...x })
  }
  for (const m of members) {
    if (!m.byTithi) continue
    if (m.bd) want(m.tb)
    if (m.an) want(m.ta)
  }
  if (wanted.size) {
    const numbers = new Set([...wanted.values()].map((w) => w.n))
    let open = wanted.size
    for (let k = 0; k < SCAN_DAYS && open > 0; k++) {
      const at = new Date(sunriseUtc(from + k * dayMs))
      const ti = tithiAt(at)
      if (!numbers.has(ti.n)) continue
      const masa = masaAt(at, ti.paksha).i
      const w = wanted.get(`${ti.n}/${masa}`)
      if (w && w.hit === undefined) {
        w.hit = from + k * dayMs
        open--
      }
    }
  }
  const push = (member: Member, kind: 'bd' | 'an', ms: number | undefined, byTithi: boolean) => {
    if (ms !== undefined) out.push({ member, kind, days: Math.round((ms - from) / dayMs), date: iso(ms), byTithi })
  }
  for (const m of members) {
    for (const kind of ['bd', 'an'] as const) {
      const d = m[kind]
      if (!d) continue
      const tithi = kind === 'bd' ? m.tb : m.ta
      if (m.byTithi && tithi) push(m, kind, wanted.get(`${tithi.n}/${tithi.masa}`)?.hit, true)
      else push(m, kind, nextCalendar(d, from, t.y), false)
    }
  }
  return out.sort((a, b) => a.days - b.days)
}

/** Occasions for the family list and the home card, worked out once per change of list. */
export function useOccasions(members: Member[]) {
  const day = todayIST().d
  return useMemo(() => nextOccasions(members), [members, day])
}
