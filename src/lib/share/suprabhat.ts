import { CARD_MARK, renderCard } from './card'

export interface SuprabhatInput {
  title: string
  picture: string
  verse: [string, string]
  close: string
  name: string
  date: string
  mark: string
}

/** The existing daily verse and safe card photo, with the shared ivory card layout. */
export function renderSuprabhat(input: SuprabhatInput) {
  return renderCard({ title: input.title, picture: input.picture, message: input.verse.join('\n'), blessing: input.close, name: input.name, source: input.date, footer: CARD_MARK, lang: /[अ-ह]/.test(input.title) ? 'hi' : 'en' })
}
