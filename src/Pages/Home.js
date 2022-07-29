import React from 'react';

const Home = () => {
  return (
    <>
      <div className='main-container'>
        <div className='header-icons overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <h1 className='text-white'>
                  Hello, I'm Keyur Adroja
                  <br />
                  Looking for a <span>Junior React Developer role.</span>
                </h1>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-3'>
                <i className='icon icon-desktop text-white'></i>
                <h2 className='text-white'>UI/UX Designer</h2>
              </div>

              <div className='col-sm-3'>
                <i className='icon icon-genius text-white'></i>
                <h2 className='text-white'>Web/Frontend Developer</h2>
              </div>

              <div className='col-sm-3'>
                <i className='icon text-white icon-global'></i>
                <h2 className='text-white'>Digital Marketing</h2>
              </div>
              <div className='col-sm-3'>
                <i className='icon text-white icon-target'></i>
                <h2 className='text-white'>Project Management</h2>
              </div>
            </div>
          </div>
        </div>

        <section className='skill-bars'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center'>
                <h1>My skills</h1>
                <p className='lead'>
                  A highly experienced and creative web developer with two years
                  of experience in a variety of exciting projects. A level head
                  and rational approach to problem solving combined with a
                  passion for innovative and fresh ideas has led to a portfolio
                  of impressive website solutions.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <div className='skills-left skills'>
                  <h3>Soft Skills</h3>
                  <ul className='skills-ul'>
                    <li>
                      <span>Team-player: who can also work independently</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-11'></div>
                      </div>
                    </li>
                    <li>
                      <span>Time-conscious | Detail-oriented | Organized</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-11'></div>
                      </div>
                    </li>
                    <li>
                      <span>Confident | Articulate | Professional</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-10'></div>
                      </div>
                    </li>
                    <li>
                      <span> Leadership | Creative </span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-11'></div>
                      </div>
                    </li>{' '}
                    <li>
                      <span>Cross-cultural Competency</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-11'></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-6 col-sm-12'>
                <div
                  className='skills-right skills'
                  style={{ textAlign: 'initial' }}
                >
                  <h3>Developing</h3>
                  <ul className='skills-ul'>
                    <li>
                      <span>HTML,CSS, JavaScript(ES6), JSX</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-10'></div>
                      </div>
                    </li>

                    <li>
                      <span>TypeScript, Babel, NPM, Git, </span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-9'></div>
                      </div>
                    </li>

                    <li>
                      <span>Bootstrap, Tailwind CSS Framework</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-9'></div>
                      </div>
                    </li>
                    <li>
                      <span>
                        Working knowledge of AWS, Microsoft Azure, and basic
                        testing tools
                      </span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-6'></div>
                      </div>
                    </li>
                    <li>
                      <span>MVC Framework with c#</span>
                      <div className='skill-bar-holder'>
                        <div className='skill-capacity col-xs-6'></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className='col-md-12 col-sm-12'>
                <ul className='skills-ul'>
                  <li>
                    <br />
                    <span>Project Management</span>
                    <div className='skill-bar-holder'>
                      <div className='skill-capacity col-xs-11'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='no-pad-bottom projects-gallery'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center'>
                <h1>Check out few projects I've worked on</h1>
                <p className='lead'>
                  With a varies experience in website development , graphics
                  desing and sign installation. Please have a look below to see
                  some of the completed projects while working in A1 Solutions,
                  Auckland.
                </p>
              </div>
            </div>
          </div>
          <div className='projects-wrapper clearfix'>
            <div className='projects-container'>
              <div className='col-md-6 col-sm-12 no-pad project print image-holder'>
                <div className='background-image-holder'>
                  <img
                    className='background-image'
                    alt='Background Image'
                    src='./Assets/img/project_3.jpg'
                  />
                </div>
                <div className='hover-state'>
                  <div className='align-vertical'>
                    <h1 className='text-white'>
                      <span>http://wastex.co.nz</span>
                    </h1>
                    <p className='text-white'>
                      Auckland based Demolition&nbsp;Waste Removal company
                    </p>
                    <a
                      href='http://wastex.co.nz'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-primary btn-white'
                    >
                      See Project
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-md-6 col-sm-12 no-pad project branding image-holder'>
                <div className='background-image-holder'>
                  <img
                    className='background-image'
                    alt='Background Image'
                    src='./Assets/img/project_4.jpg'
                  />
                </div>
                <div className='hover-state'>
                  <div className='align-vertical'>
                    <h1 className='text-white'>
                      <strong>http://www.keyuradroja.online/</strong>
                    </h1>
                    <p className='text-white'>
                      Website CV converted in React from HTML
                    </p>
                    <a
                      href='http://bacio.co.nz/'
                      target='_blank'
                      className='btn btn-primary btn-white'
                      rel='noopener noreferrer'
                    >
                      See Project
                    </a>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </section>
        <section>
          <div className='col-md-12' style={{ textAlign: 'center' }}>
            <a href='./portfolio' className='link-text' target='_self'>
              MORE PROJECTS
            </a>
          </div>
        </section>
        <section className='timeline-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center'>
                <h1>
                  <i>Every expert was once a beginner!</i>
                </h1>
                <p className='lead'>
                  <i></i>
                  Started as a graphics designer with passion and constant
                  learning moved on adaptive website developing and designing.
                  With the market trends and egarness to learn new technologies
                  I learned responsive mobile driven websites using frontend
                  framework and tools i.e. ReactJs, Bootstrap, Mvc with C#.
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-12'>
                <div className='timeline-event'>
                  <div className='col-sm-6 col-md-push-6'>
                    <h2>2020 - 2021</h2>
                    <h5>
                      Production Manager & IT Support
                      <br />
                      Powerpac Group, Wellington
                    </h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-map'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6 col-md-pull-6'>
                    <p>
                      To carry out design of customer signage orders to the
                      framework & guidelines of Powerpac's design & file system,
                      ensure the print production team has all relevant files,
                      jobs & information prior to work.
                      <br />
                      <b>
                        #Customer Chasing #Quote #Invoicing #Completion of Job
                        #Stock Management #Stock Order #Meeting with Sales
                        visitors.
                      </b>
                    </p>
                  </div>
                </div>
                <div className='timeline-event'>
                  <div className='col-sm-6'>
                    <h2>2018-2020</h2>
                    <h5>
                      Pre press rip software technician
                      <br />
                      Torque Digital, Auckland
                    </h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-focus'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Manage the RIP (Raster Image Processor) phase of Torque
                      Digital's print production with an accurate and timely
                      approach and ensure all roles involved in the process are
                      effectively communicated with.
                    </p>
                  </div>
                </div>

                <div className='timeline-event'>
                  <div className='col-sm-6 col-md-push-6'>
                    <h2>2016 - 2018</h2>
                    <h5>
                      Website Designer/Developer
                      <br />
                      A1 Solutions Ltd, Auckland
                    </h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-focus'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6 col-md-pull-6'>
                    <p>
                      Joined as an intern and promoted rapidly through a series
                      of increasingly responsible role as a website designer and
                      developer, Responsible for participating in the full life
                      cycle of new website development projects, and for
                      implement and maintaining best practice procedures in all
                      areas of work. Also in charge of writing, developing and
                      managing the content of websites.
                    </p>
                  </div>
                </div>

                <div className='timeline-event'>
                  <div className='col-sm-6'>
                    <h2>2014-2016</h2>
                    <h5>
                      2+ years All round Experience in - Design <br /> - Web
                      development - CustomerService
                    </h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-focus'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Web developer, with a multiple years of{' '}
                      <b> "website design/development - with branding" </b>{' '}
                      experience. I can be a strong driving force for improving
                      the performance, scalability and reliability of
                      development projects.
                    </p>
                  </div>
                </div>

                <div className='timeline-event'>
                  <div className='col-sm-6 col-md-push-6'>
                    <h2>2013-2014</h2>
                    <h5>Diploma in IT - Level 7 </h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-trophy'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6 col-md-pull-6'>
                    <p>
                      In Year 2013, came from India and started study in Ntec,
                      Auckland, <br /> major in subject software development.
                    </p>
                  </div>
                </div>

                <div className='timeline-event'>
                  <div className='col-sm-6'>
                    <h2>2008 - 2012</h2>
                    <h5>Bachelor in computer science</h5>
                  </div>

                  <div className='middle'>
                    <i className='icon icon-target'></i>
                    <div className='vertical-line'></div>
                  </div>

                  <div className='col-sm-6'>
                    <p>
                      Completed graduation from Arya college of engineering,
                      Jaipur, India in <br /> Computer Science Engineering.
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

export default Home;
