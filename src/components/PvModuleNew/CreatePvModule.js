import React, { Component } from 'react';
import AddNewModuleForm from '../Forms/AddNewModuleForm'

class CreatePvModule extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="create-form">
        <h1>Add a Module to your branch </h1>
        <AddNewModuleForm branchId={this.props.branchId}/>
      </div>
    );
  }
}

export default CreatePvModule;
