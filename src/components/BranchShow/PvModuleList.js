import React, { Component } from 'react'
import { getAllPvModules } from '../../utils/pv_module_requests'

class PvModuleList extends Component {
  constructor() {
    super()
    this.state = {
      pvModules: []
    }
  }

  componentDidMount = () => {
    getAllPvModules(this.props.branchId)
      .then((data) => this.setState({
        pvModules: data
      }) )
  }


  render() {
    const moduleList = () => {
      if (this.state.pvModules.length > 0) {
      this.state.pvModules.map(pvModule => {
      return <li>{pvModule.manufacturer}, {pvModule.model}</li>
      })
    } else {
      return "You current have no PV Modules"
    }
  }
    return (
          <ul>
            {moduleList}
          </ul>
    )
  }
}

export default PvModuleList
