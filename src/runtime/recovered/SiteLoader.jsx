import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  let t;
  var r = e.i(43476),
    n = e.i(71645),
    a = e.i(90072),
    i = e.i(8155);
  let l = (e) => {
      let t = (0, i.createStore)(e),
        r = (e) =>
          (function (e, t = (e) => e) {
            let r = n.default.useSyncExternalStore(
              e.subscribe,
              n.default.useCallback(() => t(e.getState()), [e, t]),
              n.default.useCallback(() => t(e.getInitialState()), [e, t]),
            );
            return (n.default.useDebugValue(r), r);
          })(t, e);
      return (Object.assign(r, t), r);
    },
    s = 0,
    o = (t = (e) => (
      (a.DefaultLoadingManager.onStart = (t, r, n) => {
        e({
          active: !0,
          item: t,
          loaded: r,
          total: n,
          progress: ((r - s) / (n - s)) * 100,
        });
      }),
      (a.DefaultLoadingManager.onLoad = () => {
        e({
          active: !1,
        });
      }),
      (a.DefaultLoadingManager.onError = (t) =>
        e((e) => ({
          errors: [...e.errors, t],
        }))),
      (a.DefaultLoadingManager.onProgress = (t, r, n) => {
        (r === n && (s = n),
          e({
            active: !0,
            item: t,
            loaded: r,
            total: n,
            progress: ((r - s) / (n - s)) * 100 || 100,
          }));
      }),
      {
        errors: [],
        active: !1,
        progress: 0,
        item: "",
        loaded: 0,
        total: 0,
      }
    ))
      ? l(t)
      : l;
  var u = e.i(89970),
    c = e.i(33809);
  let d = [
      {
        match: asset("/model/coconut.glb"),
        bytes: 4651952,
      },
      {
        match: asset("/model/can1.glb"),
        bytes: 162956,
      },
      {
        match: asset("/model/tex/coconutWhite.webp"),
        bytes: 298506,
      },
      {
        match: "empty_warehouse_01_1k.hdr",
        bytes: 1672140,
      },
    ],
    f = d.reduce((e, t) => e + t.bytes, 0),
    m = new Set(),
    h = new Map(),
    p = new Set(),
    x = 0;
  function g() {
    let e = 0;
    for (let t of d)
      m.has(t.match) ? (e += t.bytes) : (e += h.get(t.match) ?? 0);
    let t = (e / f) * 100;
    if (!(t <= x)) for (let e of ((x = t), p)) e(x);
  }
  function v(e) {
    if ("string" == typeof e) {
      for (let t of d)
        if (!m.has(t.match) && e.includes(t.match)) {
          (m.add(t.match), h.delete(t.match), g());
          return;
        }
    }
  }
  let b = !1;
  !(function () {
    if (b) return;
    b = !0;
    let e = a.DefaultLoadingManager.onProgress,
      t = a.DefaultLoadingManager.onError;
    ((a.DefaultLoadingManager.onProgress = (t, r, n) => {
      (e?.(t, r, n), v(t));
    }),
      (a.DefaultLoadingManager.onError = (e) => {
        (t?.(e), v(e));
      }),
      (function () {
        if ("function" != typeof window.fetch) return;
        let e = window.fetch.bind(window);
        window.fetch = function (t, ...r) {
          let n =
              "string" == typeof t
                ? t
                : "string" == typeof t?.url
                  ? t.url
                  : String(t ?? ""),
            a = d.find((e) => n.includes(e.match)),
            i = e(t, ...r);
          return a
            ? i.then((e) => {
                try {
                  !(function (e, t) {
                    let r = e.body?.getReader?.();
                    if (!r) return;
                    let n = 0,
                      a = ({ done: e, value: i }) => {
                        if (!e)
                          return (
                            (n += i.length),
                            m.has(t.match) ||
                              (h.set(t.match, Math.min(n, t.bytes)), g()),
                            r.read().then(a)
                          );
                      };
                    r.read()
                      .then(a)
                      .catch(() => {});
                  })(e.clone(), a);
                } catch {}
                return e;
              })
            : i;
        };
      })());
  })();
  var w = e.i(12263);
  u.default.registerPlugin(c.default);
  let y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    j = "absolute -top-[30dvh] left-0 h-[160dvh] w-[58%] will-change-transform",
    k = `
  M276.9 249.322L245.035 358.522L218.104 349.667L239.372 377.927L200.966 509.509
  C167.804 469.088 154.52 411.898 170.563 356.94C186.604 301.952 228.007 262.772 276.9 249.322Z
  M103.415 207.766C157.405 181.329 218.871 187.303 273.502 218.22L111.253 297.676L93.7865 257.119
  L90.1138 308.033L0 352.169C13.6111 287.814 49.4243 234.204 103.415 207.766Z
  M208.565 116.324L163.197 142.072L124.48 120.504L144.267 80.4888L98.9187 106.247L18.5067 61.4334
  C67.6015 24.6383 133.909 17.6759 190.768 49.3588C247.628 81.052 279.895 142.964 279.238 206.757
  L188.778 156.327L208.565 116.324Z
  M396.393 62.3739L422.723 91.8752L302.498 212.828C288.192 156.793 303.813 92.8834 347.994 48.4469
  C392.172 4.00119 453.144 -9.11952 505.07 9.05494L442.601 71.8976L396.393 62.3739Z
  M453.656 172.446C505.236 188.06 541.998 231.991 553.217 283.818L494.986 266.187L485.685 236.307
  L478.98 261.357L426.871 245.588L416.035 210.724L408.197 239.944L313.736 211.373
  C349.017 173.619 402.059 156.851 453.656 172.446Z
  M291.272 233.752L312.996 223.029C391.719 410.788 337.783 853.463 337.783 853.463L267.028 820.022
  C325.93 605.308 299.765 276.926 291.272 233.752Z
`;
  function N({ value: e }) {
    let t = (0, n.useRef)(null),
      a = (0, n.useRef)({
        p: 0,
      }),
      i = (0, n.useRef)(!1),
      l = (0, n.useRef)(null);
    return (
      (0, n.useEffect)(() => {
        let r = t.current;
        if (!r) return;
        let n = () => {
          r.style.transform = `translateY(${-(a.current.p % 10)}em)`;
        };
        if (!i.current) {
          ((i.current = !0), (a.current.p = e), n());
          return;
        }
        let s = a.current.p,
          o = 10 * Math.floor(s / 10) + e;
        for (; o <= s + 0.001;) o += 10;
        (l.current?.kill(),
          (l.current = u.default.to(a.current, {
            p: o,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
            onUpdate: n,
          })));
      }, [e]),
      (0, n.useEffect)(() => () => l.current?.kill(), []),
      (
        <span
          className={
            "relative inline-block overflow-hidden align-bottom tabular-nums leading-none"
          }
          style={{
            height: "1em",
            width: "0.48em",
          }}
          aria-hidden={!0}
        >
          {
            <span ref={t} className={"block will-change-transform"}>
              {y.map((e, t) => (
                <span
                  className={"flex items-center justify-center leading-none"}
                  style={{
                    height: "1em",
                  }}
                  key={t}
                >
                  {e}
                </span>
              ))}
            </span>
          }
        </span>
      )
    );
  }
  function C({ value: e }) {
    let t = Math.min(100, Math.max(0, e)),
      n = Math.floor(t / 100),
      a = Math.floor((t % 100) / 10);
    return (
      <span
        className={"inline-flex items-end leading-none tracking-[-0.06em]"}
        aria-live={"polite"}
      >
        {
          <span className={"sr-only"}>
            {t}
            {" percent loaded"}
          </span>
        }
        {<N value={n} />}
        {<N value={a} />}
        {<N value={t % 10} />}
      </span>
    );
  }
  e.s(
    [
      "default",
      0,
      function () {
        let { active: e, progress: t, total: a } = o(),
          i = (0, n.useRef)(null),
          l = (0, n.useRef)(null),
          s = (0, n.useRef)(null),
          d = (0, n.useRef)(null),
          f = (0, n.useRef)(null),
          m = (0, n.useRef)(null),
          h = (0, n.useRef)(null),
          g = (0, n.useRef)(null),
          v = (0, n.useRef)(null),
          b = (0, n.useRef)(null),
          y = (0, n.useRef)(!1),
          N = (0, n.useRef)(null),
          L = (0, n.useRef)(0),
          [S, z] = (0, n.useState)(!0),
          [P, R] = (0, n.useState)(0),
          A = (0, n.useRef)({
            active: e,
            progress: t,
            total: a,
          });
        function E() {
          window.__loaderFinished ||
            ((window.__loaderFinished = !0),
            window.dispatchEvent(new Event("loaderComplete")),
            window.dispatchEvent(new Event("palmo:loader-done")));
        }
        (null === b.current && (b.current = Date.now()),
          (0, n.useEffect)(() => {
            (null === b.current && (b.current = Date.now()),
              (A.current = {
                active: e,
                progress: t,
                total: a,
              }));
          }, [e, t, a]),
          (0, n.useEffect)(() => {
            d.current &&
              u.default.set(d.current, {
                attr: {
                  transform: "translate(0, 860)",
                },
              });
          }, []));
        let M = (0, n.useCallback)(() => {
          if (y.current) return;
          if (((y.current = !0), !i.current)) return void z(!1);
          let e = u.default.timeline({
            defaults: {
              ease: "power3.inOut",
            },
            onComplete: () => {
              (E(), z(!1));
            },
          });
          if (
            ((N.current = e),
            u.default.set(i.current, {
              pointerEvents: "none",
            }),
            L.current < 100 && ((L.current = 100), R(100)),
            d.current &&
              e.to(d.current, {
                attr: {
                  transform: "translate(0, 0)",
                },
                duration: 0.4,
                ease: "power2.out",
              }),
            f.current &&
              e.to(
                f.current,
                {
                  autoAlpha: 0,
                  y: 28,
                  duration: 0.35,
                  ease: "power2.in",
                },
                0,
              ),
            s.current)
          ) {
            let t = {
                v: -36,
              },
              r = () => {
                s.current.style.setProperty("--wipe", `${t.v}%`);
              };
            (r(),
              e.to(
                t,
                {
                  v: 100,
                  duration: 0.7,
                  ease: "power2.inOut",
                  onUpdate: r,
                },
                "-=0.05",
              ));
          }
          let t = {
            xPercent: 170,
            duration: 1.45,
            ease: "power3.inOut",
          };
          (m.current &&
            h.current &&
            (e.to(
              m.current,
              {
                ...t,
                xPercent: -170,
                rotate: -5,
              },
              "-=0.08",
            ),
            e.to(
              h.current,
              {
                ...t,
                rotate: 5,
              },
              "<",
            )),
            g.current &&
              v.current &&
              (e.to(
                g.current,
                {
                  ...t,
                  xPercent: -170,
                  rotate: -5,
                },
                "-=1.2",
              ),
              e.to(
                v.current,
                {
                  ...t,
                  rotate: 5,
                },
                "<",
              )),
            e.add(E, "-=1.2s"));
        }, []);
        return ((0, n.useEffect)(() => {
          var e;
          let t = !!document.getElementById("coconut-sequence"),
            r = !t || !!window.__palmoSceneReady,
            n = () => {
              r = !0;
            };
          window.addEventListener(w.SCENE_READY, n);
          let a = 0,
            i = 0,
            l =
              ((e = (e) => {
                (a = e) >= 99.9 && !i && (i = performance.now());
              }),
              p.add(e),
              e(x),
              () => p.delete(e)),
            s = 0,
            o = performance.now(),
            u = requestAnimationFrame(function e(n) {
              let l;
              if (y.current) return;
              u = requestAnimationFrame(e);
              let c = Math.min(0.05, (n - o) / 1e3);
              o = n;
              let f = Date.now() - b.current,
                m = i > 0 && n - i > 2500,
                h = t
                  ? r || m
                  : (!(l = A.current).active &&
                      (l.progress >= 100 || 0 === l.total)) ||
                    m;
              if (h)
                100 - (s += (100 - s) * (1 - Math.exp(-6 * c))) < 0.4 &&
                  (s = 100);
              else if (s < a)
                ((s += (a - s) * (1 - Math.exp(-4.5 * c))),
                  a - s < 0.05 && (s = a));
              else {
                let e = Math.min(99, a + 12);
                s += (e - s) * (1 - Math.exp(-0.45 * c));
              }
              let p = Math.round(s);
              (p !== L.current && ((L.current = p), R(p)),
                d.current &&
                  d.current.setAttribute(
                    "transform",
                    `translate(0, ${860 * (1 - s / 100)})`,
                  ),
                h &&
                  f >= 3e3 &&
                  (s >= 99.5 || f >= 4e3) &&
                  (cancelAnimationFrame(u), M()));
            });
          return () => {
            (cancelAnimationFrame(u),
              l(),
              window.removeEventListener(w.SCENE_READY, n));
          };
        }, [M]),
        (0, n.useEffect)(() => {
          let e = setTimeout(M, 25e3);
          return () => {
            (clearTimeout(e), N.current?.kill());
          };
        }, [M]),
        (0, n.useEffect)(() => {
          S || c.default.refresh();
        }, [S]),
        S) ? (
          <section
            ref={i}
            id={"loader"}
            className={
              "fixed top-0 left-0 z-999 flex h-screen w-full items-center justify-center overflow-hidden max-md:h-dvh"
            }
          >
            {<div ref={g} className={`${j} z-1 origin-right bg-beige`} />}
            {
              <div
                ref={v}
                className={`${j} right-0 left-auto z-1 origin-left bg-beige`}
              />
            }
            {<div ref={m} className={`${j} z-2 origin-right bg-foreground`} />}
            {
              <div
                ref={h}
                className={`${j} right-0 left-auto z-2 origin-left bg-foreground`}
              />
            }
            {
              <div
                ref={s}
                className={"relative z-10"}
                style={{
                  "--wipe": "-36%",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, transparent var(--wipe), #000 calc(var(--wipe) + 36%), #000 100%)",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, transparent var(--wipe), #000 calc(var(--wipe) + 36%), #000 100%)",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                }}
              >
                {
                  <svg
                    ref={l}
                    viewBox={"0 0 554 860"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}
                    className={
                      "block w-[10vw] max-md:w-[36vw] overflow-visible will-change-transform"
                    }
                    style={{
                      height: "auto",
                      transformOrigin: "center center",
                    }}
                  >
                    {
                      <defs>
                        {
                          <clipPath id={"loader-tree-clip"}>
                            {<path d={k} />}
                          </clipPath>
                        }
                      </defs>
                    }
                    {
                      <g clipPath={"url(#loader-tree-clip)"}>
                        {
                          <rect
                            x={"0"}
                            y={"-10"}
                            width={554}
                            height={870}
                            fill={"var(--beige)"}
                            opacity={"0.15"}
                          />
                        }
                        {
                          <g ref={d}>
                            {
                              <rect
                                x={"0"}
                                y={"0"}
                                width={554}
                                height={860}
                                fill={"var(--beige)"}
                              />
                            }
                          </g>
                        }
                      </g>
                    }
                    {
                      <path
                        d={k}
                        stroke={"var(--beige)"}
                        strokeWidth={"2"}
                        fill={"none"}
                        opacity={"0.3"}
                      />
                    }
                  </svg>
                }
              </div>
            }
            {
              <div
                ref={f}
                className={
                  "fixed bottom-8 left-8 z-10 flex items-end gap-1 text-beige max-md:bottom-[4dvh] max-md:left-1/2 max-md:-translate-x-1/2"
                }
                style={{
                  fontFamily: "var(--font-khand)",
                  fontWeight: 600,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                }}
              >
                {<C value={P} />}
                {
                  <span
                    className={"opacity-60 leading-none pb-1"}
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    }}
                  >
                    {"%"}
                  </span>
                }
              </div>
            }
          </section>
        ) : null;
      },
    ],
    54922,
  );
};
