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

New original generated decorative assets: lamp banner, closed unlabelled book banner, Karwa Chauth still life, empty ivory marble shrine, and transparent offering-object photographs. Existing deity identities / colours and original weekday sets remain in use. Actual temple cards use the existing temple photographs and credits, not the fictional shrine.

No devotional content files changed. Existing known text issues in HANDOVER.md are intentionally untouched. No new katha, ritual, history or festival date was invented.

Still missing from the original catalogue: Durga and Khatu weekday sets; seven day-wise Shivling pictures (the existing placeholder remains); individual pictures for Shani, Santoshi, Saraswati and other reader deities that currently show a diya; improved real photos for several temple pages. Gita meanings remain the original chapters 2 and 12 only. The dated festival dataset ends on 24 November 2026; future festivals require independently checked content, not fabricated dates.

The build retains its existing large-main-bundle warning (~1.7 MB). Offline caching now includes WebP and full card photos, so the first complete offline download is ~37 MB. After installation the daily cards and share rendering work without the network. External YouTube playback still requires connectivity and a user tap.

Native file sharing depends on browser support. Desktop fallback saves the card, then presents an explicit WhatsApp link and attachment instruction. Actual transmission remains the user's action.

## Validation

Every stage was checked with Node 22 TypeScript, Vitest and production build. Final suite: 20 tests. Phone checks cover 320 / 390 px, enlarged text, five tabs, readers, saved state, offers, mala and offline production reload. Screenshots and per-stage notes are in pr-1 through pr-5.
