// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(70703),
    a = e.i(89970),
    l = e.i(56348),
    i = e.i(84977),
    s = e.i(15216),
    o = e.i(59245),
    d = e.i(61598),
    u = e.i(69);
  let c = (0, n.default)(() => e.A(9349), {
      loadableGenerated: {
        modules: [98988],
      },
      ssr: !1,
    }),
    m = () => (
      <svg
        className={"h-full w-full"}
        viewBox={"0 0 47 41"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        {
          <path
            d={"M43.2324 21.0645H4.23242M21.6499 38L4.23242 21.0645L21.6499 3"}
            stroke={"currentColor"}
            strokeWidth={"6"}
            strokeLinecap={"round"}
          />
        }
      </svg>
    );
  e.s([
    "default",
    0,
    function ({ paddingTop: e }) {
      let n = (0, r.useRef)(null),
        [f, h] = (0, r.useState)(0),
        p = d.FLAVOURS[f],
        x = (0, r.useRef)(0),
        v = (0, r.useRef)(!1),
        g = (0, r.useRef)(null),
        w = (0, r.useRef)(null),
        b = (0, r.useRef)(0),
        y = (0, r.useRef)(0),
        j = (0, r.useRef)(!1),
        N = (0, r.useRef)(null);
      (0, r.useEffect)(() => () => clearTimeout(N.current), []);
      let k = (0, r.useCallback)((e) => {
        if (j.current) return;
        let t = (y.current + e + d.FLAVOURS.length) % d.FLAVOURS.length,
          r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        ((y.current = t), (b.current = t), h(t));
        let n = g.current,
          l = w.current;
        if (r)
          (a.default.set(n, {
            backgroundColor: d.FLAVOURS[t].color,
          }),
            a.default.set(l, {
              clipPath: "circle(0% at 50% 50%)",
            }));
        else {
          a.default.killTweensOf(l);
          let e = l.dataset.pending;
          (e &&
            a.default.set(n, {
              backgroundColor: e,
            }),
            (l.dataset.pending = d.FLAVOURS[t].color),
            a.default.set(l, {
              backgroundColor: d.FLAVOURS[t].color,
              clipPath: "circle(0% at 50% 50%)",
            }),
            a.default.to(l, {
              clipPath: "circle(75% at 50% 50%)",
              duration: 1.15,
              ease: "expo.out",
              onComplete: () => {
                (a.default.set(n, {
                  backgroundColor: d.FLAVOURS[t].color,
                }),
                  a.default.set(l, {
                    clipPath: "circle(0% at 50% 50%)",
                  }),
                  delete l.dataset.pending);
              },
            }));
        }
        r ||
          ((j.current = !0),
          (x.current += e),
          clearTimeout(N.current),
          (N.current = setTimeout(() => {
            j.current = !1;
          }, 1150)));
      }, []);
      return (
        <section
          ref={n}
          id={"cta"}
          className={`min-h-screen max-md:h-auto shrink-0 relative w-full z-10 bg-background paddx py-[4vw] pb-[8vw] max-md:pt-[8vw] max-md:pb-[20vw] flex items-center ${e}`}
        >
          {
            <div
              className={
                "relative z-20 h-full min-h-[70vh] max-md:h-auto w-full flex max-md:flex-col-reverse gap-[1.5vw] max-md:gap-[5vw]"
              }
            >
              {
                <div
                  className={
                    "relative w-1/2 max-md:w-full min-h-[70vh] max-md:min-h-0 max-md:h-[110vw] overflow-hidden rounded-[2vw] max-md:rounded-[6vw] border-4 border-foreground/60 bg-beige px-[4vw] py-[3vw] max-md:px-[7vw] max-md:py-[8vw] flex flex-col justify-center max-md:items-center max-md:text-center"
                  }
                >
                  {
                    <span
                      className={
                        "absolute left-[1.5vw] top-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute right-[1.5vw] top-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute bottom-[1.5vw] left-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute bottom-[1.5vw] right-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <o.AnimatedParagraph
                      delay={0.1}
                      className={
                        "font-patrick-hand text32 uppercase opacity-70"
                      }
                    >
                      {"straight from the shell"}
                    </o.AnimatedParagraph>
                  }
                  {
                    <o.AnimatedHeading
                      as={"h2"}
                      className={
                        "text180 mt-[min(1.5vw,2vh)] max-md:mt-[4vw] uppercase"
                      }
                    >
                      {"THE PROMPTEDSITE BOX OF HEALTH."}
                    </o.AnimatedHeading>
                  }
                  {
                    <o.AnimatedParagraph
                      delay={0.25}
                      className={
                        "text36 mt-[min(2vw,2.5vh)] max-md:mt-[5vw] w-[85%] max-md:w-full font-medium"
                      }
                    >
                      {
                        "Chilled, clean, ready to sip. Order before the batch runs dry."
                      }
                    </o.AnimatedParagraph>
                  }
                  {
                    <div
                      className={
                        "mt-[min(3vw,3.5vh)] max-md:mt-[8vw]  flex items-center gap-[2vw] max-md:gap-[2vw]"
                      }
                    >
                      {
                        <u.TransitionLink href={"/flavours"}>
                          {<l.default title={"Get Your Drink"} />}
                        </u.TransitionLink>
                      }
                      {
                        <u.TransitionLink href={"/flavours"}>
                          {<l.default title={"Explore Flavors"} />}
                        </u.TransitionLink>
                      }
                    </div>
                  }
                </div>
              }
              {
                <div
                  ref={g}
                  style={{
                    backgroundColor: d.FLAVOURS[0].color,
                  }}
                  className={
                    "relative w-1/2 max-md:w-full min-h-[70vh] max-md:min-h-0 max-md:h-[110vw] overflow-hidden rounded-[2vw] max-md:rounded-[6vw] border-4 border-foreground/60 flex flex-col"
                  }
                >
                  {
                    <span
                      ref={w}
                      aria-hidden={!0}
                      style={{
                        clipPath: "circle(0% at 50% 50%)",
                      }}
                      className={
                        "pointer-events-none absolute inset-0 will-change-[clip-path]"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute left-[1.5vw] top-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute right-[1.5vw] top-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute bottom-[1.5vw] left-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <span
                      className={
                        "absolute bottom-[1.5vw] right-[1.5vw] size-[1vw] max-md:size-[3vw] rounded-full bg-foreground"
                      }
                    />
                  }
                  {
                    <p
                      style={{
                        color: p.bgColor,
                      }}
                      className={
                        "relative z-10 pt-[3vw] max-md:pt-[8vw] text-center font-patrick-hand text32 uppercase transition-colors duration-700"
                      }
                    >
                      {p.fullName}
                    </p>
                  }
                  {
                    <div
                      onPointerEnter={() => {
                        v.current = !0;
                      }}
                      onPointerLeave={() => {
                        v.current = !1;
                      }}
                      className={
                        "relative flex-1 min-h-[42vh] max-md:min-h-0 w-full"
                      }
                    >
                      {(0, t.jsx)(c, {
                        targetRef: b,
                        spinRef: x,
                        hoverRef: v,
                      })}
                      {
                        <s.default
                          onClick={() => k(-1)}
                          aria-label={"Previous flavour"}
                          bgColor={"var(--beige)"}
                          className={
                            "absolute! left-[2vw] max-md:left-[5vw] top-1/2 -translate-y-1/2 z-20 size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                          }
                        >
                          {
                            <div
                              className={
                                "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 transition-colors duration-500"
                              }
                            >
                              {(0, t.jsx)(m, {})}
                            </div>
                          }
                        </s.default>
                      }
                      {
                        <s.default
                          onClick={() => k(1)}
                          aria-label={"Next flavour"}
                          bgColor={"var(--beige)"}
                          className={
                            "absolute! right-[2vw] max-md:right-[5vw] top-1/2 -translate-y-1/2 z-20 size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                          }
                        >
                          {
                            <div
                              className={
                                "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 rotate-180 transition-colors duration-500"
                              }
                            >
                              {(0, t.jsx)(m, {})}
                            </div>
                          }
                        </s.default>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          }
          {
            <div
              className={
                "absolute translate-y-[7.5vw] bottom-0 left-0 w-full h-fit pointer-events-none z-10"
              }
            >
              {<i.default bgColor={"bg-background"} />}
            </div>
          }
        </section>
      );
    },
  ]);
};
