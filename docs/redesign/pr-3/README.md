# PR 3 — Today and Mandir

Today uses the chosen option-4 composition: a large daily deity photograph, four photo tiles, a compact live panchang strip, and the existing calendar, mantra, daily Gita verse, meditation and discovery links. Sharing stays on the greeting detail screen, reached from a quiet home entry.

Mandir uses the actual approved option-5 scene, with large live Diya / Flowers / Bell controls. The Shiva figure, architecture and foreground objects retain the original reference pixels. Other deities use their original weekday cutouts inside a locally reconstructed empty niche. Aarti and Jap are adjacent, with the original form switches, swipe, clockwise mala, music, meditation and all 94 temple pages preserved.

## Verification

- Node 22: `npx tsc -b`, 11 tests and `npm run build` passed.
- Browser: all three offerings increment one cumulative darshan day; repeated offerings do not increment twice. Shivling switch, Aarti reader and single meaning switch, back navigation, and mala counting passed.
- Five tabs, no home sharing actions, live shloka present, no horizontal overflow at 320 and 390 pixels with enlarged text; no browser exceptions.
- Before/after screenshots at 390 × 844. Full-page after screenshots additionally show retained information below the fold.
- Religious content files and existing storage keys are unchanged. Existing missing weekday sets and Shivling placeholder remain listed in HANDOVER.md.

Depends on PRs 1 and 2, in that order. Review into `app-source`; no deployment or hosting changes.

## Mandir visual correction, 27 October

The earlier reconstructions did not match option 5. This correction uses the approved scene itself, losslessly extracted. The primary Shiva pixels remain identical across seven daily decorative flower variants; a small local patch supplies the unlit diya state. Labels, offerings, navigation and Aarti/Jap actions are live HTML. Original deity fields and safe share-card photos remain unchanged; only optional scene metadata is added.

See `../mandir-fidelity/comparison.png`, its README and pixel-verification.json. Historical `mandir-correction` images show the rejected attempt and are superseded. Production offline reload and diya state changes pass. Stage-3 TypeScript, 11 tests and build are re-run before PR publication.

## Offering refinements approved by Ayush

The diya is now centred, the flower thali sits to its left, and the lower handheld bell is replaced by two matching hanging bells above. The main flame catches gradually and the two corner lamps follow. Photographic orange/yellow/white blossoms now match the thali and remain on the marble after falling. Both bells swing on tap; the existing sound, darshan counts, saved states, deity/form switching and all reader/jap features remain. Reduced motion shows the final state. See `../mandir-offerings/README.md`, its phone images and `interaction.gif`.
