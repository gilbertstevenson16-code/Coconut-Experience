import { asset } from "../config/media";
import { component } from "../runtime/registry";
const AnimatedTextAnimatedParagraph = component(59245, "AnimatedParagraph");
const AnimatedTextAnimatedHeading = component(59245, "AnimatedHeading");
const FlavourCard = component(20808, "default");
const Contact = component(30060, "default");
const Footer = component(95241, "default");
export default function FlavoursPage() {
  return (
    <>
      <section
        className={
          "relative z-10 bg-background pt-[12vw] max-md:pt-[28vw] pb-[6vw] max-md:pb-[10vw] paddx text-center flex flex-col items-center justify-center"
        }
      >
        <AnimatedTextAnimatedParagraph
          className={
            "font-patrick-hand text32 max-md:text-2xl text-center mb-[1vw] max-md:mb-3"
          }
        >
          {"Pure • Cold-Pressed • Organic Lineup"}
        </AnimatedTextAnimatedParagraph>
        <AnimatedTextAnimatedHeading
          as={"h1"}
          className={
            "text180 uppercase text-center w-full leading-[85%] max-md:text-[14vw] max-md:leading-[90%]"
          }
        >
          {"PROMPTEDSITE FLAVOURS"}
        </AnimatedTextAnimatedHeading>
        <AnimatedTextAnimatedParagraph
          className={
            "text36 max-md:text-lg text-center max-w-[50vw] max-md:max-w-[90vw] mx-auto mt-[1.5vw] max-md:mt-4 font-medium font-sans opacity-90"
          }
        >
          {
            "Explore 100% pure organic coconut water infused with cold-extracted natural fruit essences. Zero added sugar, maximum natural electrolytes."
          }
        </AnimatedTextAnimatedParagraph>
      </section>
      <section
        className={
          "relative z-10  bg-background paddx  pb-[12vw] max-md:pb-[20vw]"
        }
      >
        <div
          className={
            "grid grid-cols-1 md:grid-cols-3 gap-[1.5vw] max-md:gap-[4vw] w-full"
          }
        >
          <FlavourCard
            flavour={{
              id: "natural",
              name: "Natural Pure",
              fullName: "Natural Pure Coco Water",
              tagline: "100% Raw & Crisp Hydration",
              description:
                "Single-origin pure coconut water harvested from pristine coastal palms. Light, naturally sweet, and packed with 5 essential electrolytes.",
              texture: asset("/model/tex/coconutWhite.webp"),
              color: "#946C3C",
              bgColor: "#FAF6F0",
              textColor: "#463721",
              potassium: "520 MG",
              calories: "45 KCL",
              sugar: "0 GM",
              hydration: "99.8%",
              vitC: "100% DV",
            }}
            index={0}
          />
          <FlavourCard
            flavour={{
              id: "pineapple",
              name: "Golden Pineapple",
              fullName: "Pineapple Infused Coco Water",
              tagline: "Tropical Burst of Sun-Ripe Pineapple",
              description:
                "Pure coconut water cold-infused with organic golden pineapple juice. The ultimate tropical thirst quencher with a tangy finish.",
              texture: asset("/model/tex/pineapple.webp"),
              color: "#606112",
              bgColor: "#FDFBF0",
              textColor: "#3A3A0B",
              potassium: "480 MG",
              calories: "50 KCL",
              sugar: "0 GM",
              hydration: "98.5%",
              vitC: "120% DV",
            }}
            index={1}
          />
          <FlavourCard
            flavour={{
              id: "watermelon",
              name: "Ruby Watermelon",
              fullName: "Watermelon Infused Coco Water",
              tagline: "Cooling Summer Slice Hydration",
              description:
                "Sweet ruby watermelon essence blended into pure coconut water. Ultra-hydrating and rich in natural antioxidants.",
              texture: asset("/model/tex/watermelon.webp"),
              color: "#CB533B",
              bgColor: "#FFF7F6",
              textColor: "#5A1B10",
              potassium: "500 MG",
              calories: "48 KCL",
              sugar: "0 GM",
              hydration: "99.2%",
              vitC: "110% DV",
            }}
            index={2}
          />
          <FlavourCard
            flavour={{
              id: "guava",
              name: "Tropical Guava",
              fullName: "Guava Infused Coco Water",
              tagline: "Exotic Sweet & Tangy Coastal Guava",
              description:
                "Fresh pink guava nectar cold-blended into pure coconut water. A smooth, aromatic hydration boost loaded with Vitamin C.",
              texture: asset("/model/tex/guava.webp"),
              color: "#A84C66",
              bgColor: "#FCF5F7",
              textColor: "#4A1D2B",
              potassium: "490 MG",
              calories: "47 KCL",
              sugar: "0 GM",
              hydration: "98.9%",
              vitC: "140% DV",
            }}
            index={3}
          />
          <FlavourCard
            flavour={{
              id: "lychee",
              name: "Lush Lychee",
              fullName: "Lychee Infused Coco Water",
              tagline: "Floral Sweetness of Sun-Kissed Lychee",
              description:
                "Delicate, fragrant lychee extract combined with raw coconut water for a refreshing, silky-smooth tropical drink.",
              texture: asset("/model/tex/litchi.webp"),
              color: "#B83B5E",
              bgColor: "#FDF6F8",
              textColor: "#4D1424",
              potassium: "475 MG",
              calories: "46 KCL",
              sugar: "0 GM",
              hydration: "98.7%",
              vitC: "115% DV",
            }}
            index={4}
          />
          <FlavourCard
            flavour={{
              id: "mango",
              name: "Alphonso Mango",
              fullName: "Mango Infused Coco Water",
              tagline: "Rich Royal Golden Mango Nectar",
              description:
                "Pure king Alphonso mango puree gently folded into organic coconut water. Creamy, rich, and bursting with natural tropical flavor.",
              texture: asset("/model/tex/mango.webp"),
              color: "#D97706",
              bgColor: "#FFFBF2",
              textColor: "#5C3300",
              potassium: "510 MG",
              calories: "52 KCL",
              sugar: "0 GM",
              hydration: "99.0%",
              vitC: "125% DV",
            }}
            index={5}
          />
        </div>
      </section>
      <section
        data-nav-dark={"7"}
        className={
          "paddx pt-[14vw] max-md:pt-[20vw] pt-[8vw]  pb-[12vw] max-md:pb-[18vw] pb-[12vw] max-md:pb-[18vw] bg-foreground text-background relative z-20 w-full"
        }
      >
        <div
          className={
            "absolute top-0 left-0 translate-y-[-50%] w-full h-fit pointer-events-none z-10"
          }
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
        </div>
        <div
          className={
            "flex flex-col items-center mb-[4vw] max-md:mb-6 text-center relative z-20"
          }
        >
          <AnimatedTextAnimatedHeading
            as={"h2"}
            className={
              "text180 uppercase text-center w-full leading-[85%] text-background relative z-20 max-md:text-[12vw] max-md:leading-[90%]"
            }
          >
            {"PROMPTEDSITE NUTRITION FACTS"}
          </AnimatedTextAnimatedHeading>
          <AnimatedTextAnimatedParagraph
            className={
              "text36 max-md:text-base text-center max-w-[45vw] max-md:max-w-[85vw] mt-[1vw] max-md:mt-3 text-background/80 relative z-20"
            }
          >
            {
              "Compare essential electrolytes, calories, and natural fruit nutrients across our 6 signature 3D cans."
            }
          </AnimatedTextAnimatedParagraph>
        </div>
        <div
          className={
            "hidden md:block w-full max-w-[82vw] mx-auto rounded-lg border border-background/20 overflow-hidden bg-background/5"
          }
        >
          <table className={"w-full text-left border-collapse"}>
            <thead>
              <tr className={"border-b border-background/20 bg-background/10"}>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-gold"
                  }
                >
                  {"Nutrient"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Natural Pure"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Pineapple"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Watermelon"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Guava"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Lychee"}
                </th>
                <th
                  className={
                    "py-[1.4vw] px-[1.5vw] text-[1vw] font-bold uppercase tracking-wider text-background"
                  }
                >
                  {"Mango"}
                </th>
              </tr>
            </thead>
            <tbody className={"divide-y divide-background/10 font-sans"}>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Serving Size"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"330 ml"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"330 ml"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"330 ml"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"330 ml"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"330 ml"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"330 ml"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Calories"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"45 Kcal"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"50 Kcal"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"48 Kcal"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"47 Kcal"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"46 Kcal"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"52 Kcal"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Natural Sugar"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"0g Added"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"0g Added"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"0g Added"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"0g Added"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"0g Added"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"0g Added"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Potassium"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"520 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"480 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"500 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"490 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"475 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"510 mg"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Sodium"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"45 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"40 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"42 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"41 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"39 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"43 mg"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Magnesium"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"24 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"22 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"25 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"23 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"21 mg"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"26 mg"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Vitamin C"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"100% DV"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"120% DV"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"110% DV"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"140% DV"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"115% DV"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"125% DV"}
                </td>
              </tr>
              <tr className={"hover:bg-background/10 transition-colors"}>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-semibold text-background/90"
                  }
                >
                  {"Hydration Index"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-gold"
                  }
                >
                  {"99.8%"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"98.5%"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"99.2%"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"98.9%"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"98.7%"}
                </td>
                <td
                  className={
                    "py-[1.1vw] px-[1.5vw] text-[0.95vw] font-bold text-background"
                  }
                >
                  {"99.0%"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={"md:hidden flex flex-col gap-4 w-full relative z-20"}>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Natural Pure"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"45 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"520 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"100% DV"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Golden Pineapple"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"50 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"480 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"120% DV"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Ruby Watermelon"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"48 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"500 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"110% DV"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Tropical Guava"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"47 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"490 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"140% DV"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Lush Lychee"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"46 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"475 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"115% DV"}
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              "p-4 rounded-lg max-md:rounded-2xl border border-background/15 bg-background/5 space-y-3"
            }
          >
            <div
              className={
                "flex items-center justify-between border-b border-background/10 pb-2.5"
              }
            >
              <span
                className={
                  "font-khand font-bold text-xl uppercase tracking-wider text-background"
                }
              >
                {"Alphonso Mango"}
              </span>
              <span
                className={
                  "text-[11px] font-bold text-gold uppercase px-2.5 py-0.5 rounded-full border border-gold/25 bg-gold/5"
                }
              >
                {"330 ml"}
              </span>
            </div>
            <div className={"grid grid-cols-2 gap-2 text-xs font-sans"}>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Calories"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"52 KCL"}
                </span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Sugar"}
                </span>
                <span className={"font-bold text-gold"}>{"0 GM"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Potassium"}
                </span>
                <span className={"font-bold text-gold"}>{"510 MG"}</span>
              </div>
              <div
                className={
                  "flex justify-between items-center p-2 rounded-md bg-background/5 border border-background/10"
                }
              >
                <span className={"text-background/65 font-medium"}>
                  {"Vitamin C"}
                </span>
                <span className={"font-bold text-background/90"}>
                  {"125% DV"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "absolute bottom-0 left-0 translate-y-[50%] w-full h-fit pointer-events-none z-10"
          }
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
        </div>
      </section>
      <Contact paddingTop={"pt-[20vw]!"} />
      <Footer />
    </>
  );
}
