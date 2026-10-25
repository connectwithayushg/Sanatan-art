import { useEffect, useState } from 'react'
import { AARTI_VIDEOS } from '../../content/aartiVideos'

/**
 * Tap-to-play YouTube player above the lyrics. Nothing loads from YouTube until the tap, so the page stays light and
 * calm; the player, its ads and its controls are YouTube's own and are left untouched.
 */
export function YoutubeCard({ aartiId }: { aartiId: string }) {
  const v = AARTI_VIDEOS[aartiId]
  const [on, setOn] = useState(false)
  const [thumbOk, setThumbOk] = useState(true)
  useEffect(() => {
    setOn(false)
    setThumbOk(true)
  }, [aartiId])
  if (!v) return null
  return (
    <figure className="mt-4 grid gap-2 rounded-2xl bg-white p-2.5 ring-1 ring-black/10">
      <div className="relative aspect-video overflow-hidden rounded-xl" style={{ background: 'linear-gradient(135deg,#3a1d0c,#c24e06)' }}>
        {on ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.yt}?autoplay=1&rel=0&playsinline=1`}
            title={v.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button type="button" onClick={() => setOn(true)} aria-label={v.title} className="absolute inset-0 size-full">
            {thumbOk && <img src={`https://img.youtube.com/vi/${v.yt}/hqdefault.jpg`} alt="" loading="lazy" onError={() => setThumbOk(false)} className="size-full object-cover" />}
            <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-flame/90 text-[1.7rem] text-white shadow-lg">▶</span>
          </button>
        )}
      </div>
      <figcaption className="px-1 text-[0.98rem] font-semibold leading-snug text-warm">{v.title}</figcaption>
    </figure>
  )
}
