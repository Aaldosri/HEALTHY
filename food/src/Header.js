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
          background: "orange",
        }}
      >
        <h1 style={{ margin: "0", marginLeft: "15px" }}>UrHealth</h1>

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
