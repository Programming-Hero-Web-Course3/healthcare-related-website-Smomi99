import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
const auth = getAuth();
const Signup = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
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
        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                history.push(redirect_uri)
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, password) => {
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
            <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
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
            <div>
                <input onChange={toggleLogin} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Already Register?</label>
            </div>


            <Button variant="primary" type="submit">
                {isLogin ? 'Login' : 'SignUp'}
            </Button> <p>{error}</p><br />

            <div>-------------or--------------</div>
            <Button onClick={handleGoogleLogIn}>Google sign in</Button>
        </Form>
    );
};

export default Signup;