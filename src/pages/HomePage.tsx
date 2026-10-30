import { component } from "../runtime/registry";
const SoundControl = component(28125, "default");
const CoconutScene = component(42441, "default");
const AnimatedTextAnimatedHeading = component(59245, "AnimatedHeading");
const DrawIllustration = component(94766, "default");
const AnimatedText = component(59245, "default");
const PalmTree = component(14380, "default");
const AnimatedTextAnimatedParagraph = component(59245, "AnimatedParagraph");
const PageTransitionTransitionLink = component(69, "TransitionLink");
const ExploreButton = component(56348, "default");
const Nutrition = component(40319, "default");
const FlavourShowcase = component(89337, "default");
const Parallax = component(95507, "default");
const WordCarousel = component(66802, "default");
const OrganicSection = component(7255, "default");
const MediaGallery = component(57811, "default");
const Benefits = component(82432, "default");
const Contact = component(30060, "default");
const Footer = component(95241, "default");
export default function HomePage() {
  return (
    <>
      <SoundControl />
      <CoconutScene>
        <section
          id={"Hero"}
          className={
            "h-screen paddx bg-background w-full overflow-x-hidden py-[6vw] relative max-md:flex max-md:flex-col max-md:items-center max-md:justify-between max-md:text-center max-md:py-[12vh]"
          }
        >
          <div
            className={
              "contents max-md:z-10 max-md:relative max-md:block max-md:w-full"
            }
          >
            <AnimatedTextAnimatedHeading
              delay={0.25}
              as={"h1"}
              className={
                "text-foreground text180 w-[50vw] mt-[2vw] uppercase max-md:w-full max-md:mt-0 max-md:text-center"
              }
            >
              {"Promptedsite "}
              <br />
              {"in every sip."}
            </AnimatedTextAnimatedHeading>
            <div
              className={
                "absolute top-[34vw] left-[32vw] max-md:static max-md:top-auto max-md:left-auto max-md:mt-6 max-md:w-full max-md:flex max-md:justify-center"
              }
            >
              <DrawIllustration
                trigger={"loader"}
                delay={0.9}
                duration={1}
                stagger={"sequential"}
              >
                <div className={"size-[8vw] -rotate-5 max-md:hidden"}>
                  <svg
                    className={"h-full w-full"}
                    width={"111"}
                    height={"85"}
                    viewBox={"0 0 111 85"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M109.146 2.1256C72.3833 -1.56053 1.13751 9.29508 10.2538 82.2066M20.6989 72.4617L10.2538 82.2066L1.49932 74.1765"
                      }
                      stroke={"currentColor"}
                      strokeWidth={"3"}
                      strokeLinecap={"round"}
                    />
                  </svg>
                </div>
              </DrawIllustration>
              <AnimatedText
                as={"ul"}
                variant={"paragraph"}
                delay={1.5}
                stagger={0.12}
                className={
                  "text32 leading-relaxed! capitalize text-black list-disc font-patrick-hand mt-[1vw] translate-x-[-2vw] max-md:mt-0 max-md:translate-x-0 max-md:flex max-md:list-none max-md:flex-wrap max-md:justify-center max-md:gap-x-6 max-md:pl-0 max-md:text-center max-md:[&>li]:flex max-md:[&>li]:items-center max-md:[&>li]:gap-2 max-md:[&>li]:before:size-1.5 max-md:[&>li]:before:shrink-0 max-md:[&>li]:before:rounded-full max-md:[&>li]:before:bg-current max-md:[&>li]:before:content-['']"
                }
              >
                <li>{"Rich in electrolytes"}</li>
                <li className={"-mt-[.5vw]"}>{"No added sugar"}</li>
              </AnimatedText>
            </div>
          </div>
          <div
            className={
              "size-[30vw] opacity-76 -rotate-45 absolute top-[4vw] right-[-4vw] max-md:size-[70vw] max-md:top-[8vh] max-md:right-[-24vw] max-md:opacity-50"
            }
          >
            <PalmTree interactive={true} />
          </div>
          <div
            className={
              "absolute bottom-[6vw] space-y-[1vw] right-[3vw] max-md:static max-md:bottom-auto max-md:right-auto max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:space-y-5"
            }
          >
            <AnimatedTextAnimatedParagraph
              delay={0.5}
              className={
                "text32 w-[25vw] font-medium max-md:w-full max-md:text-center"
              }
            >
              {
                "Quench Your Thirst With Promptedsite Coconut Bliss, Packed With Natural Electrolytes And Zero Added Sugar, For A Cool Sip Every Time."
              }
            </AnimatedTextAnimatedParagraph>
            <PageTransitionTransitionLink href={"/flavours"}>
              <ExploreButton
                title={"Discover Flavors"}
                entry={true}
                entryDelay={1.9}
              />
            </PageTransitionTransitionLink>
          </div>
        </section>
        <Nutrition />
        <FlavourShowcase />
        <section
          id={"section-break"}
          data-can-spin-runway={true}
          className={
            "h-screen max-md:overflow-x-clip max-md:h-[50vh] bg-background flex items-center justify-center w-full"
          }
        >
          <AnimatedText
            as={"h2"}
            className={"text180 pb-[6vw] max-md:pb-0! uppercase"}
          >
            {"KEEP SIPPING PROMPTEDSITE.."}
          </AnimatedText>
        </section>
        <section
          id={"introduction"}
          className={"relative overflow-x-hidden w-full z-10 mt-[-10vw] "}
        >
          <div
            className={
              "h-fit w-full overflow-hidden flex items-center justify-center relative z-9 "
            }
          >
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
            <div
              className={
                "size-[calc(100vw/5.5)] rounded-full bg-foreground shrink-0"
              }
            />
          </div>
          <div
            data-nav-dark={true}
            className={
              "text-background bg-foreground paddx h-[calc(100vh+10vw)] flex items-center justify-center relative z-10 mt-[-10vw] w-full"
            }
          >
            <Parallax speed={-0.05} rotate={0} className={"relative z-10"}>
              <h2 className={"text150 text-center w-[85vw] uppercase"}>
                {
                  "Promptedsite coconut water. Naturally hydrating, refreshingly "
                }
                <WordCarousel
                  words={[
                    { text: "pure", className: "bg-beige text-foreground" },
                    { text: "Fresh", className: "bg-gold text-background" },
                    {
                      text: "Clean",
                      className: "bg-light-beige text-light-brown",
                    },
                  ]}
                />
                {", from nature's source."}
              </h2>
            </Parallax>
            <Parallax
              axis={"y"}
              speed={-0.07}
              rotate={30}
              className={
                "absolute z-0 pointer-events-none max-md:size-[30vw] size-[10vw] top-[10vw] max-md:top-[40vw] left-[5vw]"
              }
            >
              <div className={"size-full"}>
                <svg
                  className={"h-full w-full object-contain"}
                  width={"164"}
                  height={"164"}
                  viewBox={"0 0 164 164"}
                  fill={"none"}
                  xmlns={"http://www.w3.org/2000/svg"}
                >
                  <g clipPath={"url(#clip0_5211_1427)"}>
                    <path
                      d={
                        "M96.8505 147.811C133.443 139.363 156.259 102.85 147.811 66.2576C139.363 29.6647 102.85 6.84896 66.2572 15.2971C29.6643 23.7452 6.84855 60.2581 15.2967 96.8509C23.7448 133.444 60.2577 156.26 96.8505 147.811Z"
                      }
                      fill={"#FFE386"}
                      fillOpacity={".76"}
                    />
                    <path
                      d={
                        "M134.41 69.3516C127.671 40.1596 98.5423 21.9582 69.3503 28.6977C40.1583 35.4373 21.9569 64.5655 28.6964 93.7576C35.4359 122.95 64.5642 141.151 93.7562 134.411L94.4437 137.389C63.607 144.508 32.8378 125.282 25.7186 94.445C18.5994 63.6084 37.8261 32.8391 68.6628 25.7199C99.4995 18.6007 130.269 37.8275 137.388 68.6641C144.507 99.5008 125.28 130.27 94.4437 137.389L93.7562 134.411C122.948 127.672 141.15 98.5436 134.41 69.3516Z"
                      }
                      fill={"#463721"}
                    />
                    <path
                      d={
                        "M118.755 76.5748C118.337 81.8458 116.332 89.9855 111.666 97.4702C106.982 104.984 99.5735 111.897 88.3727 114.483C77.1617 117.071 67.8239 114.015 60.7625 109.176C53.7397 104.364 48.9316 97.772 46.6279 93.1163L49.366 91.7611C51.4728 96.0194 55.9597 102.18 62.4898 106.655C68.9817 111.103 77.4557 113.867 87.6852 111.505C97.9249 109.141 104.717 102.843 109.074 95.854C113.449 88.8359 115.326 81.1806 115.71 76.3343L118.755 76.5748Z"
                      }
                      fill={"#463721"}
                    />
                    <path
                      d={
                        "M53.7191 62.8881C57.2879 62.0642 60.1151 63.3299 62.1057 65.1635C64.046 66.9512 65.2411 69.306 65.769 70.954L62.8598 71.886C62.4522 70.6135 61.4989 68.7593 60.0365 67.4118C58.6242 66.1106 56.7932 65.3149 54.4066 65.8659C52.02 66.4169 50.7231 67.9347 50.0241 69.7234C49.3004 71.5756 49.2564 73.6599 49.4479 74.9823L46.4246 75.42C46.1766 73.7074 46.2185 71.067 47.1787 68.6097C48.1641 66.089 50.1503 63.712 53.7191 62.8881Z"
                      }
                      fill={"#463721"}
                    />
                    <path
                      d={
                        "M98.3871 52.5756C101.956 51.7517 104.783 53.0174 106.774 54.851C108.714 56.6387 109.909 58.9935 110.437 60.6415L107.528 61.5734C107.12 60.301 106.167 58.4468 104.704 57.0993C103.292 55.7981 101.461 55.0024 99.0745 55.5534C96.6879 56.1044 95.391 57.6222 94.6921 59.4109C93.9684 61.2631 93.9244 63.3474 94.1158 64.6698L91.0925 65.1075C90.8446 63.3949 90.8864 60.7545 91.8466 58.2972C92.8321 55.7765 94.8182 53.3995 98.3871 52.5756Z"
                      }
                      fill={"#463721"}
                    />
                    <path
                      d={
                        "M99.4785 84.4736C99.13 82.964 99.106 80.6458 100.151 78.4434C101.233 76.1632 103.39 74.1607 107.094 73.3057C114.067 71.6959 117.832 74.2389 118.815 76.6156L115.99 77.7823C115.788 77.2946 113.909 74.8689 107.782 76.2835C104.934 76.9409 103.57 78.3655 102.912 79.7542C102.216 81.2209 102.232 82.8143 102.456 83.7861L106.753 102.398L103.775 103.085L99.4785 84.4736Z"
                      }
                      fill={"#463721"}
                    />
                  </g>
                  <defs>
                    <clipPath id={"clip0_5211_1427"}>
                      <rect
                        width={"136"}
                        height={"136"}
                        fill={"white"}
                        transform={"translate(0 30.5938) rotate(-13)"}
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Parallax>

            <Parallax
              speed={-0.05}
              rotate={0}
              className={
                "absolute max-md:hidden max-md:size-[35vw] bottom-[13.5vw] text-beige  right-[16vw]"
              }
            >
              <DrawIllustration stagger={"sequential"}>
                <div className={"size-[6vw] scale-x-[-1] -rotate-5"}>
                  <svg
                    className={"h-full w-full"}
                    width={"111"}
                    height={"85"}
                    viewBox={"0 0 111 85"}
                    fill={"none"}
                    xmlns={"http://www.w3.org/2000/svg"}
                  >
                    <path
                      d={
                        "M109.146 2.1256C72.3833 -1.56053 1.13751 9.29508 10.2538 82.2066M20.6989 72.4617L10.2538 82.2066L1.49932 74.1765"
                      }
                      stroke={"currentColor"}
                      strokeWidth={"3"}
                      strokeLinecap={"round"}
                    />
                  </svg>
                </div>
              </DrawIllustration>
              <p
                className={
                  "text32 w-[9vw] -rotate-10 translate-x-[1.5vw] font-medium mt-[.5vw] text-center capitalize font-patrick-hand"
                }
              >
                {"thats why people love to drink it !"}
              </p>
            </Parallax>
          </div>
        </section>
      </CoconutScene>
      <OrganicSection />
      <MediaGallery />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}
