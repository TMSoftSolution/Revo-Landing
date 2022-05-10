import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialSlider = {
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	rtl: false,
};

const testimonialNav = {
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	arrows: false,
  	centerMode: true,
  	focusOnSelect: true,
  	variableWidth: false,
  	rtl: false,
  	responsive: [
		{
      		breakpoint: 991,
      		settings: {
        		slidesToShow: 3,
        		arrows: false,
      		},
    	},
    	{
      		breakpoint: 480,
      			settings: {
        		slidesToShow: 1,
        		arrows: false,
      		},
    	}
	]
};

const Testimonial = (props) => {
    const testimonialNavRef = useRef(null);
    const testimonialSliderRef = useRef(null);

    const [state, setState] = useState({
        nav1: testimonialNavRef.current,
        nav2: testimonialSliderRef.current,
    });

    const { nav1, nav2 } = state;

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {
            setState({
                nav1: testimonialNavRef.current,
                nav2: testimonialSliderRef.current,
            });
        }

        return () => (unmounted = true);
        }, [testimonialSliderRef, testimonialNavRef]
    );

    return (
        <section id="testimonials" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="row justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Client Reviews</h3>
							<p>Customer feedback is important to us. Share your thoughts, and let us know how we are doing!</p>
						</div>
						
					</Col>
				</Row>
				
				<Row className="row">
					<Col className="col-12 testimonial-carousel">
						
						{/* <!-- Text --> */}
						<div className="block-text row">

                            <Slider
                                ref={testimonialSliderRef}
                                className="carousel-text testimonial-slider col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav1}
                                {...testimonialSlider}
                            >	

								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Tried using other apps and it was so confusing. This app simplifies everything step by step. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                                <div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Awesome app for the 360 booths. Simple to use with many features. Makes events a breeze! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> This was so simple to use and it was great to be able to add my overlays directly to the APP. Youtube videos helped as well! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> I was looking for a 360 photo booth software. I have done many successful events to date. Thanks RevoSpin! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Super simple to use. The team from RevoSpin was super helpful. Can't wait to book more events!<i className="fas fa-quote-right"></i></p>
									</div>
								</div>	
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> I have tried other apps. This app was the best fit for my needs. Super simple to understand. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> If you are looking for a 360 photo booth software look no further. This app has it all! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
                                
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> Awesone app, great job! I have booked 3 events since getting my 360 photo booth. Thank you! <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
								<div>
									<div className="single-box">
										<p><i className="fas fa-quote-left"></i> The tutorials and the Facebook support group helped me alot. <i className="fas fa-quote-right"></i></p>
									</div>
								</div>
								
                            </Slider>

						</div>

						{/* <!-- Media --> */}
						<div className="block-media row">

                            <Slider
                                ref={testimonialNavRef}
                                className="carousel-images testimonial-nav col-12 col-lg-8 offset-lg-2"
                                asNavFor={nav2}
                                {...testimonialNav}
                            >
							
                            	<div>
									<img src="/images/testimonials/client-1.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Holly Smith</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-2.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Juan Ramirez</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-3.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>David Kosta</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-4.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Nancee Lee</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-5.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Mike Wilson</h3>
									</div>
								</div>	
								
								<div>
									<img src="/images/testimonials/client-6.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Jonathon Dacones</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-7.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Xenia Brown</h3>
									</div>
								</div>

								<div>
									<img src="/images/testimonials/client-8.jpg" alt="" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Shane Warner</h3>
									</div>
								</div>
								
								<div>
									<img src="/images/testimonials/client-9.jpg" alt="3" className="img-fluid rounded-circle" />
									<div className="client-info">
										<h3>Chris Gilmore</h3>
									</div>
								</div>
								
							</Slider>

						</div>

					</Col>
				</Row>
				
			</Container>
		
		</section>
    );
};

export default Testimonial;
