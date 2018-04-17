import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PvModuleList from './PvModuleList'
import { getAllPvModules, deletePvModule } from '../../utils/pv_module_requests'

class BranchModulesContainer extends Component {
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

  removeModule = (branchId, pvModuleId) => {
    deletePvModule(branchId, pvModuleId)
    .then(() => getAllPvModules(branchId)
    .then((data) => this.setState({
      pvModules: data
    }) ))
  }

  render() {
    const address = `/modules/new/branch/${this.props.branchId}`

    return (
      <div className="module-list-container">
        <div>
          <Link to={address} className="add-button">
            + Module
          </Link>
        </div>
        <div className="branch-module-list">
          <h3>Current Modules </h3>
          <PvModuleList pvModules={this.state.pvModules} remove={this.removeModule}/>
        </div>
      </div>
    )
  }
}

export default BranchModulesContainer
