# TODO — Invention Brief AI

## Branding & Domain

- [ ] Polish domain and branding (name check, logo, consider custom domain later)

## Content

- [ ] Add official source citations to the Japan guide
      (JPO, INPIT/J-PlatPat, Japan Patent Attorneys Association — currently
      marked as `TODO` placeholders on `/guides/japan` and `/ja/guides/japan`)
- [ ] Review all legal wording with qualified professionals
      (disclaimer pages, footer text, Japan guide, "does not do" sections)
- [ ] Resolve the on-page expert-review placeholders once review is done
      (`TODO: Expert review needed before relying on this page for
      user-facing legal-adjacent guidance.` — shown in the notice banner on
      `/guides/japan` and `/ja/guides/japan`)
- [ ] English/Japanese content review by native speakers for tone and accuracy
- [ ] Expand country guides (United States, Europe — currently "coming soon")
- [x] Draft the Japan self-filing (本人出願) decision-and-preparation guide
      (`/guides/japan-self-filing`, `/ja/guides/japan-self-filing`) — neutral
      education only, no drafting instructions; needs the same expert review
      and official citations as the main Japan guide
- [ ] Future bridge content: "bringing a self-filed application to a
      professional mid-course" (office-action stage) — highest-intent
      moment, unique content; requires careful expert review

## Product (Later Versions)

- [ ] Add a non-sensitive waitlist (email only; founder selects the hosted
      form provider; publish privacy policy first)
- [ ] Design the invention brief questionnaire
      (guided questions → structured brief; keep clear of claim drafting;
      candidate architecture: client-side only, no data leaves the browser —
      founder decision pending; see `/demo` for the planned flow)
- [x] Decide hreflang/alternate metadata strategy for EN/JA SEO
      (implemented: per-page alternates + localized sitemap via
      `src/lib/site.ts`; update `siteUrl` there when the domain changes)
- [ ] Create OG/social-card images once visual identity (logo) exists

## Privacy & Trust Architecture

(From the privacy-and-mirror-mode strategy update, 2026-06.)

- [ ] Design Local Draft Mode: browser/local-only editing, no server storage,
      no account required, export-only workflow
- [ ] Design the user-controlled export flow (Markdown/PDF; nothing shared
      unless the user explicitly chooses to share)
- [ ] Draft the privacy architecture separating (1) confidential invention
      content, (2) non-confidential user-selected metadata, and
      (3) aggregated anonymized statistics — see the "standing principles"
      now published on `/privacy` and `/ja/privacy`
- [x] Add homepage copy explaining AI as a structured thinking partner
      (EN) / 壁打ち相手 (JA), with planned modes clearly labeled
- [ ] Define future professional-side sponsored discovery using only
      non-confidential, user-selected criteria — never confidential invention
      content; clearly label all sponsored placements; check Japan-specific
      rules on referral arrangements with qualified professionals
- [ ] If AI Assist is added later: off by default for confidential content,
      with a clear warning before anything is sent to an AI provider
- [ ] Prepare an expert/legal review checklist before any real user data
      collection begins

## Out of Scope Until Explicitly Planned

- Backend, database, payment, login, analytics, invention intake
- Anything that collects confidential invention details
  (requires privacy + confidentiality framework first)
