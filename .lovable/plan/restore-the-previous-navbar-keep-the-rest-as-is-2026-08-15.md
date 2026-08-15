# Restore the previous navbar, keep the rest as-is

Everything else on the site — the new colours, serif headings, hero, cards, footer and page banners — stays exactly as it is now. Only the header/navigation goes back to the earlier Balfour-style behaviour.

## What changes

- The top bar becomes a simple row again: logo and wordmark on the left, a menu button on the right. The inline horizontal link row (Home / Our Story / Classes & Fees / ...) is removed, along with the desktop "Apply for a Place" pill in the bar.
- The menu button shows at every screen size (not just mobile).
- Pressing it opens a full-height panel sliding over the right side of the screen, with a dark overlay behind it and an X to close at the top of the panel.
- Inside the panel, links sit in two columns in uppercase, as before, plus the "Apply for a Place" call to action.
- The panel is painted in the current theme's accent blue with navy text — same shape as the earlier gold panel, but using the logo-based colours already in place.

Nothing about the rest of the pages, copy, images, fonts, or colour tokens changes.

## Technical detail

- Only `src/components/site-header.tsx` is edited.
- Links are split into two groups (`navPrimary`, `navSecondary`) for the two columns; the same route paths as now.
- Panel: `fixed inset-0 z-50` overlay (`bg-navy/50`, click to close) plus a right-aligned `bg-accent` panel (full height, `w-full max-w-md`), body links `font-display uppercase text-navy`.
- Escape key and clicking the overlay close the panel; page scroll is locked while it is open.
- Existing semantic tokens (`accent`, `navy`, `border`) are reused — no changes to `src/styles.css`.
