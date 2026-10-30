import { CARD_MARK } from './card'

export interface GreetingInput {
  title: string
  message: string
  /** Second, gold line under the message, e.g. a closing wish */
  blessing?: string
  /** Already includes any prefix such as "स्नेह सहित" */
  name: string
  lang: 'hi' | 'en'
  picture: string
}

const W = 1080
const HEAD = '"Rozha One", serif'
const BODY = '"Mukta", sans-serif'
/** A very tall picture is shown whole, centred on the cream, instead of being cut. */
const MAX_PHOTO = 1500

/** Wrap without splitting a Devanagari conjunct, vowel mark or emoji grapheme. */
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

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const timer = setTimeout(() => { img.src = ''; reject(new Error('Card picture timed out')) }, 15000)
    img.onload = () => { clearTimeout(timer); resolve(img) }
    img.onerror = () => { clearTimeout(timer); reject(new Error('Card picture could not load')) }
    img.src = src
  })
}

/** Photo-first greeting: the whole picture on top, then the heading, message, sender and the quiet mark. Rejects when anything is missing, so no half-made card is ever shared. */
export async function renderGreeting(input: GreetingInput): Promise<{ canvas: HTMLCanvasElement; file: File }> {
  const [img, headFace, bodyFace] = await Promise.all([
    loadImage(input.picture),
    document.fonts.load(`88px ${HEAD}`, input.title),
    document.fonts.load(`500 56px ${BODY}`, input.message + input.name + (input.blessing ?? '')),
  ])
  if (!headFace.length || !bodyFace.length) throw new Error('Card fonts are unavailable')
  const natural = Math.round((W * img.naturalHeight) / img.naturalWidth)
  const photoH = Math.min(MAX_PHOTO, natural)
  const photoW = natural > MAX_PHOTO ? Math.round((W * MAX_PHOTO) / natural) : W
  const canvas = document.createElement('canvas')
  canvas.width = W
  const c = canvas.getContext('2d')
  if (!c) throw new Error('Canvas is unavailable')
  const titleSize = input.lang === 'hi' ? 92 : 84
  const textW = W - 150
  c.font = `${titleSize}px ${HEAD}`
  const title = wrap(c, input.title, textW)
  c.font = `500 56px ${BODY}`
  const message = wrap(c, input.message, textW)
  c.font = `500 46px ${BODY}`
  const blessing = input.blessing ? wrap(c, input.blessing, textW) : []
  c.font = `600 48px ${BODY}`
  const name = input.name.trim() ? wrap(c, input.name.trim(), textW) : []
  canvas.height = photoH + 5 + 100 + title.length * 112 + 24 + message.length * 82 + (blessing.length ? 24 + blessing.length * 64 : 0) + (name.length ? 30 + name.length * 68 : 0) + 120
  c.fillStyle = '#fbf4e8'
  c.fillRect(0, 0, W, canvas.height)
  c.drawImage(img, (W - photoW) / 2, 0, photoW, photoH)
  const rule = c.createLinearGradient(0, 0, W, 0)
  rule.addColorStop(0, '#d9600b')
  rule.addColorStop(1, '#c24e06')
  c.fillStyle = rule
  c.fillRect(0, photoH, W, 5)
  c.textAlign = 'center'
  c.textBaseline = 'alphabetic'
  let y = photoH + 5 + 100
  const draw = (lines: string[], font: string, colour: string, step: number) => {
    c.font = font
    c.fillStyle = colour
    for (const line of lines) { c.fillText(line, W / 2, y); y += step }
  }
  draw(title, `${titleSize}px ${HEAD}`, '#a43f05', 112)
  y += 24
  draw(message, `500 56px ${BODY}`, '#42291b', 82)
  if (blessing.length) { y += 24; draw(blessing, `500 46px ${BODY}`, '#a43f05', 64) }
  if (name.length) { y += 30; draw(name, `600 48px ${BODY}`, '#76502d', 68) }
  y += 46
  c.fillStyle = '#b89a78'
  c.fillRect(W / 2 - 210, y - 12, 100, 2)
  c.fillRect(W / 2 + 110, y - 12, 100, 2)
  draw([CARD_MARK], `500 34px ${BODY}`, '#805c39', 40)
  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Card export failed'))), 'image/png'))
  return { canvas, file: new File([blob], 'card.png', { type: 'image/png' }) }
}
