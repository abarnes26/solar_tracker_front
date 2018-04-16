import React, { Component } from 'react'
import { getAllVehicles, deleteVehicle } from '../../utils/vehicle_requests'

class VehicleList extends Component {
  render() {
      if (this.props.vehicles) {
        return (
        this.props.vehicles.map(vehicle => {
        return <li key={vehicle.id}>{vehicle.make}, {vehicle.model}
                            <button onClick={() => deleteVehicle(vehicle.branch_id, vehicle.id)}>delete</button>
                    </li>
        })
       )
      } else {
        return (
            <h4>You current have no vehicles</h4>
      )
      }
    }
  }

export default VehicleList
