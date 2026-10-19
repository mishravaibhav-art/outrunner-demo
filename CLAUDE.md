# Flowboard demo

A small React + Vite frontend used to test chat-driven UI changes (Outrunner / Claude Code). Static data only, no backend.

## Commands

- `npm install` – install dependencies
- `npm run dev` – start the dev server at http://localhost:5173/outrunner-demo/
- `npm run build` – production build into `dist/` (must pass before opening a PR)

## Environment

- Copy `.env.example` to `.env`. `npm run build` fails if `VITE_API_URL` is missing (checked by `scripts/check-env.js`).
- `VITE_*` values are baked into the browser bundle; never put secrets in them. `DEMO_SECRET` is server-only.
- Never print or commit secret values.

## Structure

- `src/App.jsx` – page layout (dashboard, workflows table, pricing)
- `src/components/` – one component per file
- `src/styles.css` – all styles; design tokens live in `:root` at the top

## Design rules

- Use the tokens in `:root` for every color, spacing and radius. Never hard-code hex values or pixel spacing in components or new CSS rules; add a token first if one is missing.
- Reuse the existing `.card`, `.btn`, `.btn-primary`, `.btn-secondary` and `.badge` classes instead of creating near-duplicates.
- Plain CSS only, no inline `style={...}`, no CSS-in-JS, no new UI libraries.
- Keep layouts responsive: grids use `auto-fit` / `minmax`, and nothing should scroll horizontally at 375px width except the table.

## Pull requests

- One change per branch and PR, with a short description of what changed visually.
- Run `npm run build` before pushing.
- Merging to `main` deploys to GitHub Pages automatically.
