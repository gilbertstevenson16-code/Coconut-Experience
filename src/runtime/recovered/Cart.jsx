// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(61598);
  let o = [
      {
        id: "single",
        label: "Single",
        cans: 1,
        discount: 0,
        note: "One can, one moment",
      },
      {
        id: "six",
        label: "6 Pack",
        cans: 6,
        discount: 0.08,
        note: "A week of sips",
      },
      {
        id: "twelve",
        label: "12 Pack",
        cans: 12,
        discount: 0.15,
        note: "Best value - stock the fridge",
      },
    ],
    a = "six",
    i = (e) => o.find((t) => t.id === e) ?? o.find((e) => e.id === a),
    u = (e) => n.FLAVOURS.find((t) => t.id === e),
    l = (e) => Math.round(3.5 * e.cans * (1 - e.discount) * 100) / 100,
    s = (e, t) => `${e}__${t}`;
  e.s(
    [
      "DEFAULT_PACK_ID",
      0,
      a,
      "FREE_SHIPPING_AT",
      0,
      45,
      "MAX_QTY",
      0,
      99,
      "PACKS",
      0,
      o,
      "SHIPPING_FLAT",
      0,
      5.9,
      "formatPrice",
      0,
      (e) => `$${e.toFixed(2)}`,
      "getFlavour",
      0,
      u,
      "getPack",
      0,
      i,
      "lineId",
      0,
      s,
      "packPrice",
      0,
      l,
    ],
    23751,
  );
  let c = "palmo:cart:v1",
    d = (0, r.createContext)(null),
    f = () => () => {},
    p = (e, t) => {
      switch (t.type) {
        case "add": {
          let { flavourId: r, packId: n, qty: o } = t,
            a = s(r, n);
          if (e.find((e) => e.id === a))
            return e.map((e) =>
              e.id === a
                ? {
                    ...e,
                    qty: Math.min(e.qty + o, 99),
                  }
                : e,
            );
          return [
            {
              id: a,
              flavourId: r,
              packId: n,
              qty: Math.min(o, 99),
            },
            ...e,
          ];
        }
        case "setQty":
          if (t.qty < 1) return e.filter((e) => e.id !== t.id);
          return e.map((e) =>
            e.id === t.id
              ? {
                  ...e,
                  qty: Math.min(t.qty, 99),
                }
              : e,
          );
        case "remove":
          return e.filter((e) => e.id !== t.id);
        case "clear":
          return [];
        default:
          return e;
      }
    },
    m = () => {
      try {
        var e = window.localStorage.getItem(c);
        if (!e) return [];
        try {
          let t = JSON.parse(e);
          if (!Array.isArray(t)) return [];
          return t
            .filter(
              (e) =>
                e &&
                u(e.flavourId) &&
                i(e.packId)?.id === e.packId &&
                Number.isFinite(e.qty) &&
                e.qty > 0,
            )
            .map((e) => ({
              id: s(e.flavourId, e.packId),
              flavourId: e.flavourId,
              packId: e.packId,
              qty: Math.min(Math.floor(e.qty), 99),
            }));
        } catch {
          return [];
        }
      } catch {
        return [];
      }
    };
  e.s(
    [
      "CartProvider",
      0,
      function ({ children: e }) {
        let [n, o] = (0, r.useReducer)(p, void 0, m),
          [g, y] = (0, r.useState)(!1),
          [h, C] = (0, r.useState)(null),
          w = (0, r.useSyncExternalStore)(
            f,
            () => !0,
            () => !1,
          ),
          b = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          if (!b.current) {
            b.current = !0;
            return;
          }
          try {
            window.localStorage.setItem(c, JSON.stringify(n));
          } catch {}
        }, [n]);
        let v = (0, r.useRef)(null);
        (0, r.useEffect)(() => () => clearTimeout(v.current), []);
        let P = (0, r.useCallback)((e, t = a, r = 1) => {
            if (!u(e)) return;
            let n = i(t);
            (o({
              type: "add",
              flavourId: e,
              packId: n.id,
              qty: r,
            }),
              C({
                id: s(e, n.id),
                at: Date.now(),
              }),
              clearTimeout(v.current),
              (v.current = setTimeout(() => C(null), 1200)));
          }, []),
          x = (0, r.useCallback)(
            (e, t) =>
              o({
                type: "setQty",
                id: e,
                qty: t,
              }),
            [],
          ),
          F = (0, r.useCallback)(
            (e) =>
              o({
                type: "remove",
                id: e,
              }),
            [],
          ),
          M = (0, r.useCallback)(
            () =>
              o({
                type: "clear",
              }),
            [],
          ),
          S = (0, r.useCallback)(() => y(!0), []),
          E = (0, r.useCallback)(() => y(!1), []),
          k = (0, r.useCallback)(() => y((e) => !e), []),
          I = (0, r.useMemo)(
            () =>
              n.map((e) => {
                let t = u(e.flavourId),
                  r = i(e.packId),
                  n = l(r);
                return {
                  ...e,
                  flavour: t,
                  pack: r,
                  unitPrice: n,
                  total: Math.round(n * e.qty * 100) / 100,
                };
              }),
            [n],
          ),
          A = (0, r.useMemo)(() => n.reduce((e, t) => e + t.qty, 0), [n]),
          N = (0, r.useMemo)(
            () => I.reduce((e, t) => e + t.pack.cans * t.qty, 0),
            [I],
          ),
          T = (0, r.useMemo)(
            () => Math.round(100 * I.reduce((e, t) => e + t.total, 0)) / 100,
            [I],
          ),
          R = 0 === T || T >= 45 ? 0 : 5.9,
          _ = Math.round((T + R) * 100) / 100,
          O = Math.max(0, Math.round((45 - T) * 100) / 100),
          L = Math.min(1, T / 45),
          D = (0, r.useCallback)(
            (e, t = a) => n.some((r) => r.id === s(e, t)),
            [n],
          ),
          G = (0, r.useMemo)(
            () => ({
              lines: I,
              count: A,
              cans: N,
              subtotal: T,
              shipping: R,
              total: _,
              freeShippingGap: O,
              freeShippingProgress: L,
              ready: w,
              open: g,
              lastAdded: h,
              add: P,
              setQty: x,
              remove: F,
              clear: M,
              has: D,
              openCart: S,
              closeCart: E,
              toggleCart: k,
            }),
            [I, A, N, T, R, _, O, L, w, g, h, P, x, F, M, D, S, E, k],
          );
        return <d.Provider value={G}>{e}</d.Provider>;
      },
      "useCart",
      0,
      function () {
        let e = (0, r.useContext)(d);
        if (!e) throw Error("useCart must be used inside <CartProvider>");
        return e;
      },
    ],
    52086,
  );
};
