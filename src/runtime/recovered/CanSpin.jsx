import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    a = e.i(75056),
    i = e.i(25234),
    n = e.i(28600),
    s = e.i(23652),
    l = e.i(82687),
    o = e.i(43257),
    u = e.i(78140),
    c = e.i(47071),
    f = e.i(914),
    m = e.i(90072),
    p = e.i(70905);
  let d = e.i(61598).FLAVOURS.map((e) => e.texture);
  class x extends r.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          ok: !0,
        }));
    }
    static getDerivedStateFromError() {
      return {
        ok: !1,
      };
    }
    render() {
      return this.state.ok ? this.props.children : null;
    }
  }
  function h({ targetRef: e, spinTarget: a, hover: s }) {
    let o = (0, r.useRef)(),
      { nodes: f, materials: x } = (0, u.useGLTF)(asset("/model/can1.glb")),
      g = (0, c.useTexture)(d),
      M = (0, n.useThree)((e) => e.gl),
      v = (0, n.useThree)((e) => e.invalidate),
      j = M.capabilities.getMaxAnisotropy(),
      [y, R] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
      let e = () => {
        R(window.innerWidth <= 1025);
      };
      return (
        e(),
        window.addEventListener("resize", e),
        () => window.removeEventListener("resize", e)
      );
    }, []);
    let S = (0, r.useRef)(0),
      b = (0, r.useRef)(0),
      T = (0, r.useRef)({
        from: 0,
        to: 0,
        elapsed: 0,
        fading: !1,
        label: 0,
      }),
      C = (0, r.useMemo)(
        () =>
          g.map(
            (e) => (
              (e.colorSpace = m.SRGBColorSpace),
              (e.flipY = !0),
              (e.anisotropy = j),
              (e.magFilter = m.LinearFilter),
              (e.minFilter = m.LinearMipmapLinearFilter),
              (e.generateMipmaps = !0),
              (e.needsUpdate = !0),
              e
            ),
          ),
        [g, j],
      ),
      E = (0, r.useMemo)(() => {
        let e = x.Etiquette.clone(),
          t = C[0],
          r = {
            uNextMap: {
              value: t,
            },
            uMix: {
              value: 0,
            },
          };
        return (
          (e.map = t),
          e.color.setScalar(1),
          (e.onBeforeCompile = (e) => {
            ((e.uniforms.uNextMap = r.uNextMap),
              (e.uniforms.uMix = r.uMix),
              (e.fragmentShader = e.fragmentShader
                .replace(
                  "#include <map_pars_fragment>",
                  `#include <map_pars_fragment>
                     uniform sampler2D uNextMap;
                     uniform float uMix;`,
                )
                .replace(
                  "#include <map_fragment>",
                  `#ifdef USE_MAP
                       vec4 texelA = texture2D( map, vMapUv );
                       vec4 texelB = texture2D( uNextMap, vMapUv );
                       vec4 sampledDiffuseColor = mix( texelA, texelB, uMix );
                       diffuseColor *= sampledDiffuseColor;
                     #endif`,
                )));
          }),
          (e.customProgramCacheKey = () => "cta-can-crossfade"),
          (e.needsUpdate = !0),
          (e.userData.crossfade = r),
          e
        );
      }, [x, C]),
      L = (0, r.useRef)(null);
    return (
      (0, r.useEffect)(() => {
        (C.forEach((e) => M.initTexture(e)), v());
      }, [C, M, v]),
      (0, r.useEffect)(() => () => E.dispose(), [E]),
      (0, i.useFrame)(({ clock: t }, r) => {
        let i = o.current,
          n = L.current?.material;
        if (!i) return;
        let l = Math.min(r, 1 / 30),
          u = n?.userData?.crossfade;
        if (a.current !== T.current.to) {
          let t = T.current;
          t.from === t.to &&
            ((t.from = S.current),
            (t.to = a.current),
            (t.elapsed = 0),
            (t.fading = !1),
            (t.label = e.current));
        }
        let c = T.current;
        if (c.from !== c.to) {
          var f;
          c.elapsed = Math.min(c.elapsed + l, 1.15);
          let e = (f = c.elapsed / 1.15) >= 1 ? 1 : 1 - Math.pow(2, -10 * f);
          S.current = c.from + (c.to - c.from) * e;
          let t = Math.min(Math.max((e - 0.29000000000000004) / 0.42, 0), 1);
          (n &&
            u &&
            (c.fading ||
              ((u.uNextMap.value = C[c.label] ?? n.map),
              (u.uMix.value = 0),
              (c.fading = !0)),
            (u.uMix.value = t * t * (3 - 2 * t))),
            c.elapsed >= 1.15 &&
              (n &&
                u &&
                u.uNextMap.value &&
                ((n.map = u.uNextMap.value), (u.uMix.value = 0)),
              (c.from = c.to),
              (c.fading = !1),
              (S.current = c.to)));
        }
        i.rotation.y = S.current * Math.PI * 2;
        let m = t.elapsedTime,
          p = Math.min(5 * l, 1);
        ((b.current += (!!s.current - b.current) * p),
          (i.position.y = 0.06 * Math.sin(1.1 * m)),
          (i.rotation.z = 0.035 * Math.sin(0.7 * m) + 0.06 * b.current),
          (i.rotation.x += (-0.12 * b.current - i.rotation.x) * p),
          i.scale.setScalar(1 + 0.06 * b.current));
      }),
      (
        <group ref={o} dispose={null}>
          {
            <l.Center>
              {
                <group
                  rotation={[(0, p.degToRad)(90), 0, 0]}
                  scale={y ? 0.135 : 0.18}
                >
                  {<mesh ref={L} geometry={f.Shell.geometry} material={E} />}
                  {<mesh geometry={f.Bottom.geometry} material={x.Metal} />}
                  {<mesh geometry={f.Top.geometry} material={x.Metal} />}
                </group>
              }
            </l.Center>
          }
        </group>
      )
    );
  }
  (u.useGLTF.preload(asset("/model/can1.glb")),
    d.forEach((e) => c.useTexture.preload(e)),
    e.s([
      "SPIN_DURATION",
      0,
      1.15,
      "default",
      0,
      function ({ targetRef: e, spinRef: i, hoverRef: n }) {
        let l = (0, r.useRef)(0),
          u = (0, r.useRef)(0),
          c = (0, r.useRef)(!1),
          m = (0, r.useRef)(null),
          [p, d] = (0, r.useState)(!0);
        (0, r.useEffect)(() => {
          let e = m.current;
          if (!e) return;
          let t = new IntersectionObserver(
            ([e]) => {
              e.isIntersecting && d(!0);
            },
            {
              rootMargin: "150% 0px",
            },
          );
          return (t.observe(e), () => t.disconnect());
        }, []);
        let g = (0, s.default)(m);
        return (
          <div ref={m} className={"absolute inset-0 h-full w-full"}>
            {p && (
              <a.Canvas
                frameloop={g ? "always" : "demand"}
                dpr={[1, 1.5]}
                camera={{
                  position: [0, 0, 4.6],
                  fov: 40,
                }}
                gl={{
                  alpha: !0,
                  antialias: !0,
                }}
                onCreated={({ gl: e, invalidate: t }) => {
                  (e.setClearColor(0, 0), t());
                }}
                className={"absolute! inset-0 h-full w-full touch-pan-y"}
              >
                {<ambientLight intensity={0.85} />}
                {<hemisphereLight args={["#fff4dc", "#463721", 0.55]} />}
                {
                  <directionalLight
                    position={[3, 5, 6]}
                    intensity={1.15}
                    color={"#fff6e8"}
                  />
                }
                {
                  <directionalLight
                    position={[-4, 1, 3]}
                    intensity={0.35}
                    color={"#ffe386"}
                  />
                }
                {
                  <r.Suspense fallback={null}>
                    {(0, t.jsx)(x, {
                      children: (
                        <o.Environment
                          files={f.HDRI}
                          environmentIntensity={0.45}
                        />
                      ),
                    })}
                  </r.Suspense>
                }
                {
                  <r.Suspense fallback={null}>
                    {(0, t.jsx)(h, {
                      targetRef: e ?? l,
                      spinTarget: i ?? u,
                      hover: n ?? c,
                    })}
                  </r.Suspense>
                }
              </a.Canvas>
            )}
          </div>
        );
      },
    ]));
};
