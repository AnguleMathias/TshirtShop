import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';
import { compose, graphql } from 'react-apollo';
import * as auth from '../helpers/Authentication';
import notification from '../helpers/Notifications'
import SignUpForm from '../components/authentication/SignUpForm';
import REGISTER_MUTATION from '../graphql/mutations/Authentication'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: ''
      }  
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    const { user } = this.state;
    user[name] = value;
    this.setState({user});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { name, password, email } = user;
    const { register, history } = this.props;
    if(!name) {
      notification(toastr, 'error', 'name is required')();
    } else if (!email) {
      notification(toastr, 'error', 'email is required')();
    } else if (!password) {
      notification(toastr, 'error', 'password is required')();
    } else {
      register({
        variables: {
          name,
          email,
          password,
        },
      })
      .then(() => {
        notification(toastr, 'success', `Welcome ${name}`)();
      })
      .catch((err) => {
        notification(toastr, 'error', err.graphQLErrors[0].message)();
      })
    }
  }

  render() {
    const { user, errors } = this.state;
    if (auth.isAuthenticated()) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <SignUpForm
          attributes={user}
          errorMessages={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default compose(
    graphql(REGISTER_MUTATION, { name: 'register' }),
    )(SignUp);
