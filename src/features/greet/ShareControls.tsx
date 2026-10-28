import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { shareFile } from '../../lib/share/send'
import { ShareIcon } from '../../ui/ShareIcon'
import { WhatsAppLogo } from '../../ui/WhatsAppLogo'

/** Native file sharing; desktop fallback saves the image and offers an explicit WhatsApp link. */
export function ShareControls({ file, title }: { file: File | null; title: string }) {
  const { t } = useTranslation()
  const [busy, setBusy] = useState(false)
  const [notice, setNotice] = useState('')
  const [saved, setSaved] = useState(false)
  const send = async () => {
    if (!file || busy) return
    setNotice('')
    setSaved(false)
    setBusy(true)
    try {
      const result = await shareFile(file, title)
      if (result === 'saved') { setNotice(t('r_savedForShare')); setSaved(true) }
    } catch { setNotice(t('r_shareError')) }
    finally { setBusy(false) }
  }
  return <div><div className="share-card-buttons"><button className="share-action" onClick={() => { void send() }} disabled={!file || busy}><WhatsAppLogo /> {t('r_whatsapp')}</button><button className="secondary-action" onClick={() => { void send() }} disabled={!file || busy}><ShareIcon /> {t('r_nativeShare')}</button></div>{notice && <p role="status" className="daily-notice">{notice}</p>}{saved && <a className="share-action" href={`https://wa.me/?text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer"><WhatsAppLogo /> {t('r_openWhatsapp')}</a>}</div>
}
