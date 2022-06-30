import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="simple-bar top-bar">
          <div className="container">
            <div className="row nav-menu">
              <div className="col-md-3 col-sm-3 columns">
                <a href="index.html" />
                <img className="logo logo-dark" alt="Logo" src="./Assets/img/logotype_dark.png" />
              </div>

              <div className="col-md-9 col-sm-9 columns text-right">
                <ul className="menu">
                  <a></a>

                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About Me</Link>
                  </li>
                  <li>
                    <Link to="/Portfolio">Portfolio</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mobile-toggle">
              <i className="icon icon_menu"></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
