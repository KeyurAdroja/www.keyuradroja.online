import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="bg-primary short-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <i className="icon arrow_down"></i>
                <a href="img/Keyur_Adroja_CV.pdf" className="text-white" target="_blank">
                  <span className="text-white">
                    Download My CV <i className="icon arrow_down"></i>
                  </span>
                </a>
                <br />
                <br />
                <a href="https://www.facebook.com/keyur.adroja" target="_blank">
                  <i className="icon-facebook text-white" style={{ fontSize: "40px" }}></i>
                </a>

                <a href="https://www.linkedin.com/in/keyur-adroja" target="_blank">
                  {" "}
                  <i className="icon-linkedin text-white" style={{ fontSize: 40 }}></i>{" "}
                </a>
                <a href="https://github.com/KeyurAdroja" target="_blank">
                  {" "}
                  <i className="lni lni-github text-white" style={{ fontSize: 39, display: "block" }}></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
