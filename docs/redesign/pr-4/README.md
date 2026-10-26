# PR 4 — Daily opener, before the doors

The first plain Mandir visit of the day opens four swipeable cards: the existing daily Gita verse with its meaning, one of all 94 existing temples with photo and state, an original decorative ivory-shrine wallpaper, and the calculated panchang / next-festival countdown. “बाद में” closes immediately. Deep links bypass the opener. Opening once records a new key; the same day never repeats it.

The native dialog supports keyboard focus, Escape and backdrop dismissal; previous/next and four labelled position buttons supplement touch swiping. Each card has sharing; PR 5 upgrades these to the finished image-card composer. Wallpaper download remains hidden behind `WALLPAPER_SAVE_ENABLED = false`. The held-back photo wallpaper bundle is not imported.

The doors now check 4 am India time and record their existing storage key only when actually shown, after the sheet. The original unpadded date format is preserved. All existing storage keys remain unchanged.

## Verification

- Node 22: TypeScript, 15 tests and production build passed.
- Browser: four cards, explicit skip, doors after dismissal, same-day reload suppression and deep links passed.
- Production service worker installed, network disabled, then a fresh reload: verse, meaning and all four card images remained available. `offline.png` records the check.
- The PWA now caches WebP assets, previously omitted, including all 94 rotating temple photographs and card assets. The complete offline download is about 37 MB; first installation needs connectivity.
- Before: Mandir with no daily sheet. After: all four daily panels at 390 × 844.

Depends on PRs 1–3 in order. No religious content, live site or hosting changes.
