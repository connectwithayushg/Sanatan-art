// @ts-nocheck -- ported from the handoff reference tests, which are untyped
import { test } from 'vitest'
import assert from 'node:assert/strict'
import { emptyRotation, indiaDay, parseRotation, pickPicture, selectPicture } from './rotation'

const scope = 'suprabhat:ganesh'
const seed = 'test-phone'
const day = '2026-10-30'
const pick = (ids, state = emptyRotation(), extra = {}) => pickPicture({ ids, state, scope, seed, day, ...extra })

test('a 200-picture collection is exhausted before an automatic repeat', () => {
  const ids = Array.from({ length: 200 }, (_, i) => `picture-${i}`)
  let state = emptyRotation()
  const seen = []
  for (let i = 0; i < ids.length; i++) {
    const result = pick(ids, state, { forceNext: true })
    seen.push(result.id)
    state = result.nextState
  }
  assert.equal(new Set(seen).size, 200)
  const next = pick(ids, state, { forceNext: true })
  assert.notEqual(next.id, seen.at(-1))
  assert.equal(next.nextState.pools[scope].cycle, 1)
})

test('same-day revisit returns the same picture without consuming another', () => {
  const first = pick(['a', 'b', 'c'])
  const again = pick(['a', 'b', 'c'], first.nextState)
  assert.equal(again.id, first.id)
  assert.equal(again.reusedToday, true)
  assert.strictEqual(again.nextState, first.nextState)
  assert.equal(again.nextState.pools[scope].used.length, 1)
})

test('next India day advances within the cycle', () => {
  const first = pick(['a', 'b', 'c'])
  const second = pick(['a', 'b', 'c'], first.nextState, { day: '2026-10-31' })
  assert.notEqual(second.id, first.id)
})

test('a failed-render proposal does not consume history unless caller commits it', () => {
  const state = emptyRotation()
  const before = JSON.stringify(state)
  const proposal = pick(['a', 'b', 'c'], state)
  assert.equal(JSON.stringify(state), before)
  assert.equal(pick(['a', 'b', 'c'], state).id, proposal.id)
})

test('new catalogue entries join the unconsumed pool without resetting history', () => {
  let state = emptyRotation()
  for (let i = 0; i < 2; i++) state = pick(['a', 'b'], state, { forceNext: true }).nextState
  const next = pick(['a', 'b', 'new'], state, { forceNext: true })
  assert.equal(next.id, 'new')
  assert.equal(next.nextState.pools[scope].cycle, 0)
})

test('a retired same-day asset is replaced only from the eligible pool', () => {
  const first = pick(['a', 'b', 'c'])
  const ids = ['a', 'b', 'c'].filter(id => id !== first.id)
  const next = pick(ids, first.nextState)
  assert.ok(ids.includes(next.id))
  assert.notEqual(next.id, first.id)
  assert.ok(!next.nextState.pools[scope].used.includes(first.id))
})

test('empty pools return null and one-picture pools honestly repeat', () => {
  assert.equal(pick([]), null)
  const first = pick(['only'])
  const next = pick(['only'], first.nextState, { day: '2026-10-31' })
  assert.equal(next.id, 'only')
  assert.equal(next.repeatsPrevious, true)
})

test('input order and duplicate IDs do not change deterministic selection', () => {
  assert.equal(pick(['a', 'b', 'c']).id, pick(['c', 'a', 'b', 'a']).id)
})

test('manual repeat is allowed and becomes the stable daily choice', () => {
  const first = pick(['a', 'b'])
  const state = selectPicture({ id: first.id, ids: ['a', 'b'], state: first.nextState, scope, day })
  assert.equal(pick(['a', 'b'], state).id, first.id)
  assert.equal(state.pools[scope].used.length, 1)
  assert.throws(() => selectPicture({ id: 'forbidden', ids: ['a'], state, scope, day }))
})

test('different pools retain independent histories', () => {
  const first = pick(['a', 'b'])
  const second = pick(['x', 'y'], first.nextState, { scope: 'festival:diwali' })
  assert.deepEqual(second.nextState.pools[scope], first.nextState.pools[scope])
})

test('IST midnight is independent of host timezone', () => {
  assert.equal(indiaDay(new Date('2026-10-30T18:29:59Z')), '2026-10-30')
  assert.equal(indiaDay(new Date('2026-10-30T18:30:00Z')), '2026-10-31')
})

test('malformed stored history recovers without throwing', () => {
  for (const input of [null, '', [], { version: 2 }, { version: 1, pools: null }]) {
    assert.deepEqual(parseRotation(input), emptyRotation())
  }
  const parsed = parseRotation({ version: 1, pools: {
    [scope]: { cycle: 3, used: ['a', 'a'], daily: { day, id: 'a' } },
    broken: { cycle: -1, used: 'bad' },
  } })
  assert.deepEqual(parsed.pools[scope].used, ['a'])
  assert.equal(parsed.pools.broken, undefined)
  assert.throws(() => pick(['a'], emptyRotation(), { scope: '__proto__' }))
})
