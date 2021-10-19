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
                    <h3 className="text-black">First slide label</h3>
                    <p className="text-black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/slide10.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="text-black">Second slide label</h3>
                    <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/slide11.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="text-black">Third slide label</h3>
                    <p className="text-black">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    <Button className="bg-primary">Submit</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;