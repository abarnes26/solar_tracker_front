import React, { Component } from 'react'

class VehicleList extends Component {
  render() {
      if (this.props.vehicles.length > 0) {
        return (
        this.props.vehicles.map(vehicle => {
        return <li key={vehicle.id}>{vehicle.make}, {vehicle.model}
                            <button onClick={() => this.props.remove(vehicle.branch_id, vehicle.id)}>delete</button>
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
