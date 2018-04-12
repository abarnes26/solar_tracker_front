import React, { Component } from 'react'
import { getAllVehicles } from '../../utils/vehicle_requests'
import { Link } from 'react-router-dom'
import VehicleList from './VehicleList'


class BranchVehiclesContainer extends Component {
  render() {
    return (
      <div className="vehicle-list-container">
        <div>
          <Link to='/branches/{this.props.branchId}/vehicles/new'>
            <button>Add a new vehicle </button>
          </Link>
        </div>
        <div className="branch-vehicle-list">
          <h3>Current Vehicles </h3>
          <VehicleList branchId={this.props.branchId} />
        </div>
      </div>
    )
  }
}


export default BranchVehiclesContainer
