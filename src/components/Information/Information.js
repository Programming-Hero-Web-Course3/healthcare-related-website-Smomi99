import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { FcLike, FcCalendar, FcClock } from "react-icons/fc";
import './Information.css'
const Information = () => {
    return (
        <>
            <Row>
                <Col sm className="d-flex bg-info border rounded justify-content-center gap-2 m-4 ">
                    <div className="mx-4"><h3> <FcLike size={64} /> </h3></div>
                    <div className="p-2">
                        <h1>Healthcare Research</h1>
                        <p>Doctor are choosing from our diverse pool of health specialists. Discover better health & wellness by using our doctors.</p>
                        <Button className="text-white" variant="outline-danger " >View Research</Button>{' '}
                    </div>

                </Col>
                <Col sm className="d-flex bg-warning border rounded justify-content-center gap-2 m-4 ">
                    <div className="mx-4"><h3> <FcCalendar size={64} /> </h3></div>
                    <div className="p-2">
                        <h1>Locations & Directions</h1>
                        <p>Patients traveling internationally are provided timely diagnostic and specialty care in a place designed to feel a little more like home</p>
                        <Button className="text-white" variant="outline-danger " >Get Direction</Button>{' '}
                    </div>

                </Col>
                <Col sm className="d-flex bg-primary border rounded justify-content-center gap-2 m-4 ">
                    <div className="mx-4"><h3> <FcClock size={64} /> </h3></div>
                    <div className="p-2">
                        <h1>Visitor Information</h1>
                        <table className="table text-white">

                            <tbody>
                                <tr>

                                    <td>Week Days</td>
                                    <td></td>
                                    <td>8:00-14:00</td>
                                </tr>
                                <tr>

                                    <td>Week Ends</td>
                                    <td></td>
                                    <td>7:30 -18:00</td>
                                </tr>
                                <tr>

                                    <td>Visitinf Appointment</td>
                                    <td></td>
                                    <td>Any Time</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </Col>



            </Row>


            <Container className="mt-4 mb-4">
                <h3 className="text-center">For emergency Cases Call to this number: <kbd> +880123456454</kbd> </h3>

                <Row className="mt-4 d-flex align-items-center">
                    <Col sm>
                        <img src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2018/03/dr-image.jpg" alt="" />
                    </Col>
                    <Col sm className="text-center">
                        <h1>Welcome to <span className="text-info">Health</span>Recovery</h1>
                        <h6 className="text-info ">SHORT HISTORY</h6>
                        <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Information;