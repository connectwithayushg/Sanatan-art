import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextMilestone, offer } from './darshan'

afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals() })

describe('cumulative darshan days', () => {
  it('retains days after a gap and counts all three offerings only once', () => {
    const memory = new Map<string, string>([['sanatan:darshanDays', JSON.stringify(['2026-10-01'])]])
    vi.stubGlobal('localStorage', { getItem: (k: string) => memory.get(k) ?? null, setItem: (k: string, v: string) => memory.set(k, v) })
    vi.stubGlobal('dispatchEvent', vi.fn())
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-10-26T06:00:00Z'))
    offer('diya')
    offer('phool')
    expect(JSON.parse(memory.get('sanatan:darshanDays')!)).toHaveLength(1)
    offer('ghanti')
    offer('ghanti')
    expect(JSON.parse(memory.get('sanatan:darshanDays')!)).toEqual(['2026-10-01', '2026-10-26'])
    vi.setSystemTime(new Date('2026-11-01T06:00:00Z'))
    offer('phool'); offer('ghanti'); offer('diya')
    expect(JSON.parse(memory.get('sanatan:darshanDays')!)).toEqual(['2026-10-01', '2026-10-26', '2026-11-01'])
  })
  it('returns only the next milestone', () => {
    expect([0, 11, 21, 51].map(nextMilestone)).toEqual([11, 21, 51, 108])
  })
})
