import React, { Component } from 'react'

class Branch extends Component {
  constructor() {
    super()
    this.state = {
      branches: []
    }
  }

  componentDidMount = () => {
    fetch(`https://solar-carbon-tracker-api.herokuapp.com/api/v1/branches`)
      .then((response) => response.json())
      .then((data) => this.setState({
        branches: data
      }) )
  }

  render() {
    const branchList = this.state.branches.map(branch => {
      return <li>{branch.att}</li>
    })
    
    return (
      <ul>
        {branchList}
      </ul>

    )
  }
}

export default Branch
