export function formatTime(d: Date | null, lang: string) {
  if (!d) return '–'
  return d.toLocaleTimeString(lang === 'hi' ? 'hi-IN' : 'en-IN', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' })
}

export function formatDateTime(d: Date | null, lang: string) {
  if (!d) return '–'
  return d.toLocaleString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  })
}

/** Time as people say it: "शाम 6:10" in Hindi, "6:10 pm" in English. */
export function formatClock(d: Date | null, lang: string) {
  if (!d) return '–'
  if (lang !== 'hi') return formatTime(d, 'en')
  const parts = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hourCycle: 'h23', timeZone: 'Asia/Kolkata' }).formatToParts(d)
  const h = Number(parts.find((p) => p.type === 'hour')!.value)
  const m = parts.find((p) => p.type === 'minute')!.value
  const period = h < 4 ? 'रात' : h < 12 ? 'सुबह' : h < 16 ? 'दोपहर' : h < 20 ? 'शाम' : 'रात'
  return `${period} ${h % 12 || 12}:${m}`
}
