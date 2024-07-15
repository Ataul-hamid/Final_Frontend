import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'


const Banner = () => {
    return (
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/online-shopping-concept-digital-marketing-website-mobile-application_43880-342.jpg?w=900"
          alt="First slide"
        />
        <Carousel.Caption>
        <h1>GET UP TO 30% OFF NEW ARRIVALS</h1>
        <Button type="button"  class="btn btn-warning" className='m-0 mt-lg-5 w-100 text-uppercase'><a href='https://ema-john-simple-eb79e.web.app/shop'>Shop Now</a></Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-11069.jpg?w=740&t=st=1669572836~exp=1669573436~hmac=466e7697b3724671b189d079c99e89d971d7e99e38e70f29157b6cea5364a1ba"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>GET UP TO 30% OFF NEW ARRIVALS</h1>
        <Button type="button"  class="btn btn-warning" className='m-0 mt-lg-5 w-100 text-uppercase'><a href='https://ema-john-simple-eb79e.web.app/shop'>Shop Now</a></Button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/online-shopping-store-with-mobile-shopping-cart-mail-clouds-realistic-style-vector-illustration_548887-136.jpg?w=826&t=st=1669573001~exp=1669573601~hmac=7f10b737b784267fb5d2f3b5f1b176ea5047b791708bd079558042230a827789"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>GET UP TO 30% OFF NEW ARRIVALS</h1>
        <Button type="button"  class="btn btn-warning" className='m-0 mt-lg-5 w-100 text-uppercase'><a href='https://ema-john-simple-eb79e.web.app/shop'>Shop Now</a></Button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        




       

      /*  <div>
            <div className='mb-5 position-relative text-center'>
                <div>

                    <img className='img-fluid w-100 h-10' src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                </div>
                <div className='info text-black mb-5 mt-5'>
                   <br></br><br></br><br></br>
                   <h1>GET UP TO 30% OFF NEW ARRIVALS</h1>
                    
                   
                    <Button type="button"  class="btn btn-warning" className='m-0 mt-lg-5 w-100 text-uppercase'><a href='https://ema-john-simple-eb79e.web.app/shop'>Shop Now</a></Button>
                </div>
            </div>
        </div>*/
    );
};

export default Banner;