import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Typewriter from "typewriter-effect";
import heroVideo from "../../static/Home/index_video.mp4";
import wwd1 from "../../static/Home/values-1.png";
import wwd2 from "../../static/Home/values-2.png";
import wwd3 from "../../static/Home/values-3.png";
import athenaHealth from "../../static/Home/athena health.png";
import ioraHealth from "../../static/Home/iorahealth.png";
import partnersHealth from "../../static/Home/partners healthcare.png";
import syneosHealth from "../../static/Home/syneos health.png";
import travelers from "../../static/Home/travelers.png";
import libertyMutual from "../../static/Home/liberty mutual.png";
import santander from "../../static/Home/santander.png";
import avantax from "../../static/Home/avantax.png";
import vmware from "../../static/Home/vmware.png";
import omd from "../../static/Home/omd.png";
import raytheon from "../../static/Home/raytheon.png";
import dellEmc from "../../static/Home/dellemc.png";
import thermoFisher from "../../static/Home/thermo fisher.png";
import alnylam from "../../static/Home/alnylam.png";
import vertex from "../../static/Home/vertex.png";
import steward from "../../static/Home/steward.png";
import amazon from "../../static/Home/amazon.png";
import newBalance from "../../static/Home/new balance.png";
import canes from "../../static/Home/canes.png";
import staples from "../../static/Home/staples.png";
import unifirst from "../../static/Home/UniFirst-new.png";
import coghlin from "../../static/Home/Coghlin-new.png";
import generalMills from "../../static/Home/GeneralMills-new.png";
import americanTower from "../../static/Home/AmericanTower-new.png";
import boston from "../../static/Home/boston university.png";
import snhu from "../../static/Home/snhu.png";
import babson from "../../static/Home/babson-2.png";
import ohiostate from "../../static/Home/ohiostate.png";
import thenewEngland from "../../static/Home/New england.png";
import pathfinder from "../../static/Home/pathfinder_228.png";
import americanRedcross from "../../static/Home/American_redcross03.png";
import ons from "../../static/Home/ons.png";
import wwwu from "../../static/Home/business_img.jpg";

import customsol from "../../static/Home/customsolution.png";
import emergingtech from "../../static/Home/emergingtech.png";
import ldstaff from "../../static/Home/l&dstaff.png";
import NavBar from "../Header";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <NavBar />
      <section className="heroBanner">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-lg-6">
              {/* <h1 className="mb-4 display-2 fw-bold">Wisdora is your key to <br className="d-block d-lg-none d-xl-block"/>storage here.</h1> */}
              <h1>
                Wisdora is your key to
                <Typewriter
                  style={{ zIndex: -1 }}
                  options={{
                    strings: [
                      "Corporate Content Development",
                      "Custom E-Learning Solutions",
                      "Creativity",
                      "Engaging Courses",
                      "Top Talent",
                      "World-Class Leadership",
                      "Rapid Solutions",
                      "Epic Results",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 15,
                    deleteSpeed: 15,
                  }}
                />
              </h1>
              <br />
              <h3 className="fw-bold">
                Unlock your potential with innovative learning solutions
              </h3>
              <p>
                Wisdora is on a mission to deliver premium{" "}
                <span className="orange">custom</span> training solutions to
                meet your unique needs. We partner with you to{" "}
                <span className="orange">create</span> flexible and engaging{" "}
                <span className="orange">content</span> that wows your learners{" "}
              </p>
              <button
                type="button"
                className="btn btn-primary rounded-pill btnCss"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Let's Meet
              </button>
            </div>
            <div className=" col-lg-6 ">
              <video
                className="heroVideo"
                src={heroVideo}
                autoPlay
                muted
              ></video>
            </div>
          </div>
        </div>
      </section>
      <section id="values" className="values wwdBanner">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="wwd-header">
            <h2>
              Custom eLearning Training Solutions
              <br />
              What We Do
            </h2>
          </header>

          <div className="row wwd-cards">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="box">
                <img src={customsol} className="img-fluid" alt="" />
                <h3>Custom Solutions</h3>
                <p>
                  Learning solutions designed around your specific learning and
                  business needs
                </p>
                <Link
                  className="nav-link"
                  to="/custom-solutions/learning-strategy"
                >
                  <button className="btn btn-primary rounded-pill btnCss">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <img src={emergingtech} className="img-fluid" alt="" />
                <h3>Emerging Technologies</h3>
                <p>
                  Leverage the latest tools and technologies to drive engagement
                  and retention
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <img src={ldstaff} className="img-fluid" alt="" />
                <h3>L&D Staff Augmentation</h3>
                <p>
                  Extend the capabalities of your L&D team with expert agile
                  talent
                </p>
                <Link className="nav-link" to="/on-demand-staffing">
                  <button className="btn btn-primary rounded-pill btnCss">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section counter">
        <div className="container numCounter">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">
                    <CountUp
                      start={0}
                      end={98}
                      duration={2.5}
                      enableScrollSpy={true}
                    />
                    %{" "}
                  </span>{" "}
                </h2>
                <p>
                  98% of customers return to Wisdora for new projects, programs
                  & solutions
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">
                    <CountUp
                      start={0}
                      end={100}
                      duration={2.5}
                      enableScrollSpy={true}
                    />
                    +
                  </span>
                </h2>
                <p>
                  employees and freelance consultants dedicated to our clients
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <h2 className="mb-0">
                  <span className="counter-stat font-weight-bold">
                    <CountUp
                      start={0}
                      end={100}
                      duration={2.5}
                      enableScrollSpy={true}
                    />
                    +
                  </span>
                </h2>
                <p>
                  creative and scalable learning experiences for our global
                  clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="topbrands ">
        <div className="container">
          <h2 className="text-center">Top Brands Trust Us</h2>
          <ul
            className="nav nav-pills justify-content-center mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-healthcare-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-healthcare"
                type="button"
                role="tab"
                aria-controls="pills-healthcare"
                aria-selected="true"
              >
                Healthcare
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-financial-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-financial"
                type="button"
                role="tab"
                aria-controls="pills-financial"
                aria-selected="false"
              >
                Financial
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-technology-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-technology"
                type="button"
                role="tab"
                aria-controls="pills-technology"
                aria-selected="false"
              >
                Technology
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-lifesciences-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-lifesciences"
                type="button"
                role="tab"
                aria-controls="pills-lifesciences"
                aria-selected="false"
              >
                Life Sciences
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-retail-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-retail"
                type="button"
                role="tab"
                aria-controls="pills-retail"
                aria-selected="false"
              >
                Retail
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-manufacturingservices-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-manufacturingservices"
                type="button"
                role="tab"
                aria-controls="pills-manufacturingservices"
                aria-selected="false"
              >
                Manufacturing & Services
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-education-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-education"
                type="button"
                role="tab"
                aria-controls="pills-education"
                aria-selected="false"
              >
                Education
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-nonprofit-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-nonprofit"
                type="button"
                role="tab"
                aria-controls="pills-nonprofit"
                aria-selected="false"
              >
                Non-Profits
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-healthcare"
              role="tabpanel"
              aria-labelledby="pills-healthcare-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={athenaHealth} alt="" />
                </div>
                <div className="col-3">
                  <img src={ioraHealth} alt="" />
                </div>
                <div className="col-3">
                  <img src={partnersHealth} alt="" />
                </div>
                <div className="col-3">
                  <img src={syneosHealth} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-financial"
              role="tabpanel"
              aria-labelledby="pills-financial-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={travelers} alt="" />
                </div>
                <div className="col-3">
                  <img src={libertyMutual} alt="" />
                </div>
                <div className="col-3">
                  <img src={santander} alt="" />
                </div>
                <div className="col-3">
                  <img src={avantax} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-technology"
              role="tabpanel"
              aria-labelledby="pills-technology-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={vmware} alt="" />
                </div>
                <div className="col-3">
                  <img src={omd} alt="" />
                </div>
                <div className="col-3">
                  <img src={raytheon} alt="" />
                </div>
                <div className="col-3">
                  <img src={dellEmc} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-lifesciences"
              role="tabpanel"
              aria-labelledby="pills-lifesciences-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={thermoFisher} alt="" />
                </div>
                <div className="col-3">
                  <img src={alnylam} alt="" />
                </div>
                <div className="col-3">
                  <img src={vertex} alt="" />
                </div>
                <div className="col-3">
                  <img src={steward} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-retail"
              role="tabpanel"
              aria-labelledby="pills-retail-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={amazon} alt="" />
                </div>
                <div className="col-3">
                  <img src={newBalance} alt="" />
                </div>
                <div className="col-3">
                  <img src={canes} alt="" />
                </div>
                <div className="col-3">
                  <img src={staples} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-financial"
              role="tabpanel"
              aria-labelledby="pills-financial-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={travelers} alt="" />
                </div>
                <div className="col-3">
                  <img src={libertyMutual} alt="" />
                </div>
                <div className="col-3">
                  <img src={santander} alt="" />
                </div>
                <div className="col-3">
                  <img src={avantax} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-manufacturingservices"
              role="tabpanel"
              aria-labelledby="pills-manufacturingservices-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={unifirst} alt="" />
                </div>
                <div className="col-3">
                  <img src={coghlin} alt="" />
                </div>
                <div className="col-3">
                  <img src={generalMills} alt="" />
                </div>
                <div className="col-3">
                  <img src={americanTower} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-education"
              role="tabpanel"
              aria-labelledby="pills-education-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={boston} alt="" />
                </div>
                <div className="col-3">
                  <img src={snhu} alt="" />
                </div>
                <div className="col-3">
                  <img src={babson} alt="" />
                </div>
                <div className="col-3">
                  <img src={ohiostate} alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-nonprofit"
              role="tabpanel"
              aria-labelledby="pills-nonprofit-tab"
              tabindex="0"
            >
              <div className="container row">
                <div className="col-3">
                  <img src={thenewEngland} alt="" />
                </div>
                <div className="col-3">
                  <img src={pathfinder} alt="" />
                </div>
                <div className="col-3">
                  <img src={americanRedcross} alt="" />
                </div>
                <div className="col-3">
                  <img src={ons} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-work-with-us">
        <div className="business wwwu-business">
          <div className="container wwwu-container">
            <div className="row ">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Why Work With Us?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="business_box ">
                      <p>
                        Our team of passionate and creative{" "}
                        <span className="bold-text">L&D experts</span> is
                        committed to your long-term learning and business
                        success. We understand the needs of L&D and how to
                        provide{" "}
                        <span className="bold-text">measurable results</span>{" "}
                        that directly correlate with employee performance,
                        maximizing skills, and ROI.
                        <br />
                        We work in an agile environment where{" "}
                        <span className="bold-text">rapid delivery</span> is
                        second nature. Because of that, we can suggest solutions
                        that work for any timeline and any budget, without
                        compromising quality.
                        <br />
                        Not to mention, we’re pretty fun to work with.
                      </p>
                      <button className="btn btn-primary rounded-pill btnCss">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact my-4">
        <div className="container contact-form ">
          <h2 className="text-center">Let's Get Started</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="fName"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="lName"
                placeholder="Last Name"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="workFor"
                placeholder="I work for/at"
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="col-md-6">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div className="col-12">
              <textarea
                class="form-control"
                id="textArea"
                rows="3"
                placeholder="For our next project, my team and I are interested in..."
              ></textarea>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary rounded-pill btnForm"
              >
                Get your free consultation
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
