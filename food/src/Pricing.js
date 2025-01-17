import React from "react";
// import Container from "@mui/material/Container";
import { Container, Card, CardContent, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Button } from "@mui/material";

export default function Pricing() {
  return (
    <>
      <div style={{ height: "70vh" }}>
        <Container maxWidth="xl">
          <h1 style={{ marginLeft: "167px", color: "#355F2E" }}>
            Choose the Best Deal for You
          </h1>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
          ></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              transition: "transform 0.3s ease-in-out",
              marginTop: "50px",
            }}
          >
            <Card
              sx={{
                width: 345,
                height: 500,
                border: "2px solid #355F2E",
                transition: "transform 0.5s ease-in-out",
                padding: "20px",

                "&:hover": {
                  transform: "scale(1.1)", // يُطبق عند التمرير فوق الكارد
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>330$</h1>
              <Typography gutterBottom variant="h6" component="div">
                per month, just $11 per meal!
              </Typography>

              <div style={{ marginLeft: "60px" }}>
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
                style={{ width: "70%", marginTop: "10vh" }}
              >
                JJ
              </Button>
            </Card>
            <Card
              sx={{
                width: 345,
                transition: "transform 0.5s ease-in-out",
                padding: "20px",
                border: "2px solid #355F2E",

                "&:hover": {
                  transform: "scale(1.1)", // يُطبق عند التمرير فوق الكارد
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>599$</h1>
              <Typography gutterBottom variant="h6" component="div">
                per month, just $10 per meal!
              </Typography>
              <div>
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
                style={{ width: "70%", marginTop: "10vh" }}
              >
                JJ
              </Button>
            </Card>
            <Card
              sx={{
                position: "relative",
                width: 345,
                background: "#e1eacd",
                transition: "transform 0.5s ease-in-out",
                padding: "20px",
                border: "2px solid #355F2E",

                "&:hover": {
                  transform: "scale(1.1)", // يُطبق عند التمرير فوق الكارد
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
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

              <h1 style={{ color: "#355F2E", fontSize: "70px" }}>810$</h1>
              <Typography gutterBottom variant="h6" component="div">
                per month. just $9 per meal!
              </Typography>
              <div>
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
              </div>

              <Button
                variant="contained"
                style={{ width: "70%", marginTop: "10vh" }}
              >
                JJ
              </Button>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
