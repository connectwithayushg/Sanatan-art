import { drawDiya, drawRangoli } from './diya'

export interface CardInput {
  title: string
  message: string
  name: string
  /** The small mark in the bottom corner, e.g. ॐ सनातन ऐप */
  footer: string
  lang: 'hi' | 'en'
  /** A painting to set in the arch, or null for the drawn diya. */
  picture: string | null
  /** Closing blessing in gold near the bottom */
  blessing?: string
}

export const PICTURE_GROUPS = [
  { id: 'lakshmi', hi: 'माँ लक्ष्मी', en: 'Maa Lakshmi' },
  { id: 'ganesh', hi: 'श्री गणेश', en: 'Shri Ganesh' },
  { id: 'diya', hi: 'दीये', en: 'Diyas' },
  { id: 'moon', hi: 'चाँद', en: 'The moon' },
  { id: 'suhaag', hi: 'सुहाग', en: 'Suhaag' },
  { id: 'krishna', hi: 'श्री कृष्ण', en: 'Shri Krishna' },
  { id: 'devta', hi: 'देवी-देवता', en: 'Gods and goddesses' },
  { id: 'mandir', hi: 'मंदिर', en: 'Temples' },
] as const

/** Offered in every card maker, after the festival's own pictures. */
export const ALWAYS_GROUPS = ['devta', 'mandir']

const photo = (group: (typeof PICTURE_GROUPS)[number]['id'], id: string) => ({
  id,
  group,
  src: `/art/photo/${id}.jpg`,
  thumb: `/art/thumb/${id}.jpg`,
})

/** Card pictures: Ravi Varma paintings, then Unsplash photos (credited in the footer). */
export const CARD_PICTURES = [
  { id: 'lakshmi', group: 'lakshmi', src: '/art/lakshmi-1930s.jpg', thumb: '/art/lakshmi-1930s.jpg' },
  { id: 'lakshmi-1896', group: 'lakshmi', src: '/art/lakshmi-1896.jpg', thumb: '/art/lakshmi-1896.jpg' },
  photo('lakshmi', 'LEwZuOq84Ww'),
  photo('lakshmi', 'IzOKY8YqiAA'),
  photo('lakshmi', 'MuP6RK4ntfs'),
  photo('ganesh', 'fv3EpXA6jCA'),
  photo('ganesh', 'fNAsME3HEZI'),
  photo('ganesh', '17bEqegvlIQ'),
  photo('ganesh', 'ciIllSlwwlw'),
  photo('ganesh', 'toRRqOsabxo'),
  photo('diya', 'H4ilfu3vftk'),
  photo('diya', '-32lKp1bi9k'),
  photo('diya', 'xisPXJqwQkA'),
  photo('diya', 'cM8X2DDvnGE'),
  photo('diya', 'ohLyHvxGJYo'),
  photo('diya', 'awsvPJ0kjZk'),
  { ...photo('moon', 'jJ_CskRaG3g'), id: 'moon-1' },
  photo('moon', 'D7W4NAKJFts'),
  photo('moon', 'P6d_O9IsHPg'),
  photo('moon', 'pdQVOcH6EkI'),
  photo('moon', 'LryOyGjm1bo'),
  photo('suhaag', 'kYqIq1SLJoc'),
  photo('suhaag', 'T0XkA1N01x4'),
  photo('suhaag', 'zSX9_MM_pSA'),
  photo('suhaag', 'lwjBhbslaF4'),
  photo('suhaag', 'iohwhGTQfxU'),
  photo('krishna', 'bxYwhPIFOcA'),
  photo('krishna', '-jeARsrDO1c'),
  photo('krishna', 'CfkSS7rYXnA'),
  // The deity photos the mandir used before, kept for cards
  photo('devta', 'JxJ15qeVisk'),
  photo('devta', 'z_oc2zi8hkA'),
  photo('devta', '1qvWMJv_NUU'),
  photo('devta', 'a5zmuEwHzyc'),
  photo('devta', '99DGEk5yHqg'),
  photo('devta', 'vruHKfa-Fi0'),
  photo('mandir', '6XZaixAjdOE'),
  photo('mandir', 'KqHVYJS_Rh0'),
]

const W = 1080
const H = 1920
const HEAD = '"Rozha One", serif'
const BODY = '"Mukta", sans-serif'

function wrap(c: CanvasRenderingContext2D, text: string, maxWidth: number) {
  const words = text.split(/\s+/)
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    const test = line ? line + ' ' + w : w
    if (c.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = w
    } else line = test
  }
  if (line) lines.push(line)
  return lines
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

/** The painting inside a temple arch, its foot dissolving into the night. */
function drawArchPainting(c: CanvasRenderingContext2D, img: HTMLImageElement) {
  const x = 190, y = 150, w = 700, h = 980, r = w / 2
  c.save()
  c.beginPath()
  c.moveTo(x, y + h)
  c.lineTo(x, y + r)
  c.arc(x + r, y + r, r, Math.PI, 0)
  c.lineTo(x + w, y + h)
  c.closePath()
  c.clip()
  const s = Math.max(w / img.width, h / img.height)
  c.drawImage(img, x + (w - img.width * s) / 2, y, img.width * s, img.height * s)
  const fade = c.createLinearGradient(0, y + h - 320, 0, y + h)
  fade.addColorStop(0, 'rgba(13,18,48,0)')
  fade.addColorStop(1, 'rgba(13,18,48,1)')
  c.fillStyle = fade
  c.fillRect(x, y + h - 320, w, 320)
  c.restore()

  c.strokeStyle = '#ffb43a'
  c.lineWidth = 5
  c.beginPath()
  c.moveTo(x - 18, y + h - 260)
  c.lineTo(x - 18, y + r)
  c.arc(x + r, y + r, r + 18, Math.PI, 0)
  c.lineTo(x + w + 18, y + h - 260)
  c.stroke()
}

export async function renderCard(input: CardInput): Promise<HTMLCanvasElement> {
  const [img] = await Promise.all([
    input.picture ? loadImage(input.picture) : Promise.resolve(null),
    document.fonts.load(`110px ${HEAD}`, 'शुभ दीपावली Shubh'),
    document.fonts.load(`600 54px ${BODY}`, 'माँ लक्ष्मी May'),
  ]).catch(() => [null])

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const c = canvas.getContext('2d')!

  // the moonless night, warmed by lamplight from below
  c.fillStyle = '#0d1230'
  c.fillRect(0, 0, W, H)
  const warm = c.createRadialGradient(W / 2, H + 200, 100, W / 2, H, 1500)
  warm.addColorStop(0, 'rgba(120,52,18,0.95)')
  warm.addColorStop(0.45, 'rgba(42,26,51,0.6)')
  warm.addColorStop(1, 'rgba(13,18,48,0)')
  c.fillStyle = warm
  c.fillRect(0, 0, W, H)

  // stars
  for (let i = 0; i < 60; i++) {
    const x = (Math.sin(i * 12.9898) * 43758.5453) % 1
    const y = (Math.sin(i * 78.233) * 12345.678) % 1
    c.fillStyle = `rgba(255,255,255,${0.2 + (i % 5) * 0.1})`
    c.beginPath()
    c.arc(Math.abs(x) * W, Math.abs(y) * H * 0.6, 1.5 + (i % 3) * 0.8, 0, Math.PI * 2)
    c.fill()
  }

  let top: number
  if (img) {
    drawArchPainting(c, img)
    top = 1230
  } else {
    drawRangoli(c, W / 2, 520, 380)
    drawDiya(c, W / 2, 700, 1.5)
    top = 1100
  }

  c.textAlign = 'center'
  c.fillStyle = '#ffe7b8'
  c.shadowColor = 'rgba(255,180,58,0.45)'
  c.shadowBlur = 40
  let size = input.lang === 'hi' ? 124 : 108
  c.font = `${size}px ${HEAD}`
  while (c.measureText(input.title).width > W - 120 && size > 60) c.font = `${(size -= 4)}px ${HEAD}`
  c.fillText(input.title, W / 2, top)
  c.shadowBlur = 0

  c.fillStyle = '#ffe7b8'
  c.font = `600 ${input.lang === 'hi' ? 58 : 52}px ${BODY}`
  const lines = wrap(c, input.message, W - 240)
  lines.forEach((l, i) => c.fillText(l, W / 2, top + 130 + i * 84))

  if (input.name.trim()) {
    c.fillStyle = '#ffb43a'
    c.font = `600 58px ${BODY}`
    c.fillText(input.name.trim(), W / 2, top + 130 + lines.length * 84 + 80)
  }

  c.fillStyle = '#ffb43a'
  c.font = `72px ${HEAD}`
  c.fillText(input.blessing ?? '॥ शुभ लाभ ॥', W / 2, H - 200)

  // a small maker's mark in the corner, no link
  c.textAlign = 'right'
  c.fillStyle = 'rgba(255,231,184,0.6)'
  c.font = `500 34px ${BODY}`
  c.fillText(input.footer, W - 56, H - 56)

  return canvas
}

export function canvasToFile(canvas: HTMLCanvasElement, name: string): Promise<File | null> {
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b ? new File([b], name, { type: 'image/png' }) : null), 'image/png'),
  )
}
