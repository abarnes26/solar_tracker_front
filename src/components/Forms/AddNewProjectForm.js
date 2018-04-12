import React, { Component } from 'react';
import { postProject } from '../../utils/project_requests'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class AddNewProjectForm extends Component {
  constructor() {
    super()
    this.state = {
      street: "",
      city: "",
      state: "",
      zipcode: "",
      customerName: "",
      sizeKw: "",
      numberOfModules: "",
      moduleId: ""
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addProject= (event) => {
    event.preventDefault()
    let street = this.state.street
    let city = this.state.city
    let state = this.state.state
    let zipcode = this.state.zipcode
    let customerName = this.state.customerName
    let sizeKw = this.state.sizeKw
    let numberOfModules = this.state.numberOfModules
    let moduleId = this.state.moduleId
    let branchId = this.props.branchId
    postProject(street, city, state, zipcode, customerName, sizeKw, numberOfModules, moduleId, branchId)
  }

  render() {
    const branchModules = (this.props.branchId) => {

    }
    return (
      <div className="new-branch-form-container">
        <h2>Add a new Branch</h2>
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
          <input
            className="input"
            type="text"
            placeholder="Customer Name"
            value={ this.state.customerName}
            onChange={ this.updateField.bind(this, 'customerName' )}
          />
          <input
            className="input"
            type="integer"
            placeholder="Size kW"
            value={ this.state.sizeKw}
            onChange={ this.updateField.bind(this, 'sizeKw' )}
          />
          <input
            className="input"
            type="integer"
            placeholder="Number of Modules"
            value={ this.state.numberOfModules }
            onChange={ this.updateField.bind(this, 'numberOfModules' )}
          />
          <input
            className="input"
            type="integer"
            placeholder="Size kW"
            value={ this.state.sizeKw }
            onChange={ this.updateField.bind(this, 'sizeKw' )}
          />
          <Dropdown
            options={branchModules}
            onChange={  this.updateField.bind(this, 'moduleId' )}
            value={ this.state.moduleId }
            placeholder="Select a Module"
          />
          <button
            className="submit-branch-button"
            onClick={ this.addProject }
          >
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewBranchForm;