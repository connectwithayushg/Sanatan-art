# PR 3 — Today and Mandir

Today uses the chosen option-4 composition: a large daily deity photograph, four photo tiles, a compact live panchang strip, and the existing calendar, mantra, daily Gita verse, meditation and discovery links. Sharing stays on the greeting detail screen, reached from a quiet home entry.

Mandir follows option 5 with an ivory marble shrine and integrated, large labelled Diya / Flowers / Bell controls. Existing deity cutouts and weekday pictures remain the source of identity; the generated background is an empty decorative shrine. The new decorative offering photographs are generated assets. Aarti and Jap are adjacent, with the original form switches, swipe, clockwise mala, music, meditation and all 94 temple pages preserved.

## Verification

- Node 22: `npx tsc -b`, 11 tests and `npm run build` passed.
- Browser: all three offerings increment one cumulative darshan day; repeated offerings do not increment twice. Shivling switch, Aarti reader and single meaning switch, back navigation, and mala counting passed.
- Five tabs, no home sharing actions, live shloka present, no horizontal overflow at 320 and 390 pixels with enlarged text; no browser exceptions.
- Before/after screenshots at 390 × 844. Full-page after screenshots additionally show retained information below the fold.
- Religious content files and existing storage keys are unchanged. Existing missing weekday sets and Shivling placeholder remain listed in HANDOVER.md.

Depends on PRs 1 and 2, in that order. Review into `app-source`; no deployment or hosting changes.

## Mandir visual correction, 27 October

The initial Mandir implementation did not match the selected option 5 closely enough. It has been corrected to use the compact title / picker row, uninterrupted sunlit lattice shrine, seated Shiva daily set, integrated offering ledge and photo-backed Aarti / Jap actions. Original deity data is preserved; only an optional Mandir image field is added. The previous attempt, chosen reference and corrected app are shown together in `../mandir-correction/comparison.png`. Stage-3 TypeScript, 11 tests and production build were re-run successfully after the correction.
