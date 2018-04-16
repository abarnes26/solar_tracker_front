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
      <div>
        <h1>Add a Project</h1>
        <AddNewProjectForm branchModules={this.state.pvModules} branchId={this.props.branchId} branchVehicles={this.state.vehicles}/>
      </div>
    );
  }
}

export default CreateProject;
