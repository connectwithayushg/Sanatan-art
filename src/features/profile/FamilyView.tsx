import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MAX_MEMBERS, RELATIONS, memberTithi, tithiLabel, tithiOfDate, useFamily, useOccasions, type FamilyTithi, type Member, type Occasion } from '../../lib/family'

type Open = (sub: string) => void

const NAME_MAX = 30

/** The occasion as one line: "सुनीता का जन्मदिन". The Hindi noun decides का or की, so the line never guesses a person's gender. */
function occasionText(o: Occasion, t: (k: string, v?: Record<string, string>) => string) {
  return t(o.kind === 'bd' ? 'fam_bdayOf' : 'fam_annivOf', { name: o.member.name })
}

/** मेरा परिवार: names, relations, birthdays and anniversaries kept only on this phone. */
export function FamilyView({ open }: { open: Open }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [members, setMembers] = useFamily()
  const occasions = useOccasions(members)
  const [editing, setEditing] = useState<Member | 'new' | null>(null)
  const nextFor = (id: string) => occasions.find((o) => o.member.id === id)
  const fmtDay = (iso: string) => new Date(iso.slice(0, 10) + 'T12:00:00Z').toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', timeZone: 'UTC' })
  const pk: [string, string] = [t('shukla'), t('krishna')]
  const when = (days: number) => (days === 0 ? t('fam_today') : days === 1 ? t('fam_tomorrow') : t('fam_inDays', { count: days }))
  const soon = occasions[0]
  const upsert = (m: Member) => {
    setMembers(members.some((x) => x.id === m.id) ? members.map((x) => (x.id === m.id ? m : x)) : [...members, m])
    setEditing(null)
  }
  const remove = (id: string) => {
    setMembers(members.filter((x) => x.id !== id))
    setEditing(null)
  }

  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <div className="flex h-14 items-center gap-1">
        <button onClick={() => open('')} aria-label={t('back')} className="grid h-11 w-11 place-items-center rounded-full text-[1.8rem] leading-none text-flame">
          ‹
        </button>
        <h1 className="text-[1.15rem] font-bold text-warm">{t('fam_title')}</h1>
        {members.length > 0 && <span className="ml-auto text-[0.8rem] text-dim">{t('fam_members', { count: members.length })}</span>}
      </div>
      <p className="px-1 text-[0.85rem] leading-snug text-dim">{t('fam_private')}</p>

      {soon && (
        <section className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.07]">
          <div className="w-14 shrink-0 border-r border-black/[0.07] pr-3 text-center">
            <b className="block font-display text-[1.6rem] leading-none text-flame">{new Date(soon.date + 'T12:00:00Z').getUTCDate()}</b>
            <small className="text-[0.72rem] text-dim">{new Date(soon.date + 'T12:00:00Z').toLocaleDateString(hi ? 'hi-IN' : 'en-IN', { month: 'short', timeZone: 'UTC' })}</small>
          </div>
          <div className="min-w-0 flex-1">
            <small className="block text-[0.72rem] font-bold tracking-wide text-dim">{t('fam_next')}</small>
            <span className="block leading-snug font-semibold text-warm">{occasionText(soon, t)}</span>
            <span className="text-[0.82rem] text-dim">{when(soon.days)}{soon.byTithi ? ` · ${t('fam_byTithiTag')}` : ''}</span>
          </div>
        </section>
      )}

      {members.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-[#fff1d6] p-4 text-center leading-[1.6] text-warm">{t('fam_empty')}</p>
      ) : (
        <ul className="mt-3 overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.07]">
          {members.map((m) => {
            const o = nextFor(m.id)
            const kind = o?.kind ?? (m.bd ? 'bd' : m.an ? 'an' : undefined)
            const tithi = kind ? memberTithi(m, kind) : undefined
            return (
              <li key={m.id} className="border-t border-black/[0.07] first:border-t-0">
                <button onClick={() => setEditing(m)} className="flex w-full items-center gap-3 px-3.5 py-3 text-left active:bg-black/[0.03]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fff1d6] font-display text-[1.2rem] text-flame">{m.name.trim()[0]?.toUpperCase() ?? 'ॐ'}</span>
                  <span className="min-w-0 flex-1">
                    <b className="block truncate text-warm">{m.name}</b>
                    <span className="block text-[0.8rem] text-dim">{t(`fam_rel_${m.rel}`)}</span>
                  </span>
                  <span className="shrink-0 text-right text-[0.78rem] leading-tight text-dim">
                    {kind ? (
                      <>
                        {t(kind === 'bd' ? 'fam_birthday' : 'fam_anniversary')}
                        <br />
                        <span className="text-flame">{fmtDay(m[kind]!)}</span>
                        {tithi && (
                          <>
                            <br />
                            {tithiLabel(tithi, hi ? 0 : 1, pk)}
                          </>
                        )}
                      </>
                    ) : (
                      t('fam_noDates')
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {members.length < MAX_MEMBERS ? (
        <button onClick={() => setEditing('new')} className="mt-4 w-full rounded-2xl bg-flame py-3.5 text-[1.05rem] font-bold text-white active:scale-[0.98]">
          {t('fam_add')}
        </button>
      ) : (
        <p className="mt-4 text-center text-[0.85rem] text-dim">{t('fam_full')}</p>
      )}

      {editing && <MemberSheet member={editing === 'new' ? null : editing} onSave={upsert} onRemove={remove} onClose={() => setEditing(null)} />}
    </main>
  )
}

function MemberSheet({ member, onSave, onRemove, onClose }: { member: Member | null; onSave: (m: Member) => void; onRemove: (id: string) => void; onClose: () => void }) {
  const { t } = useTranslation()
  const [name, setName] = useState(member?.name ?? '')
  const [rel, setRel] = useState(member?.rel ?? 'mother')
  const [bd, setBd] = useState(member?.bd ?? '')
  const [an, setAn] = useState(member?.an ?? '')
  const [sure, setSure] = useState(false)

  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onClose])

  const save = () => {
    const clean = name.trim()
    if (!clean) return
    onSave({
      id: member?.id ?? `m${Date.now().toString(36)}`,
      name: clean,
      rel,
      bd: bd || undefined,
      an: an || undefined,
      tb: bd ? tithiOfDate(bd) : undefined,
      ta: an ? tithiOfDate(an) : undefined,
    })
  }
  const label = 'mb-1 block text-[0.8rem] font-bold text-dim'
  const field = 'w-full rounded-xl border-[1.5px] border-black/10 bg-night px-3 py-2.5 text-[1rem] text-warm outline-none focus:border-flame focus:bg-white'
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(43,26,16,0.35)]" onClick={onClose} role="dialog" aria-modal="true" aria-label={t(member ? 'fam_edit' : 'fam_new')}>
      <div className="absolute inset-x-0 bottom-0 mx-auto max-h-[92dvh] max-w-xl overflow-y-auto rounded-t-3xl bg-white px-4 pt-2.5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]" onClick={(e) => e.stopPropagation()}>
        <div className="mx-auto h-1.5 w-11 rounded-full bg-black/10" />
        <div className="mt-3 flex items-center">
          <h2 className="font-display text-[1.4rem] text-warm">{t(member ? 'fam_edit' : 'fam_new')}</h2>
          <button onClick={onClose} aria-label={t('close')} className="ml-auto grid h-10 w-10 place-items-center rounded-full text-[1.3rem] text-dim">
            ✕
          </button>
        </div>

        <div className="mt-2">
          <label htmlFor="fam-name" className={label}>{t('fam_name')}</label>
          <input id="fam-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={NAME_MAX} autoFocus={!member} className={field} />
        </div>

        <div className="mt-3">
          <span className={label}>{t('fam_relation')}</span>
          <div className="flex flex-wrap gap-2">
            {RELATIONS.map((r) => (
              <button key={r} type="button" onClick={() => setRel(r)} aria-pressed={rel === r} className={`rounded-full border px-3.5 py-1.5 text-[0.92rem] ${rel === r ? 'border-flame bg-flame font-bold text-white' : 'border-black/10 bg-white text-warm'}`}>
                {t(`fam_rel_${r}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="fam-bd" className={label}>{t('fam_birthday')}</label>
            <input id="fam-bd" type="date" value={bd} onChange={(e) => setBd(e.target.value)} max="2100-12-31" className={field} />
            <TithiLine date={bd} />
          </div>
          <div>
            <label htmlFor="fam-an" className={label}>{t('fam_anniversary')}</label>
            <input id="fam-an" type="date" value={an} onChange={(e) => setAn(e.target.value)} max="2100-12-31" className={field} />
            <TithiLine date={an} />
          </div>
        </div>

        {(bd || an) && <p className="mt-3 text-[0.8rem] leading-snug text-dim">{t('fam_dateNote')}</p>}

        <button onClick={save} disabled={!name.trim()} className="mt-5 w-full rounded-2xl bg-flame py-3.5 text-[1.05rem] font-bold text-white disabled:opacity-40 active:scale-[0.98]">
          {t('fam_save')}
        </button>
        {member &&
          (sure ? (
            <div className="mt-3 grid grid-cols-2 gap-3">
              <button onClick={() => setSure(false)} className="rounded-2xl border-[1.5px] border-black/10 py-3 font-bold text-warm">{t('fam_cancel')}</button>
              <button onClick={() => onRemove(member.id)} className="rounded-2xl bg-[#a02a14] py-3 font-bold text-white">{t('fam_deleteSure')}</button>
            </div>
          ) : (
            <button onClick={() => setSure(true)} className="mt-3 w-full py-2.5 text-[0.95rem] font-bold text-[#a02a14]">{t('fam_delete')}</button>
          ))}
      </div>
    </div>
  )
}

/** The Hindu tithi of the chosen date, shown under the date picker so the person can see what will be remembered. */
function TithiLine({ date }: { date: string }) {
  const { t, i18n } = useTranslation()
  const tithi: FamilyTithi | undefined = useMemo(() => (date ? tithiOfDate(date) : undefined), [date])
  if (!tithi) return null
  return <span className="mt-1 block text-[0.78rem] leading-snug text-flame">{tithiLabel(tithi, i18n.language === 'hi' ? 0 : 1, [t('shukla'), t('krishna')])}</span>
}
