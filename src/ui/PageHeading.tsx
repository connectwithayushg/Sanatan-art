import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

/** Decorative photography never replaces the real, scalable heading text. */
export function PageHeading({ title, subtitle, image, children }: { title: string; subtitle: string; image: string; children?: ReactNode }) {
  return (
    <header className="page-heading">
      <img src={image} alt="" className="page-heading-photo" />
      <div className="page-heading-copy"><h1>{title}</h1><p>{subtitle}</p>{children}</div>
    </header>
  )
}

export function SectionHeading({ title, onAll, expanded }: { title: string; onAll?: () => void; expanded?: boolean }) {
  const { t } = useTranslation()
  return <div className="section-heading"><h2>{title}</h2>{onAll && <button type="button" onClick={onAll} aria-expanded={expanded}>{t(expanded ? 'r_showLess' : 'r_seeAll')} <span aria-hidden="true">→</span></button>}</div>
}
