// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(69),
    o = e.i(56348),
    i = e.i(89970),
    a = e.i(33809),
    l = e.i(42982),
    s = e.i(65747),
    u = e.i(51167);
  i.default.registerPlugin(a.default);
  i.default.registerPlugin(a.default, l.default);
  let c = [
    {
      at: 0.9,
      p: 0,
      label: "Whole Promptedsite",
    },
    {
      at: 1.9,
      p: 0.34,
      label: "Shaking",
    },
    {
      at: 2.8,
      p: 0.62,
      label: "Cracked open",
    },
    {
      at: 4.2,
      p: 1,
      label: "Canned",
    },
  ];
  e.s(
    [
      "default",
      0,
      function () {
        let e = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          f = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          m = (0, r.useRef)(null),
          g = (0, r.useRef)(null),
          v = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          w = (0, r.useRef)(null),
          y = (0, r.useRef)(null);
        return (
          (0, s.useGSAP)(
            () => {
              let t = null,
                r = window.innerWidth,
                n = null,
                o = () => {
                  let t = void 0 ?? [],
                    r = l.default.create(f.current, {
                      type: "chars",
                      charsClass: "inline-block will-change-transform",
                      mask: "chars",
                    }),
                    n = l.default.create(p.current, {
                      type: "lines",
                      linesClass: "will-change-transform",
                      mask: "lines",
                    }),
                    o = l.default.create(h.current, {
                      type: "lines",
                      linesClass: "will-change-transform",
                      mask: "lines",
                    }),
                    s = {
                      p: 0,
                    },
                    d = -1,
                    b = null,
                    k = (e = 0) => {
                      let t = s.p;
                      (i.default.set(x.current, {
                        width: `${100 * t}%`,
                      }),
                        (y.current.textContent = String(
                          Math.round(100 * t),
                        ).padStart(3, "0")));
                      let r = 0;
                      for (; r + 1 < c.length && e > c[r].at;) r++;
                      if (r === d) return;
                      let n = -1 === d;
                      if (((d = r), n)) {
                        w.current.textContent = c[r].label;
                        return;
                      }
                      (b?.kill(),
                        (b = i.default
                          .timeline()
                          .to(w.current, {
                            autoAlpha: 0,
                            y: -6,
                            duration: 0.15,
                            ease: "power2.in",
                          })
                          .add(() => (w.current.textContent = c[d].label))
                          .fromTo(
                            w.current,
                            {
                              autoAlpha: 0,
                              y: 6,
                            },
                            {
                              autoAlpha: 1,
                              y: 0,
                              duration: 0.24,
                              ease: "power2.out",
                            },
                          )));
                    };
                  (i.default.set([...r.chars, ...n.lines, ...o.lines], {
                    yPercent: 115,
                  }),
                    i.default.set(m.current, {
                      autoAlpha: 0,
                      y: 12,
                    }),
                    i.default.set(g.current, {
                      autoAlpha: 0,
                      y: 10,
                    }),
                    i.default.set(v.current, {
                      scaleX: 0,
                    }),
                    k());
                  let T = i.default.timeline({
                    paused: !0,
                    onUpdate: () => k(T.time()),
                  });
                  (c.slice(1).forEach((e, t) => {
                    let r = c[t];
                    T.to(
                      s,
                      {
                        p: e.p,
                        duration: e.at - r.at,
                        ease: "power1.inOut",
                      },
                      r.at,
                    );
                  }),
                    T.to(
                      g.current,
                      {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out",
                      },
                      0,
                    )
                      .to(
                        v.current,
                        {
                          scaleX: 1,
                          duration: 0.9,
                          ease: "power3.inOut",
                        },
                        0,
                      )
                      .addLabel("ready", 0.9)
                      .addLabel("shaking", 1.9),
                    T.to(
                      r.chars,
                      {
                        yPercent: 0,
                        duration: 0.9,
                        ease: "expo.out",
                        stagger: {
                          each: 0.035,
                          from: "center",
                        },
                      },
                      1.9,
                    ).addLabel("burst", 2.8),
                    T.to(
                      n.lines,
                      {
                        yPercent: 0,
                        duration: 0.7,
                        stagger: 0.08,
                        ease: "power3.out",
                      },
                      2.8 - 0.2,
                    )
                      .to(
                        o.lines,
                        {
                          yPercent: 0,
                          duration: 0.7,
                          stagger: 0.08,
                          ease: "power3.out",
                        },
                        2.8 + 0.05,
                      )
                      .to(
                        m.current,
                        {
                          autoAlpha: 1,
                          y: 0,
                          duration: 0.5,
                          ease: "power2.out",
                        },
                        3.15,
                      )
                      .addLabel("done", 4.2),
                    T.to(
                      t,
                      {
                        timeScale: 1.5,
                        duration: 0.8,
                        ease: "power2.out",
                      },
                      0.9,
                    )
                      .to(
                        t,
                        {
                          timeScale: 3,
                          duration: 0.3,
                          ease: "power2.out",
                        },
                        1.9,
                      )
                      .to(
                        t,
                        {
                          timeScale: 1,
                          duration: 2.6,
                          ease: "power1.inOut",
                        },
                        1.9 + 0.3,
                      ));
                  let S = null,
                    E = (e, t) => {
                      (S?.kill(),
                        (S = T.tweenTo(e, {
                          ease: "none",
                          ...t,
                        })));
                    },
                    C = (e, t) => {
                      let r = T.labels[e] - T.time();
                      r <= 0 ||
                        E(e, {
                          duration: Math.min(
                            r,
                            t > 0 ? Math.max(t - 0.15, 0.1) : 1 / 0,
                          ),
                        });
                    },
                    M = [
                      (0, u.onSeq)(u.SEQ.shake, () => C("shaking")),
                      (0, u.onSeq)(u.SEQ.burst, (e) =>
                        C("burst", e.detail?.budget),
                      ),
                      (0, u.onSeq)(u.SEQ.can, (e) =>
                        C("done", e.detail?.budget),
                      ),
                      (0, u.onSeq)(u.SEQ.reset, () => {
                        let e = T.time();
                        e > 0 &&
                          E(0, {
                            duration: e / 1.2,
                            ease: "none",
                          });
                      }),
                    ],
                    N = a.default.create({
                      trigger: e.current,
                      start: "top top",
                      onEnter: () => C("ready"),
                    }),
                    _ = a.default.create({
                      trigger: e.current,
                      start: "bottom bottom",
                      onEnter: () => C("done"),
                      onRefresh: (e) => 1 === e.progress && C("done"),
                    });
                  return () => {
                    (M.forEach((e) => e()),
                      N.kill(),
                      _.kill(),
                      S?.kill(),
                      b?.kill(),
                      T.kill(),
                      i.default.killTweensOf(t),
                      r.revert(),
                      n.revert(),
                      o.revert());
                  };
                };
              t = o();
              let s = () => {
                let e = window.innerWidth;
                e !== r &&
                  ((r = e),
                  clearTimeout(n),
                  (n = setTimeout(() => {
                    (t && (t(), (t = null)), (t = o()), a.default.refresh());
                  }, 150)));
              };
              return (
                window.addEventListener("resize", s),
                window.addEventListener("orientationchange", s),
                () => {
                  (clearTimeout(n),
                    window.removeEventListener("resize", s),
                    window.removeEventListener("orientationchange", s),
                    t && t());
                }
              );
            },
            {
              scope: e,
            },
          ),
          (
            <section
              ref={e}
              id={"sequence-animation"}
              className={
                "h-[calc(100vh+20vw)] max-md:h-[calc(100dvh+20vw)] bg-background mt-[-20vw] w-full relative"
              }
            >
              {
                <div
                  className={
                    "sticky top-0 h-screen max-md:h-[100dvh] w-full overflow-hidden"
                  }
                >
                  {
                    <div
                      ref={d}
                      className={
                        "relative z-10 h-full paddx max-md:flex max-md:flex-col max-md:items-center max-md:pt-[95px] max-md:pb-[85px] max-md:justify-between max-md:text-center"
                      }
                    >
                      {
                        <div
                          className={
                            "absolute top-[7vw] left-[3vw] max-md:static max-md:flex max-md:w-full max-md:flex-col max-md:items-center"
                          }
                        >
                          {
                            <h2
                              ref={f}
                              className={
                                "text180 uppercase whitespace-nowrap max-md:text-[11vw] max-md:leading-none max-md:tracking-tight max-md:text-center"
                              }
                            >
                              {"Promptedsite"}
                            </h2>
                          }
                          {
                            <p
                              ref={p}
                              className={
                                "mt-[2vw] w-[27vw] text36 font-medium max-md:mt-1.5 max-md:w-full max-md:max-w-[78vw] max-md:text-center max-md:text-[3.3vw] max-md:leading-snug max-md:opacity-85"
                              }
                            >
                              {
                                "One green Promptedsite coconut, opened and pressed within a day of harvest. 100% raw, with 500mg of potassium."
                              }
                            </p>
                          }
                        </div>
                      }
                      {
                        <div
                          className={
                            "hidden max-md:block max-md:flex-1 max-md:min-h-[25dvh]"
                          }
                        />
                      }
                      {
                        <div
                          ref={g}
                          className={
                            "absolute bottom-[3vw] left-[3vw] w-[24vw] pointer-events-none max-md:static max-md:w-full max-md:px-1"
                          }
                        >
                          {
                            <div
                              className={
                                "flex items-end justify-between mb-[.6vw] font-khand font-bold uppercase leading-none max-md:mb-1.5"
                              }
                            >
                              {
                                <span
                                  ref={w}
                                  className={"text36 max-md:text-[4.5vw]"}
                                >
                                  {"Whole Promptedsite"}
                                </span>
                              }
                              {
                                <span
                                  ref={y}
                                  className={
                                    "tabular-nums text36 max-md:text-[4.5vw]"
                                  }
                                >
                                  {"000"}
                                </span>
                              }
                            </div>
                          }
                          {
                            <div
                              ref={v}
                              className={
                                "h-[.55vw] min-h-1.5 w-full rounded-full bg-foreground/12 origin-left relative overflow-hidden max-md:h-2.5"
                              }
                            >
                              {
                                <span
                                  ref={x}
                                  className={
                                    "absolute inset-y-0 left-0 w-0 rounded-full bg-foreground"
                                  }
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                      {
                        <div
                          className={
                            "absolute bottom-[3vw] right-[3vw] w-[24vw] text-right max-md:hidden"
                          }
                        >
                          {
                            <p ref={h} className={"text36 font-medium"}>
                              {
                                "Six flavours, each one pressed with real fruit. Mango, lychee, guava and three more worth meeting."
                              }
                            </p>
                          }
                          {
                            <n.TransitionLink
                              ref={m}
                              href={"/flavours"}
                              aria-label={"Explore all flavours"}
                              className={"mt-[.8vw] inline-block"}
                            >
                              {<o.default title={"Explore Flavors"} />}
                            </n.TransitionLink>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            </section>
          )
        );
      },
    ],
    89337,
  );
};
