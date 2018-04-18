import React, { Component } from 'react';
import AddNewProjectForm from '../Forms/AddNewProjectForm'
import { getAllPvModules } from '../../utils/pv_module_requests'
import { getAllVehicles } from '../../utils/vehicle_requests'


class CreateProject extends Component {
  constructor() {
    super()
    this.state = {
      pvModules: [],
      vehicles: []
    }
  }

  componentDidMount = () => {
    getAllPvModules(this.props.branchId)
      .then((data) => this.setState({
        pvModules: data
      }) )
    getAllVehicles(this.props.branchId)
      .then((data) => this.setState({
        vehicles: data
      }))
  }

  render() {
    const branchModules = () => {
      if (this.state.pvModules) {
        this.state.pvModules.map(pvModule => {
            pvModule
        })
      }
    }

    return (
      <div className="create-form-container">
        <div className="create-form">
          <AddNewProjectForm branchModules={this.state.pvModules} branchId={this.props.branchId} branchVehicles={this.state.vehicles}/>
        </div>
      </div>
    );
  }
}

export default CreateProject;
