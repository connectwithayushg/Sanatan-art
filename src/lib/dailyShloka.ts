import { useEffect, useState } from 'react'
import { MEANINGS } from '../content/gita/meanings'

export type Sanskrit = Record<string, string[]>
let cache: Sanskrit | null = null
let pending: Promise<Sanskrit> | null = null

/** Shared by Path, Today and the daily sheet; identical to the original Path rotation. */
export const DAILY_SHLOKAS: [number, number][] = [
  [2, 47], [2, 14], [2, 20], [2, 22], [2, 48], [12, 8], [2, 50], [2, 62], [2, 63], [12, 13], [2, 23], [12, 15], [2, 56], [12, 20], [2, 38], [2, 71],
]

export function loadSanskrit() {
  if (cache) return Promise.resolve(cache)
  pending ??= import('../content/gita/sanskrit.json').then((m) => { cache = m.default as Sanskrit; return cache })
  return pending
}

export function useSanskrit() {
  const [data, setData] = useState(cache)
  useEffect(() => {
    let active = true
    void loadSanskrit().then((value) => { if (active) setData(value) }).catch(() => {})
    return () => { active = false }
  }, [])
  return data
}

export function dailyShlokaPosition(now = new Date()) {
  const day = Math.floor((now.getTime() + 330 * 60000) / 86400e3)
  const [chapter, verse] = DAILY_SHLOKAS[day % DAILY_SHLOKAS.length]
  return { chapter, verse, meaning: MEANINGS[chapter][verse - 1] }
}

export function useDailyShloka() {
  const sanskrit = useSanskrit()
  const selected = dailyShlokaPosition()
  return { ...selected, text: sanskrit?.[selected.chapter][selected.verse - 1] ?? '' }
}
