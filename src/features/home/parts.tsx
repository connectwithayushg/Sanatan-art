import { useTranslation } from 'react-i18next'
import type { Deity } from '../../content/deities'
import { CITIES } from '../../content/cities'
import { useCity } from '../../ui/CityPicker'
import { heroPicture } from './heroPicture'

/** The city as a pin and a name; a transparent native picker sits on top so phones show their own list. */
export function CityChip() {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const [city, setCityId] = useCity()
  return (
    <span className="h4-city">
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a4.8 4.8 0 0 0-4.8 4.8C3.2 9.9 8 14.5 8 14.5s4.8-4.6 4.8-8.2A4.8 4.8 0 0 0 8 1.5Z" fill="currentColor" /></svg>
      {hi ? city.name_hi : city.name_en}
      <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 6 4.5 4.5L12.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      <select value={city.id} onChange={(e) => setCityId(e.target.value)} aria-label={t('changeCity')}>
        {CITIES.map((c) => <option key={c.id} value={c.id}>{hi ? c.name_hi : c.name_en}</option>)}
      </select>
    </span>
  )
}

/** Greeting for the hour in India, with the city picker and a quiet date line. */
export function CityLine({ date }: { date: string }) {
  const { t } = useTranslation()
  const hour = Number(new Date(Date.now() + 330 * 60000).toISOString().slice(11, 13))
  return (
    <section className="h4-greeting">
      <div><CityChip /><h1>{t(hour < 12 ? 'r_goodMorning' : hour < 17 ? 'h4_afternoon' : 'h4_evening')}</h1></div>
      <p>{date}</p>
    </section>
  )
}

/** The Option 4 shrine: ivory architecture, the seated deity on the right, name and darshan button on the left. */
export function HeroShrine({ deity, onDarshan, small = false, mantra = false }: { deity: Deity; onDarshan: () => void; small?: boolean; mantra?: boolean }) {
  const { t, i18n } = useTranslation()
  const hi = i18n.language === 'hi'
  const n = hi ? deity.name_hi : deity.name_en
  return (
    <section className={small ? 'h4-hero h4-hero-small' : 'h4-hero'}>
      <img className="h4-hero-light" src="/art/home/light.webp" alt="" />
      <img className="h4-hero-photo" src={heroPicture(deity)} alt={n} />
      <div className="h4-hero-copy"><h2>{n}</h2>{mantra ? <p lang="sa">{deity.mantra}</p> : <i aria-hidden="true" />}<button className="h4-orange" onClick={onDarshan}>{t('r_darshanAction')} <span aria-hidden="true">→</span></button></div>
    </section>
  )
}

/** A photograph above a white caption strip with an arrow. */
export function PhotoTile({ label, img, onClick, tall = false }: { label: string; img: string; onClick: () => void; tall?: boolean }) {
  return <button className={tall ? 'h4-tile h4-tile-tall' : 'h4-tile'} onClick={onClick}><img src={img} alt="" loading="lazy" /><span>{label}<span aria-hidden="true">›</span></span></button>
}
