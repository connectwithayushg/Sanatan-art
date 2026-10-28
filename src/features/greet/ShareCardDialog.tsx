import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { canvasToFile, renderCard, type CardInput } from '../../lib/share/card'
import { ShareControls } from './ShareControls'

/** Preview first, then one explicit native share action. File generation never sends anything. */
export function ShareCardDialog({ input, filename, onClose }: { input: CardInput; filename: string; onClose: () => void }) {
  const { t } = useTranslation()
  const dialog = useRef<HTMLDialogElement>(null)
  const [preview, setPreview] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [notice, setNotice] = useState('')
  useEffect(() => {
    const el = dialog.current
    el?.showModal()
    return () => el?.close()
  }, [])
  useEffect(() => {
    let active = true
    setPreview('')
    setFile(null)
    void renderCard(input).then(async (canvas) => {
      const next = await canvasToFile(canvas, filename)
      if (active) { setPreview(canvas.toDataURL('image/jpeg', .85)); setFile(next) }
    }).catch(() => { if (active) setNotice(t('r_shareError')) })
    return () => { active = false }
  }, [input, filename, t])
  return <dialog ref={dialog} className="share-card-dialog" aria-label={input.title} onCancel={(e) => { e.preventDefault(); onClose() }} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}><div className="share-card-preview"><header><h2>{input.title}</h2><button onClick={onClose} autoFocus aria-label={t('close')}>×</button></header><div className="share-card-image">{preview ? <img src={preview} alt={input.title} /> : <p role="status">{t('loading')}</p>}</div><ShareControls file={file} title={input.title} />{notice && <p role="status">{notice}</p>}</div></dialog>
}
