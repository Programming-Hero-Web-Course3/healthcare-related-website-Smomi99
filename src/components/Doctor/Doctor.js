import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FcSms, FcCellPhone } from "react-icons/fc";
const Doctor = (props) => {
    const { name, email, phoneNumber, specialist, img } = props.doctor;
    return (

        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6 className="text-info">{specialist}</h6>
                    <p><FcSms size={32} />{email} </p>
                    <p> <FcCellPhone size={32} />{phoneNumber}</p>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Doctor;