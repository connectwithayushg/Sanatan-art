# Sanatan App legal pages: points for a lawyer (draft, 30 Oct 2026)

These pages were drafted by Claude (an AI), not a lawyer. **This is not legal advice.** Before launch, an Indian lawyer who knows the DPDP Act and IT law should read the four pages (`src/content/legal.ts`) and the points below. Pages in the app: Profile › नियम और गोपनीयता › गोपनीयता नीति, उपयोग की शर्तें, सामग्री/स्रोत/अस्वीकरण, शिकायत और संपर्क, मेरा डेटा मिटाएँ. Each page shows a "draft, not yet checked by a lawyer" band until `LEGAL_INFO.draft` is set to false.

## What the drafts assume (true on 30 Oct 2026)
- No login, no account, no server or database of our own, no analytics, no ads, no payments.
- Everything a person enters (name for cards, city, darshan days, jap count, preferences, "मेरा परिवार" list with names and birthdays) stays in the phone browser's localStorage. "मेरा डेटा मिटाएँ" erases all of it.
- Hosting: Vercel (US company, free Hobby plan). Its servers see IP addresses in normal request logs.
- Third parties at run time: YouTube embeds (youtube-nocookie.com) and thumbnails (img.youtube.com), WhatsApp share links, links to official temple websites. Fonts are self-hosted.
- City is chosen by hand; no GPS. Reminders are shown inside the app only; there are no push notifications.

If any of this changes, the pages must change first.

## 1. Blanks to fill before launch (`LEGAL_INFO` in src/content/legal.ts)
1. Who runs the app: Ayush's full legal name as sole proprietor, or a registered firm (LLP / Pvt Ltd). Ask the lawyer which is wiser before money features.
2. A support email that someone reads (ideally on the app's own domain, which is not bought yet).
3. Grievance officer's name, and a postal address for notices.
4. City whose courts hear disputes.
5. Effective date (replace "draft").

## 2. Data protection (DPDP Act 2023 and DPDP Rules 2025)
1. Is Sanatan App a "data fiduciary" at all when personal data never leaves the phone? The drafts take the careful route and still give notice, rights and a grievance contact. Confirm the wording does not over- or under-promise.
2. Vercel request logs (IP addresses) are personal data handled on our behalf, outside India. Confirm a short mention is enough and whether Vercel's standard DPA needs accepting.
3. Rules commencement: most fiduciary duties apply about 18 months after the Rules were notified in Nov 2025. Confirm dates and whether the notice must follow the Rule 3 format now.
4. Children: the drafts say "under 18 use under a parent's supervision" and that nothing is collected. Confirm this is enough for a no-collection app, and what verifiable parental consent we need once login arrives.
5. The family list stores other people's names and birthdays (sometimes children's) on the user's phone. Is the "add with their knowledge" line adequate?
6. Is mentioning the Data Protection Board as an escalation route correct and appropriately worded?

## 3. Grievance handling
1. The drafts promise acknowledgement within 48 hours and resolution normally within 15 days. IT Rules 2021 (for intermediaries) use 24 hours / 15 days; the Consumer Protection (E-Commerce) Rules 2020 use 48 hours / 1 month. Is the app an intermediary? (It hosts no user content; greeting cards are made on the phone and sent by the user.) Pick the right timelines.
2. Do we need a separate grievance officer once UPI seva / online puja start (E-Commerce Rules)?

## 4. Terms of use
1. "As is" wording and limitation of liability: check enforceability under the Consumer Protection Act 2019 for a free service, and again once there are paid users.
2. Which language prevails if Hindi and English differ? Not stated yet. Suggest: English prevails for legal meaning, or state both are equal.
3. Governing law and jurisdiction clause; whether to add arbitration.
4. Health line on vrat/fasting: enough, or stronger?

## 5. Religious content
1. Hurting religious feelings is an offence (Bharatiya Nyaya Sanhita s. 299, formerly IPC 295A). The disclaimer and correction promise help but are not a shield. Advise on a review process for kathas, pictures and greeting card text.
2. Greeting cards: users type their own name/text. Is the "your responsibility" clause enough, or do we need a word filter?
3. Panchang/muhurat accuracy disclaimer: adequate? Any future rashifal must avoid predictive guarantees (ASCI code, Drugs and Magic Remedies Act if health claims ever creep in).

## 6. Copyright and licences
1. **Generated pictures** (Mandir scenes, deity forms, learn pictures) were made with Gemini, ChatGPT, Codex and similar tools. Copyright ownership of AI-made images in India is unsettled, and each tool's terms differ. Confirm we can use them commercially and that no picture copies an existing artist's or temple's work too closely. The drafts say they are "artistic depictions made with digital tools, not photos of any temple's murti": confirm that is accurate and enough.
2. YouTube embeds of aarti videos uploaded by labels or channels: embedding is allowed when the uploader enables it, but confirm, especially once the app earns money.
3. Unsplash licence (credited, no competing photo service), Wikimedia public-domain Ravi Varma paintings, DataMeet India map (CC BY 4.0, credit given): confirm credits are adequate. Map must follow Survey of India boundary rules.
4. Meanings, vidhi and chapters were written with AI help and checked against sources. Confirm ownership claim "written by Sanatan App".
5. Trademark search for "Sanatan App" / "सनातन ऐप" before spending on branding.

## 7. App stores
1. Google Play (if wrapped as a TWA): needs a public privacy policy URL and a Data safety form. With no collection the answer is "no data collected", but YouTube embeds and Vercel logs must be thought through. An account-deletion URL is needed only once accounts exist.
2. Apple App Store: privacy "nutrition label"; guideline 4.2 (thin web wrappers get rejected); 5.1.1(v) in-app account deletion once accounts exist.
3. The policy pages must also be reachable at a public web address (e.g. `/privacy`, `/terms`) for store listings. Today they live only inside the app at `#profile/legal/privacy` etc. A plain static page can be added when the domain is decided.

## 8. Before each planned feature (pages must change first)
- **Login / family circle / push notifications:** consent notice at sign-up, children's verifiable parental consent, data retention period, in-app and web account deletion, notification opt-in and opt-out, where the server is (India or abroad), breach-reporting duty to the Board and users.
- **UPI seva / donations:** who receives the money (a person, a trust, a company?), GST, whether 80G may be claimed (never imply it without a certificate), payment-gateway terms, refund policy, receipts. Vercel's free plan forbids commercial use: move hosting first.
- **Sanatan+ subscription:** auto-renewal rules (RBI e-mandate), clear cancellation, refund policy, price display with taxes.
- **Online puja / chadhava with temples:** written agreements with temples, E-Commerce Rules (seller details, grievance), no promises of results, proof of puja, misleading-ad rules (ASCI, CCPA dark-pattern guidelines 2023).
- **Ads:** consent for ad tracking, ad placement rules (never inside aarti/paath), children.
