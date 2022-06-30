import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="main-container">
        <section className="pure-text-centered">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <strong>A little information about me</strong>
                </h1>
                <p className="lead" style={{ textAlign: "justify" }}>
                  A technically savvy New Zealand resident, with a multiple years of website design and development experience. I can be a strong driving force for improving the performance,
                  scalability and reliability of development projects. I have a long track record of creating dynamic, rich and interesting web portals, and of providing long term solutions to
                  front-end problems. I have an experience of working in leading website development companies and of completing challenging client projects. As a self-directed and self-managed
                  person, I am always pushing myself to deliver ongoing process improvements in anything I do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="inline-image-right">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 align-vertical no-align-mobile">
                <h1>Things I enjoy web/design/print/sign</h1>
                <h6>Because I love Branding</h6>
                <p className="lead">
                  I have 2+ years experience as a front-end developer and creating responsive templayte based customised websites of a high quality. In my experience as a web desgner/developer in New
                  Zealand I have obtained an eye for detail and appreciation for design, knowledge of domain and hosting , as well as knowing how to efficiently project manage and work with clients
                  and colleagues successfully. I now doing fulltime job as a front-end development but my knowledge of multiple fields design/print/Signage allows me to work on a project with the full
                  scope in mind; simplifying the process of our working together and producing a more cohesive experience for your users.
                </p>
              </div>

              <div className="col-sm-6 text-center">
                <img alt="Product Image" className="product-image" src="./Assets/img/devices.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="duplicatable-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>A few key skills, you need to know</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="feature feature-icon-large">
                  <div className="pull-left">
                    <i className="icon icon-desktop"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Web development</h5>
                    <p>
                      Technologies mainly I work with <b>HTML5/CSS3/Java Script.</b>
                      Latest framework I have used like <b>Bootstrap, Angular,scss, less</b>
                      Along with that Ive completed some of the projects in <b>MVC with C#, third party CMS, Web view mobile app design</b>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="feature feature-icon-large">
                  <div className="pull-left">
                    <i className="icon icon-genius"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Graphics Design</h5>
                    <p>
                      For the graphics design mainly I use <b>photoshop and Corel draw</b>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="feature feature-icon-large">
                  <div className="pull-left">
                    <i className="icon icon-global"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Domain - Hosting</h5>
                    <p>
                      Because of my constant learning nature I have full knowledge of <b>domain registration, web hosting, ftp transfer and Server</b> related stuffs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="feature feature-icon-large">
                  <div className="pull-left">
                    <i className="icon icon-gears"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Printing - Signage</h5>
                    <p>
                      As customer needs branding, so I am very good in logo design - printing and sign desing, processing and finalise products. Familier with
                      <b> roland versaworks, flexi Sign, digital printer, fiery software, printing, cutting, fiishing and customer handling.</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
