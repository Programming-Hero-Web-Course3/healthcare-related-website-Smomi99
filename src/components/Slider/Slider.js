import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/slide12.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className="text-black">Feel Like Home With Best Care</h2>
                    <p className="text-white">Qualified Doctors the day before or the day of the appointment.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/slide10.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className="text-black">A Network of Medical Professionals</h2>
                    <p className="text-white">Welcome to Cosgrove Hospital</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/slide11.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-black">Comprehensive Treatment & Services</h3>
                    <p className="text-white">Available 24 hours a day</p>
                    <Button className="bg-primary">Submit</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;