import { describe, expect, it } from 'vitest'
import { diwaliMuhurat } from './diwali'
import { CITIES } from '../../content/cities'

const ist = (d: Date) => new Date(d.getTime() + 330 * 60000).toISOString().slice(11, 16)
const city = (id: string) => CITIES.find((c) => c.id === id)!
const near = (actual: Date, hhmm: string, tol = 3) => {
  const [h, m] = hhmm.split(':').map(Number)
  const a = new Date(actual.getTime() + 330 * 60000)
  return Math.abs(a.getUTCHours() * 60 + a.getUTCMinutes() - (h * 60 + m)) <= tol
}

describe('Diwali muhurat', () => {
  it('matches Drik Panchang for New Delhi, Diwali 2025 (20 Oct): Lakshmi Puja 19:08–20:18', () => {
    const m = diwaliMuhurat(city('delhi'), { y: 2025, m: 10, d: 20 })!
    expect(near(m.puja.start, '19:08'), ist(m.puja.start)).toBe(true)
    expect(near(m.puja.end, '20:18'), ist(m.puja.end)).toBe(true)
  })

  it('gives an evening window for Indore on 8 Nov 2026', () => {
    const m = diwaliMuhurat(city('indore'))!
    expect(ist(m.sunset)).toBe('17:45')
    expect(near(m.puja.start, '18:10')).toBe(true)
    expect(near(m.puja.end, '20:09'), ist(m.puja.end)).toBe(true)
  })

  it('finds Amavasya spanning the evening of 8 Nov 2026', () => {
    const m = diwaliMuhurat(city('indore'))!
    expect(m.amavasya.start!.getTime()).toBeLessThan(m.sunset.getTime())
    expect(m.amavasya.end!.getTime()).toBeGreaterThan(m.pradosh.end.getTime())
  })

  it('computes a window for every listed city', () => {
    for (const c of CITIES) expect(diwaliMuhurat(c), c.id).not.toBeNull()
  })
})
