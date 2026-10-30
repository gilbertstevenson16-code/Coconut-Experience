// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    o = e.i(33809),
    i = e.i(65747),
    a = e.i(1248),
    l = e.i(84977),
    s = e.i(20808),
    u = e.i(95507),
    c = e.i(59245),
    d = e.i(61598);
  n.default.registerPlugin(i.useGSAP, o.default);
  let f = d.FLAVOURS.slice(0, 3);
  e.s([
    "default",
    0,
    function () {
      let e = (0, r.useRef)(null),
        o = (0, r.useRef)(null);
      return (
        (0, i.useGSAP)(
          () => {
            window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              n.default.to(o.current, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: !0,
                },
              });
          },
          {
            scope: e,
          },
        ),
        (
          <section
            ref={e}
            id={"flavours"}
            data-nav-dark={"0 7"}
            className={
              "h-fit z-10 mt-[-2vw] max-md:mt-[-14vw] pb-[7vw] text-background relative w-full bg-foreground"
            }
          >
            {
              <div
                className={
                  "paddx flex gap-[4vw] max-md:gap-[8vw] flex-col items-center justify-between h-full py-[10vw]"
                }
              >
                {
                  <h2
                    className={
                      "text180 max-md:hidden flex items-center justify-between text-center w-full uppercase"
                    }
                  >
                    {<c.default>{"Explore all"}</c.default>}
                    {
                      <span
                        ref={o}
                        className={
                          "size-[8vw]  inline-block will-change-transform"
                        }
                      >
                        {<a.Chakra className={"size-full max-md:hidden"} />}
                      </span>
                    }
                    {<c.default from={"end"}>{"Promptedsite"}</c.default>}
                  </h2>
                }
                {
                  <h2
                    className={
                      "text180 hidden max-md:text-center w-full max-md:block uppercase"
                    }
                  >
                    {"Explore all "}
                    {<br />}
                    {" Promptedsite"}
                  </h2>
                }
                {
                  <div
                    className={
                      "flex max-md:flex-col items-center max-md:gap-[4vw] gap-[1vw] w-full justify-between"
                    }
                  >
                    {f.map((e, r) => (
                      <s.default
                        flavour={e}
                        index={r}
                        isDarkSection={!0}
                        key={r}
                      />
                    ))}
                  </div>
                }
                {
                  <u.default
                    speed={-0.08}
                    rotate={20}
                    className={
                      "absolute max-md:size-[52vw] text-light-beige size-[16vw] bottom-[4vw] max-md:bottom-[2vw] max-md:right-[-4vw] z-100 right-[5vw]"
                    }
                  >
                    {<a.CoconutPiece3 className={"size-full"} />}
                  </u.default>
                }
              </div>
            }
            {
              <div
                className={
                  "absolute translate-y-[7.5vw] bottom-0 left-0 w-full h-fit"
                }
              >
                {<l.default />}
              </div>
            }
          </section>
        )
      );
    },
  ]);
};
