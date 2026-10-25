import { localMidnightUtc, sunriseSunset, type City } from './astro'
import { masaAt, tithiAt, type TithiInfo } from './daily'

/** Vrat days a printed Hindu calendar marks. */
export type Mark = 'purnima' | 'amavasya' | 'ekadashi' | 'pradosh' | 'sankashti' | 'vinayaki'

export interface CalDay {
  d: number
  weekday: number
  /** Tithi at sunrise, as calendars print it */
  tithi: TithiInfo
  marks: Mark[]
}

/**
 * The tithi a vrat follows, and the moment of the day it is judged at:
 * Ekadashi, Purnima and Amavasya at sunrise; Pradosh at sunset; Sankashti a little after sunset (near moonrise);
 * Vinayaka Chaturthi at midday.
 */
const RULES: { mark: Mark; tithis: number[]; at: 'sunrise' | 'sunset' | 'night' | 'noon' }[] = [
  { mark: 'ekadashi', tithis: [11, 26], at: 'sunrise' },
  { mark: 'purnima', tithis: [15], at: 'sunrise' },
  { mark: 'amavasya', tithis: [30], at: 'sunrise' },
  { mark: 'pradosh', tithis: [13, 28], at: 'sunset' },
  { mark: 'sankashti', tithis: [19], at: 'night' },
  { mark: 'vinayaki', tithis: [4], at: 'noon' },
]

interface Moments {
  sunrise: Date
  sunset: Date
}

function momentsOf(city: City, y: number, m: number, d: number): Moments {
  const start = localMidnightUtc(y, m, d, city.tz)
  const { sunrise, sunset } = sunriseSunset(city, start)
  return {
    sunrise: sunrise ?? new Date(start.getTime() + 6 * 3600e3),
    sunset: sunset ?? new Date(start.getTime() + 18 * 3600e3),
  }
}

const at = (mo: Moments, when: (typeof RULES)[number]['at']) =>
  when === 'sunrise'
    ? mo.sunrise
    : when === 'sunset'
      ? new Date(mo.sunset.getTime() + 45 * 60e3)
      : when === 'night'
        ? new Date(mo.sunset.getTime() + 150 * 60e3)
        : new Date((mo.sunrise.getTime() + mo.sunset.getTime()) / 2)

/** Every day of a month with its sunrise tithi and vrat marks. A tithi that begins and ends between two sunrises is marked on the day it falls. */
export function monthPanchang(city: City, y: number, m: number): CalDay[] {
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate()
  // One day either side, so a tithi skipped at the month's edge is still found.
  const moments = Array.from({ length: days + 2 }, (_, i) => {
    const date = new Date(Date.UTC(y, m - 1, i))
    return momentsOf(city, date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate())
  })
  const out: CalDay[] = []
  for (let d = 1; d <= days; d++) {
    const mo = moments[d]
    const marks: Mark[] = []
    for (const r of RULES) {
      const here = tithiAt(at(mo, r.at)).n
      const next = tithiAt(at(moments[d + 1], r.at)).n
      const prev = tithiAt(at(moments[d - 1], r.at)).n
      if (r.tithis.includes(here)) {
        // If the tithi holds at the same moment two days running, the vrat is kept on the first.
        if (!r.tithis.includes(prev)) marks.push(r.mark)
      } else if (r.tithis.some((t) => skipped(here, next, t))) marks.push(r.mark)
    }
    out.push({ d, weekday: new Date(Date.UTC(y, m - 1, d)).getUTCDay(), tithi: tithiAt(mo.sunrise), marks })
  }
  return out
}

/** True when tithi t starts after today's moment and ends before tomorrow's, so no day holds it at that moment. */
function skipped(today: number, tomorrow: number, t: number) {
  const before = ((t - 2 + 30) % 30) + 1
  const after = (t % 30) + 1
  return today === before && tomorrow === after
}

/** The Hindu months a calendar month spans, e.g. Ashwin to Kartik (Purnimanta). */
export function monthMasas(city: City, y: number, m: number) {
  const days = new Date(Date.UTC(y, m, 0)).getUTCDate()
  const first = momentsOf(city, y, m, 1).sunrise
  const last = momentsOf(city, y, m, days).sunrise
  const a = masaAt(first, tithiAt(first).paksha)
  const b = masaAt(last, tithiAt(last).paksha)
  return a.i === b.i ? [a] : [a, b]
}
