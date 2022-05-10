import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = (props) => {
    return (
        <section id="overview" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Track time --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>The Only 360 Photo Booth Software You Will Ever Need</h3>
							<p>A simple, quick and responsive app that will make you look like a photo booth pro in no time.</p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">

							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Easy to Use</h6>
									<p>Everything in the app is organized in a simple and basic way to help you run a succesful photo botoh event.</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Manage Your Events</h6>
									<p>Easily setup future events on our user dashboard via web or straight from your device.</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Share Videos Instantly</h6>
									<p>Text message videos, email, share via QR code, or social media. We make sure your clients get their special moment.</p>
								</div>

							</div>

						</div>
													{/* <!-- Button --> */}
						{/* <p className="text-center text-lg-start">
							<a href="#pricing" className="btn">Start One Week Trial</a>
						</p> */}
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/track-time.png" alt="" />
					</Col>
					
				</Row>
				
				<div className="empty-100"></div>
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Built to Make Your Events Awesome and Profitable</h3>
							<p>Our team has personally serviced thousands of events, our experience translates into an amazing app that makes you money. Here are some of ideas on how you can turn RevoSpin's other products into rental income.  </p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> Add a 360 photo booth enclosure to your packages. RevoSpin offers many options. You can upsell this as a premium package on your website.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Add LED flames around your 360 photo booth setup. Make this an add-on or include it in one of your medium sized packages.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Add cold spark machines to your 360 photo booth rental business. This add on option is popular for weddings and anniversaries.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Add an 360 inflatable LED enclosure to your packages. This is a fast an easy setup gauranteed to make you more money.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> Add a set of four LED lights with stands to make your videos pop with our app. Lighting is key when taking great videos.</p>
							</li>

						</ul>

						{/* <!-- Button --> */}
						{/* <p className="text-center text-lg-start">
							<a href="#pricing" className="btn">Get Started</a>
						</p> */}
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/overview/daily-schedule.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Overview;