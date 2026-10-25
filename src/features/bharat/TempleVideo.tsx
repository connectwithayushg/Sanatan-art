import { useEffect, useState } from 'react'
import type { Temple } from '../../content/bharatTemples'

/** Tap-to-play YouTube from the temple's own or an official channel. Nothing loads from YouTube until the tap. */
export function TempleVideo({ video }: { video: NonNullable<Temple['video']> }) {
  const [on, setOn] = useState(false)
  const [thumbOk, setThumbOk] = useState(true)
  useEffect(() => {
    setOn(false)
    setThumbOk(true)
  }, [video.id])
  return (
    <figure className="grid gap-2 rounded-2xl bg-white p-2.5 ring-1 ring-black/10">
      <div className="relative aspect-video overflow-hidden rounded-xl" style={{ background: 'linear-gradient(135deg,#3a1d0c,#c24e06)' }}>
        {on ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button type="button" onClick={() => setOn(true)} aria-label={video.title} className="absolute inset-0 size-full">
            {thumbOk && <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" onError={() => setThumbOk(false)} className="size-full object-cover" />}
            <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-flame/90 text-[1.7rem] text-white shadow-lg">▶</span>
          </button>
        )}
      </div>
      <figcaption className="px-1 text-[0.98rem] leading-snug">
        <span className="block font-semibold text-warm">{video.title}</span>
        <span className="block text-dim">{video.channel}</span>
      </figcaption>
    </figure>
  )
}
