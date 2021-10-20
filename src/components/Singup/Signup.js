import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <Form className="container text-center mb-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Re-enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button> <br />
            <Link to="/login">Already have an Account?</Link>
            <div>-------------or--------------</div>
            <Button>Google sign in</Button>
        </Form>
    );
};

export default Signup;