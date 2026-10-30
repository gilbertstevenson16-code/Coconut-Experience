# Validation — 29 October 2026

Final regression rerun completed on 30 October 2026: all six desktop/mobile route checks passed, followed by pack selection, basket open/close and animated menu navigation. The standalone Python preview launcher returned HTTP 200 for all three routes and the GLB model with the correct content type. Source ZIP inspection found no Git history, env files, dependencies, build outputs or binary media. Portable ZIP media matched the manifest for all 30 files. The published GitHub fallback was downloaded and independently verified against those same 30 hashes.

Reference: supplied repository commit `33e7f6d`, locally served. Chromium software WebGL, desktop 1440×900 and mobile 390×844, light mode, normal motion. Reference captures and diagnostic diffs are retained outside the distributable source. Animated frames are not temporally identical.

Typecheck, lint and production build passed. Media verification passed for all 30 R2 objects (SHA-256, bytes, content type and CORS). The portable build serves all media at `/media` and does not require R2 at runtime. Build warnings remain for large 3D/animation chunks; splitting separates dependencies, Three.js and application code. Local font paths are resolved at runtime after packaging, which Vite reports during build.

Settled screenshots, after loader completion, showed zero JavaScript errors and zero HTTP error responses across six route/viewport combinations. Reference and migrated document heights match: Home 12200/10048, Flavours 5107/5720, Story 7264/6990 (desktop/mobile).

Pixelmatch diagnostic mismatch, threshold 0.1, initial viewport:

| Page | Desktop | Mobile |
| --- | ---: | ---: |
| Home | 2.179% | 0.020% |
| Flavours | 0.000% | 0.000% |
| Story | 48.728% | 46.930% |

Home differences include the time-dependent palm/3D animation phase. Story's large difference is an intentional repair: the reference screenshot shows a broken hero image, whereas the migration correctly displays the supplied palm-canopy photograph. Typography, layout and section dimensions are retained. Do not interpret these numbers as a universal visual-match score or claim 100% fidelity.

The demo recording exercises Home scrolling, menu navigation to Flavours, pack selection, basket opening/closing and navigation to Story. The browser regression script also captures top/middle/end states for all routes. Testing is Chromium-only; no physical mobile device, Safari/Firefox matrix or real browser-chat AI artifact session has been verified.

Limitations: recovered JSX/vendor compatibility modules remain; this is not a complete idiomatic TypeScript rewrite. The basket has no checkout backend. Missing reference fruit art uses its existing procedural fallback. Full reduced-motion behavior and a comprehensive keyboard/accessibility audit remain unverified. Browser AI hosting depends on actual tools, CSP, WebGL and file limits; the portable package is not a guarantee that every chat platform can host it.
