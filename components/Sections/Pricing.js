import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = (props) => {
    return (
        <section id="pricing" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Pricing Plans</h3>
							<p>Pick a perfect plan to suit your photo booth business needs.</p>
                        </div>
						
					</Col>
				</Row>

				<Row className="row align-items-center pricing-plans">
					
					{/* <!-- Plan 1 --> */}
					<Col className="col-12 col-lg-4 res-margin">
						
                        <div className="price-table">
                            
                            <div className="icon icon-software-layers2"></div>
                            <h3 className="plan-type">Weekly</h3>
                            <h2 className="plan-price">$37.99/week</h2>
                            
                            <ul className="list-unstyled plan-list">
                                <li>Unlimited Video Storage</li>
                                <li>Unlimited Event Activations</li>
                                <li>Text Message Videos</li>
                                <li>Share Videos on Social Media</li>
                                <li>Add Custom Overlays</li>
                                <li>Add Music to Videos</li>
                                <li>Customize Text Messages</li>
                                <li>Use on unlimited number of devices (using the same Apple account ot Google Play account)</li>
                            </ul>
                            
                            <a className="btn" href="/events/">Start Trial</a>
                      
                        </div>
                        
					</Col>
					
					{/* <!-- Plan 2 --> */}
					<Col className="col-12 col-lg-4 res-margin">
						
                        <div className="price-table plan-popular mb-4 mb-sm-5 mb-lg-0">
                    
                            <div className="icon icon-basic-heart"></div>
                            <h3 className="plan-type">Monthly</h3>
                            <h2 className="plan-price">$119.99/month</h2>
                            
                            <ul className="list-unstyled plan-list">
                            <li>Unlimited Video Storage</li>
                                <li>Unlimited Event Activations</li>
                                <li>Text Message Videos</li>
                                <li>Share Videos on Social Media</li>
                                <li>Add Custom Overlays</li>
                                <li>Add Music to Videos</li>
                                <li>Customize Text Messages</li>
                                <li>Use on unlimited number of devices (using the same Apple account ot Google Play account)</li>
                            </ul>
                            
                            <a className="btn" href="/events/">Start Trial</a>
                            
                            <div className="card-ribbon">
                                <span>Popular</span>
                            </div>
                    
                        </div>                       
                        
					</Col>	
					
					{/* <!-- Plan 3 --> */}
					<Col className="col-12 col-lg-4">
						
                        <div className="price-table">
                        
                            <div className="icon icon-weather-sun"></div>
                            <h3 className="plan-type">Yearly</h3>
                            <h2 className="plan-price">$799.99/year</h2>
                            
                            <ul className="list-unstyled plan-list">
                            <li>Unlimited Video Storage</li>
                                <li>Unlimited Event Activations</li>
                                <li>Text Message Videos</li>
                                <li>Share Videos on Social Media</li>
                                <li>Add Custom Overlays</li>
                                <li>Add Music to Videos</li>
                                <li>Customize Text Messages</li>
                                <li>Use on unlimited number of devices (using the same Apple account ot Google Play account)</li>
                            </ul>
                        
                            <a className="btn" href="/events/">Start Trial</a>
                        
                        </div>                        
                        
					</Col>
					
				</Row>
                
                {/* <!-- Mobile phone --> */}
                <Row>
					
					<Col className="col-12 col-lg-8 offset-lg-2 mobile-phone wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.9s">
						<img src="/images/mobile-phone.png" alt="" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Pricing;