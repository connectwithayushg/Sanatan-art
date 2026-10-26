import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { SUPRABHAT } from '../../content/suprabhat'
import { CARD_MARK, canvasToFile } from '../../lib/share/card'
import { renderSuprabhat } from '../../lib/share/suprabhat'
import { useStored } from '../../lib/useStored'
import { ShareControls } from './ShareControls'

/** Sharing lives on this detail page, reached from the quiet home entry. */
export function SuprabhatCard() {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const india = new Date(Date.now() + 330 * 60000)
  const deity = deityOfDay(india.getUTCDay())
  const words = SUPRABHAT[deity.id] ?? SUPRABHAT.ganesh
  const date = new Date().toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'Asia/Kolkata' })
  const [name, setName] = useStored('cardName', '')
  const [preview, setPreview] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [notice, setNotice] = useState('')
  const title = t('sup_title')
  const close = words.close[hi ? 'hi' : 'en']
  useEffect(() => {
    let active = true
    setFile(null)
    const timer = setTimeout(() => {
      void renderSuprabhat({ title, picture: deity.card ?? DEITIES[0].card!, verse: words.verse, close, name, date, mark: CARD_MARK }).then(async (canvas) => {
        const next = await canvasToFile(canvas, `suprabhat-${deity.id}.png`)
        if (active) { setPreview(canvas.toDataURL('image/jpeg', .85)); setFile(next) }
      }).catch(() => { if (active) setNotice(t('r_shareError')) })
    }, 180)
    return () => { active = false; clearTimeout(timer) }
  }, [title, deity.card, deity.id, words, close, name, date, t])
  return <main className="tab-page greeting-detail"><button className="back-link" onClick={() => history.back()}>‹ {t('back')}</button><h1>{t('sup_heading')}</h1><div className="morning-preview">{preview ? <img src={preview} alt={`${title} · ${hi ? deity.name_hi : deity.name_en}`} /> : <p role="status">{t('loading')}</p>}</div><label><span>{t('sup_nameLabel')}</span><input value={name} maxLength={40} autoComplete="off" onChange={(e) => setName(e.target.value)} placeholder={t('namePlaceholder')} className="mt-2 block min-h-14 w-full rounded-xl border border-[#dcc4a2] bg-white px-4 text-xl" /></label><ShareControls file={file} title={title} />{notice && <p role="status">{notice}</p>}</main>
}
