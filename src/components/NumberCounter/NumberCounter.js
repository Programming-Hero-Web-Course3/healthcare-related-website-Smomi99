import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './NumberCounter.css'

const NumberCounter = () => {
    return (
        <div className="bg-img mb-4 mt-4">

            <Container >
                <Row className="text-center text-white p-4">
                    <Col sm><h1>
                        <CountUp
                            end={4200}
                            duration={6}
                        ></CountUp>
                    </h1>
                        <h4>Satisfied Patients </h4>

                    </Col>
                    <Col sm><h1>
                        <CountUp
                            end={25}
                            duration={6}
                        ></CountUp>
                    </h1>
                        <h4>Health Departments </h4>
                    </Col>
                    <Col sm><h1>
                        <CountUp
                            end={620}
                            duration={6}
                        ></CountUp>
                    </h1>
                        <h4>Hospitals Rooms </h4>
                    </Col>
                    <Col sm><h1>
                        <CountUp
                            end={100}
                            duration={6}
                        ></CountUp>
                    </h1>
                        <h4>Qualified Staffs </h4>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default NumberCounter;