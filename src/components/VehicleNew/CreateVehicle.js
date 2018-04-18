import React, { Component } from 'react';
import AddNewVehicleForm from '../Forms/AddNewVehicleForm'

class CreateVehicle extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="create-form-container">
        <div className="create-form">
          <AddNewVehicleForm branchId={this.props.branchId}/>
        </div>
      </div>
    );
  }
}

export default CreateVehicle;
