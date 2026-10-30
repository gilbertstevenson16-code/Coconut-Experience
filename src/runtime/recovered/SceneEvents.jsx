// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  e.s([
    "SEQ",
    0,
    {
      shake: "coconut:shake",
      burst: "coconut:burst",
      can: "coconut:can",
      reset: "coconut:reset",
    },
    "emitSeq",
    0,
    function (e, t) {
      window.dispatchEvent(
        new CustomEvent(e, {
          detail: t,
        }),
      );
    },
    "onSeq",
    0,
    function (e, t) {
      return (
        window.addEventListener(e, t),
        () => window.removeEventListener(e, t)
      );
    },
  ]);
};
