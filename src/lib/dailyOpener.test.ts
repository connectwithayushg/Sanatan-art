import { afterEach, describe, expect, it, vi } from 'vitest'
import { TEMPLES } from '../content/bharatTemples'
import { dailyOpenerDue, dailyTemple, markDailyOpenerSeen, WALLPAPER_SAVE_ENABLED } from './dailyOpener'
import { dailyShlokaPosition } from './dailyShloka'

afterEach(() => vi.unstubAllGlobals())

describe('once-a-day opener in India time', () => {
  it('dismissal persists across reloads and expires at IST midnight', () => {
    const memory = new Map<string, string>()
    vi.stubGlobal('localStorage', { getItem: (k: string) => memory.get(k) ?? null, setItem: (k: string, v: string) => memory.set(k, v) })
    const before = new Date('2026-10-26T18:29:59Z')
    expect(dailyOpenerDue(before)).toBe(true)
    markDailyOpenerSeen(before)
    expect(dailyOpenerDue(before)).toBe(false)
    expect(dailyOpenerDue(new Date('2026-10-26T18:30:00Z'))).toBe(true)
  })
  it('rotates through every existing temple without repetition', () => {
    const start = Date.parse('2026-10-26T06:00:00Z')
    const ids = Array.from({ length: TEMPLES.length }, (_, n) => dailyTemple(new Date(start + n * 86400e3)).id)
    expect(new Set(ids).size).toBe(94)
    expect(dailyTemple(new Date(start + TEMPLES.length * 86400e3)).id).toBe(ids[0])
  })
  it('uses the original Gita rotation and keeps wallpaper saving hidden', () => {
    expect(dailyShlokaPosition(new Date('2026-10-26T18:29:59Z'))).not.toEqual(dailyShlokaPosition(new Date('2026-10-26T18:30:00Z')))
    expect(dailyShlokaPosition(new Date('2026-10-26T00:00:00Z'))).toEqual(dailyShlokaPosition(new Date('2026-10-26T18:29:59Z')))
    expect(WALLPAPER_SAVE_ENABLED).toBe(false)
  })
})

describe('Mandir doors', async () => {
  const { doorsDue } = await import('../features/mandir/Dvar')
  it('uses 4 am IST and preserves the existing unpadded date key', () => {
    const memory = new Map<string, string>()
    vi.stubGlobal('localStorage', { getItem: (k: string) => memory.get(k) ?? null, setItem: (k: string, v: string) => memory.set(k, v) })
    expect(doorsDue(new Date('2026-10-25T22:29:59Z'))).toBe(false)
    expect(doorsDue(new Date('2026-10-25T22:30:00Z'))).toBe(true)
    expect(memory.has('sanatan:dvarDay')).toBe(false)
    memory.set('sanatan:dvarDay', JSON.stringify('2026-10-26'))
    expect(doorsDue(new Date('2026-10-26T06:00:00Z'))).toBe(false)
  })
})
