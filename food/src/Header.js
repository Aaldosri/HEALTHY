import React from "react";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
          alignItems: "center",
          height: "80px",
          background: "#E1EACD",
        }}
      >
        <h1
          style={{
            margin: "0",
            marginLeft: "15px",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "30px",
            fontWeight: "900",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#4CAF50", // اللون الأخضر
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // ظل للنص لإضافة عمق
          }}
        >
          XHEALTH
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: 1,
            marginRight: "30px",
            padding: "20px",
            fontSize: "30px",
          }}
        >
          <Button
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            About Us
          </Button>
          <Button
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            Meals
          </Button>
          <Button
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            Pricing
          </Button>
          <Button
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
            }}
            variant="contained"
          >
            Join Us
          </Button>
        </div>
      </div>
    </>
  );
}
