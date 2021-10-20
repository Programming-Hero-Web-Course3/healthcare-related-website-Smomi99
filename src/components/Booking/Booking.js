import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Booking = () => {
    return (
        <Container>
            <Row className="mb-4">
                <Col sm>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Departments</option>
                        <option value="1">Pediatrics</option>
                        <option value="2">Cardiology</option>

                    </select>
                </Col>
                <Col sm>

                    <div className="">
                        <Form.Group controlId="dob">
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Doctors</option>
                        <option value="1">Robert Davis</option>
                        <option value="2">kristina Castle</option>

                    </select>
                </Col>
                <Col sm>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Time</option>
                        <option value="1">9:00 am</option>
                        <option value="2">10:00 am</option>
                        <option value="3">4:00 pm</option>

                    </select>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col sm>
                    <Form.Control type="text" placeholder="Full Name" /></Col>

                <Col>
                    <div className="form-group">
                        <textarea name="message" className="form-control" placeholder="Note for the doctor" rows="3" required="required"></textarea>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <Form.Control type="number" placeholder="Phone Number" />
                </Col>
                <Col sm>

                </Col>

            </Row>

            <Button className="mt-4">Book For Appointment</Button>

        </Container>
    );
};

export default Booking;