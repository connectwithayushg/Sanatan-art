import * as Astronomy from 'astronomy-engine'

export interface City {
  id: string
  name_hi: string
  name_en: string
  lat: number
  lon: number
  /** UTC offset in minutes (India = 330) */
  tz: number
}

const DEG = Math.PI / 180

/** Lahiri (Chitrapaksha) ayanamsa in degrees, linear approximation good to ~1' for 1950–2100. */
export function lahiriAyanamsa(date: Date): number {
  const years = (date.getTime() - Date.UTC(2000, 0, 1, 12)) / (365.25 * 86400000)
  return 23.85306 + years * 0.0139685
}

export function sunriseSunset(city: City, dayStartUtc: Date) {
  const obs = new Astronomy.Observer(city.lat, city.lon, 0)
  const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, dayStartUtc, 1)
  const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, dayStartUtc, 1)
  return { sunrise: rise?.date ?? null, sunset: set?.date ?? null }
}

/** Sidereal (Lahiri) longitude of the ascendant, degrees 0–360. */
export function siderealAscendant(city: City, date: Date): number {
  const time = Astronomy.MakeTime(date)
  const gst = Astronomy.SiderealTime(time) // hours
  const ramc = ((gst * 15 + city.lon) % 360 + 360) % 360
  const eps = 23.4393 * DEG
  const phi = city.lat * DEG
  const r = ramc * DEG
  let asc = Math.atan2(Math.cos(r), -(Math.sin(r) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))) / DEG
  asc = (asc + 360) % 360
  return ((asc - lahiriAyanamsa(date)) % 360 + 360) % 360
}

/** Rashi index 0 = Mesha … 11 = Meena */
export const rashiOf = (lon: number) => Math.floor(lon / 30)

/** Windows (within [from, to]) when the sidereal ascendant is in the given rashi. Minute resolution. */
export function lagnaWindows(city: City, rashi: number, from: Date, to: Date) {
  const out: { start: Date; end: Date }[] = []
  let cur: Date | null = null
  for (let t = from.getTime(); t <= to.getTime(); t += 60000) {
    const inside = rashiOf(siderealAscendant(city, new Date(t))) === rashi
    if (inside && !cur) cur = new Date(t)
    if (!inside && cur) {
      out.push({ start: cur, end: new Date(t) })
      cur = null
    }
  }
  if (cur) out.push({ start: cur, end: to })
  return out
}

/** Start and end of Amavasya tithi (Moon–Sun elongation 348°→360°) around a date. */
export function amavasyaAround(date: Date) {
  const searchFrom = new Date(date.getTime() - 3 * 86400000)
  const start = Astronomy.SearchMoonPhase(348, searchFrom, 10)
  const end = start ? Astronomy.SearchMoonPhase(0, start.date, 5) : null
  return { start: start?.date ?? null, end: end?.date ?? null }
}

/** Start of the given UTC instant's local calendar day in UTC. */
export function localMidnightUtc(y: number, m: number, d: number, tz: number) {
  return new Date(Date.UTC(y, m - 1, d) - tz * 60000)
}
