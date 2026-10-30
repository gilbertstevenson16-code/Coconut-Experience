import { asset } from "../../config/media";
// Recovered from the owner-authorized reference; see docs/provenance.md.
export default (e) => {
  "use strict";

  var t = e.i(43476);
  e.i(71645);
  var r = e.i(57688),
    i = e.i(59245),
    a = e.i(95507),
    n = e.i(1248);
  e.s([
    "default",
    0,
    function () {
      return (
        <section
          id={"about-palmo"}
          className={
            "relative z-10 w-full min-h-screen bg-background flex flex-row max-md:flex-col overflow-hidden"
          }
        >
          {
            <div
              className={
                "relative z-10 w-1/2 max-md:w-full flex flex-col justify-between paddx py-[6vw] pt-[8vw] max-md:pt-[24vw] pb-[4vw] max-md:pb-[10vw] min-h-screen max-md:min-h-0 bg-background"
              }
            >
              {
                <div
                  className={
                    "my-[2vw] max-md:my-[4vw] absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 max-md:static max-md:translate-x-0 max-md:translate-y-0 z-20 self-start cursor-pointer"
                  }
                >
                  {
                    <a.default
                      speed={0}
                      rotate={30}
                      className={"relative size-[9vw] max-md:size-[22vw]"}
                    >
                      {<n.Smily opacity={1} />}
                    </a.default>
                  }
                </div>
              }
              {
                <div
                  className={"flex flex-col gap-[2vw] max-md:gap-[5vw] mt-auto"}
                >
                  {
                    <div className={"w-[80%] max-md:max-w-full"}>
                      {
                        <i.AnimatedParagraph
                          delay={0.05}
                          className={
                            "text36 text-foreground font-sans font-medium"
                          }
                        >
                          {
                            "We Believe The Best Drinks Don't Need A Long List Of Ingredients. That's Why Every Bottle Starts With One Simple Idea: Keep It Real."
                          }
                        </i.AnimatedParagraph>
                      }
                    </div>
                  }
                  {
                    <i.AnimatedHeading
                      as={"h1"}
                      delay={0.2}
                      className={"text150 text-foreground uppercase"}
                    >
                      {"PROMPTEDSITE"}
                      {<br />}
                      {"IN EVERY SIP."}
                    </i.AnimatedHeading>
                  }
                </div>
              }
            </div>
          }
          {
            <div
              className={
                "relative w-1/2 max-md:w-full h-full max-md:h-[60vh] min-h-screen max-md:min-h-0 overflow-hidden"
              }
            >
              {
                <r.default
                  src={asset("/img/about-hero-palms.webp")}
                  alt={"Tropical palm trees top-down canopy view"}
                  fill={!0}
                  sizes={"(max-width: 1024px) 100vw, 50vw"}
                  className={"object-cover object-center w-full h-full"}
                  priority={!0}
                />
              }
            </div>
          }
        </section>
      );
    },
  ]);
};
