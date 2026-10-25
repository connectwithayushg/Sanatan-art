/** Draws a clay diya with a flame centred at (x, y). `s` is the scale (1 ≈ 200px wide). */
export function drawDiya(c: CanvasRenderingContext2D, x: number, y: number, s: number) {
  c.save()
  c.translate(x, y)
  c.scale(s, s)

  // glow
  const glow = c.createRadialGradient(0, -70, 5, 0, -70, 190)
  glow.addColorStop(0, 'rgba(255,210,120,0.65)')
  glow.addColorStop(1, 'rgba(255,170,60,0)')
  c.fillStyle = glow
  c.beginPath()
  c.arc(0, -70, 190, 0, Math.PI * 2)
  c.fill()

  // flame
  const flame = c.createLinearGradient(0, -150, 0, -20)
  flame.addColorStop(0, '#fff6d5')
  flame.addColorStop(0.45, '#ffc93c')
  flame.addColorStop(1, '#ff7a1a')
  c.fillStyle = flame
  c.beginPath()
  c.moveTo(0, -160)
  c.bezierCurveTo(30, -110, 34, -60, 0, -30)
  c.bezierCurveTo(-34, -60, -30, -110, 0, -160)
  c.fill()

  // bowl
  const bowl = c.createLinearGradient(0, -30, 0, 60)
  bowl.addColorStop(0, '#d8843a')
  bowl.addColorStop(1, '#8a3b12')
  c.fillStyle = bowl
  c.beginPath()
  c.moveTo(-110, -25)
  c.quadraticCurveTo(0, -5, 120, -40) // rim with spout on the right
  c.quadraticCurveTo(95, 55, 0, 55)
  c.quadraticCurveTo(-95, 55, -110, -25)
  c.fill()

  // rim highlight
  c.strokeStyle = '#f2b765'
  c.lineWidth = 5
  c.beginPath()
  c.moveTo(-104, -22)
  c.quadraticCurveTo(0, -4, 112, -36)
  c.stroke()

  // dots
  c.fillStyle = '#f5d27a'
  for (let i = -3; i <= 3; i++) {
    c.beginPath()
    c.arc(i * 24, 25, 5, 0, Math.PI * 2)
    c.fill()
  }
  c.restore()
}

/** Simple rangoli mandala of petals. */
export function drawRangoli(c: CanvasRenderingContext2D, x: number, y: number, r: number) {
  c.save()
  c.translate(x, y)
  const rings: [number, number, string][] = [
    [16, r, 'rgba(232,180,80,0.22)'],
    [12, r * 0.7, 'rgba(240,120,60,0.25)'],
    [8, r * 0.42, 'rgba(250,215,120,0.3)'],
  ]
  for (const [n, rad, col] of rings) {
    c.fillStyle = col
    for (let i = 0; i < n; i++) {
      c.save()
      c.rotate((i / n) * Math.PI * 2)
      c.beginPath()
      c.ellipse(0, -rad * 0.62, rad * 0.14, rad * 0.38, 0, 0, Math.PI * 2)
      c.fill()
      c.restore()
    }
  }
  c.fillStyle = 'rgba(255,230,160,0.35)'
  c.beginPath()
  c.arc(0, 0, r * 0.12, 0, Math.PI * 2)
  c.fill()
  c.restore()
}
