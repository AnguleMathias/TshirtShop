import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import toastr from 'toastr';
import LoginForm from '../../components/LoginForm';
import * as auth from '../helpers/Authentication';
import notification from '../helpers/Notifications';
import { compose, graphql } from 'react-apollo';
import { LOGIN_MUTATION } from '../graphql/mutations/Authentication';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
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
    const { email, password } = user;
    const { login, history } = this.props;
    if (!email) {
      notification(toastr, 'error', 'email is required')();
    } else if (!password) {
      notification(toastr, 'error', 'password is required')();
    } else {
      login({
        variables: {
          email,
          password,
        },
      })
      .then(() => {
        auth.setUsername(username);
        auth.setToken(token);
        history.push('/');
        notification(toastr, 'success', `Welcome ${email}`)();
      })
      .catch((error) => {
        notification(toastr, 'error', error.graphQLErrors[0].message)();
      })
    }
  }

  render() {
    const { user } = this.state;

    if (auth.isAuthenticated()) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <Navbar
          menuItems={[]}
        />
        <LoginForm
          errorMessages={errors}
          attributes={user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default compose(
    graphql(LOGIN_MUTATION, { name: 'login' }),
    )(Login);
