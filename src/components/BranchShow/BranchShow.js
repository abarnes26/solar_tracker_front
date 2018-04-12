import React, { Component } from 'react';
import BranchCarbonContainer from './BranchCarbonContainer'
import BranchProjectsContainer from './BranchProjectsContainer'

class BranchShow extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <h1> Branch Show </h1>
        <BranchCarbonContainer branchId={this.props.branchId} />
        <BranchProjectsContainer branchId={this.props.branchId} />
      </div>
    );
  }
}

export default BranchShow;
