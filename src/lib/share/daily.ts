import { ymd } from '../../content/festivals'
import { load, save } from '../storage'

/** A random id kept on this phone, so each person gets their own daily picks. */
export function phoneSeed(): string {
  let seed = load('cardSeed', '')
  if (!seed) {
    seed = Math.random().toString(36).slice(2, 10)
    save('cardSeed', seed)
  }
  return seed
}

function hash(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return h >>> 0
}

/** The list in a shuffled order that stays the same for this phone, this key and this day. */
function shuffled<T>(items: T[], key: string, day: string): T[] {
  let a = hash(`${phoneSeed()}|${key}|${day}`)
  const rand = () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Today's order for this phone: yesterday's first three go to the back, so a daily user sees something new.
 * The first `n` are today's picks; "show more" moves along this list `n` at a time.
 */
export function dailyOrder<T>(items: T[], key: string, n = 3, now = new Date()): T[] {
  const today = ymd(now)
  const yesterday = ymd(new Date(now.getTime() - 86400e3))
  const seen = new Set(shuffled(items, key, yesterday).slice(0, n))
  const order = shuffled(items, key, today)
  if (items.length < 2 * n) return order
  return [...order.filter((x) => !seen.has(x)), ...order.filter((x) => seen.has(x))]
}

/** The `round`-th group of `n` from a daily order, wrapping round to the start. */
export function page<T>(order: T[], round: number, n = 3): T[] {
  if (order.length <= n) return order
  const start = (round * n) % order.length
  return Array.from({ length: n }, (_, i) => order[(start + i) % order.length])
}
