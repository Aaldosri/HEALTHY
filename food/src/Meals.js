import React from "react";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

export default function Meals() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#e1eacd",
        }}
      >
        <div>
          <Grid
            style={{ display: "flex", justifyContent: "space-around" }}
            container
            spacing={2}
          >
            <Grid size={10}>
              <h1>Our Meals</h1>
              <h2>delicious healthy meals</h2>
            </Grid>
            <Grid size={4}>
              <h1
                style={{
                  margin: "0px",
                  marginTop: "50px",
                  fontSize: "90px",
                  color: "#00000085",
                }}
              >
                1
              </h1>
              <h1 style={{ margin: "0px", padding: "0" }}>
                Deliciously Tailored Healthy Meals for Your Taste and Well-being
              </h1>
              <h2>
                Indulge in healthy and diverse meals, thoughtfully tailored to
                your personal taste and preferences, crafted with the finest,
                highest quality ingredients to provide both nourishment and
                flavor, ensuring every bite is a delicious and satisfying
                experience{" "}
              </h2>
              <hr></hr>
            </Grid>
            <Grid size={4}>
              <div
                style={{
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%", // خلفية دائرية
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)", // تأثير الظل حول الخلفية
                    background: "#355f2eb8",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <img
                    style={{
                      height: "300px",
                      borderRadius: "50%", // تجعل الصورة دائرية أيضًا داخل الخلفية
                      transition: "transform 0.3s ease-in-out",
                    }}
                    alt="image"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
