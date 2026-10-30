// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    o,
    i,
    a,
    l,
    s,
    u,
    c,
    d,
    f,
    p,
    h,
    m,
    g,
    v = function () {
      return (
        o || ("u" > typeof window && (o = window.gsap) && o.registerPlugin && o)
      );
    },
    x = 1,
    w = [],
    y = [],
    b = [],
    k = Date.now,
    T = function (e, t) {
      return t;
    },
    S = function () {
      var e = f.core,
        t = e.bridge || {},
        r = e._scrollers,
        n = e._proxies;
      (r.push.apply(r, y),
        n.push.apply(n, b),
        (y = r),
        (b = n),
        (T = function (e, r) {
          return t[e](r);
        }));
    },
    E = function (e, t) {
      return ~b.indexOf(e) && b[b.indexOf(e) + 1][t];
    },
    C = function (e) {
      return !!~p.indexOf(e);
    },
    M = function (e, t, r, n, o) {
      return e.addEventListener(t, r, {
        passive: !1 !== n,
        capture: !!o,
      });
    },
    N = function (e, t, r, n) {
      return e.removeEventListener(t, r, !!n);
    },
    _ = "scrollLeft",
    P = "scrollTop",
    A = function () {
      return (h && h.isPressed) || y.cache++;
    },
    R = function (e, t) {
      var r = function r(n) {
        if (n || 0 === n) {
          x && (a.history.scrollRestoration = "manual");
          var o = h && h.isPressed;
          (e((n = r.v = Math.round(n) || (h && h.iOS ? 1 : 0))),
            (r.cacheID = y.cache),
            o && T("ss", n));
        } else
          (t || y.cache !== r.cacheID || T("ref")) &&
            ((r.cacheID = y.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return ((r.offset = 0), e && r);
    },
    j = {
      s: _,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: R(function (e) {
        return arguments.length
          ? a.scrollTo(e, z.sc())
          : a.pageXOffset || l[_] || s[_] || u[_] || 0;
      }),
    },
    z = {
      s: P,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: j,
      sc: R(function (e) {
        return arguments.length
          ? a.scrollTo(j.sc(), e)
          : a.pageYOffset || l[P] || s[P] || u[P] || 0;
      }),
    },
    L = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || o.utils.toArray)(e)[0] ||
        ("string" == typeof e && !1 !== o.config().nullTargetWarn
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    D = function (e, t) {
      for (var r = t.length; r--;)
        if (t[r] === e || t[r].contains(e)) return !0;
      return !1;
    },
    O = function (e, t) {
      var r = t.s,
        n = t.sc;
      C(e) && (e = l.scrollingElement || s);
      var i = y.indexOf(e),
        a = n === z.sc ? 1 : 2;
      (~i || (i = y.push(e) - 1), y[i + a] || M(e, "scroll", A));
      var u = y[i + a],
        c =
          u ||
          (y[i + a] =
            R(E(e, r), !0) ||
            (C(e)
              ? n
              : R(function (t) {
                  return arguments.length ? (e[r] = t) : e[r];
                })));
      return (
        (c.target = e),
        u || (c.smooth = "smooth" === o.getProperty(e, "scrollBehavior")),
        c
      );
    },
    B = function (e, t, r) {
      var n = e,
        o = e,
        i = k(),
        a = i,
        l = t || 50,
        s = Math.max(500, 3 * l),
        u = function (e, t) {
          var s = k();
          t || s - i > l
            ? ((o = n), (n = e), (a = i), (i = s))
            : r
              ? (n += e)
              : (n = o + ((e - o) / (s - a)) * (i - a));
        };
      return {
        update: u,
        reset: function () {
          ((o = n = r ? 0 : n), (a = i = 0));
        },
        getVelocity: function (e) {
          var t = a,
            l = o,
            c = k();
          return (
            (e || 0 === e) && e !== n && u(e),
            i === a || c - a > s
              ? 0
              : ((n + (r ? l : -l)) / ((r ? c : i) - t)) * 1e3
          );
        },
      };
    },
    Y = function (e, t) {
      return (
        t && !e._gsapAllow && !1 !== e.cancelable && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    X = function (e) {
      var t = Math.max.apply(Math, e),
        r = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(r) ? t : r;
    },
    F = function () {
      (f = o.core.globals().ScrollTrigger) && f.core && S();
    },
    V = function (e) {
      return (
        (o = e || v()),
        !i &&
          o &&
          "u" > typeof document &&
          document.body &&
          ((a = window),
          (s = (l = document).documentElement),
          (u = l.body),
          (p = [a, l, s, u]),
          o.utils.clamp,
          (g = o.core.context || function () {}),
          (d = "onpointerenter" in u ? "pointer" : "mouse"),
          (c = I.isTouch =
            a.matchMedia &&
            a.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : 2 *
                ("ontouchstart" in a ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0)),
          (m = I.eventTypes =
            (
              "ontouchstart" in s
                ? "touchstart,touchmove,touchcancel,touchend"
                : !("onpointerdown" in s)
                  ? "mousedown,mousemove,mouseup,mouseup"
                  : "pointerdown,pointermove,pointercancel,pointerup"
            ).split(",")),
          setTimeout(function () {
            return (x = 0);
          }, 500),
          (i = 1)),
        f || F(),
        i
      );
    };
  ((j.op = z), (y.cache = 0));
  var I = (function () {
    var e;
    function t(e) {
      this.init(e);
    }
    return (
      (t.prototype.init = function (e) {
        (i || V(o) || console.warn("Please gsap.registerPlugin(Observer)"),
          f || F());
        var t = e.tolerance,
          r = e.dragMinimum,
          n = e.type,
          p = e.target,
          v = e.lineHeight,
          x = e.debounce,
          y = e.preventDefault,
          b = e.onStop,
          T = e.onStopDelay,
          S = e.ignore,
          E = e.wheelSpeed,
          _ = e.event,
          P = e.onDragStart,
          R = e.onDragEnd,
          I = e.onDrag,
          H = e.onPress,
          W = e.onRelease,
          q = e.onRight,
          U = e.onLeft,
          G = e.onUp,
          $ = e.onDown,
          K = e.onChangeX,
          Q = e.onChangeY,
          Z = e.onChange,
          J = e.onToggleX,
          ee = e.onToggleY,
          et = e.onHover,
          er = e.onHoverEnd,
          en = e.onMove,
          eo = e.ignoreCheck,
          ei = e.isNormalizer,
          ea = e.onGestureStart,
          el = e.onGestureEnd,
          es = e.onWheel,
          eu = e.onEnable,
          ec = e.onDisable,
          ed = e.onClick,
          ef = e.scrollSpeed,
          ep = e.capture,
          eh = e.allowClicks,
          em = e.lockAxis,
          eg = e.onLockAxis;
        ((this.target = p = L(p) || s),
          (this.vars = e),
          S && (S = o.utils.toArray(S)),
          (t = t || 1e-9),
          (r = r || 0),
          (E = E || 1),
          (ef = ef || 1),
          (n = n || "wheel,touch,pointer"),
          (x = !1 !== x),
          v || (v = parseFloat(a.getComputedStyle(u).lineHeight) || 22));
        var ev,
          ex,
          ew,
          ey,
          eb,
          ek,
          eT,
          eS = this,
          eE = 0,
          eC = 0,
          eM = e.passive || (!y && !1 !== e.passive),
          eN = O(p, j),
          e_ = O(p, z),
          eP = eN(),
          eA = e_(),
          eR =
            ~n.indexOf("touch") &&
            !~n.indexOf("pointer") &&
            "pointerdown" === m[0],
          ej = C(p),
          ez = p.ownerDocument || l,
          eL = [0, 0, 0],
          eD = [0, 0, 0],
          eO = 0,
          eB = function () {
            return (eO = k());
          },
          eY = function (e, t) {
            return (
              ((eS.event = e) && S && D(e.target, S)) ||
              (t && eR && "touch" !== e.pointerType) ||
              (eo && eo(e, t))
            );
          },
          eX = function () {
            var e = (eS.deltaX = X(eL)),
              r = (eS.deltaY = X(eD)),
              n = Math.abs(e) >= t,
              o = Math.abs(r) >= t;
            (Z && (n || o) && Z(eS, e, r, eL, eD),
              n &&
                (q && eS.deltaX > 0 && q(eS),
                U && eS.deltaX < 0 && U(eS),
                K && K(eS),
                J && eS.deltaX < 0 != eE < 0 && J(eS),
                (eE = eS.deltaX),
                (eL[0] = eL[1] = eL[2] = 0)),
              o &&
                ($ && eS.deltaY > 0 && $(eS),
                G && eS.deltaY < 0 && G(eS),
                Q && Q(eS),
                ee && eS.deltaY < 0 != eC < 0 && ee(eS),
                (eC = eS.deltaY),
                (eD[0] = eD[1] = eD[2] = 0)),
              (ey || ew) &&
                (en && en(eS),
                ew && (P && 1 === ew && P(eS), I && I(eS), (ew = 0)),
                (ey = !1)),
              ek && ((ek = !1), 1) && eg && eg(eS),
              eb && (es(eS), (eb = !1)),
              (ev = 0));
          },
          eF = function (e, t, r) {
            ((eL[r] += e),
              (eD[r] += t),
              eS._vx.update(e),
              eS._vy.update(t),
              x ? ev || (ev = requestAnimationFrame(eX)) : eX());
          },
          eV = function (e, t) {
            (em &&
              !eT &&
              ((eS.axis = eT = Math.abs(e) > Math.abs(t) ? "x" : "y"),
              (ek = !0)),
              "y" !== eT && ((eL[2] += e), eS._vx.update(e, !0)),
              "x" !== eT && ((eD[2] += t), eS._vy.update(t, !0)),
              x ? ev || (ev = requestAnimationFrame(eX)) : eX());
          },
          eI = function (e) {
            if (!eY(e, 1)) {
              var t = (e = Y(e, y)).clientX,
                n = e.clientY,
                o = t - eS.x,
                i = n - eS.y,
                a = eS.isDragging;
              ((eS.x = t),
                (eS.y = n),
                (a ||
                  ((o || i) &&
                    (Math.abs(eS.startX - t) >= r ||
                      Math.abs(eS.startY - n) >= r))) &&
                  (ew || (ew = a ? 2 : 1),
                  a || (eS.isDragging = !0),
                  eV(o, i)));
            }
          },
          eH = (eS.onPress = function (e) {
            eY(e, 1) ||
              (e && e.button) ||
              ((eS.axis = eT = null),
              ex.pause(),
              (eS.isPressed = !0),
              (e = Y(e)),
              (eE = eC = 0),
              (eS.startX = eS.x = e.clientX),
              (eS.startY = eS.y = e.clientY),
              eS._vx.reset(),
              eS._vy.reset(),
              M(ei ? p : ez, m[1], eI, eM, !0),
              (eS.deltaX = eS.deltaY = 0),
              H && H(eS));
          }),
          eW = (eS.onRelease = function (e) {
            if (!eY(e, 1)) {
              N(ei ? p : ez, m[1], eI, !0);
              var t = !isNaN(eS.y - eS.startY),
                r = eS.isDragging,
                n =
                  r &&
                  (Math.abs(eS.x - eS.startX) > 3 ||
                    Math.abs(eS.y - eS.startY) > 3),
                i = Y(e);
              (!n &&
                t &&
                (eS._vx.reset(),
                eS._vy.reset(),
                y &&
                  eh &&
                  o.delayedCall(0.08, function () {
                    if (k() - eO > 300 && !e.defaultPrevented) {
                      if (e.target.click) e.target.click();
                      else if (ez.createEvent) {
                        var t = ez.createEvent("MouseEvents");
                        (t.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          a,
                          1,
                          i.screenX,
                          i.screenY,
                          i.clientX,
                          i.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null,
                        ),
                          e.target.dispatchEvent(t));
                      }
                    }
                  })),
                (eS.isDragging = eS.isGesturing = eS.isPressed = !1),
                b && r && !ei && ex.restart(!0),
                ew && eX(),
                R && r && R(eS),
                W && W(eS, n));
            }
          }),
          eq = function (e) {
            return (
              e.touches &&
              e.touches.length > 1 &&
              (eS.isGesturing = !0) &&
              ea(e, eS.isDragging)
            );
          },
          eU = function () {
            return ((eS.isGesturing = !1), el(eS));
          },
          eG = function (e) {
            if (!eY(e)) {
              var t = eN(),
                r = e_();
              (eF((t - eP) * ef, (r - eA) * ef, 1),
                (eP = t),
                (eA = r),
                b && ex.restart(!0));
            }
          },
          e$ = function (e) {
            if (!eY(e)) {
              ((e = Y(e, y)), es && (eb = !0));
              var t =
                (1 === e.deltaMode
                  ? v
                  : 2 === e.deltaMode
                    ? a.innerHeight
                    : 1) * E;
              (eF(e.deltaX * t, e.deltaY * t, 0), b && !ei && ex.restart(!0));
            }
          },
          eK = function (e) {
            if (!eY(e)) {
              var t = e.clientX,
                r = e.clientY,
                n = t - eS.x,
                o = r - eS.y;
              ((eS.x = t),
                (eS.y = r),
                (ey = !0),
                b && ex.restart(!0),
                (n || o) && eV(n, o));
            }
          },
          eQ = function (e) {
            ((eS.event = e), et(eS));
          },
          eZ = function (e) {
            ((eS.event = e), er(eS));
          },
          eJ = function (e) {
            return eY(e) || (Y(e, y) && ed(eS));
          };
        ((ex = eS._dc =
          o
            .delayedCall(T || 0.25, function () {
              (eS._vx.reset(), eS._vy.reset(), ex.pause(), b && b(eS));
            })
            .pause()),
          (eS.deltaX = eS.deltaY = 0),
          (eS._vx = B(0, 50, !0)),
          (eS._vy = B(0, 50, !0)),
          (eS.scrollX = eN),
          (eS.scrollY = e_),
          (eS.isDragging = eS.isGesturing = eS.isPressed = !1),
          g(this),
          (eS.enable = function (e) {
            return (
              !eS.isEnabled &&
                (M(ej ? ez : p, "scroll", A),
                n.indexOf("scroll") >= 0 &&
                  M(ej ? ez : p, "scroll", eG, eM, ep),
                n.indexOf("wheel") >= 0 && M(p, "wheel", e$, eM, ep),
                ((n.indexOf("touch") >= 0 && c) || n.indexOf("pointer") >= 0) &&
                  (M(p, m[0], eH, eM, ep),
                  M(ez, m[2], eW),
                  M(ez, m[3], eW),
                  eh && M(p, "click", eB, !0, !0),
                  ed && M(p, "click", eJ),
                  ea && M(ez, "gesturestart", eq),
                  el && M(ez, "gestureend", eU),
                  et && M(p, d + "enter", eQ),
                  er && M(p, d + "leave", eZ),
                  en && M(p, d + "move", eK)),
                (eS.isEnabled = !0),
                (eS.isDragging = eS.isGesturing = eS.isPressed = ey = ew = !1),
                eS._vx.reset(),
                eS._vy.reset(),
                (eP = eN()),
                (eA = e_()),
                e && e.type && eH(e),
                eu && eu(eS)),
              eS
            );
          }),
          (eS.disable = function () {
            eS.isEnabled &&
              (w.filter(function (e) {
                return e !== eS && C(e.target);
              }).length || N(ej ? ez : p, "scroll", A),
              eS.isPressed &&
                (eS._vx.reset(), eS._vy.reset(), N(ei ? p : ez, m[1], eI, !0)),
              N(ej ? ez : p, "scroll", eG, ep),
              N(p, "wheel", e$, ep),
              N(p, m[0], eH, ep),
              N(ez, m[2], eW),
              N(ez, m[3], eW),
              N(p, "click", eB, !0),
              N(p, "click", eJ),
              N(ez, "gesturestart", eq),
              N(ez, "gestureend", eU),
              N(p, d + "enter", eQ),
              N(p, d + "leave", eZ),
              N(p, d + "move", eK),
              (eS.isEnabled = eS.isPressed = eS.isDragging = !1),
              ec && ec(eS));
          }),
          (eS.kill = eS.revert =
            function () {
              eS.disable();
              var e = w.indexOf(eS);
              (e >= 0 && w.splice(e, 1), h === eS && (h = 0));
            }),
          w.push(eS),
          ei && C(p) && (h = eS),
          eS.enable(_));
      }),
      (e = [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      (function (e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          ((n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n));
        }
      })(t.prototype, e),
      t
    );
  })();
  ((I.version = "3.15.0"),
    (I.create = function (e) {
      return new I(e);
    }),
    (I.register = V),
    (I.getAll = function () {
      return w.slice();
    }),
    (I.getById = function (e) {
      return w.filter(function (t) {
        return t.vars.id === e;
      })[0];
    }),
    v() && o.registerPlugin(I));
  var H,
    W,
    q,
    U,
    G,
    $,
    K,
    Q,
    Z,
    J,
    ee,
    et,
    er,
    en,
    eo,
    ei,
    ea,
    el,
    es,
    eu,
    ec,
    ed,
    ef,
    ep,
    eh,
    em,
    eg,
    ev,
    ex,
    ew,
    ey,
    eb,
    ek,
    eT,
    eS,
    eE,
    eC,
    eM,
    eN = 1,
    e_ = Date.now,
    eP = e_(),
    eA = 0,
    eR = 0,
    ej = function (e, t, r) {
      var n = eU(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
      return ((r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e);
    },
    ez = function (e, t) {
      return t && (!eU(e) || "clamp(" !== e.substr(0, 6))
        ? "clamp(" + e + ")"
        : e;
    },
    eL = function () {
      return (en = 1);
    },
    eD = function () {
      return (en = 0);
    },
    eO = function (e) {
      return e;
    },
    eB = function (e) {
      return Math.round(1e5 * e) / 1e5 || 0;
    },
    eY = function () {
      return "u" > typeof window;
    },
    eX = function () {
      return H || (eY() && (H = window.gsap) && H.registerPlugin && H);
    },
    eF = function (e) {
      return !!~K.indexOf(e);
    },
    eV = function (e) {
      return (
        ("Height" === e ? ey : q["inner" + e]) ||
        G["client" + e] ||
        $["client" + e]
      );
    },
    eI = function (e) {
      return (
        E(e, "getBoundingClientRect") ||
        (eF(e)
          ? function () {
              return ((tK.width = q.innerWidth), (tK.height = ey), tK);
            }
          : function () {
              return ti(e);
            })
      );
    },
    eH = function (e, t, r) {
      var n = r.d,
        o = r.d2,
        i = r.a;
      return (i = E(e, "getBoundingClientRect"))
        ? function () {
            return i()[n];
          }
        : function () {
            return (t ? eV(o) : e["client" + o]) || 0;
          };
    },
    eW = function (e, t) {
      var r = t.s,
        n = t.d2,
        o = t.d,
        i = t.a;
      return Math.max(
        0,
        (i = E(e, (r = "scroll" + n)))
          ? i() - eI(e)()[o]
          : eF(e)
            ? (G[r] || $[r]) - eV(n)
            : e[r] - e["offset" + n],
      );
    },
    eq = function (e, t) {
      for (var r = 0; r < es.length; r += 3)
        (!t || ~t.indexOf(es[r + 1])) && e(es[r], es[r + 1], es[r + 2]);
    },
    eU = function (e) {
      return "string" == typeof e;
    },
    eG = function (e) {
      return "function" == typeof e;
    },
    e$ = function (e) {
      return "number" == typeof e;
    },
    eK = function (e) {
      return "object" == typeof e;
    },
    eQ = function (e, t, r) {
      return e && e.progress(+!t) && r && e.pause();
    },
    eZ = function (e, t, r) {
      if (e.enabled) {
        var n = e._ctx
          ? e._ctx.add(function () {
              return t(e, r);
            })
          : t(e, r);
        n && n.totalTime && (e.callbackAnimation = n);
      }
    },
    eJ = Math.abs,
    e0 = "left",
    e1 = "right",
    e2 = "bottom",
    e3 = "width",
    e5 = "height",
    e4 = "Right",
    e8 = "Left",
    e6 = "Bottom",
    e9 = "padding",
    e7 = "margin",
    te = "Width",
    tt = "Height",
    tr = function (e) {
      return q.getComputedStyle(
        e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e,
      );
    },
    tn = function (e) {
      var t = tr(e).position;
      e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
    },
    to = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    ti = function (e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== tr(e)[eo] &&
          H.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect
          ? e.getBoundingClientRect()
          : e.scrollingElement.getBoundingClientRect();
      return (r && r.progress(0).kill(), n);
    },
    ta = function (e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    },
    tl = function (e) {
      var t,
        r = [],
        n = e.labels,
        o = e.duration();
      for (t in n) r.push(n[t] / o);
      return r;
    },
    ts = function (e) {
      var t = H.utils.snap(e),
        r =
          Array.isArray(e) &&
          e.slice(0).sort(function (e, t) {
            return e - t;
          });
      return r
        ? function (e, n, o) {
            var i;
            if ((void 0 === o && (o = 0.001), !n)) return t(e);
            if (n > 0) {
              for (e -= o, i = 0; i < r.length; i++) if (r[i] >= e) return r[i];
              return r[i - 1];
            }
            for (i = r.length, e += o; i--;) if (r[i] <= e) return r[i];
            return r[0];
          }
        : function (r, n, o) {
            void 0 === o && (o = 0.001);
            var i = t(r);
            return !n || Math.abs(i - r) < o || i - r < 0 == n < 0
              ? i
              : t(n < 0 ? r - e : r + e);
          };
    },
    tu = function (e, t, r, n) {
      return r.split(",").forEach(function (r) {
        return e(t, r, n);
      });
    },
    tc = function (e, t, r, n, o) {
      return e.addEventListener(t, r, {
        passive: !n,
        capture: !!o,
      });
    },
    td = function (e, t, r, n) {
      return e.removeEventListener(t, r, !!n);
    },
    tf = function (e, t, r) {
      (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
    },
    tp = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    th = {
      toggleActions: "play",
      anticipatePin: 0,
    },
    tm = {
      top: 0,
      left: 0,
      center: 0.5,
      bottom: 1,
      right: 1,
    },
    tg = function (e, t) {
      if (eU(e)) {
        var r = e.indexOf("="),
          n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        (~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
          (e =
            n +
            (e in tm
              ? tm[e] * t
              : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0)));
      }
      return e;
    },
    tv = function (e, t, r, n, o, i, a, l) {
      var s = o.startColor,
        u = o.endColor,
        c = o.fontSize,
        d = o.indent,
        f = o.fontWeight,
        p = U.createElement("div"),
        h = eF(r) || "fixed" === E(r, "pinType"),
        m = -1 !== e.indexOf("scroller"),
        g = h ? $ : "IFRAME" === r.tagName ? r.contentDocument.body : r,
        v = -1 !== e.indexOf("start"),
        x = v ? s : u,
        w =
          "border-color:" +
          x +
          ";font-size:" +
          c +
          ";color:" +
          x +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (w += "position:" + ((m || l) && h ? "fixed;" : "absolute;")),
        (m || l || !h) &&
          (w += (n === z ? e1 : e2) + ":" + (i + parseFloat(d)) + "px;"),
        a &&
          (w +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (p._isStart = v),
        p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (p.style.cssText = w),
        (p.innerText = t || 0 === t ? e + "-" + t : e),
        g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
        (p._offset = p["offset" + n.op.d2]),
        tx(p, 0, n, v),
        p
      );
    },
    tx = function (e, t, r, n) {
      var o = {
          display: "block",
        },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      ((e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + te] = 1),
        (o["border" + a + te] = 0),
        (o[r.p] = t + "px"),
        H.set(e, o));
    },
    tw = [],
    ty = {},
    tb = function () {
      return e_() - eA > 34 && (eS || (eS = requestAnimationFrame(tF)));
    },
    tk = function () {
      (ef && ef.isPressed && !(ef.startX > $.clientWidth)) ||
        (y.cache++,
        ef ? eS || (eS = requestAnimationFrame(tF)) : tF(),
        eA || tN("scrollStart"),
        (eA = e_()));
    },
    tT = function () {
      ((em = q.innerWidth), (eh = q.innerHeight));
    },
    tS = function (e) {
      (y.cache++,
        (!0 === e ||
          (!er &&
            !ed &&
            !U.fullscreenElement &&
            !U.webkitFullscreenElement &&
            (!ep ||
              em !== q.innerWidth ||
              Math.abs(q.innerHeight - eh) > 0.25 * q.innerHeight))) &&
          Q.restart(!0));
    },
    tE = {},
    tC = [],
    tM = function e() {
      return td(t3, "scrollEnd", e) || tB(!0);
    },
    tN = function (e) {
      return (
        (tE[e] &&
          tE[e].map(function (e) {
            return e();
          })) ||
        tC
      );
    },
    t_ = [],
    tP = function (e) {
      for (var t = 0; t < t_.length; t += 5)
        (!e || (t_[t + 4] && t_[t + 4].query === e)) &&
          ((t_[t].style.cssText = t_[t + 1]),
          t_[t].getBBox && t_[t].setAttribute("transform", t_[t + 2] || ""),
          (t_[t + 3].uncache = 1));
    },
    tA = function () {
      return y.forEach(function (e) {
        return eG(e) && ++e.cacheID && (e.rec = e());
      });
    },
    tR = function (e, t) {
      var r;
      for (ei = 0; ei < tw.length; ei++)
        (r = tw[ei]) &&
          (!t || r._ctx === t) &&
          (e ? r.kill(1) : r.revert(!0, !0));
      ((eb = !0), t && tP(t), t || tN("revert"));
    },
    tj = function (e, t) {
      (y.cache++,
        (t || !eE) &&
          y.forEach(function (e) {
            return eG(e) && e.cacheID++ && (e.rec = 0);
          }),
        eU(e) && (q.history.scrollRestoration = ex = e));
    },
    tz = 0,
    tL = function () {
      if (eC !== tz) {
        var e = (eC = tz);
        requestAnimationFrame(function () {
          return e === tz && tB(!0);
        });
      }
    },
    tD = function () {
      ($.appendChild(ew),
        (ey = (!ef && ew.offsetHeight) || q.innerHeight),
        $.removeChild(ew));
    },
    tO = function (e) {
      return Z(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    tB = function (e, t) {
      if (
        ((G = U.documentElement),
        ($ = U.body),
        (K = [q, U, G, $]),
        eA && !e && !eb)
      )
        return void tc(t3, "scrollEnd", tM);
      (tD(), (eE = t3.isRefreshing = !0), eb || tA());
      var r = tN("refreshInit");
      (eu && t3.sort(),
        t || tR(),
        y.forEach(function (e) {
          eG(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
        }),
        tw.slice(0).forEach(function (e) {
          return e.refresh();
        }),
        (eb = !1),
        tw.forEach(function (e) {
          if (e._subPinOffset && e.pin) {
            var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
              r = e.pin[t];
            (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh());
          }
        }),
        (ek = 1),
        tO(!0),
        tw.forEach(function (e) {
          var t = eW(e.scroller, e._dir),
            r = "max" === e.vars.end || (e._endClamp && e.end > t),
            n = e._startClamp && e.start >= t;
          (r || n) &&
            e.setPositions(
              n ? t - 1 : e.start,
              r ? Math.max(n ? t : e.start + 1, t) : e.end,
              !0,
            );
        }),
        tO(!1),
        (ek = 0),
        r.forEach(function (e) {
          return e && e.render && e.render(-1);
        }),
        y.forEach(function (e) {
          eG(e) &&
            (e.smooth &&
              requestAnimationFrame(function () {
                return (e.target.style.scrollBehavior = "smooth");
              }),
            e.rec && e(e.rec));
        }),
        tj(ex, 1),
        Q.pause(),
        tz++,
        (eE = 2),
        tF(2),
        tw.forEach(function (e) {
          return eG(e.vars.onRefresh) && e.vars.onRefresh(e);
        }),
        (eE = t3.isRefreshing = !1),
        tN("refresh"));
    },
    tY = 0,
    tX = 1,
    tF = function (e) {
      if (2 === e || (!eE && !eb)) {
        ((t3.isUpdating = !0), eM && eM.update(0));
        var t = tw.length,
          r = e_(),
          n = r - eP >= 50,
          o = t && tw[0].scroll();
        if (
          ((tX = tY > o ? -1 : 1),
          eE || (tY = o),
          n &&
            (eA && !en && r - eA > 200 && ((eA = 0), tN("scrollEnd")),
            (ee = eP),
            (eP = r)),
          tX < 0)
        ) {
          for (ei = t; ei-- > 0;) tw[ei] && tw[ei].update(0, n);
          tX = 1;
        } else for (ei = 0; ei < t; ei++) tw[ei] && tw[ei].update(0, n);
        t3.isUpdating = !1;
      }
      eS = 0;
    },
    tV = [
      e0,
      "top",
      e2,
      e1,
      e7 + e6,
      e7 + e4,
      e7 + "Top",
      e7 + e8,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    tI = tV.concat([
      e3,
      e5,
      "boxSizing",
      "max" + te,
      "max" + tt,
      "position",
      e7,
      e9,
      e9 + "Top",
      e9 + e4,
      e9 + e6,
      e9 + e8,
    ]),
    tH = function (e, t, r) {
      tU(r);
      var n = e._gsap;
      if (n.spacerIsNative) tU(n.spacerState);
      else if (e._gsap.swappedIn) {
        var o = t.parentNode;
        o && (o.insertBefore(e, t), o.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    tW = function (e, t, r, n) {
      if (!e._gsap.swappedIn) {
        for (var o, i = tV.length, a = t.style, l = e.style; i--;)
          a[(o = tV[i])] = r[o];
        ((a.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (a.display = "inline-block"),
          (l[e2] = l[e1] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[e3] = ta(e, j) + "px"),
          (a[e5] = ta(e, z) + "px"),
          (a[e9] = l[e7] = l.top = l[e0] = "0"),
          tU(n),
          (l[e3] = l["max" + te] = r[e3]),
          (l[e5] = l["max" + tt] = r[e5]),
          (l[e9] = r[e9]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0));
      }
    },
    tq = /([A-Z])/g,
    tU = function (e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || H.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          ((r = e[i + 1]),
            (t = e[i]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(tq, "-$1").toLowerCase()));
      }
    },
    tG = function (e) {
      for (var t = tI.length, r = e.style, n = [], o = 0; o < t; o++)
        n.push(tI[o], r[tI[o]]);
      return ((n.t = e), n);
    },
    t$ = function (e, t, r) {
      for (var n, o = [], i = e.length, a = 8 * !!r; a < i; a += 2)
        ((n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]));
      return ((o.t = e.t), o);
    },
    tK = {
      left: 0,
      top: 0,
    },
    tQ = function (e, t, r, n, o, i, a, l, s, u, c, d, f, p) {
      (eG(e) && (e = e(l)),
        eU(e) &&
          "max" === e.substr(0, 3) &&
          (e = d + ("=" === e.charAt(4) ? tg("0" + e.substr(3), r) : 0)));
      var h,
        m,
        g,
        v = f ? f.time() : 0;
      if ((f && f.seek(0), isNaN(e) || (e *= 1), e$(e)))
        (f &&
          (e = H.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            d,
            e,
          )),
          a && tx(a, r, n, !0));
      else {
        eG(t) && (t = t(l));
        var x,
          w,
          y,
          b,
          k = (e || "0").split(" ");
        ((x = ti((g = L(t, l) || $)) || {}).left ||
          x.top ||
          "none" !== tr(g).display ||
          ((b = g.style.display),
          (g.style.display = "block"),
          (x = ti(g)),
          b ? (g.style.display = b) : g.style.removeProperty("display")),
          (w = tg(k[0], x[n.d])),
          (y = tg(k[1] || "0", r)),
          (e = x[n.p] - s[n.p] - u + w + o - y),
          a && tx(a, y, n, r - y < 20 || (a._isStart && y > 20)),
          (r -= r - y));
      }
      if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), i)) {
        var T = e + r,
          S = i._isStart;
        ((h = "scroll" + n.d2),
          tx(
            i,
            T,
            n,
            (S && T > 20) ||
              (!S && (c ? Math.max($[h], G[h]) : i.parentNode[h]) <= T + 1),
          ),
          c &&
            ((s = ti(a)),
            c && (i.style[n.op.p] = s[n.op.p] - n.op.m - i._offset + "px")));
      }
      return (
        f &&
          g &&
          ((h = ti(g)),
          f.seek(d),
          (m = ti(g)),
          (f._caScrollDist = h[n.p] - m[n.p]),
          (e = (e / f._caScrollDist) * d)),
        f && f.seek(v),
        f ? e : Math.round(e)
      );
    },
    tZ = /(webkit|moz|length|cssText|inset)/i,
    tJ = function (e, t, r, n) {
      if (e.parentNode !== t) {
        var o,
          i,
          a = e.style;
        if (t === $) {
          for (o in ((e._stOrig = a.cssText), (i = tr(e))))
            +o ||
              tZ.test(o) ||
              !i[o] ||
              "string" != typeof a[o] ||
              "0" === o ||
              (a[o] = i[o]);
          ((a.top = r), (a.left = n));
        } else a.cssText = e._stOrig;
        ((H.core.getCache(e).uncache = 1), t.appendChild(e));
      }
    },
    t0 = function (e, t, r) {
      var n = t,
        o = n;
      return function (t) {
        var i = Math.round(e());
        return (
          i !== n &&
            i !== o &&
            Math.abs(i - n) > 3 &&
            Math.abs(i - o) > 3 &&
            ((t = i), r && r()),
          (o = n),
          (n = Math.round(t))
        );
      };
    },
    t1 = function (e, t, r) {
      var n = {};
      ((n[t.p] = "+=" + r), H.set(e, n));
    },
    t2 = function (e, t) {
      var r = O(e, t),
        n = "_scroll" + t.p2,
        o = function t(o, i, a, l, s) {
          var u = t.tween,
            c = i.onComplete,
            d = {};
          a = a || r();
          var f = t0(r, a, function () {
            (u.kill(), (t.tween = 0));
          });
          return (
            (s = (l && s) || 0),
            (l = l || o - a),
            u && u.kill(),
            (i[n] = o),
            (i.inherit = !1),
            (i.modifiers = d),
            (d[n] = function () {
              return f(a + l * u.ratio + s * u.ratio * u.ratio);
            }),
            (i.onUpdate = function () {
              (y.cache++, t.tween && tF());
            }),
            (i.onComplete = function () {
              ((t.tween = 0), c && c.call(u));
            }),
            (u = t.tween = H.to(e, i))
          );
        };
      return (
        (e[n] = r),
        (r.wheelHandler = function () {
          return o.tween && o.tween.kill() && (o.tween = 0);
        }),
        tc(e, "wheel", r.wheelHandler),
        t3.isTouch && tc(e, "touchmove", r.wheelHandler),
        o
      );
    },
    t3 = (function () {
      function e(t, r) {
        (W ||
          e.register(H) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          ev(this),
          this.init(t, r));
      }
      return (
        (e.prototype.init = function (t, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !eR)
          ) {
            this.update = this.refresh = this.kill = eO;
            return;
          }
          var n,
            o,
            i,
            a,
            l,
            s,
            u,
            c,
            d,
            f,
            p,
            h,
            m,
            g,
            v,
            x,
            w,
            k,
            T,
            S,
            C,
            M,
            N,
            _,
            P,
            A,
            R,
            D,
            B,
            Y,
            X,
            F,
            V,
            I,
            W,
            K,
            Q,
            et,
            eo,
            ea,
            el,
            es = (t = to(
              eU(t) || e$(t) || t.nodeType
                ? {
                    trigger: t,
                  }
                : t,
              th,
            )),
            ed = es.onUpdate,
            ef = es.toggleClass,
            ep = es.id,
            eh = es.onToggle,
            em = es.onRefresh,
            eg = es.scrub,
            ev = es.trigger,
            ex = es.pin,
            ew = es.pinSpacing,
            ey = es.invalidateOnRefresh,
            eb = es.anticipatePin,
            eS = es.onScrubComplete,
            eC = es.onSnapComplete,
            eP = es.once,
            eL = es.snap,
            eD = es.pinReparent,
            eY = es.pinSpacer,
            eX = es.containerAnimation,
            eV = es.fastScrollEnd,
            eq = es.preventOverlaps,
            e0 =
              t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                ? j
                : z,
            e1 = !eg && 0 !== eg,
            e2 = L(t.scroller || q),
            tu = H.core.getCache(e2),
            tf = eF(e2),
            tm =
              ("pinType" in t
                ? t.pinType
                : E(e2, "pinType") || (tf && "fixed")) === "fixed",
            tx = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
            tb = e1 && t.toggleActions.split(" "),
            tT = "markers" in t ? t.markers : th.markers,
            tE = tf ? 0 : parseFloat(tr(e2)["border" + e0.p2 + te]) || 0,
            tC = this,
            tN =
              t.onRefreshInit &&
              function () {
                return t.onRefreshInit(tC);
              },
            t_ = eH(e2, tf, e0),
            tP =
              !tf || ~b.indexOf(e2)
                ? eI(e2)
                : function () {
                    return tK;
                  },
            tA = 0,
            tR = 0,
            tj = 0,
            tz = O(e2, e0);
          if (
            ((tC._startClamp = tC._endClamp = !1),
            (tC._dir = e0),
            (eb *= 45),
            (tC.scroller = e2),
            (tC.scroll = eX ? eX.time.bind(eX) : tz),
            (s = tz()),
            (tC.vars = t),
            (r = r || t.animation),
            "refreshPriority" in t &&
              ((eu = 1), -9999 === t.refreshPriority && (eM = tC)),
            (tu.tweenScroll = tu.tweenScroll || {
              top: t2(e2, z),
              left: t2(e2, j),
            }),
            (tC.tweenTo = i = tu.tweenScroll[e0.p]),
            (tC.scrubDuration = function (e) {
              (W = e$(e) && e)
                ? I
                  ? I.duration(e)
                  : (I = H.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: W,
                      paused: !0,
                      onComplete: function () {
                        return eS && eS(tC);
                      },
                    }))
                : (I && I.progress(1).kill(), (I = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !tC.isReverted) ||
                (!1 !== r.vars.immediateRender &&
                  !1 !== t.immediateRender &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (tC.animation = r.pause()),
              (r.scrollTrigger = tC),
              tC.scrubDuration(eg),
              (F = 0),
              ep || (ep = r.vars.id)),
            eL &&
              ((!eK(eL) || eL.push) &&
                (eL = {
                  snapTo: eL,
                }),
              "scrollBehavior" in $.style &&
                H.set(tf ? [$, G] : e2, {
                  scrollBehavior: "auto",
                }),
              y.forEach(function (e) {
                return (
                  eG(e) &&
                  e.target === (tf ? U.scrollingElement || G : e2) &&
                  (e.smooth = !1)
                );
              }),
              (l = eG(eL.snapTo)
                ? eL.snapTo
                : "labels" === eL.snapTo
                  ? ((n = r),
                    function (e) {
                      return H.utils.snap(tl(n), e);
                    })
                  : "labelsDirectional" === eL.snapTo
                    ? ((o = r),
                      function (e, t) {
                        return ts(tl(o))(e, t.direction);
                      })
                    : !1 !== eL.directional
                      ? function (e, t) {
                          return ts(eL.snapTo)(
                            e,
                            e_() - tR < 500 ? 0 : t.direction,
                          );
                        }
                      : H.utils.snap(eL.snapTo)),
              (K = eK(
                (K = eL.duration || {
                  min: 0.1,
                  max: 2,
                }),
              )
                ? J(K.min, K.max)
                : J(K, K)),
              (Q = H.delayedCall(eL.delay || W / 2 || 0.1, function () {
                var e = tz(),
                  t = e_() - tR < 500,
                  n = i.tween;
                if (
                  (t || 10 > Math.abs(tC.getVelocity())) &&
                  !n &&
                  !en &&
                  tA !== e
                ) {
                  var o,
                    a,
                    s = (e - c) / x,
                    u = r && !e1 ? r.totalProgress() : s,
                    f = t ? 0 : ((u - V) / (e_() - ee)) * 1e3 || 0,
                    p = H.utils.clamp(-s, 1 - s, (eJ(f / 2) * f) / 0.185),
                    h = s + (!1 === eL.inertia ? 0 : p),
                    m = eL,
                    g = m.onStart,
                    v = m.onInterrupt,
                    w = m.onComplete;
                  if (
                    (e$((o = l(h, tC))) || (o = h),
                    (a = Math.max(0, Math.round(c + o * x))),
                    e <= d && e >= c && a !== e)
                  ) {
                    if (n && !n._initted && n.data <= eJ(a - e)) return;
                    (!1 === eL.inertia && (p = o - s),
                      i(
                        a,
                        {
                          duration: K(
                            eJ(
                              (0.185 * Math.max(eJ(h - u), eJ(o - u))) /
                                f /
                                0.05 || 0,
                            ),
                          ),
                          ease: eL.ease || "power3",
                          data: eJ(a - e),
                          onInterrupt: function () {
                            return Q.restart(!0) && v && eZ(tC, v);
                          },
                          onComplete: function () {
                            (tC.update(),
                              (tA = tz()),
                              r &&
                                !e1 &&
                                (I
                                  ? I.resetTo(
                                      "totalProgress",
                                      o,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(o)),
                              (F = V =
                                r && !e1 ? r.totalProgress() : tC.progress),
                              eC && eC(tC),
                              w && eZ(tC, w));
                          },
                        },
                        e,
                        p * x,
                        a - e - p * x,
                      ),
                      g && eZ(tC, g, i.tween));
                  }
                } else tC.isActive && tA !== e && Q.restart(!0);
              }).pause())),
            ep && (ty[ep] = tC),
            (el =
              (ev = tC.trigger = L(ev || (!0 !== ex && ex))) &&
              ev._gsap &&
              ev._gsap.stRevert) && (el = el(tC)),
            (ex = !0 === ex ? ev : L(ex)),
            eU(ef) &&
              (ef = {
                targets: ev,
                className: ef,
              }),
            ex &&
              (!1 === ew ||
                ew === e7 ||
                (ew =
                  (!!ew ||
                    !ex.parentNode ||
                    !ex.parentNode.style ||
                    "flex" !== tr(ex.parentNode).display) &&
                  e9),
              (tC.pin = ex),
              (a = H.core.getCache(ex)).spacer
                ? (w = a.pinState)
                : (eY &&
                    ((eY = L(eY)) &&
                      !eY.nodeType &&
                      (eY = eY.current || eY.nativeElement),
                    (a.spacerIsNative = !!eY),
                    eY && (a.spacerState = tG(eY))),
                  (a.spacer = S = eY || U.createElement("div")),
                  S.classList.add("pin-spacer"),
                  ep && S.classList.add("pin-spacer-" + ep),
                  (a.pinState = w = tG(ex))),
              !1 !== t.force3D &&
                H.set(ex, {
                  force3D: !0,
                }),
              (tC.spacer = S = a.spacer),
              (A = (X = tr(ex))[ew + e0.os2]),
              (M = H.getProperty(ex)),
              (N = H.quickSetter(ex, e0.a, "px")),
              tW(ex, S, X),
              (T = tG(ex))),
            tT)
          ) {
            ((g = eK(tT) ? to(tT, tp) : tp),
              (h = tv("scroller-start", ep, e2, e0, g, 0)),
              (m = tv("scroller-end", ep, e2, e0, g, 0, h)),
              (C = h["offset" + e0.op.d2]));
            var tD = L(E(e2, "content") || e2);
            ((f = this.markerStart = tv("start", ep, tD, e0, g, C, 0, eX)),
              (p = this.markerEnd = tv("end", ep, tD, e0, g, C, 0, eX)),
              eX && (ea = H.quickSetter([f, p], e0.a, "px")),
              tm ||
                (b.length && !0 === E(e2, "fixedMarkers")) ||
                (tn(tf ? $ : e2),
                H.set([h, m], {
                  force3D: !0,
                }),
                (D = H.quickSetter(h, e0.a, "px")),
                (Y = H.quickSetter(m, e0.a, "px"))));
          }
          if (eX) {
            var tO = eX.vars.onUpdate,
              tB = eX.vars.onUpdateParams;
            eX.eventCallback("onUpdate", function () {
              (tC.update(0, 0, 1), tO && tO.apply(eX, tB || []));
            });
          }
          if (
            ((tC.previous = function () {
              return tw[tw.indexOf(tC) - 1];
            }),
            (tC.next = function () {
              return tw[tw.indexOf(tC) + 1];
            }),
            (tC.revert = function (e, t) {
              if (!t) return tC.kill(!0);
              var n = !1 !== e || !tC.enabled,
                o = er;
              n !== tC.isReverted &&
                (n &&
                  ((et = Math.max(tz(), tC.scroll.rec || 0)),
                  (tj = tC.progress),
                  (eo = r && r.progress())),
                f &&
                  [f, p, h, m].forEach(function (e) {
                    return (e.style.display = n ? "none" : "block");
                  }),
                n && ((er = tC), tC.update(n)),
                !ex ||
                  (eD && tC.isActive) ||
                  (n ? tH(ex, S, w) : tW(ex, S, tr(ex), R)),
                n || tC.update(n),
                (er = o),
                (tC.isReverted = n));
            }),
            (tC.refresh = function (n, o, a, l) {
              if ((!er && tC.enabled) || o) {
                if (ex && n && eA) return void tc(e, "scrollEnd", tM);
                (!eE && tN && tN(tC),
                  (er = tC),
                  i.tween && !a && (i.tween.kill(), (i.tween = 0)),
                  I && I.pause(),
                  ey &&
                    r &&
                    (r
                      .revert({
                        kill: !1,
                      })
                      .invalidate(),
                    r.getChildren
                      ? r.getChildren(!0, !0, !1).forEach(function (e) {
                          return e.vars.immediateRender && e.render(0, !0, !0);
                        })
                      : r.vars.immediateRender && r.render(0, !0, !0)),
                  tC.isReverted || tC.revert(!0, !0),
                  (tC._subPinOffset = !1));
                var g,
                  y,
                  b,
                  E,
                  C,
                  N,
                  A,
                  D,
                  Y,
                  X,
                  F,
                  V,
                  W,
                  q = t_(),
                  K = tP(),
                  Z = eX ? eX.duration() : eW(e2, e0),
                  J = x <= 0.01 || !x,
                  ee = 0,
                  en = l || 0,
                  ei = eK(a) ? a.end : t.end,
                  ea = t.endTrigger || ev,
                  el = eK(a)
                    ? a.start
                    : t.start ||
                      (0 !== t.start && ev ? (ex ? "0 0" : "0 100%") : 0),
                  es = (tC.pinnedContainer =
                    t.pinnedContainer && L(t.pinnedContainer, tC)),
                  eu = (ev && Math.max(0, tw.indexOf(tC))) || 0,
                  ed = eu;
                for (
                  tT &&
                  eK(a) &&
                  ((V = H.getProperty(h, e0.p)), (W = H.getProperty(m, e0.p)));
                  ed-- > 0;
                )
                  ((N = tw[ed]).end || N.refresh(0, 1) || (er = tC),
                    (A = N.pin) &&
                      (A === ev || A === ex || A === es) &&
                      !N.isReverted &&
                      (X || (X = []), X.unshift(N), N.revert(!0, !0)),
                    N !== tw[ed] && (eu--, ed--));
                for (
                  eG(el) && (el = el(tC)),
                    c =
                      tQ(
                        (el = ej(el, "start", tC)),
                        ev,
                        q,
                        e0,
                        tz(),
                        f,
                        h,
                        tC,
                        K,
                        tE,
                        tm,
                        Z,
                        eX,
                        tC._startClamp && "_startClamp",
                      ) || (ex ? -0.001 : 0),
                    eG(ei) && (ei = ei(tC)),
                    eU(ei) &&
                      !ei.indexOf("+=") &&
                      (~ei.indexOf(" ")
                        ? (ei = (eU(el) ? el.split(" ")[0] : "") + ei)
                        : ((ee = tg(ei.substr(2), q)),
                          (ei = eU(el)
                            ? el
                            : (eX
                                ? H.utils.mapRange(
                                    0,
                                    eX.duration(),
                                    eX.scrollTrigger.start,
                                    eX.scrollTrigger.end,
                                    c,
                                  )
                                : c) + ee),
                          (ea = ev))),
                    ei = ej(ei, "end", tC),
                    d =
                      Math.max(
                        c,
                        tQ(
                          ei || (ea ? "100% 0" : Z),
                          ea,
                          q,
                          e0,
                          tz() + ee,
                          p,
                          m,
                          tC,
                          K,
                          tE,
                          tm,
                          Z,
                          eX,
                          tC._endClamp && "_endClamp",
                        ),
                      ) || -0.001,
                    ee = 0,
                    ed = eu;
                  ed--;
                )
                  (A = (N = tw[ed] || {}).pin) &&
                    N.start - N._pinPush <= c &&
                    !eX &&
                    N.end > 0 &&
                    ((g =
                      N.end -
                      (tC._startClamp ? Math.max(0, N.start) : N.start)),
                    ((A === ev && N.start - N._pinPush < c) || A === es) &&
                      isNaN(el) &&
                      (ee += g * (1 - N.progress)),
                    A === ex && (en += g));
                if (
                  ((c += ee),
                  (d += ee),
                  tC._startClamp && (tC._startClamp += ee),
                  tC._endClamp &&
                    !eE &&
                    ((tC._endClamp = d || -0.001),
                    (d = Math.min(d, eW(e2, e0)))),
                  (x = d - c || ((c -= 0.01) && 0.001)),
                  J && (tj = H.utils.clamp(0, 1, H.utils.normalize(c, d, et))),
                  (tC._pinPush = en),
                  f &&
                    ee &&
                    (((g = {})[e0.a] = "+=" + ee),
                    es && (g[e0.p] = "-=" + tz()),
                    H.set([f, p], g)),
                  ex && !(ek && tC.end >= eW(e2, e0)))
                )
                  ((g = tr(ex)),
                    (E = e0 === z),
                    (b = tz()),
                    (_ = parseFloat(M(e0.a)) + en),
                    !Z &&
                      d > 1 &&
                      ((F = {
                        style: (F = (tf ? U.scrollingElement || G : e2).style),
                        value: F["overflow" + e0.a.toUpperCase()],
                      }),
                      tf &&
                        "scroll" !== tr($)["overflow" + e0.a.toUpperCase()] &&
                        (F.style["overflow" + e0.a.toUpperCase()] = "scroll")),
                    tW(ex, S, g),
                    (T = tG(ex)),
                    (y = ti(ex, !0)),
                    (D = tm && O(e2, E ? j : z)()),
                    ew
                      ? (((R = [ew + e0.os2, x + en + "px"]).t = S),
                        (ed = ew === e9 ? ta(ex, e0) + x + en : 0) &&
                          (R.push(e0.d, ed + "px"),
                          "auto" !== S.style.flexBasis &&
                            (S.style.flexBasis = ed + "px")),
                        tU(R),
                        es &&
                          tw.forEach(function (e) {
                            e.pin === es &&
                              !1 !== e.vars.pinSpacing &&
                              (e._subPinOffset = !0);
                          }),
                        tm && tz(et))
                      : (ed = ta(ex, e0)) &&
                        "auto" !== S.style.flexBasis &&
                        (S.style.flexBasis = ed + "px"),
                    tm &&
                      (((C = {
                        top: y.top + (E ? b - c : D) + "px",
                        left: y.left + (E ? D : b - c) + "px",
                        boxSizing: "border-box",
                        position: "fixed",
                      })[e3] = C["max" + te] =
                        Math.ceil(y.width) + "px"),
                      (C[e5] = C["max" + tt] = Math.ceil(y.height) + "px"),
                      (C[e7] =
                        C[e7 + "Top"] =
                        C[e7 + e4] =
                        C[e7 + e6] =
                        C[e7 + e8] =
                          "0"),
                      (C[e9] = g[e9]),
                      (C[e9 + "Top"] = g[e9 + "Top"]),
                      (C[e9 + e4] = g[e9 + e4]),
                      (C[e9 + e6] = g[e9 + e6]),
                      (C[e9 + e8] = g[e9 + e8]),
                      (k = t$(w, C, eD)),
                      eE && tz(0)),
                    r
                      ? ((Y = r._initted),
                        ec(1),
                        r.render(r.duration(), !0, !0),
                        (P = M(e0.a) - _ + x + en),
                        (B = Math.abs(x - P) > 1),
                        tm && B && k.splice(k.length - 2, 2),
                        r.render(0, !0, !0),
                        Y || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        ec(0))
                      : (P = x),
                    F &&
                      (F.value
                        ? (F.style["overflow" + e0.a.toUpperCase()] = F.value)
                        : F.style.removeProperty("overflow-" + e0.a)));
                else if (ev && tz() && !eX)
                  for (y = ev.parentNode; y && y !== $;)
                    (y._pinOffset && ((c -= y._pinOffset), (d -= y._pinOffset)),
                      (y = y.parentNode));
                (X &&
                  X.forEach(function (e) {
                    return e.revert(!1, !0);
                  }),
                  (tC.start = c),
                  (tC.end = d),
                  (s = u = eE ? et : tz()),
                  eX || eE || (s < et && tz(et), (tC.scroll.rec = 0)),
                  tC.revert(!1, !0),
                  (tR = e_()),
                  Q && ((tA = -1), Q.restart(!0)),
                  (er = 0),
                  r &&
                    e1 &&
                    (r._initted || eo) &&
                    r.progress() !== eo &&
                    r.progress(eo || 0, !0).render(r.time(), !0, !0),
                  (J || tj !== tC.progress || eX || ey || (r && !r._initted)) &&
                    (r &&
                      !e1 &&
                      (r._initted || tj || !1 !== r.vars.immediateRender) &&
                      r.totalProgress(
                        eX && c < -0.001 && !tj
                          ? H.utils.normalize(c, d, 0)
                          : tj,
                        !0,
                      ),
                    (tC.progress = J || (s - c) / x === tj ? 0 : tj)),
                  ex && ew && (S._pinOffset = Math.round(tC.progress * P)),
                  I && I.invalidate(),
                  isNaN(V) ||
                    ((V -= H.getProperty(h, e0.p)),
                    (W -= H.getProperty(m, e0.p)),
                    t1(h, e0, V),
                    t1(f, e0, V - (l || 0)),
                    t1(m, e0, W),
                    t1(p, e0, W - (l || 0))),
                  J && !eE && tC.update(),
                  !em || eE || v || ((v = !0), em(tC), (v = !1)));
              }
            }),
            (tC.getVelocity = function () {
              return ((tz() - u) / (e_() - ee)) * 1e3 || 0;
            }),
            (tC.endAnimation = function () {
              (eQ(tC.callbackAnimation),
                r &&
                  (I
                    ? I.progress(1)
                    : r.paused()
                      ? e1 || eQ(r, tC.direction < 0, 1)
                      : eQ(r, r.reversed())));
            }),
            (tC.labelToScroll = function (e) {
              return (
                (r &&
                  r.labels &&
                  (c || tC.refresh() || c) +
                    (r.labels[e] / r.duration()) * x) ||
                0
              );
            }),
            (tC.getTrailing = function (e) {
              var t = tw.indexOf(tC),
                r =
                  tC.direction > 0 ? tw.slice(0, t).reverse() : tw.slice(t + 1);
              return (
                eU(e)
                  ? r.filter(function (t) {
                      return t.vars.preventOverlaps === e;
                    })
                  : r
              ).filter(function (e) {
                return tC.direction > 0 ? e.end <= c : e.start >= d;
              });
            }),
            (tC.update = function (e, t, n) {
              if (!eX || n || e) {
                var o,
                  a,
                  l,
                  f,
                  p,
                  m,
                  g,
                  v = !0 === eE ? et : tC.scroll(),
                  w = e ? 0 : (v - c) / x,
                  y = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                  b = tC.progress;
                if (
                  (t &&
                    ((u = s),
                    (s = eX ? tz() : v),
                    eL && ((V = F), (F = r && !e1 ? r.totalProgress() : y))),
                  eb &&
                    ex &&
                    !er &&
                    !eN &&
                    eA &&
                    (!y && c < v + ((v - u) / (e_() - ee)) * eb
                      ? (y = 1e-4)
                      : 1 === y &&
                        d > v + ((v - u) / (e_() - ee)) * eb &&
                        (y = 0.9999)),
                  y !== b && tC.enabled)
                ) {
                  if (
                    ((f =
                      (p =
                        (o = tC.isActive = !!y && y < 1) != (!!b && b < 1)) ||
                      !!y != !!b),
                    (tC.direction = y > b ? 1 : -1),
                    (tC.progress = y),
                    f &&
                      !er &&
                      ((a = y && !b ? 0 : 1 === y ? 1 : 1 === b ? 2 : 3),
                      e1 &&
                        ((l =
                          (!p && "none" !== tb[a + 1] && tb[a + 1]) || tb[a]),
                        (g =
                          r && ("complete" === l || "reset" === l || l in r)))),
                    eq &&
                      (p || g) &&
                      (g || eg || !r) &&
                      (eG(eq)
                        ? eq(tC)
                        : tC.getTrailing(eq).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    !e1 &&
                      (!I || er || eN
                        ? r && r.totalProgress(y, !!(er && (tR || e)))
                        : (I._dp._time - I._start !== I._time &&
                            I.render(I._dp._time - I._start),
                          I.resetTo
                            ? I.resetTo("totalProgress", y, r._tTime / r._tDur)
                            : ((I.vars.totalProgress = y),
                              I.invalidate().restart()))),
                    ex)
                  )
                    if ((e && ew && (S.style[ew + e0.os2] = A), tm)) {
                      if (f) {
                        if (
                          ((m =
                            !e && y > b && d + 1 > v && v + 1 >= eW(e2, e0)),
                          eD)
                        )
                          if (!e && (o || m)) {
                            var E = ti(ex, !0),
                              C = v - c;
                            tJ(
                              ex,
                              $,
                              E.top + (e0 === z ? C : 0) + "px",
                              E.left + (e0 === z ? 0 : C) + "px",
                            );
                          } else tJ(ex, S);
                        (tU(o || m ? k : T),
                          (B && y < 1 && o) || N(_ + (1 !== y || m ? 0 : P)));
                      }
                    } else N(eB(_ + P * y));
                  (!eL || i.tween || er || eN || Q.restart(!0),
                    ef &&
                      (p || (eP && y && (y < 1 || !eT))) &&
                      Z(ef.targets).forEach(function (e) {
                        return e.classList[o || eP ? "add" : "remove"](
                          ef.className,
                        );
                      }),
                    !ed || e1 || e || ed(tC),
                    f && !er
                      ? (e1 &&
                          (g &&
                            ("complete" === l
                              ? r.pause().totalProgress(1)
                              : "reset" === l
                                ? r.restart(!0).pause()
                                : "restart" === l
                                  ? r.restart(!0)
                                  : r[l]()),
                          ed && ed(tC)),
                        (p || !eT) &&
                          (eh && p && eZ(tC, eh),
                          tx[a] && eZ(tC, tx[a]),
                          eP && (1 === y ? tC.kill(!1, 1) : (tx[a] = 0)),
                          !p && tx[(a = 1 === y ? 1 : 3)] && eZ(tC, tx[a])),
                        eV &&
                          !o &&
                          Math.abs(tC.getVelocity()) > (e$(eV) ? eV : 2500) &&
                          (eQ(tC.callbackAnimation),
                          I
                            ? I.progress(1)
                            : eQ(r, "reverse" === l ? 1 : !y, 1)))
                      : e1 && ed && !er && ed(tC));
                }
                if (Y) {
                  var M = eX
                    ? (v / eX.duration()) * (eX._caScrollDist || 0)
                    : v;
                  (D(M + +!!h._isFlipped), Y(M));
                }
                ea && ea((-v / eX.duration()) * (eX._caScrollDist || 0));
              }
            }),
            (tC.enable = function (t, r) {
              tC.enabled ||
                ((tC.enabled = !0),
                tc(e2, "resize", tS),
                tf || tc(e2, "scroll", tk),
                tN && tc(e, "refreshInit", tN),
                !1 !== t && ((tC.progress = tj = 0), (s = u = tA = tz())),
                !1 !== r && tC.refresh());
            }),
            (tC.getTween = function (e) {
              return e && i ? i.tween : I;
            }),
            (tC.setPositions = function (e, t, r, n) {
              if (eX) {
                var o = eX.scrollTrigger,
                  i = eX.duration(),
                  a = o.end - o.start;
                ((e = o.start + (a * e) / i), (t = o.start + (a * t) / i));
              }
              (tC.refresh(
                !1,
                !1,
                {
                  start: ez(e, r && !!tC._startClamp),
                  end: ez(t, r && !!tC._endClamp),
                },
                n,
              ),
                tC.update());
            }),
            (tC.adjustPinSpacing = function (e) {
              if (R && e) {
                var t = R.indexOf(e0.d) + 1;
                ((R[t] = parseFloat(R[t]) + e + "px"),
                  (R[1] = parseFloat(R[1]) + e + "px"),
                  tU(R));
              }
            }),
            (tC.disable = function (t, r) {
              if (
                (!1 !== t && tC.revert(!0, !0),
                tC.enabled &&
                  ((tC.enabled = tC.isActive = !1),
                  r || (I && I.pause()),
                  (et = 0),
                  a && (a.uncache = 1),
                  tN && td(e, "refreshInit", tN),
                  Q && (Q.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                  !tf))
              ) {
                for (var n = tw.length; n--;)
                  if (tw[n].scroller === e2 && tw[n] !== tC) return;
                (td(e2, "resize", tS), tf || td(e2, "scroll", tk));
              }
            }),
            (tC.kill = function (e, n) {
              (tC.disable(e, n), I && !n && I.kill(), ep && delete ty[ep]);
              var o = tw.indexOf(tC);
              (o >= 0 && tw.splice(o, 1),
                o === ei && tX > 0 && ei--,
                (o = 0),
                tw.forEach(function (e) {
                  return e.scroller === tC.scroller && (o = 1);
                }),
                o || eE || (tC.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  e &&
                    r.revert({
                      kill: !1,
                    }),
                  n || r.kill()),
                f &&
                  [f, p, h, m].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                eM === tC && (eM = 0),
                ex &&
                  (a && (a.uncache = 1),
                  (o = 0),
                  tw.forEach(function (e) {
                    return e.pin === ex && o++;
                  }),
                  o || (a.spacer = 0)),
                t.onKill && t.onKill(tC));
            }),
            tw.push(tC),
            tC.enable(!1, !1),
            el && el(tC),
            r && r.add && !x)
          ) {
            var tY = tC.update;
            ((tC.update = function () {
              ((tC.update = tY), y.cache++, c || d || tC.refresh());
            }),
              H.delayedCall(0.01, tC.update),
              (x = 0.01),
              (c = d = 0));
          } else tC.refresh();
          ex && tL();
        }),
        (e.register = function (t) {
          return (
            W ||
              ((H = t || eX()),
              eY() && window.document && e.enable(),
              (W = eR)),
            W
          );
        }),
        (e.defaults = function (e) {
          if (e) for (var t in e) th[t] = e[t];
          return th;
        }),
        (e.disable = function (e, t) {
          ((eR = 0),
            tw.forEach(function (r) {
              return r[t ? "kill" : "disable"](e);
            }),
            td(q, "wheel", tk),
            td(U, "scroll", tk),
            clearInterval(et),
            td(U, "touchcancel", eO),
            td($, "touchstart", eO),
            tu(td, U, "pointerdown,touchstart,mousedown", eL),
            tu(td, U, "pointerup,touchend,mouseup", eD),
            Q.kill(),
            eq(td));
          for (var r = 0; r < y.length; r += 3)
            (tf(td, y[r], y[r + 1]), tf(td, y[r], y[r + 2]));
        }),
        (e.enable = function () {
          if (
            ((q = window),
            (G = (U = document).documentElement),
            ($ = U.body),
            H)
          )
            if (
              ((Z = H.utils.toArray),
              (J = H.utils.clamp),
              (ev = H.core.context || eO),
              (ec = H.core.suppressOverwrites || eO),
              (ex = q.history.scrollRestoration || "auto"),
              (tY = q.pageYOffset || 0),
              H.core.globals("ScrollTrigger", e),
              $)
            ) {
              ((eR = 1),
                ((ew = document.createElement("div")).style.height = "100vh"),
                (ew.style.position = "absolute"),
                tD(),
                (function e() {
                  return eR && requestAnimationFrame(e);
                })(),
                I.register(H),
                (e.isTouch = I.isTouch),
                (eg =
                  I.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (ep = 1 === I.isTouch),
                tc(q, "wheel", tk),
                (K = [q, U, G, $]),
                H.matchMedia
                  ? ((e.matchMedia = function (e) {
                      var t,
                        r = H.matchMedia();
                      for (t in e) r.add(t, e[t]);
                      return r;
                    }),
                    H.addEventListener("matchMediaInit", function () {
                      (tA(), tR());
                    }),
                    H.addEventListener("matchMediaRevert", function () {
                      return tP();
                    }),
                    H.addEventListener("matchMedia", function () {
                      (tB(0, 1), tN("matchMedia"));
                    }),
                    H.matchMedia().add("(orientation: portrait)", function () {
                      return (tT(), tT);
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                tT(),
                tc(U, "scroll", tk));
              var t,
                r,
                n = $.hasAttribute("style"),
                o = $.style,
                i = o.borderTopStyle,
                a = H.core.Animation.prototype;
              for (
                a.revert ||
                  Object.defineProperty(a, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  o.borderTopStyle = "solid",
                  z.m = Math.round((t = ti($)).top + z.sc()) || 0,
                  j.m = Math.round(t.left + j.sc()) || 0,
                  i
                    ? (o.borderTopStyle = i)
                    : o.removeProperty("border-top-style"),
                  n ||
                    ($.setAttribute("style", ""), $.removeAttribute("style")),
                  et = setInterval(tb, 250),
                  H.delayedCall(0.5, function () {
                    return (eN = 0);
                  }),
                  tc(U, "touchcancel", eO),
                  tc($, "touchstart", eO),
                  tu(tc, U, "pointerdown,touchstart,mousedown", eL),
                  tu(tc, U, "pointerup,touchend,mouseup", eD),
                  eo = H.utils.checkPrefix("transform"),
                  tI.push(eo),
                  W = e_(),
                  Q = H.delayedCall(0.2, tB).pause(),
                  es = [
                    U,
                    "visibilitychange",
                    function () {
                      var e = q.innerWidth,
                        t = q.innerHeight;
                      U.hidden
                        ? ((ea = e), (el = t))
                        : (ea !== e || el !== t) && tS();
                    },
                    U,
                    "DOMContentLoaded",
                    tB,
                    q,
                    "load",
                    tB,
                    q,
                    "resize",
                    tS,
                  ],
                  eq(tc),
                  tw.forEach(function (e) {
                    return e.enable(0, 1);
                  }),
                  r = 0;
                r < y.length;
                r += 3
              )
                (tf(td, y[r], y[r + 1]), tf(td, y[r], y[r + 2]));
            } else
              U &&
                U.addEventListener("DOMContentLoaded", function t() {
                  (e.enable(), U.removeEventListener("DOMContentLoaded", t));
                });
        }),
        (e.config = function (t) {
          "limitCallbacks" in t && (eT = !!t.limitCallbacks);
          var r = t.syncInterval;
          ((r && clearInterval(et)) || ((et = r) && setInterval(tb, r)),
            "ignoreMobileResize" in t &&
              (ep = 1 === e.isTouch && t.ignoreMobileResize),
            "autoRefreshEvents" in t &&
              (eq(td) || eq(tc, t.autoRefreshEvents || "none"),
              (ed = -1 === (t.autoRefreshEvents + "").indexOf("resize"))));
        }),
        (e.scrollerProxy = function (e, t) {
          var r = L(e),
            n = y.indexOf(r),
            o = eF(r);
          (~n && y.splice(n, o ? 6 : 2),
            t && (o ? b.unshift(q, t, $, t, G, t) : b.unshift(r, t)));
        }),
        (e.clearMatchMedia = function (e) {
          tw.forEach(function (t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
          });
        }),
        (e.isInViewport = function (e, t, r) {
          var n = (eU(e) ? L(e) : e).getBoundingClientRect(),
            o = n[r ? e3 : e5] * t || 0;
          return r
            ? n.right - o > 0 && n.left + o < q.innerWidth
            : n.bottom - o > 0 && n.top + o < q.innerHeight;
        }),
        (e.positionInViewport = function (e, t, r) {
          eU(e) && (e = L(e));
          var n = e.getBoundingClientRect(),
            o = n[r ? e3 : e5],
            i =
              null == t
                ? o / 2
                : t in tm
                  ? tm[t] * o
                  : ~t.indexOf("%")
                    ? (parseFloat(t) * o) / 100
                    : parseFloat(t) || 0;
          return r ? (n.left + i) / q.innerWidth : (n.top + i) / q.innerHeight;
        }),
        (e.killAll = function (e) {
          if (
            (tw.slice(0).forEach(function (e) {
              return "ScrollSmoother" !== e.vars.id && e.kill();
            }),
            !0 !== e)
          ) {
            var t = tE.killAll || [];
            ((tE = {}),
              t.forEach(function (e) {
                return e();
              }));
          }
        }),
        e
      );
    })();
  ((t3.version = "3.15.0"),
    (t3.saveStyles = function (e) {
      return e
        ? Z(e).forEach(function (e) {
            if (e && e.style) {
              var t = t_.indexOf(e);
              (t >= 0 && t_.splice(t, 5),
                t_.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  H.core.getCache(e),
                  ev(),
                ));
            }
          })
        : t_;
    }),
    (t3.revert = function (e, t) {
      return tR(!e, t);
    }),
    (t3.create = function (e, t) {
      return new t3(e, t);
    }),
    (t3.refresh = function (e) {
      return e ? tS(!0) : (W || t3.register()) && tB(!0);
    }),
    (t3.update = function (e) {
      return ++y.cache && tF(2 * (!0 === e));
    }),
    (t3.clearScrollMemory = tj),
    (t3.maxScroll = function (e, t) {
      return eW(e, t ? j : z);
    }),
    (t3.getScrollFunc = function (e, t) {
      return O(L(e), t ? j : z);
    }),
    (t3.getById = function (e) {
      return ty[e];
    }),
    (t3.getAll = function () {
      return tw.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (t3.isScrolling = function () {
      return !!eA;
    }),
    (t3.snapDirectional = ts),
    (t3.addEventListener = function (e, t) {
      var r = tE[e] || (tE[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (t3.removeEventListener = function (e, t) {
      var r = tE[e],
        n = r && r.indexOf(t);
      n >= 0 && r.splice(n, 1);
    }),
    (t3.batch = function (e, t) {
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9,
        l = function (e, t) {
          var r = [],
            n = [],
            o = H.delayedCall(i, function () {
              (t(r, n), (r = []), (n = []));
            }).pause();
          return function (e) {
            (r.length || o.restart(!0),
              r.push(e.trigger),
              n.push(e),
              a <= r.length && o.progress(1));
          };
        };
      for (r in t)
        o[r] =
          "on" === r.substr(0, 2) && eG(t[r]) && "onRefreshInit" !== r
            ? l(r, t[r])
            : t[r];
      return (
        eG(a) &&
          ((a = a()),
          tc(t3, "refresh", function () {
            return (a = t.batchMax());
          })),
        Z(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          ((t.trigger = e), n.push(t3.create(t)));
        }),
        n
      );
    }));
  var t5,
    t4 = function (e, t, r, n) {
      return (
        t > n ? e(n) : t < 0 && e(0),
        r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
      );
    },
    t8 = function e(t, r) {
      (!0 === r
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            !0 === r
              ? "auto"
              : r
                ? "pan-" + r + (I.isTouch ? " pinch-zoom" : "")
                : "none"),
        t === G && e($, r));
    },
    t6 = {
      auto: 1,
      scroll: 1,
    },
    t9 = function (e) {
      var t,
        r = e.event,
        n = e.target,
        o = e.axis,
        i = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = i._gsap || H.core.getCache(i),
        l = e_();
      if (!a._isScrollT || l - a._isScrollT > 2e3) {
        for (
          ;
          i &&
          i !== $ &&
          ((i.scrollHeight <= i.clientHeight &&
            i.scrollWidth <= i.clientWidth) ||
            !(t6[(t = tr(i)).overflowY] || t6[t.overflowX]));
        )
          i = i.parentNode;
        ((a._isScroll =
          i &&
          i !== n &&
          !eF(i) &&
          (t6[(t = tr(i)).overflowY] || t6[t.overflowX])),
          (a._isScrollT = l));
      }
      (a._isScroll || "x" === o) && (r.stopPropagation(), (r._gsapAllow = !0));
    },
    t7 = function (e, t, r, n) {
      return I.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (n = n && t9),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return r && tc(U, I.eventTypes[0], rt, !1, !0);
        },
        onDisable: function () {
          return td(U, I.eventTypes[0], rt, !0);
        },
      });
    },
    re = /(input|label|select|textarea)/i,
    rt = function (e) {
      var t = re.test(e.target.tagName);
      (t || t5) && ((e._gsapAllow = !0), (t5 = t));
    },
    rr = function (e) {
      (eK(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer"));
      var t,
        r,
        n,
        o,
        i,
        a,
        l,
        s,
        u = e,
        c = u.normalizeScrollX,
        d = u.momentum,
        f = u.allowNestedScroll,
        p = u.onRelease,
        h = L(e.target) || G,
        m = H.core.globals().ScrollSmoother,
        g = m && m.get(),
        v =
          eg &&
          ((e.content && L(e.content)) ||
            (g && !1 !== e.content && !g.smooth() && g.content())),
        x = O(h, z),
        w = O(h, j),
        b = 1,
        k =
          (I.isTouch && q.visualViewport
            ? q.visualViewport.scale * q.visualViewport.width
            : q.outerWidth) / q.innerWidth,
        T = 0,
        S = eG(d)
          ? function () {
              return d(t);
            }
          : function () {
              return d || 2.8;
            },
        E = t7(h, e.type, !0, f),
        C = function () {
          return (o = !1);
        },
        M = eO,
        N = eO,
        _ = function () {
          ((r = eW(h, z)),
            (N = J(+!!eg, r)),
            c && (M = J(0, eW(h, j))),
            (n = tz));
        },
        P = function () {
          ((v._gsap.y = eB(parseFloat(v._gsap.y) + x.offset) + "px"),
            (v.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(v._gsap.y) +
              ", 0, 1)"),
            (x.offset = x.cacheID = 0));
        },
        A = function () {
          if (o) {
            requestAnimationFrame(C);
            var e = eB(t.deltaY / 2),
              r = N(x.v - e);
            if (v && r !== x.v + x.offset) {
              x.offset = r - x.v;
              var n = eB((parseFloat(v && v._gsap.y) || 0) - x.offset);
              ((v.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                n +
                ", 0, 1)"),
                (v._gsap.y = n + "px"),
                (x.cacheID = y.cache),
                tF());
            }
            return !0;
          }
          (x.offset && P(), (o = !0));
        },
        R = function () {
          (_(),
            i.isActive() &&
              i.vars.scrollY > r &&
              (x() > r ? i.progress(1) && x(r) : i.resetTo("scrollY", r)));
        };
      return (
        v &&
          H.set(v, {
            y: "+=0",
          }),
        (e.ignoreCheck = function (e) {
          return (
            (eg && "touchmove" === e.type && A(e)) ||
            (b > 1.05 && "touchstart" !== e.type) ||
            t.isGesturing ||
            (e.touches && e.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          o = !1;
          var e = b;
          ((b = eB(((q.visualViewport && q.visualViewport.scale) || 1) / k)),
            i.pause(),
            e !== b && t8(h, b > 1.01 || (!c && "x")),
            (a = w()),
            (l = x()),
            _(),
            (n = tz));
        }),
        (e.onRelease = e.onGestureStart =
          function (e, t) {
            if ((x.offset && P(), t)) {
              y.cache++;
              var n,
                o,
                a = S();
              (c &&
                ((o = (n = w()) + -(0.05 * a * e.velocityX) / 0.227),
                (a *= t4(w, n, o, eW(h, j))),
                (i.vars.scrollX = M(o))),
                (o = (n = x()) + -(0.05 * a * e.velocityY) / 0.227),
                (a *= t4(x, n, o, eW(h, z))),
                (i.vars.scrollY = N(o)),
                i.invalidate().duration(a).play(0.01),
                ((eg && i.vars.scrollY >= r) || n >= r - 1) &&
                  H.to(
                    {},
                    {
                      onUpdate: R,
                      duration: a,
                    },
                  ));
            } else s.restart(!0);
            p && p(e);
          }),
        (e.onWheel = function () {
          (i._ts && i.pause(), e_() - T > 1e3 && ((n = 0), (T = e_())));
        }),
        (e.onChange = function (e, t, r, o, i) {
          if (
            (tz !== n && _(),
            t && c && w(M(o[2] === t ? a + (e.startX - e.x) : w() + t - o[1])),
            r)
          ) {
            x.offset && P();
            var s = i[2] === r,
              u = s ? l + e.startY - e.y : x() + r - i[1],
              d = N(u);
            (s && u !== d && (l += d - u), x(d));
          }
          (r || t) && tF();
        }),
        (e.onEnable = function () {
          (t8(h, !c && "x"),
            t3.addEventListener("refresh", R),
            tc(q, "resize", R),
            x.smooth &&
              ((x.target.style.scrollBehavior = "auto"),
              (x.smooth = w.smooth = !1)),
            E.enable());
        }),
        (e.onDisable = function () {
          (t8(h, !0),
            td(q, "resize", R),
            t3.removeEventListener("refresh", R),
            E.kill());
        }),
        (e.lockAxis = !1 !== e.lockAxis),
        ((t = new I(e)).iOS = eg),
        eg && !x() && x(1),
        eg && H.ticker.add(eO),
        (s = t._dc),
        (i = H.to(t, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: t0(x, x(), function () {
              return i.pause();
            }),
          },
          onUpdate: tF,
          onComplete: s.vars.onComplete,
        })),
        t
      );
    };
  ((t3.sort = function (e) {
    if (eG(e)) return tw.sort(e);
    var t = q.pageYOffset || 0;
    return (
      t3.getAll().forEach(function (e) {
        return (e._sortY = e.trigger
          ? t + e.trigger.getBoundingClientRect().top
          : e.start + q.innerHeight);
      }),
      tw.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              (e.vars.containerAnimation ? 1e6 : e._sortY) -
              ((t.vars.containerAnimation ? 1e6 : t._sortY) +
                -1e6 * (t.vars.refreshPriority || 0))
            );
          },
      )
    );
  }),
    (t3.observe = function (e) {
      return new I(e);
    }),
    (t3.normalizeScroll = function (e) {
      if (void 0 === e) return ef;
      if (!0 === e && ef) return ef.enable();
      if (!1 === e) {
        (ef && ef.kill(), (ef = e));
        return;
      }
      var t = e instanceof I ? e : rr(e);
      return (
        ef && ef.target === t.target && ef.kill(),
        eF(t.target) && (ef = t),
        t
      );
    }),
    (t3.core = {
      _getVelocityProp: B,
      _inputObserver: t7,
      _scrollers: y,
      _proxies: b,
      bridge: {
        ss: function () {
          (eA || tN("scrollStart"), (eA = e_()));
        },
        ref: function () {
          return er;
        },
      },
    }),
    eX() && H.registerPlugin(t3));
  var rn = e.i(1248);
  n.default.registerPlugin(t3);
  let ro = "palmo:loader-done";
  e.s(
    [
      "LOADER_DONE",
      0,
      ro,
      "default",
      0,
      function () {
        let e = (0, r.useRef)(null),
          [o, i] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          let e = () => {
            window.matchMedia("(max-width: 1025px)").matches || i(!0);
          };
          return window.__loaderFinished
            ? void e()
            : (window.addEventListener(ro, e),
              window.addEventListener("loaderComplete", e),
              () => {
                (window.removeEventListener(ro, e),
                  window.removeEventListener("loaderComplete", e));
              });
        }, []);
        let a = (0, r.useCallback)(() => {
          e.current
            ? (n.default.killTweensOf(e.current),
              n.default.to(e.current, {
                y: 40,
                opacity: 0,
                scale: 0.96,
                duration: 0.55,
                ease: "power3.inOut",
                onComplete: () => i(!1),
              }))
            : i(!1);
        }, []);
        return ((0, r.useEffect)(() => {
          if (!o) return;
          let e = t3.create({
            start: "top+=30 top",
            onEnter: () => {
              a();
            },
          });
          return () => e.kill();
        }, [o, a]),
        (0, r.useEffect)(() => {
          o &&
            e.current &&
            (n.default.killTweensOf(e.current),
            n.default.fromTo(
              e.current,
              {
                y: 40,
                opacity: 0,
                scale: 0.96,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.65,
                ease: "power3.out",
              },
            ));
        }, [o]),
        o) ? (
          <aside
            ref={e}
            role={"status"}
            aria-live={"polite"}
            className={
              "fixed bottom-6 left-6 max-md:bottom-4 max-md:left-4 z-800 h-11 max-md:h-auto flex cursor-pointer items-center gap-3 rounded-md border border-foreground/20 bg-background/95 px-3 py-1.5 text-foreground backdrop-blur-md shadow-xl select-none font-patrick-hand"
            }
            onClick={a}
          >
            {
              <div className={"flex items-center gap-2"}>
                {
                  <span
                    className={
                      "flex size-7 shrink-0 items-center justify-center rounded-md bg-beige text-foreground border border-foreground/15"
                    }
                  >
                    {<rn.MovementSensor className={"size-4"} />}
                  </span>
                }
                {
                  <span
                    className={
                      "uppercase tracking-wider text-sm font-semibold text-foreground leading-none"
                    }
                  >
                    {"Gyro Sensor"}
                  </span>
                }
                {
                  <span
                    className={"h-3.5 w-px bg-foreground/20"}
                    aria-hidden={"true"}
                  />
                }
                {
                  <span
                    className={
                      "text-sm text-foreground/80 leading-none whitespace-nowrap"
                    }
                  >
                    {"Use mobile to experience gyro tilt"}
                  </span>
                }
              </div>
            }
            {
              <button
                type={"button"}
                onClick={(e) => {
                  (e.stopPropagation(), a());
                }}
                aria-label={"Dismiss"}
                className={
                  "group flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-light-beige/50 hover:text-foreground"
                }
              >
                {
                  <rn.Plus
                    className={
                      "size-3.5 rotate-45 transition-transform duration-300 group-hover:rotate-135"
                    }
                  />
                }
              </button>
            }
          </aside>
        ) : null;
      },
    ],
    28125,
  );
};
