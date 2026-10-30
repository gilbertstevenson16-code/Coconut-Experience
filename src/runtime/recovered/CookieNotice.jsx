// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970);
  let a = "palmo_cookie_ok";
  function i({ children: e }) {
    return (
      <span className={"relative inline-flex overflow-hidden"}>
        {
          <span
            className={
              "inline-block transition-transform duration-300 group-hover:-translate-y-full"
            }
          >
            {e}
          </span>
        }
        {
          <span
            aria-hidden={!0}
            className={
              "absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full"
            }
          >
            {e}
          </span>
        }
      </span>
    );
  }
  e.s([
    "default",
    0,
    function () {
      let [e, l] = (0, r.useState)(!1),
        [s, o] = (0, r.useState)(!1),
        u = (0, r.useRef)(null),
        c = (0, r.useRef)(!1);
      return ((0, r.useEffect)(() => {
        let e;
        try {
          let t = window.localStorage.getItem(a);
          if ("1" === t) return;
          e = setTimeout(() => {
            (o(!0), l(!0));
          }, 4500);
        } catch {
          e = setTimeout(() => {
            (o(!0), l(!0));
          }, 4500);
        }
        return () => e && clearTimeout(e);
      }, []),
      (0, r.useEffect)(() => {
        let t = u.current;
        t &&
          (e
            ? ((c.current = !0),
              n.default.killTweensOf(t),
              n.default.set(t, {
                opacity: 0,
                y: 45,
                scale: 0.98,
                pointerEvents: "auto",
              }),
              n.default.to(t, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power4.out",
                onComplete: () => {
                  c.current = !1;
                },
              }))
            : s &&
              ((c.current = !0),
              n.default.killTweensOf(t),
              n.default.to(t, {
                opacity: 0,
                y: 45,
                scale: 0.98,
                duration: 0.45,
                ease: "power2.inOut",
                onComplete: () => {
                  ((c.current = !1), o(!1));
                },
              })));
      }, [e, s]),
      !1) ? (
        <aside
          className={
            "fixed bottom-6 max-md:bottom-4 left-1/2 -translate-x-1/2 z-900 w-auto max-w-[90vw] pointer-events-none select-none font-patrick-hand"
          }
          role={"dialog"}
          aria-label={"Cookie consent banner"}
        >
          {
            <div
              ref={u}
              className={
                "pointer-events-auto h-11 max-md:h-auto flex items-center justify-between gap-3 bg-background/95 backdrop-blur-md text-foreground border border-foreground/20 rounded-md shadow-xl px-3 py-1.5 max-md:flex-col max-md:items-start max-md:p-3"
              }
            >
              {
                <div className={"flex items-center gap-2"}>
                  {
                    <span
                      className={
                        "flex size-7 shrink-0 items-center justify-center rounded-md bg-beige text-foreground border border-foreground/15"
                      }
                    >
                      {
                        <svg
                          aria-hidden={"true"}
                          className={"size-4 shrink-0 text-foreground"}
                          viewBox={"0 0 24 24"}
                          fill={"none"}
                          stroke={"currentColor"}
                          strokeWidth={"2"}
                          strokeLinecap={"round"}
                          strokeLinejoin={"round"}
                        >
                          {
                            <path
                              d={
                                "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
                              }
                            />
                          }
                          {<path d={"M8.5 8.5v.01"} />}
                          {<path d={"M16 15.5v.01"} />}
                          {<path d={"M12 12v.01"} />}
                          {<path d={"M11 17v.01"} />}
                          {<path d={"M7 14v.01"} />}
                        </svg>
                      }
                    </span>
                  }
                  {
                    <p
                      className={
                        "text-sm text-foreground/85 whitespace-nowrap max-md:whitespace-normal leading-none"
                      }
                    >
                      {"We use cookies to improve your experience."}
                    </p>
                  }
                </div>
              }
              {
                <div
                  className={
                    "flex items-center gap-1.5 shrink-0 max-md:w-full max-md:justify-end"
                  }
                >
                  {
                    <button
                      type={"button"}
                      onClick={() => {
                        l(!1);
                      }}
                      className={
                        "group cursor-pointer uppercase tracking-wider text-xs px-2.5 h-7 rounded-md text-foreground/70 hover:text-foreground hover:bg-light-beige/50 transition-colors duration-200 flex items-center justify-center"
                      }
                    >
                      {(0, t.jsx)(i, {
                        children: "Later",
                      })}
                    </button>
                  }
                  {
                    <button
                      type={"button"}
                      onClick={() => {
                        try {
                          window.localStorage.setItem(a, "1");
                        } catch {}
                        l(!1);
                      }}
                      className={
                        "group cursor-pointer uppercase tracking-wider text-xs px-3.5 h-7 rounded-md bg-beige border border-foreground/20 text-foreground hover:bg-foreground hover:text-beige hover:border-foreground transition-colors duration-200 shadow-xs font-semibold flex items-center justify-center"
                      }
                    >
                      {(0, t.jsx)(i, {
                        children: "Okay!",
                      })}
                    </button>
                  }
                </div>
              }
            </div>
          }
        </aside>
      ) : null;
    },
  ]);
};
