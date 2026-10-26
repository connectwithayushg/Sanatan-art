import { Credits } from '../../ui/Credits'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { daysUntil, nextFestival, todayIST } from '../../content/festivals'
import { dayPanchang } from '../../lib/panchang/daily'
import { formatClock } from '../../lib/format'
import { useCity } from '../../ui/CityPicker'
import { Diya } from '../../ui/Diya'

export function AajView({ openFestival }: { openFestival: (id: string) => void }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const L = lang === 'hi' ? 0 : 1
  const [city] = useCity()
  const today = todayIST()
  const p = useMemo(() => dayPanchang(city, today.y, today.m, today.d), [city, today.y, today.m, today.d])
  const next = nextFestival()
  const days = next ? daysUntil(next) : 0

  const dateLine = new Date(Date.UTC(today.y, today.m - 1, today.d, 6)).toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  const paksha = t(p.tithi.paksha === 'shukla' ? 'shukla' : 'krishna')

  const rows: [string, string][] = [
    [t('sunrise'), formatClock(p.sunrise, lang)],
    [t('sunset'), formatClock(p.sunset, lang)],
    [t('moonrise'), formatClock(p.moonrise, lang)],
    [t('nakshatra'), `${p.nakshatra.name[L]}, ${t('tillTime', { time: formatClock(p.nakshatra.end, lang) })}`],
    [t('yoga'), p.yoga.name[L]],
    [t('karana'), p.karana.name[L]],
  ]

  return (
    <main className="mx-auto max-w-xl px-5 pt-4 pb-6">
      <section className="rise text-center">
        <p className="text-[1.1rem] text-dim">{dateLine}</p>
        <h1 className="mt-2 font-display text-[clamp(2.6rem,13vw,3.6rem)] leading-[1.05] text-warm [text-shadow:0_0_40px_#ffb43a44]">
          {p.tithi.name[L]}
        </h1>
        <p className="mt-2 text-[1.25rem] text-warm">
          {p.masa.name[L]} {paksha} · {t('samvat', { n: p.samvat })}
        </p>
        <p className="mt-1 text-[1.05rem] text-dim">{t('tithiTill', { time: formatClock(p.tithi.end, lang) })}</p>
        <p className="mt-3 text-[1.1rem] text-warm">
          {t('panchangFor')} {lang === 'hi' ? city.name_hi : city.name_en}
        </p>
      </section>

      {next && (
        <button
          onClick={() => openFestival(next.id)}
          className="lamplight mt-7 flex w-full items-center gap-4 rounded-3xl px-5 py-5 text-left ring-1 ring-flame/40 transition active:scale-[0.99]"
        >
          <Diya lit size={64} />
          <span className="min-w-0 flex-1">
            <span className="block text-[1.05rem] text-dim">{days === 0 ? t('festivalToday') : t('festivalIn', { count: days })}</span>
            <span className="block font-display text-[1.9rem] leading-tight text-warm">{lang === 'hi' ? next.name_hi : next.name_en}</span>
            <span className="mt-0.5 block text-[1.05rem] text-warm/85">{lang === 'hi' ? next.line_hi : next.line_en}</span>
          </span>
          <span aria-hidden="true" className="text-3xl text-flame">›</span>
        </button>
      )}

      <section className="mt-7 rounded-3xl bg-night2/70 px-5 py-4" aria-label={t('todaysPanchang')}>
        <h2 className="font-display text-[1.6rem] text-warm">{t('todaysPanchang')}</h2>
        <dl className="mt-2 divide-y divide-black/10">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-[1.1rem] text-dim">{k}</dt>
              <dd className="text-right text-[1.2rem] font-semibold text-warm">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {p.rahuKaal && (
        <section className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#fdecea] px-4 py-3 ring-1 ring-[#e53935]/25">
            <p className="text-[1.05rem] text-[#c62828]">{t('rahuKaal')}</p>
            <p className="text-[1.15rem] font-semibold leading-snug text-warm">
              {formatClock(p.rahuKaal.start, lang)} – {formatClock(p.rahuKaal.end, lang)}
            </p>
            <p className="mt-1 text-sm text-dim">{t('rahuHint')}</p>
          </div>
          {p.abhijit && (
            <div className="rounded-2xl bg-[#e7f5ec] px-4 py-3 ring-1 ring-leaf/30">
              <p className="text-[1.05rem] text-leaf">{t('abhijit')}</p>
              <p className="text-[1.15rem] font-semibold leading-snug text-warm">
                {formatClock(p.abhijit.start, lang)} – {formatClock(p.abhijit.end, lang)}
              </p>
              <p className="mt-1 text-sm text-dim">{t('abhijitHint')}</p>
            </div>
          )}
        </section>
      )}
      <Credits />
    </main>
  )
}
