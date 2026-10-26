import { useState } from 'react'
import { DEITIES } from '../content/deities'

/** All deity identities and pictures continue to come from the existing deity catalogue. */
export function DeityPhoto({ id, fallback, className = '' }: { id?: string; fallback?: string; className?: string }) {
  const deity = DEITIES.find((d) => d.id === id)
  const [failed, setFailed] = useState('')
  const picture = deity?.home ?? deity?.face ?? deity?.thumb ?? fallback ?? '/art/deity/diya-face.webp'
  const src = failed === picture ? '/art/deity/diya-face.webp' : picture
  return <img key={src} src={src} alt="" loading="lazy" onError={() => setFailed(picture)} className={`deity-photo ${className}`} />
}
