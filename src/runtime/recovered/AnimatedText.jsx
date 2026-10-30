// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    a = e.i(65747),
    l = e.i(42982),
    i = e.i(33809);
  n.default.registerPlugin(a.useGSAP, l.default, i.default);
  let s = !1;
  function o() {
    s ||
      ((s = !0),
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ((s = !1), i.default.refresh());
        });
      }));
  }
  function d({
    as: e = "span",
    variant: i,
    children: s,
    className: u = "",
    delay: c = 0,
    stagger: m,
    from: f = "start",
    duration: h,
    start: p = "top 88%",
    maskPad: x,
    ...v
  }) {
    let g = (0, r.useRef)(null),
      w = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(
        "string" == typeof e ? e.toLowerCase() : "",
      ),
      b = i || (w ? "heading" : "paragraph");
    return (
      (0, a.useGSAP)(
        () => {
          let e = g.current;
          if (!e) return;
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return void n.default.set(e, {
              autoAlpha: 1,
            });
          let t = null,
            r = null,
            a = !1,
            i = () => {
              if (a) return null;
              if ("heading" === b) {
                let i = l.default.create(e, {
                  type: "lines,words,chars",
                  mask: "lines",
                });
                return (
                  (t = i),
                  x &&
                    i.masks?.forEach((e) => {
                      n.default.set(e, {
                        paddingLeft: x,
                        paddingRight: x,
                      });
                    }),
                  n.default.set(i.chars, {
                    yPercent: 140,
                  }),
                  n.default.set(e, {
                    autoAlpha: 1,
                  }),
                  (r = n.default.to(i.chars, {
                    yPercent: 0,
                    duration: h || 0.85,
                    ease: "power3.out",
                    stagger: {
                      each: m || 0.035,
                      from: f,
                    },
                    delay: c,
                    scrollTrigger: {
                      trigger: e,
                      start: p,
                      once: !0,
                    },
                    onComplete: () => {
                      ((a = !0),
                        t && (t.revert(), (t = null)),
                        n.default.set(e, {
                          autoAlpha: 1,
                          clearProps: "transform",
                        }));
                    },
                  })),
                  () => {
                    (r && (r.scrollTrigger?.kill(), r.kill(), (r = null)),
                      t && (t.revert(), (t = null)));
                  }
                );
              }
              {
                let i = l.default.create(e, {
                  type: "lines,words",
                  mask: "lines",
                });
                return (
                  (t = i),
                  n.default.set(i.lines, {
                    yPercent: 140,
                    opacity: 0,
                  }),
                  n.default.set(e, {
                    autoAlpha: 1,
                  }),
                  (r = n.default.to(i.lines, {
                    yPercent: 0,
                    opacity: 1,
                    duration: h || 0.8,
                    ease: "power2.out",
                    stagger: {
                      each: m || 0.08,
                      from: f,
                    },
                    delay: c,
                    scrollTrigger: {
                      trigger: e,
                      start: p,
                      once: !0,
                    },
                    onComplete: () => {
                      ((a = !0),
                        t && (t.revert(), (t = null)),
                        n.default.set(e, {
                          autoAlpha: 1,
                          clearProps: "transform",
                        }));
                    },
                  })),
                  () => {
                    (r && (r.scrollTrigger?.kill(), r.kill(), (r = null)),
                      t && (t.revert(), (t = null)));
                  }
                );
              }
            },
            s = null,
            d = !1,
            u = window.innerWidth,
            v = null,
            w = () => {
              d || ((d = !0), (s = i()), o());
            },
            y = () => {
              if (a) return;
              let e = window.innerWidth;
              e === u ||
                ((u = e),
                d &&
                  (clearTimeout(v),
                  (v = setTimeout(() => {
                    a || (s && (s(), (s = null)), (s = i()), o());
                  }, 150))));
            };
          (window.addEventListener("resize", y),
            window.addEventListener("orientationchange", y));
          let j = document.getElementById("loader") && !window.__loaderFinished,
            N = !!window.__pageTransitionActive;
          if (j || N) {
            (j && window.addEventListener("loaderComplete", w),
              N && window.addEventListener("pageTransitionComplete", w));
            let e = setInterval(() => {
              let t =
                  !window.__loaderFinished && document.getElementById("loader"),
                r = !!window.__pageTransitionActive;
              t || r || (clearInterval(e), w());
            }, 150);
            return () => {
              (clearInterval(e),
                clearTimeout(v),
                window.removeEventListener("resize", y),
                window.removeEventListener("orientationchange", y),
                window.removeEventListener("loaderComplete", w),
                window.removeEventListener("pageTransitionComplete", w),
                s && s());
            };
          }
          return (
            w(),
            () => {
              (clearTimeout(v),
                window.removeEventListener("resize", y),
                window.removeEventListener("orientationchange", y),
                s && s());
            }
          );
        },
        {
          scope: g,
          dependencies: [c, h, m, f, p, b, x],
        },
      ),
      (0, t.jsx)(e, {
        ref: g,
        className: `invisible ${u}`,
        ...v,
        children: s,
      })
    );
  }
  e.s([
    "AnimatedHeading",
    0,
    function ({
      as: e = "h2",
      children: r,
      className: n = "",
      delay: a = 0,
      ...l
    }) {
      return (0, t.jsx)(d, {
        as: e,
        variant: "heading",
        className: n,
        delay: a,
        ...l,
        children: r,
      });
    },
    "AnimatedParagraph",
    0,
    function ({
      as: e = "p",
      children: r,
      className: n = "",
      delay: a = 0,
      ...l
    }) {
      return (0, t.jsx)(d, {
        as: e,
        variant: "paragraph",
        className: n,
        delay: a,
        ...l,
        children: r,
      });
    },
    "default",
    0,
    d,
  ]);
};
