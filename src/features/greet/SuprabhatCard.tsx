import { useTranslation } from 'react-i18next'
import { ShareControls } from './ShareControls'
import { useSuprabhat } from './useSuprabhat'

/** Sharing lives on this detail page, reached from the quiet home entry. */
export function SuprabhatCard() {
  const { t } = useTranslation()
  const { deity, title, name, setName, preview, file, notice, hi } = useSuprabhat()
  return <main className="tab-page greeting-detail"><button className="back-link" onClick={() => history.back()}>‹ {t('back')}</button><h1>{t('sup_heading')}</h1><div className="morning-preview">{preview ? <img src={preview} alt={`${title} · ${hi ? deity.name_hi : deity.name_en}`} /> : <p role="status">{t('loading')}</p>}</div><label><span>{t('sup_nameLabel')}</span><input value={name} maxLength={40} autoComplete="off" onChange={(e) => setName(e.target.value)} placeholder={t('namePlaceholder')} className="mt-2 block min-h-14 w-full rounded-xl border border-[#dcc4a2] bg-white px-4 text-xl" /></label><ShareControls file={file} title={title} />{notice && <p role="status">{notice}</p>}</main>
}
