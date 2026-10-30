import { describe, expect, it } from 'vitest'
import { nextOccasions, tithiLabel, type Member } from './family'

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
    expect(list.filter((o) => !o.byTithi).map((o) => o.date)).toEqual(['2026-12-02', '2027-01-19'])
    expect(list.map((o) => o.days)).toEqual([...list.map((o) => o.days)].sort((a, b) => a - b))
  })

  it('moves 29 Feb to 28 Feb in other years', () => {
    const [o] = nextOccasions([m({ bd: '2000-02-29' })], at('2026-10-27'))
    expect(o.date).toBe('2027-02-28')
  })

  it('also finds the tithi date, as a second occasion, unless it is the same day', () => {
    const birth = '1990-11-09'
    const list = nextOccasions([m({ bd: birth })], at('2026-10-27'))
    const tithi = list.filter((o) => o.byTithi)
    expect(list.filter((o) => !o.byTithi)).toHaveLength(1)
    expect(tithi.length).toBeLessThanOrEqual(1)
    for (const o of tithi) {
      expect(o.days).toBeGreaterThanOrEqual(0)
      expect(o.days).toBeLessThan(400)
      expect(o.date).not.toBe(list.find((x) => !x.byTithi)!.date)
    }
  })

  it('names the tithi in words', () => {
    expect(tithiLabel({ n: 24, masa: 7 }, 0, ['शुक्ल', 'कृष्ण'])).toBe('कार्तिक कृष्ण नवमी')
    expect(tithiLabel({ n: 15, masa: 7 }, 1, ['Shukla', 'Krishna'])).toBe('Kartik Purnima')
  })
})
