# Design system: Paper and Ember

The visual language for Niket Chawla's portfolio. It's minimal, typographic, and quiet: warm neutrals, one ember accent, hairline rules, and no decoration. Hierarchy comes from type size, weight, and space, not from boxes, shadows or gradients.

Source of truth in code: [app/globals.css](app/globals.css) (tokens, type, components, motion), [tailwind.config.js](tailwind.config.js) (breakpoints and theme extensions), [app/layout.jsx](app/layout.jsx) (fonts, theme bootstrap).

## Principles

- **Typography first.** Size, weight and space carry the hierarchy.
- **Hairlines, not boxes.** Sections and rows are separated by 1px rules. Cards and shadows are avoided.
- **One accent.** Ember is used sparingly, about 1% of the screen: links, focus rings, the current item.
- **Warm neutrals only.** Every grey is tinted with the same paper hue.
- **No gradients, no shadows.** Depth is not a design goal here.
- **Motion supports reading.** It's brief, optional, and never blocks content.

## Colour

Tokens are defined on `:root` in [app/globals.css](app/globals.css) and exposed to Tailwind as `bg`, `surface`, `line`, `line-strong`, `muted`, `fg`, `accent`, `danger` and `success`.

### Roles

| Role | Token | Light | Dark |
|---|---|---|---|
| Page background | `--bg` / `bg-bg` | `#FAF9F6` (paper-50) | `#0E0E0D` (paper-950) |
| Surface | `--surface` / `bg-surface` | `#F2F0EB` (paper-100) | `#1A1917` (paper-900) |
| Hairline border | `--border` / `border-line` | `#E4E1DA` (paper-200) | `#262623` (paper-800) |
| Strong rule (section dividers) | `--border-strong` / `border-line-strong` | `#B9B5AE` (paper-300) | `#474641` (paper-700) |
| Muted text | `--muted` / `text-muted` | `#6B6862` (paper-600) | `#8F8B84` (paper-400) |
| Text | `--fg` / `text-fg` | `#1A1917` (paper-900) | `#F2F0EB` (paper-100) |
| Accent | `--accent` / `text-accent` | `#C8431A` (ember-600) | `#FF7A4D` (ember-400) |
| Form control border | `--control` | `#8F8B84` (paper-400) | `#6B6862` (paper-600) |
| Danger | `--danger` | `#B3203A` | `#FA6773` |
| Success | `--success` | `#287C42` | `#5BBD74` |

Form control borders meet the 3:1 non-text contrast requirement (WCAG 1.4.11). Section dividers use `--border-strong` so they read as structure, while row hairlines stay subtle.

### Palette scales

Paper (neutral) runs 50 to 950: `#FAF9F6`, `#F2F0EB`, `#E4E1DA`, `#B9B5AE`, `#8F8B84`, `#7D7973`, `#6B6862`, `#474641`, `#262623`, `#1A1917`, `#0E0E0D`. Ember (accent) has 400 `#FF7A4D` and 600 `#C8431A`. Status colours are used for form feedback only.

Ink blue was reserved and is not used.

## Theme

- Light is the default.
- Dark follows the OS (`prefers-color-scheme`) unless the visitor picks a theme.
- The toggle sets `data-theme` on `<html>` and saves it to `localStorage` under `theme`. A bootstrap script applies it before first paint, so there's no flash.
- The toggle label names the theme it switches to. The switch itself is a circular view-transition reveal.
- Both themes set `color-scheme`, so native controls match.

## Typography

- **Display and body:** Geist (`--font-sans`).
- **Labels and dates:** Geist Mono (`--font-mono`), used for labels and tabular figures.
- **Weights:** 400, 500 and 600 only.
- **Body measure:** 65ch maximum (`.measure`).
- Headings use `text-wrap: balance`. Body uses `text-wrap: pretty` to avoid orphans.

### Type scale

| Class | Size | Line height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `.t-display` | `clamp(2.75rem, 7vw, 4.5rem)` | 1.04 | 600 | -0.035em | Hero |
| `.t-h1` | `clamp(2rem, 4.5vw, 3rem)` | 1.1 | 600 | -0.025em | Page title |
| `.t-h2` | `clamp(1.5rem, 3vw, 2rem)` | 1.2 | 600 | -0.025em | Section title |
| `.t-h3` | 1.25rem | 1.3 | 500 | -0.01em | Item title |
| `.t-lead` | 1.25rem | 1.55 | 400 | -0.005em | Intro paragraph |
| `.t-body` | 1rem | 1.65 | 400 | normal | Body |
| `.t-small` | 0.875rem | 1.5 | 400 | normal | Secondary text |
| `.t-label` | 0.75rem, mono | 1.4 | 500 | 0.08em, uppercase | Labels |

Numbers and dates use `tabular-nums` so columns align.

## Layout

- **Container:** `.wrap` is up to 1080px wide, centred, with a 24px gutter that respects safe-area insets.
- **Sections:** `.section` uses vertical padding of `clamp(48px, 7vw, 88px)`.
- **Two-column blocks:** the section heading sits in a 240px column beside the content from `md` up; below that it stacks. The resume page uses this (`Block` in [app/resume/page.jsx](app/resume/page.jsx)).
- **Breakpoints** (from [tailwind.config.js](tailwind.config.js)): sm 640px, md 768px, lg 960px, xl 1200px.
- **Viewport height:** use `min-height: 100dvh`, not `100vh`.
- **Spacing:** generous. Lists use `divide-y` with `py-4` to `py-7` rows.

## Components

### Buttons

- `.btn` is the base: 44px minimum height, 20px horizontal padding, 6px radius, 15px medium weight, 200ms transitions, and a `scale(0.98)` press.
- `.btn-primary`: filled with `--fg` and text in `--bg`. Hover mixes toward `--bg`. One per view.
- `.btn-ghost`: transparent with a `--border` outline. Hover darkens the outline to `--fg`.
- Icons come from [components/Icon.jsx](components/Icon.jsx).

### Links

- `.link`: accent colour, 1px underline offset 4px, thickens on hover.
- `.link-quiet`: text colour, underline appears on hover.
- External links open in a new tab and say so with visually hidden text.

### Form fields

- `.field` stacks label, control and hint with 8px gaps.
- `.input`: 44px minimum height, `--bg` background, `--control` border, 6px radius. Hover moves the border to `--fg`. Focus uses the accent outline and border.
- `aria-invalid="true"` switches the border to `--danger`. Errors use `.error-text`.
- Select controls use a custom chevron and remove the native appearance.

### Rules and rows

- `.section-rule` draws a strong top rule on a section.
- `.rows` draws hairlines between child rows.
- Rules are pseudo-elements scaled by `--rule`, so the motion script can draw them in.

### Dialog

- Built on the native `<dialog>` (see [components/ResumePreview.jsx](components/ResumePreview.jsx)), so focus is trapped, Esc closes it and focus returns to the trigger. No library.
- Opened by a round "i" icon button (44px target, `aria-label` and tooltip).
- Same flat surface as the page: `--bg`, 1px `--border`, 8px radius, no shadow. The backdrop is a dimmed paper-950 tint.
- Content is mounted only while open, and the page scroll is locked while it is.
- Footer carries the primary action (Download PDF) and a quiet "Open in new tab" link.
- From `md` up the PDF shows in the browser's own viewer. Below `md` phones can't render a PDF in an iframe, so the pages are drawn with pdf.js ([components/PdfPages.jsx](components/PdfPages.jsx)), loaded only when the dialog opens. If that fails, the dialog says so and the two actions still work.

### Navigation

- The skip link (`.skip-link`) is first in the tab order and appears on focus.

## Accessibility

- Focus is always visible: a 2px accent outline with a 3px offset on `:focus-visible`.
- Touch targets are at least 44px.
- Text contrast meets WCAG AA. Control borders meet 3:1.
- `prefers-reduced-motion` disables smooth scrolling, skips the motion-pending state, and removes the entrance animations.

## Motion

Motion uses GSAP, with [components/motion/PageMotion.jsx](components/motion/PageMotion.jsx) and [components/motion/SmoothScroll.jsx](components/motion/SmoothScroll.jsx).

- **Entrance:** elements with `data-hero`, `data-intro` or `data-reveal` start hidden (`.motion-pending`) and animate in once GSAP runs.
- **Durations:** 0.4 to 1.1s. Most sit at 0.6 to 0.8s.
- **Easing:** `power3.inOut` for transitions and `back.out(1.6)` for emphasis. `none` for linear progress.
- **Stagger:** 0.014s for dense lists, 0.06 to 0.08s for sections.
- **Fallback:** if scripts fail, `.motion-pending` is removed after 2.5s so content still appears.
- **Reduced motion:** no entrance animation. Content is visible from the first paint.

## Adding to the system

1. Use tokens (`bg-bg`, `text-muted`, `border-line`), never raw hex in components.
2. Reuse `.btn`, `.link`, `.input` and the type classes before creating new ones.
3. Keep one primary action per view.
4. Check both themes and the phone width before shipping.
