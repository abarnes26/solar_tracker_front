import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PvModuleList from './PvModuleList'


class BranchModulesContainer extends Component {
  render() {
    return (
      <div className="module-list-container">
        <div>
          <Link to='/branches/{this.props.branchId}/modules/new'>
            <button>Add a new module </button>
          </Link>
        </div>
        <div className="branch-module-list">
          <h3>Current Modules </h3>
          <PvModuleList />
        </div>
      </div>
    )
  }
}

export default BranchModulesContainer
