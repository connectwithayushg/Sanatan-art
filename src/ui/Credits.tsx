import { Lotus } from './Ornaments'

/** The lotus at the foot of the main pages. Sources and picture credits (the 'credits' and 'artCredit' strings) will move to the profile section. */
export function Credits() {
  return (
    <footer className="mx-auto mt-12 max-w-xl px-5 pb-6 text-center">
      <Lotus size={52} className="mx-auto" />
    </footer>
  )
}
