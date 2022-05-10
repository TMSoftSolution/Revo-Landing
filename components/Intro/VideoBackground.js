import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

class Video extends React.Component {
	render() {
		const opts = {
			height: '100%',
			width: '100%',
			playerVars: {
				autoplay: 1,
				mute: 1,
				loop: 1,
				controls: 0,
				showinfo: 0,
				start: 2	// Video start second  
			},
		};

		return <YouTube 
					videoId='U7MdxaWeDo0' 
					className="video-bg" 
					containerClassName="video-bg-wrapper" 
					opts = {opts} 
				/>
	}

	_onReady(event) {
		event.target.playVideo();
	}
}

const VideoBackground = () => {
    return (
        <section id="home" className="banner video-bg bottom-oval">

			<Video />

			{/* <!-- Container --> */}
			<Container>

				<Row className="align-items-center">

					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-3">

						{/* <!-- Banner text --> */}
						<div className="banner-text text-center">

							<h1 className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0s">
								Discover the Best 360 Photo Booth Software
							</h1>
							
							<p className="wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
								Looking for a 360 photo booth software to pair with your 360 platform? Take your events to the next level with our RevoSpin 360 app available for iOS and Android.
							</p>

							<div className="button-store wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
								
								<a href="https://play.google.com/store/apps/details?id=com.revospin.revospin360" className="d-inline-flex align-items-center m-2 m-sm-0 me-sm-3">
									<img src="/images/banner/google-play.png" alt="" />
								</a>
								
								<a href="https://apps.apple.com/us/app/revospin-360/id1585261683" className="d-inline-flex align-items-center m-2 m-sm-0">
									<img src="/images/banner/app-store.png" alt="" />
								</a>
							
							</div>

						</div>
						
						<div className="empty-30"></div>
						
					</Col>  
					
				</Row>
				
			</Container>
			
			{/* <!-- Image --> */}
			<div className="banner-image-center w-100 wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
				<img src="/images/banner/video-welcome.png" alt="" />
			</div>
			
		</section>
    );
}

export default VideoBackground;
