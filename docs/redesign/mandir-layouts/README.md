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
