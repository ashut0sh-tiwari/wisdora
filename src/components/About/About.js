import React from 'react'
import './About.css'


import Footer from '../Footer/Footer'
import heroImg from '../../static/About/hero-img.png'
import vip from '../../static/About/VIP.png'
import humility from '../../static/About/customer_Exc.png'
import customer from '../../static/About/icon-humility.png'
import bulb from '../../static/About/Asset-2.svg'
import eyes from '../../static/About/eyes.svg'
import flag from '../../static/About/flag.svg'


const About = () => {
  return (
    <>
    
    <section className=" hero d-flex align-items-center">

<div className="container">
  <div className="row">
    <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
      <h2>About Us</h2>
      <p>We are team of motivated, experienced professionals with an objective-oriented approach to problem solvng. We're here to make your creative learning experiences as easy as possible. One-stop shop for creating learning design, development, and delivery. We do everything from blended learning to leadership to mobile custom content development to staffing</p>
     
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img">
      <img src={heroImg} className="img-fluid animated" alt=""/>
    </div>
  </div>
</div>

</section>

<section id="about" class="about">
      <div class="container">

        <div class="row no-gutters">
          <div class="content col-xl-5 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-right">
            <div class="content">
              <h3>Our Philosophy</h3>
              <p>
              We believe innovation combines creativity, experience, efficiency, compatibility, and most importantly, a deep understanding of our clients’ needs
              </p>
             
            </div>
          </div>
          <div class="col-xl-7 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-left">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row our-col">
                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <img src={vip} alt="" />
                  <h4>Ease of Business</h4>
                  <p>Our processes are designed to make sure you have an hassle free business experience and smooth deliveries</p>
                </div>
                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <img src={customer} alt="" />
                  <h4>Value</h4>
                  <p>We strive to provide the best in class solutions, bringing in our vast experience at your disposal</p>
                </div>
                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <img src={bulb} alt="" />
                  <h4>Innovate</h4>
                  <p>Our creative intructional designers makes the solutions so engaging, that your users cannot keep their eyes off</p>
                </div>
                <div class="col-md-6 icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <img src={humility} alt="" />
                  <h4>Growth Partners</h4>
                  <p>We focus on providing customized solutions in line to the pulse of your business and business goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container our-vision">
      <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 rounded-3 jumbo1">
        <img src={eyes} alt="" />
          <h2>Our Vision</h2>
          <p>we value our clients and the work we do, and we value doing it well. We're here to help you solve your problems in the most efficient, effective way possible.</p>
         
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 border rounded-3 jumbo2">
        <img src={flag} alt="" />
          <h2>Our Mission</h2>
          <p>To bring together the best people in our industry and creating a culture that inspires success.</p>
          
        </div>
      </div>
    </div>
      </div>
     
    </section>

    <Footer/>

 
    </>
  )
}

export default About