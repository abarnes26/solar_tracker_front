import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Sign in to your account</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
