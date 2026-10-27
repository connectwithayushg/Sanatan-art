import { WhatsAppLogo } from '../../ui/WhatsAppLogo'
import { useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { ABOUT, CHAPTERS, FAQS, type Chapter } from '../../content/learn'
import { ymd } from '../../content/festivals'
import { useDarshan } from '../../lib/darshan'
import { save } from '../../lib/storage'
import { useStored } from '../../lib/useStored'
import { CityPicker } from '../../ui/CityPicker'
import { DarshanSheet } from '../../ui/DarshanSheet'
import { Diya } from '../../ui/Diya'

/** Text sizes: normal, large (the old A+) and extra large. */
export const SIZES = [1, 1.25, 1.4]

type Open = (sub: string) => void

/** The profile and the pages behind it: सनातन क्या है (chapters), ऐप के बारे में and the FAQ. Nothing leaves the phone. */
export function ProfileView({ sub, open, scale, setScale }: { sub: string[]; open: Open; scale: number; setScale: (s: number) => void }) {
  if (sub[0] === 'sanatan') return sub[1] ? <ChapterPage index={Number(sub[1]) - 1} open={open} /> : <ChapterList open={open} />
  if (sub[0] === 'about') return <AboutPage open={open} />
  if (sub[0] === 'faq') return <FaqPage open={open} />
  return <Main open={open} scale={scale} setScale={setScale} />
}

const useHi = () => useTranslation().i18n.language === 'hi'

function Back({ to, open, title }: { to: string; open: Open; title: string }) {
  const { t } = useTranslation()
  return (
    <div className="flex h-14 items-center gap-1">
      <button onClick={() => open(to)} aria-label={t('back')} className="grid h-11 w-11 place-items-center rounded-full text-[1.8rem] leading-none text-flame">
        ‹
      </button>
      <h1 className="text-[1.15rem] font-bold text-warm">{title}</h1>
    </div>
  )
}

/** A picture slot. The picture file is added later; until it exists nothing is shown. */
export function LearnPic({ name, className = '' }: { name: string; className?: string }) {
  const [missing, setMissing] = useState(false)
  if (missing) return null
  return <img src={`/art/learn/${name}.webp`} alt="" onError={() => setMissing(true)} className={`aspect-video w-full rounded-2xl bg-[#f3e6d3] object-cover ${className}`} />
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-5">
      <h2 className="mb-2 px-1 text-[0.85rem] font-bold tracking-wide text-dim">{title}</h2>
      {children}
    </section>
  )
}

const row = 'flex min-h-[3.4rem] flex-wrap items-center gap-x-3 gap-y-1.5 py-2 border-t border-black/[0.07] px-4 first:border-t-0'

function Main({ open, scale, setScale }: { open: Open; scale: number; setScale: (s: number) => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [name, setName] = useStored('cardName', '')
  const { total, today } = useDarshan()
  const [calendar, setCalendar] = useState(false)
  const [jap] = useStored('jap', { date: '', count: 0, malas: 0 })
  const japToday = jap.date === ymd(new Date()) ? jap.count : 0
  const setLang = (l: 'hi' | 'en') => {
    void i18n.changeLanguage(l)
    save('lang', l)
  }
  const seg = (on: boolean) => `whitespace-nowrap px-3 py-1.5 text-[0.85rem] font-bold ${on ? 'bg-flame text-white' : 'text-warm'}`
  const share = () => {
    const text = `${t('appShareText')}\n${location.origin}`
    if (navigator.share) void navigator.share({ text }).catch(() => undefined)
    else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <h1 className="flex h-14 items-center text-[1.15rem] font-bold text-warm">{t('profile')}</h1>

      <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.07]">
        <span className="grid h-[3.4rem] w-[3.4rem] shrink-0 place-items-center rounded-full bg-[#fff1d6] font-display text-[1.6rem] text-flame">{(name.trim()[0] ?? 'ॐ').toUpperCase()}</span>
        <div className="min-w-0 flex-1">
          <input
            id="profile-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={30}
            placeholder={t('profileNamePh')}
            aria-label={t('profileName')}
            className="w-full border-b border-black/10 bg-transparent py-1 text-[1.35rem] font-bold text-warm outline-none placeholder:font-normal placeholder:text-dim focus:border-flame"
          />
          <div className="mt-1.5 text-[0.75rem] text-dim [&_*]:!text-[0.75rem]">
            <CityPicker />
          </div>
          <p className="text-[0.7rem] text-dim">{t('profileCityNote')}</p>
        </div>
      </div>

      <Section title={t('mySadhana')}>
        <div className="grid grid-cols-2 gap-2.5">
          <button onClick={() => setCalendar(true)} className="rounded-2xl bg-white p-3.5 text-left ring-1 ring-black/[0.07] active:scale-[0.98]">
            <span className="flex items-center gap-1.5 text-[1.5rem] leading-none font-bold tabular-nums text-warm">
              <Diya lit={today} size={22} />
              {total}
            </span>
            <span className="mt-1 block text-[0.8rem] text-dim">{t('darshanDaysLabel')} ›</span>
          </button>
          <div className="rounded-2xl bg-white p-3.5 ring-1 ring-black/[0.07]">
            <span className="block text-[1.5rem] leading-none font-bold tabular-nums text-warm">{japToday}</span>
            <span className="mt-1 block text-[0.8rem] text-dim">{t('japToday')}</span>
          </div>
        </div>
      </Section>

      <Section title={t('settings')}>
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.07]">
          <div className={row}>
            <span className="font-semibold text-warm">{t('language')}</span>
            <span className="ml-auto flex overflow-hidden rounded-full border-[1.5px] border-black/10">
              <button className={seg(hi)} onClick={() => setLang('hi')} aria-pressed={hi}>
                हिंदी
              </button>
              <button className={seg(!hi)} onClick={() => setLang('en')} aria-pressed={!hi}>
                English
              </button>
            </span>
          </div>
          <div className={row}>
            <span className="font-semibold text-warm">{t('textSize')}</span>
            <span className="ml-auto flex overflow-hidden rounded-full border-[1.5px] border-black/10">
              {SIZES.map((s, i) => (
                <button key={s} className={seg(scale === s)} onClick={() => setScale(s)} aria-pressed={scale === s} aria-label={`${t('textSize')} ${i + 1}`}>
                  {(hi ? 'अ' : 'A') + '+'.repeat(i)}
                </button>
              ))}
            </span>
          </div>
          <div className={`${row} text-dim`}>
            <span className="font-semibold">{t('reminders')}</span>
            <span className="ml-auto rounded-full bg-[#fff1d6] px-2.5 py-0.5 text-[0.75rem]">{t('soonTag')}</span>
          </div>
        </div>
      </Section>

      <Section title={t('learn')}>
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/[0.07]">
          {(
            [
              ['sanatan', t('whatIsSanatan')],
              ['about', t('aboutApp')],
              ['faq', t('faq')],
            ] as const
          ).map(([to, label]) => (
            <button key={to} onClick={() => open(to)} className={`${row} w-full text-left`}>
              <span className="font-semibold text-warm">{label}</span>
              <span className="ml-auto text-[1.3rem] text-flame">›</span>
            </button>
          ))}
        </div>
      </Section>

      <button onClick={share} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-[1.5px] border-[#1f8f4e] bg-white py-3 text-[1rem] font-bold text-[#1f8f4e] active:scale-[0.98]">
        <WhatsAppLogo /> {t('shareApp')}
      </button>
      <p className="mt-3 text-center text-[0.75rem] text-dim">{t('brand')} · {t('version')}</p>
      {calendar && <DarshanSheet onClose={() => setCalendar(false)} />}
    </main>
  )
}

/** Bold pieces marked with ** ** inside a paragraph. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
    </>
  )
}

function ChapterList({ open }: { open: Open }) {
  const { t } = useTranslation()
  const hi = useHi()
  const [read] = useStored<string[]>('learnRead', [])
  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <Back to="" open={open} title={t('whatIsSanatan')} />
      <LearnPic name="sanatan" />
      <div className="mt-4">
        <h2 className="font-display text-[1.9rem] leading-tight text-warm">{t('sanatanDharma')}</h2>
        <p className="mt-1 text-[0.95rem] text-dim">{t('sanatanIntro')}</p>
      </div>
      <ul className="mt-4 grid gap-2.5">
        {CHAPTERS.map((c, i) => (
          <li key={c.id}>
            <button onClick={() => open(`sanatan/${i + 1}`)} className="flex w-full items-center gap-3 rounded-2xl bg-white p-3 text-left ring-1 ring-black/[0.07] active:scale-[0.99]">
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-bold ${read.includes(c.id) ? 'bg-flame text-white' : 'bg-[#fff1d6] text-flame'}`}>{read.includes(c.id) ? '✓' : i + 1}</span>
              <span className="min-w-0 flex-1">
                <b className="block leading-snug text-warm">{hi ? c.title.hi : c.title.en}</b>
                <span className="block text-[0.82rem] leading-snug text-dim">{hi ? c.line.hi : c.line.en}</span>
              </span>
              <span className="shrink-0 self-start pt-0.5 text-[0.75rem] text-dim">{t('minutes', { count: c.minutes })}</span>
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

/** One block of a chapter: heading, shloka box, lesson box, picture slot, source line or paragraph (see Chapter in content/learn.ts). */
function Block({ p, pic, hi }: { p: string; pic: string; hi: boolean }) {
  if (p === '@pic') return <LearnPic name={pic} />
  if (p.startsWith('## ')) return <h3 className="mt-3 font-display text-[1.3rem] leading-snug text-flame">{p.slice(3)}</h3>
  if (p.startsWith('!! '))
    return (
      <div className="rounded-2xl bg-[#fff1d6] px-4 py-3">
        <b className="block text-[0.8rem] tracking-wide text-flame">{hi ? 'आज की सीख' : 'Today’s lesson'}</b>
        <span className="mt-1 block text-[1.05rem] font-semibold leading-[1.6] text-warm">{p.slice(3)}</span>
      </div>
    )
  if (p.startsWith('> ')) {
    const [sa, meaning, ref] = p.slice(2).split('‖')
    return (
      <blockquote className="rounded-2xl bg-[#fff1d6] px-4 py-3 text-center">
        <span className="block whitespace-pre-line font-scripture text-[1.1rem] leading-[1.7] text-flame">{sa}</span>
        {meaning && <span className="mt-1 block text-[0.9rem] text-warm">{meaning}</span>}
        {ref && <span className="mt-1 block text-[0.78rem] text-dim">{ref}</span>}
      </blockquote>
    )
  }
  if (p.startsWith('~ ')) return <p className="text-[0.8rem] italic leading-snug text-dim">{p.slice(2)}</p>
  return (
    <p className="text-[1.02rem] leading-[1.75] text-warm">
      <Rich text={p} />
    </p>
  )
}

function ChapterPage({ index, open }: { index: number; open: Open }) {
  const { t } = useTranslation()
  const hi = useHi()
  const [read, setRead] = useStored<string[]>('learnRead', [])
  const c: Chapter | undefined = CHAPTERS[index]
  if (!c) return <ChapterList open={open} />
  const next = CHAPTERS[index + 1]
  const body = hi || !c.body.en.length ? c.body.hi : c.body.en
  const finish = () => {
    if (!read.includes(c.id)) setRead([...read, c.id])
    open(next ? `sanatan/${index + 2}` : 'sanatan')
  }
  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <Back to="sanatan" open={open} title={t('chapterOf', { n: index + 1, total: CHAPTERS.length })} />
      <LearnPic name={`ch${index + 1}`} />
      <article className="mt-4 grid gap-3.5">
        <h2 className="font-display text-[1.7rem] leading-tight text-warm">{hi ? c.title.hi : c.title.en}</h2>
        {body.map((p, i) => (
          <Block key={i} p={p} pic={`ch${index + 1}-${body.slice(0, i).filter((x) => x === '@pic').length + 1}`} hi={hi} />
        ))}
        {c.verse && (
          <blockquote className="rounded-2xl bg-[#fff1d6] px-4 py-3 text-center">
            <span className="block font-scripture text-[1.1rem] leading-[1.7] text-flame">{c.verse.sa}</span>
            <span className="block text-[0.9rem] text-warm">{hi ? c.verse.hi : c.verse.en}</span>
            <span className="mt-1 block text-[0.78rem] text-dim">{c.verse.ref}</span>
          </blockquote>
        )}
      </article>
      <button onClick={finish} className="mt-5 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3.5 font-semibold ring-1 ring-black/[0.07] active:scale-[0.99]">
        <span className="text-warm">{next ? t('learnNext') : t('allChapters')}</span>
        <span className="text-flame">{next ? `${hi ? next.title.hi : next.title.en} ›` : '✓'}</span>
      </button>
    </main>
  )
}

function AboutPage({ open }: { open: Open }) {
  const { t } = useTranslation()
  const hi = useHi()
  const share = () => {
    const text = `${t('appShareText')}\n${location.origin}`
    if (navigator.share) void navigator.share({ text }).catch(() => undefined)
    else window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }
  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <Back to="" open={open} title={t('aboutApp')} />
      <LearnPic name="about" />
      <div className="mt-4">
        <h2 className="font-display text-[1.9rem] leading-tight text-warm">{t('appTitle')}</h2>
        <p className="mt-1 text-[0.95rem] text-dim">{hi ? ABOUT.tagline.hi : ABOUT.tagline.en}</p>
      </div>
      <ul className="mt-4 grid gap-2">
        {ABOUT.helps.map((h) => (
          <li key={h.t.en} className="flex items-start gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/[0.07]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-flame" />
            <span>
              <b className="block text-warm">{hi ? h.t.hi : h.t.en}</b>
              <span className="text-[0.9rem] text-dim">{hi ? h.d.hi : h.d.en}</span>
            </span>
          </li>
        ))}
      </ul>
      <section className="mt-4 rounded-2xl bg-[#fff1d6] p-4">
        <h3 className="font-bold text-warm">{t('whyApp')}</h3>
        {(hi ? ABOUT.why.hi : ABOUT.why.en).split('\n\n').map((para, i) => (
          <p key={i} className="mt-2 text-[1rem] leading-[1.7] text-warm first:mt-1">
            {para}
          </p>
        ))}
      </section>
      <button onClick={share} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border-[1.5px] border-[#1f8f4e] bg-white py-3 text-[1rem] font-bold text-[#1f8f4e] active:scale-[0.98]">
        <WhatsAppLogo /> {t('shareFamily')}
      </button>
    </main>
  )
}

function FaqPage({ open }: { open: Open }) {
  const { t } = useTranslation()
  const hi = useHi()
  return (
    <main className="mx-auto max-w-xl px-4 pb-6">
      <Back to="" open={open} title={t('faq')} />
      <ul className="mt-1 grid gap-2">
        {FAQS.map((f) => (
          <li key={f.q.en}>
            <details className="group rounded-2xl bg-white ring-1 ring-black/[0.07]">
              <summary className="flex cursor-pointer list-none items-start gap-3 p-3.5 font-semibold text-warm [&::-webkit-details-marker]:hidden">
                <span className="flex-1 leading-snug">{hi ? f.q.hi : f.q.en}</span>
                <span className="text-[1.3rem] leading-none text-flame transition group-open:rotate-90">›</span>
              </summary>
              <p className="px-3.5 pb-3.5 text-[0.98rem] leading-[1.7] text-warm">{hi ? f.a.hi : f.a.en}</p>
            </details>
          </li>
        ))}
      </ul>
    </main>
  )
}
