# Mandir layout decision — 28 October 2026

Ayush selected **Layout 1 for launch and current use**. The labelled lower controls (पुष्प · दीया · घंटी, with the diya centred) make the offerings clear to new users. Both unlabelled hanging bells remain usable. `layout-1.png` is the approved visual reference.

**Layout 2 is saved for a possible change after the app has been live for six months**, when users are familiar with the interactions. It removes lower labels and the separate flower-thali control; the large flower thali near the deity becomes the flower button. `layout-2.png` is the reference. This is a later design option, not a scheduled or automatic switch. Ayush has not committed to a release date or to adopting it.

## Shared approved details

- Reuse the actual approved photo jyoti and lower bell; no newly drawn flame or pulsing/stretching fire.
- Gently dim the unlit shrine and brighten it when the diya lights. Corner lamps light too.
- Both top bells have accessible names, with no visible text below them.
- Thirteen matching photographic flowers fall, then disappear. No extra settled floor layer.
- Real prayers, jap, deity switching, weekday images, doors, five tabs, search and profile stay available.

## Preserved versions

Both PNGs and `interactive-prototype.tar.gz` preserve the two reviewed designs. The archive contains the complete isolated React preview source, including both layouts and photo sources; it omits dependencies, caches and all user data. It is reference material only and is not bundled into the app. Its Vite `publicDir` and `fs.allow` refer to this local repository; adapt those paths on another machine and install/link the repository dependencies before running it. Choose `?layout=1#mandir/shiv` or `?layout=2#mandir/shiv`. Preview storage is separate from real app storage.

The convenient original working copy remains at `/Users/falcon/Downloads/Sanatan/mockups-2026-10-28/interactive`. Its comparison page is in the adjacent `final` folder. Local URLs need those local servers running; the saved images and archive do not depend on the servers.

## Current implementation

Layout 1 is applied in `src/features/mandir/Offerings.tsx`, `MandirView.tsx` and the Mandir section of `src/index.css`. Layout 2 stays in the archive and interactive comparison, with no hidden date trigger or production setting. To adopt Layout 2 later, port only its layout/flower hit-area changes after Ayush reviews them again. Existing storage keys and devotional content remain unchanged.

This decision supersedes the earlier natural-offerings notes where those mention permanent flower pieces, hanging-bell labels or the separately generated flame. No live deployment was performed.

## Direct object taps — approved by Ayush, 28 October 2026

Layout 1 also accepts taps on the large flower thali near the deity and either side diya. The large thali uses the same flower action as the labelled पुष्प button. Either side diya uses the same saved lighting state as the central diya, lighting all three together. Both top bells retain the existing sound and swing. The labelled controls remain available. There are no separate counters for the added tap areas, and darshan still counts only once per day. Invisible native button targets have Hindi/English accessible names, keyboard focus indicators and generous tap areas. Both interactive previews include these shared actions; the originally approved image/source snapshot remains preserved unchanged.

## Verification

TypeScript, Vitest and production builds pass for the updated Today/Mandir, daily opener and share-card review stages (11 / 15 / 20 tests respectively). `validation.json` records the production-browser check: offerings/audio, gradual light, original photo flame, 13 flowers disappearing, saved state, cumulative darshan, reader/back, jap, deity and Shivling switching, Hindi/English at 320/390 px with enlarged text, minimum tap areas and reduced motion. `app-before-selection.png` and `app-layout-1-{unlit,lit}.png` are the before/after phone screenshots.

`object-taps-validation.json` records native touch, actual hit-target visibility, keyboard, shared saved state, repeat offers, 320/390 px, Hindi/English and both comparison layouts. `object-taps-offline-validation.json` verifies the new actions and reload persistence offline in the final production build. `object-taps-hindi-after.png` is the final Hindi phone screenshot. Updated review stages 1–5 pass TypeScript, their 11 / 11 / 11 / 15 / 20 tests and production builds on app-source 2a5f7d0. The new upstream learning content and profile reader match app-source exactly, as does its photographic Mala function.

PR upload is still blocked locally: GitHub CLI has no authenticated host and a non-interactive branch push reports that it cannot read a GitHub username. All code, reviews and checks are saved locally; no PR was created and no deployment was performed.
