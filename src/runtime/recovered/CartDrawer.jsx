// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    a = e.i(65747),
    i = e.i(55667),
    l = e.i(52086),
    s = e.i(23751),
    o = e.i(1248),
    u = e.i(69);
  n.default.registerPlugin(a.useGSAP);
  let c = null,
    d = (e) =>
      (c ??= window.matchMedia("(prefers-reduced-motion: reduce)")).matches
        ? 0.001
        : e,
    f =
      'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  function m({ open: e, instant: i = !1, className: l = "", children: s }) {
    let o = (0, r.useRef)(null),
      u = (0, r.useRef)(!0),
      c = (0, r.useRef)(null);
    return (
      (0, a.useGSAP)(
        () => {
          let t = o.current;
          if (!t || (!u.current && c.current === e)) return;
          n.default.killTweensOf(t);
          let r = u.current || i;
          ((u.current = !1), (c.current = e), r)
            ? n.default.set(t, {
                height: e ? "auto" : 0,
                autoAlpha: +!!e,
              })
            : n.default.to(t, {
                height: e ? "auto" : 0,
                autoAlpha: +!!e,
                duration: d(e ? 0.5 : 0.38),
                ease: e ? "power3.out" : "power2.inOut",
              });
        },
        {
          dependencies: [e, i],
        },
      ),
      (
        <div
          ref={o}
          style={{
            height: 0,
            visibility: "hidden",
          }}
          className={`overflow-hidden ${l}`}
        >
          {s}
        </div>
      )
    );
  }
  let h = ({ label: e, muted: r = !1, children: n }) => (
    <div
      className={`flex items-baseline justify-between ${r ? "text-light-beige/60" : ""}`}
    >
      {<p className={"text32 font-patrick-hand"}>{e}</p>}
      {<p className={"text32 font-patrick-hand tabular-nums"}>{n}</p>}
    </div>
  );
  function p({ value: e, className: i = "", style: l }) {
    let o = (0, r.useRef)(null),
      u = (0, r.useRef)({
        n: e,
      });
    return (
      (0, a.useGSAP)(
        () => {
          let t = o.current;
          t &&
            u.current.n !== e &&
            (n.default.killTweensOf(u.current),
            n.default.to(u.current, {
              n: e,
              duration: d(0.45),
              ease: "power2.out",
              onUpdate: () => {
                t.textContent = (0, s.formatPrice)(u.current.n);
              },
              onComplete: () => {
                ((u.current.n = e), (t.textContent = (0, s.formatPrice)(e)));
              },
            }));
        },
        {
          dependencies: [e],
        },
      ),
      (
        <span ref={o} className={`tabular-nums ${i}`} style={l}>
          {(0, s.formatPrice)(e)}
        </span>
      )
    );
  }
  function x({ line: e, open: i, justAdded: l, onQty: u, onRemove: c }) {
    let f = (0, r.useRef)(null),
      m = (0, r.useRef)(null),
      { flavour: h, pack: g, qty: v, total: b } = e,
      w = v >= s.MAX_QTY,
      y = (0, r.useRef)(i);
    ((0, a.useGSAP)(() => {
      y.current &&
        f.current &&
        n.default.from(f.current, {
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          x: 40,
          autoAlpha: 0,
          duration: d(0.55),
          ease: "power3.out",
          clearProps: "height,paddingTop,paddingBottom",
        });
    }, []),
      (0, a.useGSAP)(
        () => {
          l &&
            f.current &&
            n.default.fromTo(
              f.current,
              {
                backgroundColor: "rgba(255,227,134,0.22)",
              },
              {
                backgroundColor: "rgba(255,227,134,0)",
                duration: d(1.1),
                ease: "sine.out",
              },
            );
        },
        {
          dependencies: [l],
          scope: f,
        },
      ));
    let j = (0, r.useRef)(!0);
    (0, a.useGSAP)(
      () => {
        if (j.current) {
          j.current = !1;
          return;
        }
        m.current &&
          n.default.fromTo(
            m.current,
            {
              scale: 1.45,
            },
            {
              scale: 1,
              duration: d(0.5),
              ease: "back.out(3)",
              overwrite: "auto",
            },
          );
      },
      {
        dependencies: [v],
      },
    );
    let k = () => {
      f.current
        ? n.default.to(f.current, {
            x: 60,
            autoAlpha: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderBottomWidth: 0,
            duration: d(0.38),
            ease: "power2.inOut",
            overwrite: "auto",
            onComplete: () => c(e.id),
          })
        : c(e.id);
    };
    return (
      <li
        ref={f}
        style={{
          "--flavour": h.color,
        }}
        className={
          "group/row flex items-center gap-[1vw] max-md:gap-4 overflow-hidden rounded-lg border-b border-light-beige/10 py-[1vw] max-md:py-4 last:border-b-0"
        }
      >
        {
          <div
            className={
              "relative flex size-[4.5vw] max-md:size-18 shrink-0 items-center justify-center overflow-hidden rounded-md bg-(--flavour) transition-transform duration-500 ease-out group-hover/row:scale-105 group-hover/row:-rotate-3"
            }
          >
            {
              <span className={"absolute inset-0 opacity-30"}>
                {<o.CoconutPiece3 opacity={".5"} className={"size-full"} />}
              </span>
            }
            {
              <span
                className={
                  "relative font-patrick-hand text-light-beige tabular-nums"
                }
                style={{
                  fontSize: "min(1.6vw, 2.4vh)",
                }}
              >
                {g.cans}
                {"×"}
              </span>
            }
          </div>
        }
        {
          <div className={"min-w-0 flex-1"}>
            {<p className={"text32 truncate font-patrick-hand"}>{h.name}</p>}
            {
              <p
                className={"font-patrick-hand text-light-beige/55 tabular-nums"}
                style={{
                  fontSize: "min(0.85rem, 1.9vh)",
                }}
              >
                {g.label}
                {" · "}
                {(0, s.formatPrice)(e.unitPrice)}
              </p>
            }
            {
              <div
                className={
                  "mt-[0.4vw] max-md:mt-2 flex items-center gap-[0.6vw] max-md:gap-3"
                }
              >
                {
                  <div
                    className={
                      "flex items-center gap-[0.5vw] max-md:gap-2 rounded-full border border-light-beige/25 px-[0.5vw] py-[0.15vw] max-md:px-2.5 max-md:py-1 transition-colors duration-300 group-hover/row:border-light-beige/45"
                    }
                  >
                    {
                      <button
                        type={"button"}
                        onClick={() => (1 === v ? k() : u(e.id, v - 1))}
                        tabIndex={i ? 0 : -1}
                        aria-label={
                          1 === v ? `Remove ${h.name}` : `Fewer ${h.name}`
                        }
                        className={
                          "cursor-pointer leading-none opacity-70 transition-all duration-200 hover:opacity-100 active:scale-75"
                        }
                        style={{
                          fontSize: "min(1rem, 2.2vh)",
                        }}
                      >
                        {"−"}
                      </button>
                    }
                    {
                      <span
                        ref={m}
                        className={
                          "inline-block min-w-[1.2em] text-center font-patrick-hand tabular-nums"
                        }
                        style={{
                          fontSize: "min(1rem, 2.2vh)",
                        }}
                      >
                        {v}
                      </span>
                    }
                    {
                      <button
                        type={"button"}
                        onClick={() => u(e.id, v + 1)}
                        disabled={w}
                        tabIndex={i && !w ? 0 : -1}
                        aria-label={
                          w ? `${h.name} at maximum quantity` : `More ${h.name}`
                        }
                        className={
                          "cursor-pointer leading-none opacity-70 transition-all duration-200 hover:opacity-100 active:scale-75 disabled:cursor-not-allowed disabled:opacity-25 disabled:active:scale-100"
                        }
                        style={{
                          fontSize: "min(1rem, 2.2vh)",
                        }}
                      >
                        {"+"}
                      </button>
                    }
                  </div>
                }
                {
                  <button
                    type={"button"}
                    onClick={k}
                    tabIndex={i ? 0 : -1}
                    className={
                      "cursor-pointer font-patrick-hand text-light-beige/40 underline underline-offset-2 transition-colors duration-300 hover:text-beige"
                    }
                    style={{
                      fontSize: "min(0.8rem, 1.8vh)",
                    }}
                  >
                    {"Remove"}
                  </button>
                }
              </div>
            }
          </div>
        }
        {(0, t.jsx)(p, {
          value: b,
          className: "text32 shrink-0 font-patrick-hand",
        })}
      </li>
    );
  }
  e.s([
    "default",
    0,
    function () {
      let {
          lines: e,
          count: c,
          cans: g,
          subtotal: v,
          shipping: b,
          total: w,
          freeShippingGap: y,
          freeShippingProgress: j,
          open: k,
          closeCart: N,
          setQty: C,
          remove: L,
          clear: S,
          lastAdded: z,
          ready: P,
        } = (0, l.useCart)(),
        R = P && c > 0,
        [A, E] = (0, r.useState)(!1),
        M = (0, r.useRef)(null),
        T = (0, r.useRef)(null),
        $ = (0, r.useRef)(null),
        O = (0, r.useRef)(null),
        F = (0, r.useRef)(null),
        I = (0, r.useRef)(null),
        B = (0, r.useRef)(null),
        D = (0, r.useRef)(null),
        _ = (0, r.useRef)(null),
        q = (0, r.useRef)(null),
        G = (0, r.useRef)(null),
        W = (0, r.useRef)(null),
        H = (0, r.useRef)(null),
        Z = (0, i.useLenis)();
      (0, a.useGSAP)(
        () => {
          let e = n.default.timeline({
            paused: !0,
          });
          (e
            .set([I.current, M.current], {
              autoAlpha: 1,
            })
            .fromTo(
              I.current,
              {
                opacity: 0,
              },
              {
                opacity: 1,
                duration: d(0.7),
                ease: "power2.out",
              },
              0,
            )
            .fromTo(
              M.current,
              {
                clipPath: "ellipse(0% 65% at 105% 50%)",
              },
              {
                clipPath: "ellipse(150% 120% at 105% 50%)",
                duration: d(1.15),
                ease: "power3.inOut",
              },
              0,
            )
            .fromTo(
              [B.current, D.current, W.current],
              {
                x: 28,
                autoAlpha: 0,
              },
              {
                x: 0,
                autoAlpha: 1,
                duration: d(0.55),
                ease: "power3.out",
                stagger: 0.07,
              },
              0.42,
            ),
            (H.current = e));
        },
        {
          scope: M,
        },
      );
      let Y = (0, r.useRef)(!1);
      ((0, a.useGSAP)(
        () => {
          let e = H.current;
          if (!e || (!k && !Y.current)) return;
          Y.current = !0;
          let t = M.current,
            r = I.current;
          n.default.set([t, r], {
            willChange: "clip-path, opacity, transform",
          });
          let a = () =>
            n.default.set([t, r], {
              willChange: "auto",
            });
          (e.eventCallback("onComplete", a),
            e.eventCallback("onReverseComplete", a),
            k
              ? (Z?.stop(), e.timeScale(1).play())
              : (Z?.start(), e.timeScale(1.25).reverse()));
        },
        {
          dependencies: [k, Z],
        },
      ),
        (0, a.useGSAP)(
          () => {
            let e = $.current;
            if (!e) return;
            let t = n.default.timeline({
              paused: !0,
            });
            (t
              .set(e, {
                autoAlpha: 1,
              })
              .fromTo(
                e,
                {
                  clipPath: "ellipse(0% 0% at 50% 108%)",
                },
                {
                  clipPath: "ellipse(160% 160% at 50% 108%)",
                  duration: d(0.75),
                  ease: "power3.inOut",
                },
                0,
              )
              .fromTo(
                e.querySelectorAll("[data-note-item]"),
                {
                  y: 26,
                  autoAlpha: 0,
                },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: d(0.5),
                  ease: "power3.out",
                  stagger: 0.08,
                },
                0.28,
              ),
              (O.current = t));
          },
          {
            scope: M,
          },
        ));
      let U = (0, r.useRef)(!0);
      (0, a.useGSAP)(
        () => {
          let e = O.current;
          if (e) {
            if (U.current) {
              U.current = !1;
              return;
            }
            if (!k) {
              (e.pause(0),
                n.default.set($.current, {
                  autoAlpha: 0,
                  clipPath: "ellipse(0% 0% at 50% 108%)",
                }));
              return;
            }
            A ? e.timeScale(1).play() : e.timeScale(1.3).reverse();
          }
        },
        {
          dependencies: [A, k],
        },
      );
      let [K, Q] = (0, r.useState)(k);
      (k !== K && (Q(k), k || E(!1)),
        (0, a.useGSAP)(
          () => {
            let e = _.current?.children;
            k &&
              e?.length &&
              n.default.fromTo(
                e,
                {
                  x: 30,
                  autoAlpha: 0,
                },
                {
                  x: 0,
                  autoAlpha: 1,
                  duration: d(0.55),
                  ease: "power3.out",
                  stagger: 0.05,
                  delay: 0.55,
                  overwrite: "auto",
                },
              );
          },
          {
            dependencies: [k],
          },
        ));
      let V = (0, r.useRef)(null);
      ((0, a.useGSAP)(
        () => {
          let e = q.current,
            t = G.current;
          if (e) {
            if (V.current !== R) {
              let t = null === V.current;
              ((V.current = R),
                t || !k
                  ? n.default.set(e, {
                      autoAlpha: +!R,
                      y: 0,
                      scale: 1,
                    })
                  : R
                    ? n.default.to(e, {
                        autoAlpha: 0,
                        y: -14,
                        duration: d(0.28),
                        ease: "power2.in",
                        overwrite: "auto",
                      })
                    : n.default.fromTo(
                        e,
                        {
                          autoAlpha: 0,
                          y: 22,
                          scale: 0.94,
                        },
                        {
                          autoAlpha: 1,
                          y: 0,
                          scale: 1,
                          duration: d(0.6),
                          ease: "power3.out",
                          delay: 0.2,
                          overwrite: "auto",
                        },
                      ));
            }
            t &&
              (n.default.killTweensOf(t),
              !R && k
                ? n.default.to(t, {
                    y: -10,
                    rotate: 5,
                    duration: d(2.6),
                    ease: "sine.inOut",
                    repeat: -1,
                    yoyo: !0,
                  })
                : n.default.set(t, {
                    y: 0,
                    rotate: 0,
                  }));
          }
        },
        {
          dependencies: [R, k],
        },
      ),
        (0, r.useEffect)(() => {
          if (!k) return;
          let e = M.current,
            t = T.current;
          if (!e || !t) return;
          let r = document.activeElement;
          return (
            t.querySelectorAll(f)[0]?.focus({
              preventScroll: !0,
            }),
            () => {
              e.contains(document.activeElement) &&
                r?.focus?.({
                  preventScroll: !0,
                });
            }
          );
        }, [k]),
        (0, r.useEffect)(() => {
          if (!k) return;
          let e = A ? $.current : T.current;
          if (!e) return;
          let t = (t) => {
            if ("Escape" === t.key) return void (A ? E(!1) : N());
            if ("Tab" === t.key) {
              let r = Array.from(e.querySelectorAll(f));
              if (!r.length) return;
              let n = r[0],
                a = r[r.length - 1];
              t.shiftKey && document.activeElement === n
                ? (t.preventDefault(),
                  a.focus({
                    preventScroll: !0,
                  }))
                : t.shiftKey ||
                  document.activeElement !== a ||
                  (t.preventDefault(),
                  n.focus({
                    preventScroll: !0,
                  }));
            }
          };
          return (
            window.addEventListener("keydown", t),
            () => window.removeEventListener("keydown", t)
          );
        }, [k, A, N]));
      let X = (0, r.useRef)(!1);
      (0, r.useEffect)(() => {
        A
          ? ((X.current = !0),
            $.current?.querySelectorAll(f)[0]?.focus({
              preventScroll: !0,
            }))
          : X.current &&
            k &&
            F.current?.focus({
              preventScroll: !0,
            });
      }, [A, k]);
      let J = (0, r.useCallback)(() => {
        let e = _.current?.children;
        e?.length
          ? n.default.to(e, {
              x: 56,
              autoAlpha: 0,
              height: 0,
              paddingTop: 0,
              paddingBottom: 0,
              borderBottomWidth: 0,
              duration: d(0.32),
              stagger: {
                each: 0.045,
                from: "end",
              },
              ease: "power2.in",
              onComplete: S,
            })
          : S();
      }, [S]);
      return (
        <t.Fragment>
          {
            <div
              ref={I}
              onClick={N}
              aria-hidden={!0}
              style={{
                visibility: "hidden",
              }}
              className={`fixed inset-0 z-800 bg-foreground/50 backdrop-blur-sm ${k ? "pointer-events-auto" : "pointer-events-none"}`}
            />
          }
          {
            <aside
              ref={M}
              role={"dialog"}
              aria-modal={"true"}
              aria-label={"Your basket"}
              aria-hidden={!k}
              style={{
                clipPath: "ellipse(0% 65% at 105% 50%)",
                visibility: "hidden",
              }}
              className={`fixed right-0 top-0 z-900 h-full w-[32vw] max-md:w-full border-l border-light-beige/20 bg-foreground text-light-beige ${k ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              {
                <div
                  className={
                    "pointer-events-none absolute inset-0 overflow-hidden text-light-beige"
                  }
                  aria-hidden={!0}
                >
                  {
                    <span
                      className={
                        "absolute right-[-4vw] top-[-3vw] size-[16vw] max-md:size-[40vw]"
                      }
                    >
                      {
                        <o.CoconutPiece3
                          opacity={".07"}
                          className={"size-full -rotate-30"}
                        />
                      }
                    </span>
                  }
                  {
                    <span
                      className={
                        "absolute left-[-3vw] bottom-[18vh] size-[13vw] max-md:size-[34vw]"
                      }
                    >
                      {
                        <o.CoconutPiece1
                          opacity={".07"}
                          className={"size-full rotate-20"}
                        />
                      }
                    </span>
                  }
                </div>
              }
              {
                <div
                  ref={T}
                  inert={A}
                  className={"relative z-10 flex h-full flex-col"}
                >
                  {
                    <header
                      ref={B}
                      className={
                        "relative z-10 flex shrink-0 items-start justify-between px-[2vw] pt-[2.2vw] pb-[1.2vw] max-md:px-6 max-md:pt-8 max-md:pb-4"
                      }
                    >
                      {
                        <div>
                          {
                            <p
                              className={"text150 leading-none"}
                              style={{
                                fontSize: "min(3.4vw, 5vh)",
                              }}
                            >
                              {"Basket"}
                            </p>
                          }
                          {
                            <p
                              className={
                                "text32 font-patrick-hand text-beige/80 tabular-nums"
                              }
                            >
                              {R
                                ? `${c} ${1 === c ? "pack" : "packs"} \xb7 ${g} cans`
                                : "Nothing poured yet"}
                            </p>
                          }
                        </div>
                      }
                      {
                        <button
                          type={"button"}
                          onClick={N}
                          aria-label={"Close basket"}
                          tabIndex={k ? 0 : -1}
                          className={
                            "group flex size-[2.4vw] max-md:size-10 shrink-0 cursor-pointer items-center justify-center rounded-md border border-light-beige/30 transition-all duration-300 hover:bg-light-beige hover:text-foreground active:scale-90"
                          }
                        >
                          {
                            <o.Plus
                              className={
                                "size-[1.1vw] max-md:size-4 rotate-45 transition-transform duration-500 group-hover:rotate-135"
                              }
                            />
                          }
                        </button>
                      }
                    </header>
                  }
                  {(0, t.jsx)(m, {
                    open: R,
                    instant: !k,
                    className: "relative z-10 shrink-0",
                    children: (
                      <div
                        className={
                          "px-[2vw] pb-[1.2vw] max-md:px-6 max-md:pb-4"
                        }
                      >
                        {
                          <p
                            className={
                              "font-patrick-hand text-beige tabular-nums"
                            }
                            style={{
                              fontSize: "min(0.95rem, 2.2vh)",
                            }}
                          >
                            {y > 0
                              ? `${(0, s.formatPrice)(y)} away from free shipping`
                              : "Free shipping unlocked"}
                          </p>
                        }
                        {
                          <div
                            className={
                              "mt-[0.5vw] max-md:mt-2 h-[0.35vw] max-md:h-1.5 w-full overflow-hidden rounded-full bg-light-beige/15"
                            }
                          >
                            {
                              <span
                                className={
                                  "block h-full rounded-full bg-beige transition-[width] duration-700 ease-out"
                                }
                                style={{
                                  width: `${100 * j}%`,
                                }}
                              />
                            }
                          </div>
                        }
                      </div>
                    ),
                  })}
                  {
                    <div
                      ref={D}
                      data-lenis-prevent={!0}
                      className={
                        "relative z-10 flex-1 overflow-y-auto overscroll-contain px-[2vw] max-md:px-6"
                      }
                    >
                      {
                        <ul ref={_} className={"flex flex-col"}>
                          {e.map((e) =>
                            (0, t.jsx)(
                              x,
                              {
                                line: e,
                                open: k,
                                justAdded: z?.id === e.id,
                                onQty: C,
                                onRemove: L,
                              },
                              e.id,
                            ),
                          )}
                        </ul>
                      }
                      {
                        <div
                          ref={q}
                          aria-hidden={R}
                          style={{
                            visibility: "hidden",
                          }}
                          className={`absolute inset-0 flex flex-col items-center justify-center gap-[0.8vw] max-md:gap-3 px-[2vw] max-md:px-6 text-center ${R ? "pointer-events-none" : "pointer-events-auto"}`}
                        >
                          {
                            <span
                              ref={G}
                              className={"size-[7vw] max-md:size-24 opacity-40"}
                            >
                              {
                                <o.CoconutPiece1
                                  opacity={".9"}
                                  className={"size-full"}
                                />
                              }
                            </span>
                          }
                          {
                            <p
                              className={
                                "text36 font-patrick-hand text-light-beige/70"
                              }
                            >
                              {"Your basket is thirsty."}
                            </p>
                          }
                          {
                            <u.TransitionLink
                              href={"/flavours"}
                              onClick={N}
                              tabIndex={k && !R ? 0 : -1}
                              className={
                                "text32 cursor-pointer font-patrick-hand text-beige underline underline-offset-4 transition-opacity duration-300 hover:opacity-70"
                              }
                            >
                              {"Go pick a flavour"}
                            </u.TransitionLink>
                          }
                        </div>
                      }
                    </div>
                  }
                  {
                    <footer
                      ref={W}
                      className={
                        "relative z-10 shrink-0 border-t border-light-beige/15 px-[2vw] pb-[2vw] pt-[1.2vw] max-md:px-6 max-md:pb-8 max-md:pt-4"
                      }
                    >
                      {(0, t.jsxs)(m, {
                        open: R,
                        instant: !k,
                        children: [
                          (0, t.jsx)(h, {
                            label: "Subtotal",
                            children: (0, t.jsx)(p, {
                              value: v,
                            }),
                          }),
                          (0, t.jsx)(h, {
                            label: "Shipping",
                            muted: !0,
                            children:
                              0 === b
                                ? "Free"
                                : (0, t.jsx)(p, {
                                    value: b,
                                  }),
                          }),
                          <div
                            className={
                              "my-[0.8vw] max-md:my-3 h-px w-full bg-light-beige/15"
                            }
                          />,
                        ],
                      })}
                      {
                        <div className={"flex items-baseline justify-between"}>
                          {
                            <p className={"text36 font-patrick-hand"}>
                              {"Total"}
                            </p>
                          }
                          {(0, t.jsx)(p, {
                            value: R ? w : 0,
                            className: "text150",
                            style: {
                              fontSize: "min(2.4vw, 4vh)",
                            },
                          })}
                        </div>
                      }
                      {
                        <button
                          ref={F}
                          type={"button"}
                          onClick={() => E(!0)}
                          disabled={!R}
                          tabIndex={k && R ? 0 : -1}
                          className={
                            "mt-[1vw] max-md:mt-4 w-full cursor-pointer rounded-md bg-beige py-[0.8vw] max-md:py-3.5 text36 font-patrick-hand text-foreground transition-all duration-300 hover:bg-light-beige hover:-translate-y-px active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
                          }
                        >
                          {"Checkout"}
                        </button>
                      }
                      {(0, t.jsx)(m, {
                        open: R,
                        instant: !k,
                        children: (
                          <button
                            type={"button"}
                            onClick={J}
                            tabIndex={k && R ? 0 : -1}
                            className={
                              "mt-[0.5vw] max-md:mt-2 w-full cursor-pointer font-patrick-hand text-light-beige/50 transition-colors duration-300 hover:text-light-beige"
                            }
                            style={{
                              fontSize: "min(0.9rem, 2vh)",
                            }}
                          >
                            {"Empty the basket"}
                          </button>
                        ),
                      })}
                    </footer>
                  }
                </div>
              }
              {
                <div
                  ref={$}
                  role={"alertdialog"}
                  aria-modal={"true"}
                  aria-label={"About checkout"}
                  aria-hidden={!A}
                  inert={!A}
                  style={{
                    clipPath: "ellipse(0% 0% at 50% 108%)",
                    visibility: "hidden",
                  }}
                  className={
                    "absolute inset-0 z-20 flex flex-col items-center justify-center gap-[1.1vw] max-md:gap-5 bg-foreground px-[3vw] max-md:px-8 text-center text-light-beige"
                  }
                >
                  {
                    <div
                      className={
                        "pointer-events-none absolute inset-0 overflow-hidden"
                      }
                      aria-hidden={!0}
                    >
                      {
                        <span
                          className={
                            "absolute left-[-5vw] top-[-4vw] size-[18vw] max-md:size-[44vw]"
                          }
                        >
                          {
                            <o.CoconutPiece3
                              opacity={".07"}
                              className={"size-full rotate-12"}
                            />
                          }
                        </span>
                      }
                      {
                        <span
                          className={
                            "absolute right-[-4vw] bottom-[-3vw] size-[15vw] max-md:size-[38vw]"
                          }
                        >
                          {
                            <o.CoconutPiece1
                              opacity={".07"}
                              className={"size-full -rotate-12"}
                            />
                          }
                        </span>
                      }
                    </div>
                  }
                  {
                    <span
                      data-note-item={!0}
                      className={
                        "relative size-[4.5vw] max-md:size-16 text-beige"
                      }
                    >
                      {<o.Smily className={"size-full"} opacity={".9"} />}
                    </span>
                  }
                  {
                    <p
                      data-note-item={!0}
                      className={"relative text150 leading-none"}
                      style={{
                        fontSize: "min(3vw, 4.5vh)",
                      }}
                    >
                      {"No till at the end"}
                    </p>
                  }
                  {
                    <p
                      data-note-item={!0}
                      className={
                        "relative text32 max-w-[24vw] max-md:max-w-none font-patrick-hand text-light-beige/70"
                      }
                    >
                      {
                        "promptedsite is a concept piece — the shop front is real, the shop is not. Nothing was charged and nothing is on its way. Your basket stays exactly where you left it."
                      }
                    </p>
                  }
                  {
                    <button
                      data-note-item={!0}
                      type={"button"}
                      onClick={() => E(!1)}
                      className={
                        "relative mt-[0.6vw] max-md:mt-2 cursor-pointer rounded-md bg-beige px-[1.6vw] py-[0.7vw] max-md:px-8 max-md:py-3 text36 font-patrick-hand text-foreground hover:bg-light-beige hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
                      }
                    >
                      {"Back to the basket"}
                    </button>
                  }
                </div>
              }
            </aside>
          }
        </t.Fragment>
      );
    },
  ]);
};
