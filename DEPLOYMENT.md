# Deployment Guide — Logansarathy Portfolio

## Stack
- React 18 + TypeScript
- Vite 5 (pure static build)
- No SSR · No server runtime · No TanStack Start

After `npm run build` you get:
```
dist/
  index.html
  assets/
    index-[hash].js
    index-[hash].css
```

---

## GitHub Pages

### Option A — GitHub Actions (recommended)

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source → GitHub Actions**.
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Option B — gh-pages branch (manual)

```bash
npm install -g gh-pages
npm run build
npx gh-pages -d dist
```

### ⚠️ Subdirectory repos (username.github.io/repo-name)

If your repo is **not** `username.github.io` (i.e. it's deployed to a subdirectory),
set `base` in `vite.config.ts` to your repo name:

```ts
base: "/your-repo-name/",
```

If you're on a custom domain or root deployment, use:
```ts
base: "/",
```

---

## Netlify

1. Connect your GitHub repo to Netlify.
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Done — no special config needed.

Optional `netlify.toml` for SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Vercel

1. Import your GitHub repo in Vercel.
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Done — Vercel auto-detects Vite.

---

## Local Development

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the built dist/ locally
```

---

## What was removed from the Lovable export

| Removed | Why |
|---|---|
| `@tanstack/react-start` | SSR framework — not needed for static site |
| `@tanstack/router-plugin` | File-based routing plugin for TanStack Start |
| `@lovable.dev/vite-tanstack-config` | Lovable's custom config wrapping SSR setup |
| `@cloudflare/vite-plugin` | Cloudflare Workers server adapter |
| `server.ts` / `start.ts` | SSR entry points |
| `wrangler.jsonc` | Cloudflare Workers config |
| `bunfig.toml` | Bun runtime config |
| `routeTree.gen.ts` | Auto-generated TanStack router file |
| All `@radix-ui/*` packages | Not used by the portfolio (came with Lovable template) |
| `@tanstack/react-query` | Not needed (no data fetching) |
| All other unused shadcn/ui deps | Cleaned for minimal footprint |

## What was kept identical

- All visual design, CSS variables, typography
- All content (case studies, philosophy, notes)
- All external links (prototypes, evolution docs, contact)
- Responsive breakpoints
- Fonts: DM Serif Display, Instrument Sans, DM Mono
- Color system: `--ink`, `--accent`, `--bg`, `--surface`
