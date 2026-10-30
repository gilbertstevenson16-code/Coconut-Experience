import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    n = e.i(71645),
    r = e.i(82687),
    a = e.i(78140),
    o = e.i(47071),
    i = e.i(28600),
    s = e.i(90072),
    l = e.i(70905);
  (a.useGLTF.preload(asset("/model/can1.glb")),
    e.s([
      "CanModel",
      0,
      function ({
        can: e,
        upright: c = !1,
        texture: u = asset("/model/tex/coconutWhite.webp"),
        ...d
      }) {
        let { nodes: m, materials: p } = (0, a.useGLTF)(
            asset("/model/can1.glb"),
          ),
          h = (0, o.useTexture)(u),
          f = (0, i.useThree)((e) => e.gl.capabilities.getMaxAnisotropy()),
          b = (0, n.useMemo)(() => {
            let e = h.clone();
            return (
              (e.colorSpace = s.SRGBColorSpace),
              (e.flipY = !0),
              (e.anisotropy = f),
              (e.magFilter = s.LinearFilter),
              (e.minFilter = s.LinearMipmapLinearFilter),
              (e.generateMipmaps = !0),
              (e.needsUpdate = !0),
              e
            );
          }, [h, f]),
          g = (0, n.useMemo)(() => {
            let e = p.Etiquette.clone();
            return ((e.map = b), (e.needsUpdate = !0), e);
          }, [p, b]);
        return (
          (0, n.useEffect)(
            () => () => {
              (b.dispose(), g.dispose());
            },
            [b, g],
          ),
          (
            <group dispose={null} {...d}>
              {
                <group ref={e}>
                  {
                    <r.Center>
                      {
                        <group
                          rotation={
                            c
                              ? [(0, l.degToRad)(90), 0, 0]
                              : [0, 0, (0, l.degToRad)(180)]
                          }
                          scale={c ? 0.18 : 0.005}
                        >
                          {
                            <mesh
                              castShadow={!0}
                              receiveShadow={!0}
                              geometry={m.Shell.geometry}
                              material={g}
                            />
                          }
                          {
                            <mesh
                              castShadow={!0}
                              receiveShadow={!0}
                              geometry={m.Bottom.geometry}
                              material={p.Metal}
                            />
                          }
                          {
                            <mesh
                              castShadow={!0}
                              receiveShadow={!0}
                              geometry={m.Top.geometry}
                              material={p.Metal}
                            />
                          }
                        </group>
                      }
                    </r.Center>
                  }
                </group>
              }
            </group>
          )
        );
      },
    ]));
};
