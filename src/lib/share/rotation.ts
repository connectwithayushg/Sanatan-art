export interface PoolHistory {
  cycle: number
  used: string[]
  lastId?: string
  daily?: { day: string; id: string }
}

export interface RotationState {
  version: 1
  pools: Record<string, PoolHistory>
}

export interface PickResult {
  id: string
  nextState: RotationState
  reusedToday: boolean
  repeatsPrevious: boolean
}

export function emptyRotation(): RotationState {
  return { version: 1, pools: {} }
}

export function indiaDay(now = new Date()): string {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now)
  const get = (type: string) => parts.find(part => part.type === type)!.value
  return `${get('year')}-${get('month')}-${get('day')}`
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function validScope(scope: string): boolean {
  return /^[a-z0-9][a-z0-9:/-]{0,159}$/.test(scope) && !['constructor', 'prototype', '__proto__'].includes(scope)
}

/** Storage wrapper may return malformed/old JSON; discard invalid pool records. */
export function parseRotation(value: unknown): RotationState {
  if (!isRecord(value) || value.version !== 1 || !isRecord(value.pools)) return emptyRotation()
  const result = emptyRotation()
  for (const [scope, pool] of Object.entries(value.pools)) {
    if (!validScope(scope) || !isRecord(pool) || !Number.isSafeInteger(pool.cycle) ||
      Number(pool.cycle) < 0 || !Array.isArray(pool.used) || !pool.used.every(id => typeof id === 'string')) continue
    const daily = isRecord(pool.daily) && typeof pool.daily.day === 'string' &&
      /^\d{4}-\d{2}-\d{2}$/.test(pool.daily.day) && typeof pool.daily.id === 'string'
      ? { day: pool.daily.day, id: pool.daily.id } : undefined
    result.pools[scope] = {
      cycle: Number(pool.cycle), used: [...new Set(pool.used as string[])],
      ...(typeof pool.lastId === 'string' ? { lastId: pool.lastId } : {}),
      ...(daily ? { daily } : {}),
    }
  }
  return result
}

function hash(text: string): number {
  let value = 2166136261
  for (let index = 0; index < text.length; index++) value = Math.imul(value ^ text.charCodeAt(index), 16777619)
  return value >>> 0
}

function order(ids: readonly string[], seed: string): string[] {
  let value = hash(seed)
  const random = () => {
    value = (value + 0x6d2b79f5) >>> 0
    let next = Math.imul(value ^ (value >>> 15), 1 | value)
    next = (next + Math.imul(next ^ (next >>> 7), 61 | next)) ^ next
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296
  }
  const result = [...ids].sort()
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1))
    const previous = result[index]
    result[index] = result[other]
    result[other] = previous
  }
  return result
}

/** Pure proposal. Persist nextState ONLY after the corresponding card rendered successfully. */
export function pickPicture(input: {
  ids: readonly string[]
  state: RotationState
  scope: string
  seed: string
  day: string
  forceNext?: boolean
}): PickResult | null {
  const { state, scope, seed, day, forceNext = false } = input
  if (!validScope(scope) || !/^\d{4}-\d{2}-\d{2}$/.test(day)) throw new Error('Invalid rotation scope or day')
  const ids = [...new Set(input.ids.filter(id => id.length > 0))]
  if (!ids.length) return null
  const allowed = new Set(ids)
  const previous = state.pools[scope] ?? { cycle: 0, used: [] }
  const used = previous.used.filter(id => allowed.has(id))
  if (!forceNext && previous.daily?.day === day && allowed.has(previous.daily.id)) {
    return { id: previous.daily.id, nextState: state, reusedToday: true, repeatsPrevious: false }
  }
  let cycle = previous.cycle
  let remaining = order(ids, `${seed}|${scope}|${cycle}`).filter(id => !used.includes(id))
  const cycleUsed = [...used]
  if (!remaining.length) {
    cycle++
    cycleUsed.length = 0
    remaining = order(ids, `${seed}|${scope}|${cycle}`)
    if (remaining.length > 1 && remaining[0] === previous.lastId) {
      remaining = [...remaining.slice(1), remaining[0]]
    }
  }
  const id = remaining[0]
  const next: PoolHistory = { cycle, used: [...cycleUsed, id], lastId: id, daily: { day, id } }
  return {
    id, nextState: { version: 1, pools: { ...state.pools, [scope]: next } },
    reusedToday: false, repeatsPrevious: id === previous.lastId,
  }
}

/** A person may explicitly choose a favourite, including one already seen. */
export function selectPicture(input: {
  id: string
  ids: readonly string[]
  state: RotationState
  scope: string
  day: string
}): RotationState {
  const { id, ids, state, scope, day } = input
  if (!validScope(scope) || !/^\d{4}-\d{2}-\d{2}$/.test(day) || !ids.includes(id)) {
    throw new Error('Manual picture is not in the eligible pool')
  }
  const allowed = new Set(ids)
  const previous = state.pools[scope] ?? { cycle: 0, used: [] }
  const used = previous.used.filter(value => allowed.has(value))
  const next: PoolHistory = {
    cycle: previous.cycle, used: [...new Set([...used, id])], lastId: id, daily: { day, id },
  }
  return { version: 1, pools: { ...state.pools, [scope]: next } }
}
