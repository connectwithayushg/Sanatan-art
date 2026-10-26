# PR 5 — Share cards in the new visual style

Good-morning and festival cards now use saffron, ivory, readable type and photographs. The shared renderer grows the canvas to keep the complete selected text and meaning; it preserves Devanagari grapheme clusters and line breaks. Deity card pictures still come from the existing safe card-photo catalogue. Every rendered card carries the literal `ॐ सनातन ऐप`, including English cards, with no app link.

New image previews are reached from the Path daily shloka, temple details, darshan milestones and all four daily-sheet cards. Completed milestones can be shared from the diya calendar; the counter stays cumulative and only the next milestone is shown. Festival-day greetings appear automatically in Festivals and the daily panchang card, using the existing dated festivals and existing greeting text. Good morning remains a detail page, with a quiet entry on Today.

WhatsApp-logo and additional-sharing buttons both use the native file share sheet where supported. Desktop fallback downloads the PNG and offers a separate, explicit WhatsApp link so users can attach the image. Cancelling the native sheet causes no download or external navigation. Card generation works offline after the PWA cache is installed.

Final consistency fixes keep the city selector in Profile, retain saved-city calculations everywhere, add an empty-search message, and keep deity-image fallback tied to the current image.

## Verification

- Node 22: `npx tsc -b`, 20 tests and `npm run build` passed.
- Browser: morning, festival, shloka, temple and 21-day milestone image previews; PNG native sharing; cancelled share; daily-sheet preview and return; and automatic Karwa Chauth greeting on 29 October 2026 passed. No actual messages were sent; browser sharing was stubbed for these checks.
- Offline production PWA: morning and festival cards regenerated with the network disabled.
- Phone screenshots include before/after morning and festival screens and the new shloka, temple and milestone previews. Exported card samples are also included.
- Main bundle remains approximately 1.7 MB; full offline installation about 37 MB. Existing content gaps and picture gaps are summarized in `../HANDOFF.md`.

Depends on PRs 1–4 in order; target `app-source`. No content files, storage keys, deployments or hosting changed.
