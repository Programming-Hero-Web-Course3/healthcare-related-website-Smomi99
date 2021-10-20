import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Slider from 'react-slick';
import NumberCounter from '../NumberCounter/NumberCounter';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    });
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
            <h2 className="text-center"> Multiple Services {services.length}  </h2>
            <Slider {...settings}>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    >


                    </Service>)
                }
            </Slider>



        </div>
    );
};

export default Services;