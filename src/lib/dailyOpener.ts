import { ymd } from '../content/festivals'
import { TEMPLES } from '../content/bharatTemples'
import { load, save } from './storage'

/** Kept off until Ayush explicitly enables saving wallpapers. */
export const WALLPAPER_SAVE_ENABLED = false
export const DAILY_WALLPAPER = '/art/redesign/ivory-shrine.webp'

export const indiaDayNumber = (now: Date) => Math.floor((now.getTime() + 330 * 60000) / 86400e3)
export const dailyTemple = (now = new Date()) => TEMPLES[indiaDayNumber(now) % TEMPLES.length]
export const dailyOpenerDue = (now = new Date()) => load('dailyOpenerDay', '') !== ymd(now)
export const markDailyOpenerSeen = (now = new Date()) => save('dailyOpenerDay', ymd(now))
