
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
  source?: string
  compact?: boolean
  pictureFit?: 'cover' | 'contain'
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

export const CARD_MARK = 'ॐ सनातन ऐप'
const W = 1080
const HEAD = '"Rozha One", serif'
const BODY = '"Mukta", sans-serif'

/** Keep line breaks and Devanagari grapheme clusters intact, even in long unspaced words. */
function wrap(c: CanvasRenderingContext2D, text: string, width: number) {
  const lines: string[] = []
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' })
  for (const paragraph of text.split('\n')) {
    if (!paragraph.trim()) { lines.push(''); continue }
    let line = ''
    for (const word of paragraph.trim().split(/\s+/)) {
      const test = line ? `${line} ${word}` : word
      if (c.measureText(test).width <= width) { line = test; continue }
      if (line) { lines.push(line); line = '' }
      for (const { segment } of segmenter.segment(word)) {
        if (line && c.measureText(line + segment).width > width) { lines.push(line); line = '' }
        line += segment
      }
    }
    if (line) lines.push(line)
  }
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

/** One ivory/saffron photo-card system. Height grows to preserve every line of the source text. */
export async function renderCard(input: CardInput): Promise<HTMLCanvasElement> {
  const [photo] = await Promise.all([
    loadImage(input.picture ?? '/art/redesign/aarti-banner.webp'),
    document.fonts.load(`88px ${HEAD}`, 'शुभ सुप्रभात'),
    document.fonts.load(`500 52px ${BODY}`, 'अर्थ Meaning'),
  ])
  const img = photo ?? await loadImage('/art/redesign/aarti-banner.webp')
  const canvas = document.createElement('canvas')
  canvas.width = W
  const c = canvas.getContext('2d')!
  const titleSize = input.lang === 'hi' ? 88 : 80
  c.font = `${titleSize}px ${HEAD}`
  const titleLines = wrap(c, input.title, W - 144)
  c.font = `500 52px ${BODY}`
  const messageLines = wrap(c, input.message, W - 156)
  c.font = `600 48px ${BODY}`
  const nameLines = input.name.trim() ? wrap(c, input.name.trim(), W - 156) : []
  c.font = `500 36px ${BODY}`
  const sourceLines = input.source ? wrap(c, input.source, W - 156) : []
  c.font = `500 44px ${BODY}`
  const blessingLines = input.blessing ? wrap(c, input.blessing, W - 156) : []
  const photoH = input.compact ? 300 : 620
  const textTop = 128 + photoH + 90
  const end = textTop + titleLines.length * 104 + 32 + messageLines.length * 76 + (sourceLines.length ? 36 + sourceLines.length * 54 : 0) + (nameLines.length ? 40 + nameLines.length * 68 : 0) + (blessingLines.length ? 36 + blessingLines.length * 64 : 0)
  canvas.height = Math.max(1350, end + 140)
  const H = canvas.height
  c.fillStyle = '#fbf4e8'
  c.fillRect(0, 0, W, H)
  const band = c.createLinearGradient(0, 0, W, 0)
  band.addColorStop(0, '#d9600b')
  band.addColorStop(1, '#c24e06')
  c.fillStyle = band
  c.fillRect(0, 0, W, 24)
  c.strokeStyle = '#e4cba5'
  c.lineWidth = 2
  c.strokeRect(34, 48, W - 68, H - 82)

  c.save()
  c.beginPath()
  c.roundRect(60, 128, W - 120, photoH, 32)
  c.clip()
  c.fillStyle = '#f0e0c5'
  c.fillRect(60, 128, W - 120, photoH)
  if (img) {
    const scale = (input.pictureFit === 'cover' ? Math.max : Math.min)((W - 120) / img.width, photoH / img.height)
    c.drawImage(img, (W - img.width * scale) / 2, 128 + (photoH - img.height * scale) / 2, img.width * scale, img.height * scale)
  }
  c.restore()

  c.textAlign = 'center'
  c.textBaseline = 'alphabetic'
  let y = textTop
  c.fillStyle = '#a43f05'
  c.font = `${titleSize}px ${HEAD}`
  for (const line of titleLines) { c.fillText(line, W / 2, y); y += 104 }
  y += 32
  c.fillStyle = '#42291b'
  c.font = `500 52px ${BODY}`
  for (const line of messageLines) { c.fillText(line, W / 2, y); y += 76 }
  if (sourceLines.length) {
    y += 36
    c.fillStyle = '#795a41'
    c.font = `500 36px ${BODY}`
    for (const line of sourceLines) { c.fillText(line, W / 2, y); y += 54 }
  }
  if (nameLines.length) {
    y += 40
    c.fillStyle = '#a43f05'
    c.font = `600 48px ${BODY}`
    for (const line of nameLines) { c.fillText(line, W / 2, y); y += 68 }
  }
  if (blessingLines.length) {
    y += 36
    c.fillStyle = '#a43f05'
    c.font = `500 44px ${BODY}`
    for (const line of blessingLines) { c.fillText(line, W / 2, y); y += 64 }
  }
  c.textAlign = 'right'
  c.fillStyle = '#9b4c1e'
  c.font = `600 34px ${BODY}`
  c.fillText(CARD_MARK, W - 64, H - 56)
  return canvas
}

export function canvasToFile(canvas: HTMLCanvasElement, name: string): Promise<File | null> {
  return new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b ? new File([b], name, { type: 'image/png' }) : null), 'image/png'),
  )
}
