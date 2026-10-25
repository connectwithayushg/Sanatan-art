import { expect, test } from 'vitest'
import { CITIES } from '../../content/cities'
import { monthMasas, monthPanchang } from './month'

const delhi = CITIES.find((c) => c.id === 'delhi')!
const marked = (y: number, m: number, mark: string) =>
  monthPanchang(delhi, y, m)
    .filter((d) => (d.marks as string[]).includes(mark))
    .map((d) => d.d)

// Checked against Drik Panchang day pages for New Delhi.
test('November 2026 vrat days in Delhi', () => {
  expect(marked(2026, 11, 'ekadashi')).toEqual([5, 20]) // 20 Nov: Ekadashi begins after sunrise and ends before the next
  expect(marked(2026, 11, 'amavasya')).toEqual([9])
  expect(marked(2026, 11, 'purnima')).toEqual([24])
})

test('Karwa Chauth (29 Oct 2026) falls on Sankashti Chaturthi', () => {
  expect(marked(2026, 10, 'sankashti')).toContain(29)
})

test('Purnimanta months spanned', () => {
  expect(monthMasas(delhi, 2026, 11).map((x) => x.name[1])).toEqual(['Kartik', 'Margashirsha'])
})
