import { GREETINGS, type Bi } from '../../content/diwaliVidhi'
import { GreetingMaker } from '../greet/GreetingMaker'
import { hi, en } from '../../lib/i18n/strings'

interface CardMakerProps {
  /** Card heading, e.g. शुभ दीपावली; defaults to Diwali */
  title?: Bi
  greetings?: Bi[]
  blessing?: string
  /** Picture groups to offer, in order; defaults to all */
  groups?: string[]
  defaultPicture?: string
  fileName?: string
  storeKey?: string
}

/** Every festival's card is the same shared maker; this keeps the festival pages' props unchanged. */
export function CardMaker({ title, greetings = GREETINGS, blessing, groups, defaultPicture = 'lakshmi', fileName = 'shubh-deepavali.png', storeKey = 'cardPicture' }: CardMakerProps) {
  return (
    <GreetingMaker
      title={title ?? { hi: hi.diwaliTitle, en: en.diwaliTitle }}
      messages={greetings.map((g) => ({ ...g, blessing: blessing ? { hi: blessing, en: blessing } : undefined }))}
      groups={groups}
      defaultPicture={defaultPicture}
      fileName={fileName}
      storeKey={storeKey}
    />
  )
}
