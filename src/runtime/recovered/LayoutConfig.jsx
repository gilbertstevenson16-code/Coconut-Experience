// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (C) => {
  "use strict";

  C.s([
    "onLoaderCue",
    0,
    function (C, { delay: l = 0 } = {}) {
      let e = !1,
        t = () => {
          if (!e)
            if (((e = !0), l > 0)) {
              let e = setTimeout(C, 1e3 * l);
              i.push(e);
            } else C();
        },
        i = [];
      if (!document.getElementById("loader") || window.__loaderFinished)
        return (t(), () => i.forEach(clearTimeout));
      window.addEventListener("loaderComplete", t);
      let s = setInterval(() => {
        (window.__loaderFinished || !document.getElementById("loader")) &&
          (clearInterval(s), t());
      }, 200);
      return () => {
        (clearInterval(s),
          i.forEach(clearTimeout),
          window.removeEventListener("loaderComplete", t));
      };
    },
  ]);
};
