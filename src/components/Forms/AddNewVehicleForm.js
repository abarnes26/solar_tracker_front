import React, { Component } from 'react';
import { postVehicle } from '../../utils/vehicle_requests'
import { Redirect } from 'react-router'

class AddNewVehicleForm extends Component {
  constructor() {
    super()
    this.state = {
      make: "",
      model: "",
      mpg: "",
      redirect: false
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addVehicle = (event) => {
    event.preventDefault()
    let make = this.state.make
    let model = this.state.model
    let mpg = this.state.mpg
    let branchId = this.props.branchId
    postVehicle(branchId, make, model, mpg)
      .then(() => this.setState({ redirect: true }))
  }

  render() {
    const { redirect } = this.state
    return (
      <div className="new-form-container">
        <form className="new-vehicle-form">
          <h1>Add a new Vehicle</h1>
          <input
            className="input"
            type="text"
            placeholder="Make"
            value={ this.state.make}
            onChange={ this.updateField.bind(this, 'make' )}
          />
          <input
            className="input"
            type="text"
            placeholder="Model"
            value={ this.state.model}
            onChange={ this.updateField.bind(this, 'model') }
          />
          <input
            className="input"
            type="integer"
            placeholder="MPG"
            value={ this.state.mpg}
            onChange={ this.updateField.bind(this, 'mpg') }
          />
          <button
            className="submit-form-button"
            onClick={ this.addVehicle }
          >Create Vehicle
          </button>
        </form>
        {redirect && (
          <Redirect to={'/branches/1'}/>
        )}
      </div>
    );
  }
}

export default AddNewVehicleForm;
