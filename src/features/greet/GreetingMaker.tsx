import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import type { Bi } from '../../content/diwaliVidhi'
import { ALWAYS_GROUPS, CARD_PICTURES, PICTURE_GROUPS } from '../../lib/share/card'
import { dailyOrder, page, phoneSeed } from '../../lib/share/daily'
import { renderGreeting } from '../../lib/share/greeting'
import { indiaDay, parseRotation, pickPicture, selectPicture, type RotationState } from '../../lib/share/rotation'
import { downloadBlob, shareFile } from '../../lib/share/send'
import { useStored } from '../../lib/useStored'
import { hi as hiStrings, en as enStrings } from '../../lib/i18n/strings'

export interface GreetingMessage {
  hi: string
  en: string
  /** Gold line under the message, e.g. a closing wish */
  blessing?: Bi
}

export interface GreetingMakerProps {
  /** Suprabhat has its own page heading; a festival's card sits under the festival's tabs. */
  heading?: { title: string; subtitle: string }
  title: Bi
  messages: GreetingMessage[]
  /** Picture groups to offer, in order; the ones every card maker has follow. */
  groups?: string[]
  /** Picture whose group the card starts in */
  defaultPicture?: string
  /** Picture ids the daily rotation chooses from; defaults to the starting group */
  pool?: string[]
  fileName: string
  storeKey: string
}

const NAME_LIMIT = 40
const clip = (text: string) => Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), (x) => x.segment).slice(0, NAME_LIMIT).join('')

/** A modal bottom sheet: the browser gives it Escape, the Android Back button, a focus trap and focus restoration. */
function Sheet({ label, onClose, children }: { label: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const el = ref.current
    if (el && !el.open) el.showModal()
    return () => { if (el?.open) el.close() }
  }, [])
  return (
    <dialog ref={ref} className="gm-sheet" aria-label={label} onCancel={(e) => { e.preventDefault(); onClose() }} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      {children}
    </dialog>
  )
}

function SheetHead({ title, onClose }: { title: string; onClose: () => void }) {
  const { t } = useTranslation()
  return <header className="gm-sheet-head"><h2>{title}</h2><button type="button" onClick={onClose} aria-label={t('close')}>×</button></header>
}

const Icon = ({ d }: { d: string }) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
const ICON_PICTURE = 'M4 5h16v14H4zM4 16l4.5-4.5 4 4 3-3L20 16M15.5 9.5h.01'
const ICON_MESSAGE = 'M4 5h16v11H9l-5 4zM8 9.5h8M8 12.5h5'
const ICON_NAME = 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4'
const ICON_SHARE = 'M18 8a3 3 0 1 0-2.8-4M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 10.8l6.8-4M8.6 13.2l6.8 4'
const ICON_SAVE = 'M12 4v11m0 0-4-4m4 4 4-4M5 19h14'

/**
 * One finished card, three optional changes (picture, message, name), one share button and a quieter save.
 * Suprabhat and every festival use this same screen; only the heading, pictures and messages differ.
 */
export function GreetingMaker({ heading, title, messages, groups, defaultPicture, pool, fileName, storeKey }: GreetingMakerProps) {
  const { t, i18n } = useTranslation()
  const [name, setName] = useStored('cardName', '')
  const [family, setFamily] = useStored('cardWithFamily', false)
  const [stored, setStored] = useStored<unknown>('greetingRotation:v1', null)
  const [lang, setLang] = useState<'hi' | 'en'>(i18n.language === 'hi' ? 'hi' : 'en')
  const strings = lang === 'hi' ? hiStrings : enStrings
  const shownGroups = useMemo(() => (groups ? [...groups, ...ALWAYS_GROUPS.filter((g) => !groups.includes(g))].map((g) => PICTURE_GROUPS.find((x) => x.id === g)!).filter(Boolean) : [...PICTURE_GROUPS]), [groups])
  const startGroup = CARD_PICTURES.find((p) => p.id === defaultPicture)?.group
  const startPool = useMemo(() => pool ?? CARD_PICTURES.filter((p) => p.group === (shownGroups.some((g) => g.id === startGroup) ? startGroup : shownGroups[0].id)).map((p) => p.id), [pool, shownGroups, startGroup])
  const scope = storeKey.toLowerCase().replace(/[^a-z0-9:/-]/g, '-')

  // The day's picture is chosen once, stays the same on every visit that day, and counts as seen only after it has drawn.
  const [proposal] = useState(() => pickPicture({ ids: startPool, state: parseRotation(stored), scope, seed: phoneSeed(), day: indiaDay() }))
  const pending = useRef<RotationState | null>(proposal && !proposal.reusedToday ? proposal.nextState : null)
  const [pictureId, setPictureId] = useState(proposal?.id ?? startPool[0] ?? CARD_PICTURES[0].id)
  const [msgOrder] = useState(() => dailyOrder(messages.map((_, i) => i), `${storeKey}:msg`))
  const [msgIndex, setMsgIndex] = useState(msgOrder[0] ?? 0)
  const picture = CARD_PICTURES.find((p) => p.id === pictureId) ?? CARD_PICTURES[0]
  const message = messages[msgIndex] ?? messages[0]
  const cardTitle = title[lang]
  const sender = name.trim() ? (family ? strings.gm_fromFamily : strings.gm_from).replace('{{name}}', name.trim()) : ''

  const [preview, setPreview] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [failed, setFailed] = useState(false)
  const [notice, setNotice] = useState('')
  const [sheet, setSheet] = useState<'picture' | 'message' | 'name' | null>(null)
  const [busy, setBusy] = useState(false)
  const url = useRef('')

  useEffect(() => {
    let active = true
    setFile(null)
    setFailed(false)
    const timer = setTimeout(() => {
      void renderGreeting({ title: cardTitle, message: message[lang], blessing: message.blessing?.[lang], name: sender, lang, picture: picture.src }).then(({ file: made }) => {
        if (!active) return
        const named = new File([made], fileName, { type: 'image/png' })
        if (url.current) URL.revokeObjectURL(url.current)
        url.current = URL.createObjectURL(named)
        setPreview(url.current)
        setFile(named)
        if (pending.current) { setStored(pending.current); pending.current = null }
      }).catch(() => { if (active) setFailed(true) })
    }, 160)
    return () => { active = false; clearTimeout(timer) }
  }, [cardTitle, message, lang, sender, picture.src, fileName, setStored])
  useEffect(() => () => { if (url.current) URL.revokeObjectURL(url.current) }, [])

  const share = async () => {
    if (!file || busy) return
    setNotice('')
    setBusy(true)
    try {
      if ((await shareFile(file, cardTitle)) === 'saved') setNotice(t('r_savedForShare'))
    } catch { setNotice(t('r_shareError')) }
    finally { setBusy(false) }
  }
  const save = () => {
    if (!file) return
    downloadBlob(file, file.name)
    setNotice(t('cardSaved'))
  }

  return (
    <main className={heading ? 'tab-page gm-page' : 'gm-page gm-inline'}>
      {heading && (
        <header className="gm-heading">
          <button type="button" onClick={() => history.back()} aria-label={t('back')}>←</button>
          <div><h1>{heading.title}</h1><p>{heading.subtitle}</p></div>
        </header>
      )}
      <div className="gm-card" aria-busy={!file && !failed}>
        {preview ? <img src={preview} alt={`${cardTitle}: ${message[lang]}`} className={file ? '' : 'gm-stale'} /> : <div className="gm-placeholder" role="status">{failed ? t('r_shareError') : t('gm_preparing')}</div>}
        {preview && !file && !failed && <span className="gm-loading" role="status">{t('gm_preparing')}</span>}
      </div>
      {failed && preview && <p className="gm-notice" role="status">{t('r_shareError')}</p>}
      <div className="gm-controls">
        <button type="button" onClick={() => setSheet('picture')}><Icon d={ICON_PICTURE} />{t('gm_changePicture')}</button>
        <button type="button" onClick={() => setSheet('message')}><Icon d={ICON_MESSAGE} />{t('gm_changeMessage')}</button>
        <button type="button" onClick={() => setSheet('name')}><Icon d={ICON_NAME} />{t('gm_yourName')}</button>
      </div>
      <button type="button" className="gm-share" onClick={() => { void share() }} disabled={!file || busy}><Icon d={ICON_SHARE} />{t('gm_share')}</button>
      <button type="button" className="gm-save" onClick={save} disabled={!file}><Icon d={ICON_SAVE} />{t('gm_save')}</button>
      {notice && <p className="gm-notice" role="status">{notice}</p>}

      {sheet === 'picture' && (
        <PictureSheet
          groups={shownGroups}
          current={pictureId}
          onClose={() => setSheet(null)}
          onApply={(id) => {
            setPictureId(id)
            if (startPool.includes(id)) pending.current = selectPicture({ id, ids: startPool, state: parseRotation(stored), scope, day: indiaDay() })
            setSheet(null)
          }}
          storeKey={storeKey}
        />
      )}
      {sheet === 'message' && (
        <MessageSheet messages={messages} order={msgOrder} current={msgIndex} lang={lang} setLang={setLang} onClose={() => setSheet(null)} onApply={(i) => { setMsgIndex(i); setSheet(null) }} />
      )}
      {sheet === 'name' && <NameSheet name={name} family={family} strings={strings} onClose={() => setSheet(null)} onApply={(value, withFamily) => { setName(value); setFamily(withFamily); setSheet(null) }} />}
    </main>
  )
}

function PictureSheet({ groups, current, onClose, onApply, storeKey }: { groups: { id: string; hi: string; en: string }[]; current: string; onClose: () => void; onApply: (id: string) => void; storeKey: string }) {
  const { t, i18n } = useTranslation()
  const [draft, setDraft] = useState(current)
  const [group, setGroup] = useState(CARD_PICTURES.find((p) => p.id === current)?.group ?? groups[0].id)
  const [round, setRound] = useState(0)
  const orders = useMemo(() => Object.fromEntries(groups.map((g) => [g.id, dailyOrder(CARD_PICTURES.filter((p) => p.group === g.id), `${storeKey}:${g.id}`)])), [groups, storeKey])
  // The committed picture leads its own group so it is the first one shown.
  const order = useMemo(() => {
    const all = orders[group] ?? []
    const first = all.find((p) => p.id === current)
    return first ? [first, ...all.filter((p) => p !== first)] : all
  }, [orders, group, current])
  const label = (g: { hi: string; en: string }) => (i18n.language === 'hi' ? g.hi : g.en)
  return (
    <Sheet label={t('gm_pickPicture')} onClose={onClose}>
      <SheetHead title={t('gm_pickPicture')} onClose={onClose} />
      {groups.length > 1 && (
        <div className="gm-chips">
          {groups.map((g) => <button key={g.id} type="button" aria-pressed={group === g.id} onClick={() => { setGroup(g.id); setRound(0) }}>{label(g)}</button>)}
        </div>
      )}
      <div className="gm-pictures">
        {page(order, round).map((p) => (
          <button key={p.id} type="button" aria-pressed={draft === p.id} aria-label={label(groups.find((g) => g.id === group) ?? groups[0])} onClick={() => setDraft(p.id)} className={draft === p.id ? 'on' : ''}>
            <img src={p.thumb} alt="" width={240} height={336} loading="lazy" />
            {draft === p.id && <span aria-hidden="true">✓</span>}
          </button>
        ))}
      </div>
      {order.length > 3 && <button type="button" className="gm-more" onClick={() => setRound((r) => r + 1)}>{t('gm_morePictures')}</button>}
      <button type="button" className="gm-apply" onClick={() => onApply(draft)}>{t('gm_usePicture')}</button>
    </Sheet>
  )
}

function MessageSheet({ messages, order, current, lang, setLang, onClose, onApply }: { messages: GreetingMessage[]; order: number[]; current: number; lang: 'hi' | 'en'; setLang: (l: 'hi' | 'en') => void; onClose: () => void; onApply: (i: number) => void }) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState(current)
  const [round, setRound] = useState(0)
  const ordered = useMemo(() => [current, ...order.filter((i) => i !== current)], [order, current])
  return (
    <Sheet label={t('gm_pickMessage')} onClose={onClose}>
      <SheetHead title={t('gm_pickMessage')} onClose={onClose} />
      <ul className="gm-messages">
        {page(ordered, round).map((i) => (
          <li key={i}><button type="button" aria-pressed={draft === i} className={draft === i ? 'on' : ''} onClick={() => setDraft(i)}><span className="gm-dot" aria-hidden="true" /><span>{messages[i][lang]}</span></button></li>
        ))}
      </ul>
      {ordered.length > 3 && <button type="button" className="gm-more" onClick={() => setRound((r) => r + 1)}>{t('gm_moreMessages')}</button>}
      <div className="gm-lang" role="group" aria-label={t('cardLang')}>
        <button type="button" aria-pressed={lang === 'hi'} onClick={() => setLang('hi')}>हिन्दी</button>
        <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>English</button>
      </div>
      <button type="button" className="gm-apply" onClick={() => onApply(draft)}>{t('gm_useMessage')}</button>
    </Sheet>
  )
}

function NameSheet({ name, family, strings, onClose, onApply }: { name: string; family: boolean; strings: typeof hiStrings; onClose: () => void; onApply: (name: string, family: boolean) => void }) {
  const { t } = useTranslation()
  const [draft, setDraft] = useState(name)
  const [withFamily, setWithFamily] = useState(family)
  const shown = draft.trim() ? (withFamily ? strings.gm_fromFamily : strings.gm_from).replace('{{name}}', draft.trim()) : t('gm_noName')
  return (
    <Sheet label={t('gm_yourName')} onClose={onClose}>
      <SheetHead title={t('gm_yourName')} onClose={onClose} />
      <div className="gm-lang" role="group" aria-label={t('gm_yourName')}>
        <button type="button" aria-pressed={!withFamily} onClick={() => setWithFamily(false)}>{t('gm_nameOnly')}</button>
        <button type="button" aria-pressed={withFamily} onClick={() => setWithFamily(true)}>{t('gm_nameFamily')}</button>
      </div>
      <label className="gm-field">
        <span>{t('yourName')}</span>
        <input value={draft} autoComplete="off" onChange={(e) => setDraft(clip(e.target.value))} onFocus={(e) => e.currentTarget.scrollIntoView({ block: 'center' })} placeholder={t('namePlaceholder')} />
      </label>
      <p className="gm-hint">{t('gm_onCard', { text: shown })}</p>
      <button type="button" className="gm-apply" onClick={() => onApply(draft.trim(), withFamily)}>{t('gm_useName')}</button>
    </Sheet>
  )
}
