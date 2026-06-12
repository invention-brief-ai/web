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

## Out of Scope Until Explicitly Planned

- Backend, database, payment, login, analytics, invention intake
- Anything that collects confidential invention details
  (requires privacy + confidentiality framework first)
