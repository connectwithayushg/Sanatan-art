import { localMidnightUtc, sunriseSunset, type City } from './astro'
import { diwaliMuhurat } from './diwali'
import { moonriseAfter } from './daily'

const parse = (date: string) => {
  const [y, m, d] = date.split('-').map(Number)
  return { y, m, d }
}

/** Karwa Chauth: fast from sunrise to moonrise; puja in the first tenth of the night after sunset (as Drik Panchang gives it). */
export function karwaChauthTimes(city: City, date: string) {
  const { y, m, d } = parse(date)
  const day = localMidnightUtc(y, m, d, city.tz)
  const { sunrise, sunset } = sunriseSunset(city, day)
  if (!sunrise || !sunset) return null
  const { sunrise: nextSunrise } = sunriseSunset(city, sunset)
  const night = nextSunrise ? nextSunrise.getTime() - sunset.getTime() : 12 * 3600e3
  return {
    fastStart: sunrise,
    puja: { start: sunset, end: new Date(sunset.getTime() + night / 10) },
    moonrise: moonriseAfter(city, new Date(sunset.getTime() - 3 * 3600e3)),
  }
}

export interface FestivalTime {
  /** String key for the label */
  label: string
  start: Date
  end: Date
  /** True when the time falls on the morning after the festival date */
  nextMorning?: boolean
}

/** One of the five equal parts of daylight (0 = pratah ... 4 = sayahna), as Drik Panchang uses for Govardhan and Bhai Dooj. */
function dayPart(sunrise: Date, sunset: Date, part: number) {
  const fifth = (sunset.getTime() - sunrise.getTime()) / 5
  return { start: new Date(sunrise.getTime() + part * fifth), end: new Date(sunrise.getTime() + (part + 1) * fifth) }
}

/** Muhurats for Dhanteras, Choti Diwali, Govardhan Puja and Bhai Dooj. */
export function festivalTimes(id: string, city: City, date: string): FestivalTime[] {
  const { y, m, d } = parse(date)
  const day = localMidnightUtc(y, m, d, city.tz)
  const { sunrise, sunset } = sunriseSunset(city, day)
  if (!sunrise || !sunset) return []
  if (id === 'dhanteras') {
    const mu = diwaliMuhurat(city, { y, m, d })
    if (!mu) return []
    return [
      { label: 'ft_dhanterasPuja', ...mu.puja },
      { label: 'ft_pradosh', ...mu.pradosh },
      { label: 'ft_yamaDeep', ...mu.pradosh },
    ]
  }
  if (id === 'choti-diwali') {
    const mu = diwaliMuhurat(city, { y, m, d })
    const next = localMidnightUtc(y, m, d + 1, city.tz)
    const { sunrise: nextSunrise } = sunriseSunset(city, next)
    const out: FestivalTime[] = []
    if (mu) out.push({ label: 'ft_deepdaan', ...mu.pradosh })
    if (nextSunrise) {
      // Abhyang snan: from moonrise (the thin moon rises just before dawn) until sunrise
      const moonrise = moonriseAfter(city, new Date(nextSunrise.getTime() - 4 * 3600e3))
      const start = moonrise && moonrise < nextSunrise ? moonrise : new Date(nextSunrise.getTime() - 96 * 60e3)
      out.push({ label: 'ft_abhyang', start, end: nextSunrise, nextMorning: true })
    }
    return out
  }
  if (id === 'govardhan') {
    return [
      { label: 'ft_pratah', ...dayPart(sunrise, sunset, 0) },
      { label: 'ft_sayam', ...dayPart(sunrise, sunset, 4) },
    ]
  }
  if (id === 'bhai-dooj') return [{ label: 'ft_aparahna', ...dayPart(sunrise, sunset, 3) }]
  const moonrise = moonriseAfter(city, new Date(sunset.getTime() - 3 * 3600e3))
  const moon = moonrise ? [{ label: 'moonrise', start: moonrise, end: moonrise }] : []
  if (id === 'sharad-purnima') return moon
  if (id === 'ahoi-ashtami') {
    // Puja in the first tenth of the night, as for Karwa Chauth; the moon rises late, so the fast is mostly broken on seeing stars
    const { sunrise: nextSunrise } = sunriseSunset(city, sunset)
    const night = nextSunrise ? nextSunrise.getTime() - sunset.getTime() : 12 * 3600e3
    return [{ label: 'ft_ahoiPuja', start: sunset, end: new Date(sunset.getTime() + night / 10) }, ...moon]
  }
  if (id === 'chhath') {
    const next = localMidnightUtc(y, m, d + 1, city.tz)
    const { sunrise: nextSunrise } = sunriseSunset(city, next)
    return [{ label: 'ft_sandhyaArghya', start: sunset, end: sunset }, ...(nextSunrise ? [{ label: 'ft_ushaArghya', start: nextSunrise, end: nextSunrise, nextMorning: true }] : [])]
  }
  if (id === 'dev-uthani') {
    const mu = diwaliMuhurat(city, { y, m, d })
    return mu ? [{ label: 'ft_tulsiVivah', ...mu.pradosh }] : []
  }
  if (id === 'kartik-purnima') {
    const mu = diwaliMuhurat(city, { y, m, d })
    return [...(mu ? [{ label: 'ft_deepdaan', ...mu.pradosh }] : []), ...moon]
  }
  return []
}
