import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import img1 from "./img/Sa.png";
import img2 from "./img/Eg.png";
import img4 from "./img/App.png";

export default function AboutUs() {
  return (
    // <div style={{ background: "orange", height: "80vh", margin: "auto" }}>
    //   <h1>Discover some of our strengths!</h1>
    // </div>

    <Container
      style={{
        height: "80vh",
        margin: "auto",
      }}
      maxWidth="lg"
    >
      <h1 style={{ color: "#355F2E" }}>Discover some of our advantages!</h1>

      <div style={{ height: "150vh" }}>
        <Grid style={{ height: "120vh" }} container spacing={2}>
          <Grid size={6}>
            <h1 style={{ margin: "0px", marginTop: "50px", fontSize: "90px" }}>
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
          <Grid size={6}>
            <div
              style={{
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img style={{ height: "300px" }} src={img1} />
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img style={{ height: "300px" }} src={img2} />
            </div>
          </Grid>
          <Grid size={6}>
            <h1 style={{ margin: "0px", marginTop: "50px", fontSize: "90px" }}>
              2
            </h1>
            <h1 style={{ margin: "0px", padding: "0" }}>
              Precisely Crafted Meals for a Balanced and Nutrient-Rich Diet
            </h1>

            <h2>
              We provide meals that cover your needs for protein, vitamins,
              minerals, and carbohydrates, and we make sure to calculate them
              accurately, ensuring a balanced and nutritious diet tailored to
              your specific requirements{" "}
            </h2>
            <hr></hr>
          </Grid>
          <Grid size={6}>
            <h1 style={{ margin: "0px", marginTop: "50px", fontSize: "90px" }}>
              3
            </h1>
            <h1 style={{ margin: "0px", padding: "0" }}>
              A Flexible App for Seamless Ordering and Customizable Meal
              Delivery
            </h1>

            <h2>
              A flexible and user-friendly app that allows you to place orders,
              add your favorite options, and ensures that your meal is delivered
              exactly as you requested
            </h2>
            <hr></hr>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <img style={{ height: "300px" }} src={img4} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
