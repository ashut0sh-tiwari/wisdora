import React from "react";
import "./LearningStrategy.css";
import traininganalysis from "../../static/Learning Strategy/Learning-Strategy-_-Learning-Experience-Design-min.jpg";
import curriculumRoadmapDesign from "../../static/Learning Strategy/Learning-Strategy-_-Curriculum-Roadmap-min.jpg";
import contentcuration from "../../static/Learning Strategy/Learning-Strategy-_-Content-Curation-min.jpg";
import newicon1 from "../../static/Learning Strategy/newicon1.png";
import newicon2 from "../../static/Learning Strategy/newicon3.png";
import newicon3 from "../../static/Learning Strategy/newicon4.png";
import newicon4 from "../../static/Learning Strategy/newicon5.png";
import newicon5 from "../../static/Learning Strategy/newicon6.png";
import newicon6 from "../../static/Learning Strategy/newicon7.png";
import contentConversion from "../../static/Learning Strategy/Learning-Strategy-_-Content-Conversion-min.jpg";
import flashtohtml from "../../static/Learning Strategy/img_Flash-To-HTML5-min.jpg";
import Onboarding from "../../static/Learning Strategy/img_Remote-Onboarding-min.jpg";
import measure from "../../static/Learning Strategy/Learning-Strategy-_-Training-Need-Analysis-min.jpg";
import { Link } from "react-router-dom";

const LearningStrategy = () => {
  return (
    <>
      <nav id="learning-strategy" className=" justify-content-centernavbar bg-body-tertiary px-3 mb-3">
        <ul className="nav nav-pills">
          {/* <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading3">
              third
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#learningexperiencedesign">
              fourth
            </a>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="#learningExperienceDesign">
              learningexperiencedesign
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#learningTranformation">
              learningtranformation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#trainingAnalysis">
              traininganalysis
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#curriculumRoadmapDesign">
              curriculumRoadmapDesign
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#contentConversion">
              contentconversion
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#MeasuringandAnalytics">
              
Measuring &
Analytics
            </Link>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#learning-strategy"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >       
        <section
          className="learningexperiencedesign text "
          id="learningExperienceDesign"
        >
          <div>
            <div className="container">
              <div className="row g-5">
                <div className="col-6">
                  <h3>Learning Experience Design</h3>
                  <span className="blue-text">
                    <p>Paced Learning with Ease</p>
                  </span>
                  <p>
                    Learning Experience Design deals with the core of
                    Instructional Design methodologies mixed with a creative,
                    engaging, approach. Our Learning experience is curated
                    keeping a learner’s journey in mind. Tapping the learning
                    touchpoints ensures increased attention span of the learner
                    and more knowledge grasping through visual learning. The
                    desire to deliver exceptional learning for professionals and
                    a top-notch design experience has led to the curation of our
                    interactive learning modules.
                  </p>
                </div>

                <div className="col-6">
                  <h5>benefits of design in learning experience</h5>

                  <ul className="checks ">
                    <li>
                      <p>Emphasizes human-centered learning experiences</p>
                    </li>
                    <li>
                      <p>Ease of access to Learning, zero complexities</p>
                    </li>
                    <li>
                      <p>Increased attention span and understanding</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="learningtransformation text"
          id="learningTranformation"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Learning Transformation</h3>
                <span className="blue-text">
                  <p>
                    Making the transformation from a fresh recruit to a
                    comfortable part of the team. The process is smooth and
                    swift and focuses on profound learning for the mature
                    mindset.
                  </p>
                </span>
                <p>
                  Creating and Compiling a set of transformational strategies
                  with Instructional design concepts that are compatible for the
                  upcoming team to blend in with the business goals
                  effortlessly. We build innovative learning modules around
                  business objectives that young professionals find fascinating
                  and easy to recall. We also ensure smooth learning
                  transformation of the learners with a steeper learning curve.
                  Equipping the budding team with the latest information and
                  tools combined with the knack for practical solutions to a
                  problem turns them into a valuable asset. The transformational
                  learning program is carefully curated to render learners with
                  all levels of learning.
                </p>

                <h5>BENEFITS OF LEARNING TRANSFORMATION</h5>

                <ul className="checks ">
                  <li>
                    <p>Clarity of business objectives</p>
                  </li>
                  <li>
                    <p>Builds a feeling of learning and collaboration</p>
                  </li>
                  <li>
                    <p>Alignment of personal goals with organizational goals</p>
                  </li>
                </ul>
              </div>
              <div className="col-6 ">
                <h4>How can we help you build a learning culture?</h4>
                <div className="row strategy g-5">
                  <div className=" d-flex col-6">
                    <img src={newicon1} alt="" />
                    <p>Introduction to optimised learning strategies</p>
                  </div>
                  <div className=" d-flex col-6">
                    <img src={newicon2} alt="" />
                    <p>Setting accurate learning goals</p>
                  </div>
                  <div className=" d-flex col-6">
                    <img src={newicon3} alt="" />
                    <p>Teamwork activity modules</p>
                  </div>
                  <div className=" d-flex col-6">
                    <img src={newicon4} alt="" />
                    <p>
                      Curation of learning material as per the needs of both
                      i.e. the learner and the business
                    </p>
                  </div>
                  <div className=" d-flex col-6">
                    <img src={newicon5} alt="" />
                    <p>Find a sweet spot between Learning and Engagement</p>
                  </div>
                  <div className=" d-flex col-6">
                    <img src={newicon6} alt="" />
                    <p>
                      Build Assessment modules of transformational learning,
                      check errors and take corrective measures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trainingAnalysis text" id="trainingAnalysis">
          <div className="container">
            <div className="row g-5">
              <div className="col-6">
                <img src={traininganalysis} alt="" />
              </div>
              <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Training Needs Analysis</h3>
                <span className="blue-text">
                  <p>
                    To get rolling with learning modules, Wisdora introduces a
                    TNA process.
                  </p>
                </span>
                <p>
                  The Training Needs Analysis process acts as a warm-up to
                  solutionize the gaps between the learner’s everyday operations
                  and required operations to accommodate expected organizational
                  goals.
                </p>

                <ul className="steplist">
                  <li className="steps ">
                    <span className="stepnumber">Step 1:</span>
                    <h3>Understanding Business Goals</h3>
                    <p>
                      Taking into consideration your culture, workflows and
                      business objectives, we talk to C-suite people and
                      understand what we need to achieve with our training
                      courses aligned with business goals.
                    </p>
                  </li>
                  <li className="steps  stepsconnect">
                    <span className="stepnumber">Step 2:</span>
                    <h3>Studying your Current Learning Journey</h3>
                    <p>
                      Figuring out the deliverables in the current training plan
                      company follows, we find what are the obstacles in
                      achieving what is required, what topic, processes, and
                      frameworks are being taken up for learning and how well
                      does that satisfy the business requirement.
                    </p>
                  </li>
                  <li className="steps  stepsconnect">
                    <span className="stepnumber">Step 3:</span>
                    <h3>Influencer Identification</h3>
                    <p>
                      Identifying an influencer such as Team Leads, C-suite
                      people gather information about the synergy of the teams,
                      and what activities and technologies are usually
                      preferred, and a person who has a hold of opinion in the
                      team and is directly or indirectly looked up to and also
                      falls in the category for the most desired behaviour.
                    </p>
                  </li>
                  <li className="steps stepsconnect">
                    <span className="stepnumber">Step 4:</span>
                    <h3>Create Learning & Assessment Plan</h3>
                    <p>
                      With all the required details in our hands and after
                      having a know-how of all the factors that can affect the
                      training and its outcome, we build a learning journey
                      integrating real-time problem solving, fit for achieving
                      the desired behaviour and work ethic. We develop an
                      assessment plan that aligns with your overall business
                      strategy to shortlist what is specifically required which
                      helps to track the gaps between goals and actual learning
                      performance which clearly set new goals for making
                      progress.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="curriculumRoadmapDesign text"
          id="curriculumRoadmapDesign"
        >
         <div className="container">
         <div className="row g-5">
              <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Curriculum Roadmap & Design</h3>
                <span className="blue-text">
                  <p>A Competitive landscape helps everyone to grow!</p>
                </span>
                <p>
                  We understand that Modern Companies require Modern Solutions.
                  Today’s dynamic and evolving social environment requires
                  mental stimulation for employees to learn and grow. As you
                  blink your eyes, the competition grows tougher. We imbibe a
                  mentally stimulating approach in our methodologies of
                  instructional design to drive maximum retention and poignant
                  change.
                </p>

                <h5>BENEFITS OF CURRICULUM ROADMAP & DESIGN</h5>

                <ul className="checks ">
                  <li>
                    <p>Builds indispensable employee skills</p>
                  </li>
                  <li>
                    <p>Path of Learning is simple and clear</p>
                  </li>
                  <li>
                    <p>Learning is collaborative and measurable</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <img src={curriculumRoadmapDesign} alt="" />
              </div>
            </div>
         </div>
           
        
        </section>

        <section className="trainingAnalysis text" id="trainingAnalysis">
          <div className="container">
            <div className="row g-5">
              <div className="col-6">
                <img src={contentcuration} alt="" />
              </div>
              <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Custom Content development</h3>
                <span className="blue-text">
                  <p>
                    Curation of Module Content as the same degree of Learning.
                  </p>
                </span>
                <p>
                  Creating Custom Content for the learner empowers the learner
                  to make the best use of his/her brain, memory, skill, &
                  reasoning. We believe in a Customisable Content Development
                  process under 5 steps that are,
                </p>

                <ul className="steplist">
                  <li className="steps ">
                    <span className="stepnumber">Step 1:</span>
                    <h3>Analyze & Design:</h3>
                    <p>
                      The Content coverage is verified with SMEs and the course
                      structure is finalized. Instructional Goals & objectives
                      are established and high-level design is framed.
                    </p>
                  </li>
                  <li className="steps  stepsconnect">
                    <span className="stepnumber">Step 2:</span>
                    <h3>Story Boarding:</h3>
                    <p>
                      This phase deals with executing design strategy on content
                      and drafting course modules. Instructional Designers draft
                      course modules with final text and media.
                    </p>
                  </li>
                  <li className="steps  stepsconnect">
                    <span className="stepnumber">Step 3:</span>
                    <h3>Media Development:</h3>
                    <p>
                      Media development deals with the fun & creative phase,
                      where storyboards are transformed into rich and engaging
                      media screens.
                    </p>
                  </li>
                  <li className="steps stepsconnect">
                    <span className="stepnumber">Step 4:</span>
                    <h3>Audio Integration:</h3>
                    <p>
                      Audio adds life to an e-course. The recording for courses
                      is done by professional Voiceover artists and synced with
                      course media for a long-lasting impact.
                    </p>
                  </li>
                  <li className="steps stepsconnect">
                    <span className="stepnumber">Step 4:</span>
                    <h3>UAT & Sign-off:</h3>
                    <p>
                      After developing a course for a company, the final stage
                      is where the course is tested on a deployment platform to
                      ensure tracking of required parameters.
                    </p>
                  </li>
                </ul>
                

                <h5>BENEFITS OF CUSTOM CONTENT DEVELOPMENT</h5>

                  <ul className="checks ">
                    <li>               
                      <p>Personalized Learning</p>
                    </li>
                    <li>
                      <p>Accessibility of learning material
</p>
                    </li>
                    <li>
                      <p>Enhancement of Training Standards</p>
                    </li>
                  </ul>
               
              </div>
              </div>
            </div>
       
        </section>
        <section className=" contentConversion text" id="contentConversion"> 
            <div className="container">
            <h3 >Content Conversion</h3>
        <div className="accordion " id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Conversion Strategy
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                
                    <div className="row g-5 text">
                      <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                        
                        <span className="blue-text">
                          <p>
                          Learning in an Interactive and Impactful way!
                          </p>
                        </span>
                        <p>
                        If you already have your training goals set and content modules ready for the new team members, it’s important to equip them with the latest learning material design with the latest methodologies as obsolete learning material excites no one! Wisdora recreates your previous courses as Interactive learning modules for greater retention of knowledge in learners. Inclusive of latest trends such as Netflix-style trailers, gamification and heightened design experience for smooth transfer of Information.
                        </p>

                        <h5>BENEFITS OF CONTENT CONVERSION</h5>

                        <ul className="checks">
                          <li>
                            <p>
                            Information becomes relatable and adaptable
                            </p>
                          </li>
                          <li>
                            <p>Transforming dated material to engaging</p>
                          </li>
                          <li>
                            <p>Business goals are easy to understand</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                      <img src={contentConversion} alt="" />
                      </div>
                    </div>
                  
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Flash to HTML
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <div className="row g-5 text">
                      <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                        
                        <span className="blue-text">
                          <p>
                          Got Flash? No worries we have HTML translating service too!
                          </p>
                        </span>
                        <p>
                        After Adobe Flash goes off the record, Your last course should not go in vain, so we came up with the recent popular service of translating Flash learning material to HTML.
                        <br/>
                        <br/>
Our Flash to HTML5 solutions include unlimited access to the most highly-skilled eLearning developers, instructional designers, and content conversion specialists in the industry—skilled in the latest development tools, as well as learning technologies and techniques.
                        </p>

                        <h5>BENEFITS OF CONVERTING TO HTML5</h5>

                        <ul className="checks">
                          <li>
                            <p>
                            Produces courses that are visually appealing, responsive and interactive
                            </p>
                          </li>
                          <li>
                            <p>Allows faster development and program to run in the new environment</p>
                          </li>
                          <li>
                            <p>Provides the ability to make agilechanges to design, user interfaces, graphics and content</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                      <img src={flashtohtml} alt="" />
                      </div>
                    </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Onboarding never stops! 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
              <div className="row g-5 text">
                      <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                        
                        <span className="blue-text">
                          <p>
                          Learning in an Interactive and Impactful way!
                          </p>
                        </span>
                        <p>
                        If you already have your training goals set and content modules ready for the new team members, it’s important to equip them with the latest learning material design with the latest methodologies as obsolete learning material excites no one! Wisdora recreates your previous courses as Interactive learning modules for greater retention of knowledge in learners. Inclusive of latest trends such as Netflix-style trailers, gamification and heightened design experience for smooth transfer of Information.
                        </p>

                        <h5>BENEFITS OF CONTENT CONVERSION</h5>

                        <ul className="checks">
                          <li>
                            <p>
                            Information becomes relatable and adaptable
                            </p>
                          </li>
                          <li>
                            <p>Transforming dated material to engaging</p>
                          </li>
                          <li>
                            <p>Business goals are easy to understand</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                      <img src={Onboarding} alt="" />
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
            </div>
       
        </section>
      
        <section
          className="MeasuringandAnalytics text"
          id="MeasuringandAnalytics"
        >
         <div className="container">
         <div className="row g-5">
            <div className="col-6">
                <img src={measure} alt="" />
              </div>
              <div className="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>
Measuring &
Analytics</h3>
                <span className="blue-text">
                  <p>Being result-driven can make analysis and assessment easier!</p>
                </span>
                <p>
                Our Learning Management System comes with an easy and accessible assessment analysis. During the testing of our instructional design modules, we check the assessment measurability of our metrics and redefine them until the desired outcome.
                </p>

                <h5>BENEFITS OF MEASURING & ANALYTICS</h5>

                <ul className="checks ">
                  <li>
                    <p>Showcase results and outputs of the training module</p>
                  </li>
                  <li>
                    <p>Employee assessment</p>
                  </li>
                  <li>
                    <p>Represent impact on business goals</p>
                  </li>
                </ul>
              </div>
              
            </div>
        
         </div>
            
        </section>
      </div>
    </>
  );
};

export default LearningStrategy;
