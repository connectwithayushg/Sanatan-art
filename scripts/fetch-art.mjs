// Downloads the public-domain paintings at build time, so no large binary files need to live in the source.
// Sources: Wikimedia Commons (Raja Ravi Varma), and Unsplash photos (Unsplash License).
// Credits are in the app footer.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const dir = resolve(import.meta.dirname, '..', 'public', 'art')

const commons = (name) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=800`
const ART = {
  'lakshmi-1896.jpg': commons('Raja Ravi Varma, Goddess Lakshmi, 1896.jpg'),
  'lakshmi-1930s.jpg': commons('Lakshmi, by Raja Ravi Varma, 1930s, edit.jpg'),
}

// Unsplash photo ids -> image path. Cropped by Unsplash to the card's arch (5:7) and to a small grid thumbnail.
const UNSPLASH = {
  LEwZuOq84Ww: 'photo-1732965118789-8038a3154de4',
  IzOKY8YqiAA: 'photo-1590228948882-cf73e8efe843',
  MuP6RK4ntfs: 'photo-1709098275133-3c0ece04712f',
  fv3EpXA6jCA: 'photo-1567591370504-80142b28f1c1',
  fNAsME3HEZI: 'photo-1598195596234-e04b82ef8adf',
  '17bEqegvlIQ': 'photo-1598424212597-0fc2bd086d17',
  ciIllSlwwlw: 'photo-1695229347230-e7e493ca3a3b',
  toRRqOsabxo: 'photo-1631446416793-edfbeade1692',
  H4ilfu3vftk: 'photo-1605292356183-a77d0a9c9d1d',
  '-32lKp1bi9k': 'photo-1605378229010-11aedbb01b24',
  xisPXJqwQkA: 'photo-1577083753695-e010191bacb5',
  cM8X2DDvnGE: 'photo-1635192592106-77a5aacbe1a3',
  ohLyHvxGJYo: 'photo-1635842975205-d6c2f1c0e1fe',
  awsvPJ0kjZk: 'photo-1761295908318-4007b4597822',
  // Karwa Chauth: the moon, and suhaag (bangles, mehndi)
  jJ_CskRaG3g: 'photo-1693418777220-e94f65d4cd4d',
  D7W4NAKJFts: 'photo-1590005510163-dec35d52ddcd',
  P6d_O9IsHPg: 'photo-1592542453915-2fd2322f1751',
  pdQVOcH6EkI: 'photo-1633095170147-6032dd136657',
  LryOyGjm1bo: 'photo-1581886573745-4487c55d95f8',
  kYqIq1SLJoc: 'photo-1613665667184-81bb9b8605e2',
  zSX9_MM_pSA: 'photo-1686865604150-43f95d61416c',
  lwjBhbslaF4: 'photo-1612945578381-6481cdd73b0a',
  iohwhGTQfxU: 'photo-1583878543723-dcd6ad8bcb3f',
  T0XkA1N01x4: 'photo-1729587024306-6992a1c1057c',
  // Aarti portraits
  '99DGEk5yHqg': 'photo-1774848795560-a935f282d312',
  JxJ15qeVisk: 'photo-1668344500552-0bc310ed3a96',
  '1qvWMJv_NUU': 'photo-1730191567375-e82ce67160df',
  'vruHKfa-Fi0': 'photo-1759463191632-90844233c9ea',
  bxYwhPIFOcA: 'photo-1722404353053-7c99652ec9f0',
  '-jeARsrDO1c': 'photo-1641730259879-ad98e7db7bcb',
  CfkSS7rYXnA: 'photo-1590228947699-5f1fa1d86458',
  // Path library covers: Shiva seated, Hanuman with mace, a rudraksha mala
  z_oc2zi8hkA: 'photo-1615438890269-65b569062819',
  a5zmuEwHzyc: 'photo-1689079565334-0aee5b0160c3',
  '0ixU5CM6Xig': 'photo-1678920005141-8832ef4a090a',
  '6XZaixAjdOE': 'photo-1566300141301-ab0577dcba1c',
  KqHVYJS_Rh0: 'photo-1765870615815-6ca460d31cae',
}
const unsplash = (path, w, h) => `https://images.unsplash.com/${path}?w=${w}&h=${h}&fit=crop&crop=entropy&fm=jpg&q=78`
for (const [id, path] of Object.entries(UNSPLASH)) {
  ART[`photo/${id}.jpg`] = unsplash(path, 700, 980)
  ART[`thumb/${id}.jpg`] = unsplash(path, 240, 336)
}
const UA = 'SanatanApp/0.2 (https://sanatan-deepavali.vercel.app) node-fetch'

for (const [file, url] of Object.entries(ART)) {
  const out = resolve(dir, file)
  if (existsSync(out)) continue
  mkdirSync(dirname(out), { recursive: true })
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': UA } }).catch(() => null)
    if (res?.ok && res.headers.get('content-type')?.startsWith('image/')) {
      writeFileSync(out, Buffer.from(await res.arrayBuffer()))
      console.log('art', file)
      break
    }
    console.warn(`art ${file}: ${res?.status ?? 'network error'}, try ${attempt}`)
    await new Promise((r) => setTimeout(r, attempt * 4000))
  }
}
