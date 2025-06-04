import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import img1 from "./img/Sa.png";
import img2 from "./img/Eg.png";
import img4 from "./img/App.png";

export default function AboutUs() {
  return (
    <Container
      style={{
        padding: "50px",
        margin: "auto",
      }}
      maxWidth="lg"
    >
      <h1 style={{ color: "#355F2E", fontSize: "40px" }}>
        Discover some of our advantages
      </h1>

      <div style={{ height: "100%" }}>
        <Grid style={{ height: "100%" }} container spacing={2}>
          <Grid size={6}>
            <h1 className="h1-aboutUs">1</h1>
            <h1 style={{ margin: "0px", padding: "0" }}>
              Deliciously Tailored Healthy Meals for Your Taste and Well-being
            </h1>
            <h2 className="h2-aboutUs">
              Indulge in healthy and diverse meals, thoughtfully tailored to
              your personal taste and preferences, crafted with the finest,
              highest quality ingredients to provide both nourishment and
              flavor, ensuring every bite is a delicious and satisfying
              experience{" "}
            </h2>
            <hr></hr>
          </Grid>
          <Grid size={6}>
            <div className="div-aboutUs1">
              <div
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
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
                    borderRadius: "50%",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={img1}
                  alt="image"
                />
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <div className="div-aboutUs2">
              <div
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
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
                    borderRadius: "50%",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={img2}
                  alt="image"
                />
              </div>
            </div>
          </Grid>
          <Grid size={6}>
            <h1 className="h1-aboutUs">2</h1>
            <h1 style={{ margin: "0px", padding: "0" }}>
              Precisely Crafted Meals for a Balanced and Nutrient-Rich Diet
            </h1>

            <h2 className="h2-aboutUs">
              We provide meals that cover your needs for protein, vitamins,
              minerals, and carbohydrates, and we make sure to calculate them
              accurately, ensuring a balanced and nutritious diet tailored to
              your specific requirements{" "}
            </h2>
            <hr></hr>
          </Grid>
          <Grid size={6}>
            <h1 className="h1-aboutUs">3</h1>
            <h1 style={{ margin: "0px", padding: "0" }}>
              A Flexible App for Seamless Ordering and Customizable Meal
              Delivery
            </h1>

            <h2 className="h2-aboutUs">
              A flexible and user-friendly app that allows you to place orders,
              add your favorite options, and ensures that your meal is delivered
              exactly as you requested
            </h2>
            <hr></hr>
          </Grid>
          <Grid size={6}>
            <div className="div-aboutUs3">
              <div
                style={{
                  width: "350px", // عرض الخلفية
                  height: "350px", // ارتفاع الخلفية
                  borderRadius: "50%", // جعلها دائرية
                  backgroundColor: "#f0f0f0", // لون الخلفية
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)", // ظل حول الخلفية
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
                    borderRadius: "50%", // جعل الصورة دائرية داخل الخلفية
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={img4}
                  alt="image"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
