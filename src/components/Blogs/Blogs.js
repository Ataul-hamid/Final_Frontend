import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <div className='text-center mb-5 pt-5 pb-1'>
                    <h6 style={{ color: 'rgb(197,168,128)' }}>FEATURED BLOGS</h6>
                    <h1>Latest Featured Blog</h1>
                </div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://www.lifestyle-collection.com.pk/wp-content/uploads/2021/05/BMM0A10055-1-330x440.jpg" />
                            <Card.Body>
                                <Card.Title>Learn: What is a DAC?</Card.Title>
                                <Card.Text><small className='text-muted'>A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.  ...</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 20, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>8 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://timeandtidewatches.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-29-at-10.40.25-am.png" />
                            <Card.Body>
                                <Card.Title>Great Rolex</Card.Title>
                                <Card.Text><small className='text-muted'> A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands.During most of its history the watch was a mechanical device driven by clockwork, powered by winding </small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>OCT. 22, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>3 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://images.othoba.com/images/thumbs/0356567_casio-mtp-v005l-7b4udf-brown-leather-strap-watch-for-men_300.jpeg" />
                            <Card.Body>
                                <Card.Title>Latest  feature</Card.Title>
                                <Card.Text><small className='text-muted'>Watches were developed in the 17th century from spring-powered clocks, which appeared as early as the 14th century. During most of its history the watch was a mechanical device.And also Attracted and you will love it</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 01, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>9 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='p-0 border-0 shadow'>
                            <Card.Img variant="top" className="picture" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/top-20-watch-brands-rolex-1617145834.jpg?crop=1xw:1xh;center,top&resize=480:*" />
                            <Card.Body>
                                <Card.Title>Ema-John Evolution</Card.Title>
                                <Card.Text><small className='text-muted'>Watches evolved from portable spring-driven clocks, which first appeared in 15th-century Europe. Watches were not widely worn in pockets until the 17th century. a mainspring, and keeping time with an oscillating balance wheel. These are called mechanical watches.A watch is a portable timepiece intended to be carried or worn by a person.  ..</small></Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <small className='text-muted'>NOV. 03, 2021</small>
                                    <small style={{ color: 'rgb(197,168,128)' }}>5 COMMENTS</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blogs;