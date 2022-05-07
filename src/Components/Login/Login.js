import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogIn from "../SocialLogIn/SocialLogIn";

const Login = () => {
  return (
    <div className='min-vh-100'>
      <h5>Please log in with</h5>
      <div className="w-25 mx-auto text-start mb-3">
        {/* social log in */}
        <div>
          <SocialLogIn></SocialLogIn>
        </div>
        <div className="text-center my-3">
          <p> or </p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <span className="ms-3">
            <Link to=''><button className="btn text-danger btn-link">Forgot Password?</button></Link>
          </span>
        </Form>
        <div className="mt-5">
            Don't have an account?{" "}
            <Link to='/signin'><button className="btn btn-link">Sign Up</button></Link>
          </div>
      </div>
    </div>
  );
};

export default Login;
