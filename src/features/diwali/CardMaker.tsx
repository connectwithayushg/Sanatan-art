import { ShareControls } from '../greet/ShareControls'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GREETINGS, type Bi } from '../../content/diwaliVidhi'
import { CARD_MARK, ALWAYS_GROUPS, CARD_PICTURES, PICTURE_GROUPS, canvasToFile, renderCard } from '../../lib/share/card'
import { dailyOrder, page } from '../../lib/share/daily'
import { useStored } from '../../lib/useStored'
import { hi, en } from '../../lib/i18n/strings'

interface CardMakerProps {
  /** Card heading, e.g. शुभ दीपावली; defaults to Diwali */
  title?: Bi
  greetings?: Bi[]
  blessing?: string
  /** Picture groups to offer, in order; defaults to all */
  groups?: string[]
  defaultPicture?: string
  fileName?: string
  storeKey?: string
}

type Step = 'pic' | 'name' | 'msg'

/**
 * The card stays in view (sticky under the festival tabs) and redraws as soon as anything changes,
 * so people see what they are making. Three short steps below it, and the send bar always on screen.
 */
export function CardMaker({ title, greetings = GREETINGS, blessing, groups, defaultPicture = 'lakshmi', fileName = 'shubh-deepavali.png', storeKey = 'cardPicture' }: CardMakerProps) {
  const { t, i18n } = useTranslation()
  const [name, setName] = useStored('cardName', '')
  const shownGroups = groups ? [...groups, ...ALWAYS_GROUPS.filter((g) => !groups.includes(g))].map((g) => PICTURE_GROUPS.find((x) => x.id === g)!).filter(Boolean) : PICTURE_GROUPS
  // Only three pictures and three messages at a time, picked afresh for each phone every day,
  // so people are not overwhelmed and the cards going round a family group are not all the same.
  const [pictureOrders] = useState(() =>
    Object.fromEntries(shownGroups.map((g) => [g.id, dailyOrder(CARD_PICTURES.filter((p) => p.group === g.id), `${storeKey}:${g.id}`)])),
  )
  const [msgOrder] = useState(() => dailyOrder(greetings.map((_, i) => i), `${storeKey}:msg`))
  const [rounds, setRounds] = useState<Record<string, number>>({})
  const [msgRound, setMsgRound] = useState(0)
  const startGroup = CARD_PICTURES.find((p) => p.id === defaultPicture)?.group
  const [group, setGroup] = useState<string>(shownGroups.some((g) => g.id === startGroup) ? startGroup! : shownGroups[0].id)
  const [picture, setPicture] = useState<string>(() => pictureOrders[group]?.[0]?.id ?? defaultPicture)
  const [msg, setMsg] = useState(msgOrder[0] ?? 0)
  const current = CARD_PICTURES.find((p) => p.id === picture) ?? CARD_PICTURES[0]
  const shownPictures = page(pictureOrders[group] ?? [], rounds[group] ?? 0)
  const [cardLang, setCardLang] = useState<'hi' | 'en'>(i18n.language as 'hi' | 'en')
  const [step, setStep] = useState<Step>('pic')
  const [preview, setPreview] = useState<string>('')
  const [flash, setFlash] = useState(false)
  const [big, setBig] = useState(false)
  // While typing the phone keyboard takes half the screen, so the card shrinks to keep the field in view
  const [typing, setTyping] = useState(false)
  const [toast, setToast] = useState('')
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const s = cardLang === 'hi' ? hi : en
  const cardTitle = title ? title[cardLang] : s.diwaliTitle

  useEffect(() => {
    let cancelled = false
    setFile(null)
    const id = setTimeout(async () => {
      try {
        const canvas = await renderCard({
          title: cardTitle,
          message: greetings[msg][cardLang],
          blessing,
          name: name.trim() ? s.from.replace('{{name}}', name.trim()) : '',
          footer: CARD_MARK,
          lang: cardLang,
          picture: current.src,
        })
        const nextFile = await canvasToFile(canvas, fileName)
        if (cancelled) return
        setFile(nextFile)
        canvasRef.current = canvas
        setFlash(true)
        setPreview(canvas.toDataURL('image/jpeg', 0.85))
      } catch { if (!cancelled) setToast(t('r_shareError')) }
    }, 200)
    return () => {
      cancelled = true
      clearTimeout(id)
    }
  }, [name, msg, cardLang, current.src, cardTitle, greetings, blessing, s, fileName, t])

  useEffect(() => {
    if (!flash) return
    const id = setTimeout(() => setFlash(false), 700)
    return () => clearTimeout(id)
  }, [flash, preview])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(id)
  }, [toast])

  const download = () => {
    if (!canvasRef.current) return
    const a = document.createElement('a')
    a.href = canvasRef.current.toDataURL('image/png')
    a.download = fileName
    a.click()
    setToast(t('cardSaved'))
  }

  const goStep = (next: Step) => {
    setStep(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const option = (on: boolean) =>
    `flex min-h-14 items-center gap-3 rounded-2xl border-[1.5px] px-4 py-3 text-left text-lg leading-snug transition-colors ${on ? 'border-flame bg-[#fdf0e1]' : 'border-[#ead9c4] bg-white'}`
  const more = 'min-h-12 rounded-2xl border-[1.5px] border-dashed border-[#d9c2a6] bg-white text-[1.05rem] font-semibold text-flame'
  const dot = (on: boolean) => (
    <span className={`h-6 w-6 shrink-0 rounded-full border-2 ${on ? 'border-flame bg-flame shadow-[inset_0_0_0_4px_#fdf0e1]' : 'border-[#cbb59c]'}`} aria-hidden="true" />
  )
  const steps: [Step, string][] = [
    ['pic', t('stepPicture')],
    ['name', t('stepName')],
    ['msg', t('stepMessage')],
  ]
  const addons = t('nameAddons').split('|')

  return (
    <main className="mx-auto max-w-xl pb-80">
      <div className="sticky top-16 z-10 bg-night px-4 pt-2 shadow-[0_8px_14px_-12px_rgba(80,40,10,0.35)]">
        <div className="relative flex justify-center">
          {preview ? (
            <button onClick={() => setBig(true)} className="cursor-zoom-in rounded-[10px]" aria-label={t('seeBig')}>
              <img
                src={preview}
                alt={t('cardTitle')}
                className={`block ${typing ? 'h-[150px]' : 'h-[28vh] max-h-[260px] min-h-[180px]'} w-auto object-contain rounded-[10px] shadow-[0_10px_26px_rgba(20,10,40,0.35)] transition-shadow duration-300 ${flash ? 'ring-4 ring-[#ffb43a]' : ''}`}
              />
            </button>
          ) : (
            <div className="aspect-[9/16] h-[28vh] max-h-[260px] min-h-[180px] animate-pulse rounded-[10px] bg-[#ead9c4]" />
          )}
          <button onClick={() => setBig(true)} disabled={!preview} className="absolute top-1 right-0 rounded-full bg-white px-3 py-1.5 text-[0.85rem] font-semibold text-flame shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
            {t('seeBig')}
          </button>
        </div>
        <div role="tablist" className="grid grid-cols-3 gap-1.5 pt-3 pb-2.5">
          {steps.map(([id, label], i) => {
            const on = step === id
            return (
              <button
                key={id}
                role="tab"
                aria-selected={on}
                onClick={() => goStep(id)}
                className={`flex min-h-12 items-center justify-center gap-1.5 rounded-[14px] border-[1.5px] text-[1.05rem] font-semibold ${on ? 'border-flame bg-[#fdf0e1] text-flame' : 'border-[#ead9c4] bg-white text-warm'}`}
              >
                <span className={`grid h-[22px] w-[22px] place-items-center rounded-full text-[0.8rem] ${on ? 'bg-flame text-white' : 'bg-[#fdf0e1] text-flame'}`}>{i + 1}</span>
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-3 px-4 pt-2">
        {step === 'pic' && (
          <>
            {shownGroups.length > 1 && (
              <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-0.5 [scrollbar-width:none]">
                {shownGroups.map((g) => (
                  <button
                    key={g.id}
                    aria-pressed={group === g.id}
                    onClick={() => setGroup(g.id)}
                    className={`shrink-0 rounded-full border-[1.5px] px-4 py-1.5 text-base font-semibold ${group === g.id ? 'border-flame bg-flame text-white' : 'border-[#ead9c4] bg-white text-warm'}`}
                  >
                    {i18n.language === 'hi' ? g.hi : g.en}
                  </button>
                ))}
              </div>
            )}
            <div className="grid grid-cols-3 gap-2">
              {shownPictures.map((p) => {
                const on = picture === p.id
                return (
                  <button
                    key={p.id}
                    aria-pressed={on}
                    aria-label={shownGroups.find((g) => g.id === group)?.[i18n.language === 'hi' ? 'hi' : 'en']}
                    onClick={() => setPicture(p.id)}
                    className={`overflow-hidden rounded-xl transition ${on ? 'ring-4 ring-flame' : 'ring-1 ring-[#ead9c4]'}`}
                  >
                    <img src={p.thumb} alt="" width={240} height={336} loading="lazy" className="block aspect-[5/7] w-full object-cover object-top" />
                  </button>
                )
              })}
            </div>
            {(pictureOrders[group]?.length ?? 0) > 3 && (
              <button onClick={() => setRounds((r) => ({ ...r, [group]: (r[group] ?? 0) + 1 }))} className={more}>
                {t('showMorePics')}
              </button>
            )}
            <button onClick={() => goStep('name')} className="justify-self-end py-1.5 text-[1.05rem] font-bold text-flame">
              {t('nextName')}
            </button>
          </>
        )}

        {step === 'name' && (
          <>
            <label className="block">
              <span className="text-lg font-bold">{t('yourName')}</span>
              <input
                value={name}
                maxLength={40}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setTyping(true)}
                onBlur={() => setTyping(false)}
                placeholder={t('namePlaceholder')}
                className="mt-1.5 block min-h-14 w-full rounded-2xl border-2 border-[#ead9c4] bg-white px-4 text-xl text-warm placeholder:text-dim/60 scroll-mt-80 focus:border-flame focus:outline-none"
              />
            </label>
            <p className="text-base text-dim">{t('nameLive')}</p>
            <div className="flex flex-wrap gap-2">
              {addons.map((a) => (
                <button
                  key={a}
                  onClick={() => setName((n) => (n.includes(a) ? n : `${n.trim()} ${a}`.trim()).slice(0, 40))}
                  className="rounded-full border-[1.5px] border-dashed border-[#d9c2a6] bg-white px-3 py-1.5 text-base"
                >
                  + {a}
                </button>
              ))}
            </div>
            <button onClick={() => goStep('msg')} className="justify-self-end py-1.5 text-[1.05rem] font-bold text-flame">
              {t('nextMessage')}
            </button>
          </>
        )}

        {step === 'msg' && (
          <>
            <div className="grid grid-cols-2 gap-2" aria-label={t('cardLang')}>
              <button className={option(cardLang === 'hi')} aria-pressed={cardLang === 'hi'} onClick={() => setCardLang('hi')}>
                {dot(cardLang === 'hi')} हिन्दी
              </button>
              <button className={option(cardLang === 'en')} aria-pressed={cardLang === 'en'} onClick={() => setCardLang('en')}>
                {dot(cardLang === 'en')} English
              </button>
            </div>
            <div className="grid gap-2">
              {page(msgOrder, msgRound).map((i) => (
                <button key={i} className={option(msg === i)} aria-pressed={msg === i} onClick={() => setMsg(i)}>
                  {dot(msg === i)} <span>{greetings[i][cardLang]}</span>
                </button>
              ))}
            </div>
            {msgOrder.length > 3 && (
              <button onClick={() => setMsgRound((r) => r + 1)} className={more}>
                {t('showMoreMsgs')}
              </button>
            )}
          </>
        )}
      </div>

      {/* Send bar, always on screen just above the tab bar */}
      <div className="fixed inset-x-0 z-20 px-3" style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 82px)' }}>
        <div className="mx-auto max-w-xl rounded-2xl border border-[#ead9c4] bg-[#fbf4e8] p-2 shadow-lg">
          <ShareControls file={file} title={cardTitle} />
          <button onClick={download} disabled={!preview} aria-label={t('download')} className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#ead9c4] bg-white text-flame shadow-[0_4px_14px_rgba(80,40,10,0.12)]">
            {t('download')} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" />
            </svg>
          </button>
        </div>
      </div>

      {toast && (
        <div role="status" className="fixed left-1/2 z-40 -translate-x-1/2 rounded-full bg-warm px-4 py-2 text-base font-semibold whitespace-nowrap text-white" style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 170px)' }}>
          {toast}
        </div>
      )}

      {big && preview && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[rgba(20,12,6,0.9)] p-4" onClick={() => setBig(false)} role="dialog" aria-modal="true" aria-label={t('cardTitle')}>
          <img src={preview} alt={t('cardTitle')} className="max-h-full max-w-full rounded-xl" />
          <button onClick={() => setBig(false)} className="absolute top-3 right-3 rounded-full bg-white px-4 py-2 text-base font-bold" autoFocus>
            {t('closeBig')}
          </button>
        </div>
      )}
    </main>
  )
}

