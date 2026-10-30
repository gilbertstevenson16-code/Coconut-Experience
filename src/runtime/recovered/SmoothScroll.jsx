// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(89970),
    n = e.i(33809),
    a = e.i(71645),
    i = e.i(55667);
  (r.default.registerPlugin(n.default),
    e.s([
      "default",
      0,
      ({
        duration: e = 1.5,
        lerp: l = 0.075,
        smoothWheel: s = !0,
        wheelMultiplier: o = 0.8,
        touchMultiplier: u = 0.9,
      }) => {
        let c = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            function e(e) {
              c.current?.lenis?.raf(1e3 * e);
            }
            (r.default.ticker.add(e), r.default.ticker.lagSmoothing(0));
            let t = c.current?.lenis;
            return (
              t?.on("scroll", n.default.update),
              () => {
                (t?.off("scroll", n.default.update),
                  r.default.ticker.remove(e),
                  r.default.ticker.lagSmoothing(500, 33));
              }
            );
          }, []),
          (
            <i.ReactLenis
              root={!0}
              options={{
                autoRaf: !1,
                duration: e,
                lerp: l,
                smoothWheel: s,
                smoothTouch: !0,
                syncTouch: !0,
                wheelMultiplier: o,
                touchMultiplier: u,
                easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
              }}
              ref={c}
            />
          )
        );
      },
    ]));
};
