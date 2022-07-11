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
                  A technically savvy New Zealand resident, with a multiple years of website design and development experience. I can be a strong driving force for improving the performance, front-end
                  problems. I have an experience of working in leading website development companies and of completing challenging client projects. As a self-directed and self-managed person, I am
                  always pushing myself to deliver ongoing process improvements in anything I do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="inline-image-right">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 align-vertical no-align-mobile">
                <h1>Things I enjoy Web/code/UI/API</h1>
                <h6>Because I love Coding</h6>
                <p className="lead" style={{ textAlign: "justify" }}>
                  I have 2+ years experience as a front-end developer and creating responsive template based customised websites of a high quality. In my experience as a web desgner/developer in New
                  Zealand I have obtained an eye for detail and appreciation for design, knowledge of domain, hosting and digital marketing , as well as knowing how to efficiently project manage and
                  work with clients and colleagues successfully. Currently looking for a fulltime job as a frontend development but my knowledge of multiple fields design, development and managing
                  projects allows me to work on a project with the full scope in mind; simplifying the process of our working together and producing a more cohesive experience for your users.
                </p>
              </div>

              <div className="col-sm-6 text-center">
                <img alt="Rotorua trip" className="product-image" src="./Assets/img/devices.jpg" />
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
                    <i className="icon icon-genius"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Tech Skills</h5>
                    <p>
                      Technologies mainly I work with <b>HTML5, CSS3, JavaScript.</b>
                      <br />
                      React tools I'm familier with <b>ReactJs, Express Js, TypeScript, ES6</b>
                      <br />
                      Latest css framework I have used like <b>Bootstrap3, Tailwind</b> <br /> Because of my constant learning nature I have full knowledge of
                      <b> Domain, Hosting,</b>
                      <b> SEO, Digital Marketing,</b>
                      <b> MVC with C#</b>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="feature feature-icon-large">
                  <div className="pull-left">
                    <i className="icon icon-desktop"></i>
                  </div>
                  <div className="pull-right">
                    <h5>Soft Skills</h5>
                    <p>
                      <b>- Managing</b> the team of 4+ members in fast paced industry
                      <br />
                      <b>- Deadline:</b> Priorities jobs by client and due dates/ times
                      <br />
                      <b>- Dedicated:</b> Ensure all files are accurately prepared for next one
                      <br />
                      <b>- Focused:</b> Liaise with the Manager, Team Leader on job scheduling
                      <br />
                      <b>- Communication | - Critical Thinker | - Organized</b>
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
