// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    o = e.i(65747),
    i = e.i(84606),
    a = e.i(33809),
    l = e.i(55803);
  (n.default.registerPlugin(o.useGSAP, i.default, a.default),
    e.s([
      "default",
      0,
      function ({
        children: e,
        className: i = "",
        start: a = "top 85%",
        end: s = "top 35%",
        scrub: u = 1,
        stagger: c = 0.08,
        from: d = "start",
        order: f = "length",
        trigger: p = "scroll",
        delay: h = 0,
        duration: m = 0.6,
        ...g
      }) {
        let v = (0, r.useRef)(null);
        return (
          (0, o.useGSAP)(
            () => {
              let e = v.current?.querySelector("svg");
              if (!e || !e.getClientRects().length) return;
              let t = n.default.utils.toArray(
                e.querySelectorAll(
                  "path, line, polyline, polygon, circle, ellipse, rect",
                ),
              );
              if (!t.length) return;
              let r = t.filter((e) => {
                if (e.closest("defs, clipPath, mask")) return !1;
                let t = n.default.getProperty(e, "stroke");
                return t && "none" !== t;
              });
              if (
                !r.length ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              )
                return;
              let o = [];
              (r.forEach((e) => {
                let t = e.getAttribute?.("d"),
                  r = t
                    ? t
                        .trim()
                        .split(/(?=M)/)
                        .filter((e) => e.trim())
                    : [];
                if (r.length < 2) return void o.push(e);
                let n = document.createDocumentFragment(),
                  i = r.map((t) => {
                    let r = e.cloneNode(!1);
                    return (
                      r.setAttribute("d", t.trim()),
                      (r.dataset.drawsvgSplit = "true"),
                      n.appendChild(r),
                      r
                    );
                  });
                (e.parentNode.insertBefore(n, e),
                  (e.style.display = "none"),
                  (e.dataset.drawsvgSource = "true"),
                  o.push(...i));
              }),
                "length" === f &&
                  o.sort((e, t) => {
                    let r = (e) =>
                      "function" == typeof e.getTotalLength
                        ? e.getTotalLength()
                        : 0;
                    return r(t) - r(e);
                  }));
              let i = "loader" === p,
                g = n.default.timeline({
                  paused: i,
                  ...(i
                    ? {}
                    : {
                        scrollTrigger: {
                          trigger: v.current,
                          start: a,
                          end: s,
                          scrub: u,
                        },
                      }),
                }),
                x = "center" === d ? "50% 50%" : "0%",
                w = (e, t) => {
                  t <= 0 ||
                    (g.set(
                      e,
                      {
                        autoAlpha: 0,
                      },
                      0,
                    ),
                    g.set(
                      e,
                      {
                        autoAlpha: 1,
                      },
                      t,
                    ));
                };
              if ("sequential" === c) {
                let e = o.map((e) =>
                    "function" == typeof e.getTotalLength
                      ? e.getTotalLength()
                      : 1,
                  ),
                  t = e.reduce((e, t) => e + t, 0) || 1,
                  r = 0;
                o.forEach((n, o) => {
                  let i = e[o] / t;
                  (w(n, r),
                    g.fromTo(
                      n,
                      {
                        drawSVG: x,
                      },
                      {
                        drawSVG: "100%",
                        duration: i,
                        ease: "none",
                      },
                      r,
                    ),
                    (r += i));
                });
              } else {
                let e = o.length > 1 ? c : 0,
                  t = Math.max(0.05, 1 - e * (o.length - 1));
                o.forEach((r, n) => {
                  (w(r, e * n),
                    g.fromTo(
                      r,
                      {
                        drawSVG: x,
                      },
                      {
                        drawSVG: "100%",
                        duration: t,
                        ease: "none",
                      },
                      e * n,
                    ));
                });
              }
              let y = null;
              return (
                i &&
                  (g.pause(0),
                  n.default.set(v.current, {
                    autoAlpha: 0,
                  }),
                  (y = (0, l.onLoaderCue)(
                    () => {
                      (n.default.set(v.current, {
                        autoAlpha: 1,
                      }),
                        g.timeScale(1 / m).play(0));
                    },
                    {
                      delay: h,
                    },
                  ))),
                () => {
                  (y && y(),
                    o.forEach((e) => {
                      e.dataset.drawsvgSplit
                        ? e.remove()
                        : n.default.set(e, {
                            clearProps:
                              "strokeDasharray,strokeDashoffset,opacity,visibility",
                          });
                    }),
                    r.forEach((e) => {
                      e.dataset.drawsvgSource &&
                        (e.style.removeProperty("display"),
                        delete e.dataset.drawsvgSource);
                    }),
                    i &&
                      n.default.set(v.current, {
                        clearProps: "opacity,visibility",
                      }));
                }
              );
            },
            {
              scope: v,
              dependencies: [a, s, u, c, d, f, p, h, m],
            },
          ),
          (
            <div ref={v} className={i} {...g}>
              {e}
            </div>
          )
        );
      },
    ]));
};
