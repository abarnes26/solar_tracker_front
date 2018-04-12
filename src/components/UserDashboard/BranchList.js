import React, { Component } from 'react'
import { getAllBranches } from '../utils/branch_requests'

class BranchList extends Component {
  constructor() {
    super()
    this.state = {
      branches: []
    }
  }

  componentDidMount = () => {
    getAllBranches()
      .then((data) => this.setState({
        branches: data
      }) )
  }

  render() {
    const branchList = this.state.branches.map(branch => {
      return <li>{branch.city}</li>
    })

    return (
      <ul>
        {branchList}
      </ul>

    )
  }
}

export default Branch
