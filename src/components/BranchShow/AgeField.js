import React, { Component } from 'react'
import NumericInput from 'react-numeric-input'

class AgeField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: this.props.project.age_days
    }
  }

  updateField = (event) => {
    this.setState({ age: event })
  }

  updateAge = (event) => {
    event.preventDefault()
    let age = Number(this.state.age)
    console.log(age)
    this.props.ageUpdate(this.props.project.branch_id, this.props.project.id, 'age_days', age)
  }

  render() {
      if (this.props.project.status === 'active') {
        return (
          <div className="age-form-container">
            <form className="age-form">
              <NumericInput min={0} max={100} value={this.state.age} onChange={ this.updateField }/>
              <button
                className="submit-age-button"
                onClick={ this.updateAge }
              >Update Age
              </button>
            </form>
          </div>
        )
      } else {
        return null
      }
    }
  }

export default AgeField
