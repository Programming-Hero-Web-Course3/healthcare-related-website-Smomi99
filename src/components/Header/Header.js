
import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Booking from '../Booking/Booking';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><span className="text-info">Health</span>Recovery</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link > <NavLink to="/home" className="text-decoration-none" activeStyle={{
                            fontWeight: "bold",
                            color: "#13c5dd"
                        }}> home </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/about" className="text-decoration-none" activeStyle={{
                            fontWeight: "bold",
                            color: "#13c5dd"
                        }}> about </NavLink></Nav.Link>


                        <Nav.Link >
                            <NavLink to="/services" className="text-decoration-none " activeStyle={{
                                fontWeight: "bold",
                                color: "#13c5dd"
                            }}> services </NavLink>
                        </Nav.Link>


                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        <Nav.Link onClick={() => setSmShow(true)}>Login</Nav.Link>

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