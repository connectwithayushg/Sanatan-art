import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ymd } from '../content/festivals'
import { nextMilestone, useDarshan } from '../lib/darshan'
import { Diya } from './Diya'

const WEEK_HI = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
const WEEK_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

/** Opens from the top-bar diya: total darshan days, this month's calendar with a diya on each darshan day, and the next milestone. */
export function DarshanSheet({ onClose }: { onClose: () => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const { days, total, today } = useDarshan()
  const now = ymd(new Date())
  const [month, setMonth] = useState(now.slice(0, 7))
  const [y, m] = month.split('-').map(Number)
  const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay()
  const length = new Date(Date.UTC(y, m, 0)).getUTCDate()
  const shift = (by: number) => setMonth(new Date(Date.UTC(y, m - 1 + by, 1)).toISOString().slice(0, 7))
  const title = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { month: 'long', year: 'numeric', timeZone: 'UTC' })
  const set = new Set(days)
  // Nothing to look back on before the first darshan day.
  const earliest = (days[0] ?? now).slice(0, 7)

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onClose])

  const arrow = 'grid h-10 w-10 place-items-center rounded-full text-[1.4rem] leading-none text-warm disabled:opacity-25'
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(43,26,16,0.35)]" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('darshanTitle')}>
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-xl rounded-t-3xl bg-night px-4 pt-2.5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto h-1.5 w-11 rounded-full bg-black/10" />
        <div className="mt-3 flex items-center gap-3">
          <Diya lit={today} size={40} />
          <div className="min-w-0">
            <h2 className="font-display text-[1.5rem] leading-tight text-warm">{t('darshanDays', { count: total })}</h2>
            {today && <p className="text-[0.85rem] text-dim">{t('darshanToday')}</p>}
          </div>
          <button onClick={onClose} aria-label={t('close')} className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full text-[1.3rem] text-dim">
            ✕
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button className={arrow} onClick={() => shift(-1)} disabled={month <= earliest} aria-label={t('prevMonth')}>
            ‹
          </button>
          <span className="font-bold text-warm">{title}</span>
          <button className={arrow} onClick={() => shift(1)} disabled={month >= now.slice(0, 7)} aria-label={t('nextMonth')}>
            ›
          </button>
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1 text-center tabular-nums">
          {(hi ? WEEK_HI : WEEK_EN).map((w) => (
            <span key={w} className="text-[0.75rem] text-dim">
              {w}
            </span>
          ))}
          {Array.from({ length: first }, (_, i) => (
            <span key={'b' + i} />
          ))}
          {Array.from({ length }, (_, i) => {
            const d = `${month}-${String(i + 1).padStart(2, '0')}`
            const yes = set.has(d)
            return (
              <span key={d} className={`relative grid h-10 place-items-center rounded-[10px] text-[0.8rem] ${yes ? 'bg-[#fff4df] text-warm' : 'text-dim'} ${d === now ? 'font-bold text-flame outline outline-2 -outline-offset-2 outline-flame' : ''}`}>
                {yes ? (
                  <>
                    <span className="absolute top-0 text-[0.65rem] leading-tight">{i + 1}</span>
                    <span className="absolute bottom-0.5">
                      <Diya lit size={18} />
                    </span>
                  </>
                ) : (
                  i + 1
                )}
              </span>
            )
          })}
        </div>
        <p className="mt-3 text-center text-[0.85rem] text-dim">{t('nextMilestone', { count: nextMilestone(total) })}</p>
      </div>
    </div>
  )
}
