import React from 'react';
import Information from '../Information/Information';
import NumberCounter from '../NumberCounter/NumberCounter';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Information></Information>
            <Services></Services>
            <NumberCounter></NumberCounter>
        </div>
    );
};

export default Home;