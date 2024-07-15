import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1a1a1a' }} className='py-5 mt-5 text-light'>
            <Container>
                <Row className='row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 mb-4'>
                    <Col className='mb-3'>
                        <div className='mb-4'>
                            <h2>Ema-john</h2>
                            <a href='https://ema-john-simple-eb79e.web.app/shop'>Ema-John</a>

                        </div>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Products</h4>
                        <p>View All</p>
                        <p>Special Offers</p>
                        <p>Pricing</p>
                        <p>Reviews</p>
                        <p>Best Value</p>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Company</h4>
                        <p>About</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Press Center</p>
                        <p>Careers</p>
                    </Col>
                    <Col className='mb-3'>
                        <h4 className='mb-3 fw-bold'>Follow Us</h4>
                        <p className='fs-4'>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram mx-3"></i>
                            <i className="fab fa-twitter"></i>
                        </p>
                        <h4 className='mt-4 mb-3 fw-bold'>Location</h4>
                        <p>Muradpur | Chattogram</p>
                    </Col>
                </Row>
                <hr />
                <div className='d-flex flex-wrap justify-content-lg-between'>
                    <div>
                        All rights reserved © Ema-John 2021
                    </div>
                    <div>
                        <small>Terms & Conditions</small>
                        <small className='mx-4'>Claim</small>
                        <small>Privacy & Policy</small>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;