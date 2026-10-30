import { describe, expect, it } from 'vitest'
import { nextOccasions, tithiOfDate, type Member } from './family'

const at = (iso: string) => new Date(iso + 'T10:00:00+05:30')
const m = (over: Partial<Member>): Member => ({ id: 'a', name: 'सुनीता', rel: 'mother', ...over })

describe('family occasions', () => {
  it('finds a calendar birthday this year, today counting as 0 days', () => {
    const [o] = nextOccasions([m({ bd: '1970-11-04' })], at('2026-10-27'))
    expect(o.date).toBe('2026-11-04')
    expect(o.days).toBe(8)
    expect(nextOccasions([m({ bd: '1970-10-27' })], at('2026-10-27'))[0].days).toBe(0)
  })

  it('rolls over to next year and sorts soonest first', () => {
    const list = nextOccasions([m({ id: 'a', bd: '1980-01-19' }), m({ id: 'b', an: '2000-12-02' })], at('2026-10-27'))
    expect(list.map((o) => o.date)).toEqual(['2026-12-02', '2027-01-19'])
  })

  it('moves 29 Feb to 28 Feb in other years', () => {
    const [o] = nextOccasions([m({ bd: '2000-02-29' })], at('2026-10-27'))
    expect(o.date).toBe('2027-02-28')
  })

  it('finds the same tithi again about a year later', () => {
    const birth = '1990-11-09'
    const tb = tithiOfDate(birth)
    expect(tb).toBeDefined()
    const [o] = nextOccasions([m({ bd: birth, byTithi: true, tb })], at('2026-10-27'))
    expect(o.byTithi).toBe(true)
    expect(o.days).toBeGreaterThanOrEqual(0)
    expect(o.days).toBeLessThan(400)
  })
})
