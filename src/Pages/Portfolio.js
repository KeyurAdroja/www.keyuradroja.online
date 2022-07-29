import React from 'react';

function Portfolio() {
  return (
    <>
      <div className='main-container'>
        <section className='no-pad-bottom projects-gallery'>
          <div className='projects-wrapper clearfix'>
            <div className='container'>
              <div className='project-container column-projects'>
                <div className='col-md-6 col-sm-6 project print image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_3.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>WASTEX, Auckland </h3>
                      <a
                        href='http://wastex.co.nz'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-sm-6 project print image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_4.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>Website CV</h3>
                      <a
                        href='http://www.keyuradroja.online/Portfolio'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 col-sm-6 project development image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_11.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>
                        Auckland Building Reports, Auckland
                      </h3>
                      <a
                        href='http://abr.co.nz'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 col-sm-6 project development image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_6.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>
                        Revive Hair & Beauty, Auckland
                      </h3>
                      <a
                        href='http://www.revivebeautyhair.co.nz/'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-sm-6 project development image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_10.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>
                        Employment Dispute Solutions, Auckland
                      </h3>
                      <a
                        href='http://www.employmentdisputesolutions.co.nz/'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6 project development image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_8.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>Plumbfirst, Auckland</h3>
                      <a
                        href='http://www.plumbfirst.co.nz/'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6 project development image-holder'>
                  <div className='background-image-holder'>
                    <img
                      className='background-image'
                      alt='Background Image'
                      src='./Assets/img/project_9.jpg'
                    />
                  </div>
                  <div className='hover-state'>
                    <div className='align-vertical'>
                      <h3 className='text-white'>Food Safe, Auckland</h3>
                      <a
                        href='http://foodsafe.co.nz/'
                        target='_blank'
                        className='btn btn-primary btn-white'
                        rel='noopener noreferrer'
                      >
                        See Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pure-text-contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center'>
                <span className='sub alt-font'>Do you like my works?</span>
                <h1>
                  <span>So let's talk about your business needs!</span>
                  <br />
                  <span className='sub alt-font'>
                    I am looking for full time job!
                  </span>
                </h1>
                <i className='icon icon-chat'></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;
