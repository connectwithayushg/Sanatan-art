# Sanatan App — full handover

_Written 25 Oct 2026 from Ayush's Claude project (memory, threads, code). The short rules are in `AGENTS.md`; this file has the whole story._

---

## 1. The app in one paragraph

Sanatan App (सनातन ऐप) is a Hindi-first, Hindi + English devotional web app for Hindu (Sanatan Dharma) believers in India, NRIs later. The target user is a 40–70-year-old who opens it every morning: does darshan in a home mandir, reads today's panchang, reads an aarti or chalisa, and sends a greeting on WhatsApp. **Mandir is the daily-return hook; greetings are how new people find the app.** It is a PWA (installable from the browser), costs ₹0 to run today, and has no login, no backend and no ads. Owner: Ayush (non-technical, works in IST, uses the app on his phone to review).

## 2. Links

| What | Where |
|---|---|
| Live app | https://sanatan-dharma-app.vercel.app |
| Separate Diwali page (keep as is, never overwrite) | https://sanatan-deepavali.vercel.app |
| GitHub repo | https://github.com/connectwithayushg/Sanatan-art (public) |
| Full app source | branch **`app-source`** of that repo (made 25 Oct for Codex) |
| What the live site is built from | `update.tgz` on `main` of that repo, commit `6e4bb520` |
| Original plan | `/mnt/project-files/sanatan-plan/PLAN.md` (Claude project files) |
| 7-day launch plan | https://claude.ai/code/artifact/c833b1c4-f32e-46ae-bcc3-f459d34286cc |
| Text and lyrics cross-check report | https://claude.ai/artifact/H5MCP67UA9gYeA5aybUK4W |
| Costs and revenue plan | https://claude.ai/code/artifact/02197e1a-706a-4ddc-a0e8-3b5021da0e81 |
| Ayush's 26-item wishlist review | https://claude.ai/artifact/CWmQqYACTvQyBBFD35B8Up |
| Sample "सनातन क्या है" chapter | https://claude.ai/artifact/ScyKduMWfqMEA3Py32WXdS |
| Home wordmark options | https://claude.ai/artifact/Vo1vYMqQE7riXvqF2CGrUG |
| Rashifal + wallpaper mockups | https://claude.ai/artifact/26cgTsxjmuoLNQpuFVxMcY |

The claude.ai links open only for Ayush (they are private to his account).

## 3. How the code is stored and released today (important)

The app grew release by release inside Claude, so until now there was **no normal Git history**:

- Vercel project `sanatan-dharma-app` was first deployed by uploading files directly. Each later release **redeploys** the previous one with a build command that downloads `update.tgz` (all changed source + pictures) from the `Sanatan-art` repo at a pinned commit, unpacks it over the old files and runs `npm run build`. That is why the repo's `main` branch only holds `deity/` pictures and `update.tgz`.
- On 25 Oct the full current source (old base + latest `update.tgz`, commit `6e4bb520`) was rebuilt into one folder and checked: `tsc` passes, 11 tests pass, `npm run build` succeeds. It is pushed as branch **`app-source`**. This is what Codex should work on.
- Releases: Ayush writes **"publish"** in Claude's "Main Build" thread; Claude bundles the change and redeploys on Vercel. Codex should never deploy.
- Suggested next step (Ayush's call, not done): make `app-source` the single source of truth for both Claude and Codex, and later connect Vercel to that branch so a merge builds a preview automatically. Moving hosting to Cloudflare Pages is planned before any money feature (see §9).

Secrets: there are none in the code. A Google Gemini API key exists only as a network secret in Ayush's Claude cloud environment settings (used for image tests; Google's free tier gives no image quota, so it is unused). Vercel access is through Claude's Vercel connector. Never put keys in the repo.

## 4. Tech

- Vite 8, React 19, TypeScript 7, Tailwind v4, `vite-plugin-pwa` (auto-update service worker, precache ~7 MB), `i18next` (`src/lib/i18n/strings.ts`, `hi` + `en`), `astronomy-engine` (panchang computed on the phone, Lahiri ayanamsa, Purnimanta months), fonts Mukta / Noto Serif Devanagari / Rozha One (self-hosted).
- Build: `npm run build` = fetch Gita text + paintings/photos (Wikimedia, Unsplash) + make icons + `tsc -b` + `vite build`. Needs internet. Main JS chunk is 1.7 MB (code-splitting is a fair improvement).
- Tests: `src/lib/panchang/*.test.ts` (daily, Diwali, month). Run `npm test`.
- State: `localStorage` via `useStored(key)`. Keys in use: `city`, `scale`, `lastDeity`, `balGopal`, `shivLing`, `jap`, `japTarget`, `aarti`, `aartiLast`, `aartiMode`, `aartiSize`, `showMeaning`, `pathMeaning`, `gitaLast`, `cardName`, `dhyanPick`, `learnRead`, `offerHints`, plus darshan data in `src/lib/darshan.ts`. Don't rename them.
- Routing: hash routes in `src/App.tsx`, e.g. `#aaj/calendar`, `#tyohar/<festival>/<part>`, `#mandir/<deity>`, `#mandir/<deity>/aarti/<id>`, `#mandir/<deity>/path/<book>`, `#mandir/bharat/...`, `#aarti/<id>`, `#path/...`, `#profile/...`.

## 5. What is live, tab by tab (as of the 23 Oct 22:58 UTC release)

**Top bar (every tab):** "सनातन" wordmark (tap = home), दैनिक दर्शन diya counter (unlit until today's darshan, total days, never resets, tap = month calendar with next milestone 11/21/51/108), search, profile.

**आज (home, `QuickHome.tsx`):** desk-calendar month card (temple photo per month, opens full panchang calendar), weekday mantra card (no buttons), "आज क्या करें" photo tile row, ध्यान (meditation) bar with deity + sound picker, suprabhat greeting card, upcoming festivals, भारत के मंदिर card, "सनातन क्या है" card at the bottom (hides after all chapters are read). Full panchang at `#aaj/panchang`: tithi, nakshatra, yoga, karana, masa, sunrise/sunset/moonrise, Rahu Kaal, Abhijit, for the chosen city.

**त्योहार:** big next-festival card with countdown; rows by month with painting and date on the right. 11 festivals: Sharad Purnima, Karwa Chauth, Ahoi Ashtami, Dhanteras, Choti Diwali, Diwali, Govardhan, Bhai Dooj, Chhath, Dev Uthani Ekadashi / Tulsi Vivah, Kartik Purnima. Each page: muhurat for the city, vidhi, samagri, katha with 2–3 painted scenes, aarti tab, quiet "शुभकामना भेजें" link to the card maker. Pages open inside the app.

**मंदिर:** opens first once a day (from 4 am) with carved wooden doors that open on tap. Sanctum background, deity cut-out inside the back arch with a halo coloured per deity, swipe to change deity. Day-wise pictures (one per weekday) for Vishnu, Ram, Kali, Ganesh, Lakshmi, Krishna, Bal Gopal, Hanuman, Shiv. Switches: श्री कृष्ण | बाल गोपाल, शिव जी | शिवलिंग (placeholder photo). Offerings by tapping real things: clay diya, clay flower bowl (marigolds fall and stay till midnight), two brass bells. Music and meditation buttons, rudraksh mala jap counter (11/21/51/108), aarti and path bars that open inside the Mandir tab. Picker order: last worshipped deity, then today's deity (आज tag), then the rest. भारत के मंदिर lives here too: 94 temple pages (12 Jyotirlinga, Char Dham, Chota Char Dham, Sapta Puri, Kumbh, Ashtavinayak, Panch Kedar, Panch Badri, Pancha Bhoota, Braj, plus at least one tirth per state), legal India map (DataMeet, CC BY 4.0), search, YouTube video at the end of a page.

**आरती:** आरती | भजन switch. 34 aartis and 38 bhajans, search (Hindi + English), today's deity first, then last read. Reader: tap-to-play official YouTube video above the lyrics (50 official videos, mostly T-Series Bhakti Sagar), one अर्थ switch, A−/A+, screen stays awake, "आरती के बाद" (कर्पूरगौरं + क्षमा प्रार्थना), bell button. 8 deities without a photo show a diya.

**पाठ:** search bar; shelves in this order: सबसे प्रिय पाठ, चालीसा, व्रत कथा, स्तोत्र, ग्रंथ, त्योहार कथा, मंत्र. Full Bhagavad Gita (Sanskrit; own meanings only for chapters 2 and 12), Hanuman/Shiv/Durga/Ganesh + 8 more chalisas, Sundar Kand, 19 stotras, 13 vrat kathas retold in own words (Satyanarayan, 7 weekdays, Som Pradosh, 4 Ekadashis), daily mantras, verse of the day with WhatsApp share. Covers: deity in a gold temple arch.

**Profile:** name + city, मेरी साधना (darshan days, today's jap), language, text size (3 steps), सनातन क्या है (6 chapters, first draft), ऐप के बारे में, FAQ (10, credits in the last one), WhatsApp share of the app.

**Greetings:** card maker with live preview, 3 steps (चित्र / नाम / संदेश), 3 pictures + 3 messages per day per phone, "ॐ सनातन ऐप" corner mark, **no link on the card**, green-outline WhatsApp button with a small mono WhatsApp logo.

## 6. Ayush's rules and decisions

**Working rules**
- Never publish without his explicit "publish" (in Claude's Main Build thread). Order is always: mockup → code → show screenshots → publish only when he says so.
- Cross-check every katha, ritual, lyric, date and temple fact with at least **two trusted sources**; note regional differences instead of choosing one. He shares advice from other AIs; cross-check it, don't follow it blindly.
- Claude writes and reviews Hindi/English meanings for now (no pandit review yet). Meanings are our own wording, never copied from Gita Press (their translations are still copyrighted).
- Ayush is non-technical: explain in plain words, give copy-paste steps.

**Design direction**
- Bright, clear, Blinkit / Zepto / Swiggy style layout; Sri Mandir as the category reference. Traditional and distinctive, never generic "AI-made", never kiddish or cartoon animation. Simple and large for older users. Photos over emojis. The deity is always the focus.
- Colours: deep bhagwa top band `#d9600b → #c24e06` with white text, cream pages `#fbf4e8`, white cards, saffron accents, festival chips `#fff3e0` / `#b34700`. The old dark "Amavasya Night" palette is retired.
- Bottom bar: floating bar with coloured tiles, open tab = light bhagwa and lifted. Exactly 5 tabs.
- Home: no WhatsApp/send buttons on home cards (suprabhat card is the one exception already approved), no "पूरा अर्थ पढ़ें". One photo style on home.

**Deity pictures**
- Day-wise pictures may change outfit, pose and ornaments but **only in colours that traditionally suit that deity**; never invent. Krishna and Bal Gopal: yellow, white, red only. Thursday = grandest shringar.
- **Khatu Shyam ji: always the SHISH (head) darshan.** Only shringar, cloth colour (kesariya, white, red, yellow) and crown vary. Never full-body Barbarik.
- Canva paintings: Mandir only, never in cards people send. Cards use Ayush's own photos.
- Ayush makes new deity pictures himself in Gemini/ChatGPT from prompts we write (prompt packs in `/mnt/project-files/antigravity-images/`). Cut-outs: plain deep maroon `#5a141c` background, 9:16, then background removed (rembg birefnet-general-lite).

**Content**
- Audio: no free recordings of the main aartis exist, so audio = official YouTube embeds only (tap to play, video visible, no background play, no paywall over it). A browser-synth instrumental was tried and parked.
- Aarti reader: one अर्थ switch, no play/karaoke. Ram ji has both the stuti (श्री रामचंद्र कृपालु) and a proper aarti.
- Festivals: no "आज की आरती" heading inside a festival; one aarti = the आरती tab opens it directly. Katha pictures: 2–3 scenes, same face/age/clothes per character.
- सनातन क्या है: warm, loving tone, history as गौरव गाथा, ~10-minute chapters in 4–5 short parts with a story, shloka, "आज की सीख". Keep "मान्यता है / शास्त्र कहते हैं" wording; no false claims.
- Temples: legal India map only; disputed sites state only public record; do not link srirangam.org (it is now a gambling site).
- Rashifal (if built): a "मेरी राशि" card on आज computed from the panchang (Moon's rashi, chandrabal), never invented predictions. No 6th tab.

**Business**
- Name stays "Sanatan App". No domain owned yet. Budget ₹0.
- Vercel Hobby plan forbids commercial use: no UPI / donation / ads / payments until hosting moves (Cloudflare Pages planned). Never move hosting without asking Ayush.
- Earning roadmap (not decided): UPI "seva sahyog" → Sanatan+ at ₹49/month → online puja with partner temples. Light ads never inside aarti or path.

## 7. Deadline

- Full app live **27 Oct 2026**; ready for Ayush's review on 26 Oct.
- Festival dates 2026: Sharad Purnima 25 Oct, **Karwa Chauth Thu 29 Oct**, Ahoi Ashtami 1 Nov, Dhanteras 6 Nov, Choti Diwali 7 Nov, Diwali 8 Nov, Govardhan 10 Nov, Bhai Dooj 11 Nov, Chhath 13–16 Nov, Dev Uthani 20 Nov (Smarta) / 21 Nov (Vaishnava), Kartik Purnima 24 Nov.

## 8. Open items

**Waiting on Ayush**
- **Text errors are live and unfixed.** The cross-check report lists 20 clear errors, 15 variants to pick, 5 polish items, plus temple and round-2 aarti findings. Top ones: Triveni page says Gandhi's ashes 1949 (should be 12 Feb 1948); Gokul "1550 Vallabhacharya" (he died 1531); Barsana "1675 Raja Veer Singh Dev" (he died 1627); Grishneshwar credits Gautamabai 1729 (sources say Ahilyabai ~1769); Somnath "1951 पूरा हुआ"; Hanuman aarti meaning grammar; Vishnu suprabhat card shows half a shloka; Diwali page footer says "सनातन ऐप जल्द आ रहा है"; Mahamrityunjay meanings differ between bhajan and path; Bhadrachalam Gopanna was Palvancha tahsildar; Govind Hare shloka "वयं नमः" → "वयं नुमः". Variants for Ayush to choose: Lakshmi aarti हरि/हर, Jagdish aarti missing "तन मन धन" stanza, Kali aarti ललकारती/संहारती, Sunday deity Durga vs Surya. He said he will give instructions after reading; don't fix silently.
- **Wallpapers (held back).** Built (home "वॉलपेपर" row + gallery + save, 50 of his photos) in `/mnt/project-files/sanatan-app/wallpaper-update/`, but must not go live until Ayush confirms where each photo came from (some carry "Meta AI" or social-media marks and were left out).
- **Logo:** bright saffron `#EA6A0C` candidates (arch + स, flame-in-lotus, ॐ-on-lotus) in `/mnt/project-files/logo/bright/`; waiting for his final pick, then sharp vector icon files.
- **Home wordmark:** he picked version 3 (Hindi Martel सनातन/धर्म, English Yeseva) with a subtle white line flute; waiting for his feather choice (`/mnt/project-files/logo/wordmark/feather2/`). Not in the app yet.
- सनातन क्या है: sample chapter written, waiting for his tone OK before the other chapters are rewritten.
- Profile: feedback contact (WhatsApp number or email) and privacy policy not written.

**Still to make**
- Pictures: Durga and Khatu Shyam weekday sets; 7 Shivling pictures (prompts in `antigravity-images/shivling/gemini-prompts.md`); photos for Shani, Santoshi, Saraswati and the 8 aarti deities that show a diya; better temple photos (Sabarimala, Danteshwari, Bamleshwari, Jyotisar and others listed in the report).
- Temples: 51 Shakti Peeth, 108 Divya Desam, deity groups still "जल्द"; no temple yet for Ladakh, Nagaland, Mizoram, Andaman, Lakshadweep, Dadra & Daman; Hindi needs a trusted reader; map check against Survey of India.
- Gita meanings for the other 16 chapters; Khatu Shyam Chalisa (only one source found).
- Festival videos: Ayush makes them in Qwen/MiniMax from our prompts (`/mnt/project-files/video-prompts/`; Karwa Chauth done, Dhanteras and Diwali next).

**Ideas parked until after launch**
- Punya unlocks inside दैनिक दर्शन (remind Ayush when finalising). Reminders/notifications. Rashifal card. Wallpaper save on festival pages. More meditation sounds and Om choices. Weekly Monday growth routine. Play Store listing (TWA). More languages.

**Known small bugs**
- Main JS bundle is large (1.7 MB) — code-split by tab.

## 9. Costs

On Cloudflare Pages + R2 the app costs about ₹0/month up to ~10k monthly users. Domain ₹500–1,200/year, Play Store US$25 once. Vercel Pro would be ~₹1,760/month, so move to Cloudflare before earning.

## 10. Folder map (Claude project files, `/mnt/project-files/`)

These live in Ayush's Claude project, not in GitHub. Ask Ayush for any file you need.

- `sanatan-plan/PLAN.md` — first plan and stack reasoning.
- `sanatan-app/` — older base copy of the source plus every release bundle: `*-update/` folders (aarti, bhajan, bharat-mandir, darshan, dhyan, dvar, fit, path-round, profile, sanctum, shivling, whatsapp, youtube, wallpaper…), `screenshots/` and mockup HTML, `deity-photos/` (Ayush's own photos IMG_0040–0100 and Canva portraits), `festival-art/` (festival and katha paintings), `sanctum/`, `offer-mockups/`. Now also `AGENTS.md` and `HANDOVER.md`.
- `antigravity-images/<deity>/` — weekday deity pictures: originals, `cut/` cut-outs, mockups, prompt packs.
- `logo/` — app icon rounds and the wordmark (`app-icon-rules.md`, `bright/`, `wordmark/`).
- `video-prompts/` — prompts for festival/katha videos.
- `tools/marketingskills/` — Corey Haines marketing skills (MIT).
- `ayush-learn/` — Ayush's design skills and notes.
- `uploads/` — files Ayush sent in chat.
