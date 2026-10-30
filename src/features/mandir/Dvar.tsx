import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ringGhanti } from '../../lib/audio/bell'
import { load, save } from '../../lib/storage'

/** The doors open on the first visit of each day, and only from 4 am: a look at the phone at 1 am does not use them up. */
const doorDay = (now: Date) => {
  const india = new Date(now.getTime() + 330 * 60000)
  return `${india.getUTCFullYear()}-${india.getUTCMonth() + 1}-${india.getUTCDate()}`
}
export function doorsDue(now = new Date()) {
  const hour = new Date(now.getTime() + 330 * 60000).getUTCHours()
  return hour >= 4 && load('dvarDay', '') !== doorDay(now)
}

/**
 * The Mandir's carved doors, shut when the app opens. A tap rings the ghanti and the two leaves swing open slowly onto the Mandir.
 * A phone only allows sound after a touch, so the tap carries the bell; left alone, the doors open by themselves with no bell.
 */
export function Dvar({ onDone }: { onDone: () => void }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const opening = (bell: boolean) => {
    if (open) return
    if (bell) ringGhanti(0.22)
    setOpen(true)
  }
  useEffect(() => {
    const auto = setTimeout(() => opening(false), 5000)
    return () => clearTimeout(auto)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])
  useEffect(() => {
    if (!open) return
    const gone = setTimeout(onDone, 3000)
    return () => clearTimeout(gone)
  }, [open, onDone])
  useEffect(() => {
    save('dvarDay', doorDay(new Date()))
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={t('dvarOpen')}
      onClick={() => opening(true)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          opening(true)
        }
      }}
      className={`dvar ${open ? 'is-open' : ''}`}
    >
      <div className="dvar-leaf dvar-l" />
      <div className="dvar-leaf dvar-r" />
      <div className="dvar-flood" aria-hidden="true" />
    </div>
  )
}
