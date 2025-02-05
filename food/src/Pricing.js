import React from "react";
// import Container from "@mui/material/Container";
import { Container, Card, CardContent, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف CSS الخاص بـ AOS
import { useEffect } from "react";
AOS.init({ duration: 500 });

export default function Pricing({ scrollStart }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="div-pricing">
        <Container maxWidth="xl">
          <h1 className="h1-pricing">Choose the Best Deal for You</h1>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              transition: "transform 0.5s ease-in-out",
              marginTop: "50px",
            }}
          >
            <Card
              sx={{
                width: 345,
                height: 500,
                background: "#e1eacd",

                border: "2px solid #355F2E",
                transition: "transform 0.3s ease-in-out",
                padding: "20px",

                "&:hover": {
                  transform: "scale(1.1)", // يُطبق عند التمرير فوق الكارد
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-25px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>
                {" "}
                <FaDollarSign style={{ fontSize: "30px" }} />
                330
              </h1>
              <Typography gutterBottom variant="h6" component="div">
                per month, just $11 per meal!
              </Typography>

              <div style={{ marginLeft: "60px", marginTop: "30px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",

                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  1 meal per day
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  Free Delivery
                </Typography>
              </div>
              <Button
                variant="contained"
                style={{
                  width: "70%",
                  marginTop: "12vh",
                  padding: "10px",
                  fontSize: "20px",
                  background: "#355F2E",
                  textTransform: "none",
                }}
                onClick={scrollStart}
              >
                Start Eating Healthy
              </Button>
            </Card>
            <Card
              sx={{
                width: 345,
                transition: "transform 0.3s ease-in-out",
                padding: "20px",
                background: "#e1eacd",

                border: "2px solid #355F2E",

                "&:hover": {
                  transform: "translateY(-25px)", // يُطبق عند التمرير فوق الكارد
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-25px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>
                {" "}
                <FaDollarSign style={{ fontSize: "30px" }} />
                599
              </h1>
              <Typography gutterBottom variant="h6" component="div">
                per month, just $10 per meal!
              </Typography>
              <div style={{ marginLeft: "60px", marginTop: "30px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",

                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  2 meal per day
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  Free Delivery
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>
                  Discount
                </Typography>
              </div>
              <Button
                variant="contained"
                style={{
                  width: "70%",
                  marginTop: "8vh",
                  padding: "10px",
                  fontSize: "20px",
                  background: "#355F2E",
                  textTransform: "none",
                }}
                onClick={scrollStart}
              >
                Start Eating Healthy
              </Button>
            </Card>
            <Card
              sx={{
                position: "relative",
                width: 345,
                background: "#e1eacd",
                transition: "transform 0.3s ease-in-out",
                padding: "20px",
                border: "2px solid #355F2E",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-25px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "19px", // لتوسيع الشريط للخارج قليلاً
                  right: "-70px", // لتحريك الشريط للخارج قليلاً
                  background: "green", // لون الخلفية
                  color: "white",
                  padding: "10px 30px", // لتوسيع الشريط
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "190px",
                  transform: "rotate(40deg)", // جعل النص مائلًا
                  zIndex: 1, // لضمان ظهوره فوق المحتوى
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // إضافة ظل للشريط
                }}
              >
                Best Deal
              </div>

              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>
                <FaDollarSign style={{ fontSize: "30px" }} />
                810
              </h1>
              <Typography gutterBottom variant="h6" component="div">
                per month. just $9 per meal!
              </Typography>
              <div style={{ marginLeft: "60px", marginTop: "30px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",

                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  3 meal per day
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    <DoneIcon style={{ color: "green" }} />
                  </span>{" "}
                  Free Delivery
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>
                  Discount
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    color: "text.secondary",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>
                    {" "}
                    <DoneIcon style={{ color: "green" }} />
                  </span>
                  Variety of recipes
                </Typography>
              </div>

              <Button
                variant="contained"
                style={{
                  width: "70%",
                  marginTop: "5vh",
                  padding: "10px",
                  fontSize: "20px",
                  background: "#355F2E",
                  textTransform: "none",
                }}
                onClick={scrollStart}
              >
                Start Eating Healthy
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
