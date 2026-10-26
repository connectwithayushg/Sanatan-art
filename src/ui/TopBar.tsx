import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { useDarshan } from '../lib/darshan'
import { SearchGlyph } from '../features/search/Search'
import { DarshanSheet } from './DarshanSheet'
import { Diya } from './Diya'
import { save } from '../lib/storage'

/** Brand on the left (tapping it goes home); the darshan diya and count, search and the profile on the right, the same on every page. */
export function TopBar({ onSearch, onHome, onProfile }: { onSearch: () => void; onHome: () => void; onProfile: () => void }) {
  const { t, i18n } = useTranslation()
  const darshan = useDarshan()
  const [calendar, setCalendar] = useState(false)
  const round = 'topbar-action'

  return (
    <header className="app-topbar">
      <div className="topbar-row">
        <button onClick={onHome} aria-label={t('nav_aaj')} className="topbar-brand">
          {t('brand')}
        </button>
        <div className="topbar-actions">
          <button
            className="topbar-counter"
            onClick={() => setCalendar(true)}
            aria-label={t('darshanCounter', { count: darshan.total })}
          >
            <Diya lit={darshan.today} size={24} cream={!darshan.today} />
            {darshan.total}
          </button>
          <button className="topbar-language" lang={i18n.language === 'hi' ? 'en' : 'hi'} onClick={() => {
            const next = i18n.language === 'hi' ? 'en' : 'hi'
            save('lang', next)
            void i18n.changeLanguage(next)
          }}>{t('lang')}</button>
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
