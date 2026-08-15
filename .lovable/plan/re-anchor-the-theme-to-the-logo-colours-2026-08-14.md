# Re-anchor the theme to the logo colours

The logo uses only three colours: white, near-black ink for the lettering, and a bright blue quill that fades from a royal blue (#207BF8) into a lighter sky blue (#3BB9FC). The site currently runs on a slightly violet navy that was approximated by eye, so the header band and buttons read a touch purple next to the logo.

## What changes

- Deep brand blue (the dark bands: header, footer, page banners) becomes a darkened version of the logo's royal blue instead of the violet-leaning navy.
- Accent blue (buttons, the short rules above headings, the open-menu panel, links on hover) becomes the logo's lighter quill blue.
- Body text switches to the logo's ink near-black-blue rather than a tinted navy.
- Soft tints (card backgrounds, section bands, borders) are re-derived from the same blue hue so everything stays in one family.
- White stays the dominant background, matching the logo's clean white field.

No layout, copy, or component structure changes — only colour values.

## Technical detail

All edits land in `src/styles.css` only; components already use the semantic tokens (`band-navy`, `accent`, `sky`, `sand`, `primary`), so they pick the new values up automatically.

Token updates in `:root`:

```text
--navy            deep logo blue      (approx oklch(0.30 0.14 258))
--navy-deep       darker band        (approx oklch(0.22 0.11 258))
--sky / --accent  logo quill blue    (approx oklch(0.72 0.15 245))
--sky-soft        pale wash of sky
--foreground      logo ink           (approx oklch(0.20 0.03 258))
--primary         = --navy
--border/--input  low-chroma blue-grey at hue 258
--ring            = --accent
--sand            near-white with a cool tint instead of warm
--shadow-panel    recoloured to the new navy
```

The comment at the top of `src/styles.css` gets updated to name the actual logo hex values so future changes stay anchored.
