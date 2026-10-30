// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (t) => {
  "use strict";

  var e = t.i(43476),
    r = t.i(71645),
    i = t.i(18566),
    n = t.i(22016),
    s = t.i(89970),
    o = t.i(33809),
    a = t.i(55667),
    l = t.i(28908);
  s.default.registerPlugin(o.default);
  let u =
      "absolute -top-[30dvh] left-0 h-[160dvh] w-[58%] will-change-transform",
    c = (0, r.createContext)({
      transitionTo: async () => {},
    });
  function h() {
    return (0, r.useContext)(c);
  }
  function f() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function d(t) {
    return new URL(t, window.location.href);
  }
  function p(t) {
    if (!t || t.startsWith("mailto:") || t.startsWith("tel:")) return !1;
    try {
      let e = d(t);
      if (e.origin !== window.location.origin) return !1;
      return (
        e.pathname !== window.location.pathname ||
        e.search !== window.location.search ||
        !!e.hash
      );
    } catch {
      return !1;
    }
  }
  function m(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
  }
  function g(t, e) {
    if (!e) return;
    let r = document.querySelector(e);
    if (!r) return;
    if (f()) return void r.scrollIntoView();
    let i = -Math.round(Math.min(0.02 * window.innerWidth, 24)),
      n = t?.scroll ?? window.scrollY,
      s = Math.min(
        3.8,
        Math.max(
          1.6,
          Math.abs(r.getBoundingClientRect().top + n + i - n) / 900,
        ),
      );
    t
      ? t.scrollTo(r, {
          offset: i,
          duration: s,
          easing: m,
          lock: !0,
        })
      : r.scrollIntoView({
          behavior: "smooth",
        });
  }
  let v = r.default.forwardRef(function (
    { href: t, children: r, onClick: i, ...s },
    o,
  ) {
    let { transitionTo: a } = h();
    return (
      <n.default
        ref={o}
        href={t}
        onClick={(e) => {
          (i?.(e),
            e.defaultPrevented ||
              e.metaKey ||
              e.ctrlKey ||
              e.shiftKey ||
              e.altKey ||
              (p(t) && (e.preventDefault(), a(t))));
        }}
        {...s}
      >
        {r}
      </n.default>
    );
  });
  t.s([
    "TransitionLink",
    0,
    v,
    "default",
    0,
    function ({ children: t }) {
      let n = (0, i.useRouter)(),
        h = (0, i.usePathname)(),
        m = (0, a.useLenis)(),
        v = (0, r.useRef)(m);
      (0, r.useEffect)(() => {
        v.current = m;
      }, [m]);
      let { setIsTransitionFinished: _ } = (0, l.useAnimation)(),
        y = (0, r.useRef)(null),
        w = (0, r.useRef)(null),
        b = (0, r.useRef)(null),
        x = (0, r.useRef)(null),
        T = (0, r.useRef)(!1),
        S = (0, r.useRef)(null),
        E = (0, r.useRef)(null),
        C = (0, r.useRef)(!0),
        M = (0, r.useRef)(null),
        O = (0, r.useCallback)(() => {
          (s.default.set([y.current, b.current], {
            xPercent: -170,
            rotate: -5,
          }),
            s.default.set([w.current, x.current], {
              xPercent: 170,
              rotate: 5,
            }));
        }, []);
      (0, r.useLayoutEffect)(() => {
        (O(),
          s.default.set(M.current, {
            autoAlpha: 0,
          }));
      }, [O]);
      let k = (t) => {
          let e = M.current;
          e && (e.style.pointerEvents = t ? "auto" : "none");
        },
        P = (0, r.useCallback)(() => {
          ((window.__pageTransitionActive = !0),
            s.default.killTweensOf([
              y.current,
              w.current,
              b.current,
              x.current,
            ]),
            s.default.set([y.current, b.current], {
              xPercent: 0,
              rotate: 0,
            }),
            s.default.set([w.current, x.current], {
              xPercent: 0,
              rotate: 0,
            }),
            k(!0),
            s.default.set(M.current, {
              autoAlpha: 1,
            }),
            _(!1));
        }, [_]),
        R = (0, r.useCallback)(
          () =>
            new Promise((t) => {
              if (((window.__pageTransitionActive = !0), f())) {
                (_(!1), t());
                return;
              }
              (k(!0),
                s.default.set(M.current, {
                  autoAlpha: 1,
                }),
                _(!1));
              let e = {
                  xPercent: 0,
                  rotate: 0,
                  duration: 1.3,
                  ease: "power3.inOut",
                },
                r = s.default.timeline({
                  onComplete: t,
                });
              (r.to([y.current, w.current], e),
                r.to([b.current, x.current], e, "-=1.1"));
            }),
          [_],
        ),
        A = (0, r.useCallback)(
          () =>
            new Promise((t) => {
              if (f()) {
                (O(),
                  k(!1),
                  _(!0),
                  (window.__pageTransitionActive = !1),
                  window.dispatchEvent(
                    new CustomEvent("pageTransitionComplete"),
                  ),
                  t());
                return;
              }
              let e = {
                  duration: 1.45,
                  ease: "power3.inOut",
                },
                r = s.default.timeline({
                  onComplete: () => {
                    (O(),
                      s.default.set(M.current, {
                        autoAlpha: 0,
                      }),
                      k(!1),
                      _(!0),
                      (window.__pageTransitionActive = !1),
                      window.dispatchEvent(
                        new CustomEvent("pageTransitionComplete"),
                      ),
                      t());
                  },
                });
              (r.to(
                b.current,
                {
                  ...e,
                  xPercent: -170,
                  rotate: -5,
                },
                0,
              ),
                r.to(
                  x.current,
                  {
                    ...e,
                    xPercent: 170,
                    rotate: 5,
                  },
                  0,
                ),
                r.to(
                  y.current,
                  {
                    ...e,
                    xPercent: -170,
                    rotate: -5,
                  },
                  0.25,
                ),
                r.to(
                  w.current,
                  {
                    ...e,
                    xPercent: 170,
                    rotate: 5,
                  },
                  0.25,
                ));
            }),
          [O, _],
        ),
        L = (0, r.useCallback)(
          async (t) => {
            if (T.current) return;
            let e = d(t);
            if (
              e.pathname === window.location.pathname &&
              e.search === window.location.search
            ) {
              e.hash && g(m, e.hash);
              return;
            }
            ((T.current = !0),
              m?.stop(),
              await R(),
              (S.current = {
                path: e.pathname,
                hash: e.hash,
              }),
              n.push(e.pathname + e.search + e.hash, {
                scroll: !1,
              }));
          },
          [m, R, n],
        );
      return (
        (0, r.useLayoutEffect)(() => {
          if (C.current) {
            C.current = !1;
            return;
          }
          let t = S.current;
          (t && t.path === h) ||
            ((S.current = null),
            (T.current = !0),
            (E.current = {
              path: h,
              hash: window.location.hash,
            }),
            f() || P(),
            v.current?.stop());
        }, [h, P]),
        (0, r.useEffect)(() => {
          let t = S.current,
            e = E.current,
            r = "";
          if (t && t.path === h) ((S.current = null), (r = t.hash));
          else {
            if (!e || e.path !== h) return;
            ((E.current = null), (r = e.hash));
          }
          (window.scrollTo(0, 0),
            m?.scrollTo(0, {
              immediate: !0,
            }),
            requestAnimationFrame(() => {
              A().then(() => {
                if (((T.current = !1), m?.start(), o.default.refresh(), r)) {
                  let t = (e = 0) => {
                    document.querySelector(r) || e > 16
                      ? g(m, r)
                      : requestAnimationFrame(() => t(e + 1));
                  };
                  requestAnimationFrame(() => t());
                }
              });
            }));
        }, [h, m, A]),
        (0, r.useEffect)(() => {
          let t = (t) => {
            if (
              t.defaultPrevented ||
              0 !== t.button ||
              t.metaKey ||
              t.ctrlKey ||
              t.shiftKey ||
              t.altKey
            )
              return;
            let e = t.target.closest("a");
            if (
              !e ||
              (e.target && "_self" !== e.target) ||
              e.hasAttribute("download") ||
              e.hasAttribute("data-menu-link")
            )
              return;
            let r = e.getAttribute("href");
            p(r) && (t.preventDefault(), L(r));
          };
          return (
            document.addEventListener("click", t, !0),
            () => document.removeEventListener("click", t, !0)
          );
        }, [L]),
        (
          <c.Provider
            value={{
              transitionTo: L,
            }}
          >
            {t}
            {
              <div
                ref={M}
                aria-hidden={!0}
                className={
                  "pointer-events-none fixed inset-0 z-[980] overflow-hidden"
                }
              >
                {<div ref={y} className={`${u} z-1 origin-right bg-beige`} />}
                {
                  <div
                    ref={w}
                    className={`${u} right-0 left-auto z-1 origin-left bg-beige`}
                  />
                }
                {
                  <div
                    ref={b}
                    className={`${u} z-2 origin-right bg-foreground`}
                  />
                }
                {
                  <div
                    ref={x}
                    className={`${u} right-0 left-auto z-2 origin-left bg-foreground`}
                  />
                }
              </div>
            }
          </c.Provider>
        )
      );
    },
    "usePageTransition",
    0,
    h,
  ]);
};
