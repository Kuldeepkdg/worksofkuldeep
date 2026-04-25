# Kuldeep Garg — Portfolio

Next.js 15 portfolio site. Warm editorial aesthetic, no dark mode, no component library defaults.

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Building

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push to a GitHub repo
2. Import the repo in [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no config needed
4. Add environment variables (see below) before first production deploy

## Environment variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `RESEND_API_KEY` | Email delivery for contact form | When ready to go live |

## Where to update placeholders

See `CONTENT_TODO.md` for the complete list. The most important ones:

- **Social links** — `components/Footer.tsx`, all `href="#"` values
- **Resume PDF** — replace `public/resume.pdf` with your actual file
- **Education** — `app/resume/page.tsx` near the bottom, marked with `[PLACEHOLDER]`
- **Employment dates** — `app/resume/page.tsx`, marked with `// TODO`
- **Site URL** — `app/layout.tsx` `metadataBase` and `app/page.tsx` `schemaOrg`

## Customizing content

- All project data lives in `lib/projects.ts` — add, edit, or remove projects here
- Tech stack data lives in `lib/stack.ts` — update the mind map by editing this file
- Colors and fonts are CSS variables in `app/globals.css` under `@theme {}`

## Project structure

```
app/                  Next.js App Router pages
  layout.tsx          Root layout (fonts, Nav, Footer)
  page.tsx            Home
  about/page.tsx
  work/page.tsx       Project index
  work/[slug]/        Individual case studies
  stack/page.tsx      Mind map
  resume/page.tsx
  writing/page.tsx
  contact/page.tsx
  api/contact/route.ts  Form handler
components/           Shared components
lib/
  projects.ts         All project data
  stack.ts            Tech stack mind map data
public/
  resume.pdf          Replace with your CV
```
