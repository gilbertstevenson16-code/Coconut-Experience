// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645);
  e.s([
    "default",
    0,
    function () {
      let e = (0, r.useRef)(null),
        n = (0, r.useRef)({
          trail: [],
          strength: 1,
          muted: !1,
        });
      return (
        (0, r.useEffect)(() => {
          let t,
            r,
            a = window.matchMedia("(pointer: fine)"),
            i = window.matchMedia("(prefers-reduced-motion: reduce)");
          if (!a.matches || i.matches) return;
          let l = e.current;
          if (!l) return;
          let s = l.getContext("2d"),
            o = () => {
              let e = Math.min(window.devicePixelRatio || 1, 2);
              ((l.width = window.innerWidth * e),
                (l.height = window.innerHeight * e),
                (l.style.width = `${window.innerWidth}px`),
                (l.style.height = `${window.innerHeight}px`),
                s.setTransform(e, 0, 0, e, 0, 0));
            };
          o();
          let u = setTimeout(() => {
              let e = document.querySelectorAll("[data-slash-zone]");
              e.length &&
                ((r = new IntersectionObserver(
                  (e) => {
                    for (let t of e)
                      n.current.muted =
                        t.isIntersecting && t.intersectionRatio > 0.15;
                    d();
                  },
                  {
                    threshold: [0, 0.15, 0.5],
                  },
                )),
                e.forEach((e) => r.observe(e)));
            }, 100),
            c = () => {
              let e = n.current,
                r = window.innerWidth,
                a = window.innerHeight,
                i = Date.now(),
                l = +!e.muted;
              ((e.strength += (l - e.strength) * 0.1),
                0.002 > Math.abs(l - e.strength) && (e.strength = l));
              let o = e.strength;
              (s.clearRect(0, 0, r, a),
                (e.trail = e.trail.filter((e) => i - e.t < 220)));
              let u = e.trail;
              if (o > 0.02 && u.length >= 3) {
                let e = [],
                  t = [];
                for (let r = 0; r < u.length - 1; r++) {
                  let n = u[r],
                    a = u[r + 1],
                    l = Math.max(0, 1 - (i - n.t) / 220),
                    s = a.x - n.x,
                    c = a.y - n.y,
                    d = Math.hypot(s, c);
                  if (0 === d) continue;
                  let f = -c / d,
                    m = s / d,
                    h =
                      Math.min(6, 0.5 * d) *
                      Math.sin((r / (u.length - 1)) * Math.PI) *
                      l *
                      o;
                  (e.push({
                    x: n.x + f * h,
                    y: n.y + m * h,
                  }),
                    t.push({
                      x: n.x - f * h,
                      y: n.y - m * h,
                    }));
                }
                if (e.length > 1) {
                  (s.save(),
                    (s.globalAlpha = 0.28 * o),
                    s.beginPath(),
                    s.moveTo(e[0].x, e[0].y));
                  for (let t = 1; t < e.length; t++) s.lineTo(e[t].x, e[t].y);
                  for (let e = t.length - 1; e >= 0; e--)
                    s.lineTo(t[e].x, t[e].y);
                  (s.closePath(),
                    (s.fillStyle = "#FFE386"),
                    s.fill(),
                    s.restore());
                }
              }
              if (0 === u.length && e.strength === l) {
                t = null;
                return;
              }
              t = requestAnimationFrame(c);
            },
            d = () => {
              null == t && (t = requestAnimationFrame(c));
            },
            f = (e) => {
              (n.current.trail.push({
                x: e.clientX,
                y: e.clientY,
                t: Date.now(),
              }),
                d());
            },
            m = () => {
              document.hidden &&
                ((n.current.trail = []),
                null != t && (cancelAnimationFrame(t), (t = null)));
            };
          return (
            window.addEventListener("resize", o),
            window.addEventListener("pointermove", f, {
              passive: !0,
            }),
            document.addEventListener("visibilitychange", m),
            (t = requestAnimationFrame(c)),
            () => {
              (clearTimeout(u),
                r?.disconnect(),
                window.removeEventListener("resize", o),
                window.removeEventListener("pointermove", f),
                document.removeEventListener("visibilitychange", m),
                null != t && cancelAnimationFrame(t));
            }
          );
        }, []),
        (
          <canvas
            ref={e}
            aria-hidden={"true"}
            className={"pointer-events-none fixed inset-0 z-998 h-full w-full"}
          />
        )
      );
    },
  ]);
};
