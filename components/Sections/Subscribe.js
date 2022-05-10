import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Subscribe = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);
    

    return (
        <section id="subscribe" className="parallax" data-image="/images/parallax/subscribe.jpg" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>

                {/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center white">
							<h3 className="text-white">Subscribe To Our Newsletter</h3>
							<p>Join the revolution and subscribe to our newsletter for the latest products, sales and giveaways.</p>
                        </div>
						
					</Col>
				</Row>

                {/* <!-- Newsletter form --> */}
                <Row className="justify-content-center">
                    <Col className="col-12 col-md-10 col-lg-6">
                        
                        <form id="subscribe-form" action="https://773eb9cf.sibforms.com/serve/MUIEAP6evGz7Nwy_ePagjnV9Eh1gc8lXiPqNfREnixk3UPhZs-lFS-vJ5obEaBR3Jxx-LYrcB5S0zwfWWp7ojpF4TVGj7ntkGVqlMpRPkHxLaygTgSNk9mseL_AgY26HrmC7tp-lyAXiXFkaAQzIS5xcNHkIFZne11TG3kfrB-_HtkL06lfLmh_eOir3CMGsoOsUAAoPDDW7vzJq" method="post">
                            <div className="input-group mb-3">
                                <input type="email" name="email" className="form-control field-subscribe" placeholder="Enter Your Email Address" required />
                            </div>
                            <button type="submit" className="btn w-100">Subscribe</button>
                        </form>

                        <h3 id="subscribe-result" className="text-center text-white">
                            Thanks for subscribing!
                        </h3>
                        
                        <div className="empty-30"></div>
                        
                        <p className="text-center mb-0">                         
                            We don't share your personal information with anyone or company. 
                            Check out our <a href="https://revospin.com/pages/privacy-policy"><strong>Privacy Policy</strong></a> for more information.
                        </p>
                        
                    </Col>
                </Row>

            </Container>
				
		</section>
    );
}

export default Subscribe;