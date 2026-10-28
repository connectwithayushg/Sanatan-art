import { useState, type CSSProperties } from 'react'

const ART = '/art/redesign/mandir-offerings-v2'

/** Photographic flowers match the thali and disappear after one brief offering. */
const FLOWERS = [
  { x: 20, y: 73, size: 5.6, turn: -18 },
  { x: 33, y: 75, size: 6.4, turn: 12 },
  { x: 43, y: 74, size: 6, turn: -9 },
  { x: 57, y: 75, size: 6.8, turn: 16 },
  { x: 69, y: 73, size: 5.8, turn: -15 },
  { x: 79, y: 75, size: 5.4, turn: 20 },
  { x: 25, y: 77, size: 5, turn: 9 },
  { x: 38, y: 78, size: 5.4, turn: -12 },
  { x: 62, y: 78, size: 5.6, turn: 15 },
  { x: 74, y: 77, size: 5.2, turn: -8 },
  { x: 29, y: 74, size: 5.5, turn: 7 },
  { x: 50, y: 76, size: 5.8, turn: -16 },
  { x: 66, y: 75, size: 5.4, turn: 11 },
]

const flowerStyle = (flower: typeof FLOWERS[number], i: number): CSSProperties => ({
  left: `${flower.x}%`,
  top: `${flower.y}%`,
  width: `${flower.size}%`,
  '--turn': `${flower.turn}deg`,
  '--delay': `${i * 85}ms`,
} as CSSProperties)

export function FallFlowers({ wave }: { wave: number }) {
  if (!wave) return null
  return <div key={wave} className="shrine-falling-flowers" aria-hidden="true">
    {FLOWERS.map((flower, i) => <span key={i} className="photo-fall-flower" style={{ ...flowerStyle(flower, i), '--drift': `${(i % 3 - 1) * 28}px` } as CSSProperties}><img src={`${ART}/flower-${i % 6 + 1}.webp`} alt="" /></span>)}
  </div>
}

/** The chain is the pivot; generous transparent hit areas also work for older hands. */
export function HangingBell({ side, onRing, label }: { side: 'left' | 'right'; onRing: () => void; label: string }) {
  const [swing, setSwing] = useState(0)
  return <button className={`shrine-bell shrine-bell-${side}`} onClick={() => { setSwing((n) => n + 1); onRing() }} aria-label={label}>
    <img key={swing} className={swing ? 'photo-bell-swing' : ''} src={`${ART}/hanging-bell.webp`} alt="" />
  </button>
}

/** Reloads show the saved state calmly. Only a user lighting it starts the ignition sequence. */
export function ShrineLamps({ lit, igniting }: { lit: boolean; igniting: boolean }) {
  return <div className={`shrine-lamps ${lit ? 'lamps-lit' : ''} ${igniting ? 'lamps-igniting' : ''}`} aria-hidden="true">
    <img className="corner-lamp corner-lamp-left" src={`${ART}/corner-left.webp`} alt="" />
    <img className="corner-lamp corner-lamp-right" src={`${ART}/corner-right.webp`} alt="" />
  </div>
}

/** Photograph hit areas share the labelled controls' actions and saved offering state. */
export function ShrineOfferingTargets({ lit, flowers, light, offerFlowers, lightLabel, flowerLabel }: {
  lit: boolean
  flowers: boolean
  light: () => void
  offerFlowers: () => void
  lightLabel: string
  flowerLabel: string
}) {
  return <>
    <button className="shrine-object-target large-thali-hotspot" onClick={offerFlowers} aria-label={flowerLabel} aria-pressed={flowers} />
    {(['left', 'right'] as const).map((side) => <button key={side} className={`shrine-object-target side-diya-hotspot side-diya-${side}`} onClick={light} aria-label={lightLabel} aria-pressed={lit} />)}
  </>
}

export function OfferingLedge({ lit, igniting, flowers, light, offerFlowers, flowerLabel, diyaLabel, lightLabel, ring, bellLabel }: {
  lit: boolean
  igniting: boolean
  flowers: boolean
  light: () => void
  offerFlowers: () => void
  flowerLabel: string
  diyaLabel: string
  lightLabel: string
  ring: () => void
  bellLabel: string
}) {
  return <div className="photo-offering-ledge">
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs><filter id="approved-jyoti-alpha" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 8 0 0 -6.2" /></filter></defs></svg>
    <button className="photo-offering photo-offering-flowers" onClick={offerFlowers} aria-label={flowerLabel} aria-pressed={flowers}>
      <img className="photo-thali" src={`${ART}/flower-thali.webp`} alt="" />
      <strong>{flowerLabel}</strong>
    </button>
    <button className={`photo-offering photo-offering-diya ${lit ? 'diya-is-lit' : ''} ${igniting ? 'diya-igniting' : ''}`} onClick={light} aria-label={lightLabel} aria-pressed={lit}>
      <span className="photo-diya-object"><img className="photo-diya-bowl" src={`${ART}/diya.webp`} alt="" /><span className="approved-jyoti-crop"><img src={`${ART}/diya-flame-context.png`} alt="" /></span></span>
      <strong>{diyaLabel}</strong>
    </button>
    <button className="photo-offering photo-offering-bell" onClick={ring} aria-label={bellLabel}><strong>{bellLabel}</strong></button>
  </div>
}

export function ApprovedTableBell() {
  return <span className="approved-table-bell-crop" aria-hidden="true"><img src={`${ART}/approved-scene.png`} alt="" /></span>
}
