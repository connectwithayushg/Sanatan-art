# Mandir correction against the selected option 5

Ayush reported that the first implementation did not match the agreed mockup. It had introduced a separate banner, subtitle and picker row, compressed the shrine, used a flat background and different deity artwork, and omitted the photograph in the Jap action.

The correction restores one compact title / deity-picker row, a tall uninterrupted sunlit shrine, a real marble offering ledge with labelled objects, and adjoining photo-backed Aarti and Jap actions. The Shivling / Bal Gopal form switches, music, meditation, deity list, mala, Path and 94-temple directory are kept immediately below the main composition. All existing storage keys and worship logic remain.

New generated Mandir-only artwork follows the selected reference: lattice arch, lamps and marigolds; brass diya; rudraksha mala thumbnail; seated stone Shiva with seven daily garland variations. Original weekday sets, deity names, mantras and card-photo sources are preserved. The only content-file change adds the optional `shrineWeek` image field. These images are app illustrations, not photographs of a named temple or a claim about weekday ritual rules. Prompts are recorded in artwork-prompts.md.

Verification on the complete redesign branch: TypeScript, 20 tests and production build passed. Browser checks passed for all seven Shiva days, all ten deities, Shivling / Bal Gopal, all three offerings counting exactly one darshan day, Aarti reader, Jap, and 320 / 390 px enlarged Hindi and English. No browser exceptions. The production build includes the new art in offline caching.

The original 5-stage PR order remains in effect. This correction belongs with the Today / Mandir stage before review. No deployment, hosting change, devotional text replacement, or shared-card picture replacement.
