# QuantBrain Labs — site

Marketing and research site for **QuantBrain Labs**: an independent research
group at the intersection of large language models and quantitative finance.

Built with **React 19 · Vite · Tailwind CSS 4** and deployed to GitHub Pages.

Live: https://limexailab.github.io/quant-brain-site/

## Local development

Requires Node.js LTS.

```bash
npm install
npm run dev
```

The dev server will print a local URL (e.g. `http://127.0.0.1:5173/`).

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `master` automatically build and deploy to GitHub Pages via
`.github/workflows/deploy.yml`.
