import { useEffect, useState } from 'react'

/** Where the deity actually is inside a cut-out picture, as fractions of the picture, plus its width/height ratio. */
export interface CutBox {
  l: number
  t: number
  r: number
  b: number
  a: number
  /** Where the deity's own axis is (mass-based, so spread cloth or a halo does not pull it aside) and how wide the deity itself is. */
  cx: number
  cw: number
}

const cache = new Map<string, CutBox>()

/** Finds the visible part of a transparent cut-out (ignoring stray specks) so the Mandir can size and centre every deity the same way. */
export function useCutBox(src: string): CutBox | null {
  const [box, setBox] = useState<CutBox | null>(() => cache.get(src) ?? null)
  useEffect(() => {
    const hit = cache.get(src)
    if (hit) {
      setBox(hit)
      return
    }
    setBox(null)
    let gone = false
    const img = new Image()
    img.onload = () => {
      if (gone) return
      const a = img.naturalWidth / img.naturalHeight
      const w = 96
      const h = Math.max(1, Math.round(w / a))
      const found: CutBox = { l: 0, t: 0, r: 1, b: 1, a, cx: 0.5, cw: 1 }
      try {
        const c = document.createElement('canvas')
        c.width = w
        c.height = h
        const ctx = c.getContext('2d', { willReadFrequently: true })!
        ctx.drawImage(img, 0, 0, w, h)
        const px = ctx.getImageData(0, 0, w, h).data
        const rows = new Array<number>(h).fill(0)
        const cols = new Array<number>(w).fill(0)
        for (let y = 0; y < h; y++)
          for (let x = 0; x < w; x++)
            if (px[(y * w + x) * 4 + 3] > 40) {
              rows[y]++
              cols[x]++
            }
        const first = (v: number[]) => v.findIndex((n) => n >= 2)
        const last = (v: number[]) => v.length - 1 - [...v].reverse().findIndex((n) => n >= 2)
        const t = first(rows)
        const l = first(cols)
        if (t >= 0 && l >= 0) {
          found.t = t / h
          found.b = (last(rows) + 1) / h
          found.l = l / w
          found.r = (last(cols) + 1) / w
          const bot = last(rows) + 1
          const at = (f: number) => Math.round(t + (bot - t) * f)
          const [crown0, crown1, chest0, chest1] = [at(0), at(0.25), at(0.2), at(0.6)]
          let cs = 0
          let cn = 0
          let bs = 0
          let bn = 0
          let mn = 0
          const mass = new Array<number>(w).fill(0)
          for (let y = t; y < h; y++)
            for (let x = 0; x < w; x++)
              if (px[(y * w + x) * 4 + 3] > 40) {
                mn++
                mass[x]++
                if (y >= crown0 && y < crown1) {
                  cs += x + 0.5
                  cn++
                }
                if (y >= chest0 && y < chest1) {
                  bs += x + 0.5
                  bn++
                }
              }
          if (cn && bn) found.cx = (cs / cn + bs / bn) / 2 / w
          let acc = 0
          let lo = 0
          let hi = w
          for (let x = 0; x < w; x++) {
            acc += mass[x]
            if (acc < mn * 0.03) lo = x + 1
            if (acc <= mn * 0.97) hi = x + 1
          }
          found.cw = Math.max(0.2, (hi - lo + 1) / w)
        }
      } catch {
        /* keep the whole picture */
      }
      cache.set(src, found)
      setBox(found)
    }
    img.onerror = () => {
      if (!gone) setBox({ l: 0, t: 0, r: 1, b: 1, a: 6 / 7, cx: 0.5, cw: 1 })
    }
    img.src = src
    return () => {
      gone = true
    }
  }, [src])
  return box
}
