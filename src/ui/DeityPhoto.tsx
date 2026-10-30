import { useState } from 'react'
import { DEITIES } from '../content/deities'
import { HALO } from '../content/halo'

/** All deity identities and pictures come from the deity catalogue: the same face as the Mandir picker, on that deity's own halo colour. */
export function DeityPhoto({ id, fallback, className = '' }: { id?: string; fallback?: string; className?: string }) {
  const deity = DEITIES.find((d) => d.id === id)
  const [failed, setFailed] = useState('')
  const picture = deity?.face ?? deity?.home ?? deity?.thumb ?? fallback ?? '/art/deity/diya-face.webp'
  const src = failed === picture ? '/art/deity/diya-face.webp' : picture
  const halo = deity?.face && HALO[deity.id]
  const style = halo ? { background: `radial-gradient(circle at 50% 40%, ${halo[0]}, ${halo[1]})` } : undefined
  return <img key={src} src={src} alt="" loading="lazy" onError={() => setFailed(picture)} style={style} className={`deity-photo ${halo ? 'deity-face' : ''} ${className}`} />
}
