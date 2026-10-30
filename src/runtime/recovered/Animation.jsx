// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (t) => {
  "use strict";

  var e = t.i(43476),
    r = t.i(71645);
  let i = (0, r.createContext)({
    isLoaderFinished: !1,
    isTransitionFinished: !0,
    setIsTransitionFinished: () => {},
  });
  t.s([
    "AnimationProvider",
    0,
    function ({ children: t }) {
      let [n, s] = (0, r.useState)(() => !!window.__loaderFinished),
        [o, a] = (0, r.useState)(!0);
      (0, r.useEffect)(() => {
        if (window.__loaderFinished) return;
        let t = () => s(!0);
        return (
          window.addEventListener("loaderComplete", t),
          () => window.removeEventListener("loaderComplete", t)
        );
      }, []);
      let l = (0, r.useMemo)(
        () => ({
          isLoaderFinished: n,
          isTransitionFinished: o,
          setIsTransitionFinished: a,
        }),
        [n, o],
      );
      return <i.Provider value={l}>{t}</i.Provider>;
    },
    "useAnimation",
    0,
    function () {
      return (0, r.useContext)(i);
    },
  ]);
};
