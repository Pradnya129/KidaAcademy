import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ContactUs() {
    return (
        <Container className="my-5">
            <Row className=' mb-5  '>
                {/* Left Column: Contact Info */}
                <Col md={6}>
                    <div className='mb-4'>
                    <h4 className='ff-bubblegum text-warning fw-700 '>Our Location</h4>
                    <p className='text-grey ff-roboto'>
                        218 Sahera Tropical Center Room#7<br />
                        New Newyork Road 1205
                    </p>
                    </div>
                      
                    <div className='mb-4'>  
                    <h4 className='ff-bubblegum text-tomato fw-700'>Phone Number</h4>
                    <p className='text-grey ff-roboto'> 
                        01923-970212, 01776-502993<br />
                        +2154897369
                    </p>
                    </div>

                    <div className='mb-4'>
                    <h4 className='ff-bubblegum text-orange fw-700'>Email Address</h4>
                    <p className='text-grey ff-roboto'>
                        hello@labartisan<br />
                        hello@codexcoder.com
                    </p>
                    </div>
                </Col>

                {/* Right Column: Contact Form */}
                <Col md={6}>
                    <Form className='my-sm-5 my-md-0'>
                        <Form.Group className="mb-4" controlId="formName">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formEmail">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formMessage">
                            <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                        </Form.Group>
                        <Link to="#" className='btn bg-purple button-default text-white fw-bold ms-4' onClick={(e)=>{e.preventDefault()}}>Send messages</Link>
                    </Form>
                </Col>
            </Row>

            {/* Google Map */}
            {/* Google Map */}
            <Row className="">
                <Col>
                    <div className="map-responsive ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195799949287!2d144.95605431564784!3d-37.81720987975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c12df9a4b56!2sEnvato!5e0!3m2!1sen!2sau!4v1615161101655!5m2!1sen!2sau"
                          
                            height="500"
                            style={{ border: 0,  width:"100%" }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
