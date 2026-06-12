# Invention Brief AI

A static prototype landing site for **Invention Brief AI** — a
consultation-preparation tool that helps inventors organize their ideas
before speaking with a qualified patent professional.

## Legal-Safe Positioning

This project deliberately positions itself as **preparation, not legal
services**. The site does not — and must not — say or imply that it:

- provides legal advice
- determines patentability or offers patentability opinions
- drafts patent claims or official patent application documents
- files patents or represents users before any patent office
- replaces patent attorneys, patent agents, or other qualified professionals

All copy (English and Japanese) should preserve this framing. See `/disclaimer`
and `/ja/disclaimer` for the canonical wording.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4

> **Note**: Read the bundled docs in `node_modules/next/dist/docs/` before
> changing framework-facing code — this Next.js version may differ from what
> you expect (see `AGENTS.md`).

## Development

```bash
npm install
npm run dev    # local development at http://localhost:3000
npm run build  # production build (all routes prerender as static)
npx eslint src/  # lint
```

## Current Scope (v0.3)

Static pages only, in English and Japanese:

| English | Japanese |
| --- | --- |
| `/` | `/ja` |
| `/about` | `/ja/about` |
| `/checklist` | `/ja/checklist` |
| `/demo` | `/ja/demo` |
| `/disclaimer` | `/ja/disclaimer` |
| `/faq` | `/ja/faq` |
| `/guides/japan` | `/ja/guides/japan` |
| `/privacy` | `/ja/privacy` |

English routes live in `src/app/(en)/`, Japanese routes in `src/app/(ja)/ja/`
— two root layouts so each tree gets the correct `lang` attribute and fonts.

Also included: `sitemap.xml` and `robots.txt` (generated from
`src/app/sitemap.ts` / `robots.ts`), hreflang alternates on every page
(configured via `src/lib/site.ts` — update `siteUrl` there when a custom
domain is connected), printable checklist pages, downloadable brief
worksheets under `public/downloads/`, and a read-only demo of the planned
brief builder (`/demo` — canned example only, collects no input).

## Not Implemented Yet (Intentionally)

- Backend, database, or API routes
- Login / accounts
- Payment
- Real waitlist storage (the waitlist form is a non-functional preview)
- Real invention intake
- Analytics or tracking scripts
- Environment variables / `.env` files
- Attorney database or professional referrals

See `TODO.md` for the forward-looking list.
