import React from 'react'
import check from '../../static/Learning Strategy/blueright.svg'
import traininganalysis from '../../static/Learning Strategy/Learning-Strategy-_-Learning-Experience-Design-min.jpg'
import lms from '../../static/Learning Platform/Learning-Platforms-_-LMS.png'
import lxp from '../../static/Learning Platform/Learning-Platforms-_-LXP.png'
import vcvl from '../../static/Learning Platform/Learning-Platforms-_-Virtual-Conferencing-_-Virtual-Learning.png'

const LearningPlatforms = () => {
  return (
    <>
    <nav id="learning-strategy" class="navbar justify-content-center bg-body-tertiary px-3 mb-3">
        <ul class="nav nav-pills">
        
          <li class="nav-item">
            <a class="nav-link" href="#lms">
              LMS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#lxp">
             
LXP
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#VideoConferencingandVirtualLearning">
            Video Conferencing & Virtual Learning
            </a>
          </li>
       
         
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#learning-strategy"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >       
       

        <section
          className="lms text"
          id="lms"
        >
         <div className="container">
         <div class="row g-5">
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Learning Management System (LMS)</h3>
                <span className="blue-text">
                  <p>Learning Management System technology is complicated. Our industry experts are here to help you make the right decisions.</p>
                </span>
                <p>
                An end-to-end software solutions and learning experiences through Learning Management Systems Technology we create an innovative platform for your company by providing advice and rendering solutions from hosting to training. The system can be designed as per the desired structure
                </p>
                <span className="blue-text">
                  <p>F&F Launch</p>
                </span>
                <p>
                Our Fast & Furious launch makes up for recruiting delays and provides quick training to onboard new team members with our pre-built courses at per industries.
                </p>

               
              </div>
              <div class="col-6">
                <img src={lms} alt="" />
              </div>
            </div>
        
         </div>
           
        </section>
        <section
          className="lxp text"
          id="lxp"
        >
         <div className="container">
         <div class="row g-5">
            <div class="col-6">
                <img src={lxp} alt="" />
              </div>
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Learning Management System (LMS)</h3>
                <span className="blue-text">
                  <p>Learning Management System technology is complicated. Our industry experts are here to help you make the right decisions.</p>
                </span>
                <p>
                An end-to-end software solutions and learning experiences through Learning Management Systems Technology we create an innovative platform for your company by providing advice and rendering solutions from hosting to training. The system can be designed as per the desired structure
                </p>
                <span className="blue-text">
                  <p>F&F Launch</p>
                </span>
                <p>
                Our Fast & Furious launch makes up for recruiting delays and provides quick training to onboard new team members with our pre-built courses at per industries.
                </p>

               
              </div>
              
            </div>
         </div>
            
        
        </section>        
        <section
          className="VideoConferencingandVirtualLearning text"
          id="VideoConferencingandVirtualLearning"
        >
         <div className="container">
         <div class="row g-5">
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Learning Management System (LMS)</h3>
                <span className="blue-text">
                  <p>Learning Management System technology is complicated. Our industry experts are here to help you make the right decisions.</p>
                </span>
                <p>
                An end-to-end software solutions and learning experiences through Learning Management Systems Technology we create an innovative platform for your company by providing advice and rendering solutions from hosting to training. The system can be designed as per the desired structure
                </p>
                <span className="blue-text">
                  <p>F&F Launch</p>
                </span>
                <p>
                Our Fast & Furious launch makes up for recruiting delays and provides quick training to onboard new team members with our pre-built courses at per industries.
                </p>

               
              </div>
              <div class="col-6">
                <img src={vcvl} alt="" />
              </div>
            </div>
         </div>
         
        
        </section>

       
       
      </div>
    </>
  )
}

export default LearningPlatforms