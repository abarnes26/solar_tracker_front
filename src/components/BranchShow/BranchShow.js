import React, { Component } from 'react';
import BranchCarbonContainer from './BranchCarbonContainer'
import BranchProjectsContainer from './BranchProjectsContainer'
import BranchVehiclesContainer from './BranchVehiclesContainer'
import BranchModulesContainer from './BranchModulesContainer'
import { Link } from 'react-router-dom'
import PvModuleList from './PvModuleList'
import { getAllPvModules, deletePvModule } from '../../utils/pv_module_requests'
import { getAllProjects } from '../../utils/project_requests'
import { deleteProject, updateProject } from '../../utils/project_requests'

class BranchShow extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount = () => {
    getAllProjects(this.props.branchId)
      .then((data) => this.setState({
        projects: data
      }) )
  }

  removeProject = (branchId, projectId) => {
    deleteProject(branchId, projectId)
    .then(() => getAllProjects(branchId)
    .then((data) => this.setState({
      projects: data
    }) ))
  }

  completeProject = (branchId, projectId, attr, value) => {
    updateProject(branchId, projectId, attr, value)
    .then(() => getAllProjects(branchId)
    .then((data) => this.setState({
      projects: data
    }) ))
  }

  render() {
    return (
      <div className="branch-show">
        <div>
          <BranchCarbonContainer branchId={this.props.branchId} projects={this.state.projects}/>
        </div>
        <div>
          <BranchProjectsContainer branchId={this.props.branchId} projects={this.state.projects} completeProject={this.completeProject} removeProject={this.removeProject}/>
          <BranchVehiclesContainer branchId={this.props.branchId} />
          <BranchModulesContainer branchId={this.props.branchId} />
        </div>
      </div>
    );
  }
}

export default BranchShow;
