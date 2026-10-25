import { useEffect, useState } from 'react'
import { ymd } from '../content/festivals'
import { load, save } from './storage'

/** The three offerings that together make one day's darshan. */
export type Offering = 'diya' | 'phool' | 'ghanti'
const ALL: Offering[] = ['diya', 'phool', 'ghanti']

/** Milestones in days, the same numbers as the mala; after 108 every further 108. */
const MILESTONES = [11, 21, 51, 108]

interface Today {
  date: string
  did: Offering[]
}

const EVENT = 'sanatan:darshan'
const day = (s: string, by: number) => ymd(new Date(new Date(s + 'T12:00:00+05:30').getTime() + by * 86400e3))

/**
 * Darshan days, YYYY-MM-DD in IST, oldest first. The count is the total and never resets.
 * Before this, the mandir kept only a run of days in a row ({ date, streak }); those days are carried over.
 */
function readDays(): string[] {
  const days = load<string[] | null>('darshanDays', null)
  if (days) return days
  const old = load<{ date?: string; streak?: number }>('darshan', {})
  const carried = old.date && old.streak ? Array.from({ length: old.streak }, (_, i) => day(old.date!, i + 1 - old.streak!)) : []
  save('darshanDays', carried)
  return carried
}

/** Records one offering; when all three are done today, today becomes a darshan day. */
export function offer(what: Offering) {
  const today = ymd(new Date())
  const t = load<Today>('darshanToday', { date: '', did: [] })
  const did = t.date === today ? t.did : []
  if (!did.includes(what)) save('darshanToday', { date: today, did: [...did, what] })
  const days = readDays()
  if (days.includes(today) || !ALL.every((o) => o === what || did.includes(o))) return
  save('darshanDays', [...days, today])
  dispatchEvent(new Event(EVENT))
}

export const nextMilestone = (total: number) => MILESTONES.find((m) => m > total) ?? (Math.floor(total / 108) + 1) * 108

/** Total darshan days, whether today is done, and the days themselves; updates when the mandir records a darshan. */
export function useDarshan() {
  const [days, setDays] = useState(readDays)
  useEffect(() => {
    const update = () => setDays(readDays())
    addEventListener(EVENT, update)
    // A new day turns the top diya back off without a reload.
    addEventListener('visibilitychange', update)
    return () => {
      removeEventListener(EVENT, update)
      removeEventListener('visibilitychange', update)
    }
  }, [])
  return { days, total: days.length, today: days.includes(ymd(new Date())) }
}
