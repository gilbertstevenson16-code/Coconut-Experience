import React, { forwardRef, useSyncExternalStore } from "react";
import * as jsx from "react/jsx-runtime";
import { provide } from "./registry";
import * as THREE from "three";
import * as Fiber from "@react-three/fiber";
import { Center, Environment, useGLTF, useTexture } from "@react-three/drei";
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());
window.addEventListener("popstate", notify);
const router = {
  push: (url: string) => {
    history.pushState(null, "", url);
    notify();
  },
  replace: (url: string) => {
    history.replaceState(null, "", url);
    notify();
  },
  prefetch: async () => {},
  back: () => history.back(),
  refresh: () => location.reload(),
};
export function usePathname() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => location.pathname,
  );
}
const Link = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    prefetch?: boolean;
    scroll?: boolean;
    replace?: boolean;
  }
>(function Link({ prefetch, scroll, replace, ...props }, ref) {
  return <a ref={ref} {...props} />;
});
const Image = forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
    priority?: boolean;
    quality?: number;
    placeholder?: string;
    blurDataURL?: string;
    unoptimized?: boolean;
  }
>(function Image(
  {
    fill,
    priority,
    quality,
    placeholder,
    blurDataURL,
    unoptimized,
    style,
    ...props
  },
  ref,
) {
  return (
    <img
      ref={ref}
      {...props}
      loading={priority ? "eager" : "lazy"}
      style={
        fill
          ? {
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              ...style,
            }
          : style
      }
    />
  );
});
provide(71645, { ...React, default: React, __esModule: true });
provide(43476, { ...jsx, __esModule: true });
provide(18566, {
  usePathname,
  useRouter: () => router,
  useSearchParams: () => new URLSearchParams(location.search),
  __esModule: true,
});
provide(22016, { default: Link, __esModule: true });
provide(57688, { default: Image, __esModule: true });
for (const id of [90072, 8560, 32009])
  provide(id, { ...THREE, __esModule: true });
provide(75056, { Canvas: Fiber.Canvas, __esModule: true });
provide(25234, { useFrame: Fiber.useFrame, __esModule: true });
provide(28600, { useThree: Fiber.useThree, __esModule: true });
provide(1950, { G: Fiber.useLoader, __esModule: true });
provide(78140, { useGLTF, __esModule: true });
provide(47071, { useTexture, __esModule: true });
provide(43257, { Environment, __esModule: true });
provide(82687, { Center, __esModule: true });
provide(31067, { default: Object.assign, __esModule: true });
provide(31497, { version: Number(THREE.REVISION), __esModule: true });
provide(70905, { degToRad: THREE.MathUtils.degToRad, __esModule: true });
