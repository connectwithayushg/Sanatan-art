const W = 1080
const H = 1350
const HEAD = '"Rozha One", serif'
const BODY = '"Mukta", sans-serif'

export interface SuprabhatInput {
  title: string
  picture: string
  verse: [string, string]
  close: string
  name: string
  date: string
  mark: string
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

/** Writes a line, shrinking the font until it fits the card's width. */
function fit(c: CanvasRenderingContext2D, text: string, y: number, weight: string, size: number, family: string, max = W - 100) {
  c.font = `${weight} ${size}px ${family}`
  while (c.measureText(text).width > max && size > 26) c.font = `${weight} ${(size -= 2)}px ${family}`
  c.fillText(text, W / 2, y)
}

/** The daily morning card: sunrise colours, the day's deity in an arch, a verse, and a small mark in the corner. */
export async function renderSuprabhat(input: SuprabhatInput): Promise<HTMLCanvasElement> {
  const [img] = await Promise.all([
    loadImage(input.picture),
    document.fonts.load(`110px ${HEAD}`, 'सुप्रभात'),
    document.fonts.load(`600 44px ${BODY}`, 'वक्रतुण्ड'),
  ]).catch(() => [null])

  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const c = canvas.getContext('2d')!

  const sky = c.createLinearGradient(0, 0, 0, H)
  sky.addColorStop(0, '#ffd59a')
  sky.addColorStop(0.5, '#fff1dc')
  sky.addColorStop(1, '#fff8ee')
  c.fillStyle = sky
  c.fillRect(0, 0, W, H)
  const sun = c.createRadialGradient(W / 2, 470, 60, W / 2, 470, 620)
  sun.addColorStop(0, 'rgba(255,170,60,.55)')
  sun.addColorStop(1, 'rgba(255,170,60,0)')
  c.fillStyle = sun
  c.fillRect(0, 0, W, H)
  c.strokeStyle = 'rgba(217,96,11,.18)'
  c.lineWidth = 6
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2
    c.beginPath()
    c.moveTo(W / 2 + Math.cos(a) * 400, 430 + Math.sin(a) * 400)
    c.lineTo(W / 2 + Math.cos(a) * 520, 430 + Math.sin(a) * 520)
    c.stroke()
  }

  // the deity in a temple arch, fading into the morning light
  const x = 300, y = 90, w = 480, h = 640, r = w / 2
  c.save()
  c.beginPath()
  c.moveTo(x, y + h)
  c.lineTo(x, y + r)
  c.arc(x + r, y + r, r, Math.PI, 0)
  c.lineTo(x + w, y + h)
  c.closePath()
  c.clip()
  if (img) {
    const s = Math.max(w / img.width, h / img.height)
    c.drawImage(img, x + (w - img.width * s) / 2, y, img.width * s, img.height * s)
  }
  const fade = c.createLinearGradient(0, y + h - 320, 0, y + h)
  fade.addColorStop(0, 'rgba(255,241,220,0)')
  fade.addColorStop(1, 'rgba(255,241,220,1)')
  c.fillStyle = fade
  c.fillRect(x, y + h - 320, w, 320)
  c.restore()
  c.strokeStyle = '#d9600b'
  c.lineWidth = 5
  c.beginPath()
  c.moveTo(x - 18, y + h - 260)
  c.lineTo(x - 18, y + r)
  c.arc(x + r, y + r, r + 18, Math.PI, 0)
  c.lineTo(x + w + 18, y + h - 260)
  c.stroke()

  c.textAlign = 'center'
  c.fillStyle = '#b84300'
  fit(c, input.title, 860, '', 120, HEAD)
  c.fillStyle = '#5a2d0c'
  fit(c, input.verse[0], 950, '600', 44, BODY)
  fit(c, input.verse[1], 1012, '600', 44, BODY)
  c.fillStyle = '#7a4a24'
  fit(c, input.close, 1090, '500', 40, BODY)
  if (input.name.trim()) {
    c.fillStyle = '#c24e06'
    fit(c, `— ${input.name.trim()}`, 1170, '700', 52, BODY)
  }

  c.textAlign = 'left'
  c.fillStyle = 'rgba(90,45,12,.75)'
  c.font = `500 32px ${BODY}`
  c.fillText(input.date, 40, H - 52)

  // small app mark in the bottom-right corner, no link
  c.font = `600 34px ${BODY}`
  const tw = c.measureText(input.mark).width, pw = tw + 44, ph = 58, mx = W - pw - 36, my = H - ph - 36
  c.fillStyle = 'rgba(194,78,6,0.10)'
  c.beginPath()
  c.roundRect(mx, my, pw, ph, 29)
  c.fill()
  c.fillStyle = 'rgba(150,60,5,0.9)'
  c.textAlign = 'center'
  c.fillText(input.mark, mx + pw / 2, my + 40)

  return canvas
}
