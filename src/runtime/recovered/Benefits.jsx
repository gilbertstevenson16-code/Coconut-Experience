// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t,
    r,
    n,
    o,
    i,
    a,
    l,
    s,
    u,
    c = e.i(43476),
    d = e.i(71645),
    f = e.i(89970),
    p = e.i(65747),
    h = "transform",
    m = h + "Origin",
    g = function (e) {
      var i = e.ownerDocument || e;
      for (
        !(h in e.style) &&
        ("msTransform" in e.style) &&
        (m = (h = "msTransform") + "Origin");
        i.parentNode && (i = i.parentNode);
      );
      if (((r = window), (l = new C()), i)) {
        ((t = i),
          (n = i.documentElement),
          (o = i.body),
          ((s = t.createElementNS(
            "http://www.w3.org/2000/svg",
            "g",
          )).style.transform = "none"));
        var a = i.createElement("div"),
          c = i.createElement("div"),
          d = i && (i.body || i.firstElementChild);
        d &&
          d.appendChild &&
          (d.appendChild(a),
          a.appendChild(c),
          (a.style.position = "static"),
          (a.style.transform = "translate3d(0,0,1px)"),
          (u = c.offsetParent !== a),
          d.removeChild(a));
      }
      return i;
    },
    v = function (e) {
      for (var t, r; e && e !== o;)
        ((r = e._gsap) && r.uncache && r.get(e, "x"),
          r &&
            !r.scaleX &&
            !r.scaleY &&
            r.renderTransform &&
            ((r.scaleX = r.scaleY = 1e-4),
            r.renderTransform(1, r),
            t ? t.push(r) : (t = [r])),
          (e = e.parentNode));
      return t;
    },
    x = [],
    w = [],
    y = function (e) {
      return (
        e.ownerSVGElement ||
        ("svg" === (e.tagName + "").toLowerCase() ? e : null)
      );
    },
    b = function e(r, n) {
      if (r.parentNode && (t || g(r))) {
        var o = y(r),
          l = o
            ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
            : "http://www.w3.org/1999/xhtml",
          s = o ? (n ? "rect" : "g") : "div",
          u = 100 * (2 === n),
          c = 100 * (3 === n),
          d = {
            position: "absolute",
            display: "block",
            pointerEvents: "none",
            margin: "0",
            padding: "0",
          },
          f = t.createElementNS
            ? t.createElementNS(l.replace(/^https/, "http"), s)
            : t.createElement(s);
        return (
          n &&
            (o
              ? (a || (a = e(r)),
                f.setAttribute("width", 0.01),
                f.setAttribute("height", 0.01),
                f.setAttribute("transform", "translate(" + u + "," + c + ")"),
                f.setAttribute("fill", "transparent"),
                a.appendChild(f))
              : (i || Object.assign((i = e(r)).style, d),
                Object.assign(f.style, d, {
                  width: "0.1px",
                  height: "0.1px",
                  top: c + "px",
                  left: u + "px",
                }),
                i.appendChild(f))),
          f
        );
      }
      throw "Need document and parent.";
    },
    k = function (e) {
      for (var t = new C(), r = 0; r < e.numberOfItems; r++)
        t.multiply(e.getItem(r).matrix);
      return t;
    },
    T = function (e) {
      var t,
        r = e.getCTM();
      return (
        r ||
          ((t = e.style[h]),
          (e.style[h] = "none"),
          e.appendChild(s),
          (r = s.getCTM()),
          e.removeChild(s),
          t
            ? (e.style[h] = t)
            : e.style.removeProperty(
                h.replace(/([A-Z])/g, "-$1").toLowerCase(),
              )),
        r || l.clone()
      );
    },
    S = function (e, t) {
      var n,
        o,
        s,
        c,
        d,
        f,
        p = y(e),
        g = e === p,
        v = p ? x : w,
        S = e.parentNode,
        E =
          S && !p && S.shadowRoot && S.shadowRoot.appendChild
            ? S.shadowRoot
            : S;
      if (e === r) return e;
      if ((v.length || v.push(b(e, 1), b(e, 2), b(e, 3)), (n = p ? a : i), p))
        (g
          ? ((c = -(s = T(e)).e / s.a), (d = -s.f / s.d), (o = l))
          : e.getBBox
            ? ((s = e.getBBox()),
              (c =
                (o = (o = e.transform ? e.transform.baseVal : {}).numberOfItems
                  ? o.numberOfItems > 1
                    ? k(o)
                    : o.getItem(0).matrix
                  : l).a *
                  s.x +
                o.c * s.y),
              (d = o.b * s.x + o.d * s.y))
            : ((o = new C()), (c = d = 0)),
          t && "g" === e.tagName.toLowerCase() && (c = d = 0),
          (g || !e.getBoundingClientRect().width ? p : S).appendChild(n),
          n.setAttribute(
            "transform",
            "matrix(" +
              o.a +
              "," +
              o.b +
              "," +
              o.c +
              "," +
              o.d +
              "," +
              (o.e + c) +
              "," +
              (o.f + d) +
              ")",
          ));
      else {
        if (((c = d = 0), u))
          for (
            o = e.offsetParent, s = e;
            s && (s = s.parentNode) && s !== o && s.parentNode;
          )
            (r.getComputedStyle(s)[h] + "").length > 4 &&
              ((c = s.offsetLeft), (d = s.offsetTop), (s = 0));
        if (
          "absolute" !== (f = r.getComputedStyle(e)).position &&
          "fixed" !== f.position
        )
          for (o = e.offsetParent; S && S !== o;)
            ((c += S.scrollLeft || 0),
              (d += S.scrollTop || 0),
              (S = S.parentNode));
        (((s = n.style).top = e.offsetTop - d + "px"),
          (s.left = e.offsetLeft - c + "px"),
          (s[h] = f[h]),
          (s[m] = f[m]),
          (s.position = "fixed" === f.position ? "fixed" : "absolute"),
          E.appendChild(n));
      }
      return n;
    },
    E = function (e, t, r, n, o, i, a) {
      return (
        (e.a = t),
        (e.b = r),
        (e.c = n),
        (e.d = o),
        (e.e = i),
        (e.f = a),
        e
      );
    },
    C = (function () {
      function e(e, t, r, n, o, i) {
        (void 0 === e && (e = 1),
          void 0 === t && (t = 0),
          void 0 === r && (r = 0),
          void 0 === n && (n = 1),
          void 0 === o && (o = 0),
          void 0 === i && (i = 0),
          E(this, e, t, r, n, o, i));
      }
      var t = e.prototype;
      return (
        (t.inverse = function () {
          var e = this.a,
            t = this.b,
            r = this.c,
            n = this.d,
            o = this.e,
            i = this.f,
            a = e * n - t * r || 1e-10;
          return E(
            this,
            n / a,
            -t / a,
            -r / a,
            e / a,
            (r * i - n * o) / a,
            -(e * i - t * o) / a,
          );
        }),
        (t.multiply = function (e) {
          var t = this.a,
            r = this.b,
            n = this.c,
            o = this.d,
            i = this.e,
            a = this.f,
            l = e.a,
            s = e.c,
            u = e.b,
            c = e.d,
            d = e.e,
            f = e.f;
          return E(
            this,
            l * t + u * n,
            l * r + u * o,
            s * t + c * n,
            s * r + c * o,
            i + d * t + f * n,
            a + d * r + f * o,
          );
        }),
        (t.clone = function () {
          return new e(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (t.equals = function (e) {
          var t = this.a,
            r = this.b,
            n = this.c,
            o = this.d,
            i = this.e,
            a = this.f;
          return (
            t === e.a &&
            r === e.b &&
            n === e.c &&
            o === e.d &&
            i === e.e &&
            a === e.f
          );
        }),
        (t.apply = function (e, t) {
          void 0 === t && (t = {});
          var r = e.x,
            n = e.y,
            o = this.a,
            i = this.b,
            a = this.c,
            l = this.d,
            s = this.e,
            u = this.f;
          return (
            (t.x = r * o + n * a + s || 0),
            (t.y = r * i + n * l + u || 0),
            t
          );
        }),
        e
      );
    })();
  function M(e, i, a, l) {
    if (!e || !e.parentNode || (t || g(e)).documentElement === e)
      return new C();
    var s = v(e),
      u = y(e) ? x : w,
      c = S(e, a),
      d = u[0].getBoundingClientRect(),
      f = u[1].getBoundingClientRect(),
      p = u[2].getBoundingClientRect(),
      h = c.parentNode,
      m =
        !l &&
        (function e(t) {
          return (
            "fixed" === r.getComputedStyle(t).position ||
            ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
          );
        })(e),
      b = new C(
        (f.left - d.left) / 100,
        (f.top - d.top) / 100,
        (p.left - d.left) / 100,
        (p.top - d.top) / 100,
        d.left +
          (m
            ? 0
            : r.pageXOffset ||
              t.scrollLeft ||
              n.scrollLeft ||
              o.scrollLeft ||
              0),
        d.top +
          (m
            ? 0
            : r.pageYOffset || t.scrollTop || n.scrollTop || o.scrollTop || 0),
      );
    if ((h.removeChild(c), s))
      for (d = s.length; d--;)
        (((f = s[d]).scaleX = f.scaleY = 0), f.renderTransform(1, f));
    return i ? b.inverse() : b;
  }
  function N(e) {
    if (void 0 === e)
      throw ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return e;
  }
  var _,
    P,
    A,
    R,
    j,
    z,
    L,
    D,
    O,
    B,
    Y,
    X,
    F,
    V,
    I,
    H,
    W,
    q,
    U,
    G,
    $,
    K,
    Q = 0,
    Z = function () {
      return "u" > typeof window;
    },
    J = function () {
      return _ || (Z() && (_ = window.gsap) && _.registerPlugin && _);
    },
    ee = function (e) {
      return "function" == typeof e;
    },
    et = function (e) {
      return "object" == typeof e;
    },
    er = function (e) {
      return void 0 === e;
    },
    en = function () {
      return !1;
    },
    eo = "transform",
    ei = "transformOrigin",
    ea = function (e) {
      return Math.round(1e4 * e) / 1e4;
    },
    el = Array.isArray,
    es = function (e, t) {
      var r = A.createElementNS
        ? A.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e,
          )
        : A.createElement(e);
      return r.style ? r : A.createElement(e);
    },
    eu = 180 / Math.PI,
    ec = new C(),
    ed =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    ef = [],
    ep = {},
    eh = 0,
    em = /^(?:a|input|textarea|button|select)$/i,
    eg = 0,
    ev = {},
    ex = {},
    ew = function (e, t) {
      var r,
        n = {};
      for (r in e) n[r] = t ? e[r] * t : e[r];
      return n;
    },
    ey = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    eb = function e(t, r) {
      for (var n, o = t.length; o--;)
        (r
          ? (t[o].style.touchAction = r)
          : t[o].style.removeProperty("touch-action"),
          (n = t[o].children) && n.length && e(n, r));
    },
    ek = function () {
      return ef.forEach(function (e) {
        return e();
      });
    },
    eT = function (e) {
      (ef.push(e), 1 === ef.length && _.ticker.add(ek));
    },
    eS = function () {
      return !ef.length && _.ticker.remove(ek);
    },
    eE = function (e) {
      for (var t = ef.length; t--;) ef[t] === e && ef.splice(t, 1);
      _.to(eS, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: eS,
        data: "_draggable",
      });
    },
    eC = function (e, t, r, n) {
      if (e.addEventListener) {
        var o = F[t];
        ((n =
          n ||
          (Y
            ? {
                passive: !1,
              }
            : null)),
          e.addEventListener(o || t, r, n),
          o && t !== o && e.addEventListener(t, r, n));
      }
    },
    eM = function (e, t, r, n) {
      if (e.removeEventListener) {
        var o = F[t];
        (e.removeEventListener(o || t, r, n),
          o && t !== o && e.removeEventListener(t, r, n));
      }
    },
    eN = function (e) {
      (e.preventDefault && e.preventDefault(),
        e.preventManipulation && e.preventManipulation());
    },
    e_ = function (e, t) {
      for (var r = e.length; r--;) if (e[r].identifier === t) return !0;
    },
    eP = function e(t) {
      ((V = t.touches && Q < t.touches.length), eM(t.target, "touchend", e));
    },
    eA = function (e) {
      ((V = e.touches && Q < e.touches.length), eC(e.target, "touchend", eP));
    },
    eR = function (e) {
      return (
        P.pageYOffset ||
        e.scrollTop ||
        e.documentElement.scrollTop ||
        e.body.scrollTop ||
        0
      );
    },
    ej = function (e) {
      return (
        P.pageXOffset ||
        e.scrollLeft ||
        e.documentElement.scrollLeft ||
        e.body.scrollLeft ||
        0
      );
    },
    ez = function e(t, r) {
      (eC(t, "scroll", r), eD(t.parentNode) || e(t.parentNode, r));
    },
    eL = function e(t, r) {
      (eM(t, "scroll", r), eD(t.parentNode) || e(t.parentNode, r));
    },
    eD = function (e) {
      return !!(
        !e ||
        e === R ||
        9 === e.nodeType ||
        e === A.body ||
        e === P ||
        !e.nodeType ||
        !e.parentNode
      );
    },
    eO = function (e, t) {
      var r = "x" === t ? "Width" : "Height",
        n = "scroll" + r,
        o = "client" + r;
      return Math.max(
        0,
        eD(e)
          ? Math.max(R[n], j[n]) - (P["inner" + r] || R[o] || j[o])
          : e[n] - e[o],
      );
    },
    eB = function e(t, r) {
      var n = eO(t, "x"),
        o = eO(t, "y");
      (eD(t) ? (t = ex) : e(t.parentNode, r),
        (t._gsMaxScrollX = n),
        (t._gsMaxScrollY = o),
        r ||
          ((t._gsScrollX = t.scrollLeft || 0),
          (t._gsScrollY = t.scrollTop || 0)));
    },
    eY = function (e, t, r) {
      var n = e.style;
      n &&
        (er(n[t]) && (t = O(t, e) || t),
        null == r
          ? n.removeProperty &&
            n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
          : (n[t] = r));
    },
    eX = function (e) {
      return P.getComputedStyle(
        e instanceof Element ? e : e.host || (e.parentNode || {}).host || e,
      );
    },
    eF = {},
    eV = function (e) {
      if (e === P)
        return (
          (eF.left = eF.top = 0),
          (eF.width = eF.right =
            R.clientWidth || e.innerWidth || j.clientWidth || 0),
          (eF.height = eF.bottom =
            (e.innerHeight || 0) - 20 < R.clientHeight
              ? R.clientHeight
              : e.innerHeight || j.clientHeight || 0),
          eF
        );
      var t = e.ownerDocument || A,
        r = er(e.pageX)
          ? e.nodeType || er(e.left) || er(e.top)
            ? B(e)[0].getBoundingClientRect()
            : e
          : {
              left: e.pageX - ej(t),
              top: e.pageY - eR(t),
              right: e.pageX - ej(t) + 1,
              bottom: e.pageY - eR(t) + 1,
            };
      return (
        er(r.right) && !er(r.width)
          ? ((r.right = r.left + r.width), (r.bottom = r.top + r.height))
          : er(r.width) &&
            (r = {
              width: r.right - r.left,
              height: r.bottom - r.top,
              right: r.right,
              left: r.left,
              bottom: r.bottom,
              top: r.top,
            }),
        r
      );
    },
    eI = function (e, t, r) {
      var n,
        o = e.vars,
        i = o[r],
        a = e._listeners[t];
      return (
        ee(i) &&
          (n = i.apply(
            o.callbackScope || e,
            o[r + "Params"] || [e.pointerEvent],
          )),
        a && !1 === e.dispatchEvent(t) && (n = !1),
        n
      );
    },
    eH = function (e, t) {
      var r,
        n,
        o,
        i = B(e)[0];
      return i.nodeType || i === P
        ? eq(i, t)
        : er(e.left)
          ? {
              left: (n = e.min || e.minX || e.minRotation || 0),
              top: (r = e.min || e.minY || 0),
              width: (e.max || e.maxX || e.maxRotation || 0) - n,
              height: (e.max || e.maxY || 0) - r,
            }
          : ((o = {
              x: 0,
              y: 0,
            }),
            {
              left: e.left - o.x,
              top: e.top - o.y,
              width: e.width,
              height: e.height,
            });
    },
    eW = {},
    eq = function (e, t) {
      t = B(t)[0];
      var r,
        n,
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
        m = e.getBBox && e.ownerSVGElement,
        g = e.ownerDocument || A;
      if (e === P)
        ((o = eR(g)),
          (n =
            (r = ej(g)) +
            (g.documentElement.clientWidth ||
              e.innerWidth ||
              g.body.clientWidth ||
              0)),
          (i =
            o +
            ((e.innerHeight || 0) - 20 < g.documentElement.clientHeight
              ? g.documentElement.clientHeight
              : e.innerHeight || g.body.clientHeight || 0)));
      else {
        if (t === P || er(t)) return e.getBoundingClientRect();
        ((r = o = 0),
          m
            ? ((f = (d = e.getBBox()).width), (p = d.height))
            : (e.viewBox &&
                (d = e.viewBox.baseVal) &&
                ((r = d.x || 0), (o = d.y || 0), (f = d.width), (p = d.height)),
              f ||
                ((d = "border-box" === (h = eX(e)).boxSizing),
                (f =
                  (parseFloat(h.width) || e.clientWidth || 0) +
                  (d
                    ? 0
                    : parseFloat(h.borderLeftWidth) +
                      parseFloat(h.borderRightWidth))),
                (p =
                  (parseFloat(h.height) || e.clientHeight || 0) +
                  (d
                    ? 0
                    : parseFloat(h.borderTopWidth) +
                      parseFloat(h.borderBottomWidth))))),
          (n = f),
          (i = p));
      }
      return e === t
        ? {
            left: r,
            top: o,
            width: n - r,
            height: i - o,
          }
        : ((l = (a = M(t, !0).multiply(M(e))).apply({
            x: r,
            y: o,
          })),
          (s = a.apply({
            x: n,
            y: o,
          })),
          (u = a.apply({
            x: n,
            y: i,
          })),
          (c = a.apply({
            x: r,
            y: i,
          })),
          {
            left: (r = Math.min(l.x, s.x, u.x, c.x)),
            top: (o = Math.min(l.y, s.y, u.y, c.y)),
            width: Math.max(l.x, s.x, u.x, c.x) - r,
            height: Math.max(l.y, s.y, u.y, c.y) - o,
          });
    },
    eU = function (e, t, r, n, o, i) {
      var a,
        l,
        s,
        u = {};
      if (t)
        if (1 !== o && t instanceof Array) {
          if (((u.end = a = []), (s = t.length), et(t[0])))
            for (l = 0; l < s; l++) a[l] = ew(t[l], o);
          else for (l = 0; l < s; l++) a[l] = t[l] * o;
          ((r += 1.1), (n -= 1.1));
        } else
          ee(t)
            ? (u.end = function (r) {
                var n,
                  i,
                  a = t.call(e, r);
                if (1 !== o)
                  if (et(a)) {
                    for (i in ((n = {}), a)) n[i] = a[i] * o;
                    a = n;
                  } else a *= o;
                return a;
              })
            : (u.end = t);
      return (
        (r || 0 === r) && (u.max = r),
        (n || 0 === n) && (u.min = n),
        i && (u.velocity = 0),
        u
      );
    },
    eG = function e(t) {
      var r;
      return (
        !!t &&
        !!t.getAttribute &&
        t !== j &&
        (!!(
          "true" === (r = t.getAttribute("data-clickable")) ||
          ("false" !== r &&
            (em.test(t.nodeName + "") ||
              "true" === t.getAttribute("contentEditable")))
        ) ||
          e(t.parentNode))
      );
    },
    e$ = function (e, t) {
      for (var r, n = e.length; n--;)
        (((r = e[n]).ondragstart = r.onselectstart = t ? null : en),
          _.set(r, {
            lazy: !0,
            userSelect: t ? "text" : "none",
          }));
    },
    eK = function (e, t) {
      ((e = _.utils.toArray(e)[0]), (t = t || {}));
      var r,
        n,
        o,
        i,
        a,
        l,
        s = document.createElement("div"),
        u = s.style,
        c = e.firstChild,
        d = 0,
        f = 0,
        p = e.scrollTop,
        h = e.scrollLeft,
        m = e.scrollWidth,
        g = e.scrollHeight,
        v = 0,
        x = 0,
        w = 0;
      ($ && !1 !== t.force3D
        ? ((a = "translate3d("), (l = "px,0px)"))
        : eo && ((a = "translate("), (l = "px)")),
        (this.scrollTop = function (e, t) {
          if (!arguments.length) return -this.top();
          this.top(-e, t);
        }),
        (this.scrollLeft = function (e, t) {
          if (!arguments.length) return -this.left();
          this.left(-e, t);
        }),
        (this.left = function (r, n) {
          if (!arguments.length) return -(e.scrollLeft + f);
          var o = e.scrollLeft - h,
            i = f;
          if ((o > 2 || o < -2) && !n) {
            ((h = e.scrollLeft),
              _.killTweensOf(this, {
                left: 1,
                scrollLeft: 1,
              }),
              this.left(-h),
              t.onKill && t.onKill());
            return;
          }
          ((r = -r) < 0
            ? ((f = (r - 0.5) | 0), (r = 0))
            : r > x
              ? ((f = (r - x) | 0), (r = x))
              : (f = 0),
            (f || i) &&
              (this._skip || (u[eo] = a + -f + "px," + -d + l),
              f + v >= 0 && (u.paddingRight = f + v + "px")),
            (e.scrollLeft = 0 | r),
            (h = e.scrollLeft));
        }),
        (this.top = function (r, n) {
          if (!arguments.length) return -(e.scrollTop + d);
          var o = e.scrollTop - p,
            i = d;
          if ((o > 2 || o < -2) && !n) {
            ((p = e.scrollTop),
              _.killTweensOf(this, {
                top: 1,
                scrollTop: 1,
              }),
              this.top(-p),
              t.onKill && t.onKill());
            return;
          }
          ((r = -r) < 0
            ? ((d = (r - 0.5) | 0), (r = 0))
            : r > w
              ? ((d = (r - w) | 0), (r = w))
              : (d = 0),
            (d || i) && !this._skip && (u[eo] = a + -f + "px," + -d + l),
            (e.scrollTop = 0 | r),
            (p = e.scrollTop));
        }),
        (this.maxScrollTop = function () {
          return w;
        }),
        (this.maxScrollLeft = function () {
          return x;
        }),
        (this.disable = function () {
          for (c = s.firstChild; c;)
            ((i = c.nextSibling), e.appendChild(c), (c = i));
          e === s.parentNode && e.removeChild(s);
        }),
        (this.enable = function () {
          if ((c = e.firstChild) !== s) {
            for (; c;) ((i = c.nextSibling), s.appendChild(c), (c = i));
            (e.appendChild(s), this.calibrate());
          }
        }),
        (this.calibrate = function (t) {
          var i,
            a,
            l,
            c = e.clientWidth === r;
          ((p = e.scrollTop),
            (h = e.scrollLeft),
            (!c ||
              e.clientHeight !== n ||
              s.offsetHeight !== o ||
              m !== e.scrollWidth ||
              g !== e.scrollHeight ||
              t) &&
              ((d || f) &&
                ((a = this.left()),
                (l = this.top()),
                this.left(-e.scrollLeft),
                this.top(-e.scrollTop)),
              (i = eX(e)),
              (!c || t) &&
                ((u.display = "block"),
                (u.width = "auto"),
                (u.paddingRight = "0px"),
                (v = Math.max(0, e.scrollWidth - e.clientWidth)) &&
                  (v +=
                    parseFloat(i.paddingLeft) +
                    (K ? parseFloat(i.paddingRight) : 0))),
              (u.display = "inline-block"),
              (u.position = "relative"),
              (u.overflow = "visible"),
              (u.verticalAlign = "top"),
              (u.boxSizing = "content-box"),
              (u.width = "100%"),
              (u.paddingRight = v + "px"),
              K && (u.paddingBottom = i.paddingBottom),
              (r = e.clientWidth),
              (n = e.clientHeight),
              (m = e.scrollWidth),
              (g = e.scrollHeight),
              (x = e.scrollWidth - r),
              (w = e.scrollHeight - n),
              (o = s.offsetHeight),
              (u.display = "block"),
              (a || l) && (this.left(a), this.top(l))));
        }),
        (this.content = s),
        (this.element = e),
        (this._skip = !1),
        this.enable());
    },
    eQ = function (e) {
      if (Z() && document.body) {
        var t,
          r,
          n,
          o,
          i,
          a = window && window.navigator;
        ((P = window),
          (R = (A = document).documentElement),
          (j = A.body),
          (z = es("div")),
          (q = !!window.PointerEvent),
          ((L = es("div")).style.cssText =
            "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
          (W = "grab" === L.style.cursor ? "grab" : "move"),
          (I = a && -1 !== a.userAgent.toLowerCase().indexOf("android")),
          (X =
            ("ontouchstart" in R && "orientation" in P) ||
            (a && (a.MaxTouchPoints > 0 || a.msMaxTouchPoints > 0))),
          (r = es("div")),
          (o = (n = es("div")).style),
          (i = j),
          (o.display = "inline-block"),
          (o.position = "relative"),
          (r.style.cssText =
            "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
          r.appendChild(n),
          i.appendChild(r),
          (t = n.offsetHeight + 18 > r.scrollHeight),
          i.removeChild(r),
          (K = t),
          (F = (function (e) {
            for (
              var t = e.split(","),
                r = (
                  ("onpointerdown" in z)
                    ? "pointerdown,pointermove,pointerup,pointercancel"
                    : ("onmspointerdown" in z)
                      ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                      : e
                ).split(","),
                n = {},
                o = 4;
              --o > -1;
            )
              ((n[t[o]] = r[o]), (n[r[o]] = t[o]));
            try {
              R.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", {
                  get: function () {
                    Y = 1;
                  },
                }),
              );
            } catch (e) {}
            return n;
          })("touchstart,touchmove,touchend,touchcancel")),
          eC(A, "touchcancel", en),
          eC(P, "touchmove", en),
          j && j.addEventListener("touchstart", en),
          eC(A, "contextmenu", function () {
            for (var e in ep) ep[e].isPressed && ep[e].endDrag();
          }),
          (_ = D = J()));
      }
      _
        ? ((H = _.plugins.inertia),
          (U = _.core.context || function () {}),
          (eo = (O = _.utils.checkPrefix)(eo)),
          (ei = O(ei)),
          (B = _.utils.toArray),
          (G = _.core.getStyleSaver),
          ($ = !!O("perspective")))
        : e && console.warn("Please gsap.registerPlugin(Draggable)");
    },
    eZ = (function (e) {
      function t(r, n) {
        ((o = e.call(this) || this),
          D || eQ(1),
          (r = B(r)[0]),
          (o.styles = G && G(r, "transform,left,top")),
          H || (H = _.plugins.inertia),
          (o.vars = n = ew(n || {})),
          (o.target = r),
          (o.x = o.y = o.rotation = 0),
          (o.dragResistance = parseFloat(n.dragResistance) || 0),
          (o.edgeResistance = isNaN(n.edgeResistance)
            ? 1
            : parseFloat(n.edgeResistance) || 0),
          (o.lockAxis = n.lockAxis),
          (o.autoScroll = n.autoScroll || 0),
          (o.lockedAxis = null),
          (o.allowEventDefault = !!n.allowEventDefault),
          _.getProperty(r, "x"));
        var o,
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
          y,
          b,
          k,
          T,
          S,
          E,
          j,
          z,
          O,
          Y,
          $,
          K,
          Z,
          J,
          en,
          eo,
          es,
          ef,
          em = (n.type || "x,y").toLowerCase(),
          ek = ~em.indexOf("x") || ~em.indexOf("y"),
          eS = -1 !== em.indexOf("rotation"),
          eP = eS ? "rotation" : ek ? "x" : "left",
          eO = ek ? "y" : "top",
          eF = !!(~em.indexOf("x") || ~em.indexOf("left") || "scroll" === em),
          eq = !!(~em.indexOf("y") || ~em.indexOf("top") || "scroll" === em),
          eZ = n.minimumMovement || 2,
          eJ = N(o),
          e0 = B(n.trigger || n.handle || r),
          e1 = {},
          e2 = 0,
          e3 = !1,
          e5 = n.autoScrollMarginTop || 40,
          e4 = n.autoScrollMarginRight || 40,
          e8 = n.autoScrollMarginBottom || 40,
          e6 = n.autoScrollMarginLeft || 40,
          e9 = n.clickableTest || eG,
          e7 = 0,
          te = r._gsap || _.core.getCache(r),
          tt = (function e(t) {
            return (
              "fixed" === eX(t).position ||
              ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
            );
          })(r),
          tr = function (e, t) {
            return parseFloat(te.get(r, e, t));
          },
          tn = r.ownerDocument || A,
          to = function (e) {
            return (
              eN(e),
              e.stopImmediatePropagation && e.stopImmediatePropagation(),
              !1
            );
          },
          ti = function e(t) {
            if (eJ.autoScroll && eJ.isDragging && (e3 || b)) {
              var n,
                o,
                i,
                l,
                s,
                u,
                c,
                d,
                p = r,
                h = 15 * eJ.autoScroll;
              for (
                e3 = !1,
                  ex.scrollTop =
                    null != P.pageYOffset
                      ? P.pageYOffset
                      : null != tn.documentElement.scrollTop
                        ? tn.documentElement.scrollTop
                        : tn.body.scrollTop,
                  ex.scrollLeft =
                    null != P.pageXOffset
                      ? P.pageXOffset
                      : null != tn.documentElement.scrollLeft
                        ? tn.documentElement.scrollLeft
                        : tn.body.scrollLeft,
                  l = eJ.pointerX - ex.scrollLeft,
                  s = eJ.pointerY - ex.scrollTop;
                p && !o;
              )
                ((n = (o = eD(p.parentNode)) ? ex : p.parentNode),
                  (i = o
                    ? {
                        bottom: Math.max(R.clientHeight, P.innerHeight || 0),
                        right: Math.max(R.clientWidth, P.innerWidth || 0),
                        left: 0,
                        top: 0,
                      }
                    : n.getBoundingClientRect()),
                  (u = c = 0),
                  eq &&
                    ((d = n._gsMaxScrollY - n.scrollTop) < 0
                      ? (c = d)
                      : s > i.bottom - e8 && d
                        ? ((e3 = !0),
                          (c = Math.min(
                            d,
                            (h * (1 - Math.max(0, i.bottom - s) / e8)) | 0,
                          )))
                        : s < i.top + e5 &&
                          n.scrollTop &&
                          ((e3 = !0),
                          (c = -Math.min(
                            n.scrollTop,
                            (h * (1 - Math.max(0, s - i.top) / e5)) | 0,
                          ))),
                    c && (n.scrollTop += c)),
                  eF &&
                    ((d = n._gsMaxScrollX - n.scrollLeft) < 0
                      ? (u = d)
                      : l > i.right - e4 && d
                        ? ((e3 = !0),
                          (u = Math.min(
                            d,
                            (h * (1 - Math.max(0, i.right - l) / e4)) | 0,
                          )))
                        : l < i.left + e6 &&
                          n.scrollLeft &&
                          ((e3 = !0),
                          (u = -Math.min(
                            n.scrollLeft,
                            (h * (1 - Math.max(0, l - i.left) / e6)) | 0,
                          ))),
                    u && (n.scrollLeft += u)),
                  o &&
                    (u || c) &&
                    (P.scrollTo(n.scrollLeft, n.scrollTop),
                    tx(eJ.pointerX + u, eJ.pointerY + c)),
                  (p = n));
            }
            if (b) {
              var m = eJ.x,
                g = eJ.y;
              (eS
                ? ((eJ.deltaX = m - parseFloat(te.rotation)),
                  (eJ.rotation = m),
                  (te.rotation = m + "deg"),
                  te.renderTransform(1, te))
                : a
                  ? (eq && ((eJ.deltaY = g - a.top()), a.top(g)),
                    eF && ((eJ.deltaX = m - a.left()), a.left(m)))
                  : ek
                    ? (eq &&
                        ((eJ.deltaY = g - parseFloat(te.y)), (te.y = g + "px")),
                      eF &&
                        ((eJ.deltaX = m - parseFloat(te.x)), (te.x = m + "px")),
                      te.renderTransform(1, te))
                    : (eq &&
                        ((eJ.deltaY = g - parseFloat(r.style.top || 0)),
                        (r.style.top = g + "px")),
                      eF &&
                        ((eJ.deltaX = m - parseFloat(r.style.left || 0)),
                        (r.style.left = m + "px"))),
                !f ||
                  t ||
                  Z ||
                  ((Z = !0),
                  !1 === eI(eJ, "drag", "onDrag") &&
                    (eF && (eJ.x -= eJ.deltaX),
                    eq && (eJ.y -= eJ.deltaY),
                    e(!0)),
                  (Z = !1)));
            }
            b = !1;
          },
          ta = function (e, t) {
            var n,
              o,
              i = eJ.x,
              l = eJ.y;
            (r._gsap || (te = _.core.getCache(r)),
              te.uncache && _.getProperty(r, "x"),
              ek
                ? ((eJ.x = parseFloat(te.x)), (eJ.y = parseFloat(te.y)))
                : eS
                  ? (eJ.x = eJ.rotation = ea(parseFloat(te.rotation)))
                  : a
                    ? ((eJ.y = a.top()), (eJ.x = a.left()))
                    : ((eJ.y =
                        parseFloat(r.style.top || ((o = eX(r)) && o.top)) || 0),
                      (eJ.x = parseFloat(r.style.left || (o || {}).left) || 0)),
              (T || S || E) &&
                !t &&
                (eJ.isDragging || eJ.isThrowing) &&
                (E &&
                  ((ev.x = eJ.x),
                  (ev.y = eJ.y),
                  (n = E(ev)).x !== eJ.x && ((eJ.x = n.x), (b = !0)),
                  n.y !== eJ.y && ((eJ.y = n.y), (b = !0))),
                T &&
                  (n = T(eJ.x)) !== eJ.x &&
                  ((eJ.x = n), eS && (eJ.rotation = n), (b = !0)),
                S && ((n = S(eJ.y)) !== eJ.y && (eJ.y = n), (b = !0))),
              b && ti(!0),
              e ||
                ((eJ.deltaX = eJ.x - i),
                (eJ.deltaY = eJ.y - l),
                eI(eJ, "throwupdate", "onThrowUpdate")));
          },
          tl = function (e, t, r, n) {
            return (null == t && (t = -1e20), null == r && (r = 1e20), ee(e))
              ? function (o) {
                  var i = eJ.isPressed ? 1 - eJ.edgeResistance : 1;
                  return (
                    e.call(
                      eJ,
                      (o > r ? r + (o - r) * i : o < t ? t + (o - t) * i : o) *
                        n,
                    ) * n
                  );
                }
              : el(e)
                ? function (n) {
                    for (var o, i, a = e.length, l = 0, s = 1e20; --a > -1;)
                      ((i = (o = e[a]) - n) < 0 && (i = -i),
                        i < s && o >= t && o <= r && ((l = a), (s = i)));
                    return e[l];
                  }
                : isNaN(e)
                  ? function (e) {
                      return e;
                    }
                  : function () {
                      return e * n;
                    };
          },
          ts = function () {
            var e, t, o, i, l, s, u, c, f, p, x;
            ((d = !1),
              a
                ? (a.calibrate(),
                  (eJ.minX = m = -a.maxScrollLeft()),
                  (eJ.minY = v = -a.maxScrollTop()),
                  (eJ.maxX = h = eJ.maxY = g = 0),
                  (d = !0))
                : n.bounds &&
                  ((e = eH(n.bounds, r.parentNode)),
                  eS
                    ? ((eJ.minX = m = e.left),
                      (eJ.maxX = h = e.left + e.width),
                      (eJ.minY = v = eJ.maxY = g = 0))
                    : er(n.bounds.maxX) && er(n.bounds.maxY)
                      ? ((t = eH(r, r.parentNode)),
                        (eJ.minX = m =
                          Math.round(tr(eP, "px") + e.left - t.left)),
                        (eJ.minY = v =
                          Math.round(tr(eO, "px") + e.top - t.top)),
                        (eJ.maxX = h = Math.round(m + (e.width - t.width))),
                        (eJ.maxY = g = Math.round(v + (e.height - t.height))))
                      : ((eJ.minX = m = (e = n.bounds).minX),
                        (eJ.minY = v = e.minY),
                        (eJ.maxX = h = e.maxX),
                        (eJ.maxY = g = e.maxY)),
                  m > h && ((eJ.minX = h), (eJ.maxX = h = m), (m = eJ.minX)),
                  v > g && ((eJ.minY = g), (eJ.maxY = g = v), (v = eJ.minY)),
                  eS && ((eJ.minRotation = m), (eJ.maxRotation = h)),
                  (d = !0)),
              n.liveSnap &&
                (((i =
                  el((o = !0 === n.liveSnap ? n.snap || {} : n.liveSnap)) ||
                  ee(o)),
                eS)
                  ? ((T = tl(i ? o : o.rotation, m, h, 1)), (S = null))
                  : o.points
                    ? ((l = i ? o : o.points),
                      (s = m),
                      (u = h),
                      (c = v),
                      (f = g),
                      (p = o.radius),
                      (x = a ? -1 : 1),
                      (p = p && p < 1e20 ? p * p : 1e20),
                      (E = ee(l)
                        ? function (e) {
                            var t,
                              r,
                              n,
                              o = eJ.isPressed ? 1 - eJ.edgeResistance : 1,
                              i = e.x,
                              a = e.y;
                            return (
                              (e.x = i =
                                i > u
                                  ? u + (i - u) * o
                                  : i < s
                                    ? s + (i - s) * o
                                    : i),
                              (e.y = a =
                                a > f
                                  ? f + (a - f) * o
                                  : a < c
                                    ? c + (a - c) * o
                                    : a),
                              (t = l.call(eJ, e)) !== e &&
                                ((e.x = t.x), (e.y = t.y)),
                              1 !== x && ((e.x *= x), (e.y *= x)),
                              p < 1e20 &&
                                (r = e.x - i) * r + (n = e.y - a) * n > p &&
                                ((e.x = i), (e.y = a)),
                              e
                            );
                          }
                        : el(l)
                          ? function (e) {
                              for (
                                var t, r, n, o, i = l.length, a = 0, s = 1e20;
                                --i > -1;
                              )
                                (o =
                                  (t = (n = l[i]).x - e.x) * t +
                                  (r = n.y - e.y) * r) < s &&
                                  ((a = i), (s = o));
                              return s <= p ? l[a] : e;
                            }
                          : function (e) {
                              return e;
                            }))
                    : (eF &&
                        (T = tl(
                          i ? o : o.x || o.left || o.scrollLeft,
                          m,
                          h,
                          a ? -1 : 1,
                        )),
                      eq &&
                        (S = tl(
                          i ? o : o.y || o.top || o.scrollTop,
                          v,
                          g,
                          a ? -1 : 1,
                        )))));
          },
          tu = function () {
            ((eJ.isThrowing = !1), eI(eJ, "throwcomplete", "onThrowComplete"));
          },
          tc = function () {
            eJ.isThrowing = !1;
          },
          td = function (e, t) {
            var o, i, l, s;
            e && H
              ? (!0 === e &&
                  ((i = el((o = n.snap || n.liveSnap || {})) || ee(o)),
                  (e = {
                    resistance:
                      (n.throwResistance || n.resistance || 1e3) /
                      (eS ? 10 : 1),
                  }),
                  eS
                    ? (e.rotation = eU(eJ, i ? o : o.rotation, h, m, 1, t))
                    : (eF &&
                        (e[eP] = eU(
                          eJ,
                          i ? o : o.points || o.x || o.left,
                          h,
                          m,
                          a ? -1 : 1,
                          t || "x" === eJ.lockedAxis,
                        )),
                      eq &&
                        (e[eO] = eU(
                          eJ,
                          i ? o : o.points || o.y || o.top,
                          g,
                          v,
                          a ? -1 : 1,
                          t || "y" === eJ.lockedAxis,
                        )),
                      (o.points || (el(o) && et(o[0]))) &&
                        ((e.linkedProps = eP + "," + eO),
                        (e.radius = o.radius)))),
                (eJ.isThrowing = !0),
                (s = isNaN(n.overshootTolerance)
                  ? 1 === n.edgeResistance
                    ? 0
                    : 1 - eJ.edgeResistance + 0.2
                  : n.overshootTolerance),
                e.duration ||
                  (e.duration = {
                    max: Math.max(
                      n.minDuration || 0,
                      "maxDuration" in n ? n.maxDuration : 2,
                    ),
                    min: isNaN(n.minDuration)
                      ? 0 === s || (et(e) && e.resistance > 1e3)
                        ? 0
                        : 0.5
                      : n.minDuration,
                    overshoot: s,
                  }),
                (eJ.tween = l =
                  _.to(a || r, {
                    inertia: e,
                    data: "_draggable",
                    inherit: !1,
                    onComplete: tu,
                    onInterrupt: tc,
                    onUpdate: n.fastMode ? eI : ta,
                    onUpdateParams: n.fastMode
                      ? [eJ, "onthrowupdate", "onThrowUpdate"]
                      : o && o.radius
                        ? [!1, !0]
                        : [],
                  })),
                !n.fastMode &&
                  (a && (a._skip = !0),
                  l.render(1e9, !0, !0),
                  ta(!0, !0),
                  (eJ.endX = eJ.x),
                  (eJ.endY = eJ.y),
                  eS && (eJ.endRotation = eJ.x),
                  l.play(0),
                  ta(!0, !0),
                  a && (a._skip = !1)))
              : d && eJ.applyBounds();
          },
          tf = function (e) {
            var t,
              n = O;
            ((O = M(r.parentNode, !0)),
              e &&
                eJ.isPressed &&
                !O.equals(n || new C()) &&
                ((t = n.inverse().apply({
                  x: l,
                  y: s,
                })),
                O.apply(t, t),
                (l = t.x),
                (s = t.y)),
              O.equals(ec) && (O = null));
          },
          tp = function () {
            var e,
              t,
              n,
              o = 1 - eJ.edgeResistance,
              i = tt ? ej(tn) : 0,
              f = tt ? eR(tn) : 0;
            (ek &&
              ((te.x = tr(eP, "px") + "px"),
              (te.y = tr(eO, "px") + "px"),
              te.renderTransform()),
              tf(!1),
              (eW.x = eJ.pointerX - i),
              (eW.y = eJ.pointerY - f),
              O && O.apply(eW, eW),
              (l = eW.x),
              (s = eW.y),
              b && (tx(eJ.pointerX, eJ.pointerY), ti(!0)),
              (es = M(r)),
              a
                ? (ts(), (c = a.top()), (u = a.left()))
                : (th() ? (ta(!0, !0), ts()) : eJ.applyBounds(),
                  eS
                    ? ((e = r.ownerSVGElement
                        ? [
                            te.xOrigin - r.getBBox().x,
                            te.yOrigin - r.getBBox().y,
                          ]
                        : (eX(r)[ei] || "0 0").split(" ")),
                      (y = eJ.rotationOrigin =
                        M(r).apply({
                          x: parseFloat(e[0]) || 0,
                          y: parseFloat(e[1]) || 0,
                        })),
                      ta(!0, !0),
                      (t = eJ.pointerX - y.x - i),
                      (n = y.y - eJ.pointerY + f),
                      (u = eJ.x),
                      (c = eJ.y = Math.atan2(n, t) * eu))
                    : ((c = tr(eO, "px")), (u = tr(eP, "px")))),
              d &&
                o &&
                (u > h ? (u = h + (u - h) / o) : u < m && (u = m - (m - u) / o),
                !eS &&
                  (c > g
                    ? (c = g + (c - g) / o)
                    : c < v && (c = v - (v - c) / o))),
              (eJ.startX = u = ea(u)),
              (eJ.startY = c = ea(c)));
          },
          th = function () {
            return eJ.tween && eJ.tween.isActive();
          },
          tm = function () {
            !L.parentNode ||
              th() ||
              eJ.isDragging ||
              L.parentNode.removeChild(L);
          },
          tg = function (e, o) {
            var u;
            if (
              !i ||
              eJ.isPressed ||
              !e ||
              (("mousedown" === e.type || "pointerdown" === e.type) &&
                !o &&
                ed() - e7 < 30 &&
                F[eJ.pointerEvent.type])
            ) {
              eo && e && i && eN(e);
              return;
            }
            if (
              ((Y = th()),
              (ef = !1),
              (eJ.pointerEvent = e),
              F[e.type]
                ? (eC(
                    (z = ~e.type.indexOf("touch")
                      ? e.currentTarget || e.target
                      : tn),
                    "touchend",
                    tw,
                  ),
                  eC(z, "touchmove", tv),
                  eC(z, "touchcancel", tw),
                  eC(tn, "touchstart", eA))
                : ((z = null), eC(tn, "mousemove", tv)),
              (K = null),
              (!q || !z) &&
                (eC(tn, "mouseup", tw),
                e && e.target && eC(e.target, "mouseup", tw)),
              (j = e9.call(eJ, e.target) && !1 === n.dragClickables && !o))
            ) {
              (eC(e.target, "change", tw),
                eI(eJ, "pressInit", "onPressInit"),
                eI(eJ, "press", "onPress"),
                e$(e0, !0),
                (eo = !1));
              return;
            }
            if (
              ((eo =
                !($ =
                  !!z &&
                  eF !== eq &&
                  !1 !== eJ.vars.allowNativeTouchScrolling &&
                  (!eJ.vars.allowContextMenu ||
                    !e ||
                    (!e.ctrlKey && !(e.which > 2))) &&
                  (eF ? "y" : "x")) && !eJ.allowEventDefault) &&
                (eN(e), eC(P, "touchforcechange", eN)),
              e.changedTouches
                ? (w = (e = x = e.changedTouches[0]).identifier)
                : e.pointerId
                  ? (w = e.pointerId)
                  : (x = w = null),
              Q++,
              eT(ti),
              (s = eJ.pointerY = e.pageY),
              (l = eJ.pointerX = e.pageX),
              eI(eJ, "pressInit", "onPressInit"),
              ($ || eJ.autoScroll) && eB(r.parentNode),
              !r.parentNode ||
                !eJ.autoScroll ||
                a ||
                eS ||
                !r.parentNode._gsMaxScrollX ||
                L.parentNode ||
                r.getBBox ||
                ((L.style.width = r.parentNode.scrollWidth + "px"),
                r.parentNode.appendChild(L)),
              tp(),
              eJ.tween && eJ.tween.kill(),
              (eJ.isThrowing = !1),
              _.killTweensOf(a || r, e1, !0),
              a &&
                _.killTweensOf(
                  r,
                  {
                    scrollTo: 1,
                  },
                  !0,
                ),
              (eJ.tween = eJ.lockedAxis = null),
              (!n.zIndexBoost && (eS || a || !1 === n.zIndexBoost)) ||
                (r.style.zIndex = t.zIndex++),
              (eJ.isPressed = !0),
              (f = !!(n.onDrag || eJ._listeners.drag)),
              (p = !!(n.onMove || eJ._listeners.move)),
              !1 !== n.cursor || n.activeCursor)
            )
              for (u = e0.length; --u > -1;)
                _.set(e0[u], {
                  cursor:
                    n.activeCursor ||
                    n.cursor ||
                    ("grab" === W ? "grabbing" : W),
                });
            (eI(eJ, "press", "onPress"),
              H && H.track(a || r, ek ? "x,y" : eS ? "rotation" : "top,left"));
          },
          tv = function (e) {
            var t,
              n,
              o,
              a,
              u,
              c,
              d = e;
            if (!i || V || !eJ.isPressed || !e) {
              eo && e && i && eN(e);
              return;
            }
            if (((eJ.pointerEvent = e), (t = e.changedTouches))) {
              if ((e = t[0]) !== x && e.identifier !== w) {
                for (
                  a = t.length;
                  --a > -1 && (e = t[a]).identifier !== w && e.target !== r;
                );
                if (a < 0) return;
              }
            } else if (e.pointerId && w && e.pointerId !== w) return;
            z &&
            $ &&
            !K &&
            ((eW.x = e.pageX - (tt ? ej(tn) : 0)),
            (eW.y = e.pageY - (tt ? eR(tn) : 0)),
            O && O.apply(eW, eW),
            (n = eW.x),
            (o = eW.y),
            ((u = Math.abs(n - l)) !== (c = Math.abs(o - s)) &&
              (u > eZ || c > eZ)) ||
              (I && $ === K)) &&
            ((K = u > c && eF ? "x" : "y"),
            $ && K !== $ && eC(P, "touchforcechange", eN),
            !1 !== eJ.vars.lockAxisOnTouchScroll &&
              eF &&
              eq &&
              ((eJ.lockedAxis = "x" === K ? "y" : "x"),
              ee(eJ.vars.onLockAxis) && eJ.vars.onLockAxis.call(eJ, d)),
            I && $ === K)
              ? tw(d)
              : (eJ.allowEventDefault ||
                ($ && (!K || $ === K)) ||
                !1 === d.cancelable
                  ? eo && (eo = !1)
                  : (eN(d), (eo = !0)),
                eJ.autoScroll && (e3 = !0),
                tx(e.pageX, e.pageY, p));
          },
          tx = function (e, t, r) {
            var n,
              o,
              i,
              a,
              f,
              p,
              x = 1 - eJ.dragResistance,
              w = 1 - eJ.edgeResistance,
              k = eJ.pointerX,
              C = eJ.pointerY,
              M = c,
              N = eJ.x,
              _ = eJ.y,
              P = eJ.endX,
              A = eJ.endY,
              R = eJ.endRotation,
              j = b;
            ((eJ.pointerX = e),
              (eJ.pointerY = t),
              tt && ((e -= ej(tn)), (t -= eR(tn))),
              eS
                ? ((a = ea(Math.atan2(y.y - t, e - y.x) * eu)),
                  (f = eJ.y - a) > 180
                    ? ((c -= 360), (eJ.y = a))
                    : f < -180 && ((c += 360), (eJ.y = a)),
                  O &&
                    ((p = e * O.a + t * O.c + O.e),
                    (t = e * O.b + t * O.d + O.f),
                    (e = p)),
                  eJ.x !== u || Math.max(Math.abs(l - e), Math.abs(s - t)) > eZ
                    ? ((eJ.y = a), (i = ea(u + (c - a) * x)))
                    : (i = u))
                : (O &&
                    ((p = e * O.a + t * O.c + O.e),
                    (t = e * O.b + t * O.d + O.f),
                    (e = p)),
                  (o = t - s) < eZ && o > -eZ && (o = 0),
                  (n = e - l) < eZ && n > -eZ && (n = 0),
                  (eJ.lockAxis || eJ.lockedAxis) &&
                    (n || o) &&
                    (!(p = eJ.lockedAxis) &&
                      ((eJ.lockedAxis = p =
                        eF && Math.abs(n) > Math.abs(o)
                          ? "y"
                          : eq
                            ? "x"
                            : null),
                      p &&
                        ee(eJ.vars.onLockAxis) &&
                        eJ.vars.onLockAxis.call(eJ, eJ.pointerEvent)),
                    "y" === p ? (o = 0) : "x" === p && (n = 0)),
                  (i = ea(u + n * x)),
                  (a = ea(c + o * x))),
              (T || S || E) &&
                (eJ.x !== i || (eJ.y !== a && !eS)) &&
                (E &&
                  ((ev.x = i),
                  (ev.y = a),
                  (i = ea((p = E(ev)).x)),
                  (a = ea(p.y))),
                T && (i = ea(T(i))),
                S && (a = ea(S(a)))),
              d &&
                (i > h
                  ? (i = h + Math.round((i - h) * w))
                  : i < m && (i = m + Math.round((i - m) * w)),
                !eS &&
                  (a > g
                    ? (a = Math.round(g + (a - g) * w))
                    : a < v && (a = Math.round(v + (a - v) * w)))),
              (eJ.x === i && (eJ.y === a || eS)) ||
                (eS
                  ? ((eJ.endRotation = eJ.x = eJ.endX = ea(i)), (b = !0))
                  : (eq && ((eJ.y = eJ.endY = a), (b = !0)),
                    eF && ((eJ.x = eJ.endX = i), (b = !0))),
                r && !1 === eI(eJ, "move", "onMove")
                  ? ((eJ.pointerX = k),
                    (eJ.pointerY = C),
                    (c = M),
                    (eJ.x = N),
                    (eJ.y = _),
                    (eJ.endX = P),
                    (eJ.endY = A),
                    (eJ.endRotation = R),
                    (b = j))
                  : !eJ.isDragging &&
                    eJ.isPressed &&
                    ((eJ.isDragging = ef = !0),
                    eI(eJ, "dragstart", "onDragStart"))));
          },
          tw = function e(t, o) {
            if (
              !i ||
              !eJ.isPressed ||
              (t &&
                null != w &&
                !o &&
                ((t.pointerId && t.pointerId !== w && t.target !== r) ||
                  (t.changedTouches && !e_(t.changedTouches, w))))
            ) {
              eo && t && i && eN(t);
              return;
            }
            eJ.isPressed = !1;
            var a,
              l,
              s,
              u,
              c = t,
              d = eJ.isDragging,
              f = eJ.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2),
              p = _.delayedCall(0.001, tm);
            if (
              (z
                ? (eM(z, "touchend", e),
                  eM(z, "touchmove", tv),
                  eM(z, "touchcancel", e),
                  eM(tn, "touchstart", eA))
                : eM(tn, "mousemove", tv),
              eM(P, "touchforcechange", eN),
              (!q || !z) &&
                (eM(tn, "mouseup", e),
                t && t.target && eM(t.target, "mouseup", e)),
              (b = !1),
              d && ((e2 = eg = ed()), (eJ.isDragging = !1)),
              eE(ti),
              j && !f)
            ) {
              (t && (eM(t.target, "change", e), (eJ.pointerEvent = c)),
                e$(e0, !1),
                eI(eJ, "release", "onRelease"),
                eI(eJ, "click", "onClick"),
                (j = !1));
              return;
            }
            for (l = e0.length; --l > -1;)
              eY(e0[l], "cursor", n.cursor || (!1 !== n.cursor ? W : null));
            if ((Q--, t)) {
              if (
                (a = t.changedTouches) &&
                (t = a[0]) !== x &&
                t.identifier !== w
              ) {
                for (
                  l = a.length;
                  --l > -1 && (t = a[l]).identifier !== w && t.target !== r;
                );
                if (l < 0 && !o) return;
              }
              ((eJ.pointerEvent = c),
                (eJ.pointerX = t.pageX),
                (eJ.pointerY = t.pageY));
            }
            return (
              f && c
                ? (eN(c), (eo = !0), eI(eJ, "release", "onRelease"))
                : c && !d
                  ? ((eo = !1),
                    Y && (n.snap || n.bounds) && td(n.inertia || n.throwProps),
                    eI(eJ, "release", "onRelease"),
                    (!I || "touchmove" !== c.type) &&
                      -1 === c.type.indexOf("cancel") &&
                      (eI(eJ, "click", "onClick"),
                      ed() - e7 < 300 && eI(eJ, "doubleclick", "onDoubleClick"),
                      (u = c.target || r),
                      (e7 = ed()),
                      I ||
                        c.defaultPrevented ||
                        _.delayedCall(0.05, function () {
                          e7 !== J &&
                            eJ.enabled() &&
                            !eJ.isPressed &&
                            !c.defaultPrevented &&
                            (u.click
                              ? u.click()
                              : tn.createEvent &&
                                ((s =
                                  tn.createEvent("MouseEvents")).initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  P,
                                  1,
                                  eJ.pointerEvent.screenX,
                                  eJ.pointerEvent.screenY,
                                  eJ.pointerX,
                                  eJ.pointerY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null,
                                ),
                                u.dispatchEvent(s)));
                        })))
                  : (td(n.inertia || n.throwProps),
                    !eJ.allowEventDefault &&
                    c &&
                    (!1 !== n.dragClickables || !e9.call(eJ, c.target)) &&
                    d &&
                    (!$ || (K && $ === K)) &&
                    !1 !== c.cancelable
                      ? ((eo = !0), eN(c))
                      : (eo = !1),
                    eI(eJ, "release", "onRelease")),
              th() && p.duration(eJ.tween.duration()),
              d && eI(eJ, "dragend", "onDragEnd"),
              !0
            );
          },
          ty = function (e) {
            if (e && eJ.isDragging && !a) {
              var t = e.target || r.parentNode,
                n = t.scrollLeft - t._gsScrollX,
                o = t.scrollTop - t._gsScrollY;
              (n || o) &&
                (O
                  ? ((l -= n * O.a + o * O.c), (s -= o * O.d + n * O.b))
                  : ((l -= n), (s -= o)),
                (t._gsScrollX += n),
                (t._gsScrollY += o),
                tx(eJ.pointerX, eJ.pointerY));
            }
          },
          tb = function (e) {
            var t = ed(),
              r = t - e7 < 100,
              n = t - e2 < 50,
              o = r && J === e7,
              i = eJ.pointerEvent && eJ.pointerEvent.defaultPrevented,
              a = r && en === e7,
              l = e.isTrusted || (null == e.isTrusted && r && o);
            if (
              ((o || (n && !1 !== eJ.vars.suppressClickOnDrag)) &&
                e.stopImmediatePropagation &&
                e.stopImmediatePropagation(),
              r &&
                !(eJ.pointerEvent && eJ.pointerEvent.defaultPrevented) &&
                (!o || (l && !a)))
            ) {
              (l && o && (en = e7), (J = e7));
              return;
            }
            ((eJ.isPressed || n || r) && (!l || !e.detail || !r || i) && eN(e),
              r ||
                n ||
                ef ||
                (e && e.target && (eJ.pointerEvent = e),
                eI(eJ, "click", "onClick")));
          },
          tk = function (e) {
            return O
              ? {
                  x: e.x * O.a + e.y * O.c + O.e,
                  y: e.x * O.b + e.y * O.d + O.f,
                }
              : {
                  x: e.x,
                  y: e.y,
                };
          };
        return (
          (k = t.get(r)) && k.kill(),
          (o.startDrag = function (e, t) {
            var n, o, i, a;
            (tg(e || eJ.pointerEvent, !0),
              t &&
                !eJ.hitTest(e || eJ.pointerEvent) &&
                ((n = eV(e || eJ.pointerEvent)),
                (o = eV(r)),
                (i = tk({
                  x: n.left + n.width / 2,
                  y: n.top + n.height / 2,
                })),
                (a = tk({
                  x: o.left + o.width / 2,
                  y: o.top + o.height / 2,
                })),
                (l -= i.x - a.x),
                (s -= i.y - a.y)),
              eJ.isDragging ||
                ((eJ.isDragging = ef = !0),
                eI(eJ, "dragstart", "onDragStart")));
          }),
          (o.drag = tv),
          (o.endDrag = function (e) {
            return tw(e || eJ.pointerEvent, !0);
          }),
          (o.timeSinceDrag = function () {
            return eJ.isDragging ? 0 : (ed() - e2) / 1e3;
          }),
          (o.timeSinceClick = function () {
            return (ed() - e7) / 1e3;
          }),
          (o.hitTest = function (e, r) {
            return t.hitTest(eJ.target, e, r);
          }),
          (o.getDirection = function (e, t) {
            var n,
              o,
              i,
              a,
              l,
              s,
              d =
                "velocity" === e && H ? e : et(e) && !eS ? "element" : "start";
            return ("element" === d && ((l = eV(eJ.target)), (s = eV(e))),
            (n =
              "start" === d
                ? eJ.x - u
                : "velocity" === d
                  ? H.getVelocity(r, eP)
                  : l.left + l.width / 2 - (s.left + s.width / 2)),
            eS)
              ? n < 0
                ? "counter-clockwise"
                : "clockwise"
              : ((t = t || 2),
                (a =
                  (i = Math.abs(
                    n /
                      (o =
                        "start" === d
                          ? eJ.y - c
                          : "velocity" === d
                            ? H.getVelocity(r, eO)
                            : l.top + l.height / 2 - (s.top + s.height / 2)),
                  )) <
                  1 / t
                    ? ""
                    : n < 0
                      ? "left"
                      : "right"),
                i < t && ("" !== a && (a += "-"), (a += o < 0 ? "up" : "down")),
                a);
          }),
          (o.applyBounds = function (e, t) {
            var o, i, a, l, s, u;
            if (e && n.bounds !== e) return ((n.bounds = e), eJ.update(!0, t));
            if ((ta(!0), ts(), d && !th())) {
              if (
                ((o = eJ.x),
                (i = eJ.y),
                o > h ? (o = h) : o < m && (o = m),
                i > g ? (i = g) : i < v && (i = v),
                (eJ.x !== o || eJ.y !== i) &&
                  ((a = !0),
                  (eJ.x = eJ.endX = o),
                  eS ? (eJ.endRotation = o) : (eJ.y = eJ.endY = i),
                  (b = !0),
                  ti(!0),
                  eJ.autoScroll && !eJ.isDragging))
              )
                for (
                  eB(r.parentNode),
                    l = r,
                    ex.scrollTop =
                      null != P.pageYOffset
                        ? P.pageYOffset
                        : null != tn.documentElement.scrollTop
                          ? tn.documentElement.scrollTop
                          : tn.body.scrollTop,
                    ex.scrollLeft =
                      null != P.pageXOffset
                        ? P.pageXOffset
                        : null != tn.documentElement.scrollLeft
                          ? tn.documentElement.scrollLeft
                          : tn.body.scrollLeft;
                  l && !u;
                )
                  ((s = (u = eD(l.parentNode)) ? ex : l.parentNode),
                    eq &&
                      s.scrollTop > s._gsMaxScrollY &&
                      (s.scrollTop = s._gsMaxScrollY),
                    eF &&
                      s.scrollLeft > s._gsMaxScrollX &&
                      (s.scrollLeft = s._gsMaxScrollX),
                    (l = s));
              eJ.isThrowing &&
                (a ||
                  eJ.endX > h ||
                  eJ.endX < m ||
                  eJ.endY > g ||
                  eJ.endY < v) &&
                td(n.inertia || n.throwProps, a);
            }
            return eJ;
          }),
          (o.update = function (e, t, n) {
            if (t && eJ.isPressed) {
              if (eS) eJ.x = eJ.y = ea(parseFloat(te.rotation));
              else {
                var o = M(r),
                  i = es.apply({
                    x: eJ.x - u,
                    y: eJ.y - c,
                  }),
                  a = M(r.parentNode, !0);
                (a.apply(
                  {
                    x: o.e - i.x,
                    y: o.f - i.y,
                  },
                  i,
                ),
                  (eJ.x = ea(eJ.x - (i.x - a.e))),
                  (eJ.y = ea(eJ.y - (i.y - a.f))));
              }
              (ti(!0), tp());
            }
            var l = eJ.x,
              s = eJ.y;
            return (
              tf(!t),
              e ? eJ.applyBounds() : (b && n && ti(!0), ta(!0)),
              t && (tx(eJ.pointerX, eJ.pointerY), b && ti(!0)),
              eJ.isPressed &&
                !t &&
                ((eF && Math.abs(l - eJ.x) > 0.01) ||
                  (eq && Math.abs(s - eJ.y) > 0.01 && !eS)) &&
                tp(),
              eJ.autoScroll &&
                (eB(r.parentNode, eJ.isDragging),
                (e3 = eJ.isDragging),
                ti(!0),
                eL(r, ty),
                ez(r, ty)),
              eJ
            );
          }),
          (o.enable = function (e) {
            var t,
              o,
              l,
              s = {
                lazy: !0,
              };
            if (
              (!1 !== n.cursor && (s.cursor = n.cursor || W),
              _.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"),
              "soft" !== e)
            ) {
              for (
                eb(
                  e0,
                  eF === eq
                    ? "none"
                    : (n.allowNativeTouchScrolling &&
                          (r.scrollHeight === r.clientHeight) ==
                            (r.scrollWidth === r.clientHeight)) ||
                        n.allowEventDefault
                      ? "manipulation"
                      : eF
                        ? "pan-y"
                        : "pan-x",
                ),
                  o = e0.length;
                --o > -1;
              )
                ((l = e0[o]),
                  q || eC(l, "mousedown", tg),
                  eC(l, "touchstart", tg),
                  eC(l, "click", tb, !0),
                  _.set(l, s),
                  l.getBBox &&
                    l.ownerSVGElement &&
                    eF !== eq &&
                    _.set(l.ownerSVGElement, {
                      touchAction:
                        n.allowNativeTouchScrolling || n.allowEventDefault
                          ? "manipulation"
                          : eF
                            ? "pan-y"
                            : "pan-x",
                    }),
                  n.allowContextMenu || eC(l, "contextmenu", to));
              e$(e0, !1);
            }
            return (
              ez(r, ty),
              (i = !0),
              H &&
                "soft" !== e &&
                H.track(a || r, ek ? "x,y" : eS ? "rotation" : "top,left"),
              (r._gsDragID = t = r._gsDragID || "d" + eh++),
              (ep[t] = eJ),
              a && (a.enable(), (a.element._gsDragID = t)),
              (n.bounds || eS) && tp(),
              n.bounds && eJ.applyBounds(),
              eJ
            );
          }),
          (o.disable = function (e) {
            for (var t, n = eJ.isDragging, o = e0.length; --o > -1;)
              eY(e0[o], "cursor", null);
            if ("soft" !== e) {
              for (eb(e0, null), o = e0.length; --o > -1;)
                (eY((t = e0[o]), "touchCallout", null),
                  eM(t, "mousedown", tg),
                  eM(t, "touchstart", tg),
                  eM(t, "click", tb, !0),
                  eM(t, "contextmenu", to));
              (e$(e0, !0),
                z &&
                  (eM(z, "touchcancel", tw),
                  eM(z, "touchend", tw),
                  eM(z, "touchmove", tv)),
                eM(tn, "mouseup", tw),
                eM(tn, "mousemove", tv));
            }
            return (
              eL(r, ty),
              (i = !1),
              H &&
                "soft" !== e &&
                (H.untrack(a || r, ek ? "x,y" : eS ? "rotation" : "top,left"),
                eJ.tween && eJ.tween.kill()),
              a && a.disable(),
              eE(ti),
              (eJ.isDragging = eJ.isPressed = j = !1),
              n && eI(eJ, "dragend", "onDragEnd"),
              eJ
            );
          }),
          (o.enabled = function (e, t) {
            return arguments.length ? (e ? eJ.enable(t) : eJ.disable(t)) : i;
          }),
          (o.kill = function () {
            return (
              (eJ.isThrowing = !1),
              eJ.tween && eJ.tween.kill(),
              eJ.disable(),
              _.set(e0, {
                clearProps: "userSelect",
              }),
              delete ep[r._gsDragID],
              eJ
            );
          }),
          (o.revert = function () {
            (this.kill(), this.styles && this.styles.revert());
          }),
          ~em.indexOf("scroll") &&
            ((a = o.scrollProxy =
              new eK(
                r,
                ey(
                  {
                    onKill: function () {
                      eJ.isPressed && tw(null);
                    },
                  },
                  n,
                ),
              )),
            (r.style.overflowY = eq && !X ? "auto" : "hidden"),
            (r.style.overflowX = eF && !X ? "auto" : "hidden"),
            (r = a.content)),
          eS ? (e1.rotation = 1) : (eF && (e1[eP] = 1), eq && (e1[eO] = 1)),
          (te.force3D = !("force3D" in n) || n.force3D),
          U(N(o)),
          o.enable(),
          o
        );
      }
      return (
        (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e),
        (t.register = function (e) {
          ((_ = e), eQ());
        }),
        (t.create = function (e, r) {
          return (
            D || eQ(!0),
            B(e).map(function (e) {
              return new t(e, r);
            })
          );
        }),
        (t.get = function (e) {
          return ep[(B(e)[0] || {})._gsDragID];
        }),
        (t.timeSinceDrag = function () {
          return (ed() - eg) / 1e3;
        }),
        (t.hitTest = function (e, t, r) {
          if (e === t) return !1;
          var n,
            o,
            i,
            a = eV(e),
            l = eV(t),
            s = a.top,
            u = a.left,
            c = a.right,
            d = a.bottom,
            f = a.width,
            p = a.height,
            h = l.left > c || l.right < u || l.top > d || l.bottom < s;
          return h || !r
            ? !h
            : ((i = -1 !== (r + "").indexOf("%")),
              (r = parseFloat(r) || 0),
              ((n = {
                left: Math.max(u, l.left),
                top: Math.max(s, l.top),
              }).width = Math.min(c, l.right) - n.left),
              (n.height = Math.min(d, l.bottom) - n.top),
              !(n.width < 0) &&
                !(n.height < 0) &&
                (i
                  ? ((r *= 0.01),
                    (o = n.width * n.height) >= f * p * r ||
                      o >= l.width * l.height * r)
                  : n.width > r && n.height > r));
        }),
        t
      );
    })(
      (function () {
        function e(e) {
          ((this._listeners = {}), (this.target = e || this));
        }
        var t = e.prototype;
        return (
          (t.addEventListener = function (e, t) {
            var r = this._listeners[e] || (this._listeners[e] = []);
            ~r.indexOf(t) || r.push(t);
          }),
          (t.removeEventListener = function (e, t) {
            var r = this._listeners[e],
              n = r && r.indexOf(t);
            n >= 0 && r.splice(n, 1);
          }),
          (t.dispatchEvent = function (e) {
            var t,
              r = this;
            return (
              (this._listeners[e] || []).forEach(function (n) {
                return (
                  !1 ===
                    n.call(r, {
                      type: e,
                      target: r.target,
                    }) && (t = !1)
                );
              }),
              t
            );
          }),
          e
        );
      })(),
    );
  (!(function (e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
  })(eZ.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
  }),
    (eZ.zIndex = 1e3),
    (eZ.version = "3.15.0"),
    J() && _.registerPlugin(eZ));
  var eJ = e.i(94867),
    e0 = e.i(1248),
    e1 = e.i(15216),
    e2 = e.i(95507),
    e3 = e.i(59245);
  f.default.registerPlugin(p.useGSAP, eZ, eJ.default);
  let e5 = [
    {
      quote: "I just love the product.",
      handle: "@Theheartbrosco",
    },
    {
      quote: "Tastes like a holiday.",
      handle: "@coconutclub",
    },
    {
      quote: "My morning ritual now.",
      handle: "@sipwithsana",
    },
    {
      quote: "Clean, crisp, unreal.",
      handle: "@ravi.eats",
    },
    {
      quote: "Nothing else comes close.",
      handle: "@thegreenpantry",
    },
    {
      quote: "Finished the box in a week.",
      handle: "@dailydoseofmeher",
    },
  ];
  e.s(
    [
      "default",
      0,
      function () {
        let e = (0, d.useRef)(null),
          t = (0, d.useRef)(null),
          r = (0, d.useRef)(null);
        return (
          (0, p.useGSAP)(
            () => {
              let n = e.current,
                o = t.current,
                i = f.default.utils.toArray("[data-card]", o),
                a = window.matchMedia(
                  "(prefers-reduced-motion: reduce)",
                ).matches;
              f.default.set(i, {
                transformOrigin: "left top",
              });
              let l = document.createElement("div");
              f.default.set(l, {
                x: 0,
              });
              let s = 0,
                u = 0,
                c = f.default.utils.wrap(0, 1),
                d = () => {
                  f.default.set(o, {
                    x: c(f.default.getProperty(l, "x")),
                  });
                },
                p = () => {
                  let e = parseFloat(getComputedStyle(o).columnGap) || 0;
                  ((u = (s = (o.scrollWidth + e) / 3) / e5.length),
                    (c = f.default.utils.wrap(-s, 0)),
                    d());
                };
              p();
              let h = eZ.create(l, {
                type: "x",
                trigger: n,
                inertia: !0,
                allowNativeTouchScrolling: !0,
                cursor: "grab",
                activeCursor: "grabbing",
                onPress() {
                  (f.default.killTweensOf(l), this.update());
                },
                onDrag: d,
                onThrowUpdate: d,
              })[0];
              r.current = (e) => {
                (f.default.killTweensOf(l),
                  f.default.to(l, {
                    x: f.default.getProperty(l, "x") - e * u,
                    duration: 0.9,
                    ease: "power3.out",
                    onUpdate: d,
                  }));
              };
              let m = i.map((e) => f.default.quickSetter(e, "rotation", "deg")),
                g = i.map(() => 0),
                v = i.map((e, t) => 0.09 + (t % 3) * 0.02),
                x = 0,
                w = () => {
                  let e = f.default.getProperty(l, "x"),
                    t = e - x;
                  x = e;
                  let r = f.default.utils.clamp(-10, 10, -(0.22 * t)),
                    n = f.default.ticker.deltaRatio();
                  for (let e = 0; e < g.length; e++)
                    ((g[e] += (r - g[e]) * Math.min(1, v[e] * n)), m[e](g[e]));
                };
              a || f.default.ticker.add(w);
              let y = new ResizeObserver(p);
              return (
                y.observe(n),
                () => {
                  (f.default.ticker.remove(w),
                    y.disconnect(),
                    h.kill(),
                    (r.current = null));
                }
              );
            },
            {
              scope: e,
              dependencies: [],
            },
          ),
          (
            <section
              id={"reviews"}
              className={
                "h-fit relative w-full bg-background z-10 overflow-x-clip pt-[2vw] pb-[8vw] max-md:pt-[6vh] max-md:pb-[10vh]"
              }
            >
              {
                <div
                  className={
                    "paddx relative z-10 flex w-full items-center max-md:justify-center justify-between max-md:gap-4"
                  }
                >
                  {
                    <e3.AnimatedHeading
                      as={"h2"}
                      className={"text180 uppercase"}
                    >
                      {"Promptedsite Sippers Say !"}
                    </e3.AnimatedHeading>
                  }
                  {
                    <div
                      className={
                        "flex items-center max-md:hidden gap-[1vw] max-md:gap-3 max-md:shrink-0"
                      }
                    >
                      {
                        <e1.default
                          aria-label={"Previous review"}
                          onClick={() => r.current?.(-1)}
                          bgColor={"var(--beige)"}
                          className={
                            "size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                          }
                        >
                          {
                            <div
                              className={
                                "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 transition-colors duration-500"
                              }
                            >
                              {
                                <svg
                                  className={"h-full w-full"}
                                  viewBox={"0 0 47 41"}
                                  fill={"none"}
                                  xmlns={"http://www.w3.org/2000/svg"}
                                >
                                  {
                                    <path
                                      d={
                                        "M43.2324 21.0645H4.23242M21.6499 38L4.23242 21.0645L21.6499 3"
                                      }
                                      stroke={"currentColor"}
                                      strokeWidth={"6"}
                                      strokeLinecap={"round"}
                                    />
                                  }
                                </svg>
                              }
                            </div>
                          }
                        </e1.default>
                      }
                      {
                        <e1.default
                          aria-label={"Next review"}
                          onClick={() => r.current?.(1)}
                          bgColor={"var(--beige)"}
                          className={
                            "size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                          }
                        >
                          {
                            <div
                              className={
                                "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 rotate-180 transition-colors duration-500"
                              }
                            >
                              {
                                <svg
                                  className={"h-full w-full"}
                                  viewBox={"0 0 47 41"}
                                  fill={"none"}
                                  xmlns={"http://www.w3.org/2000/svg"}
                                >
                                  {
                                    <path
                                      d={
                                        "M43.2324 21.0645H4.23242M21.6499 38L4.23242 21.0645L21.6499 3"
                                      }
                                      stroke={"currentColor"}
                                      strokeWidth={"6"}
                                      strokeLinecap={"round"}
                                    />
                                  }
                                </svg>
                              }
                            </div>
                          }
                        </e1.default>
                      }
                    </div>
                  }
                </div>
              }
              {
                <div
                  ref={e}
                  className={
                    "mt-[2vw] max-md:z-22 max-md:mt-0! relative z-22 w-full touch-pan-y py-[5vw] pl-[3vw] max-md:py-[6vh] max-md:pl-[5vw]"
                  }
                >
                  {
                    <div
                      ref={t}
                      className={
                        "flex w-max gap-[1.6vw] max-md:gap-4 will-change-transform"
                      }
                    >
                      {Array.from({
                        length: 3,
                      }).flatMap((e, t) =>
                        e5.map((e, r) => (
                          <article
                            data-card={!0}
                            className={
                              "relative z-10 flex h-[23vw] w-[27vw] shrink-0 select-none flex-col items-center justify-center rounded-[1.8vw] border-4 border-foreground/60 bg-background px-[2.5vw] text-center max-md:h-[42vw] max-md:w-[62vw] max-md:rounded-3xl max-md:px-6"
                            }
                            key={`${t}-${r}`}
                          >
                            {
                              <span
                                className={
                                  "absolute left-[1.5vw] top-[1.5vw] size-[1.3vw] rounded-full bg-foreground max-md:left-4 max-md:top-4 max-md:size-2.5"
                                }
                              />
                            }
                            {
                              <span
                                className={
                                  "absolute right-[1.5vw] top-[1.5vw] size-[1.3vw] rounded-full bg-foreground max-md:right-4 max-md:top-4 max-md:size-2.5"
                                }
                              />
                            }
                            {
                              <e0.ReviewQuote
                                className={
                                  "mb-[2vw] h-[3.5vw] w-[4.2vw] text-gold max-md:mb-4 max-md:h-7 max-md:w-8"
                                }
                              />
                            }
                            {
                              <h3
                                className={
                                  "font-khand text52 font-semibold uppercase leading-[95%] tracking-[-0.02em]"
                                }
                              >
                                {e.quote}
                              </h3>
                            }
                            {
                              <p
                                className={
                                  "mt-[1.4vw] max-md:mt-3 font-patrick-hand text36 leading-none"
                                }
                              >
                                {e.handle}
                              </p>
                            }
                          </article>
                        )),
                      )}
                    </div>
                  }
                </div>
              }
              {
                <div
                  className={
                    "items-center max-md:items-center max-md:flex justify-center max-md:justify-center hidden gap-[1vw] max-md:gap-3 max-md:shrink-0"
                  }
                >
                  {
                    <e1.default
                      aria-label={"Previous review"}
                      onClick={() => r.current?.(-1)}
                      bgColor={"var(--beige)"}
                      className={
                        "size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                      }
                    >
                      {
                        <div
                          className={
                            "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 transition-colors duration-500"
                          }
                        >
                          {
                            <svg
                              className={"h-full w-full"}
                              viewBox={"0 0 47 41"}
                              fill={"none"}
                              xmlns={"http://www.w3.org/2000/svg"}
                            >
                              {
                                <path
                                  d={
                                    "M43.2324 21.0645H4.23242M21.6499 38L4.23242 21.0645L21.6499 3"
                                  }
                                  stroke={"currentColor"}
                                  strokeWidth={"6"}
                                  strokeLinecap={"round"}
                                />
                              }
                            </svg>
                          }
                        </div>
                      }
                    </e1.default>
                  }
                  {
                    <e1.default
                      aria-label={"Next review"}
                      onClick={() => r.current?.(1)}
                      bgColor={"var(--beige)"}
                      className={
                        "size-[5vw] max-md:size-12 bg-foreground border-2 border-foreground text-background hover:text-foreground"
                      }
                    >
                      {
                        <div
                          className={
                            "h-[1.2vw] w-[1.4vw] max-md:h-3.5 max-md:w-4 rotate-180 transition-colors duration-500"
                          }
                        >
                          {
                            <svg
                              className={"h-full w-full"}
                              viewBox={"0 0 47 41"}
                              fill={"none"}
                              xmlns={"http://www.w3.org/2000/svg"}
                            >
                              {
                                <path
                                  d={
                                    "M43.2324 21.0645H4.23242M21.6499 38L4.23242 21.0645L21.6499 3"
                                  }
                                  stroke={"currentColor"}
                                  strokeWidth={"6"}
                                  strokeLinecap={"round"}
                                />
                              }
                            </svg>
                          }
                        </div>
                      }
                    </e1.default>
                  }
                </div>
              }
              {
                <e2.default
                  speed={0.1}
                  rotate={10}
                  className={
                    "absolute right-[5vw] text-light-beige rotate-10 z-20 bottom-[8vw] size-[25vw] max-md:size-[45vw] max-md:right-[-12vw] max-md:bottom-[-4vw]"
                  }
                >
                  {<e0.CoconutPiece3 opacity={".7"} className={""} />}
                </e2.default>
              }
            </section>
          )
        );
      },
    ],
    82432,
  );
};
