import "./App.css";
import Header from "./Header";
import Introduce from "./Introduce";
import AboutUs from "./AboutUs";
import Container from "@mui/material/Container";
import Meals from "./Meals";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const AboutUsRef = useRef(null);
  const MealsRef = useRef(null);
  const PricingRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = -50;
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition + offset,
      behavior: "smooth",
    });
  };
  const scrollToMealsSection = (ref) => {
    let offset = -550;
    if (window.innerWidth < 768) {
      // لو حجم الشاشة أصغر من 768px (مثلاً موبايل)
      offset = -150; // خلي الارتفاع أكبر (ارفع أكثر)
    }
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition + offset,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div>
        <Header
          scrollToAbouUs={() => scrollToSection(AboutUsRef)}
          scrollToMeals={() => scrollToMealsSection(MealsRef)}
          scrollToPricing={() => scrollToSection(PricingRef)}
        />
      </div>

      <div style={{ background: "#e1eacd" }}>
        <Introduce
          scrollToAbouUs={() => scrollToSection(AboutUsRef)}
          scrollToPricing={() => scrollToSection(PricingRef)}
        />
      </div>

      <div ref={AboutUsRef}>
        <Container className="aboutUs">
          <span
            style={{
              fontSize: "25px",
              textTransform: "none",
              marginTop: "50px",
              color: "#355F2E",
            }}
          >
            ABOUT US
          </span>
        </Container>
      </div>

      <div data-aos="fade-right" data-aos-delay="200">
        <AboutUs />
      </div>

      <div ref={MealsRef} data-aos="fade-right" data-aos-delay="200">
        <Meals />
      </div>

      <div ref={PricingRef}>
        <div className="pricing">
          <Container>
            <span
              style={{
                fontSize: "25px",
                textTransform: "none",
                color: "#355F2E",
              }}
            >
              PRICING
            </span>
          </Container>
        </div>
      </div>

      <div>
        <Pricing scrollStart={() => scrollToTop()} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
