import React, { Component } from 'react';
import {postBranch} from '../../utils/branch_requests'

class AddNewBranchForm extends Component {
  constructor() {
    super()
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: ""
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addBranch = (event) => {
    event.preventDefault()
    let street = this.state.street
    let city = this.state.city
    let state = this.state.state
    let zipcode = this.state.zipcode
    postBranch(street, city, state, zipcode)
  }

  render() {
    return (
      <div className="new-form-container">
        <h1>Add a new Branch</h1>
        <form className="new-account-form">
          <input
            className="input"
            type="text"
            placeholder="Street"
            value={ this.state.street}
            onChange={ this.updateField.bind(this, 'street' )}
          />
          <input
            className="input"
            type="text"
            placeholder="City"
            value={ this.state.city}
            onChange={ this.updateField.bind(this, 'city') }
          />
          <input
            className="input"
            type="text"
            placeholder="State"
            value={ this.state.state}
            onChange={ this.updateField.bind(this, 'state') }
          />
          <input
            className="input"
            type="text"
            placeholder="Zipcode"
            value={ this.state.zipcode}
            onChange={ this.updateField.bind(this, 'zipcode') }
          />
          <button
            className="submit-branch-button"
            onClick={ this.addBranch }
          >
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewBranchForm;
