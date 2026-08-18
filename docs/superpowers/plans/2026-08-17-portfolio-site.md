# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy Chermaine Zimmerman's single-page portfolio site (cream/serif/burgundy editorial design) per the approved spec, in a public GitHub repo with Vercel auto-deploy.

**Architecture:** Next.js App Router, single static route `/`. All copy/data lives in one typed file `src/data/content.ts`; each page section is one focused component rendering exclusively from that data. Vitest + Testing Library smoke tests per section.

**Tech Stack:** Next.js (latest, App Router), TypeScript strict, Tailwind CSS 4, next/font (Playfair Display + Inter), Vitest + @testing-library/react + jsdom, gh CLI, Vercel.

## Global Constraints

- Node 22 (`nvm use 22`).
- Spec: `docs/superpowers/specs/2026-08-17-portfolio-site-design.md` — re-read before starting.
- **This may not be the Next.js you know**: after scaffolding, read relevant guides in `node_modules/next/dist/docs/` before writing app code; heed deprecation notices.
- Phone number must NEVER appear anywhere on the site or in `content.ts`.
- All user-visible copy comes from `src/data/content.ts` — no strings hardcoded in components except icons/aria-labels.
- Real work only: project cards are the gifting platform, the Storybook design system, and Shop The Theme. No invented metrics or fake products.
- Palette tokens: cream `#FAF6F0`, ink `#1C2333`, burgundy `#8B1E3F`, muted `#5C6072`, border sand `#E9E2D8`, card white `#FFFFFF`.
- Type: Playfair Display for display/serif, Inter for body — both via `next/font/google`.
- Every task ends with lint + tests green before commit.

---

### Task 1: Scaffold Next.js app, merge into existing repo, add assets

**Files:**
- Create: Next.js scaffold (`package.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, etc.)
- Create: `public/headshot.png` (copy of `/Users/chermainezimmerman/.claude/image-cache/c499a2ac-8d9c-48f2-a529-f17e730e3568/3.png`)
- Create: `public/resume.pdf` (copy of `/Users/chermainezimmerman/Downloads/resume.pdf`)

**Interfaces:**
- Produces: runnable Next.js app with Tailwind 4; `npm run dev`, `npm run build`, `npm run lint` all work.

- [ ] **Step 1: Scaffold in scratch dir (create-next-app refuses non-empty dirs), then merge**

```bash
cd "$(mktemp -d)" && npx --yes create-next-app@latest portfolio \
  --typescript --eslint --tailwind --app --src-dir --no-import-alias --use-npm --disable-git --yes
# Merge scaffold into the repo without clobbering .git, docs/, .superpowers/
rsync -a --exclude .git portfolio/ /Users/chermainezimmerman/Code/personal-website/
```

Then append the scaffold's `.gitignore` entries to the repo's existing `.gitignore` (dedupe; keep `.superpowers/`).

- [ ] **Step 2: Copy assets**

```bash
cp "/Users/chermainezimmerman/.claude/image-cache/c499a2ac-8d9c-48f2-a529-f17e730e3568/3.png" \
   /Users/chermainezimmerman/Code/personal-website/public/headshot.png
cp /Users/chermainezimmerman/Downloads/resume.pdf /Users/chermainezimmerman/Code/personal-website/public/resume.pdf
```

- [ ] **Step 3: Read the local Next.js docs** — skim `node_modules/next/dist/docs/` guides for: App Router layout/metadata API, `next/font`, `next/image`. Note any deviations from prior knowledge before writing code.

- [ ] **Step 4: Verify scaffold works**

Run: `cd /Users/chermainezimmerman/Code/personal-website && npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js app with Tailwind, add headshot and resume assets"
```

---

### Task 2: Test tooling (Vitest + Testing Library)

**Files:**
- Create: `vitest.config.ts`, `src/test/setup.ts`
- Modify: `package.json` (add `test`/`test:run` scripts)

**Interfaces:**
- Produces: `npm run test:run` executes `src/**/*.test.tsx?` in jsdom with jest-dom matchers.

- [ ] **Step 1: Install**

```bash
npm i -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

- [ ] **Step 2: Configure**

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom', setupFiles: ['./src/test/setup.ts'] },
})
```

```ts
// src/test/setup.ts
import '@testing-library/jest-dom/vitest'
```

Add to `package.json` scripts: `"test": "vitest"`, `"test:run": "vitest run"`.

- [ ] **Step 3: Write a trivial canary test, run it, then delete it** — `src/test/canary.test.tsx` rendering `<p>ok</p>` and asserting text; `npm run test:run` passes; delete file.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: add Vitest + Testing Library setup"
```

---

### Task 3: Content model and real content

**Files:**
- Create: `src/data/content.ts`
- Test: `src/data/content.test.ts`

**Interfaces:**
- Produces (consumed by every section component):

```ts
export type Profile = {
  name: string; eyebrow: string; headline: string; tagline: string;
  chips: string[]; location: string; email: string;
  linkedin: string; github: string; resumeHref: string; headshot: string;
}
export type Project = { title: string; context: string; tags: string[]; description: string; href?: string }
export type ExperienceEntry = { company: string; roles: { title: string; period: string }[]; highlights: string[] }
export type Stat = { value: string; label: string; icon: 'code' | 'people' | 'shield' }
export const profile: Profile
export const projects: Project[]        // exactly 3
export const experience: ExperienceEntry[]  // Rakuten, Collective Voice, POPSUGAR, Viggle
export const leadership: { heading: string; body: string; points: string[] }
export const stats: Stat[]              // exactly 3
export const about: { heading: string; bio: string }
```

- [ ] **Step 1: Write failing test**

```ts
// src/data/content.test.ts
import { describe, it, expect } from 'vitest'
import { profile, projects, experience, stats } from './content'

describe('content', () => {
  it('has core profile data and no phone number anywhere', () => {
    expect(profile.name).toBe('Chermaine Zimmerman')
    expect(JSON.stringify({ profile, projects, experience })).not.toMatch(/530.?400.?3329|\(\d{3}\)\s?\d{3}/)
  })
  it('has exactly 3 real projects and 3 stats', () => {
    expect(projects).toHaveLength(3)
    expect(projects.map(p => p.title)).toContain('Shop The Theme')
    expect(stats).toHaveLength(3)
  })
  it('covers all four employers in order', () => {
    expect(experience.map(e => e.company)).toEqual(['Rakuten Advertising', 'Collective Voice', 'POPSUGAR', 'Viggle Inc.'])
  })
})
```

- [ ] **Step 2: Run to verify fail** — `npm run test:run` → FAIL (module not found).

- [ ] **Step 3: Implement `content.ts`** with the types above and real data from the resume:
  - profile: eyebrow `SENIOR FRONTEND ENGINEER | TECH LEAD`; headline `Building thoughtful, scalable web experiences`; tagline `I design and build modern web applications that solve complex problems and help teams move faster.`; chips `['React', 'Angular', 'AWS', 'Team Leadership']`; location `San Francisco Bay Area`; email `chermainezimmerman@gmail.com`; linkedin `https://linkedin.com/in/chermainez`; github `https://github.com/c14jcdj`; resumeHref `/resume.pdf`; headshot `/headshot.png`.
  - projects: **Creator Gifting Platform** (Collective Voice · Angular, TypeScript — retailer gifting enabling creator-brand partnership workflows); **Design System & Storybook Library** (Collective Voice · Storybook, Angular — interactive component library and docs site adopted org-wide); **Shop The Theme** (Personal project · Next.js, React, Tailwind — party-kit builder with curated Amazon bundles, href `https://shopthetheme.com`).
  - experience: entries with role progressions and 2–3 resume highlights each (Collective Voice as one entry with three roles 2017–2026).
  - leadership: mentorship, AngularJS→Angular migration (~20-30% load-time win), design-system adoption, cross-team ownership.
  - stats: `11+ / Years building for the web` (icon code), `7+ / Years leading frontend teams` (icon people), `100% / Commitment to quality & accessibility` (icon shield).
  - about: 2–3 sentence bio distilled from the resume profile summary.

- [ ] **Step 4: Run tests** — `npm run test:run` → PASS.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: typed content model with resume data"`

---

### Task 4: Design tokens, fonts, base layout

**Files:**
- Modify: `src/app/globals.css`, `src/app/layout.tsx`

**Interfaces:**
- Produces: Tailwind theme tokens `bg-cream`, `text-ink`, `text-burgundy`, `bg-burgundy`, `text-muted`, `border-sand`, `font-display`, `font-sans`; layout exports `metadata`; CSS vars `--font-display`/`--font-sans` wired to next/font.

- [ ] **Step 1: globals.css** — Tailwind 4 `@theme` block:

```css
@import "tailwindcss";

@theme {
  --color-cream: #FAF6F0;
  --color-ink: #1C2333;
  --color-burgundy: #8B1E3F;
  --color-muted: #5C6072;
  --color-sand: #E9E2D8;
  --font-display: var(--next-font-display);
  --font-sans: var(--next-font-sans);
}

html { scroll-behavior: smooth; }
body { background: var(--color-cream); color: var(--color-ink); }
```

(Adjust variable wiring to match how the current Next.js docs say `next/font` exposes CSS variables — verify in `node_modules/next/dist/docs/`.)

- [ ] **Step 2: layout.tsx** — load fonts and metadata:

```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const display = Playfair_Display({ subsets: ['latin'], variable: '--next-font-display' })
const sans = Inter({ subsets: ['latin'], variable: '--next-font-sans' })

export const metadata: Metadata = {
  title: 'Chermaine Zimmerman — Senior Frontend Engineer',
  description: 'Senior frontend engineer and tech lead with 11 years of experience building thoughtful, scalable web experiences with Angular and React.',
  openGraph: {
    title: 'Chermaine Zimmerman — Senior Frontend Engineer',
    description: 'Building thoughtful, scalable web experiences.',
    images: ['/headshot.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Verify** — `npm run build` passes; dev server shows cream background.

- [ ] **Step 4: Commit** — `git commit -am "feat: design tokens, fonts, and base layout"`

---

### Task 5: Nav component

**Files:**
- Create: `src/components/Nav.tsx`
- Test: `src/components/Nav.test.tsx`

**Interfaces:**
- Consumes: `profile.name` from `src/data/content`.
- Produces: `<Nav />` — sticky header, serif letterspaced wordmark, anchor links Work `#work`, About `#about`, Leadership `#leadership`, Contact `#contact`.

- [ ] **Step 1: Failing test**

```tsx
// src/components/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Nav from './Nav'

describe('Nav', () => {
  it('renders wordmark and section links', () => {
    render(<Nav />)
    expect(screen.getByText(/chermaine zimmerman/i)).toBeInTheDocument()
    for (const [label, href] of [['Work', '#work'], ['About', '#about'], ['Leadership', '#leadership'], ['Contact', '#contact']] as const) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href)
    }
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:**

```tsx
// src/components/Nav.tsx
import { profile } from '@/data/content' // or relative import if no alias

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-sand bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg tracking-[0.18em] uppercase">{profile.name}</a>
        <ul className="flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="pb-1 text-ink transition-colors hover:text-burgundy">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
```

(Note: scaffold ran with `--no-import-alias`; use relative imports `../data/content` if `@/` is unavailable.)

- [ ] **Step 4: Run → PASS.** **Step 5: Commit** — `git commit -am "feat: sticky nav with wordmark and anchors"`

---

### Task 6: Hero section

**Files:**
- Create: `src/components/Hero.tsx`
- Test: `src/components/Hero.test.tsx`

**Interfaces:**
- Consumes: `profile` from content.
- Produces: `<Hero />` — id `top`; eyebrow, serif headline, tagline, chip pills, "Explore my work" link to `#work`, headshot via `next/image` right-aligned, soft-blended.

- [ ] **Step 1: Failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders eyebrow, headline, chips, and headshot', () => {
    render(<Hero />)
    expect(screen.getByText(/senior frontend engineer/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /thoughtful, scalable web experiences/i })).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /chermaine zimmerman/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work')
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:** two-column grid (`md:grid-cols-2`), left column: `<p>` eyebrow (letterspaced small caps with burgundy divider `|`), `<h1 className="font-display text-5xl md:text-6xl leading-tight">`, tagline `text-muted text-lg`, chips as `rounded-full border border-sand bg-white px-4 py-1.5 text-sm shadow-sm`, explore link with `↓`. Right column: `<Image src={profile.headshot} alt={`Portrait of ${profile.name}`} width={640} height={640} priority className="rounded-b-none object-cover [mask-image:linear-gradient(to_bottom,black_82%,transparent)]" />`. Section: `id="top"`, `pt-16`, max-w-6xl centered.

- [ ] **Step 4: Run → PASS.** **Step 5: Commit** — `git commit -am "feat: hero with headline, chips, and headshot"`

---

### Task 7: Selected Work section

**Files:**
- Create: `src/components/SelectedWork.tsx`
- Test: `src/components/SelectedWork.test.tsx`

**Interfaces:**
- Consumes: `projects` from content.
- Produces: `<SelectedWork />` — section id `work`, serif `h2` "Selected Work", 3 cards (abstract gradient art block, title, tag pills, description, "View project →" only when `href` present).

- [ ] **Step 1: Failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SelectedWork from './SelectedWork'
import { projects } from '../data/content'

describe('SelectedWork', () => {
  it('renders a card per project', () => {
    render(<SelectedWork />)
    for (const p of projects) expect(screen.getByText(p.title)).toBeInTheDocument()
  })
  it('links out only for projects with an href', () => {
    render(<SelectedWork />)
    const links = screen.getAllByRole('link', { name: /view project/i })
    expect(links).toHaveLength(projects.filter(p => p.href).length)
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:** `grid gap-6 md:grid-cols-3`; card = `rounded-2xl bg-white border border-sand shadow-sm overflow-hidden`; art block = `h-36 bg-gradient-to-br` with a distinct duo per index (`from-[#1C2333] to-[#8B1E3F]`, `from-[#8B1E3F] to-[#E9A23B]`, `from-[#3BB2D0] to-[#1C2333]`) — decorative `aria-hidden` div, not fake screenshots; body: `h3 font-semibold`, context line `text-xs text-muted uppercase tracking-wide`, tag pills `rounded-full bg-cream border border-sand px-2.5 py-0.5 text-xs`, description `text-sm text-muted`, optional `<a className="text-burgundy font-medium text-sm">View project →</a>` (external: `target="_blank" rel="noopener noreferrer"`).

- [ ] **Step 4: Run → PASS.** **Step 5: Commit** — `git commit -am "feat: selected work cards"`

---

### Task 8: About + Experience timeline

**Files:**
- Create: `src/components/About.tsx`
- Test: `src/components/About.test.tsx`

**Interfaces:**
- Consumes: `about`, `experience`, `profile.resumeHref` from content.
- Produces: `<About />` — section id `about`; bio; vertical timeline of `experience` (company, roles+periods, highlight bullets); "Download resume" button → `/resume.pdf`.

- [ ] **Step 1: Failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'
import { experience } from '../data/content'

describe('About', () => {
  it('renders every employer and a resume download', () => {
    render(<About />)
    for (const e of experience) expect(screen.getByText(e.company)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/resume.pdf')
  })
  it('shows role progression at Collective Voice', () => {
    render(<About />)
    expect(screen.getByText(/lead front end developer/i)).toBeInTheDocument()
    expect(screen.getByText(/senior frontend developer/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:** serif `h2` "About"; bio paragraph `max-w-2xl text-muted`; timeline = `border-l-2 border-sand pl-6 space-y-10`, each entry with burgundy dot (`absolute -left-[7px] h-3 w-3 rounded-full bg-burgundy`), company `font-semibold`, roles listed `title — period` (`text-sm text-muted`), highlights `list-disc text-sm text-muted`. Resume button: `inline-block rounded-lg bg-burgundy px-5 py-2.5 text-white text-sm font-medium hover:opacity-90` with `download` attribute.

- [ ] **Step 4: Run → PASS.** **Step 5: Commit** — `git commit -am "feat: about section with experience timeline and resume download"`

---

### Task 9: Leadership + Stats bar

**Files:**
- Create: `src/components/Leadership.tsx`, `src/components/StatsBar.tsx`
- Test: `src/components/Leadership.test.tsx`, `src/components/StatsBar.test.tsx`

**Interfaces:**
- Consumes: `leadership`, `stats` from content.
- Produces: `<Leadership />` (section id `leadership`, heading + body + bullet points) and `<StatsBar />` (3 stats with inline SVG icons keyed by `stat.icon`).

- [ ] **Step 1: Failing tests**

```tsx
// Leadership.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Leadership from './Leadership'
import { leadership } from '../data/content'

describe('Leadership', () => {
  it('renders heading and all points', () => {
    render(<Leadership />)
    expect(screen.getByRole('heading', { name: leadership.heading })).toBeInTheDocument()
    for (const p of leadership.points) expect(screen.getByText(p)).toBeInTheDocument()
  })
})
```

```tsx
// StatsBar.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatsBar from './StatsBar'
import { stats } from '../data/content'

describe('StatsBar', () => {
  it('renders all three stats', () => {
    render(<StatsBar />)
    for (const s of stats) {
      expect(screen.getByText(s.value)).toBeInTheDocument()
      expect(screen.getByText(s.label)).toBeInTheDocument()
    }
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:** Leadership — serif `h2`, body paragraph, points as checklist bullets. StatsBar — `border-t border-sand`, `grid grid-cols-1 sm:grid-cols-3 divide-sand sm:divide-x`, each cell: small inline SVG (code brackets / people / shield-check, `stroke-burgundy`, `aria-hidden`), `text-2xl font-display` value, `text-sm text-muted` label.

- [ ] **Step 4: Run → PASS.** **Step 5: Commit** — `git commit -am "feat: leadership section and stats bar"`

---

### Task 10: Contact footer + page assembly

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/app/page.tsx` (replace scaffold content)
- Test: `src/components/Contact.test.tsx`, `src/app/page.test.tsx`

**Interfaces:**
- Consumes: all components + `profile`.
- Produces: complete `/` page: `Nav, Hero, SelectedWork, About, Leadership, StatsBar, Contact`.

- [ ] **Step 1: Failing tests**

```tsx
// Contact.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('has email, LinkedIn, and GitHub links and no phone number', () => {
    const { container } = render(<Contact />)
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', 'mailto:chermainezimmerman@gmail.com')
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', expect.stringContaining('linkedin.com/in/chermainez'))
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', expect.stringContaining('github.com/c14jcdj'))
    expect(container.textContent).not.toMatch(/530/)
  })
})
```

```tsx
// page.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from './page'

describe('page', () => {
  it('assembles all sections in order', () => {
    render(<Page />)
    for (const id of ['top', 'work', 'about', 'leadership', 'contact']) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run → FAIL.** **Step 3: Implement:** Contact — section id `contact`, serif `h2` "Let's talk", short line ("Open to senior frontend roles — remote"), three links with `aria-label`s, small-print footer `© {new Date().getFullYear()} Chermaine Zimmerman`. Page — imports and stacks the seven components inside `<main>`.

- [ ] **Step 4: Run → PASS.** **Step 5: Full gate:** `npm run lint && npx tsc --noEmit && npm run test:run && npm run build` — all green.

- [ ] **Step 6: Commit** — `git commit -am "feat: contact footer and full page assembly"`

---

### Task 11: Visual polish pass against the mockup

**Files:**
- Modify: any `src/components/*.tsx`, `src/app/globals.css`

**Interfaces:** none new — pure refinement.

- [ ] **Step 1: Load the `frontend-design` skill**, then run the dev server (`npm run dev`, port 3000) and screenshot the page at desktop (1440px) and mobile (390px) widths with the Playwright/Chrome MCP tools.

- [ ] **Step 2: Compare against the user's approved mockup** (hero composition, serif scale, chip styling, card proportions, stats bar) and refine spacing/type/color until it convincingly matches. Keep changes inside the token system.

- [ ] **Step 3: Accessibility check** — landmarks, single h1, alt text, visible focus states (`focus-visible:ring-2 ring-burgundy`), color contrast of burgundy-on-cream and muted-on-cream at used sizes.

- [ ] **Step 4: Re-run gate** — lint, tsc, tests, build.

- [ ] **Step 5: Commit** — `git commit -am "polish: match mockup composition and a11y refinements"`

---

### Task 12: GitHub repo + push + Vercel handoff

**Files:**
- Create: `README.md`

**Interfaces:**
- Produces: public repo `c14jcdj/personal-website` with all commits; user instructions for one-time Vercel connect.

- [ ] **Step 1: README** — short: who/what, stack, `npm run dev`, deploy note.

- [ ] **Step 2: Create repo and push**

```bash
cd /Users/chermainezimmerman/Code/personal-website
git add -A && git commit -m "docs: README" 
gh repo create personal-website --public --source=. --push
```

- [ ] **Step 3: Verify** — `gh repo view c14jcdj/personal-website --web` opens; CI-free build already proven locally.

- [ ] **Step 4: Vercel handoff (user does in browser):** vercel.com → Add New Project → Import `c14jcdj/personal-website` → framework auto-detected (Next.js) → Deploy. No env vars needed. Every later push to `main` auto-deploys.

---

## Self-review notes

- Spec coverage: visual design (T4, T11), all seven page sections (T5–T10), content model (T3), assets (T1), tests (T2 + per-task), SEO metadata (T4), repo/deploy (T12). Phone-number exclusion enforced by tests in T3 and T10.
- No placeholders: each task carries real code or exact class-level guidance.
- Type consistency: components consume `profile/projects/experience/leadership/stats/about` exactly as exported in T3.
