import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Frequently Asked Questions</h3>
							<p>Common questions about RevoSpin 360.</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
									Can I try the 360 photo booth app before buying? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Yes you can, we offer a one week trial for any subscription package you choose.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									Do you offer overlay templates for the 360 photo booth app? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Yes we do. Head over to RevoSpin.com, we have a large selection of overlay bundles you can purchase that is easily customizable.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									How do I add music to my 360 photo booth video?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Head over to our help settings section on the app. We have a video tutorial on this and many other help videos.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							{/* <Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									Am I limited to the number events stored on the app? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										As long as your subscribed you will have unlimited storage of events and videos.
									</p>
								</Accordion.Body>
								
							</Accordion.Item> */}
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
									I need more help, where do I go?  			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										On the settings button on the app you can follow the links to our help section or join our private group of other RevoSpin 360 members around the world.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">Still have a question? <a href="#contact"><strong>Ask your question here</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;