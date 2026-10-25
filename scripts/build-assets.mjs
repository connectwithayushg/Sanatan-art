// Renders PWA icons and the WhatsApp link-preview image from SVG at build time.
// The preview image has no text: WhatsApp shows og:title beside it, and resvg can't shape Devanagari from subset fonts.
// Runs before `vite build` so no binary files need to live in the repo.
import { Resvg } from '@resvg/resvg-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const pub = (f) => resolve(root, 'public', f)

const icon = readFileSync(pub('icon.svg'), 'utf8')
for (const [size, out] of [[192, 'icon-192.png'], [512, 'icon-512.png'], [180, 'apple-touch-icon.png']]) {
  const png = new Resvg(icon, { fitTo: { mode: 'width', value: size } }).render().asPng()
  writeFileSync(pub(out), png)
}

const iconInner = icon.replace(/<metadata>[\s\S]*?<\/metadata>/, '').replace(/<\/?svg[^>]*>/g, '')
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><radialGradient id="ogbg" cx="25%" cy="45%" r="90%"><stop offset="0" stop-color="#5a2a12"/><stop offset=".6" stop-color="#1a1f4a"/><stop offset="1" stop-color="#0d1230"/></radialGradient>
  <clipPath id="r"><rect width="512" height="512" rx="80"/></clipPath></defs>
  <rect width="1200" height="630" fill="url(#ogbg)"/>
  <g transform="translate(316 31) scale(1.11)" clip-path="url(#r)">${iconInner}</g>
</svg>`
const ogPng = new Resvg(og)
  .render()
  .asPng()
writeFileSync(pub('og.png'), ogPng)
console.log('assets rendered')
