import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-header">Innovate • Engage • Create • Change</div>
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
        <hr class="divider" />
        <div class="footer-bottom">
          <div class="footer-left">
            <span class="copyright">
              © 2022 Wisdora. All rights reserved |{" "}
              <a href="/">Privacy Policy</a>
            </span>
          </div>
          <div class="footer-right">
            <a href="#" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
