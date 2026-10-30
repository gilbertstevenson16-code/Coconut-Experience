// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(71645),
    r = e.i(25234),
    n = e.i(28600);
  let o = "palmo:scene-ready";
  function a() {
    window.__palmoSceneReady ||
      ((window.__palmoSceneReady = !0), window.dispatchEvent(new Event(o)));
  }
  e.s([
    "SCENE_READY",
    0,
    o,
    "default",
    0,
    function () {
      let e = (0, n.useThree)((e) => e.invalidate),
        o = (0, t.useRef)(0);
      return (
        (0, r.useFrame)(() => {
          !(o.current > 1) && ((o.current += 1), o.current > 1 && a());
        }),
        (0, t.useEffect)(() => {
          e();
          let t = setTimeout(a, 600);
          return () => clearTimeout(t);
        }, [e]),
        null
      );
    },
  ]);
};
