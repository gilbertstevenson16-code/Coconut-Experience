// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    a = e.i(65747),
    l = e.i(55803);
  (n.default.registerPlugin(a.useGSAP),
    e.s([
      "default",
      0,
      function ({
        title: e = "Explore Flavors",
        className: i = "",
        entry: s = !1,
        entryDelay: o = 0,
        ...d
      }) {
        let u = (0, r.useRef)(null),
          c = (0, r.useRef)(null),
          m = (0, r.useRef)([]),
          f = e.split(" "),
          h = (0, r.useRef)(0),
          p = (0, r.useCallback)(() => {
            let e = c.current,
              t = u.current;
            if (!e || !t) return;
            ((h.current = e.getTotalLength()),
              n.default.set(e, {
                strokeDasharray: h.current,
              }));
            let r = t.getBoundingClientRect();
            if (r.width && r.height) {
              let t = Math.sqrt((r.width / 208) * (r.height / 74));
              n.default.set(e, {
                strokeWidth: 3 / t,
              });
            }
          }, []);
        (0, r.useEffect)(() => {
          let e = u.current;
          if (!e) return;
          p();
          let t = new ResizeObserver(p);
          return (t.observe(e), () => t.disconnect());
        }, [p]);
        let { contextSafe: x } = (0, a.useGSAP)(
            () => {
              if (!s) return;
              let e = u.current;
              if (e)
                return window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? void n.default.set(e, {
                      autoAlpha: 1,
                    })
                  : (n.default.set(e, {
                      autoAlpha: 0,
                    }),
                    (0, l.onLoaderCue)(
                      () => {
                        c.current &&
                          h.current &&
                          n.default.set(c.current, {
                            strokeDashoffset: h.current,
                          });
                        let t = n.default.timeline();
                        (t.to(e, {
                          autoAlpha: 1,
                          y: 0,
                          duration: 0.6,
                          ease: "power2.out",
                          startAt: {
                            y: 18,
                          },
                        }),
                          c.current &&
                            t.to(
                              c.current,
                              {
                                strokeDashoffset: 0,
                                duration: 0.45,
                                ease: "power2.inOut",
                              },
                              "-=0.35",
                            ));
                      },
                      {
                        delay: o,
                      },
                    ));
            },
            {
              scope: u,
              dependencies: [s, o],
            },
          ),
          v = (0, r.useCallback)(() => {
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              (n.default.killTweensOf(c.current, "opacity"),
              n.default.to(c.current, {
                strokeDashoffset: h.current,
                duration: 0.5,
                ease: "power2.inOut",
                overwrite: "auto",
              }),
              n.default.to(c.current, {
                opacity: 0,
                duration: 0.16,
                delay: 0.34,
                ease: "power2.in",
                overwrite: "auto",
              }),
              n.default.to(m.current.filter(Boolean), {
                yPercent: -50,
                duration: 0.575,
                ease: "expo.out",
                stagger: {
                  each: 0.014,
                  from: "start",
                },
                overwrite: "auto",
              }));
          }, []),
          g = (0, r.useCallback)(() => {
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              (n.default.killTweensOf(c.current, "opacity"),
              n.default.to(c.current, {
                opacity: 1,
                duration: 0.14,
                ease: "power2.out",
                overwrite: "auto",
              }),
              n.default.to(c.current, {
                strokeDashoffset: 0,
                duration: 0.55,
                ease: "power2.inOut",
                overwrite: "auto",
              }),
              n.default.to(m.current.filter(Boolean), {
                yPercent: 0,
                duration: 0.52,
                ease: "expo.out",
                stagger: {
                  each: 0.0115,
                  from: "end",
                },
                overwrite: "auto",
              }));
          }, []);
        return (
          <button
            ref={u}
            type={"button"}
            onPointerEnter={v}
            onPointerLeave={g}
            aria-label={e}
            className={`relative inline-flex cursor-pointer items-center justify-center text-foreground will-change-transform ${i}`}
            {...d}
          >
            {
              <svg
                className={
                  "pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                }
                viewBox={"0 0 208 74"}
                fill={"none"}
                preserveAspectRatio={"none"}
                xmlns={"http://www.w3.org/2000/svg"}
                aria-hidden={"true"}
              >
                {
                  <path
                    ref={c}
                    d={
                      "M118.8 65.7551C118.8 65.7551 9.54145 66.2038 2.20331 40.1869C-5.73315 12.0488 55.2778 1.5 95.5383 1.5C135.799 1.5 195.672 4.08468 205.776 31.8674C219.086 68.4625 44.4656 72.5 44.4656 72.5"
                    }
                    stroke={"currentColor"}
                    strokeWidth={"3"}
                    strokeLinecap={"round"}
                  />
                }
              </svg>
            }
            {
              <span
                aria-hidden={"true"}
                className={
                  "font-patrick-hand relative z-1 flex gap-[0.3em] px-[1.5vw] py-[0.8vw] pb-[1vw]! text-[1.3rem] leading-[1.2] tracking-[-0.04em] whitespace-nowrap max-md:px-6 max-md:py-3 max-md:pb-3.5!"
                }
              >
                {f.map((e, r) => (
                  <span className={"inline-flex"} key={r}>
                    {Array.from(e).map((e, n) => (
                      <span
                        className={
                          "relative inline-block h-[1.55em] -my-[0.175em] overflow-hidden align-bottom"
                        }
                        key={n}
                      >
                        {
                          <span
                            ref={(e) => {
                              let t =
                                f
                                  .slice(0, r)
                                  .reduce((e, t) => e + t.length, 0) + n;
                              return (
                                (m.current[t] = e),
                                () => {
                                  m.current[t] = null;
                                }
                              );
                            }}
                            className={
                              "flex flex-col leading-[1.55] will-change-transform"
                            }
                          >
                            {<span>{e}</span>}
                            {<span>{e}</span>}
                          </span>
                        }
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            }
          </button>
        );
      },
    ]));
};
