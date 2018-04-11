import React, { Component } from 'react';
// import {login} from '../utils/requests'


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  loginUser = (event) => {
    event.preventDefault()
    let email = this.state.email
    let password = this.state.password
    addAccount(email, password)
  }

  render() {
    return (
      <div className="session-form-container">
        <h2>Create a new account</h2>
        <form className="session-form">
          <input
            className="input"
            type="text"
            placeholder="E-mail"
            value={ this.state.email}
            onChange={ this.updateField.bind(this, 'email' )}
          />
          <input
            className="input"
            type="number"
            placeholder="Password"
            value={ this.state.password}
            onChange={ this.updateField.bind(this, 'password') }
          />
          <button
            className="submit-session-button"
            onClick={ this.loginUser }
          >
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
