import React, { Component } from 'react'
import { getAllVehicles } from '../../utils/vehicle_requests'

class VehicleList extends Component {
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
    const vehicleList = () => {
      if (this.state.vehicles.length > 0) {
        this.state.vehicles.map(vehicle => {
        return <li>{vehicle.make}, {vehicle.model}</li>
      })
      } else {
        return "You currently have no vehicles"
      }
    }

    return (
          <ul>
            {vehicleList}
          </ul>
    )
  }
}

export default VehicleList
