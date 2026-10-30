// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    i = e.i(55667),
    n = e.i(89970),
    a = e.i(65747);
  (n.default.registerPlugin(a.useGSAP),
    e.s([
      "default",
      0,
      function ({
        children: e,
        className: s = "",
        speed: o = 0.2,
        axis: l = "y",
        rotate: u = 0,
        ...c
      }) {
        let d = (0, r.useRef)(null),
          f = (0, r.useRef)(null);
        return (
          (0, a.useGSAP)(
            () => {
              let e = d.current;
              if (e) {
                if (
                  window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ) {
                  f.current = null;
                  return;
                }
                return (
                  (f.current = {
                    move: n.default.quickSetter(e, "x" === l ? "x" : "y", "px"),
                    spin: u
                      ? n.default.quickSetter(e, "rotation", "deg")
                      : null,
                  }),
                  () => {
                    ((f.current = null),
                      n.default.set(e, {
                        clearProps: "transform",
                      }));
                  }
                );
              }
            },
            {
              scope: d,
              dependencies: [l, u, o],
            },
          ),
          (0, i.useLenis)(() => {
            let e = d.current,
              t = f.current;
            if (!e || !t) return;
            let r = e.getBoundingClientRect(),
              i = window.innerHeight;
            if (r.bottom < 0 || r.top > i) return;
            let n = 1 - ((r.top + r.height / 2) / i) * 2;
            (t.move(n * i * o), t.spin && t.spin(n * u));
          }),
          (
            <div ref={d} className={s} {...c}>
              {e}
            </div>
          )
        );
      },
    ]));
};
