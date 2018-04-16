import React, { Component } from 'react'
import { deletePvModule } from '../../utils/pv_module_requests'

class PvModuleList extends Component {
  render() {
      if (this.props.pvModules.length > 0) {
        return (
        this.props.pvModules.map(pvModule => {
        return <li key={pvModule.id}>{pvModule.manufacturer}, {pvModule.model}
                            <button onClick={() => deletePvModule(pvModule.branch_id, pvModule.id)}>delete</button>
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
