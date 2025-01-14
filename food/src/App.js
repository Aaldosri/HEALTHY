import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Introduce from "./Introduce";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Introduce />
      </div>
    </div>
  );
}

export default App;
