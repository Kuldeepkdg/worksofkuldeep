# Content Placeholders

Everything in this file needs your input before the site goes live.

---

## Social links (high priority)

File: `components/Footer.tsx`

All five social links currently have `href="#"`. Replace with real URLs:

- LinkedIn
- GitHub
- Twitter/X
- Instagram
- YouTube

Same links appear in `app/page.tsx` inside the `schemaOrg` object (the `sameAs` array).

---

## Resume PDF

File: `public/resume.pdf` (doesn't exist yet — create the `public/` directory first)

Drop your PDF there. The resume page links to `/resume.pdf` with a download attribute.

---

## Education

File: `app/resume/page.tsx` (bottom of the file)

```
[Degree] — [Institution]
[Year]
```

Replace with your actual degree, institution name, and graduation year.

---

## Employment dates

File: `app/resume/page.tsx`

Two date ranges marked with `// TODO`:
- Taos Digital start date (shows as `2024 — Present`)
- DRYiCE date range (shows as `2022 — 2024`)

Adjust to match your actual dates.

---

## Job title at DRYiCE

File: `app/resume/page.tsx`

Marked as `{/* TODO: Confirm exact title */}`. Replace `Data Analyst` with your actual title at DRYiCE.

---

## Site URL / domain

Files: `app/layout.tsx` and `app/page.tsx`

Currently hardcoded to `https://kuldeepgarg.dev`. Update both to your actual domain when you have one:

- `app/layout.tsx` → `metadataBase: new URL('...')`
- `app/page.tsx` → `schemaOrg` object, the `url` fields

---

## Contact email

File: `app/contact/page.tsx`

Currently shows `kuldeep.g@taos.digital`. Update if you prefer a different public contact address, or remove the direct email line entirely.

---

## Resend API key (for contact form email delivery)

File: `app/api/contact/route.ts`

The contact form currently logs submissions to the console. To send real emails:

1. Create a Resend account at resend.com
2. Get your API key
3. Set `RESEND_API_KEY` in Vercel environment variables
4. Uncomment the Resend code in `app/api/contact/route.ts` and add the `from` and `to` addresses

---

## Project screenshots

Directory: `public/images/` (create this)

No images are currently used on the site — project entries are text-only. If you want screenshots on case study pages, add them to `public/images/` and reference them in `lib/projects.ts` (add an `image` field to the `Project` interface).

---

## About page photo

File: `app/about/page.tsx`

There's no photo on the about page yet. If you want one:
1. Add your photo to `public/images/kuldeep.jpg`
2. Add a `next/image` block in the sidebar section of `app/about/page.tsx`
3. Apply grayscale via CSS: `filter: grayscale(100%) sepia(0.2)`

---

## Case studies for remaining projects

File: `lib/projects.ts`

The following projects don't have `caseStudy` sections yet. Add them if you want full case study pages:
- Vertex Energy IT Portfolio Dashboard
- ASK DIA
- Heart Disease Prediction
- Bulldozer Price Prediction
- YouTube AWS Project
- Machine Learning Algorithms
- MyXalytics

Projects without a `caseStudy` object show "Case study coming soon." on their detail page.

---

## Writing section

File: `app/writing/page.tsx`

Currently shows an empty state. When you're ready to publish, add a `lib/posts.ts` data file and update the page to list posts.
