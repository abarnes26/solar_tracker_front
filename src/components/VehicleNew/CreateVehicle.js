import React, { Component } from 'react';
import AddNewVehicleForm from '../Forms/AddNewVehicleForm'

class CreateVehicle extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1>Add a Vehicle to your branch </h1>
        <AddNewVehicleForm branchId={this.props.branchId}/>
      </div>
    );
  }
}

export default CreateVehicle;
