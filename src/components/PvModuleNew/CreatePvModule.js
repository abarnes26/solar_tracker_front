import React, { Component } from 'react';
import AddNewModuleForm from '../Forms/AddNewModuleForm'

class CreatePvModule extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="create-form-container">
        <div className="create-form">
          <AddNewModuleForm branchId={this.props.branchId}/>
        </div>
      </div>
    );
  }
}

export default CreatePvModule;
