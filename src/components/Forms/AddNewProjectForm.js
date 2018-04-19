import React, { Component } from 'react';
import { postProject } from '../../utils/project_requests'
import DropdownInput from 'react-dropdown'
import 'react-dropdown/style.css'
import { Redirect } from 'react-router'


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
      moduleName: "",
      vehicleName: "",
      redirect: false
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  updateDropDown = (key, event) => {
    this.setState({ [key]: event.value })
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
    let moduleName = this.state.moduleName
    let vehicleName = this.state.vehicleName
    let branchId = this.props.branchId
    postProject(street, city, state, zipcode, customerName, sizeKw, numberOfModules, branchId, moduleName, vehicleName)
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    const { redirect } = this.state
    const moduleList = this.props.branchModules.map(pvModule => {
      return pvModule.manufacturer + '-' + pvModule.model
    })
    const vehicleList = this.props.branchVehicles.map(vehicle => {
      return vehicle.make + '-' + vehicle.model
    })

    return (
      <div className="new-form-container">
        <form className="new-project-form">
          <h1> Add a Project </h1>
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
          <DropdownInput
              options={moduleList}
              className="dropdown"
              menuClassName='dropdown-input'
              onChange={ this.updateDropDown.bind(this, 'moduleName' )}
              value={ this.state.moduleName }
              placeholder='Select a Module'
          />
          <DropdownInput
              options={vehicleList}
              className="dropdown"
              menuClassName='dropdown-input'
              onChange={ this.updateDropDown.bind(this, 'vehicleName' )}
              value={ this.state.vehicleName }
              placeholder='Select a Vehicle'
          />
          <button
            className="submit-form-button"
            onClick={ this.addProject }
          >Create Project
          </button>
        </form>
        {redirect && (
          <Redirect to={'/branches/1'}/>
        )}
      </div>
    );
  }
}

export default AddNewProjectForm;
