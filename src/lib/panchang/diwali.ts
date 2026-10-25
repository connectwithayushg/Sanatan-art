import { amavasyaAround, lagnaWindows, localMidnightUtc, sunriseSunset, type City } from './astro'

/** Diwali (Lakshmi Puja) date for 2026, from the festival calendar (verified against Drik Panchang). */
export const DIWALI_2026 = { y: 2026, m: 11, d: 8 }

const VRISHABHA = 1

export interface DiwaliMuhurat {
  sunset: Date
  pradosh: { start: Date; end: Date }
  vrishabha: { start: Date; end: Date } | null
  /** Recommended Lakshmi Puja window: Pradosh ∩ Vrishabha lagna (falls back to Pradosh) */
  puja: { start: Date; end: Date }
  amavasya: { start: Date | null; end: Date | null }
}

export function diwaliMuhurat(city: City, date = DIWALI_2026): DiwaliMuhurat | null {
  const day = localMidnightUtc(date.y, date.m, date.d, city.tz)
  const { sunset } = sunriseSunset(city, day)
  if (!sunset) return null
  // Pradosh = first 3 of the 15 night muhurtas, i.e. one-fifth of sunset → next sunrise
  const { sunrise: nextSunrise } = sunriseSunset(city, sunset)
  const night = nextSunrise ? nextSunrise.getTime() - sunset.getTime() : 12 * 3600e3
  const pradosh = { start: sunset, end: new Date(sunset.getTime() + night / 5) }
  const windows = lagnaWindows(city, VRISHABHA, new Date(sunset.getTime() - 3 * 3600e3), new Date(sunset.getTime() + 6 * 3600e3))
  const vrishabha = windows.find((w) => w.end > pradosh.start && w.start < pradosh.end) ?? null
  const puja = vrishabha
    ? {
        start: new Date(Math.max(vrishabha.start.getTime(), pradosh.start.getTime())),
        end: new Date(Math.min(vrishabha.end.getTime(), pradosh.end.getTime())),
      }
    : pradosh
  return { sunset, pradosh, vrishabha, puja, amavasya: amavasyaAround(day) }
}
