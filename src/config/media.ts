import manifest from "./assets.json";
import paths from "./asset-paths.json";
export const mediaBase = (
  import.meta.env.VITE_MEDIA_BASE || manifest.baseUrl
).replace(/\/$/, "");
export function asset(original: string) {
  const relative = (paths as Record<string, string>)[original];
  if (!relative) throw new Error(`Unknown media ${original}`);
  return `${mediaBase}/${relative}`;
}
