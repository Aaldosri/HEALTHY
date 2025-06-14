import img1 from "./img/00.png";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Introduce({ scrollToAboutUs, scrollToPricing }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="div-intro">
        <div className="div-div-intro">
          <div data-aos="fade-right" data-aos-delay="200">
            <h1 style={{ width: "500px", fontSize: "60px" }}>
              Healthy meals delivered daily to your door
            </h1>
            <p style={{ width: "550px", fontSize: "35px" }}>
              The smart food subscription that brings you fresh, nutritious
              meals every day, 365 days a year, Customized to fit your taste and
              nutritional needs, helping you eat healthy effortlessly.
            </p>

            <Button
              className="btn-introduce1"
              variant="contained"
              onClick={scrollToPricing}
            >
              Start With Us
            </Button>
            <Button
              className="btn-introduce2"
              variant="contained"
              onClick={scrollToAboutUs}
            >
              Learn More
            </Button>
          </div>

          <img
            data-aos="fade-in"
            data-aos-delay="200"
            className="img"
            src={img1}
            alt="Healthy meals"
          />
        </div>
      </div>
    </>
  );
}
