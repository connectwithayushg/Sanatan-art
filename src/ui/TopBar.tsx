import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { useDarshan } from '../lib/darshan'
import { SearchGlyph } from '../features/search/Search'
import { DarshanSheet } from './DarshanSheet'
import { Diya } from './Diya'

/** Brand on the left (tapping it goes home); the darshan diya and count, search and the profile on the right, the same on every page. */
export function TopBar({ onSearch, onHome, onProfile, band = false }: { onSearch: () => void; onHome: () => void; onProfile: () => void; band?: boolean }) {
  const { t } = useTranslation()
  const darshan = useDarshan()
  const [calendar, setCalendar] = useState(false)
  // Fixed pixel sizes so the bar never overflows when the text is enlarged.
  const ring = band ? 'border-white/45 bg-white/15 text-white' : 'border-black/10 bg-white text-[#2b1a10]'
  const round = `grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] ${ring} transition active:scale-95`

  return (
    <header className={`relative z-10 ${band ? 'bg-[#d9600b]' : ''}`}>
      <div className="mx-auto flex h-[60px] max-w-xl items-center gap-2 px-4">
        <button onClick={onHome} aria-label={t('nav_aaj')} className={`shrink-0 whitespace-nowrap font-display text-[clamp(20px,6vw,26px)] leading-none ${band ? 'text-white' : 'text-[#c24e06]'}`}>
          {t('brand')}
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button
            className={`flex h-11 shrink-0 items-center gap-0.5 pr-1 text-[16px] font-bold tabular-nums transition active:scale-95 ${band ? 'text-white' : 'text-[#2b1a10]'}`}
            onClick={() => setCalendar(true)}
            aria-label={t('darshanCounter', { count: darshan.total })}
          >
            <Diya lit={darshan.today} size={26} cream={band && !darshan.today} />
            {darshan.total}
          </button>
          <button className={round} onClick={onSearch} aria-label={t('searchTitle')}>
            <SearchGlyph size={21} />
          </button>
          <button className={round} onClick={onProfile} aria-label={t('profileBtn')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="8.5" r="4" />
              <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" />
            </svg>
          </button>
        </div>
      </div>
      {/* Outside the header so the sheet sits above the tab bar. */}
      {calendar && createPortal(<DarshanSheet onClose={() => setCalendar(false)} />, document.body)}
    </header>
  )
}
