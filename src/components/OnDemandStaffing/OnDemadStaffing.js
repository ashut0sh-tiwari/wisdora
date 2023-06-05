import React from "react";
import './OnDemandStaffing.css'

import Footer from "../Footer/Footer";
import odHero from "../../static/Ondemand/Wavy_Tech-01.png";

import hourglass from "../../static/Ondemand/hourglass-01.svg";
import motherteresa from "../../static/Ondemand/mother-teresaface.svg";
import consulting from "../../static/Ondemand/consulting_services.svg";

const OnDemadStaffing = () => {
  return (
    <>
 
      <section className="pt-4 pt-md-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="banner-block left col-lg-6">
              <h1>On-Demand Access to L&amp;D Consultants</h1>
              <div className="bnr-cntnt">
                <ul>
                  <li>Instructional Designers </li>
                  <li>Project Managers</li>
                  <li>Learning Consultant</li>
                  <li>Technical Writers</li>
                  <li>LMS Developers</li>
                  <li>Executive Coaches</li>
                  
                </ul>
              </div>
              <button className='btn btn-primary rounded-pill btnCss'>Talk to a Consultant</button>
            </div>
            <div className="col-md-5 col-lg-6 text-lg-center">
              <img className="img-fluid mb-5 mb-md-0" src={odHero} alt="" />
            </div>
          </div>
        </div>
      </section>

      

      <section className="project-wr">
		<div className="container project-wr">
			<div className="projects-in">
									
					<h2>Too many projects and not enough resources?	</h2>
				
				
					<div className="project-btn">  <button className='btn btn-primary rounded-pill btnCss'>Talk to a Consultant</button></div>
				
									<div className="projects-bx">
													<div className="projects-bx-cmn">
								<figure><img src={hourglass}  alt="Are you faced with too many deadlines?"/></figure>
								<p>Did you not find the right fit?</p>
							</div>
													<div className="projects-bx-cmn">
								<figure><img src={motherteresa}  alt="Have you tried hiring consultants before and it just didn’t work?"/></figure>
								<p>Were you able to give them the required training?</p>
							</div>
													<div className="projects-bx-cmn">
								<figure><img src={consulting} alt="Have you wasted too many hours looking for a consultant and the dollars keep adding up?"/></figure>
								<p>Have you ever talked to an organizational change consultancy?</p>
							</div>
											</div>
							</div>
		</div>  
	</section>
      <section>
      <div className="new-content-container container">
		<span className="new-content-heading"><h1>Wisdora is a training-learner matchmaker </h1></span>
		
		<span className="new-content-paragraph"><p>We find you the perfect fit in the industry to cater to all the learning requirements of your team members. </p></span>

		<span className="new-content-heading"><h3>Saves Time</h3></span>
		<span className="new-content-paragraph"><p> staffing of skilled consultants can save a lot of time. We know how hard it can get for a company to find resources that will be able to perform the set criteria. To shift your focus from this task to the bigger things that matter, Wisdora brings on-demand staffing.</p></span>


		<span className="new-content-heading"><h3>Work with the best</h3></span>
		<span className="new-content-paragraph"><p>Wisdora has a flexible approach toward work and acts promptly on immediate requirements. </p></span>

		<span className="new-content-heading"><h3>Hire Top Tier</h3></span> 
		<span className="new-content-paragraph"><p>We provide LMS developers, content creators, instructional designers but no trainers “Learn from the best and learn the best” goes hand in hand. Experienced people have intrinsic learnings and taking it forward comes to them naturally. Hire top-tier consultants who are available as and when you place a demand for a consultation. </p></span>

		<span className="new-content-heading"><h1>Ready to Get Started</h1></span> 
		<span className="new-content-paragraph"><ul>
	<li>
		Let’s connect for consultation
	</li>
	<li>
		Shortlist people, build the new team
	</li>
	<li>
		Let’s get your teams started with training!
	</li>
</ul></span>


<span className="new-content-heading"><h1>Finding the right consultant shouldn’t be a headache!</h1></span>
<span className="new-content-paragraph"><p>Shortlisting one consultant that fits our needs is a hard one to find. In a world where there are ample of valuable consultations available, to understand our working scheduling a call is what our other clients do. For the clients who want to go deeper, they book a demo to authenticate the process and learning effectiveness. 
Dealing with multiple companies made us more competent in our approach and we are always keeping an eye on what our clients must have. We live by “Your problems are Ours” and take your company pretty darn seriously. We ensure how we can serve you as the desired piece of the puzzle.</p></span> 

	</div>
      
      </section>
      <Footer />
    </>
  );
};

export default OnDemadStaffing;
