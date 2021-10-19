import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" py-4 bg-color">

            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-white">FB.</h5>
                    <p className="small text-muted">The cosgrove staff members are well trained professionals, We will fax the requested records directly to the qualified doctors the day before or the day of the appointment.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. HealthRecovery</p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted text-decoration-none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Get started</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">For more updates. Please subscribe here</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control" type="teemailxt" placeholder="Recipient's email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i>submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;