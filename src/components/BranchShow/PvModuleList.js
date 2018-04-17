import React, { Component } from 'react'

class PvModuleList extends Component {
  render() {
      if (this.props.pvModules.length > 0) {
        return (
        this.props.pvModules.map(pvModule => {
        return <li key={pvModule.id}>{pvModule.manufacturer}, {pvModule.model}
                            <button onClick={() => this.props.remove(pvModule.branch_id, pvModule.id)}>delete</button>
                    </li>
        })
       )
      } else {
        return (
            <h4>You current have no PV Modules</h4>
      )
      }
    }
  }

export default PvModuleList
