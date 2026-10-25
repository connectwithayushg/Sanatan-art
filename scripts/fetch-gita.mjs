// Downloads the Sanskrit of the Gita (gita/gita repo, Unlicense) and writes src/content/gita/sanskrit.json:
// one array of verses per chapter, each verse's lines joined by "\n" and ending with " ॥".
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'

const OUT = 'src/content/gita/sanskrit.json'
if (existsSync(OUT)) process.exit(0)

const res = await fetch('https://raw.githubusercontent.com/gita/gita/main/data/verse.json')
if (!res.ok) throw new Error(`Gita download failed: ${res.status}`)
const verses = (await res.json()).sort((a, b) => a.chapter_number - b.chapter_number || a.verse_number - b.verse_number)

const lines = (t) => t.split('\n').map((l) => l.trim()).filter(Boolean)
const clean = (raw) => {
  let t = lines(raw.trim().replace(/\s*।।\s*\d+\.\d+\s*।।\s*$/, '')).join('\n')
  t = t.replace(/\s*[।|]+\s*\d+\.\d+\s*[।|]*\s*$/, '').replace(/।(?=\S)/g, '।\n').replace(/[ \t]+/g, ' ')
  const ls = lines(t)
  const last = ls[ls.length - 1]
  ls[ls.length - 1] = /[।॥]$/.test(last) ? last.replace(/।+$/, '').trimEnd() + ' ॥' : last + ' ॥'
  return ls.join('\n')
}

const out = {}
for (const v of verses) (out[v.chapter_number] ??= []).push(clean(v.text))
mkdirSync('src/content/gita', { recursive: true })
writeFileSync(OUT, JSON.stringify(out))
console.log('Gita:', Object.keys(out).length, 'chapters')
