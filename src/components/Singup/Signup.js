import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const auth = getAuth();
const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();

        console.log('registration added', email, password);
        if (password.length < 6) {
            setError('paseord should be atleast 6 charecter')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })


    }
    return (
        <Form className="container text-center mb-4" onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Re-enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                SignUp
            </Button> <p>{error}</p><br />
            <Link to="/login">Already have an Account?</Link>
            <div>-------------or--------------</div>
            <Button>Google sign in</Button>
        </Form>
    );
};

export default Signup;