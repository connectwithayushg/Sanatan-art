import { useTranslation } from 'react-i18next'
import type { Bi } from '../../content/diwaliVidhi'
import type { KathaPic } from '../../content/kathaPics'

/** A katha as large readable paragraphs with its story pictures set between them. `endLine` centres the last line as a closing prayer. */
export function KathaStory({ paras, pics = [], endLine = false }: { paras: Bi[]; pics?: KathaPic[]; endLine?: boolean }) {
  const { i18n } = useTranslation()
  const l = i18n.language as 'hi' | 'en'
  return (
    <div className="mt-6 space-y-6">
      {paras.map((p, i) => (
        <div key={i} className="space-y-6">
          <p
            className={`rise font-scripture text-[1.3rem] leading-[1.85] ${endLine && i === paras.length - 1 ? 'text-center font-bold text-flame' : 'text-warm'}`}
            style={{ animationDelay: `${Math.min(i, 4) * 60}ms` }}
          >
            {p[l]}
          </p>
          {pics
            .filter((x) => x.after === i)
            .map((x) => (
              <figure key={x.src} className="overflow-hidden rounded-2xl bg-night2/70 ring-1 ring-black/10">
                <img src={x.src} alt={x.alt[l]} loading="lazy" width={960} height={540} className="block aspect-video w-full object-cover" />
                <figcaption className="px-4 py-2 text-center text-[1.05rem] leading-snug text-dim">{x.alt[l]}</figcaption>
              </figure>
            ))}
        </div>
      ))}
    </div>
  )
}
