import type { ComponentType } from "react";
// Compatibility boundary for recovered modules; application code is typed separately.
type Module = Record<string, any>;
type Factory = (
  context: Module,
  module: { exports: Module },
  exports: Module,
) => void;
const factories = new Map<number, { ids: number[]; factory: Factory }>();
const cache = new Map<number, { exports: Module }>();
const provided = new Set<number>();
export function register(ids: number[], factory: Factory) {
  const group = { ids, factory };
  for (const id of ids) factories.set(id, group);
}
export function provide(id: number, value: Module) {
  provided.add(id);
  cache.set(id, { exports: value });
}
export function requireModule(id: number): Module {
  if (cache.has(id)) return cache.get(id)!.exports;
  const group = factories.get(id);
  if (!group) throw new Error(`Unknown rendering module ${id}`);
  for (const alias of group.ids)
    if (!cache.has(alias)) cache.set(alias, { exports: {} });
  const module = cache.get(id)!;
  const context = {
    i: (target: number) => {
      const value = requireModule(target);
      return value.__esModule || "default" in value
        ? value
        : Object.assign({ default: value }, value);
    },
    r: requireModule,
    A: async (target: number) => {
      const loader = requireModule(target);
      return typeof loader === "function" ? loader(requireModule) : loader;
    },
    s: (values: unknown[], target = id) => {
      if (provided.has(target)) return;
      if (!cache.has(target)) cache.set(target, { exports: {} });
      const exports = cache.get(target)!.exports;
      Object.defineProperty(exports, "__esModule", {
        value: true,
        configurable: true,
      });
      for (let i = 0; i < values.length;) {
        const key = values[i++] as string;
        const kind = values[i++];
        if (kind === 0) {
          const value = values[i++];
          Object.defineProperty(exports, key, {
            enumerable: true,
            configurable: true,
            get: () => value,
          });
        } else
          Object.defineProperty(exports, key, {
            enumerable: true,
            configurable: true,
            get: kind as () => unknown,
          });
      }
    },
    v: (value: Module) => {
      module.exports = value;
    },
    n: (value: Module) => {
      module.exports = value;
    },
    l: async () => {},
    e: module.exports,
    g: globalThis,
  };
  try {
    group.factory(context, module, module.exports);
  } catch (error) {
    for (const alias of group.ids) cache.delete(alias);
    throw error;
  }
  return cache.get(id)!.exports;
}
export function component(id: number, name = "default"): ComponentType<Module> {
  return requireModule(id)[name];
}
