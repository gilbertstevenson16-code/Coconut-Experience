// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    n = e.i(89970),
    o = e.i(33809),
    i = e.i(65747);
  function a({
    value: e = "500",
    unit: r = "MG",
    label: n = "Of Potassium",
    variant: o = "light",
    className: i = "",
  }) {
    let l = "dark" === o;
    return (
      <div
        className={`rounded-full border-4 ${l ? "border-beige" : "border-foreground"} ${l ? "bg-light-brown" : "bg-beige"} ${l ? "text-beige" : "text-foreground"} aspect-square flex flex-col size-[15vw] max-md:size-[30vw] max-md:border-2 items-center justify-center text-center p-[1vw] max-md:p-2 select-none ${i}`}
      >
        {
          <div
            className={
              "flex font-semibold items-baseline justify-center leading-none font-khand tracking-tighter"
            }
          >
            {<span className={"text-[4.2vw] max-md:text-[9vw]"}>{e}</span>}
            {r && (
              <span className={"text-[2.3rem] max-md:text-[4.5vw] uppercase"}>
                {r}
              </span>
            )}
          </div>
        }
        {n && (
          <p
            className={
              "text36 max-md:text-[3.2vw] font-inter font-medium leading-tight mt-[-.5vw] max-md:mt-0"
            }
          >
            {n}
          </p>
        )}
      </div>
    );
  }
  var l = e.i(1248),
    s = e.i(94766),
    u = e.i(59245);
  (n.default.registerPlugin(o.default),
    e.s(
      [
        "default",
        0,
        function () {
          let e = (0, r.useRef)(null),
            o = (0, r.useRef)(null);
          return (
            (0, i.useGSAP)(
              () => {
                let t = n.default.utils.toArray(".curved-scroll-box"),
                  r = [0.25, 0.3, 0.27, 0.38],
                  i = [-45, 40, -50, 48],
                  a = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches,
                  l = n.default.timeline({
                    scrollTrigger: {
                      trigger: e.current,
                      start: "top top",
                      end: "bottom bottom",
                      scrub: !0,
                    },
                  });
                t.forEach((e, t) => {
                  let s = t % 2 == 0,
                    u = 0.3 * t,
                    c = i[t % i.length] || 15;
                  a
                    ? l.fromTo(
                        e,
                        {
                          y: "50vh",
                          x: 0,
                          rotate: 0,
                        },
                        {
                          y: "-50vh",
                          ease: "none",
                          duration: 1,
                        },
                        u,
                      )
                    : l.fromTo(
                        e,
                        {
                          y: "70vh",
                          x: 0,
                          rotate: 0,
                        },
                        {
                          y: "-70vh",
                          ease: "none",
                          duration: 1,
                          onUpdate: function () {
                            let i = this.progress() * Math.PI,
                              a =
                                Math.sin(i) *
                                ((e, t) => {
                                  let n = r[t % r.length] || 0.25;
                                  if (
                                    !window.matchMedia("(max-width: 1024px)")
                                      .matches
                                  )
                                    return window.innerWidth * n;
                                  let i =
                                      o.current?.offsetWidth ||
                                      window.innerWidth,
                                    a = Math.max(
                                      0,
                                      i / 2 - e.offsetWidth / 2 - 0.02 * i,
                                    );
                                  return Math.min(i * n, a);
                                })(e, t),
                              l = Math.sin(i) * c;
                            n.default.set(e, {
                              x: s ? -a : a,
                              rotate: l,
                            });
                          },
                        },
                        u,
                      );
                });
              },
              {
                scope: e,
              },
            ),
            (
              <section
                ref={e}
                id={"benefits"}
                className={"h-[320vh] bg-background relative paddx w-full"}
              >
                {
                  <h2
                    className={
                      "text180 pt-[6vw] max-md:pt-[18vh] uppercase w-full leading-[85%] relative"
                    }
                  >
                    {
                      <span
                        className={
                          "grid w-full grid-cols-[1fr_auto_1fr] items-center max-md:flex max-md:flex-col max-md:items-center max-md:w-full"
                        }
                      >
                        {
                          <u.AnimatedHeading
                            as={"span"}
                            className={
                              "whitespace-nowrap text-left max-md:block max-md:w-full max-md:text-center"
                            }
                          >
                            {"Promptedsite"}
                          </u.AnimatedHeading>
                        }
                        {
                          <s.default
                            className={
                              "heading-waves w-[28vw] p-[1vw] translate-y-[-1.5vw] translate-x-[-1.5vw] text-beige max-md:hidden"
                            }
                            scrub={!1}
                            start={"top 80%"}
                            stagger={"sequential"}
                          >
                            {<l.Waves className={"w-full"} />}
                          </s.default>
                        }
                        {
                          <u.AnimatedHeading
                            as={"span"}
                            className={
                              "whitespace-nowrap text-right max-md:block max-md:w-full max-md:text-center"
                            }
                          >
                            {"Source of"}
                          </u.AnimatedHeading>
                        }
                      </span>
                    }
                    {
                      <span
                        className={
                          "block text-right mr-[14vw] mt-[-3.5vw] whitespace-nowrap max-md:text-center max-md:mr-0 max-md:mt-0 max-md:w-full"
                        }
                      >
                        {
                          <u.AnimatedHeading
                            as={"span"}
                            className={
                              "inline-block max-md:block max-md:w-full"
                            }
                          >
                            {"every Sip."}
                          </u.AnimatedHeading>
                        }
                      </span>
                    }
                  </h2>
                }
                {
                  <u.AnimatedParagraph
                    delay={0.25}
                    className={
                      "text36 max-md:text-center font-medium font-sans capitalize w-[25vw] absolute left-[3.5vw] top-[24vw] max-md:static max-md:w-[85%] max-md:mx-auto max-md:mt-6"
                    }
                  >
                    {
                      "For centuries, coconuts have carried their own perfectly balanced source of refreshment."
                    }
                  </u.AnimatedParagraph>
                }
                {
                  <div
                    ref={o}
                    className={
                      "h-screen w-full sticky mt-[10vw] max-md:mt-[12vh] py-[6vw] top-0 flex items-center justify-center pointer-events-none overflow-hidden"
                    }
                  >
                    {(0, t.jsx)(a, {
                      className: "curved-scroll-box absolute",
                      variant: "light",
                      value: "500",
                      unit: "MG",
                      label: "Of Potassium",
                    })}
                    {(0, t.jsx)(a, {
                      className: "curved-scroll-box absolute",
                      variant: "dark",
                      value: "100%",
                      unit: "",
                      label: "Natural Hydration",
                    })}
                    {(0, t.jsx)(a, {
                      className: "curved-scroll-box absolute",
                      variant: "dark",
                      value: "0",
                      unit: "GM",
                      label: "Of Sugar",
                    })}
                    {(0, t.jsx)(a, {
                      className: "curved-scroll-box absolute",
                      variant: "light",
                      value: "45",
                      unit: "KCL",
                      label: "Per 200Ml",
                    })}
                  </div>
                }
              </section>
            )
          );
        },
      ],
      40319,
    ));
};
