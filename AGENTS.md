# AGENTS.md — Sanatan App

Read this first. The full story, every decision and every open item is in `HANDOVER.md` next to this file.

## What this is

**Sanatan App** (सनातन ऐप): a Hindi-first (Hindi + English) devotional web app (PWA) for Hindu (Sanatan Dharma) families in India, especially people aged 40–70 who want big text and a calm, traditional feel. Owner: **Ayush** (non-technical founder). Live: https://sanatan-dharma-app.vercel.app. Launch deadline: **27 Oct 2026**.

Five bottom tabs, keep exactly five: **होम** (the doorway: shrine hero, four shortcuts, coming festivals, everything else), **आज** (the daily reading page: panchang, verse, shrine, greeting card), **मंदिर** (home shrine), **आरती** (aartis + bhajans), **पाठ** (scriptures). Festivals (त्योहार) are a page inside Home, not a tab: `#tyohar` and `#tyohar/<id>/...` still work and keep Home lit. The app opens straight on the Mandir (no other opener). Profile and search open from the top bar.

## Stack and commands

- Vite 8 + React 19 + TypeScript 7 + Tailwind CSS v4, `vite-plugin-pwa`, `i18next` (strings in `src/lib/i18n/strings.ts`), `astronomy-engine` for the panchang. Node 22.
- `npm ci` · `npm run dev` · `npm test` (vitest, 11 tests) · `npx tsc -b` · `npm run build`
- `npm run build` also runs `scripts/fetch-gita.mjs`, `scripts/fetch-art.mjs` (downloads Wikimedia/Unsplash pictures) and `scripts/build-assets.mjs` (icons). It needs internet.
- Routing is hash-based in `src/App.tsx` (`#tyohar/diwali`, `#mandir/shiv/aarti/shiv`, `#path/...`, `#aaj/calendar`, `#profile`).
- No backend, no accounts, no analytics. Everything a user does is saved in `localStorage` through `useStored()` (`src/lib/useStored.ts`). Never rename an existing storage key; users would lose their data.

## Map

- `src/features/<tab>/` screens: `home/` (HomeView), `aaj/` (AajToday = the daily page), `tyohar/`, `mandir/` (MandirView, Offerings, Dvar doors, Dhyan meditation), `aarti/` (AartiLibrary; the reader is `diwali/AartiView.tsx`, shared with the Diwali page), `path/`, `bharat/` (भारत के मंदिर, 94 temples), `profile/`, `search/`, `greet/`, `diwali/` (card maker, YouTube card).
- `src/content/` all devotional text and data: `deities.ts` (single source for every deity picture), `aartis*.ts`, `bhajans*.ts`, `festivals.ts` + `*FestivalPages.ts`, `temples*.ts`, `library/` (Path texts; long ones lazy-load from `library/more/*.json`), `learn.ts` (सनातन क्या है).
- `src/lib/panchang/` tithi/nakshatra/masa maths, with tests. `src/lib/share/` canvas cards for WhatsApp.
- `public/art/` pictures (`deity/<id>-cut.webp`, `<id>-face.webp`, weekday sets), `public/audio/` (bell, Om, CC0 nature loops).

## Rules you must follow (Ayush's decisions)

1. **Never deploy or publish.** Do not touch Vercel, do not change hosting. Work on a branch and open a pull request. Ayush reviews; releases go live only after he writes "publish".
2. **Show before building big things.** For any visible change, describe it or add screenshots in the PR. Ayush decides the look.
3. **Religious text must be right.** Every aarti, chalisa, katha, ritual, date or temple fact must match at least **two trusted sources** (Drik Panchang, Gita Press, Bhakti Bharat, Shubh Panchang, temple boards). Where customs differ by region, say so; do not pick one silently. Never invent shlokas, lyrics, predictions or history. Meanings are our own wording.
4. **Design:** bright Blinkit/Zepto/Swiggy-style clarity with a traditional soul. Deep bhagwa top band (#d9600b → #c24e06) with white text, cream pages (#fbf4e8), white cards, saffron accents. Big readable text for elders. **No generic "AI-made" look, no cartoon or kiddish animation, photos over emojis, the deity is always the focus.**
5. **Deity pictures:** only colours that traditionally belong to that deity (Krishna/Bal Gopal: yellow, white, red only). **Khatu Shyam ji is always the SHISH (head) darshan, never a full-body Barbarik.** Canva paintings are never used in cards people send.
6. **Home page:** no WhatsApp/send buttons on home cards, no "पूरा अर्थ पढ़ें" links.
7. **Aarti reader:** calm reading page, ONE "अर्थ" on/off switch for the whole aarti, no play button for lyrics. Audio only through official YouTube embeds (tap to play, never autoplay).
8. **Festivals:** if a festival has one aarti, its आरती tab opens it directly; no "आज की आरती" heading inside a festival.
9. **No money features** (UPI, donations, ads, paywall) while the app is on Vercel's free plan; it bans commercial use.
10. **Keep exactly 5 tabs** (होम · आज · मंदिर · आरती · पाठ). Ideas like Rashifal become cards on आज, not new tabs.
11. **Code style:** match the file you are in (single quotes, no semicolons, 2 spaces). There is no Prettier config: **never run Prettier** on this repo. Hindi strings stay in Devanagari; add the English twin in `strings.ts` too.
12. **No secrets in the repo.** There are none today. API keys live only in the Claude environment settings, never in code.
13. **Held back on purpose:** the home wallpapers feature exists in a separate bundle and must stay out until Ayush confirms the photo sources.

## Working with Claude on the same app

Claude (in Ayush's Claude project) also builds this app and does the releases. To avoid two different copies of the code:
- Always start from the latest `app-source` branch of `connectwithayushg/Sanatan-art`, and open PRs into it.
- Keep each PR small and about one thing, with a plain-English summary Ayush can read.
- Write down in the PR anything Ayush decided while you worked, so Claude can pick it up.
