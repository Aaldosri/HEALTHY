import React from "react";
import Button from "@mui/material/Button";

export default function Header({
  scrollToAbouUs,
  scrollToMeals,
  scrollToPricing,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
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
            fontFamily: "Rubik",

            color: "#355F2E", // اللون الأخضر
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // ظل للنص لإضافة عمق
          }}
        >
          HEALTHY
        </h1>

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
              fontSize: "20px",
              fontFamily: "Rubik-2",
              boxShadow: "none",
              textTransform: "none",
              color: "black",
              transition: "color 0.3s ease", // تأثير التغيير اللوني
            }}
            onClick={scrollToAbouUs}
            onMouseEnter={(e) => {
              e.target.style.color = "#355F2E"; // تغيير اللون عند التمرير
              e.target.style.boxShadow = "none"; // إزالة الظل عند التمرير
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "black"; // إعادة اللون عند الخروج
              e.target.style.boxShadow = "none"; // تأكيد إزالة الظل
            }}
          >
            About Us
          </Button>
          <Button
            className="btn"
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
              color: "black",
              fontFamily: "Rubik-2",

              transition: "color 0.3s ease", // تأثير التغيير اللوني
            }}
            onClick={scrollToMeals}
            onMouseEnter={(e) => (e.target.style.color = "#355F2E")} // تغيير اللون عند التمرير
            onMouseLeave={(e) => (e.target.style.color = "black")} // إعادة اللون عند الخروج
          >
            Meals
          </Button>
          <Button
            className="btn"
            style={{
              marginRight: "30px",
              fontSize: "20px",
              textTransform: "none",
              color: "black",
              fontFamily: "Rubik-2",

              transition: "color 0.3s ease", // تأثير التغيير اللوني
            }}
            onClick={scrollToPricing}
            onMouseEnter={(e) => (e.target.style.color = "#355F2E")} // تغيير اللون عند التمرير
            onMouseLeave={(e) => (e.target.style.color = "black")} // إعادة اللون عند الخروج
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
              background: "#355F2E", // الخلفية ثابتة
              color: "white", // النص أبيض في الخلفية الخضراء
              transition: "color 0.3s ease", // تأثير التغيير اللوني
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
