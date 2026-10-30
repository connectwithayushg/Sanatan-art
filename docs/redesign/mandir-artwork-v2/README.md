# Mandir artwork v2 (Codex handoff of 31 Oct 2026)
- 12 permanent shrine settings, plus seven weekday scenes each for Shiv ji (baghambar v2) and Hanuman ji (plain-dhoti v2). The other ten forms have one static scene; their weekday variants have not been made.
- Scenes are cut from the handoff's full-screen sources with `build-scenes.py` (crop y=276, 853x1056; baked bells, flames and the lower ledge are replaced by the empty shrine plate `mandir-offerings-v2/empty.webp`). Usage: `python3 build-scenes.py OUT name1,name2 SOURCE_DIR`.
- Files: `public/art/redesign/mandir-scenes/<id>.webp` and `shiv-0..6.webp`, `hanuman-0..6.webp` (0 = Sunday, India day clock). `Deity.shrineScene.week` holds the seven; `MandirView` picks `week[weekday]` else `base`.
- Shiv/Hanuman `<id>.webp` fallback = the Sunday scene. Picker portraits already equal the handoff's (unchanged). No storage keys changed.
