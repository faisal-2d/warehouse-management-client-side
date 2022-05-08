import { async } from '@firebase/util';
import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const SignUp = () => {
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  const onSubmitCreateUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);   
      
  }
  if (loading) {
    return (
        <div className="text-center my-5">
            <Spinner animation="border" variant="primary" />
        </div>
    );
  }
 
      return (
        <div className='min-vh-100'>
            <h5>Please sign in with</h5>
            <div className="w-25 mx-auto text-start mb-3">
        
        <div>
          <SocialLogIn></SocialLogIn>
        </div>
        <div className="text-center my-3">
          <p> or </p>
        </div>
        <Form onSubmit={onSubmitCreateUser}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name='name' placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" />
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