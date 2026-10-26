export type ShareResult = 'shared' | 'saved' | 'copied' | 'cancelled'

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}

/** A cancelled native sheet must never start a download or open WhatsApp. */
export async function shareText(text: string): Promise<ShareResult> {
  if (navigator.share) {
    try { await navigator.share({ text }); return 'shared' }
    catch (error) { if (error instanceof Error && error.name === 'AbortError') return 'cancelled'; throw error }
  }
  await navigator.clipboard.writeText(text)
  return 'copied'
}

export async function shareFile(file: File, text: string): Promise<ShareResult> {
  if (navigator.canShare?.({ files: [file] }) && navigator.share) {
    try { await navigator.share({ files: [file], text }); return 'shared' }
    catch (error) { if (error instanceof Error && error.name === 'AbortError') return 'cancelled'; throw error }
  }
  downloadBlob(file, file.name)
  return 'saved'
}
