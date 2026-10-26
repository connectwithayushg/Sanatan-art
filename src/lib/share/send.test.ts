import { afterEach, describe, expect, it, vi } from 'vitest'
import { shareFile } from './send'

afterEach(() => vi.unstubAllGlobals())

describe('native sharing', () => {
  it('shares the generated PNG file without a URL', async () => {
    const send = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { canShare: () => true, share: send })
    const file = new File(['card'], 'sanatan.png', { type: 'image/png' })
    expect(await shareFile(file, 'सुप्रभात')).toBe('shared')
    expect(send).toHaveBeenCalledWith({ files: [file], text: 'सुप्रभात' })
  })
  it('cancellation never downloads or opens another app', async () => {
    vi.stubGlobal('navigator', { canShare: () => true, share: vi.fn().mockRejectedValue(new DOMException('Cancelled', 'AbortError')) })
    const download = vi.fn()
    vi.stubGlobal('document', { createElement: download })
    expect(await shareFile(new File(['card'], 'sanatan.png'), '21 दिन का दर्शन')).toBe('cancelled')
    expect(download).not.toHaveBeenCalled()
  })
  it('real errors stay visible to the caller', async () => {
    vi.stubGlobal('navigator', { canShare: () => true, share: vi.fn().mockRejectedValue(new Error('Sharing failed')) })
    await expect(shareFile(new File(['card'], 'sanatan.png'), 'मंदिर')).rejects.toThrow('Sharing failed')
  })
})
