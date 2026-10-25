import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { todayIST } from '../../content/festivals'
import { monthMasas, monthPanchang } from '../../lib/panchang/month'
import { useCity } from '../../ui/CityPicker'

/** The temple on the calendar tile, changed each month like the picture on a wall calendar. Months not listed use the default. */
const MONTH_TEMPLE: Record<string, string> = {
  '2026-10': '/art/photo/6XZaixAjdOE.jpg', // Virupaksha, Hampi, at night
  '2026-11': '/art/photo/KqHVYJS_Rh0.jpg', // Konark Sun Temple wheel
}
const DEFAULT_TEMPLE = '/art/photo/6XZaixAjdOE.jpg'

const WEEK = [
  ['र', 'S'],
  ['सो', 'M'],
  ['मं', 'T'],
  ['बु', 'W'],
  ['गु', 'T'],
  ['शु', 'F'],
  ['श', 'S'],
]
const DEV = '०१२३४५६७८९'
const num = (n: number, hi: boolean) => (hi ? String(n).replace(/\d/g, (d) => DEV[+d]) : String(n))
const pad = (n: number) => String(n).padStart(2, '0')

/** A desk-calendar tile for the home page: the month's temple on the left, this month's dates on the right. Opens the full calendar. */
export function MonthCard({ onOpen, onTemples }: { onOpen: () => void; onTemples?: () => void }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const L = hi ? 0 : 1
  const [city] = useCity()
  const { y, m, d: today } = todayIST()

  const days = useMemo(() => monthPanchang(city, y, m), [city, y, m])
  const masas = useMemo(() => monthMasas(city, y, m), [city, y, m])
  const next = useMemo(() => {
    const here = days.find((x) => x.d >= today && x.marks.includes('ekadashi'))
    if (here) return { y, m, d: here.d }
    const n = new Date(Date.UTC(y, m, 1))
    const ny = n.getUTCFullYear()
    const nm = n.getUTCMonth() + 1
    const there = monthPanchang(city, ny, nm).find((x) => x.marks.includes('ekadashi'))
    return there ? { y: ny, m: nm, d: there.d } : null
  }, [city, days, today, y, m])

  const fmt = (o: { y: number; m: number; d: number }, opts: Intl.DateTimeFormatOptions) =>
    new Date(Date.UTC(o.y, o.m - 1, o.d, 6)).toLocaleDateString(hi ? 'hi-IN' : 'en-IN', opts)
  const monthName = fmt({ y, m, d: 15 }, { month: 'long' })
  const lead = days[0]?.weekday ?? 0

  return (
    <button onClick={onOpen} aria-label={`${t('cal_title')}, ${monthName} ${y}`} className="flex min-h-[10rem] w-full overflow-hidden rounded-3xl bg-[#fffaf0] text-left shadow-[0_2px_10px_rgba(60,30,0,0.1)] ring-1 ring-black/5 active:scale-[0.99]">
      <span
        className="relative w-[44%] shrink-0"
        {...(onTemples && {
          role: 'link',
          onClick: (e: React.MouseEvent) => {
            e.stopPropagation()
            onTemples()
          },
        })}
      >
        <img src={MONTH_TEMPLE[`${y}-${pad(m)}`] ?? DEFAULT_TEMPLE} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent to-60%" />
        <span className="absolute right-2 bottom-3 left-3 text-white">
          <span className="block font-display text-[1.15rem] leading-tight">{t('cal_title')}</span>
          {next && <span className="mt-0.5 block text-[0.68rem] leading-snug text-white/90">{t('cal_nextEkadashi', { date: fmt(next, { day: 'numeric', month: 'long' }) })}</span>}
        </span>
      </span>
      <span className="min-w-0 flex-1 px-3 pt-3 pb-3">
        <span className="block font-display text-[1.1rem] leading-none text-warm">
          {monthName} {num(y, hi)}
        </span>
        <span className="mt-0.5 mb-1.5 block truncate text-[0.6rem] font-semibold text-flame">{masas.map((x) => x.name[L]).join(' – ')}</span>
        <span className="grid grid-cols-7 text-center" aria-hidden="true">
          {WEEK.map(([h, e], i) => (
            <span key={i} className={`pb-0.5 text-[0.55rem] font-semibold ${i === 0 ? 'text-[#c62828]' : 'text-dim'}`}>
              {hi ? h : e}
            </span>
          ))}
          {Array.from({ length: lead }, (_, i) => (
            <span key={`e${i}`} />
          ))}
          {days.map((x) =>
            x.d === today ? (
              <span key={x.d} className="grid h-[1.05rem] place-items-center">
                <span className="grid h-[1.05rem] w-[1.05rem] place-items-center rounded-full bg-flame text-[0.6rem] font-bold text-white">{num(x.d, hi)}</span>
              </span>
            ) : (
              <span key={x.d} className={`h-[1.05rem] text-[0.6rem] leading-[1.05rem] font-semibold ${x.weekday === 0 ? 'text-[#c62828]' : 'text-warm'}`}>
                {num(x.d, hi)}
              </span>
            ),
          )}
        </span>
      </span>
    </button>
  )
}
