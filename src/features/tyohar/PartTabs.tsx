/** A festival's parts (muhurat, puja, katha, card) as a row of pill tabs under the top bar. */
export function PartTabs<P extends string>({ parts, labels, part, open }: { parts: readonly P[]; labels: Record<P, string>; part: P; open: (p: P) => void }) {
  return (
    <div className="sticky top-0 z-20 bg-night/90 backdrop-blur">
      <div role="tablist" className="mx-auto grid max-w-xl gap-1 px-3 py-2" style={{ gridTemplateColumns: `repeat(${parts.length}, minmax(0, 1fr))` }}>
        {parts.map((p) => (
          <button
            key={p}
            role="tab"
            aria-selected={part === p}
            onClick={() => open(p)}
            className={`min-h-12 rounded-full px-1 font-semibold ${parts.length > 4 ? 'text-[0.95rem]' : 'text-[1.05rem]'} transition-colors ${part === p ? 'bg-flame text-ember' : 'text-dim hover:text-warm'}`}
          >
            {labels[p]}
          </button>
        ))}
      </div>
    </div>
  )
}
