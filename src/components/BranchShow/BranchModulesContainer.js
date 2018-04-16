import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PvModuleList from './PvModuleList'
import { getAllPvModules } from '../../utils/pv_module_requests'

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

  render() {
    const address = `/modules/new/branch/${this.props.branchId}`

    return (
      <div className="module-list-container">
        <div>
          <Link to={address}>
            Add a new module
          </Link>
        </div>
        <div className="branch-module-list">
          <h3>Current Modules </h3>
          <PvModuleList pvModules={this.state.pvModules}/>
        </div>
      </div>
    )
  }
}

export default BranchModulesContainer
