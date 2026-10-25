import { describe, expect, it } from 'vitest'
import { dayPanchang } from './daily'
import { CITIES } from '../../content/cities'

const delhi = CITIES.find((c) => c.id === 'delhi')!
/** Minutes past midnight, India time */
const mins = (d: Date | null) => {
  const s = new Date(d!.getTime() + 330 * 60000).toISOString()
  return Number(s.slice(11, 13)) * 60 + Number(s.slice(14, 16))
}
const at = (h: number, m: number) => h * 60 + m

// Reference values: Drik Panchang, New Delhi.
describe('daily panchang, Delhi', () => {
  it('20 Oct 2026', () => {
    const p = dayPanchang(delhi, 2026, 10, 20)
    expect(p.vara[1]).toBe('Tuesday')
    expect(p.tithi.name[1]).toBe('Navami')
    expect(p.masa.name[1]).toBe('Ashvin')
    expect(p.nakshatra.name[1]).toBe('Shravana')
    expect(p.yoga.name[1]).toBe('Shula')
    expect(p.karana.name[1]).toBe('Kaulava')
    expect(p.samvat).toBe(2083)
    expect(Math.abs(mins(p.sunrise) - at(6, 25))).toBeLessThanOrEqual(2)
    expect(Math.abs(mins(p.sunset) - at(17, 47))).toBeLessThanOrEqual(2)
    expect(Math.abs(mins(p.moonrise) - at(14, 23))).toBeLessThanOrEqual(3)
    expect(Math.abs(mins(p.nakshatra.end) - at(18, 2))).toBeLessThanOrEqual(3)
  })
  it('Karwa Chauth, 29 Oct 2026: Kartik Krishna Chaturthi, moonrise 8:17 pm', () => {
    const p = dayPanchang(delhi, 2026, 10, 29)
    expect(p.tithi.n).toBe(19)
    expect(p.masa.name[1]).toBe('Kartik')
    expect(Math.abs(mins(p.moonrise) - at(20, 17))).toBeLessThanOrEqual(2)
    expect(Math.abs(mins(p.sunrise) - at(6, 31))).toBeLessThanOrEqual(2)
  })
  it('the day after amavasya is already Kartik (10 Nov 2026), and the days around stay Kartik', () => {
    for (const d of [8, 9, 10, 11, 12]) expect(dayPanchang(delhi, 2026, 11, d).masa.name[1]).toBe('Kartik')
    expect(dayPanchang(delhi, 2026, 10, 26).masa.name[1]).toBe('Ashvin')
  })
})

describe('festival times', async () => {
  const { karwaChauthTimes } = await import('./festivalTimes')
  it('Karwa Chauth puja 5:38–6:56 pm, Delhi', () => {
    const k = karwaChauthTimes(delhi, '2026-10-29')!
    expect(Math.abs(mins(k.puja.start) - at(17, 38))).toBeLessThanOrEqual(2)
    expect(Math.abs(mins(k.puja.end) - at(18, 56))).toBeLessThanOrEqual(2)
    expect(Math.abs(mins(k.moonrise) - at(20, 17))).toBeLessThanOrEqual(2)
  })
})
