// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(71645),
    r = e.i(18566),
    n = e.i(28908);
  let a = {
      "/": "promptedsite",
      "/flavours": "Flavours",
      "/story": "Our Story",
    },
    i = ["Pouring", "Pressing", "Chilling", "Sipping", "Bliss"];
  e.s([
    "default",
    0,
    function () {
      let e = (0, r.usePathname)(),
        { isTransitionFinished: l, isLoaderFinished: s } = (0,
        n.useAnimation)(),
        o = (0, t.useMemo)(
          () =>
            a[e]
              ? a[e]
              : e
                  .split("/")
                  .filter(Boolean)
                  .map(
                    (e) =>
                      e.charAt(0).toUpperCase() + e.slice(1).replace(/-/g, " "),
                  )
                  .join(" | ") || "promptedsite",
          [e],
        );
      return (
        (0, t.useEffect)(() => {
          if (!l || !s) {
            document.title = "Pouring...";
            return;
          }
          let e = i.map((e) => `${o} | ${e}`),
            t = 0;
          ((document.title = e[t]), (t = (t + 1) % e.length));
          let r = setInterval(() => {
            ((document.title = e[t]), (t = (t + 1) % e.length));
          }, 800);
          return () => clearInterval(r);
        }, [o, l, s]),
        null
      );
    },
  ]);
};
