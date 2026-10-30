import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476),
    r = e.i(71645),
    i = e.i(57688),
    a = e.i(89970),
    n = e.i(33809),
    s = e.i(94867),
    l = e.i(65747),
    o = e.i(84977),
    c = e.i(1248),
    d = e.i(95507),
    u = e.i(59245);
  a.default.registerPlugin(l.useGSAP, n.default, s.default);
  let m = [
      {
        num: "01",
        kicker: "The Harvest",
        title: "It starts in the grove.",
        body: "Hands in the trees, not a factory floor. Every bottle begins with a farmer and a palm.",
        note: "picked at peak",
        src: asset("/img/story-farmer.webp"),
        alt: "Coconut farmer harvesting fresh coconuts",
      },
      {
        num: "02",
        kicker: "The Cluster",
        title: "Gold before it is water.",
        body: "Still on the frond, still catching light. This is the fruit we wait for: nothing added, nothing rushed.",
        note: "left on the palm",
        src: asset("/img/story-cluster.webp"),
        alt: "Golden coconut cluster on palm fronds",
      },
      {
        num: "03",
        kicker: "The Canopy",
        title: "Grown under an open sky.",
        body: "Tall palms, heat, and the kind of light you cannot bottle. The grove does the work. We just show up for it.",
        note: "from the trees",
        src: asset("/img/story-sky.webp"),
        alt: "Tall palm trees reaching into bright sunny sky",
      },
      {
        num: "04",
        kicker: "The Craft",
        title: "Then we keep it honest.",
        body: "Ripe, cracked, canned. No long list, no extra fuss - the same idea we started with, sealed in a bottle.",
        note: "keep it real",
        src: asset("/img/story-table.webp"),
        alt: "Ripe brown coconuts on wooden surface",
      },
    ],
    f = [
      "Made With High-Quality Coconut Water For A Crisp, Clean Taste.",
      "No Unnecessary Fillers Or Artificial Complexity—Just Thoughtfully Selected Ingredients.",
      "Perfect After Workouts, During Work, While Traveling, Or Anytime You Need A Refreshing Break.",
      "Every Bottle Is Produced With Quality, Consistency, And Freshness At The Center Of Everything We Do.",
    ];
  e.s([
    "default",
    0,
    function () {
      let e = (0, r.useRef)(null),
        n = (0, r.useRef)(null),
        s = (0, r.useRef)(null),
        h = (0, r.useRef)(null),
        p = (0, r.useRef)([]),
        v = (0, r.useRef)(null);
      return (
        (0, r.useLayoutEffect)(() => {
          if (!v.current) return;
          let e = v.current.querySelectorAll(".media-item"),
            t = [];
          return (
            e.forEach((e) => {
              let r = 0,
                i = 0,
                n = 0,
                s = 0,
                l = parseFloat(e.dataset.rotation) || 0,
                o = window.matchMedia("(max-width: 1024px)").matches ? l : -l;
              a.default.set(e, {
                rotation: o,
                x: 0,
                y: 0,
              });
              let c = (e) => {
                  ((n = e.clientX - r),
                    (s = e.clientY - i),
                    (r = e.clientX),
                    (i = e.clientY));
                },
                d = (t) => {
                  (a.default.killTweensOf(e),
                    (n = 0),
                    (s = 0),
                    (r = t.clientX),
                    (i = t.clientY));
                },
                u = () => {
                  a.default.to(e, {
                    inertia: {
                      x: {
                        velocity: 30 * n,
                        end: 0,
                      },
                      y: {
                        velocity: 30 * s,
                        end: 0,
                      },
                      rotation: {
                        velocity: 2 * n,
                        end: o,
                      },
                      resistance: 150,
                    },
                    force3D: !0,
                  });
                };
              (e.addEventListener("mousemove", c),
                e.addEventListener("mouseenter", d),
                e.addEventListener("mouseleave", u),
                t.push(() => {
                  (a.default.killTweensOf(e),
                    e.removeEventListener("mousemove", c),
                    e.removeEventListener("mouseenter", d),
                    e.removeEventListener("mouseleave", u));
                }));
            }),
            () => {
              t.forEach((e) => e());
            }
          );
        }, []),
        (0, l.useGSAP)(
          () => {
            let t = e.current,
              r = n.current,
              i = s.current;
            t &&
              r &&
              i &&
              !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
              a.default.to(i, {
                x: () => -Math.max(0, i.scrollWidth - r.offsetWidth),
                ease: "none",
                scrollTrigger: {
                  trigger: t,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: !0,
                  invalidateOnRefresh: !0,
                  onUpdate: (e) => {
                    let t = m.length,
                      r = Math.min(t - 1, Math.floor(e.progress * t + 0.001));
                    (h.current &&
                      (h.current.textContent = String(r + 1).padStart(2, "0")),
                      p.current.forEach((e, t) => {
                        e &&
                          (e.classList.toggle("opacity-100", t === r),
                          e.classList.toggle("opacity-30", t !== r));
                      }));
                  },
                },
              });
          },
          {
            scope: e,
          },
        ),
        (
          <section
            id={"story"}
            className={
              "relative overflow-x-clip z-10 w-full bg-background text-foreground"
            }
          >
            {
              <div
                ref={e}
                className={"relative h-[400vh] w-full motion-reduce:h-auto"}
              >
                {
                  <div
                    className={
                      "sticky top-0 flex h-dvh w-full flex-col overflow-visible motion-reduce:relative motion-reduce:h-auto"
                    }
                  >
                    {
                      <div
                        className={
                          "relative z-20 shrink-0 flex flex-col items-center paddx pt-[7vw] max-md:pt-[22vw] pb-[2vw] max-md:pb-[5vw]"
                        }
                      >
                        {
                          <u.AnimatedHeading
                            as={"h2"}
                            maskPad={"0.4em"}
                            className={
                              "text150 uppercase text-center text-foreground leading-[0.95]"
                            }
                          >
                            {"PROMPTEDSITE STORY"}
                          </u.AnimatedHeading>
                        }
                        {
                          <p
                            className={
                              "font-patrick-hand text32 uppercase tabular-nums mt-[1.6vw] max-md:mt-[4vw]"
                            }
                          >
                            {<span ref={h}>{"01"}</span>}
                            {<span className={"opacity-40"}>{" / 04"}</span>}
                          </p>
                        }
                        {
                          <div
                            className={
                              "mt-[0.8vw] max-md:mt-[2.5vw] flex gap-[0.6vw] max-md:gap-[1.5vw]"
                            }
                          >
                            {m.map((e, r) => (
                              <span
                                ref={(e) => {
                                  p.current[r] = e;
                                }}
                                className={`h-[0.35vw] max-md:h-[1vw] w-[2.2vw] max-md:w-[6vw] rounded-full bg-foreground ${0 === r ? "opacity-100" : "opacity-30"}`}
                                key={e.num}
                              />
                            ))}
                          </div>
                        }
                      </div>
                    }
                    {
                      <div
                        ref={n}
                        className={
                          "relative z-10 min-h-0 flex-1 overflow-hidden"
                        }
                      >
                        {
                          <div
                            ref={s}
                            className={
                              "flex h-full w-max items-stretch gap-[2.5vw] max-md:gap-[5vw] pl-[20vw] pr-[20vw] max-md:pl-[6vw] max-md:pr-[6vw] pt-[0.6vw] pb-[5vw] max-md:pb-[8vw] will-change-transform motion-reduce:flex-col motion-reduce:h-auto motion-reduce:w-full motion-reduce:pl-0 motion-reduce:pr-0 motion-reduce:will-change-auto"
                            }
                          >
                            {m.map((e) => (
                              <article
                                className={
                                  "relative flex h-full max-sm:h-fit! max-sm:min-h-[65vh] w-[60vw] max-md:w-[88vw] shrink-0 items-stretch py-[0.4vw] motion-reduce:h-auto motion-reduce:w-full"
                                }
                                key={e.num}
                              >
                                {
                                  <div
                                    className={
                                      "flex h-full w-full overflow-hidden rounded-[0.8vw] max-md:rounded-[2.5vw] border-4 border-foreground/60 bg-beige text-foreground box-border max-md:flex-col max-md:h-auto"
                                    }
                                  >
                                    {
                                      <div
                                        className={
                                          "relative w-[40%] max-md:w-full h-full max-md:h-[48vw] max-sm:h-[75vw] shrink-0"
                                        }
                                      >
                                        {
                                          <i.default
                                            src={e.src}
                                            alt={e.alt}
                                            fill={!0}
                                            sizes={
                                              "(max-width: 1024px) 88vw, 24vw"
                                            }
                                            className={"object-cover"}
                                          />
                                        }
                                      </div>
                                    }
                                    {
                                      <div
                                        className={
                                          "relative z-10 flex flex-1 flex-col justify-center px-[3vw] py-[2.5vw] max-md:px-[7vw] max-md:py-[6vw]"
                                        }
                                      >
                                        {
                                          <p
                                            className={
                                              "font-patrick-hand text32 uppercase opacity-70"
                                            }
                                          >
                                            {e.num}
                                            {" / "}
                                            {e.kicker}
                                          </p>
                                        }
                                        {
                                          <h3
                                            className={
                                              "uppercase mt-[0.8vw] max-md:mt-[2vw] font-khand font-semibold leading-[0.9] tracking-[-0.05em] w-[70%] text-[4.4vw] max-md:w-full max-md:text-[2.2rem]"
                                            }
                                          >
                                            {e.title}
                                          </h3>
                                        }
                                        {
                                          <p
                                            className={
                                              "text36 font-medium w-[90%] max-md:w-full mt-[1.2vw] max-md:mt-[3vw]"
                                            }
                                          >
                                            {e.body}
                                          </p>
                                        }
                                        {
                                          <p
                                            className={
                                              "font-patrick-hand text32 mt-[1.2vw] max-md:hidden opacity-80"
                                            }
                                          >
                                            {e.note}
                                          </p>
                                        }
                                      </div>
                                    }
                                  </div>
                                }
                              </article>
                            ))}
                          </div>
                        }
                      </div>
                    }
                    {
                      <d.default
                        speed={-0.08}
                        rotate={20}
                        className={
                          "absolute right-[-2vw] bottom-[6vw] max-md:bottom-[10vw] z-0 w-[22vw] max-md:w-[42vw] opacity-40 pointer-events-none"
                        }
                      >
                        {
                          <c.CoconutPiece3
                            className={"w-full text-foreground"}
                          />
                        }
                      </d.default>
                    }
                  </div>
                }
              </div>
            }
            {
              <div
                className={
                  "w-full paddx mt-[10vw] max-md:mt-[16vw] pb-[8vw] max-md:pb-[16vw] flex flex-row max-md:flex-col gap-[4vw] max-md:gap-[8vw] items-center"
                }
              >
                {
                  <div
                    ref={v}
                    className={
                      "relative w-1/2 max-md:w-full h-[38vw] max-md:mt-[4vw] max-md:h-[58vw] max-md:flex max-md:flex-row-reverse max-md:items-center max-md:justify-center"
                    }
                  >
                    {
                      <d.default
                        speed={-0.08}
                        rotate={20}
                        className={
                          "absolute left-[30vw] top-[8vw] z-0 size-[16vw] max-md:size-[32vw] max-md:left-[28%] max-md:top-[12vw] opacity-40 pointer-events-none text-foreground"
                        }
                      >
                        {<c.CoconutPiece1 className={"size-full"} />}
                      </d.default>
                    }
                    {
                      <div
                        data-rotation={"13"}
                        className={
                          "media-item absolute left-0 top-0 z-10 h-[32vw] w-[23vw] p-[0.8vw] bg-light-beige max-md:relative max-md:left-auto max-md:top-auto max-md:mx-[-5vw] max-md:h-[52vw] max-md:w-[38vw] max-md:p-[2vw]"
                        }
                      >
                        {
                          <div
                            className={"relative h-full w-full bg-foreground"}
                          >
                            {
                              <i.default
                                src={asset("/img/story-hanging.webp")}
                                alt={
                                  "Coconut hanging on palm tree with beach view"
                                }
                                fill={!0}
                                sizes={"(max-width: 1024px) 38vw, 23vw"}
                                className={"object-cover"}
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
                          "media-item absolute left-[12vw] bottom-0 z-20 h-[32vw] w-[23vw] p-[0.8vw] bg-light-beige max-md:relative max-md:left-auto max-md:bottom-auto max-md:mx-[-5vw] max-md:h-[52vw] max-md:w-[38vw] max-md:p-[2vw]"
                        }
                      >
                        {
                          <div
                            className={"relative h-full w-full bg-foreground"}
                          >
                            {
                              <i.default
                                src={asset("/img/story-ground.webp")}
                                alt={
                                  "Coconut with husk on sandy tropical beach"
                                }
                                fill={!0}
                                sizes={"(max-width: 1024px) 38vw, 23vw"}
                                className={"object-cover"}
                              />
                            }
                          </div>
                        }
                      </div>
                    }
                  </div>
                }
                {
                  <div
                    className={
                      "w-1/2 max-md:w-full flex flex-col justify-center"
                    }
                  >
                    {
                      <u.AnimatedHeading
                        as={"h2"}
                        className={
                          "text150 uppercase text-foreground leading-[0.85] mb-[2vw] max-md:mb-[6vw]"
                        }
                      >
                        {"WHAT MAKES PROMPTEDSITE"}
                        {<br />}
                        {"DIFFERENT ?"}
                      </u.AnimatedHeading>
                    }
                    {
                      <ul
                        className={"flex flex-col gap-[1.5vw] max-md:gap-[4vw]"}
                      >
                        {f.map((e, r) => (
                          <li
                            className={
                              "flex items-start gap-[1vw] max-md:gap-[3vw]"
                            }
                            key={e}
                          >
                            {
                              <span
                                className={
                                  "size-[0.8vw] max-md:size-[2.5vw] rounded-full bg-foreground mt-[0.5vw] max-md:mt-[1.5vw] shrink-0"
                                }
                              />
                            }
                            {
                              <u.AnimatedParagraph
                                delay={0.1 + 0.1 * r}
                                className={
                                  "text32 text-foreground font-sans font-medium"
                                }
                              >
                                {e}
                              </u.AnimatedParagraph>
                            }
                          </li>
                        ))}
                      </ul>
                    }
                  </div>
                }
              </div>
            }
            {
              <div
                className={
                  "absolute translate-y-[7.5vw] bottom-0 left-0 w-full h-fit pointer-events-none z-10"
                }
              >
                {<o.default bgColor={"bg-background"} />}
              </div>
            }
          </section>
        )
      );
    },
  ]);
};
