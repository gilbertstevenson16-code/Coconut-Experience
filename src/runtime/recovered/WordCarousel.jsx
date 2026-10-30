// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    o = e.i(65747),
    i = e.i(33809);
  (n.default.registerPlugin(o.useGSAP, i.default),
    e.s([
      "default",
      0,
      function ({
        words: e = [],
        className: a = "",
        wordClassName: l = "px-[0.22em] rounded-[0.1em]",
        textScale: s = 0.72,
        gap: u = 1,
        lift: c = 0.06,
        opticalShift: d = 0.06,
        height: f = 0.8,
        start: p = "top 80%",
        end: h = "top 35%",
        scrub: m = 0.6,
        ...g
      }) {
        let v = (0, r.useRef)(null),
          x = e.map((e) =>
            "string" == typeof e
              ? {
                  text: e,
                  className: "",
                }
              : e,
          );
        return (
          (0, o.useGSAP)(
            () => {
              let e = v.current;
              if (!e) return;
              let t = n.default.utils.toArray(".slot-word", e);
              if (t.length < 2) return;
              if (
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                (n.default.set(t, {
                  y: 0,
                  autoAlpha: 0,
                }),
                  n.default.set(t[t.length - 1], {
                    autoAlpha: 1,
                  }));
                return;
              }
              let r = null,
                o = window.innerWidth,
                a = null,
                l = () => {
                  r && (r.scrollTrigger?.kill(), r.kill(), (r = null));
                  let o = (window.innerWidth * u) / 100,
                    i = t[0].offsetHeight + o,
                    a = (t.length - 1) * i;
                  (t.forEach((e, t) => {
                    n.default.set(e, {
                      y: t * i,
                    });
                  }),
                    (r = n.default.timeline({
                      scrollTrigger: {
                        trigger: e,
                        start: p,
                        end: h,
                        scrub: m,
                        snap: {
                          snapTo: 1 / (t.length - 1),
                          duration: 0.2,
                          ease: "power1.inOut",
                        },
                      },
                      defaults: {
                        ease: "none",
                      },
                    })).to(t, {
                      y: (e) => e * i - a,
                      duration: 1,
                      ease: "none",
                    }));
                };
              l();
              let s = () => {
                  let e = window.innerWidth;
                  e !== o &&
                    ((o = e),
                    clearTimeout(a),
                    (a = setTimeout(() => {
                      (l(), i.default.refresh());
                    }, 150)));
                },
                c = () => {
                  (l(), i.default.refresh());
                };
              return (
                window.addEventListener("resize", s),
                window.addEventListener("orientationchange", s),
                window.addEventListener("loaderComplete", c),
                window.addEventListener("pageTransitionComplete", c),
                () => {
                  (clearTimeout(a),
                    window.removeEventListener("resize", s),
                    window.removeEventListener("orientationchange", s),
                    window.removeEventListener("loaderComplete", c),
                    window.removeEventListener("pageTransitionComplete", c),
                    r && (r.scrollTrigger?.kill(), r.kill()));
                }
              );
            },
            {
              scope: v,
              dependencies: [
                x.map((e) => e.text).join("|"),
                p,
                h,
                m,
                u,
                f,
                s,
                d,
                c,
              ],
            },
          ),
          (
            <span
              ref={v}
              className={`relative inline-block overflow-hidden align-middle isolate ${a}`}
              {...g}
              style={{
                height: `${f}em`,
                lineHeight: `${f}em`,
                position: "relative",
                top: `-${c}em`,
                ...g.style,
              }}
            >
              {
                <span className={"grid"}>
                  {x.map((e, r) => (
                    <span
                      className={`slot-word col-start-1 row-start-1 flex items-center justify-center leading-none whitespace-nowrap will-change-transform ${l} ${e.className ?? ""}`}
                      style={{
                        height: `${f}em`,
                        ...(0 === r
                          ? null
                          : {
                              transform: `translateY(calc(${r} * (${f}em + ${u}vw)))`,
                            }),
                      }}
                      aria-hidden={r !== x.length - 1 || void 0}
                      key={e.text + r}
                    >
                      {
                        <span
                          className={"block"}
                          style={{
                            fontSize: `${s}em`,
                            lineHeight: 1,
                            transform: `translateY(${d}em)`,
                          }}
                        >
                          {e.text}
                        </span>
                      }
                    </span>
                  ))}
                </span>
              }
            </span>
          )
        );
      },
    ]));
};
