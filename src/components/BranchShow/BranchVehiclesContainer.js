import React, { Component } from 'react'
import { getAllVehicles } from '../../utils/vehicle_requests'
import { Link } from 'react-router-dom'
import VehicleList from './VehicleList'


class BranchVehiclesContainer extends Component {
  constructor() {
    super()
    this.state = {
      vehicles: []
    }
  }

  componentDidMount = () => {
    getAllVehicles(this.props.branchId)
      .then((data) => this.setState({
        vehicles: data
      }) )
  }

  render() {
  const address = `/vehicles/new/branch/${this.props.branchId}`

    return (
      <div className="vehicle-list-container">
        <div>
          <Link to={address}>
            Add a new vehicle
          </Link>
        </div>
        <div className="branch-vehicle-list">
          <h3>Current Vehicles </h3>
          <VehicleList vehicles={this.state.vehicles} />
        </div>
      </div>
    )
  }
}


export default BranchVehiclesContainer
