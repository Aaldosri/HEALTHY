import { Container, Card, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const pricingOptions = [
  {
    price: 330,
    pricePerMeal: "$11 per meal",
    mealsPerDay: "1 meal per day",
    features: ["Free Delivery"],
    bestDeal: false,
  },
  {
    price: 599,
    pricePerMeal: "$10 per meal",
    mealsPerDay: "2 meal per day",
    features: ["Free Delivery", "Discount"],
    bestDeal: false,
  },
  {
    price: 810,
    pricePerMeal: "$9 per meal",
    mealsPerDay: "3 meal per day",
    features: ["Free Delivery", "Discount", "Variety of recipes"],
    bestDeal: true,
  },
];

export default function Pricing({ scrollStart }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="div-pricing">
      <Container maxWidth="xl">
        <h1 className="h1-pricing">Choose the Best Deal for You</h1>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          style={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          {pricingOptions.map((option, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                width: 345,
                height: 500,
                maxHeight: "500px",
                background: "#e1eacd",
                border: "2px solid #355F2E",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-25px)",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-25px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {option.bestDeal && (
                <div className="best-deal-badge">Best Deal</div>
              )}

              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>
                <FaDollarSign style={{ fontSize: "30px" }} />
                {option.price}
              </h1>

              <Typography gutterBottom variant="h6" component="div">
                per month, just {option.pricePerMeal}
              </Typography>

              <div style={{ marginLeft: "60px", marginTop: "30px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span className="span-margin">
                    <DoneIcon style={{ color: "green" }} />
                  </span>
                  {option.mealsPerDay}
                </Typography>

                {option.features.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="h6"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "text.secondary",
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>
                      <DoneIcon style={{ color: "green" }} />
                    </span>
                    {feature}
                  </Typography>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    width: "70%",
                    marginTop: "auto",
                    padding: "10px",
                    fontSize: "20px",
                    background: "#355F2E",
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  onClick={scrollStart}
                >
                  Start Eating Healthy
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
