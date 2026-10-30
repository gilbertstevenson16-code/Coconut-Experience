// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (t) => {
  "use strict";

  var e = t.i(71645);
  let r = (t, e, r) => Math.min(r, Math.max(e, t)),
    i = "unknown",
    n = !1,
    s = new Set(),
    o = ["touchend", "pointerup", "click", "keydown"],
    a = () => {
      n ||
        "granted" === i ||
        ((n = !0),
        DeviceOrientationEvent.requestPermission()
          .then((t) => {
            if (((n = !1), "granted" === t))
              for (let t of ((i = "granted"), u(), [...s])) t();
            else ((i = "denied"), u());
          })
          .catch(() => {
            n = !1;
          }));
    },
    l = !1,
    u = () => {
      if (l) for (let t of ((l = !1), o)) window.removeEventListener(t, a);
    };
  t.s([
    "default",
    0,
    function ({ onChange: t, enabled: n = !0 } = {}) {
      let u = (0, e.useRef)({
          x: 0,
          y: 0,
        }),
        c = (0, e.useRef)(t);
      return (
        (0, e.useEffect)(() => {
          c.current = t;
        }),
        (0, e.useEffect)(() => {
          if (!n) return;
          let t = (t, e) => {
              ((u.current.x = t), (u.current.y = e), c.current?.(t, e));
            },
            e = (e) => {
              t(
                (e.clientX / window.innerWidth) * 2 - 1,
                (e.clientY / window.innerHeight) * 2 - 1,
              );
            };
          window.addEventListener("pointermove", e, {
            passive: !0,
          });
          let h = () => {},
            f = () => {};
          if ("DeviceOrientationEvent" in window) {
            let e = null,
              n = (i) => {
                let { beta: n, gamma: s } = i;
                if (null == n || null == s) return;
                let o = screen.orientation?.angle ?? window.orientation ?? 0,
                  a = n,
                  l = s;
                (90 === o
                  ? ((a = -s), (l = n))
                  : 180 === o
                    ? ((a = -n), (l = -s))
                    : (270 === o || -90 === o) && ((a = s), (l = -n)),
                  e ||
                    (e = {
                      pitch: a,
                      roll: l,
                    }),
                  t(r((l - e.roll) / 25, -1, 1), r((a - e.pitch) / 25, -1, 1)));
              },
              u = () => {
                e = null;
              },
              c = () => {
                (window.addEventListener("deviceorientation", n),
                  window.addEventListener("orientationchange", u),
                  (h = () => {
                    (window.removeEventListener("deviceorientation", n),
                      window.removeEventListener("orientationchange", u));
                  }));
              };
            "DeviceOrientationEvent" in window &&
            "function" == typeof DeviceOrientationEvent.requestPermission
              ? (f = ((t) => {
                  if ("granted" === i) return (t(), () => {});
                  if ("denied" === i) return () => {};
                  if ((s.add(t), !l && "unknown" === i))
                    for (let t of ((l = !0), o))
                      window.addEventListener(t, a, {
                        passive: !0,
                      });
                  return () => {
                    s.delete(t);
                  };
                })(c))
              : c();
          }
          return () => {
            (window.removeEventListener("pointermove", e), f(), h());
          };
        }, [n]),
        u
      );
    },
  ]);
};
