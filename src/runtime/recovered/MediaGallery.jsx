import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(56348),
    o = e.i(1248),
    i = e.i(57688),
    a = e.i(89970),
    l = e.i(94867),
    s = e.i(95507),
    u = e.i(59245),
    c = e.i(69);
  (a.default.registerPlugin(l.default),
    e.s([
      "default",
      0,
      function () {
        let e = (0, r.useRef)(null);
        return (
          (0, r.useLayoutEffect)(() => {
            if (!e.current) return;
            let t = e.current.querySelectorAll(".media-item"),
              r = [];
            return (
              t.forEach((e) => {
                let t = 0,
                  n = 0,
                  o = 0,
                  i = 0,
                  l = parseFloat(e.dataset.rotation) || 0;
                a.default.set(e, {
                  rotation: l,
                  x: 0,
                  y: 0,
                });
                let s = (e) => {
                    ((o = e.clientX - t),
                      (i = e.clientY - n),
                      (t = e.clientX),
                      (n = e.clientY));
                  },
                  u = (r) => {
                    (a.default.killTweensOf(e),
                      (o = 0),
                      (i = 0),
                      (t = r.clientX),
                      (n = r.clientY));
                  },
                  c = () => {
                    a.default.to(e, {
                      inertia: {
                        x: {
                          velocity: 30 * o,
                          end: 0,
                        },
                        y: {
                          velocity: 30 * i,
                          end: 0,
                        },
                        rotation: {
                          velocity: 2 * o,
                          end: l,
                        },
                        resistance: 150,
                      },
                      force3D: !0,
                    });
                  };
                (e.addEventListener("mousemove", s),
                  e.addEventListener("mouseenter", u),
                  e.addEventListener("mouseleave", c),
                  r.push(() => {
                    (a.default.killTweensOf(e),
                      e.removeEventListener("mousemove", s),
                      e.removeEventListener("mouseenter", u),
                      e.removeEventListener("mouseleave", c));
                  }));
              }),
              () => {
                r.forEach((e) => e());
              }
            );
          }, []),
          (
            <section
              id={"health-benifts"}
              className={
                "h-fit relative z-1 bg-background  overflow-x-clip paddx max-md:px-0! pt-[20vw] py-[10vw] w-full"
              }
            >
              {
                <u.AnimatedHeading
                  as={"h2"}
                  className={
                    "text180 px-[10vw] max-md:w-full max-md:px-0! uppercase text-center"
                  }
                >
                  {"you deserve Promptedsite for your health."}
                </u.AnimatedHeading>
              }
              {
                <div
                  className={
                    "flex h-screen  items-start max-md:flex-col-reverse max-md:h-auto max-md:gap-[8vw] max-md:overflow-x-hidden! max-md:z-20! relative justify-between"
                  }
                >
                  {
                    <div
                      className={
                        "relative z-10 flex flex-col w-[38vw]  items-start max-md:items-center max-md:w-full max-md:mx-auto space-y-[2vw] pt-[10vw] max-md:pt-0 max-md:space-y-6"
                      }
                    >
                      {
                        <u.AnimatedParagraph
                          delay={0.15}
                          className={
                            "text36 max-md:text-center  max-md:w-[90%] font-medium"
                          }
                        >
                          {
                            "We want to make healthy, science-backed nutrition simple and accessible so you can feel better, perform better, and enjoy life every single day."
                          }
                        </u.AnimatedParagraph>
                      }
                      {
                        <c.TransitionLink href={"/flavours"}>
                          {<n.default title={"Get Your Drink"} />}
                        </c.TransitionLink>
                      }
                    </div>
                  }
                  {
                    <div
                      ref={e}
                      className={
                        "w-full max-md:mt-[10vw] h-full relative max-md:flex max-md:h-[58vw] max-md:overflow-x-clip max-md:flex-row-reverse max-md:items-center max-md:justify-center"
                      }
                    >
                      {
                        <div
                          data-rotation={"13"}
                          className={
                            "media-item h-[42vw] p-[1vw] w-[30vw] absolute right-[-8vw] top-0 bg-light-beige max-md:relative max-md:right-auto max-md:top-auto max-md:mx-[-5vw] max-md:h-[52vw] max-md:w-[38vw] max-md:p-[2vw]"
                          }
                        >
                          {
                            <div
                              className={"h-full w-full relative bg-foreground"}
                            >
                              {
                                <i.default
                                  alt={"Fresh harvested coconut held in hand"}
                                  src={asset("/img/coconut-holding.webp")}
                                  fill={!0}
                                  sizes={"(max-width: 1024px) 38vw, 30vw"}
                                  className={"h-full w-full object-cover"}
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                      {
                        <div
                          data-rotation={"0"}
                          className={
                            "media-item h-[42vw] p-[1vw] w-[30vw] absolute right-[8vw] z-2 bottom-[4vw] bg-light-beige max-md:relative max-md:right-auto max-md:bottom-auto max-md:mx-[-5vw] max-md:h-[52vw] max-md:w-[38vw] max-md:p-[2vw]"
                          }
                        >
                          {
                            <div
                              className={"h-full w-full relative bg-foreground"}
                            >
                              {
                                <i.default
                                  alt={
                                    "Organic fresh coconuts bunched on palm grove floor"
                                  }
                                  src={asset("/img/bunch-of-coconut.webp")}
                                  fill={!0}
                                  sizes={"(max-width: 1024px) 38vw, 30vw"}
                                  className={"h-full w-full object-cover"}
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                      {
                        <div
                          data-rotation={"-9"}
                          className={
                            "media-item h-[42vw] p-[1vw] w-[30vw] absolute right-[30vw] z-3 top-[4vw] bg-light-beige max-md:relative max-md:right-auto max-md:top-auto max-md:mx-[-5vw] max-md:h-[52vw] max-md:w-[38vw] max-md:p-[2vw]"
                          }
                        >
                          {
                            <div
                              className={"h-full w-full relative bg-foreground"}
                            >
                              {
                                <i.default
                                  alt={
                                    "Clean ripe coconut showing natural golden husk texture"
                                  }
                                  src={asset("/img/good-coconut.webp")}
                                  fill={!0}
                                  sizes={"(max-width: 1024px) 38vw, 30vw"}
                                  className={"h-full w-full object-cover"}
                                />
                              }
                            </div>
                          }
                        </div>
                      }
                    </div>
                  }
                  {
                    <s.default
                      speed={-0.08}
                      rotate={20}
                      className={
                        "pointer-events-none absolute max-md:size-[35vw] rotate-80 text-light-beige bottom-[10vw] left-[5vw] z-0 size-[20vw]"
                      }
                    >
                      {
                        <o.CoconutPiece3
                          opacity={"1"}
                          className={"size-full"}
                        />
                      }
                    </s.default>
                  }
                </div>
              }
            </section>
          )
        );
      },
    ]));
};
