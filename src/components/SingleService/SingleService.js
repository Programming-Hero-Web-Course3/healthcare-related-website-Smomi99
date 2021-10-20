import React from 'react';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';
import NumberCounter from '../NumberCounter/NumberCounter';

const SingleService = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2 className="text-center mb-4">Your selected services is <span className="text-danger">{serviceId}</span> </h2>
            <Booking></Booking>
            <NumberCounter></NumberCounter>
        </div>
    );
};

export default SingleService;