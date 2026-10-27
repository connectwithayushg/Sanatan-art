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
            <SearchGlyph size={24} />
          </button>
          <button className={round} onClick={onProfile} aria-label={t('profileBtn')}>
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="15" fill="#fff4df" />
              <circle cx="16" cy="11" r="5" fill="#d9600b" />
              <path d="M6.5 26c.8-5.5 4.5-8 9.5-8s8.7 2.5 9.5 8c-5.6 3.4-13.4 3.4-19 0Z" fill="#d9600b" />
            </svg>
          </button>
        </div>
      </div>
      {/* Outside the header so the sheet sits above the tab bar. */}
      {calendar && createPortal(<DarshanSheet onClose={() => setCalendar(false)} />, document.body)}
    </header>
  )
}
