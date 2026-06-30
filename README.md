# Backend / Cloud / DevOps Portfolio

A premium, fully responsive personal portfolio built with Next.js 15, TypeScript,
Tailwind CSS, Framer Motion, and React Three Fiber. Themed around infrastructure
and systems work — terminal typography, a live 3D network-topology hero, and a
deploy-pipeline-styled experience timeline.

Every piece of editable content (name, bio, projects, skills, experience,
education, certifications, testimonials, social links, resume path) lives in
**one file**: `src/config/site.ts`. You should rarely need to touch any
component file just to update content.

---

## 1. Open this in VS Code

1. Unzip the project anywhere on your machine.
2. Open the folder in VS Code: `File → Open Folder…` and select `portfolio`.
3. Open a terminal inside VS Code: `` Ctrl+` `` (or `Cmd+`` ` `` on Mac).

## 2. Install dependencies

You need [Node.js 18.18+](https://nodejs.org) installed (Node 20 LTS recommended).
Check your version first:

```bash
node -v
```

Then, from the project root:

```bash
npm install
```

This was scaffolded by hand rather than via `create-next-app` (no network access
in the environment that built it), so this first `npm install` is doing real
work — it may take a minute or two the first time.

## 3. Run it locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page
hot-reloads as you edit files.

## 4. Type-check & lint (recommended before deploying)

```bash
npx tsc --noEmit
npm run lint
```

This project was written carefully but **was not compiled or run in the
environment that generated it** (no internet access there to install
packages). Run these two commands once after your first `npm install` — if
anything needs a small fix, the error messages will point exactly at the
file and line.

---

## Editing your content

Open `src/config/site.ts`. Everything in the brief maps to a field here:

| Section | Field in `site.ts` |
|---|---|
| Name, title, tagline | `name`, `title`, `taglineWords` |
| Bio / About | `about.biography`, `about.values`, `about.funFacts` |
| Stats counters | `stats` |
| Skills | `skills` (array of categories → items with `level` 0–100) |
| Projects | `projects` |
| Work experience / timeline | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Testimonials | `testimonials` |
| Social links | `socials` |
| Resume file path | `resumeUrl` |
| Contact form endpoint | `contact.formspreeEndpoint` (or use `.env.local`, see below) |

TypeScript will warn you in VS Code if you remove a required field or
mistype a key — the shape is enforced by `src/types/config.ts`.

### Replacing placeholder assets

- **Resume**: drop your real PDF into `public/resume/` and update
  `resumeUrl` in `site.ts` to match the filename.
- **Project images**: replace the SVG placeholders in
  `public/images/projects/` with real screenshots (`.png`/`.jpg`/`.webp`
  all work — just update the `image` path for each project in `site.ts`).
- **Open Graph / social-share image**: add a real `1200×630` image at
  `public/images/og-image.png` (referenced in `src/app/layout.tsx`).
- **Favicon**: edit `src/app/icon.svg` directly, or replace it with a
  `icon.png` of your own (Next.js auto-detects either).

### Contact form

The contact form posts to [Formspree](https://formspree.io) (free tier
available, no backend needed). Two ways to configure it:

1. **Quick**: edit `contact.formspreeEndpoint` in `src/config/site.ts`.
2. **Recommended**: copy `.env.example` to `.env.local` and set
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — this keeps your real endpoint out of
   version control and overrides the config file automatically.

```bash
cp .env.example .env.local
```

### A note on the stack vs. the original brief

The brief listed GSAP and EmailJS as optional tools. This build uses
**Framer Motion alone** for every animation (page transitions, reveals,
the timeline, tilt cards, magnetic buttons) since running two animation
libraries side by side tends to fight itself and bloat bundle size without
adding capability here. Likewise, the contact form uses a plain `fetch` to
Formspree instead of the EmailJS SDK — one less client-side dependency, same
result. If you'd specifically like GSAP wired in for a particular effect
(e.g. a pinned scroll sequence Framer Motion doesn't do as well), it's a
quick add — just ask.

---

## Deployment

### Vercel (recommended — zero config)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings needed.
4. If you're using `.env.local`, add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under
   **Project Settings → Environment Variables**.
5. Deploy. Vercel Analytics (already wired into `layout.tsx`) activates
   automatically once deployed on Vercel.

### Netlify

1. Push to GitHub.
2. [New site from Git](https://app.netlify.com/start) → select the repo.
3. Build command: `npm run build`. Publish directory: `.next`.
4. Install the official [Next.js Runtime for Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
   (auto-suggested during setup) for full App Router support.
5. Add the same environment variable as above if used.

### Firebase Hosting

Firebase Hosting now supports Next.js directly via `firebase-tools`:

```bash
npm install -g firebase-tools
firebase init hosting
# When asked "Is this a Next.js app?" answer yes.
firebase deploy
```

### GitHub Pages

GitHub Pages only serves static files and does not support Next.js's
server features (image optimization, API routes). If you specifically need
GitHub Pages, you'd need to set `output: "export"` in `next.config.js` and
switch `next/image` to `unoptimized: true` — this disables a few dynamic
features. Vercel or Netlify are a better fit for this project as built.

---

## Project structure

```
portfolio/
├── src/
│   ├── app/                  # Next.js App Router pages, layout, SEO routes
│   │   ├── layout.tsx        # Root layout, fonts, metadata, JSON-LD
│   │   ├── page.tsx          # Assembles all sections
│   │   ├── globals.css       # Design tokens, base styles
│   │   ├── robots.ts         # robots.txt generation
│   │   ├── sitemap.ts        # sitemap.xml generation
│   │   ├── not-found.tsx     # Custom 404
│   │   └── icon.svg          # Favicon (auto-detected by Next.js)
│   ├── components/
│   │   ├── sections/         # One file per page section (Hero, About, etc.)
│   │   ├── layout/            # Navbar, Footer
│   │   ├── ui/                # Reusable primitives (buttons, cards, reveal anim.)
│   │   └── three/             # React Three Fiber topology background
│   ├── config/
│   │   └── site.ts           # ← YOUR CONTENT LIVES HERE
│   ├── types/
│   │   └── config.ts         # TypeScript shape for site.ts
│   ├── hooks/
│   │   └── useTheme.tsx      # Dark/light mode context
│   └── lib/
│       └── utils.ts           # `cn()` class merge helper
├── public/
│   ├── images/                # Project screenshots, certs, avatars
│   └── resume/                 # Your resume PDF goes here
├── .env.example                # Copy to .env.local for the contact form
├── package.json
├── tailwind.config.js          # Design tokens (colors, fonts, animations)
└── tsconfig.json
```

## Design system reference

| Token | Value | Use |
|---|---|---|
| `base` | `#0B0F14` | Page background |
| `surface` | `#121821` | Card backgrounds |
| `surface-border` | `#26313F` | Hairlines, dividers |
| `signal` | `#5EEAD4` | Accent — links, highlights, the one "alive" color |
| `ink` / `ink-muted` / `ink-faint` | `#E8EDF2` / `#94A3B8` / `#5B6B7D` | Text hierarchy |
| `font-display` | Space Grotesk | Headings |
| `font-body` | Inter | Paragraph text |
| `font-mono` | JetBrains Mono | Labels, stats, section numbering, code-styled UI |

All of these are defined in `tailwind.config.js` — change a hex value there
and it propagates across the whole site.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables animation globally for users
  who request it).
- All interactive elements have visible focus rings (`:focus-visible`).
- The custom cursor and topology background are disabled/hidden on
  touch devices and are purely decorative (`aria-hidden` via no
  semantic role) so they don't interfere with screen readers.
- Images use `next/image` for automatic optimization and lazy loading.
- Replace placeholder SVGs with real compressed images before going live —
  SVG placeholders are intentionally tiny but won't look "premium" as-is.

---

## If something doesn't compile

This project was hand-written file-by-file without access to a live
Node/npm environment to test-compile it end-to-end. The most likely
first-run issues, if any, are minor — TypeScript will point you straight
at the line. Two checks worth running immediately after your first
`npm install`:

```bash
npx tsc --noEmit   # catches type errors
npm run build      # catches anything tsc alone wouldn't
```

If you hit an error you don't recognize, paste the message back and it can
be fixed in seconds.
