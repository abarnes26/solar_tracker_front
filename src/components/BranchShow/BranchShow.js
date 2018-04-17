import React, { Component } from 'react';
import BranchCarbonContainer from './BranchCarbonContainer'
import BranchProjectsContainer from './BranchProjectsContainer'
import BranchVehiclesContainer from './BranchVehiclesContainer'
import BranchModulesContainer from './BranchModulesContainer'

class BranchShow extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="branch-show">
        <div>
          <BranchCarbonContainer branchId={this.props.branchId} />
        </div>
        <div>
          <BranchProjectsContainer branchId={this.props.branchId} />
          <BranchVehiclesContainer branchId={this.props.branchId}/>
          <BranchModulesContainer branchId={this.props.branchId}/>
        </div>
      </div>
    );
  }
}

export default BranchShow;
