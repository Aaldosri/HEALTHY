import React from "react";
import img1 from "./img/00.png";
import { Button } from "@mui/material";

export default function Introduce({ scrollToAbouUs, scrollToPricing }) {
  return (
    <>
      <div style={{ height: "70vh", alignContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div>
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

          <img style={{ height: "600px" }} src={img1} />
        </div>
      </div>
    </>
  );
}
