import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
	return (
		<section id="services" className={props.className}>

			{/* <!-- Container --> */}
			<Container>

				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">

						<div className="section-title text-center">
							<h3>How It Works</h3>
							<p>We strive for simplicity, ensuring you have the best quality 360 photo booth videos for all of your events.</p>
						</div>

					</Col>
				</Row>

				<Row>

					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>

							<div className="icon icon-basic-server2"></div>

							<h5>Your Videos in Cloud</h5>
							<p>Access stored 360 photo booth videos and instantly share your videos after each session.</p>

						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>

							<div className="icon icon-basic-headset"></div>

							<h5>24/7 Support</h5>
							<p>Ask us anything, reach out to us for any questions. We are here to guide you.</p>

						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>

							<div className="icon icon-software-pen"></div>

							<h5>Exclusive Design</h5>
							<p>With so many features, templates, and special effects, you’ll want to try them all!</p>

						</div>
					</Col>

				</Row>

			</Container>

		</section>
	);
}

export default Services;