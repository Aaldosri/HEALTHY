import Button from "@mui/material/Button";

export default function Header({
  scrollToAboutUs,
  scrollToMeals,
  scrollToPricing,
}) {
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">HEALTHY</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexGrow: 1,
            marginRight: "30px",
            padding: "20px",
            fontSize: "30px",
            fontFamily: "Rubik-2",
            gap: "40px",
          }}
        >
          <Button
            className="btn"
            style={{
              marginRight: "30px",
              fontSize: "30px",
              fontFamily: "Rubik-2",
              boxShadow: "none",
              textTransform: "none",
              color: "black",
              transition: "color 0.3s ease",
            }}
            onClick={scrollToAboutUs}
            onMouseEnter={(e) => {
              e.target.style.color = "#355F2E";
              e.target.style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "black";
              e.target.style.boxShadow = "none";
            }}
          >
            About Us
          </Button>
          <Button
            className="btn"
            style={{
              marginRight: "30px",
              fontSize: "30px",
              textTransform: "none",
              color: "black",
              fontFamily: "Rubik-2",
              transition: "color 0.3s ease",
            }}
            onClick={scrollToMeals}
            onMouseEnter={(e) => (e.target.style.color = "#355F2E")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Meals
          </Button>
          <Button
            className="btn"
            style={{
              marginRight: "30px",
              fontSize: "30px",
              textTransform: "none",
              color: "black",
              fontFamily: "Rubik-2",

              transition: "color 0.3s ease",
            }}
            onClick={scrollToPricing}
            onMouseEnter={(e) => (e.target.style.color = "#355F2E")}
            onMouseLeave={(e) => (e.target.style.color = "black")}
          >
            Pricing
          </Button>
          <Button
            className="btn-join"
            style={{
              fontFamily: "Rubik-2",
              width: "10%",
              marginRight: "30px",
              fontSize: "22px",
              textTransform: "none",
              background: "#355F2E",
              color: "white",
              transition: "color 0.3s ease",
            }}
            variant="contained"
            onClick={scrollToPricing}
          >
            Join Us
          </Button>
        </div>
      </div>
    </>
  );
}
