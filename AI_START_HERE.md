# Start here

Read README.md, docs/r2-assets.md and docs/product-prompt.md. The documented release is `template-v1.0.0`.

A ready-built preview is available at https://github.com/gilbertstevenson16-code/Coconut-Experience/releases/download/template-v1.0.1/coconut-experience-preview.zip. Use it when static hosting is available but package installation/build tools are not. It includes the app and verified local media; it still needs an HTTP preview host with SPA fallback.

Deliver a user-visible interactive preview, preserving Home, Flavours, Story, original media, typography, 3D and basket. Inspect your available shell, artifact, file-serving and network tools before choosing a preview strategy.

Local agents: install, validate, run the server and provide the usable local URL. Remote agents: expose the server with a supported preview/port-forward tool and verify its user-facing link.

Browser-chat AI: use a real interactive artifact. If shell tools exist, `npm run preview:package` creates a complete static `dist/` with local media. Publish/attach that using the platform's supported multi-file preview, including SPA routing. Do not iframe the site or substitute an image/mockup.

R2 failures trigger the pinned GitHub fallback in the packaging script. Verify hashes. Do not ask for an asset ZIP when the public fallback is reachable. Sandbox file paths are not browser-accessible asset URLs.

If only single-file artifacts are supported, adapt packaging only if the complete app fits the platform's documented limits. Base64 does not automatically bypass restrictions. If no supported path exists, explain the exact limitation and provide a downloadable portable preview when possible. Do not claim every AI platform can render this site.

Test actual loading completion, all routes, desktop/mobile and basket/navigation. Build success, screenshots or HTTP 200 alone do not prove delivery of an interactive preview. Report checks actually executed.

Do not push, deploy publicly, replace branding, remove attribution or add services unless requested. No R2/Supabase credentials are required.
