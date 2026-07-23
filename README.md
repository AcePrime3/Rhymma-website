# Rhymma — Logistics Intelligence Platform (Website)

Marketing/prototype website for Rhymma, built with **React 18 + Vite 6 + Tailwind CSS v4**.
Client-side routing via `wouter`. No backend, no database, and **no secrets** — this is a
static, front-end-only site.

## Requirements

- **Node.js 18.18+** (or 20+ recommended) and npm

## Getting started (local)

This project lives in `artifacts/rhymma-website`. Run all commands from that folder:

```bash
cd artifacts/rhymma-website
npm install        # install dependencies (first time only)
npm run dev        # start the dev server → http://localhost:5173
```

If port 5173 is taken, Vite automatically picks the next free port and prints the URL.

## Available scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build → outputs static files to `dist/public` |
| `npm run preview` | Serve the production build locally to sanity-check it |
| `npm run typecheck` | Run the TypeScript compiler (no emit) |

**Build command:** `npm run build`
**Publish/output directory:** `dist/public`

## Environment variables

All variables are **optional**; the app runs with defaults if they are unset. See
[`.env.example`](./.env.example). Copy it to `.env` to override:

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `5173` | Port for the dev/preview server |
| `BASE_PATH` | `/` | Public base path. Use `/` for a root domain, or `/subpath/` when hosting under a sub-path (e.g. GitHub Pages project sites). |

> This is a frontend-only project. **Do not** add passwords, API keys, or other secrets
> to the code or to `.env`. If a backend/integration is added later, keep secrets on the
> server side and inject public config via `VITE_`-prefixed variables.

## Deploying

The build produces static assets in `dist/public`, deployable to any static host.

**Netlify / Vercel / Cloudflare Pages**
- Build command: `npm run build`
- Output directory: `dist/public`
- SPA routing: add a rewrite so all paths fall back to `index.html`
  (e.g. Netlify `_redirects`: `/*  /index.html  200`).

**GitHub Pages**
- Set `BASE_PATH=/<repo-name>/` before building if using a project page.
- Publish the contents of `dist/public`.

## Project structure

```
artifacts/rhymma-website/
├─ attached_assets/     # brand SVGs (logo, icon, tagline lockup)
├─ public/              # static files served as-is (favicon)
├─ src/
│  ├─ components/       # shared UI (site-header, site-footer, ui/*)
│  ├─ lib/              # helpers + segment config
│  ├─ pages/            # Home, GetStarted, SignIn, Pricing, Contact, Resources, CaseStudies, Company
│  ├─ App.tsx           # routes
│  └─ main.tsx          # entry
├─ index.html
├─ vite.config.ts
└─ package.json
```

## Notes

- Forms (sign-in, contact, newsletter) are **prototype-only** — they show success states
  but do not submit anywhere yet. Wire them to a real endpoint/email service before launch.
- The brand logo keeps its original gradient; the rest of the UI uses a dark-orange accent
  system defined in `src/index.css` (`--primary`, `--accent`, and the `.brand-gradient*` utilities).
