# Mandir offerings — Ayush's four approved improvements

Ayush approved a centred diya, a matching top-left hanging bell, gradual lighting with the corner lamps, and photographic falling flowers matching the rich thali/floor artwork.

## Result

- The flower thali is now on the left; the diya is centred. The handheld bell has been removed from the lower ledge.
- Both hanging bells are native, labelled buttons. Each pivots from the chain on a tap and uses the existing bell sound and darshan action.
- Lighting starts with a short wick glow, then the photographic flame grows over 1.35 seconds. The two foreground standing lamps fade on after 0.7 and 1 second. The flame has a very small steady movement. Reloading an already-lit shrine does not replay ignition; repeated taps do not restart it.
- Orange, yellow and white photographic flower heads match the thali. The same six pieces fall, tilt towards the marble plane and settle near the deity's feet. Saved offerings restore without replaying the fall.
- Reduced motion skips the ignition, swings and flower fall and shows the final state. All four targets have at least 44 × 44 px tap areas, with readable Hindi/English labels.

## Artwork

The built-in image_gen tool supplied local marble repairs, the unlit standing lamps and separate transparent diya/thali/bell/flame layers. It also supplied the matching six-flower atlas. The initial marigold atlas was superseded by the daisy/gerbera revision to match the thali more closely.

Prompts and original tool outputs are recorded in artwork-edits.json and flower-revision.json. Production assets are saved in `/Users/falcon/Documents/ChatGPT/SanatanGpt/public/art/redesign/mandir-offerings-v2/`: seven weekday shrine bases, empty.webp, corner-left.webp, corner-right.webp, diya.webp, flower-thali.webp, hanging-bell.webp, flame.webp and flower-1.webp through flower-6.webp.

Only bounded repairs from the generated full-scene edits are used. No generated replacement Shiva pixels are used. Decoded lossless WebP pixels in the approved protected deity rectangle remain identical across all seven production scenes; pixel-verification.json records the source and edited rectangles. The approved primary scene, original deity cutouts, safe share-card photos and all devotional text remain intact.

## Review and verification

- Before: ../mandir-fidelity/final.png. After: lit.png / flowers-settled.png. interaction.gif records actual working-app frames, including lighting, flowers and both bells.
- Browser checks cover gradual ignition, delayed corner lamps, centred diya, both bells, flower fall/settle, cumulative darshan counting once after a gap, saved state, original Shivling/Khatu pictures, 320/390 px enlarged Hindi/English, reduced motion and no app exceptions.
- TypeScript, existing tests and production build are run for each affected review stage. Offline production checks cover the new art and offering actions after installation.
- No existing storage key, prayer, festival/temple fact, hosting setting or deployment is changed. The complete offline installation is now approximately 50 MB; the existing main JavaScript bundle warning remains.

These changes belong to the Today/Mandir review stage, inherited by the daily-opener and sharing stages. GitHub authentication remains required to publish the review PRs; no release is authorised.
