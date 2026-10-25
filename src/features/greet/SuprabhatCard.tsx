import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { SUPRABHAT } from '../../content/suprabhat'
import { canvasToFile } from '../../lib/share/card'
import { renderSuprabhat } from '../../lib/share/suprabhat'
import { useStored } from '../../lib/useStored'
import { WhatsAppLogo } from '../../ui/WhatsAppLogo'

/** Home page: a new good-morning card every day with that day's deity, sent to WhatsApp in one tap. */
export function SuprabhatCard() {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const now = new Date()
  const deity = deityOfDay(now.getDay())
  const words = SUPRABHAT[deity.id] ?? SUPRABHAT.ganesh
  const day = now.toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long' })
  const date = now.toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).replace(',', ' ·')
  const [name, setName] = useStored('cardName', '')
  const [naming, setNaming] = useState(false)
  const [preview, setPreview] = useState('')
  const [big, setBig] = useState(false)
  const [busy, setBusy] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const title = t('sup_title')
  const close = words.close[hi ? 'hi' : 'en']

  useEffect(() => {
    let cancelled = false
    const id = setTimeout(async () => {
      const canvas = await renderSuprabhat({ title, picture: deity.card ?? DEITIES[0].card!, verse: words.verse, close, name, date, mark: `ॐ ${t('app')}` })
      if (cancelled) return
      canvasRef.current = canvas
      setPreview(canvas.toDataURL('image/jpeg', 0.8))
    }, 200)
    return () => {
      cancelled = true
      clearTimeout(id)
    }
  }, [title, deity.card, words, close, name, date, t])

  const share = async () => {
    if (!canvasRef.current) return
    setBusy(true)
    try {
      const file = await canvasToFile(canvasRef.current, `suprabhat-${deity.id}.png`)
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: title })
      } else {
        const a = document.createElement('a')
        a.href = canvasRef.current.toDataURL('image/png')
        a.download = `suprabhat-${deity.id}.png`
        a.click()
        window.open(`https://wa.me/?text=${encodeURIComponent(title)}`, '_blank', 'noopener')
      }
    } catch {
      /* user cancelled */
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="px-4 pt-6">
      <h2 className="text-[1.05rem] font-bold text-warm">{t('sup_heading')}</h2>
      <div className="mt-3 grid grid-cols-[38%_1fr] gap-3 rounded-[20px] border border-[#f0dcc0] bg-[#fff8ee] p-2.5">
        <button onClick={() => preview && setBig(true)} className="cursor-zoom-in" aria-label={t('seeBig')}>
          {preview ? (
            <img src={preview} alt={`${title} · ${hi ? deity.name_hi : deity.name_en}`} className="block aspect-[4/5] w-full rounded-xl" />
          ) : (
            <span className="block aspect-[4/5] w-full animate-pulse rounded-xl bg-[#f3e6d3]" />
          )}
        </button>
        <div className="grid content-center gap-1.5">
          <p className="font-display text-[1.3rem] leading-tight text-flame">{hi ? deity.name_hi : deity.name_en}</p>
          <p className="text-[0.95rem] leading-snug text-dim">{t('sup_daily', { day })}</p>
          <button onClick={share} disabled={busy || !preview} className="flex min-h-11 items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] border-[#1f8f4e] bg-white text-[0.95rem] font-bold text-[#1f8f4e] disabled:opacity-60">
            <WhatsAppLogo /> {t('share')}
          </button>
          <button onClick={() => setNaming((v) => !v)} aria-expanded={naming} className="min-h-11 rounded-[14px] border-[1.5px] border-flame bg-white text-[0.95rem] font-bold text-flame">
            {t('sup_addName')}
          </button>
        </div>
      </div>
      {naming && (
        <label className="mt-3 block">
          <span className="text-base font-bold">{t('sup_nameLabel')}</span>
          <input
            value={name}
            maxLength={40}
            autoComplete="off"
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder={t('namePlaceholder')}
            className="mt-1.5 block min-h-14 w-full rounded-2xl border-2 border-[#ead9c4] bg-white px-4 text-xl text-warm placeholder:text-dim/60 focus:border-flame focus:outline-none"
          />
        </label>
      )}
      {big && preview && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,12,6,0.9)] p-4" onClick={() => setBig(false)} role="dialog" aria-modal="true" aria-label={title}>
          <img src={preview} alt={title} className="max-h-full max-w-full rounded-xl" />
          <button onClick={() => setBig(false)} className="absolute top-3 right-3 rounded-full bg-white px-4 py-2 text-base font-bold" autoFocus>
            {t('closeBig')}
          </button>
        </div>
      )}
    </section>
  )
}
