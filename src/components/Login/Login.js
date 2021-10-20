import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <form className="container text-center mb-4 ">

            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">login</button>
            <br />
            <Link to="/signup">Create a New Account </Link>
            <div>-------------or--------------</div>
            <Button onClick={handleGoogleLogIn} >Google sign in</Button>

        </form>
    );
};

export default Login;