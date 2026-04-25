# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on localhost:3000 (Turbopack)
npm run build    # production build + static generation
npm run start    # serve the production build
```

No lint or test scripts are configured.

## Architecture

This is a **Next.js 15 App Router** portfolio site deployed on Vercel at `worksofkuldeep.vercel.app`. The repo is at `github.com/Kuldeepkdg/worksofkuldeep`.

Legacy Flask files (`app.py`, `templates/`, `static/`) coexist in the working directory but are gitignored and unrelated to the Next.js app.

### Data layer

All content is statically defined — no CMS, no database.

- **[lib/projects.ts](lib/projects.ts)** — single source of truth for all 10 projects. Exports `Project[]` with `getFeaturedProjects()`, `getProjectBySlug(slug)`, `getAllSlugs()`. The `caseStudy` field (optional) drives the full case study page; projects without it show "coming soon". `featured: true` surfaces a project on the home page.
- **[lib/stack.ts](lib/stack.ts)** — 7 `StackCategory` objects with items and `context` strings used as tooltips in the stack visualization.

To add or edit a project, edit `lib/projects.ts` only — slug, title, case study, metrics, tech chips all flow from there.

### Pages and routing

All `page.tsx` files are **Server Components** unless marked `'use client'`. Interactive leaves are extracted into separate client components.

- `/work/[slug]` — statically generated via `generateStaticParams()` from `getAllSlugs()`. Add a slug to `projects` array and the route auto-generates.
- `/stack` — renders `<StackGrid />` (client component, accordion on mobile)
- `/contact` — renders `<ContactForm />` which POSTs to `/api/contact` (currently logs to console; Resend not wired up)

### Client components

| Component | Hook(s) used | Purpose |
|---|---|---|
| `MetricCard` | `useReveal`, `useCountUp` | Animated metric stat |
| `ProjectRow` | `useReveal` | Staggered project list row |
| `Nav` | — | Sticky header, mobile hamburger |
| `ContactForm` | — | Controlled form with fetch |
| `StackGrid` | — | Tech stack with hover tooltips |
| `TypingAnimation` | — | Cycling role titles in hero |

Unused components still in repo: `MindMap.tsx`, `MagneticLink.tsx`, `ProjectEntry.tsx`, `PullQuote.tsx`.

### Custom hooks

- **`useReveal`** — `IntersectionObserver` (threshold 0.15, rootMargin `-40px` bottom). Returns `[ref, visible]`. Disconnects after first intersection. Respects `prefers-reduced-motion`.
- **`useCountUp(target, visible, duration)`** — `requestAnimationFrame` with cubic ease-out. Strips non-digits from the target string so `~90%` and `98%` both work.
- **`useMagnetic(strength)`** — direct DOM `mousemove` handler that translates the element toward the cursor. Currently unused after hero revert.

### Styling

Tailwind v4 CSS-first — all config lives in `@theme {}` inside [app/globals.css](app/globals.css). There is no `tailwind.config.ts`.

Key tokens:
- `--color-bg: #FAF7F2` / `--color-text: #1A1613` / `--color-accent: #B8543D` (terracotta)
- `--font-serif: var(--font-fraunces)` / `--font-mono: var(--font-jetbrains-mono)`

Named utility classes defined in globals.css: `.band-base`, `.band-surface`, `.prose-warm`, `.tech-chip`, `.btn-accent`, `.arrow-link`, `.photo-ring`, `.metric-card`, `.warm-rule`, `.sidenote`, `.drop-cap`, `.watermark`, `.dot-grid`.

Fonts loaded in [app/layout.tsx](app/layout.tsx) via `next/font/google` as CSS variables. Caveat (`--font-caveat`) is loaded but currently unused.

### Images

Images live in `public/images/`. **Vercel runs on Linux (case-sensitive filesystem)** — always match the `src` path case exactly to the actual filename. Current photo: `kuldeep.JPG` (uppercase extension).
