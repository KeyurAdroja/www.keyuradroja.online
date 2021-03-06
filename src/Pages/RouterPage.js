import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Navbarnew from "./Navbarnew";

const RouterPage = () => {
  return (
    <>
      {" "}
      <Navbarnew />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouterPage;
