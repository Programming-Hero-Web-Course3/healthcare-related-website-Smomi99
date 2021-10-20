import React from 'react';
import NumberCounter from '../NumberCounter/NumberCounter';

const About = () => {
    return (
        <>
            <div className="d-flex align-items-center container gap-4 mb-4 mt-4">
                <div>
                    <img src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/about4.png" alt="" />
                </div>
                <div>
                    <h2>Short Story About HealthRecovery
                        Medical Center</h2>
                    <strong>WE CREATE BEAUTIFULL SMILES</strong>
                    <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors.</p>

                    <small><strong>STEPHEN MATH, CEO</strong></small> <br />
                    <img src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/signature.png" alt="" />
                </div>
            </div>


            <NumberCounter></NumberCounter>

        </>
    );
};

export default About;