import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import manifest from "./src/config/assets.json";
export default defineConfig(({ mode }) => {
  const media = (
    loadEnv(mode, process.cwd(), "VITE_").VITE_MEDIA_BASE || manifest.baseUrl
  ).replace(/\/$/, "");
  return {
    plugins: [
      {
        name: "media-styles",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".css"))
            return code.replaceAll("__MEDIA_BASE__", media);
        },
      },
      react(),
    ],
    css: { postcss: { plugins: [] } },
    server: { host: "127.0.0.1", port: 3144 },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/three/')) return 'three';
            if (id.includes('/node_modules/')) return 'dependencies';
          },
        },
      },
    },
  };
});
