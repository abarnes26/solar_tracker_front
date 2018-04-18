import React, { Component } from 'react';
import { postPvModule } from '../../utils/pv_module_requests'
import { Redirect } from 'react-router'

class AddNewModuleForm extends Component {
  constructor() {
    super()
    this.state = {
      outputW: "",
      manufacturer: "",
      model: "",
      efficiency: "",
      widthMm: "",
      lengthMm: "",
      redirect: false
    }
  }

  updateField = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  addPvModule = (event) => {
    event.preventDefault()
    let outputW = this.state.outputW
    let manufacturer = this.state.manufacturer
    let model = this.state.model
    let efficiency = (this.state.efficiency/100.0)
    let widthMm = this.state.widthMm
    let lengthMm = this.state.lengthMm
    let branchId = this.props.branchId
    postPvModule(outputW, manufacturer, model, efficiency, widthMm, lengthMm, branchId)
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state
    return (
      <div className="new-branch-form-container">
        <h2>Add a new PV Module to your Branch</h2>
        <form className="new-module-form">
          <input
            className="input"
            type="integer"
            placeholder="Output W"
            value={ this.state.outputW}
            onChange={ this.updateField.bind(this, 'outputW' )}
          />
          <input
            className="input"
            type="text"
            placeholder="Manufacturer"
            value={ this.state.manufacturer}
            onChange={ this.updateField.bind(this, 'manufacturer') }
          />
          <input
            className="input"
            type="text"
            placeholder="Model"
            value={ this.state.model}
            onChange={ this.updateField.bind(this, 'model') }
          />
          <input
            className="input"
            type="integer"
            placeholder="Efficiency %"
            value={ this.state.efficiency}
            onChange={ this.updateField.bind(this, 'efficiency') }
          />
          <input
            className="input"
            type="integer"
            placeholder="Width MM"
            value={ this.state.widthMm}
            onChange={ this.updateField.bind(this, 'widthMm') }
          />
          <input
            className="input"
            type="integer"
            placeholder="Length MM"
            value={ this.state.lengthMm}
            onChange={ this.updateField.bind(this, 'lengthMm') }
          />
          <button
            className="submit-module-button"
            onClick={ this.addPvModule }
          >Create Module
          </button>
        </form>
        {redirect && (
          <Redirect to={'/branches/1'}/>
        )}
      </div>
    );
  }
}

export default AddNewModuleForm;
