// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (t) => {
  "use strict";

  var e = t.i(43476),
    r = t.i(71645),
    i = t.i(89970),
    n = t.i(65747),
    s = t.i(69756);
  (i.default.registerPlugin(n.useGSAP),
    t.s([
      "default",
      0,
      function ({
        className: t = "",
        showTrunk: o = !0,
        interactive: a = !1,
        intensity: l = 1,
        fill: u = "#FFE386",
        ...c
      }) {
        let h = (0, r.useRef)(null),
          f = (0, r.useRef)(null);
        return (
          (0, s.default)({
            enabled: a,
            onChange: (t, e) => f.current?.(t, e),
          }),
          (0, n.useGSAP)(
            () => {
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                return;
              let t = i.default.utils.toArray("[data-leaf]", h.current);
              (i.default.to("[data-crown]", {
                rotation: 6,
                transformOrigin: "50% 50%",
                svgOrigin: "300 560",
                duration: 3.5,
                ease: "sine.inOut",
                yoyo: !0,
                repeat: -1,
              }),
                t.forEach((t, e) => {
                  i.default.to(t, {
                    rotation:
                      (e % 2 == 0 ? 1 : -1) * i.default.utils.random(2.5, 4.5),
                    svgOrigin: "277 233",
                    duration: i.default.utils.random(2.6, 3.8),
                    ease: "sine.inOut",
                    yoyo: !0,
                    repeat: -1,
                    delay: 0.15 * e,
                  });
                }));
            },
            {
              scope: h,
            },
          ),
          (0, n.useGSAP)(
            () => {
              if (
                !a ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              )
                return;
              i.default.set("[data-lean]", {
                svgOrigin: "300 560",
              });
              let t = i.default.quickTo("[data-lean]", "rotation", {
                  duration: 0.9,
                  ease: "power3.out",
                }),
                e = i.default.quickTo("[data-lean]", "x", {
                  duration: 1.1,
                  ease: "power3.out",
                }),
                r = i.default.quickTo("[data-lean]", "y", {
                  duration: 1.1,
                  ease: "power3.out",
                }),
                n = i.default.utils.toArray("[data-leaf]", h.current),
                s = n.map((t) =>
                  i.default.quickTo(t, "scale", {
                    duration: 0.8,
                    ease: "power2.out",
                  }),
                );
              return (
                (f.current = (i, n) => {
                  (t(5 * i * l),
                    e(14 * i * l),
                    r(8 * n * l),
                    s.forEach((t, e) => {
                      t(1 + i * (e % 2 == 0 ? 1 : -1) * 0.03 * l);
                    }));
                }),
                () => {
                  ((f.current = null),
                    i.default.to("[data-lean]", {
                      rotation: 0,
                      x: 0,
                      y: 0,
                      duration: 0.6,
                      ease: "power2.out",
                      overwrite: !0,
                    }),
                    i.default.to(n, {
                      scale: 1,
                      duration: 0.6,
                      ease: "power2.out",
                      overwrite: !0,
                    }));
                }
              );
            },
            {
              scope: h,
              dependencies: [a, l],
            },
          ),
          (
            <div ref={h} className={t} {...c}>
              {
                <svg
                  viewBox={o ? "0 0 554 588" : "0 0 554 420"}
                  fill={"none"}
                  xmlns={"http://www.w3.org/2000/svg"}
                  className={"block h-full w-full overflow-visible"}
                >
                  {
                    <g data-lean={!0}>
                      {
                        <g data-crown={!0}>
                          {
                            <path
                              data-leaf={!0}
                              d={
                                "M276.9 249.322L245.035 358.522L218.104 349.667L239.372 377.927L200.966 509.509C167.804 469.088 154.52 411.898 170.563 356.94C186.604 301.952 228.007 262.772 276.9 249.322Z"
                              }
                              fill={u}
                            />
                          }
                          {
                            <path
                              data-leaf={!0}
                              d={
                                "M103.415 207.766C157.405 181.329 218.871 187.303 273.502 218.22L111.253 297.676L93.7865 257.119L90.1138 308.033L2.44079e-05 352.169C13.6111 287.814 49.4243 234.204 103.415 207.766Z"
                              }
                              fill={u}
                            />
                          }
                          {
                            <path
                              data-leaf={!0}
                              d={
                                "M208.565 116.324L163.197 142.072L124.48 120.504L144.267 80.4888L98.9187 106.247L18.5067 61.4334C67.6015 24.6383 133.909 17.6759 190.768 49.3588C247.628 81.052 279.895 142.964 279.238 206.757L188.778 156.327L208.565 116.324Z"
                              }
                              fill={u}
                            />
                          }
                          {
                            <path
                              data-leaf={!0}
                              d={
                                "M396.393 62.3739L422.723 91.8752L302.498 212.828C288.192 156.793 303.813 92.8834 347.994 48.4469C392.172 4.00119 453.144 -9.11952 505.07 9.05494L442.601 71.8976L396.393 62.3739Z"
                              }
                              fill={u}
                            />
                          }
                          {
                            <path
                              data-leaf={!0}
                              d={
                                "M453.656 172.446C505.236 188.06 541.998 231.991 553.217 283.818L494.986 266.187L485.685 236.307L478.98 261.357L426.871 245.588L416.035 210.724L408.197 239.944L313.736 211.373C349.017 173.619 402.059 156.851 453.656 172.446Z"
                              }
                              fill={u}
                            />
                          }
                          {o && (
                            <path
                              d={
                                "M291.272 233.752L312.996 223.029C391.719 410.788 337.783 853.463 337.783 853.463L267.028 820.022C325.93 605.308 299.765 276.926 291.272 233.752Z"
                              }
                              fill={u}
                            />
                          )}
                        </g>
                      }
                    </g>
                  }
                </svg>
              }
            </div>
          )
        );
      },
    ]));
};
