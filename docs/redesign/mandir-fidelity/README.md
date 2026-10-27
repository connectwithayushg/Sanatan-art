# Mandir: implementation from the approved artwork

The earlier reconstruction was rejected because its Shiva, architecture, lighting and object proportions diverged from option 5. This version uses a lossless crop of the approved right-hand scene itself, not a regenerated replacement deity or shrine.

Source: `05-living-temple-today-and-mandir.png`, rectangle x=752, y=178, width=504, height=624. The exact extracted image is approved-scene.png. Aarti-book and Jap-mala photographs are also extracted from that reference. No navigation, heading, label or button text is baked into the shrine photo: those remain accessible HTML controls with Hindi / English labels and large hit areas over the actual offering objects.

## Interactive states

- Diya: a generated local marble/wick patch removes the front flame for the unlit state. Tapping reveals the approved original flame. No separately redrawn lamp is placed over the scene.
- Daily pictures: Monday preserves the entire approved scene. The other six variants change only a narrow loose-flower strip at x=100, y=450, width=290, height=29. Every pixel of the approved Shiva's face, body and pose remains identical after production WebP decoding. The variations are decorative artwork, not claims about weekday rituals.
- Other deities and Shivling: an empty niche is reconstructed only within a bounded central region; the surrounding approved architecture, lamps and foreground offerings are retained. Original weekday cutouts are placed there. Bal Gopal, swipe and saved selection remain available.
- The diya counter, cumulative darshan days, mala counts, Aarti/Path routes, meditation and 94-temple library retain their existing logic and storage keys. Share-card deity photos remain unchanged.

The shared toolbar now uses plain white controls and a filled profile symbol; the selected Mandir tab uses the reference's solid silhouette. English and darshan/calendar entry remain available. Additional real features continue below the main composition.

## Evidence

- pixel-verification.json records the source crop, protected deity region, daily edit region and lamp patch.
- artwork-edits.json records the built-in image tool prompts and source outputs. Generated pixels are used only inside those local state/decorative regions; the primary deity is the approved original.
- Seven daily scene URLs, lit/unlit state, offerings counting once, Shivling, Bal Gopal, all other deities, swipe, Aarti and Jap passed browser checks.
- Hindi / English at 320 and 390 px with enlarged text passed without clipped action labels or horizontal overflow.
- TypeScript, 20 tests and production build passed. The production PWA loaded the new scene and lamp state offline after installation.
- Complete offline precache is about 45 MB; the existing large-main-bundle warning remains.

## Saved assets

Production art is in `/Users/falcon/Documents/ChatGPT/SanatanGpt/public/art/redesign/approved-mandir/`: shiv-1.webp through shiv-7.webp, their -unlit variants, empty.webp / empty-unlit.webp, aarti-book.png and jap-mala.png. The original crop is `/Users/falcon/Documents/ChatGPT/SanatanGpt/docs/redesign/mandir-fidelity/approved-scene.png`.

The previous generated statue reconstruction is removed from active production assets. No devotional text, original deity field, existing storage key, hosting setting or live deployment was changed. This supersedes the previous Mandir correction before PR review.
