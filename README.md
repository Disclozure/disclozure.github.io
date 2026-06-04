# disclozure — cyber security portfolio (Vite SPA)

Single-page React app, built with Vite + Tailwind v4. Deploys to **disclozure.github.io**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs ./dist
npm run preview    # serve the build locally
```

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Create a repo named **`disclozure.github.io`** under the `disclozure` GitHub account.
2. Push this project to `main`.
3. In **Settings → Pages**, set **Source = GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` builds and publishes `dist/` on every push.

### Option B — gh-pages branch

```bash
npm run deploy   # builds and pushes ./dist to the gh-pages branch
```
Then set **Settings → Pages → Source = Deploy from branch → gh-pages**.

## Notes

- `vite.config.ts` uses `base: "/"` because `disclozure.github.io` is a **user site** served from the domain root.
- For a project site (e.g. `disclozure.github.io/portfolio`) change `base` to `"/portfolio/"`.
- All content is in `src/App.tsx`; design tokens live in `src/styles.css`.
