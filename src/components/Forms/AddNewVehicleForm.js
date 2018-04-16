import React, { Component } from 'react';
import { postVehicle } from '../../utils/vehicle_requests'

class AddNewVehicleForm extends Component {
  constructor() {
    super()
    this.state = {
      make: "",
      model: "",
      mpg: ""
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
  }

  render() {
    return (
      <div className="new-vehicle-form-container">
        <h2>Add a new Vehicle</h2>
        <form className="new-vehicle-form">
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
            className="submit-branch-button"
            onClick={ this.addVehicle }
          >
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewVehicleForm;
