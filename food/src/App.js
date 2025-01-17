import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Introduce from "./Introduce";
import { Button } from "@mui/material";
import AboutUs from "./AboutUs";
import Container from "@mui/material/Container";
import Meals from "./Meals";

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

      <div>
        <Container style={{ marginTop: "30vh" }}>
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
        <Meals />
      </div>
    </div>
  );
}

export default App;
