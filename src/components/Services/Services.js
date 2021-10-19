import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';

const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="mb-4 ">
            <h2 id="/services" className="text-center"> Multiple Services </h2>
            <Slider {...settings}>
                <div className="text-center d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/10/service-single-image-8-380x240.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="text-center d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/10/service-single-image-8-380x240.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="text-center d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/10/service-single-image-8-380x240.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="text-center d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/10/service-single-image-8-380x240.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>


            </Slider>
        </div>
    );
};

export default Services;