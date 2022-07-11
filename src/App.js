import Home from "./Pages/Home";
import "./App.css";

import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Navbarnew from "./Pages/Navbarnew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbarnew />
          <div id="page-body">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
