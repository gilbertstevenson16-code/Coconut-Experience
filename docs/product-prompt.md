# Build and preview Coconut Experience

Use the existing template at https://github.com/gilbertstevenson16-code/Coconut-Experience, pinned version `template-v1.0.2`.

Ready-built preview (complete static app with local media):
https://github.com/gilbertstevenson16-code/Coconut-Experience/releases/download/template-v1.0.2/coconut-experience-preview.zip

Clean source archive:
https://github.com/gilbertstevenson16-code/Coconut-Experience/releases/download/template-v1.0.2/coconut-experience-source.zip

If your environment can download and host static files but cannot install/build packages, use the ready-built preview. Extract it and serve its index.html through your supported preview host with SPA fallback; do not treat opening a ZIP or a file:// URL as a working hosted preview.

For local use, the extracted preview includes `serve-preview.py`: run `python3 serve-preview.py` and open http://127.0.0.1:3145. No npm installation is needed for that prebuilt package. A remote sandbox must still expose its server using the platform's actual preview tools.

Read `AI_START_HERE.md`, `README.md` and `docs/r2-assets.md` first. Deliver a working interactive website I can open, preserving the Home, Flavours and Story pages, original 3D coconut and cans, fonts, media, scroll animations, navigation and basket. Preserve the baseline unless I provide a customization brief; do not stop merely because no brief was supplied.

Adapt to your environment:

- Local coding agent: obtain the source, run `npm ci`, checks/build, start the server and provide the usable local URL.
- Remote agent: expose the preview through the platform's supported mechanism. A private sandbox localhost address is not a usable link for me.
- Browser-chat AI: create a real interactive artifact with your available tools. If shell tools exist, run `npm run preview:package`; publish the complete `dist/` using supported static-file/artifact hosting with SPA routing. Keep the original implementation and media.

R2 media fallback, to use automatically if CDN access is blocked:
https://github.com/gilbertstevenson16-code/Coconut-Experience/releases/download/media-525778aa5273e25b/coconut-experience-assets.zip

Verify files against `src/config/assets.json`; the packaging script does this. Serve local media with the preview rather than referencing private sandbox paths. Do not replace models/textures with placeholders, use an iframe/proxy, or present a screenshot as the website. Do not request credentials or ask me to upload publicly available media.

Validate the actual preview: loader completes, media load, all three routes work, desktop/mobile layouts and basket controls work. Run available typecheck, lint, build and browser tests. Distinguish tests actually executed from unverified claims.

Final response: interactive artifact or usable preview link first, then brief test results and limitations. If your platform cannot host the app because of missing tools, CSP, WebGL or file limits, explain the precise blocker and provide a downloadable portable preview when possible. Do not guarantee universal compatibility or call a private sandbox server a completed preview.

Do not commit, push, deploy publicly or change branding unless I request it.
