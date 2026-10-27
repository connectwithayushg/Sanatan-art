# Handoff for Ayush and Claude

## Decisions implemented

- Today option 4, Mandir option 5 with the integrated marble ledge, and saffron / ivory throughout.
- Exactly five bottom tabs. Shared top bar, Hindi / English, search, profile and cumulative darshan calendar preserved.
- Aarti has no resume-reading card. Path retains its existing Gita resume data.
- Festivals has no forced middle Ahoi promo; all festivals remain reachable in the grid and search.
- City selection is in Profile; existing saved-city calculations and calendar month navigation remain intact.
- Daily opener is skippable, once per India day, before the Mandir doors, and never on direct detail links.
- Wallpaper saving remains hidden (`src/lib/dailyOpener.ts`). Only the new original decorative shrine wallpaper is used; the held-back wallpaper bundle is not included.
- No sharing controls on Today cards. Sharing is in detail previews, the daily sheet and the darshan calendar. No money features, app-link marks, new tabs or deployments.

## Merge order

Five dependent review branches, beginning at app-source commit eabb21d. PRs should be reviewed and merged 1 → 2 → 3 → 4 → 5. All target app-source, as requested. Later branches include the preceding commits until those are merged. No merge or deployment was performed.

1. `codex/redesign-01-shared-aarti`
2. `codex/redesign-02-path-festivals`
3. `codex/redesign-03-today-mandir`
4. `codex/redesign-04-daily-opener`
5. `codex/redesign-05-share-cards`

## Assets and retained limitations

New decorative assets include the lamp banner, closed unlabelled book banner and Karwa Chauth still life. Mandir now uses the approved option-5 scene itself, losslessly extracted; local lamp and flower patches provide interactive/daily states. Other deities retain their original weekday cutouts in the reconstructed empty niche. Rejected generated Shiva replacements were removed. Actual temple cards use the existing temple photographs and credits, not the fictional shrine.

No devotional text changed. The deity catalogue adds only an optional shrineScene / shrineScenes fields for the corrected Mandir artwork. Existing known text issues in HANDOVER.md are intentionally untouched. No new katha, ritual, history or festival date was invented.

Still missing from the original catalogue: Durga and Khatu weekday sets; seven day-wise Shivling pictures (the existing placeholder remains); individual pictures for Shani, Santoshi, Saraswati and other reader deities that currently show a diya; improved real photos for several temple pages. Gita meanings remain the original chapters 2 and 12 only. The dated festival dataset ends on 24 November 2026; future festivals require independently checked content, not fabricated dates.

The build retains its existing large-main-bundle warning (~1.7 MB). Offline caching now includes WebP and full card photos, so the first complete offline download is ~50 MB. After installation the daily cards and share rendering work without the network. External YouTube playback still requires connectivity and a user tap.

Native file sharing depends on browser support. Desktop fallback saves the card, then presents an explicit WhatsApp link and attachment instruction. Actual transmission remains the user's action.

## Validation

Every stage was checked with Node 22 TypeScript, Vitest and production build. Final suite: 20 tests. Phone checks cover 320 / 390 px, enlarged text, five tabs, readers, saved state, offers, mala and offline production reload. Screenshots and per-stage notes are in pr-1 through pr-5.

## Mandir correction, 27 October

Two reconstructions diverged from option 5. The current Today/Mandir stage uses the actual approved scene, with original Shiva pixels, architecture and foreground objects preserved. Native labels and hit areas operate the diya, flowers and bell. The unlit state changes only the front flame region; six daily variants change only a narrow decorative flower strip, and Monday preserves the full approved scene. Aarti and Jap thumbnails also come from the approved reference.

Original deity fields, daily cutouts and safe share-card photos remain unchanged. See `mandir-fidelity/comparison.png`, README, pixel-verification.json and artwork-edits.json. The earlier `mandir-correction` folder is historical rejected evidence. The correction is included in branches 3, 4 and 5 before PR publication. Corrected stages pass TypeScript, their 11 / 15 / 20 tests and production builds; the final scene and diya state also work offline.

## Natural offerings approved by Ayush

The diya moves to the centre and the flower thali to the left. Two matching hanging bells replace the tabletop bell. Lighting grows from the wick before the corner lamps fade on; both bells swing and retain the existing sound/action. Falling and settled orange/yellow/white flower pieces now use matching photographic textures. Reloads preserve offerings without replaying the entry effects, and reduced motion shows the completed state. The original Shiva pixels are verified unchanged across seven weekday scenes.

See `mandir-offerings/comparison.png`, `interaction.gif` and README for before/after, the recorded interaction, artwork prompts and verification. Production assets are in `public/art/redesign/mandir-offerings-v2/`. The optional scene metadata adds only a `base` path. Corrected review stages 3/4/5 include this refinement. All existing devotional content, storage keys and sharing sources remain unchanged.
