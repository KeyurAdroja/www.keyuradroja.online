import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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

                  <li>
                    <Link to="/Contact">Contact</Link>
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

      <div className="main-container">
        <section className="map-overlay">
          <div className="map-holder">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7506270746735!2d174.76000231529125!3d-36.84844797993865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f06d4bdc25%3A0x2d1b5c380ad9387!2sSky+Tower!5e0!3m2!1sen!2snz!4v1533289446935"></iframe>
          </div>
        </section>
      </div>

      <div className="footer-container">
        <footer className="bg-primary short-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p className="lead">
                  Email: keyur.adroja@gmail.com | Cell: +64 210 840 4240
                  <br />
                  <br />
                  <a href="https://www.facebook.com/keyur.adroja" target="_blank">
                    <i className="icon-facebook" style={{ fontSize: "40px" }}></i>
                  </a>
                  <a href="https://www.linkedin.com/in/keyur-adroja" target="_blank">
                    {" "}
                    <i className="icon-linkedin" style={{ fontSize: "40px" }}></i>{" "}
                  </a>
                  <a href="https://github.com/KeyurAdroja" target="_blank">
                    {" "}
                    <i className="lni lni-github" style={{ fontSize: 39 }}></i>
                  </a>
                </p>
                <a href="img/Keyur_Adroja_CV.pdf" className="text-white" target="_blank">
                  <span className="text-white">
                    <i className="icon arrow_down"></i> Download My CV <i class="icon arrow_down"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
