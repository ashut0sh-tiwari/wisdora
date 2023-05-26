import React, { useState } from "react";

import elearning from "../../static/Learning Solutions/Learning-Solutions-_-eLearning.png";
import virtual1 from "../../static/Learning Solutions/Learning-Solutions-Virtual-Learning-2.png";
import virtual2 from "../../static/Learning Solutions/Learning-Solutions-Virtual-Learning-3.png";
import virtual3 from "../../static/Learning Solutions/Learning-Solutions-Virtual-Learning-5.png";
import virtual4 from "../../static/Learning Solutions/Learning-Solutions-Virtual-Learning-6.png";
import LearningStrategyHeader from "../Learning Strategy/StickyNav";

const LearningSolutions = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <>
      <LearningStrategyHeader handleSectionChange={handleSectionChange} />
      <nav
        id="learning-strategy"
        class="navbar justify-content-center bg-body-tertiary px-3 mb-3"
      >
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#elearning">
              elearning
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#virtualLearning">
              Virtual Learning
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#blendedLearning">
              Blended Learning
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#mobileLearning">
              Mobile Learning
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experientialLearning">
              Experiential Learning
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
        <section className="elearning text" id="elearning">
          <div className="container">
            <div class="row g-5">
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>eLearning</h3>
                <span className="blue-text">
                  <p>Pre-recorded Learning</p>
                </span>
                <p>
                  Missing out on important points provided by the Instructor is
                  a common issue we come across. How Wisdora creates learning
                  modules for a learner's understanding of topics will leave you
                  bespoke. Focus is always on the objectives that are important
                  for your business conjoined with dynamic design and
                  well-thought theoretical content. We plan our modules with
                  Netflix-style trailers, animated videos, simulations, and
                  mobile learning. Consistency of learning is ensured through
                  eLearning videos.
                </p>

                <h5>BENEFITS OF ELEARNING</h5>

                <ul className="checks ">
                  <li>
                    <p>Variety of content coverage</p>
                  </li>
                  <li>
                    <p>Easily accessible</p>
                  </li>
                  <li>
                    <p>Less pressure on the Instructor</p>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <img src={elearning} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="virtualLearning text" id="virtualLearning">
          <div className="container">
            <div class="row g-5">
              <div class="col-6">
                <img src={virtual1} alt="" />
              </div>
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>
                  Virtual Learning <br />
                  (live lecture)
                </h3>
                <span className="blue-text">
                  <p>
                    “The average human has an attention span of just 8.25
                    seconds” we all have heard this, haven’t we?
                  </p>
                </span>
                <p>
                  Virtual Learning (live lecture) “The average human has an
                  attention span of just 8.25 seconds” we all have heard this,
                  haven’t we? A Learner’s mind is as fickle as a goldfish unless
                  backed by a strong concentration level. Virtual Learning
                  captures the attention as it a real-time connection keeps the
                  learner engaged with what’s happening and with a curiosity to
                  learn with peers and collaboration. The emphasis can be put
                  onto points that might be missed in e-learning.
                </p>

                <h5>BENEFITS OF VIRTUAL LEARNINGS</h5>

                <ul className="checks ">
                  <li>
                    <p>Connect with Peers and Teachers</p>
                  </li>
                  <li>
                    <p>Better Interaction and Collaboration</p>
                  </li>
                  <li>
                    <p>Self-Assessment and Focus</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="blendedLearning text" id="blendedLearning">
          <div className="container">
            <div class="row g-5">
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Blended Learning</h3>
                <span className="blue-text">
                  <p>We know you want it all!</p>
                </span>
                <p>
                  Wishing to break the monotony, we bring to you a good
                  combination of virtual learning, e-learning, and online
                  classrooms, off-the-shelf courses that never hurt a company.
                  It’s like the favourite subject lectures we all happily attend
                  because of the unpredictability of what may come. Human brains
                  are wired to have regime changes. New challenges and processes
                  bring out the best in your learners’ capabilities.
                </p>

                <h5>BENEFITS OF BLENDED LEARNING</h5>

                <ul className="checks ">
                  <li>
                    <p>Introduction to new Tricks and Techniques</p>
                  </li>
                  <li>
                    <p>Multi-aspect Learning</p>
                  </li>
                  <li>
                    <p>Maintains enthusiasm and interest</p>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <img src={virtual2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="mobileLearning text" id="mobileLearning">
          <div className="container">
            <div class="row g-5">
              <div class="col-6">
                <img src={virtual3} alt="" />
              </div>
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>
                  Mobile Learning <br /> (Video Learning)
                </h3>

                <p>
                  The introduction of videos in the learning industry has been
                  far-stretched. We create solutions according to the adaptation
                  of the new learners' mindset and storytelling courses that
                  generate a response in our learners where learners feel
                  connected and have clarity on doubts. We provide byte-sized,
                  small learning nuggets, learning apps, and best-in-class
                  design to deliver most of our learnings at the handy and
                  preferred medium, Mobile
                </p>

                <h5>BENEFITS OF BLENDED LEARNING</h5>

                <ul className="checks ">
                  <li>
                    <p>Introduction to new Tricks and Techniques</p>
                  </li>
                  <li>
                    <p>Multi-aspect Learning</p>
                  </li>
                  <li>
                    <p>Maintains enthusiasm and interest</p>
                  </li>
                  <li>
                    <p>Maintains enthusiasm and interest</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="experientialLearning text"
          id="experientialLearning"
        >
          <div className="container">
            <div class="row g-5">
              <div class="col-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3>Experiential Learning</h3>

                <p>
                  Being exposed to an environment one can naturally achieve
                  unconscious assimilation of ideas, knowledge, and even
                  technical skills. The real-world experiences, with community,
                  within the workplace can help a learner enhance themselves
                  with a set example and a clear direction of what it takes to
                  build the strategies, and stay on track with goals.
                  Accumulation of learnings based on your experiences helps
                  learners to crack real-world problems. Exposure to real life
                  scenario through stimulation.
                </p>

                <h5>BENEFITS OF EXPERIENTIAL LEARNING</h5>

                <ul className="checks ">
                  <li>
                    <p>Environment of Osmosis</p>
                  </li>
                  <li>
                    <p>Problem-Solving Skills</p>
                  </li>
                  <li>
                    <p>Virtual Reality based on real problems journey</p>
                  </li>
                  <li>
                    <p>Builds a learning journey</p>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <img src={virtual4} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningSolutions;
