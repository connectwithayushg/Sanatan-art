import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { SUPRABHAT } from '../../content/suprabhat'
import { CARD_MARK, canvasToFile } from '../../lib/share/card'
import { renderSuprabhat } from '../../lib/share/suprabhat'
import { useStored } from '../../lib/useStored'

/** Today's good morning card for the day's deity: a live preview and the file to share. Shared by the card page and Aaj. */
export function useSuprabhat() {
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
  return { deity, title, close, name, setName, preview, file, notice, hi }
}
