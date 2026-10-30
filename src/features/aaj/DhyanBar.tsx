import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { useStored } from '../../lib/useStored'
import { DhyanIcon } from '../../ui/DhyanIcon'
import { Dhyan, SOUNDS, TIMERS, type Sound } from '../mandir/Dhyan'
import { BrassDiya, HALO } from '../mandir/MandirView'

/** 'diya' means no deity: only the flame, for trataka. */
type Pick = { deity: string; sound: Sound; minutes?: number }
const DIYA_HALO: [string, string, string] = ['rgba(255,170,70,.55)', 'rgba(200,90,20,.22)', 'rgba(200,110,20,.18)']

/**
 * The home page's way into meditation: a quiet dark bar (`bare` leaves only the sheet and player, for pages that open it from their own button). The first time it asks which deity and which sound;
 * after that one tap starts with the last choice, and "बदलें" asks again.
 */
export function DhyanBar({ trigger = 0, bare = false }: { trigger?: number; bare?: boolean }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [stored, setPick] = useStored<Pick | null>('dhyanPick', null)
  // A sound saved before the sounds changed (rain, river, sea, birds) falls back to Om.
  const pick = stored && !SOUNDS.includes(stored.sound) ? { ...stored, sound: 'om' as Sound } : stored
  const [sheet, setSheet] = useState(false)
  const [on, setOn] = useState<Pick | null>(null)
  const previousTrigger = useRef(0)
  useEffect(() => {
    if (trigger <= previousTrigger.current) return
    previousTrigger.current = trigger
    if (pick) setOn(pick)
    else setSheet(true)
  }, [trigger, pick])

  const name = (id: string) => {
    if (id === 'diya') return t('dhyanDiya')
    const d = DEITIES.find((x) => x.id === id)
    return d ? (hi ? d.name_hi : d.name_en) : ''
  }
  const deity = on && DEITIES.find((d) => d.id === on.deity)

  return (
    <section className={bare ? undefined : 'px-4 pt-6'}>
      {!bare && <div className="flex items-stretch overflow-hidden rounded-2xl bg-[linear-gradient(100deg,#1b0e07,#2e170a)] text-[#f6e9d6] shadow-[0_6px_18px_rgba(43,26,16,0.18)]">
        <button onClick={() => (pick ? setOn(pick) : setSheet(true))} className="flex min-w-0 flex-1 items-center gap-3.5 px-4 py-3.5 text-left active:opacity-80">
          <DhyanIcon size={38} glow />
          <span className="min-w-0">
            <span className="block font-display text-[1.25rem] leading-tight">{t('dhyanStart')}</span>
            <span className="block truncate text-[0.82rem] text-[#c9b08f]">{pick ? `${name(pick.deity)} · ${t('sound_' + pick.sound)}${pick.minutes ? ' · ' + t('dhyanMin', { count: pick.minutes }) : ''}` : t('dhyanLine')}</span>
          </span>
          {!pick && (
            <span aria-hidden="true" className="ml-auto text-[1.4rem] text-[#f2b544]">
              ›
            </span>
          )}
        </button>
        {pick && (
          <button onClick={() => setSheet(true)} className="shrink-0 border-l border-white/10 px-4 text-[0.85rem] font-semibold text-[#f2b544] active:opacity-80">
            {t('dhyanChange')}
          </button>
        )}
      </div>}

      {sheet && (
        <DhyanSheet
          initial={pick ?? { deity: deityOfDay(new Date().getDay()).id, sound: 'om' }}
          onClose={() => setSheet(false)}
          onStart={(p) => {
            setPick(p)
            setSheet(false)
            setOn(p)
          }}
        />
      )}

      {on && (
        <Dhyan
          src={deity ? (deity.week?.[new Date().getDay()] ?? deity.cutout ?? deity.photo) : undefined}
          alt={name(on.deity)}
          dx={deity?.dx}
          halo={deity ? (HALO[deity.id] ?? HALO.hanuman) : DIYA_HALO}
          diya={<BrassDiya />}
          sound={on.sound}
          minutes={on.minutes}
          onClose={() => setOn(null)}
        />
      )}
    </section>
  )
}

/** Bottom sheet: whom to meditate upon, and with which sound. */
function DhyanSheet({ initial, onClose, onStart }: { initial: Pick; onClose: () => void; onStart: (p: Pick) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [deity, setDeity] = useState(initial.deity)
  const [sound, setSound] = useState<Sound>(initial.sound)
  const [minutes, setMinutes] = useState(initial.minutes ?? 0)

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onClose])

  const ring = (on: boolean) => `block h-[3.6rem] w-[3.6rem] overflow-hidden rounded-full border-[2.5px] transition ${on ? 'border-flame' : 'border-transparent'}`
  return createPortal(
    <div className="fixed inset-0 z-50 bg-[rgba(43,26,16,0.35)]" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('dhyan')}>
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-xl rounded-t-3xl bg-night px-4 pt-2.5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto h-1.5 w-11 rounded-full bg-black/10" />
        <div className="mt-3 flex items-center gap-3">
          <DhyanIcon size={34} />
          <h2 className="font-display text-[1.5rem] leading-tight text-warm">{t('dhyan')}</h2>
          <button onClick={onClose} aria-label={t('close')} className="ml-auto grid h-10 w-10 place-items-center rounded-full text-[1.3rem] text-dim">
            ✕
          </button>
        </div>

        <h3 className="mt-4 text-[0.95rem] font-bold text-warm">{t('dhyanWhom')}</h3>
        <ul className="-mx-4 mt-2 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
          <li className="shrink-0">
            <button onClick={() => setDeity('diya')} aria-pressed={deity === 'diya'} className="flex w-[4.2rem] flex-col items-center gap-1">
              <span className={`${ring(deity === 'diya')} grid place-items-center bg-[#2a1608] [&>svg]:w-[2.6rem]`}>
                <BrassDiya />
              </span>
              <span className={`text-center text-[0.78rem] leading-tight font-semibold ${deity === 'diya' ? 'text-flame' : 'text-dim'}`}>{t('dhyanDiya')}</span>
            </button>
          </li>
          {DEITIES.filter((d) => d.face).map((d) => {
            const [h1, h2] = HALO[d.id] ?? HALO.hanuman
            return (
              <li key={d.id} className="shrink-0">
                <button onClick={() => setDeity(d.id)} aria-pressed={deity === d.id} className="flex w-[4.2rem] flex-col items-center gap-1">
                  <span className={ring(deity === d.id)} style={{ background: `radial-gradient(circle at 50% 40%, ${h1}, ${h2})` }}>
                    <img src={d.face} alt="" width={58} height={58} className="h-full w-full object-contain object-bottom" />
                  </span>
                  <span className={`text-center text-[0.78rem] leading-tight font-semibold ${deity === d.id ? 'text-flame' : 'text-dim'}`}>{hi ? d.name_hi : d.name_en}</span>
                </button>
              </li>
            )
          })}
        </ul>

        <h3 className="mt-4 text-[0.95rem] font-bold text-warm">{t('dhyanSound')}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {SOUNDS.map((s) => (
            <button
              key={s}
              onClick={() => setSound(s)}
              aria-pressed={sound === s}
              className={`min-h-10 rounded-full border-[1.5px] px-4 text-[0.92rem] font-semibold transition ${sound === s ? 'border-flame bg-flame text-white' : 'border-black/10 bg-white text-warm'}`}
            >
              {t('sound_' + s)}
            </button>
          ))}
        </div>

        <h3 className="mt-4 text-[0.95rem] font-bold text-warm">{t('dhyanTimer')}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {TIMERS.map((m) => (
            <button
              key={m}
              onClick={() => setMinutes(m)}
              aria-pressed={minutes === m}
              className={`min-h-10 rounded-full border-[1.5px] px-4 text-[0.92rem] font-semibold transition ${minutes === m ? 'border-flame bg-flame text-white' : 'border-black/10 bg-white text-warm'}`}
            >
              {m ? t('dhyanMin', { count: m }) : t('dhyanNoTimer')}
            </button>
          ))}
        </div>

        <button onClick={() => onStart({ deity, sound, minutes })} className="mt-5 h-14 w-full rounded-2xl bg-[linear-gradient(100deg,#1b0e07,#2e170a)] font-display text-[1.2rem] text-[#f6e9d6] active:scale-[0.99]">
          {t('dhyanGo')}
        </button>
      </div>
    </div>,
    document.body,
  )
}
