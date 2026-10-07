# Enes Aksoy — Portfolio

Single-page developer portfolio. Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, Geist Mono. No analytics, no backend.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Edit content

Everything lives in `data/portfolio.ts`:

- `links` — social URLs.
- `projects[].url` — set each `YOUR_PROJECT_URL` to a real `https://` URL. Until then the project renders as a non-clickable card.
- `SITE_URL` — set to your domain (replaces `https://YOUR_DOMAIN`) for the canonical URL and Open Graph.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repo.
3. Framework preset is detected as Next.js; keep the defaults and click **Deploy**.
4. Add your domain under **Settings → Domains**, then update `SITE_URL`.

Or with the CLI: `npx vercel` (preview) / `npx vercel --prod`.
