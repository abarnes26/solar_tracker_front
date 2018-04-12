import React, { Component } from 'react';
import CreateAccountForm from '../Forms/CreateAccountForm'

class CreateAccount extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <CreateAccountForm />
      </div>
    );
  }
}

export default CreateAccount;
