import * as Astronomy from 'astronomy-engine'
import { lahiriAyanamsa, localMidnightUtc, sunriseSunset, type City } from './astro'

/** The five limbs of the day (tithi, vara, nakshatra, yoga, karana), North Indian Purnimanta months, Lahiri ayanamsa. */

export const TITHI = [
  ['प्रतिपदा', 'Pratipada'], ['द्वितीया', 'Dwitiya'], ['तृतीया', 'Tritiya'], ['चतुर्थी', 'Chaturthi'], ['पंचमी', 'Panchami'],
  ['षष्ठी', 'Shashthi'], ['सप्तमी', 'Saptami'], ['अष्टमी', 'Ashtami'], ['नवमी', 'Navami'], ['दशमी', 'Dashami'],
  ['एकादशी', 'Ekadashi'], ['द्वादशी', 'Dwadashi'], ['त्रयोदशी', 'Trayodashi'], ['चतुर्दशी', 'Chaturdashi'],
] as const
export const PURNIMA = ['पूर्णिमा', 'Purnima'] as const
export const AMAVASYA = ['अमावस्या', 'Amavasya'] as const

export const NAKSHATRA = [
  ['अश्विनी', 'Ashwini'], ['भरणी', 'Bharani'], ['कृत्तिका', 'Krittika'], ['रोहिणी', 'Rohini'], ['मृगशिरा', 'Mrigashira'],
  ['आर्द्रा', 'Ardra'], ['पुनर्वसु', 'Punarvasu'], ['पुष्य', 'Pushya'], ['आश्लेषा', 'Ashlesha'], ['मघा', 'Magha'],
  ['पूर्वा फाल्गुनी', 'Purva Phalguni'], ['उत्तरा फाल्गुनी', 'Uttara Phalguni'], ['हस्त', 'Hasta'], ['चित्रा', 'Chitra'],
  ['स्वाति', 'Swati'], ['विशाखा', 'Vishakha'], ['अनुराधा', 'Anuradha'], ['ज्येष्ठा', 'Jyeshtha'], ['मूल', 'Mula'],
  ['पूर्वाषाढ़ा', 'Purva Ashadha'], ['उत्तराषाढ़ा', 'Uttara Ashadha'], ['श्रवण', 'Shravana'], ['धनिष्ठा', 'Dhanishtha'],
  ['शतभिषा', 'Shatabhisha'], ['पूर्वा भाद्रपद', 'Purva Bhadrapada'], ['उत्तरा भाद्रपद', 'Uttara Bhadrapada'], ['रेवती', 'Revati'],
] as const

export const YOGA = [
  ['विष्कुम्भ', 'Vishkumbha'], ['प्रीति', 'Priti'], ['आयुष्मान', 'Ayushman'], ['सौभाग्य', 'Saubhagya'], ['शोभन', 'Shobhana'],
  ['अतिगण्ड', 'Atiganda'], ['सुकर्मा', 'Sukarma'], ['धृति', 'Dhriti'], ['शूल', 'Shula'], ['गण्ड', 'Ganda'],
  ['वृद्धि', 'Vriddhi'], ['ध्रुव', 'Dhruva'], ['व्याघात', 'Vyaghata'], ['हर्षण', 'Harshana'], ['वज्र', 'Vajra'],
  ['सिद्धि', 'Siddhi'], ['व्यतीपात', 'Vyatipata'], ['वरीयान', 'Variyana'], ['परिघ', 'Parigha'], ['शिव', 'Shiva'],
  ['सिद्ध', 'Siddha'], ['साध्य', 'Sadhya'], ['शुभ', 'Shubha'], ['शुक्ल', 'Shukla'], ['ब्रह्म', 'Brahma'],
  ['इन्द्र', 'Indra'], ['वैधृति', 'Vaidhriti'],
] as const

const KARANA_MOVING = [['बव', 'Bava'], ['बालव', 'Balava'], ['कौलव', 'Kaulava'], ['तैतिल', 'Taitila'], ['गर', 'Gara'], ['वणिज', 'Vanija'], ['विष्टि (भद्रा)', 'Vishti (Bhadra)']] as const

export const VARA = [['रविवार', 'Sunday'], ['सोमवार', 'Monday'], ['मंगलवार', 'Tuesday'], ['बुधवार', 'Wednesday'], ['गुरुवार', 'Thursday'], ['शुक्रवार', 'Friday'], ['शनिवार', 'Saturday']] as const

/** Lunar months, index 0 = Chaitra. */
export const MASA = [
  ['चैत्र', 'Chaitra'], ['वैशाख', 'Vaishakha'], ['ज्येष्ठ', 'Jyeshtha'], ['आषाढ़', 'Ashadha'], ['श्रावण', 'Shravana'], ['भाद्रपद', 'Bhadrapada'],
  ['आश्विन', 'Ashvin'], ['कार्तिक', 'Kartik'], ['मार्गशीर्ष', 'Margashirsha'], ['पौष', 'Pausha'], ['माघ', 'Magha'], ['फाल्गुन', 'Phalguna'],
] as const

type Name = readonly [string, string]

/** Moon–Sun elongation in degrees, 0–360. */
const elongation = (d: Date) => Astronomy.MoonPhase(d)
const siderealSun = (d: Date) => norm(Astronomy.SunPosition(d).elon - lahiriAyanamsa(d))
const siderealMoon = (d: Date) => norm(Astronomy.EclipticGeoMoon(d).lon - lahiriAyanamsa(d))
const norm = (x: number) => ((x % 360) + 360) % 360

/** Time (within 3 days) when f(t), a quantity that grows steadily, next reaches a multiple of `step`. */
function nextBoundary(f: (d: Date) => number, from: Date, step: number): Date {
  const startIdx = Math.floor(f(from) / step)
  let lo = from.getTime()
  let hi = lo + 3600e3
  const idx = (t: number) => Math.floor(f(new Date(t)) / step)
  while (idx(hi) === startIdx && hi - lo < 4 * 86400e3) hi += 3600e3
  lo = hi - 3600e3
  while (hi - lo > 30e3) {
    const mid = (lo + hi) / 2
    if (idx(mid) === startIdx) lo = mid
    else hi = mid
  }
  return new Date(hi)
}

export interface TithiInfo {
  /** 1–30: 1–15 Shukla (15 = Purnima), 16–30 Krishna (30 = Amavasya) */
  n: number
  paksha: 'shukla' | 'krishna'
  name: Name
  end: Date
}

export function tithiAt(d: Date): TithiInfo {
  const n = Math.floor(elongation(d) / 12) + 1
  const inPaksha = ((n - 1) % 15) + 1
  const name = n === 15 ? PURNIMA : n === 30 ? AMAVASYA : TITHI[inPaksha - 1]
  return { n, paksha: n <= 15 ? 'shukla' : 'krishna', name, end: nextBoundary(elongation, d, 12) }
}

export function nakshatraAt(d: Date) {
  const span = 360 / 27
  const i = Math.floor(siderealMoon(d) / span)
  return { i, name: NAKSHATRA[i] as Name, end: nextBoundary(siderealMoon, d, span) }
}

export function yogaAt(d: Date) {
  const span = 360 / 27
  const f = (t: Date) => norm(siderealSun(t) + siderealMoon(t))
  const i = Math.floor(f(d) / span)
  return { i, name: YOGA[i] as Name, end: nextBoundary(f, d, span) }
}

export function karanaAt(d: Date) {
  const k = Math.floor(elongation(d) / 6) // 0–59
  let name: Name
  if (k === 0) name = ['किंस्तुघ्न', 'Kimstughna']
  else if (k >= 57) name = ([['शकुनि', 'Shakuni'], ['चतुष्पद', 'Chatushpada'], ['नाग', 'Naga']] as const)[k - 57]
  else name = KARANA_MOVING[(k - 1) % 7]
  return { name, end: nextBoundary(elongation, d, 6) }
}

/** Purnimanta month: Amanta month (named by the Sun's rashi at the last new moon), moved one ahead in Krishna paksha. */
export function masaAt(d: Date, paksha: 'shukla' | 'krishna') {
  // The last new moon before d. The 31 days before d can hold two of them (the day after amavasya, for one), so walk forward and keep the last
  let at = d
  let from = new Date(d.getTime() - 31 * 86400e3)
  for (let k = 0; k < 3; k++) {
    const nm = Astronomy.SearchMoonPhase(0, from, 32)
    if (!nm || nm.date.getTime() > d.getTime()) break
    at = nm.date
    from = new Date(nm.date.getTime() + 86400e3)
  }
  const amanta = (Math.floor(siderealSun(at) / 30) + 1) % 12
  const i = paksha === 'krishna' ? (amanta + 1) % 12 : amanta
  return { i, name: MASA[i] as Name }
}

/** Moonrise as calendars print it: the Moon's centre at the horizon, which is when it can first be seen over a low skyline. */
export function moonriseAfter(city: City, from: Date): Date | null {
  const obs = new Astronomy.Observer(city.lat, city.lon, 0)
  return Astronomy.SearchAltitude(Astronomy.Body.Moon, obs, +1, from, 1, 0)?.date ?? null
}

/** Rahu Kaal: one of the eight parts of daylight, fixed by weekday. */
const RAHU_PART = [8, 2, 7, 5, 6, 4, 3]

export interface DayPanchang {
  date: { y: number; m: number; d: number }
  weekday: number
  vara: Name
  sunrise: Date | null
  sunset: Date | null
  moonrise: Date | null
  moonset: Date | null
  tithi: TithiInfo
  nakshatra: ReturnType<typeof nakshatraAt>
  yoga: ReturnType<typeof yogaAt>
  karana: ReturnType<typeof karanaAt>
  masa: ReturnType<typeof masaAt>
  rahuKaal: { start: Date; end: Date } | null
  abhijit: { start: Date; end: Date } | null
  /** Vikram Samvat year */
  samvat: number
}

/** Panchang for a local calendar day; limbs are taken at sunrise, as printed calendars do. */
export function dayPanchang(city: City, y: number, m: number, d: number): DayPanchang {
  const start = localMidnightUtc(y, m, d, city.tz)
  const { sunrise, sunset } = sunriseSunset(city, start)
  const obs = new Astronomy.Observer(city.lat, city.lon, 0)
  const moonrise = moonriseAfter(city, start)
  const moonset = Astronomy.SearchRiseSet(Astronomy.Body.Moon, obs, -1, start, 1)?.date ?? null
  const at = sunrise ?? new Date(start.getTime() + 6 * 3600e3)
  const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay()
  const tithi = tithiAt(at)
  let rahuKaal = null
  let abhijit = null
  if (sunrise && sunset) {
    const part = (sunset.getTime() - sunrise.getTime()) / 8
    const k = RAHU_PART[weekday] - 1
    rahuKaal = { start: new Date(sunrise.getTime() + k * part), end: new Date(sunrise.getTime() + (k + 1) * part) }
    // Abhijit: the 8th of 15 daytime muhurtas, around local noon (not observed on Wednesdays)
    const muhurta = (sunset.getTime() - sunrise.getTime()) / 15
    if (weekday !== 3) abhijit = { start: new Date(sunrise.getTime() + 7 * muhurta), end: new Date(sunrise.getTime() + 8 * muhurta) }
  }
  const masa = masaAt(at, tithi.paksha)
  // Vikram Samvat turns over at Chaitra Shukla Pratipada
  const beforeNewYear = m <= 2 || (m <= 4 && (masa.i >= 10 || (masa.i === 0 && tithi.paksha === 'krishna')))
  const samvat = y + (beforeNewYear ? 56 : 57)
  return {
    date: { y, m, d },
    weekday,
    vara: VARA[weekday],
    sunrise,
    sunset,
    moonrise,
    moonset,
    tithi,
    nakshatra: nakshatraAt(at),
    yoga: yogaAt(at),
    karana: karanaAt(at),
    masa,
    rahuKaal,
    abhijit,
    samvat,
  }
}
