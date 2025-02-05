import React from "react";
import img1 from "./img/00.png";
import { Button, duration } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Introduce({ scrollToAbouUs, scrollToPricing }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="div-intro">
        <div className="div-div-intro">
          <div data-aos="fade-right" data-aos-delay="200">
            <h1 style={{ width: "500px", fontSize: "50px" }}>
              Healthy meals delivered daily to your door
            </h1>
            <p style={{ width: "550px", fontSize: "25px" }}>
              The smart food subscription that brings you fresh, nutritious
              meals every day, 365 days a year, Customized to fit your taste and
              nutritional needs, helping you eat healthy effortlessly.
            </p>

            <Button
              style={{
                marginRight: "20px",
                background: "#355F2E",
                fontFamily: "Rubik-2",
              }}
              variant="contained"
              onClick={scrollToPricing}
            >
              Start With Us
            </Button>
            <Button
              style={{ background: "#355F2E", fontFamily: "Rubik-2" }}
              variant="contained"
              onClick={scrollToAbouUs}
            >
              Learn More
            </Button>
          </div>

          <img
            data-aos="fade-in"
            data-aos-delay="200"
            className="img"
            src={img1}
          />
        </div>
      </div>
    </>
  );
}
