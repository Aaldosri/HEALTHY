import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Introduce from "./Introduce";
import { Button } from "@mui/material";
import AboutUs from "./AboutUs";
import Container from "@mui/material/Container";
import Meals from "./Meals";
import Pricing from "./Pricing";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div style={{ background: "#e1eacd" }}>
        <Introduce />
      </div>

      <div>
        <Container style={{ marginTop: "120px" }}>
          <span
            style={{
              fontSize: "25px",
              textTransform: "none",
              marginTop: "50px",
              color: "#355F2E",
            }}
          >
            ABOUT US
          </span>
        </Container>
      </div>

      <div>
        <AboutUs />
      </div>

      <div style={{ background: "#e1eacd", paddingTop: "10vh" }}>
        {/* <Container> */}
        <span
          style={{
            fontSize: "25px",
            textTransform: "none",
            color: "#355F2E",
            marginLeft: "160px",
          }}
        >
          MEALS
        </span>
        {/* </Container> */}
      </div>

      <div>
        <Meals />
      </div>

      <div>
        <div style={{ marginTop: "20vh" }}>
          <Container>
            <span
              style={{
                fontSize: "25px",
                textTransform: "none",
                color: "#355F2E",
              }}
            >
              PRICING
            </span>
          </Container>
        </div>
      </div>

      <div>
        <Pricing />
      </div>

      <Footer />
    </div>
  );
}

export default App;
