import React, { Component } from 'react';
import { addAccount } from '../../utils/request_helpers'


class CreateAccountForm extends Component {
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

  addAccount = (event) => {
    event.preventDefault()
    let email = this.state.email
    let password = this.state.password
    addAccount(email, password)
  }

  render() {
    return (
      <div className="new-account-form-container">
        <h2>Create a new account</h2>
        <form className="new-account-form">
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
            className="submit-account-button"
            onClick={ this.addAccount }
          >
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccountForm;
