import { useTranslation } from 'react-i18next'
import { DEITIES, deityOfDay } from '../../content/deities'
import { SUPRABHAT_WISHES } from '../../content/greetingMessages'
import { SUPRABHAT } from '../../content/suprabhat'
import { CARD_PICTURES } from '../../lib/share/card'
import { GreetingMaker, type GreetingMessage } from './GreetingMaker'

/** Groups that hold several pictures of one deity, so the daily card can change from week to week. */
const DEITY_GROUPS = ['ganesh', 'krishna', 'lakshmi']

/** Good morning card: today's deity photograph, a short wish, and the deity's own well-known stuti as another message. */
export function SuprabhatCard() {
  const { t } = useTranslation()
  const india = new Date(Date.now() + 330 * 60000)
  const deity = deityOfDay(india.getUTCDay())
  const own = CARD_PICTURES.find((p) => p.src === (deity.card ?? DEITIES[0].card))
  const pool = own && DEITY_GROUPS.includes(own.group) ? CARD_PICTURES.filter((p) => p.group === own.group).map((p) => p.id) : own ? [own.id] : undefined
  const words = SUPRABHAT[deity.id] ?? SUPRABHAT.ganesh
  const messages: GreetingMessage[] = [
    ...SUPRABHAT_WISHES,
    { hi: words.verse.join('\n'), en: words.verse.join('\n'), blessing: words.close },
  ]
  return (
    <GreetingMaker
      heading={{ title: t('gm_suprabhatHeading'), subtitle: t('gm_suprabhatSub') }}
      title={{ hi: 'सुप्रभात', en: 'Suprabhat' }}
      messages={messages}
      groups={['devta', 'ganesh', 'krishna', 'lakshmi', 'diya']}
      defaultPicture={own?.id}
      pool={pool}
      fileName={`suprabhat-${deity.id}.png`}
      storeKey="suprabhatCardPicture"
    />
  )
}
