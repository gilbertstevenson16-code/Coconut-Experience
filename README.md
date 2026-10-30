# Coconut Experience

Three-page beverage storefront: `/`, `/flavours`, `/story`, with interactive 3D scenes, six flavours, animated transitions and a demo basket.

Use Node.js 22+. Run `npm ci`, then `npm run dev`; open http://127.0.0.1:3144.

Checks: `npm run typecheck`, `npm run lint`, `npm run build`. With the server running: `npx playwright install chromium` once, then `npm test`. `npm run assets:verify` checks public R2 assets.

For AI previews, read [AI_START_HERE.md](AI_START_HERE.md). `npm run preview:package` builds `dist/` with all media served locally, falling back to the pinned GitHub release if R2 is unreachable. Serve it at the origin root with SPA fallback. A remote sandbox's localhost address is not a user-visible preview.

The `template-v1.0.0` GitHub release includes a ready-built portable preview and clean source ZIP. `npm run source:package` creates the source ZIP using an explicit file allowlist.

Offline media option: `npm run preview:package -- --assets /absolute/path/to/media`. Development override: `VITE_MEDIA_BASE`. No R2 credentials are needed to run the app.

Architecture: `src/pages` contains explicit TypeScript JSX page composition; `App.tsx` contains the shared shell. `src/runtime/recovered` contains recovered React JSX components and original animation logic; `vendor` isolates retained reference dependencies. `registry.ts` and `platform.tsx` provide compatibility adapters. React, Three.js and React Three Fiber use npm packages. `src/config` centralizes asset resolution; `styles/reference.css` preserves reference styles.

This is a fidelity-first migration, not a claim that every legacy module has been rewritten into idiomatic TypeScript. See [provenance](docs/provenance.md), [media](docs/r2-assets.md), and [validation](docs/validation.md). The basket does not process payments or fulfill orders.
