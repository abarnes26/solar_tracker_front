import React, { Component } from 'react'

class CompleteButton extends Component {

  render() {
      if (this.props.project.status === 'active') {
        return (
          <button className='complete-button' onClick={() => this.props.complete(this.props.project.branch_id, this.props.project.id, 'status', 'complete')}>complete</button>
        )
      } else {
        return(
          <button className='complete-button' onClick={() => this.props.complete(this.props.project.branch_id, this.props.project.id, 'status', 'active')}>re-activate</button>
        )
      }
    }
  }

export default CompleteButton
