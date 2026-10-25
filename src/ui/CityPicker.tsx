import { useTranslation } from 'react-i18next'
import { CITIES, DEFAULT_CITY } from '../content/cities'
import { useStored } from '../lib/useStored'

export function useCity() {
  const [cityId, setCityId] = useStored('city', DEFAULT_CITY)
  return [CITIES.find((c) => c.id === cityId) ?? CITIES[0], setCityId] as const
}

/** The city name as plain underlined text; a transparent native picker sits on top, so phones show their own list. */
export function CityPicker() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [city, setCityId] = useCity()
  return (
    <span className="relative inline-flex min-h-12 items-center gap-1.5 border-b-2 border-flame font-semibold">
      {lang === 'hi' ? city.name_hi : city.name_en}
      <svg className="h-4 w-4 text-flame" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M3 5 L8 11 L13 5Z" fill="currentColor" />
      </svg>
      <select value={city.id} onChange={(e) => setCityId(e.target.value)} aria-label={t('changeCity')} className="absolute inset-0 cursor-pointer opacity-0">
        {CITIES.map((c) => (
          <option key={c.id} value={c.id}>
            {lang === 'hi' ? c.name_hi : c.name_en}
          </option>
        ))}
      </select>
    </span>
  )
}
