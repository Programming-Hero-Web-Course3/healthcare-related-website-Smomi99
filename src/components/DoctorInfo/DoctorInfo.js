import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Doctor from '../Doctor/Doctor';
import NumberCounter from '../NumberCounter/NumberCounter';
const DoctorInfo = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    })
    return (
        <Container className="mb-4 mt-4">
            <h1 className=" mb-4">Meet Our Doctors</h1>

            <Row className="gap-4">


                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    ></Doctor>)
                }



            </Row>
            <NumberCounter></NumberCounter>
        </Container>
    );
};

export default DoctorInfo;