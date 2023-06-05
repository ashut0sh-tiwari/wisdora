import React from 'react'
import './OurCapabilities.css'
import customlearning from '../../static/OurCapabilities/Custom-Learning-Solutions.svg'
import contentconversion from '../../static/OurCapabilities/Content-conversion.svg'
import contentdevelopment from '../../static/OurCapabilities/Content-Development.svg'
import diversity from '../../static/OurCapabilities/Diversity-and-Inclusion.svg'
import elearning from '../../static/OurCapabilities/eLearning.svg'
import leadership from '../../static/OurCapabilities/Leadership.svg'
import learningtech from '../../static/OurCapabilities/Learning-Technologies.svg'
import measurement from '../../static/OurCapabilities/Measurement.svg'
import onboarding from '../../static/OurCapabilities/Onboarding.svg'
import outsourcing from '../../static/OurCapabilities/Outsourcing-1.svg'
import performance from '../../static/OurCapabilities/Performance-Management.svg'
import development from '../../static/OurCapabilities/Professiaonal-Development.svg'
import readymade from '../../static/OurCapabilities/Ready-Made.svg'
import lms from '../../static/OurCapabilities/Remote-Learning.svg'
import strategy from '../../static/OurCapabilities/Strategy-Alignment.svg'
import workforce from '../../static/OurCapabilities/Workforce-Development.svg'
import digilearn from '../../static/OurCapabilities/Digital-Learning.svg'
import microlearn from '../../static/OurCapabilities/Microlearning.svg'
import vr from '../../static/OurCapabilities/Virtual-Reality.svg'
import augmentedreality from '../../static/OurCapabilities/Augmented-Reality.svg'
import ilt from '../../static/OurCapabilities/ILT.svg'
import vILT from '../../static/OurCapabilities/vILT.svg'
import game from '../../static/OurCapabilities/Gamification.svg'
import three from '../../static/OurCapabilities/360-Video.svg'
import collaborative from '../../static/OurCapabilities/Collaborative.svg'
import mobilelearn from '../../static/OurCapabilities/Mobile-Learning.svg'
import translation from '../../static/OurCapabilities/Translation-Localization.svg'
import podcast from '../../static/OurCapabilities/Podcasts.svg'
import methodimg from '../../static/OurCapabilities/What_We_Do-02-2-1024x446.png'

import Footer from '../Footer/Footer'


const OurCapabilities = () => {
  return (
    <>
 
   <section className="our-capabilities">
    <div className="container">
    <div className="row">
      <div className="col-6">
        <h2>Our Capabilities</h2>
      </div>
      <div className="col-6">
        <p>We are experts in providing consultations on learning & development, building Custom Courses as per your organization’s training needs, and a love for creating design experiences in addition to innovating our learning modules surpassing the expectations of our clients</p>
      </div>
    </div>
    </div>
   
    <div className="container ">
      <h2 className='text-center'>What we do</h2>
      <div className="row g-1">
        <div className="col-3">
          <div className="box-2">
            <img src={customlearning} alt="" />
            <p>Custom Learning Solutions</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={elearning} alt="" />
            <p>eLearning</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={contentconversion} alt="" />
            <p>Content Conversion</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={lms} alt="" />
            <p>LMS/LXP</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={onboarding} alt="" />
            <p>Onboarding</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={outsourcing} alt="" />
            <p>Outsourcing</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={workforce} alt="" />
            <p>Workforce Development</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={measurement} alt="" />
            <p>Measurement & Assessment</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={leadership} alt="" />
            <p>Leadership</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={development} alt="" />
            <p>Professional Development</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={performance} alt="" />
            <p>Performance Management</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={diversity} alt="" />
            <p>Diversity and Inclusion</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={contentdevelopment} alt="" />
            <p>Customized Content Development</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={learningtech} alt="" />
            <p>Learning Technology</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={strategy} alt="" />
            <p>Strategy</p>
          </div>
        </div>
        <div className="col-3">
          <div className="box-2">
            <img src={readymade} alt="" />
            <p>Ready-Made & Off The Shelf</p>
          </div>
        </div>
       
      </div>
    </div>

   </section>
   <section className="toolkit">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>
          Our Capabilities Tool Kit
          </h2>
          <p>
          Applying wonderful solutions to our delivery methods, we keep getting mused by the latest trends in the industry and the requirements of our clients in the upcoming times. We believe in living in the future and hence create futuristic solutions for our clients. 
          </p>

        </div>
        <div className="col-6">
          <div className="box-3 ">
         <ul>
          <li>
            <img src={digilearn} alt="" />
            <p>Digital Learning</p>
          </li>
          <li>
            <img src={microlearn} alt="" />
            <p>Microlearning</p>
          </li>
          <li>
            <img src={vr} alt="" />
            <p>Virtual Reality</p>
          </li>
          <li>
            <img src={augmentedreality} alt="" />
            <p>Augmented Reality</p>
          </li>
          <li>
            <img src={ilt} alt="" />
            <p>ILT</p>
          </li>
          <li>
            <img src={vILT} alt="" />
            <p>vILT</p>
          </li>
          <li>
            <img src={game} alt="" />
            <p>Gamification</p>
          </li>
          <li>
            <img src={three} alt="" />
            <p>360 Video</p>
          </li>
          <li>
            <img src={collaborative} alt="" />
            <p>Collaborative Team Spaces</p>
          </li>
          <li>
            <img src={mobilelearn} alt="" />
            <p>Mobile Learning</p>
          </li>
          <li>
            <img src={translation} alt="" />
            <p>Translation & Localization</p>
          </li>
          <li>
            <img src={podcast} alt="" />
            <p>Podcasts</p>
          </li>
        
       
         </ul>
          </div>
        </div>
      </div>
    </div>
   </section>
   <section className='method '>
    <div className="container ">
    <h2 className='text-center'>How we do it - Wisdora Method</h2>
    < p className='text-center'>We are collaborative, agile and client-focused. We work with our clients to drive impact <br />
    through our CoreMethod™ Rapid Delivery model.</p>
    <div className=' d-flex justify-content-center'>
    <img  src={methodimg} alt="" />
    </div>
    </div>
   </section>

   <section>
      <div className="new-content-container container">
		<span className="new-content-heading"><h1>Leverage Innovative E-learning Solutions To Grow Your Business </h1></span>
		
		<span className="new-content-paragraph"><p>You require technologies designed for the modern world for everything from outsourcing to onboarding and training your personnel. Your resources may be dispersed across the state, the nation, or even the globe. Without the proper instructional strategies, it will be difficult to get everyone up to speed and on the same page to produce the best work possible. </p></span>

	
		<span className="new-content-paragraph"><p> With eLearning, your team can grow faster than offline because it has a variety of courses that are easily available. Especially when remote, You require an inventive e-learning solution that increases the capabilities of your most precious asset: your people. You can also use the same option for possible applications to attract the top personnel. No matter what business or profession you work in, information is power. If you take the time to facilitate the training and development that brings the best out of everyone, that power may put you ahead of your rivals.</p></span>


		<span className="new-content-heading"><h3>What Is the Value of E-learning?</h3></span>
		
	
		<span className="new-content-paragraph"><ul>
	<li>
  Save money
	</li>
	<li>
	Save time
	</li>
	<li>
  Build credibility in Team toward their organisation
	</li>
	<li>
  Workforce Collaboration
	</li>
	<li>
  Easily Scalable
	</li>
</ul></span>




	</div>
      
      </section>
      <Footer/>
    </>
    
  )
}

export default OurCapabilities