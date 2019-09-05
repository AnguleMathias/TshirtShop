/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../commons/FormInput';
import './authentication.scss';

const Button = () => {
  return (
    <React.Fragment>
      <button type="submit" className="auth-btn btn btn-default">
        Sign Up
      </button>
      <br />
      <br />
      <center>
        <div className="separator" />
      </center>
      <br />
      <div className="login-footer">
        <p>
         Already registered?
          {' '}
          <Link to="/login">
            Login Here
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}

const SignUpForm = ({...props}) => {
  const { handleChange, attributes, handleSubmit } = props;
  return (
    <div className="register">
      <div className="container auth-user">
        <div className="row logo-row">
          <h1> Sign Up</h1>
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='name'
            required='required'
            value={attributes.name}
            placeholder='Enter name'
            onChange={handleChange}
          />
          <br />
          <FormInput
            type='text'
            name='email'
            required='required'
            value={attributes.email}
            placeholder='Enter email address'
            onChange={handleChange}
          />
          <br />
          <FormInput
            type='password'
            name='password'
            required='required'
            value={attributes.password}
            placeholder='Enter password'
            onChange={handleChange}
          />
          <br />
          {Button()}
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;
