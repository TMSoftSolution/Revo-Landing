import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { sendMessage } from '../../api/RevospinAPI';

const Contact = (props) => {

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [isSent, setIsSent] = useState(false);
    const [isShowSuccess, setIsShowSuccess] = useState(false);
    const [formError, setFormError] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    function validation() {

        if (nameRef.current.value.length == 0) {
            setFormError('You must input your name.');
            return false;
        } else if (emailRef.current.value.length == 0) {
            setFormError('You must inpurt your email address.')
            return false;
        } else if (!emailPattern.test(emailRef.current.value)) {
            setFormError('You have entered an invalid email address.')
            return false;
        } else if (subjectRef.current.value.length == 0) {
            setFormError('You must input the subject.');
            return false;
        } else if (messageRef.current.value.length == 0) {
            setFormError('You must input the message.')
            return false;
        } else {
            setFormError(null);
            return true;
        }
    }

    function clearForm() {
        nameRef.current.value = '';
        emailRef.current.value = '';
        subjectRef.current.value = '';
        messageRef.current.value = '';
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validation()) {
            sendMessage(
                nameRef.current.value,
                emailRef.current.value,
                subjectRef.current.value,
                messageRef.current.value)
                .then((res) => {
                    console.log(res);
                    if (res.success == true) {
                        setIsSent(true);
                        clearForm();
                    }
                });
        }
    }

    useEffect(() => {
        if (isSent) {
            setIsShowSuccess(true);
            let timer = setTimeout(() => { setIsShowSuccess(false), setIsSent(false) }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isSent])

    return (
        <section id="contact" className={props.className}>

            {/* <!-- Container --> */}
            <Container>

                {/* <!-- Section title --> */}
                <Row className="justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">

                        <div className="section-title text-center">
                            <h3>Get In Touch</h3>
                            <p>Thanks for wanting to get in contact with us! Please submit any questions in the form. It’s the most efficient way to get any questions or concerns solved! We will reply to you within 24 hours.</p>
                        </div>

                    </div>
                </Row>

                <Row>

                    {/* <!-- Contact info --> */}
                    <Col className="contact-info col-12 col-lg-4 res-margin">

                        <h5>
                            <span className="icon icon-basic-geolocalize-05"></span>
                            Office Location
                        </h5>
                        <p>
                            680 Pilot Road<br />
                            Las Vegas, NV 89119<br />
                            United States
                        </p>

                        <h5>
                            <span className="icon icon-basic-smartphone"></span>
                            Phone Number
                        </h5>
                        <p><a href="tel:8886961103">(888) 696-1103</a></p>

                        <h5>
                            <span className="icon icon-basic-mail"></span>
                            Email Address
                        </h5>
                        <p>
                            <a href="mailto:support@revospin.com">support@revospin.com</a>
                        </p>

                        <h5>
                            <span className="icon icon-basic-clock"></span>
                            Working Hours
                        </h5>
                        <p>
                            9:00AM to 5:00PM
                        </p>

                    </Col>

                    {/* <!-- Contact form --> */}
                    <Col className="col-12 col-lg-8">


                        <form id="contact-form" >

                            {formError && <Alert variant='danger' onClose={() => setFormError(null)} dismissible>{formError}</Alert>}

                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="name" className="form-control field-name" placeholder="Name" ref={nameRef} required />
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="email" name="email" className="form-control field-email" placeholder="Email" ref={emailRef} required />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="subject" className="form-control field-subject" placeholder="Subject" ref={subjectRef} required />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea name="message" rows="4" className="form-control field-message" placeholder="Message" ref={messageRef} required></textarea>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button id="contact-submit" name="send" className="btn" onClick={handleSubmit}>Send Message</button>
                                </Col>
                            </Row>

                        </form>

                        {/* <!-- Submit Results --> */}
                        {isShowSuccess &&
                            <div className="contact-form-result">
                                <h4>Thank you for the e-mail!</h4>
                                <p>Your message has already arrived! We'll contact you shortly.</p>
                            </div>
                        }

                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Contact;