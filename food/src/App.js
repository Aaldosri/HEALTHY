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
          scrollToAboutUs={() => scrollToSection(AboutUsRef)}
          scrollToMeals={() =>
            scrollToSection(MealsRef, window.innerWidth < 768 ? -150 : -50)
          }
          scrollToPricing={() => scrollToSection(PricingRef)}
        />
      </div>

      <div style={{ background: "#e1eacd" }}>
        <Introduce
          scrollToAboutUs={() => scrollToSection(AboutUsRef)}
          scrollToPricing={() => scrollToSection(PricingRef)}
        />
      </div>

      <div ref={AboutUsRef}>
        <Container className="aboutUs">
          <span className="section-title">ABOUT US</span>
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
            <span className="section-title2">PRICING</span>
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
