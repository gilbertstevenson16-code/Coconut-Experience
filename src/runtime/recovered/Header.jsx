// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    a = e.i(65747),
    i = e.i(55667),
    l = e.i(14380),
    s = e.i(69);
  n.default.registerPlugin(a.useGSAP);
  let o = "contact@promptedsite.com",
    u = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Story",
        href: "/story",
      },
      {
        label: "Flavours",
        href: "/flavours",
      },
      {
        label: "Benefits",
        href: "/#benefits",
      },
      {
        label: "Contact",
        href: "/#cta",
      },
    ];
  function c({ open: e, onClose: d }) {
    let f = (0, r.useRef)(null),
      m = (0, r.useRef)([]),
      h = (0, r.useRef)([]),
      p = (0, r.useRef)(null),
      [x, g] = (0, r.useState)(!1),
      v = (0, r.useRef)(null),
      b = (0, i.useLenis)(),
      { transitionTo: w } = (0, s.usePageTransition)();
    ((0, a.useGSAP)(
      () => {
        let e = n.default.timeline({
          paused: !0,
        });
        (e
          .set(f.current, {
            autoAlpha: 1,
          })
          .fromTo(
            f.current,
            {
              clipPath: "ellipse(75% 0% at 50% -5%)",
            },
            {
              clipPath: "ellipse(105% 145% at 50% -5%)",
              duration: 1,
              ease: "power3.inOut",
            },
          )
          .fromTo(
            m.current,
            {
              yPercent: 165,
              rotate: 4,
            },
            {
              yPercent: 0,
              rotate: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.06,
            },
            "-=0.45",
          )
          .fromTo(
            h.current,
            {
              y: 20,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.08,
            },
            "-=0.5",
          ),
          (p.current = e));
      },
      {
        scope: f,
      },
    ),
      (0, a.useGSAP)(
        () => {
          let t = p.current;
          t &&
            (e
              ? (b?.stop(), t.timeScale(1).play())
              : (b?.start(), t.timeScale(1.4).reverse()));
        },
        {
          dependencies: [e, b],
        },
      ));
    let y = async () => {
      try {
        await navigator.clipboard.writeText(o);
      } catch {
        let e = document.createElement("textarea");
        ((e.value = o),
          e.setAttribute("readonly", ""),
          (e.style.position = "fixed"),
          (e.style.opacity = "0"),
          document.body.appendChild(e),
          e.select(),
          document.execCommand("copy"),
          document.body.removeChild(e));
      }
      (g(!0),
        clearTimeout(v.current),
        (v.current = setTimeout(() => g(!1), 2e3)));
    };
    return (
      (0, r.useEffect)(() => {
        if (!e) return;
        let t = f.current;
        if (!t) return;
        let r = t.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        r.length && r[0]?.focus();
        let n = (e) => {
          if ("Escape" === e.key) return void d();
          if ("Tab" === e.key) {
            let r = Array.from(
              t.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'),
            );
            if (!r.length) return;
            let n = r[0],
              a = r[r.length - 1];
            e.shiftKey && document.activeElement === n
              ? (e.preventDefault(), a.focus())
              : e.shiftKey ||
                document.activeElement !== a ||
                (e.preventDefault(), n.focus());
          }
        };
        return (
          window.addEventListener("keydown", n),
          () => window.removeEventListener("keydown", n)
        );
      }, [e, d]),
      (
        <div
          ref={f}
          aria-hidden={!e}
          className={`fixed inset-0 z-800 bg-foreground text-light-beige ${e ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{
            clipPath: "ellipse(75% 0% at 50% -5%)",
            visibility: "hidden",
          }}
        >
          {
            <div
              className={"pointer-events-none absolute inset-0 overflow-hidden"}
              aria-hidden={!0}
            >
              {
                <div
                  className={
                    "absolute left-1/2 top-[-15vw] size-[60vw] -translate-x-1/2 rounded-full opacity-25 blur-[8vw]"
                  }
                  style={{
                    background:
                      "radial-gradient(circle, var(--gold), transparent 70%)",
                  }}
                />
              }
              {
                <l.default
                  interactive={e}
                  intensity={1.4}
                  className={
                    "absolute bottom-[-10vw] max-md:bottom-[-14vh] left-1/2 w-[60vw] max-md:w-[210vw] -translate-x-1/2 max-md:-translate-x-[57%] opacity-10"
                  }
                />
              }
            </div>
          }
          {
            <div
              className={
                "paddx relative z-10 flex h-full w-full flex-col items-center justify-between py-[6vw] max-md:py-[8vh]"
              }
            >
              {
                <nav
                  className={"flex flex-1 flex-col items-center justify-center"}
                >
                  {u.map((r, a) => (
                    <a
                      href={r.href}
                      onClick={(e) => {
                        var t;
                        return (
                          (t = r.href),
                          void (e.preventDefault(),
                          d(),
                          n.default.delayedCall(0.4, () => w(t)))
                        );
                      }}
                      tabIndex={e ? 0 : -1}
                      className={
                        "group flex justify-center overflow-hidden px-[0.5vw] pb-[0.18em] pt-[0.04em] [margin-block:-0.13em]"
                      }
                      style={{
                        fontSize: "min(8vw, 13vh)",
                      }}
                      data-menu-link={!0}
                      key={r.label}
                    >
                      {
                        <span
                          ref={(e) => (m.current[a] = e)}
                          className={"block"}
                        >
                          {
                            <span
                              className={
                                "relative block whitespace-nowrap text150"
                              }
                              style={{
                                fontSize: "inherit",
                                lineHeight: 1,
                              }}
                            >
                              {<span className={"block"}>{r.label}</span>}
                              {
                                <span
                                  aria-hidden={!0}
                                  className={
                                    "absolute inset-0 block text-background [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:[clip-path:inset(0_0_0_0)]"
                                  }
                                >
                                  {r.label}
                                </span>
                              }
                            </span>
                          }
                        </span>
                      }
                    </a>
                  ))}
                </nav>
              }
              {
                <div
                  ref={(e) => (h.current[0] = e)}
                  className={
                    "flex w-full flex-col items-center gap-[0.2vw] max-md:gap-1"
                  }
                >
                  {
                    <p className={"text36 font-patrick-hand text-beige"}>
                      {"Say hello"}
                    </p>
                  }
                  {
                    <div
                      className={"flex items-center gap-[0.8vw] max-md:gap-2"}
                    >
                      {
                        <a
                          href={`mailto:${o}`}
                          tabIndex={e ? 0 : -1}
                          className={
                            "text32 transition-colors duration-300 hover:text-beige"
                          }
                        >
                          {o}
                        </a>
                      }
                      {
                        <button
                          type={"button"}
                          onClick={y}
                          tabIndex={e ? 0 : -1}
                          aria-label={x ? "Email copied" : `Copy ${o}`}
                          className={`group relative flex size-[2vw] max-md:size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border transition-all duration-300 active:scale-90 ${x ? "border-beige bg-beige text-foreground" : "border-light-beige/40 text-light-beige hover:border-beige hover:bg-light-beige hover:text-foreground"}`}
                        >
                          {
                            <svg
                              viewBox={"0 0 24 24"}
                              fill={"none"}
                              stroke={"currentColor"}
                              strokeWidth={"2"}
                              strokeLinecap={"round"}
                              strokeLinejoin={"round"}
                              className={`absolute size-[1.1vw] max-md:size-4 transition-all duration-300 ${x ? "scale-50 opacity-0" : "scale-100 opacity-100"}`}
                              aria-hidden={!0}
                            >
                              {
                                <rect
                                  x={"9"}
                                  y={"9"}
                                  width={"13"}
                                  height={"13"}
                                  rx={"2"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                                  }
                                />
                              }
                            </svg>
                          }
                          {
                            <svg
                              viewBox={"0 0 24 24"}
                              fill={"none"}
                              stroke={"currentColor"}
                              strokeWidth={"2.5"}
                              strokeLinecap={"round"}
                              strokeLinejoin={"round"}
                              className={`absolute size-[1.1vw] max-md:size-4 transition-all duration-300 ${x ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                              aria-hidden={!0}
                            >
                              {<path d={"M20 6 9 17l-5-5"} />}
                            </svg>
                          }
                          {
                            <span
                              className={`pointer-events-none absolute bottom-[calc(100%+0.5vw)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-beige px-[0.6vw] py-[0.2vw] font-patrick-hand text-foreground transition-all duration-300 ${x ? "translate-y-0 opacity-100" : "translate-y-[0.4vw] opacity-0"}`}
                              style={{
                                fontSize: "min(0.9rem, 2vh)",
                              }}
                            >
                              {"Copied!"}
                            </span>
                          }
                        </button>
                      }
                    </div>
                  }
                  {
                    <span
                      className={"sr-only"}
                      role={"status"}
                      aria-live={"polite"}
                    >
                      {x ? "Email copied to clipboard" : ""}
                    </span>
                  }
                </div>
              }
            </div>
          }
        </div>
      )
    );
  }
  var d = e.i(52086),
    f = e.i(55803);
  e.s(
    [
      "default",
      0,
      function () {
        let [e, a] = (0, r.useState)(!1),
          { count: i, ready: l, openCart: o, lastAdded: u } = (0, d.useCart)(),
          m = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          p =
            (function ({ band: e = 0 } = {}) {
              let [t, a] = (0, r.useState)(!1);
              return (
                (0, r.useEffect)(() => {
                  let t = (e) => {
                      let t = e.getAttribute("data-nav-dark");
                      if (!t) return [0, 0];
                      let [r, n] = t.trim().split(/\s+/).map(Number);
                      return Number.isFinite(r)
                        ? [r, Number.isFinite(n) ? n : r]
                        : [0, 0];
                    },
                    r = new Set(),
                    i = null,
                    l = () => {
                      let n =
                          0.5 *
                          (e ||
                            document
                              .querySelector("nav.fixed")
                              ?.getBoundingClientRect().height ||
                            72),
                        l = window.innerWidth / 100,
                        s = !1;
                      for (let e of r) {
                        let r = e.getBoundingClientRect(),
                          [a, i] = t(e);
                        if (r.top + a * l <= n && r.bottom - i * l > n) {
                          s = !0;
                          break;
                        }
                      }
                      s !== i && ((i = s), a(s));
                    },
                    s = document.querySelectorAll("[data-nav-dark]"),
                    o = new IntersectionObserver(
                      (e) => {
                        for (let t of e)
                          t.isIntersecting
                            ? r.add(t.target)
                            : r.delete(t.target);
                      },
                      {
                        threshold: 0,
                        rootMargin: "100px 0px 0px 0px",
                      },
                    );
                  return (
                    s.forEach((e) => o.observe(e)),
                    n.default.ticker.add(l),
                    l(),
                    () => {
                      (o.disconnect(), n.default.ticker.remove(l));
                    }
                  );
                }, [e]),
                t
              );
            })() || e;
        return (
          (0, r.useLayoutEffect)(() => {
            let e = h.current;
            if (e)
              return window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? void n.default.set(e, {
                    yPercent: 0,
                  })
                : (n.default.set(e, {
                    yPercent: -120,
                  }),
                  (0, f.onLoaderCue)(
                    () => {
                      n.default.to(e, {
                        yPercent: 0,
                        duration: 0.85,
                        ease: "power3.out",
                      });
                    },
                    {
                      delay: 0.35,
                    },
                  ));
          }, []),
          (0, r.useEffect)(() => {
            u &&
              m.current &&
              n.default.fromTo(
                m.current,
                {
                  scale: 1,
                },
                {
                  scale: 1.3,
                  duration: 0.22,
                  ease: "sine.out",
                  yoyo: !0,
                  repeat: 1,
                },
              );
          }, [u]),
          (0, r.useEffect)(() => {
            if (!e) return;
            let t = (e) => "Escape" === e.key && a(!1);
            return (
              window.addEventListener("keydown", t),
              () => window.removeEventListener("keydown", t)
            );
          }, [e]),
          (
            <t.Fragment>
              {(0, t.jsx)(c, {
                open: e,
                onClose: () => a(!1),
              })}
              {
                <nav
                  ref={h}
                  className={
                    "fixed top-0 paddx flex overflow-x-hidden gap-[1vw] items-center justify-between py-[1.5vw] left-0 w-full z-900 max-md:py-4"
                  }
                >
                  {
                    <s.TransitionLink
                      href={"/"}
                      aria-label={"Home"}
                      className={`size-[4vw] max-md:size-11 flex items-center justify-center transition-colors duration-500 ${p ? "text-light-beige" : "text-foreground"}`}
                    >
                      {
                        <svg
                          viewBox={"0 0 554 588"}
                          fill={"none"}
                          xmlns={"http://www.w3.org/2000/svg"}
                          className={"block size-full overflow-visible"}
                          aria-hidden={!0}
                        >
                          {
                            <g clipPath={"url(#nav-palm-clip)"}>
                              {
                                <path
                                  d={
                                    "M277.092 287.522L245.263 399.581L218.361 390.494L239.606 419.495L201.243 554.522C168.118 513.043 154.848 454.355 170.874 397.958C186.897 341.53 228.253 301.325 277.092 287.522Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M103.415 239.474C157.405 208.979 218.871 215.871 273.502 251.532L111.253 343.181L93.7865 296.4L90.1138 355.127L2.44079e-05 406.036C13.6111 331.805 49.4243 269.968 103.415 239.474Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M208.565 133.999L163.197 163.698L124.48 138.82L144.267 92.6644L98.9187 122.376L18.5067 70.6849C67.6015 28.2433 133.909 20.2124 190.768 56.7573C247.628 93.3141 279.895 164.727 279.238 238.309L188.778 180.141L208.565 133.999Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M396.393 71.7699L422.723 105.798L302.498 245.312C288.192 180.678 303.813 106.961 347.994 55.7056C392.172 4.43934 453.144 -10.6948 505.07 10.2686L442.601 82.755L396.393 71.7699Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M449.012 222.22C500.592 240.23 537.353 290.902 548.572 350.682L490.342 330.346L481.041 295.881L474.335 324.775L422.226 306.586L411.391 266.372L403.553 300.076L309.091 267.121C344.373 223.573 397.414 204.232 449.012 222.22Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                              {
                                <path
                                  d={
                                    "M304.516 289.092L319.911 283.862C395.457 361.945 393.499 553.082 393.499 553.082L337.396 540.843C362.958 447.172 314.664 307.33 304.516 289.092Z"
                                  }
                                  fill={"currentColor"}
                                  fillOpacity={"1"}
                                />
                              }
                            </g>
                          }
                          {
                            <defs>
                              {
                                <clipPath id={"nav-palm-clip"}>
                                  {
                                    <rect
                                      width={"553.217"}
                                      height={"587.272"}
                                      fill={"white"}
                                      transform={"matrix(-1 0 0 1 553.217 0)"}
                                    />
                                  }
                                </clipPath>
                              }
                            </defs>
                          }
                        </svg>
                      }
                    </s.TransitionLink>
                  }
                  {
                    <div
                      className={
                        "w-fit gap-[.5vw] max-md:gap-2 flex items-center justify-center cursor-pointer"
                      }
                    >
                      {
                        <button
                          type={"button"}
                          onClick={o}
                          aria-label={
                            l && i > 0
                              ? `Open basket, ${i} items`
                              : "Open basket"
                          }
                          className={`rounded-md relative size-[2.5vw] max-md:size-10 flex items-center justify-center p-[0.45vw] max-md:p-2 cursor-pointer transition-all duration-300 active:scale-90 ${p ? "bg-light-beige text-foreground" : "bg-foreground text-light-beige hover:bg-light-beige hover:text-foreground"}`}
                        >
                          {l && i > 0 && (
                            <p
                              ref={m}
                              className={`text-[.6vw] max-md:text-[10px] border rounded-full size-[1.2vw] max-md:size-5 flex items-center justify-center absolute top-[-.5vw] left-[-.5vw] max-md:top-[-8px] max-md:left-[-8px] transition-colors duration-300 ${p ? "bg-foreground border-light-beige text-light-beige" : "bg-light-beige border-foreground text-foreground"}`}
                            >
                              {i > 9 ? "9+" : i}
                            </p>
                          )}
                          {
                            <svg
                              viewBox={"0 0 24 24"}
                              xmlns={"http://www.w3.org/2000/svg"}
                              className={
                                "size-full transition-all duration-300"
                              }
                              aria-hidden={!0}
                            >
                              {
                                <path
                                  fill={"currentColor"}
                                  d={
                                    "M2.9,9C3,9,3.1,9,3.2,9c0.2,0,0.4-0.1,0.6-0.2l0.4-0.3C4.1,8.8,3.9,9,3.8,9.3c0,0,0,0,0,0c-0.4,0.8-0.6,1.7-0.7,2.6c0,0,0,0,0,0c0,0,0,0,0,0C3,12.3,3,12.6,3,13c0,5,4,9,9,9s9-4,9-9c0-0.4,0-0.7-0.1-1.1c-0.2-1.2-0.5-2.4-1.1-3.4C19.6,8.2,19.3,8,18.9,8h-3.5l1.2-2.8L19.8,6c0.5,0.1,1.1-0.2,1.2-0.7c0.1-0.5-0.2-1.1-0.7-1.2l-4-1c-0.5-0.1-1,0.1-1.2,0.6L13.2,8H8.4L6.9,6.5l1.5-1.1c0.3-0.2,0.4-0.5,0.4-0.8c0-0.3-0.1-0.6-0.4-0.8C7.7,3.3,6.9,3,6,3C3.8,3,2,4.8,2,6.9c0,0.5,0.1,1,0.3,1.5C2.4,8.7,2.6,8.9,2.9,9z M19,13c0,3.9-3.1,7-7,7s-7-3.1-7-7H19z M18.3,10c0.2,0.3,0.3,0.7,0.4,1H5.3c0.1-0.3,0.2-0.7,0.4-1H18.3z M5.1,8C5,8,4.9,8,4.9,8l0.4-0.3L5.6,8H5.1z M5.5,5.1L4.2,6C4.5,5.5,5,5.2,5.5,5.1z"
                                  }
                                />
                              }
                            </svg>
                          }
                        </button>
                      }
                      {
                        <button
                          type={"button"}
                          onClick={() => a((e) => !e)}
                          aria-expanded={e}
                          aria-label={e ? "Close menu" : "Open menu"}
                          className={`text36 relative px-[2vw] py-[.3vw] max-md:px-5 max-md:py-2 font-patrick-hand rounded-md cursor-pointer overflow-hidden transition-colors duration-300 ${p ? "bg-light-beige text-foreground" : "bg-foreground text-light-beige"}`}
                        >
                          {
                            <span className={"grid"}>
                              {
                                <span
                                  className={`col-start-1 row-start-1 transition-all duration-400 ${e ? "translate-y-[-130%] opacity-0" : "translate-y-0 opacity-100"}`}
                                >
                                  {"MENU"}
                                </span>
                              }
                              {
                                <span
                                  className={`col-start-1 row-start-1 transition-all duration-400 ${e ? "translate-y-0 opacity-100" : "translate-y-[130%] opacity-0"}`}
                                >
                                  {"CLOSE"}
                                </span>
                              }
                            </span>
                          }
                        </button>
                      }
                    </div>
                  }
                </nav>
              }
            </t.Fragment>
          )
        );
      },
    ],
    78554,
  );
};
