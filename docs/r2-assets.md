# Media

Bucket: `media`. Prefix: `templates/coconut-experience/releases/525778aa5273e25b`.

Base: https://cdn.promptedsite.com/templates/coconut-experience/releases/525778aa5273e25b

30 files, 12,552,083 bytes, organized under `branding/`, `fonts/`, `models/`, `textures/cans/`, `images/story/`, `environments/`. The asset manifest records sizes, SHA-256 and content types. The path mapping connects reference URLs to organized object paths.

Fallback: https://github.com/hiiD4vd/promptedsite-template-02/releases/download/media-525778aa5273e25b/coconut-experience-assets.zip

The source ZIP excludes media binaries, Git history, credentials, node_modules and build outputs. Inline SVG markup, shaders and CSS remain source code. The separate portable preview ZIP deliberately includes all media.

`npm run preview:package` verifies every asset, builds with `/media` URLs and copies media into `dist/media`. Serve over HTTP at the origin root with SPA fallback. This avoids external media requests but cannot override host platform CSP, WebGL restrictions or artifact size limits.

Administration credentials stay in a separate external env file and must never be distributed. Public verification and preview packaging require no credentials.
