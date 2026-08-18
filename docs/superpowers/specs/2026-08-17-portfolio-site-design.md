# Portfolio Site — Design Spec

**Date:** 2026-08-17
**Owner:** Chermaine Zimmerman
**Goal:** A personal portfolio site to support job applications for mid/senior frontend roles. The repo itself doubles as a public work sample.

## Summary

Single-page portfolio for Chermaine Zimmerman, Senior Frontend Engineer / Tech Lead (11 years; Angular primary, React secondary). Built with Next.js (App Router) + TypeScript + Tailwind CSS 4, deployed on Vercel, source in public GitHub repo `c14jcdj/personal-website`. Visual design follows the user-approved mockup: warm editorial-professional aesthetic.

## Visual design (from approved mockup)

- **Palette:** warm cream/ivory page background (`~#faf6f0`), deep navy-ink text (`~#1c2333`), burgundy/maroon accent (`~#8b1e3f`) for links, CTAs, and active-nav underline; white cards with soft shadows and rounded corners.
- **Typography:** serif display face for headlines and the letterspaced name in the nav (e.g. Playfair Display or Source Serif via `next/font`); clean sans (e.g. Inter) for body and UI.
- **Imagery:** provided professional headshot in the hero, right-aligned, softly blended into the background. Source: user-supplied photo (copied to `public/headshot.png`).
- **Feel:** generous whitespace, mobile-first responsive; hero photo stacks above/behind text gracefully on small screens.

## Page structure (single page, anchor nav)

1. **Nav** — "CHERMAINE ZIMMERMAN" wordmark; links: Work, About, Leadership, Contact. Burgundy underline indicates active section; sticky at top.
2. **Hero** — eyebrow `SENIOR FRONTEND ENGINEER | TECH LEAD`; serif headline "Building thoughtful, scalable web experiences"; supporting sentence; skill chips (React, Angular, AWS, Team Leadership) as icon pills; "↓ Explore my work" scroll link; headshot right.
3. **Selected Work (`#work`)** — three cards (image, title, stack tag pills, one-line description, "View project →"). Content is REAL work, not the mockup's invented projects:
   - **Creator gifting platform** (Collective Voice) — Angular · TypeScript. Retailer gifting enabling creator-brand partnerships.
   - **Design system & Storybook library** (Collective Voice) — Storybook · Angular. Component library + docs site scaled org-wide.
   - **Shop The Theme** (personal, live link) — Next.js · React · Tailwind. Party-kit builder with Amazon affiliate integration.
   - Card art: tasteful abstract gradient/screenshot placeholders the user can swap later. No fabricated metrics or fake screenshots presented as real products.
4. **About + Experience (`#about`)** — short bio (from resume profile summary) and work-history timeline: Rakuten Advertising (2026–present, Senior SWE) → Collective Voice (2017–2026, Frontend Dev → Senior Frontend Dev → Lead FE Dev, shown as one company with role progression) → POPSUGAR (2015–2017) → Viggle (2014–2015). Each entry: role, company, dates, 2–3 highlight bullets from the resume. "Download resume" button → `public/resume.pdf`.
5. **Leadership (`#leadership`)** — brief section: mentorship, AngularJS→Angular migration leadership, design-system adoption, cross-functional ownership.
6. **Stats bar** — "11+ years building for the web" · "7+ years leading frontend teams" · "100% commitment to quality & accessibility" (icons per mockup).
7. **Contact / footer (`#contact`)** — email (chermainezimmerman@gmail.com), LinkedIn (linkedin.com/in/chermainez), GitHub (github.com/c14jcdj). **Phone number intentionally omitted** from the public site.

## Architecture

- **Framework:** Next.js latest (App Router), TypeScript strict, Tailwind CSS 4. Static rendering (no server data), single route `/`.
- **Content model:** all copy/data in `src/data/content.ts` with exported types (`Profile`, `ExperienceEntry`, `Project`, `Stat`). Skills appear as hero chips and per-project/per-role tags (per mockup) rather than a standalone section. Components render exclusively from this file — updating the site later means editing one data file.
- **Components:** `Nav`, `Hero`, `SelectedWork`, `ExperienceTimeline` (within About), `Leadership`, `StatsBar`, `Contact` — one focused component per section under `src/components/`.
- **Assets:** `public/headshot.png` (user-provided photo), `public/resume.pdf` (user's resume).
- **SEO:** metadata + Open Graph tags, semantic landmarks, single `h1`, descriptive alt text, accessible color contrast.

## Testing & verification

Lightweight, appropriate to a static site: TypeScript strict + ESLint; Vitest smoke tests asserting each section renders from `content.ts` data (name, employers, project titles appear); `npm run build` passes as the release gate.

## Repo & deployment

- Public GitHub repo **`c14jcdj/personal-website`** (created via `gh`), default branch `main`.
- **Vercel** hosting: user performs one-time Vercel↔GitHub connect in browser; thereafter every push to `main` auto-deploys. Custom domain out of scope for now.

## Out of scope (YAGNI)

Blog/MDX, CMS, contact form (mailto link only), analytics, dark mode, multi-page routing, i18n.
