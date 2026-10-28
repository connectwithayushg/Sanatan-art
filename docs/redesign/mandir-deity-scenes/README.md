# Mandir deity scenes (28 October 2026)

Ayush approved the 12 final Mandir forms: Ganesh, Shiv, Hanuman, Vishnu, Lakshmi, Durga, Krishna, Ram, Kali, Khatu Shyam (shish darshan), Bal Gopal and Shivling. This change connects them to the existing Layout 1 Mandir.

## What changed
- `public/art/redesign/mandir-scenes/<form>.webp`: one shrine-only picture per form (853 x 1056, same 504:624 ratio as before). Each is the approved mockup with the app screen cropped away, and the bells, lamp flames, lower bowl, diya and table bell replaced by the empty shrine, so the real interactive layers sit on top without doubling. The big brass thali and the deity stay exactly as approved. `build-scenes.py` records how they were made.
- `src/content/deities.ts`: each form has `shrineScene: { base }`. Bal Gopal and Shivling have their own scene, so Krishna never shows Bal Gopal's picture or the other way round. `shrineScenes` (seven old Shiv pictures) and the old `lit`/`unlit` fields are gone because nothing used them.
- `MandirView.tsx`: reads `deity.shrineScene` only.
- Removed the old Shiv scene files (14 webp). The offline download falls from about 56.2 MB to about 48.2 MB.

## Not changed
Layout 1, the labelled controls, both hanging bells, the thali and side-lamp taps, lighting and flower state, storage keys (`balGopal`, `shivLing`, `offerings`, `lastDeity` and the rest), routes, tabs, text, home, picker portraits, meditation and greeting-card pictures.

## Decision for Ayush
The seven weekday pictures are not used on the Mandir any more. The approved collection has one picture per form, so each deity shows the same picture every day. Weekday variants were never created or approved. The old weekday cut-outs still exist for meditation.

## Checks run
Node 22: `npx tsc -b`, 20 tests and `npm run build` pass. Real browser at 390 and 320 px (Hindi): all 12 forms render and match the mockups (`app-vs-mockup-*.jpg`, app on the left, mockup on the right). Krishna and Bal Gopal, Shiv and Shivling switch both ways. Lighting the diya lights the lamps, flowers and both bells work, and the state survives a reload. No horizontal overflow. No failed requests. The offline production reload shows the scenes. Mockup differences: the mockups show a lit diya; the app starts unlit and lights on tap, as before. The Aarti button wraps to two lines for longer names, as it already did.

## Limits
Generated artwork has no copyright clearance (see the handoff). Weekday variants, picker portraits and greeting-card pictures for the new forms are not made. English and enlarged-text views were not re-checked in this change.
