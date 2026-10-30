import { component } from "./runtime/registry";
import { usePathname } from "./runtime/platform";
import HomePage from "./pages/HomePage";
import FlavoursPage from "./pages/FlavoursPage";
import StoryPage from "./pages/StoryPage";
const SmoothScroll = component(55136),
  CartProvider = component(52086, "CartProvider"),
  AnimationProvider = component(28908, "AnimationProvider"),
  PageTransition = component(69),
  SiteLoader = component(54922),
  PageTitle = component(76956),
  Header = component(78554),
  CartDrawer = component(39414),
  CookieNotice = component(3433),
  CursorTrail = component(27047);
export default function App() {
  const pathname = usePathname();
  return (
    <>
      <SmoothScroll />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]"
      >
        Skip to main content
      </a>
      <CartProvider>
        <AnimationProvider>
          <PageTransition>
            <SiteLoader />
            <PageTitle />
            <Header />
            <main
              id="main-content"
              className="flex-1 overflow-x-clip w-full relative"
            >
              {pathname === "/flavours" ? (
                <FlavoursPage />
              ) : pathname === "/story" ? (
                <StoryPage />
              ) : pathname === "/" ? (
                <HomePage />
              ) : (
                <section className="paddx py-32">
                  <h1>Page not found</h1>
                  <a href="/">Return home</a>
                </section>
              )}
            </main>
            <CartDrawer />
            <CookieNotice />
          </PageTransition>
        </AnimationProvider>
      </CartProvider>
      <CursorTrail />
    </>
  );
}
