import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const SignUp = () => {
    return (
        <div className='min-vh-100'>
            <h5>Please sign in with</h5>
            <div className="w-25 mx-auto text-start mb-3">
        {/* social log in */}
        <div>
          <SocialLogIn></SocialLogIn>
        </div>
        <div className="text-center my-3">
          <p> or </p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <span className="ms-3">
            Already registered?{" "}
            <Link to='/login'><button className="btn btn-link">Log in</button></Link>
          </span>
        </Form>
      </div>
        </div>
    );
};

export default SignUp;