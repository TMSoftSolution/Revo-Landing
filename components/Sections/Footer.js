import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer>

			{/* <!-- Widgets --> */}
			<div className="footer-widgets">
				<Container>

					<Row>

						{/* <!-- Footer logo --> */}
						<Col className="col-12 col-md-6 col-lg-3 res-margin">
							<div className="widget">
								<p className="footer-logo">
									<img src="/images/logo-white.png" alt="Revospin" data-rjs="2" />
								</p>
								<p>
									Looking to buy a 360 booth as an investment for your party business, DJing business or event planning business? Opportunity awaits! Venerated as the best 360 photo booth manufacturer for those interested in growing their businesses.
								</p>

								{/* <!-- Social links --> */}
								<div className="footer-social">
									<a href="https://www.facebook.com/revospin360photobooth" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
									<a href="https://www.instagram.com/revo.spin/" title="Instagram"><i className="fab fa-instagram"></i></a>
								</div>
							</div>
						</Col>

						{/* <!-- Useful links --> */}
						<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
							<div className="widget">

								<h6>Useful Links</h6>

								<ul className="footer-menu">
									<li><a href="https://support.revospin.com/support/home">Support</a></li>
									<li><a href="https://revospin.com/pages/privacy-policy">Privacy Policy</a></li>
									<li><a href="https://revospin.com/policies/terms-of-service">Terms &amp; Conditions</a></li>
								</ul>

							</div>
						</Col>

						{/* <!-- Product help --> */}
						<Col className="col-12 col-md-6 col-lg-3 res-margin">
							<div className="widget">

								<h6>Product Help</h6>

								<ul className="footer-menu">
									<li><a href="#support">FAQ</a></li>
									<li><a href="#testimonials">Reviews</a></li>
									<li><a href="#features">Features</a></li>
									<li><a href="#contact">Feedback</a></li>

								</ul>

							</div>
						</Col>

						{/* <!-- Download --> */}
						<Col className="col-12 col-md-6 col-lg-3">
							<div className="widget">

								<h6>Download</h6>

								<div className="button-store">
									<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
									<a href="#" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
								</div>

							</div>
						</Col>

					</Row>

				</Container>
			</div>

			{/* <!-- Copyright --> */}
			<div className="footer-copyright">
				<Container>

					<Row>
						<Col className="col-12">

							{/* <!-- Text --> */}
							<p className="copyright text-center">
								Copyright © 2022 <a href="https://revospin.com" target="_blank">RevoSpin</a>. All Rights Reserved.
							</p>

						</Col>
					</Row>

				</Container>
			</div>

		</footer>
	);
}

export default Footer;