import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { deptname, img, description } = props.service;


    return (

        <div className="text-center d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{deptname}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/service/${deptname}`}><Button variant="primary">Details</Button></Link>
                </Card.Body>
            </Card>
        </div>



    );
};

export default Service;