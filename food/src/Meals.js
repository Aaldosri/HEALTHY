import Grid from "@mui/material/Grid";
import image1 from "./img/11.jpg";
import image2 from "./img/22.jpg";
import image3 from "./img/33.jpg";
import image4 from "./img/44.jpg";
import image5 from "./img/55.jpg";
import image6 from "./img/66.jpg";
import image7 from "./img/77.png";
import image8 from "./img/88.jpg";
import image9 from "./img/999.png";

export default function Meals() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <>
      <div className="div-meals">
        <div className="div-div-meals">
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
            container
            spacing={2}
          >
            <span className="span-header">MEALS</span>

            <h1 className="h1-meals">
              Over 1000+ healthy recipes crafted to suit your taste and promote
              your well-being
            </h1>
          </Grid>
        </div>
        <div className="centered-container">
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid size={4} xs={4} key={index}>
                <div className="grid-item-div">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="img-style"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
