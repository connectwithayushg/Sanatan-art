import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { daysUntil, nextFestival, todayIST } from '../../content/festivals'
import { dailyTemple, DAILY_WALLPAPER, markDailyOpenerSeen, WALLPAPER_SAVE_ENABLED } from '../../lib/dailyOpener'
import { useDailyShloka } from '../../lib/dailyShloka'
import { dayPanchang } from '../../lib/panchang/daily'
import { formatClock } from '../../lib/format'
import { downloadBlob, shareFile, shareText } from '../../lib/share/send'
import { useCity } from '../../ui/CityPicker'
import { ShareIcon } from '../../ui/ShareIcon'
import { STATE_NAMES } from '../bharat/stateNames'

/** A skippable daily companion. The Mandir doors only mount after it closes. */
export function DailyOpener({ onClose }: { onClose: () => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const lang = hi ? 'hi' : 'en'
  const [now] = useState(() => new Date())
  const [city] = useCity()
  const { y, m, d } = todayIST(now)
  const p = useMemo(() => dayPanchang(city, y, m, d), [city, y, m, d])
  const shloka = useDailyShloka()
  const temple = dailyTemple(now)
  const state = STATE_NAMES[temple.state]?.[lang] ?? temple.state
  const festival = nextFestival(now)
  const festivalLine = festival ? `${hi ? festival.name_hi : festival.name_en} · ${daysUntil(festival, now) === 0 ? t('festivalToday') : t('festivalIn', { count: daysUntil(festival, now) })}` : t('r_calendarMore')
  const tithi = `${p.masa.name[hi ? 0 : 1]} · ${t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')} ${p.tithi.name[hi ? 0 : 1]}`
  const rahu = p.rahuKaal ? `${formatClock(p.rahuKaal.start, lang)} – ${formatClock(p.rahuKaal.end, lang)}` : '–'
  const oneLine = temple.importance[lang].split(/।\s|\.\s/)[0]
  const [active, setActive] = useState(0)
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const titles = [t('verseOfDay'), t('r_templeToday'), t('r_wallpaperToday'), t('q_panchang')]

  useEffect(() => {
    markDailyOpenerSeen(now)
    const el = dialog.current
    el?.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { el?.close(); document.body.style.overflow = previous }
  }, [now])

  const move = (n: number) => {
    const el = track.current
    if (!el) return
    el.scrollTo({ left: Math.max(0, Math.min(3, n)) * el.clientWidth, behavior: 'smooth' })
  }
  const share = async (index: number) => {
    setBusy(true)
    setNotice('')
    try {
      let result
      if (index === 2) {
        const response = await fetch(DAILY_WALLPAPER)
        if (!response.ok) throw new Error('Wallpaper unavailable')
        result = await shareFile(new File([await response.blob()], 'sanatan-wallpaper.webp', { type: 'image/webp' }), `${titles[index]} · ॐ सनातन ऐप`)
      } else {
        const text = index === 0 ? `${t('gitaRef', { ch: shloka.chapter, v: shloka.verse })}\n${shloka.text}\n\n${shloka.meaning[lang]}` : index === 1 ? `${temple.name[lang]} · ${state}\n${oneLine}` : `${tithi}\n${t('rahuKaal')}: ${rahu}\n${festivalLine}`
        result = await shareText(`${text}\n\nॐ सनातन ऐप`)
      }
      if (result === 'copied' || result === 'saved') setNotice(t(result === 'copied' ? 'r_textCopied' : 'cardSaved'))
    } catch { setNotice(t('r_shareError')) }
    finally { setBusy(false) }
  }

  return (
    <dialog ref={dialog} className="daily-dialog" aria-labelledby="daily-title" onCancel={(e) => { e.preventDefault(); onClose() }} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="daily-sheet">
        <header className="daily-sheet-header"><div><p>{t('r_dailyCompanion')}</p><h2 id="daily-title">{t('r_dailyWelcome')}</h2></div><button onClick={onClose} autoFocus>{t('r_later')} <span aria-hidden="true">×</span></button></header>
        <div ref={track} className="daily-track" onScroll={() => { const el = track.current; if (el) setActive(Math.round(el.scrollLeft / el.clientWidth)) }} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(active + (e.key === 'ArrowRight' ? 1 : -1)) } }} tabIndex={0} aria-label={t('r_dailyCards')}>
          {titles.map((title, index) => <section key={title} className={`daily-panel daily-panel-${index}`} aria-label={`${index + 1} / 4 · ${title}`}>
            <div className="daily-panel-title"><h3>{title}</h3><button disabled={busy || (index === 0 && !shloka.text)} onClick={() => { void share(index) }} aria-label={`${t('share')} · ${title}`}><ShareIcon /></button></div>
            {index === 0 && <><p className="shloka-reference">{t('gitaRef', { ch: shloka.chapter, v: shloka.verse })}</p><img className="daily-shloka-photo" src="/art/redesign/path-banner.webp" alt="" /><p className="daily-verse">{shloka.text || t('loading')}</p><p className="daily-meaning">{shloka.meaning[lang]}</p></>}
            {index === 1 && <><img className="daily-temple-photo" src={`/art/bharat/${temple.id}.webp`} alt={temple.name[lang]} /><h4>{temple.name[lang]}</h4><p className="daily-state">{state}</p><p>{oneLine}</p><button className="secondary-action" onClick={() => { onClose(); location.hash = `#mandir/bharat/t/${temple.id}` }}>{t('r_templeDetails')} →</button></>}
            {index === 2 && <><img className="daily-wallpaper" src={DAILY_WALLPAPER} alt={t('r_wallpaperAlt')} />{WALLPAPER_SAVE_ENABLED && <button className="secondary-action" onClick={async () => { const response = await fetch(DAILY_WALLPAPER); if (response.ok) downloadBlob(await response.blob(), 'sanatan-wallpaper.webp') }}>{t('r_savePhone')}</button>}</>}
            {index === 3 && <><img className="daily-shloka-photo" src="/art/redesign/aarti-banner.webp" alt="" /><p className="daily-tithi">{tithi}</p><dl className="daily-panchang"><div><dt>{t('rahuKaal')}</dt><dd>{rahu}</dd></div><div><dt>{t('r_nextFestival')}</dt><dd>{festivalLine}</dd></div></dl></>}
          </section>)}
        </div>
        <footer className="daily-sheet-footer"><button onClick={() => move(active - 1)} disabled={active === 0} aria-label={t('r_previousCard')}>‹</button><div className="daily-dots" aria-label={t('r_dailyCards')}>{titles.map((title, i) => <button key={title} onClick={() => move(i)} aria-label={title} aria-current={active === i ? 'step' : undefined}><span /></button>)}</div><button onClick={() => active === 3 ? onClose() : move(active + 1)} aria-label={active === 3 ? t('r_darshanAction') : t('r_nextCard')}>{active === 3 ? '✓' : '›'}</button></footer>
        {notice && <p role="status" className="daily-notice">{notice}</p>}
      </div>
    </dialog>
  )
}
