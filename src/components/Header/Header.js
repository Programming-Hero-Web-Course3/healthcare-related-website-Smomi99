
import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Modal } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand ><Link className="text-decoration-none" to="/"><span className="text-info">Health</span>Recovery</Link></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link > <NavLink to="/home" className="text-decoration-none" activeStyle={{
                            fontWeight: "bold",
                            color: "#13c5dd"
                        }}> Home </NavLink></Nav.Link>



                        <Nav.Link >
                            <NavLink to="/services" className="text-decoration-none " activeStyle={{
                                fontWeight: "bold",
                                color: "#13c5dd"
                            }}> Services </NavLink>
                        </Nav.Link>
                        <Nav.Link >
                            <NavLink to="/doctors" className="text-decoration-none " activeStyle={{
                                fontWeight: "bold",
                                color: "#13c5dd"
                            }}> Doctors </NavLink>
                        </Nav.Link>
                        <Nav.Link ><NavLink to="/about" className="text-decoration-none" activeStyle={{
                            fontWeight: "bold",
                            color: "#13c5dd"
                        }}> About Us</NavLink></Nav.Link>

                        {user.email && <span>wellcome {user.displayName}</span>}

                        {
                            user.email ?
                                <button onClick={logOut}>Log out</button>
                                :
                                <Nav.Link onClick={() => setSmShow(true)}>Login</Nav.Link>}

                        <Button onClick={() => setLgShow(true)}>Book Appointment</Button>
                        {/* Modal for login and appointment */}
                        <Modal
                            size="sm"
                            show={smShow}
                            onHide={() => setSmShow(false)}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Body><Login></Login></Modal.Body>
                        </Modal>
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Book Appointment
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body><Booking></Booking></Modal.Body>
                        </Modal>



                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );
};

export default Header;