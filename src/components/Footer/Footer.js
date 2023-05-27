import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* Ye normal header */}
        {/* <div className="footer-header">Innovate • Engage • Create • Change</div> */}

        {/* ye dusra vaala */}
        <div className="footer-header-shades">
          <div className="card">
            <div className="tick-icon">
              <i className="fas fa-check"></i>
            </div>
            <div className="content">
              <div className="heading">Innovate</div>
              <div className="subheading">Greatness</div>
            </div>
          </div>
          <div className="card">
            <div className="tick-icon">
              <i className="fas fa-check"></i>
            </div>
            <div className="content">
              <div className="heading">Engage</div>
              <div className="subheading">Industry Experts.</div>
            </div>
          </div>
          <div className="card">
            <div className="tick-icon">
              <i className="fas fa-check"></i>
            </div>
            <div className="content">
              <div className="heading">Create</div>
              <div className="subheading">Excellence</div>
            </div>
          </div>
          <div className="card">
            <div className="tick-icon">
              <i className="fas fa-check"></i>
            </div>
            <div className="content">
              <div className="heading">Change</div>
              <div className="subheading">The Game.</div>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <div className="about-wisdora">
            Wisdora is a leading learning solutions agency that specializes in
            developing and delivering custom engagements that drive business
            impact.
          </div>
          <div className="wisdora-address">
            502 Sunrise Business Park, Rd Number 16, Nehru Nagar, Wagle
            Industrial Estate, Thane West, Thane, Maharastra 400604
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <a href="mailto:info@wisdora.com">info@wisdora.com</a>
            </div>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer-bottom">
          <div className="footer-left">
            <span className="copyright">
              © 2022 Wisdora. All rights reserved |{" "}
              <a href="/">Privacy Policy</a>
            </span>
          </div>
          <div className="footer-right">
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
