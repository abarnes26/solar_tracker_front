import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'
import ProjectList from './ProjectList'
import { Link } from 'react-router-dom'
import { deleteProject, updateProject } from '../../utils/project_requests'

class BranchProjectsContainer extends Component {
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

  activeProjects = () => {
    let activeList = []
    if (this.state.projects) {
    this.state.projects.map(project => {
      if (project.status == 'active') {
        activeList.push(project)
      }
    })
  }
  return activeList
}

  completedProjects = () => {
    let completeList = []
    if (this.state.projects) {
    this.state.projects.map(project => {
      if (project.status == 'complete') {
        completeList.push(project)
      }
    })
  }
  return completeList
}
  render() {

  const address = `/projects/new/branch/${this.props.branchId}`

    return (
      <div className="project-list-container">
        <div>
          <Link to={address} className="add-button">
            + Project
          </Link>
        </div>
        <div className="active-project-list">
        <h3>Active projects </h3>
          <ProjectList projects={this.activeProjects()} remove={this.removeProject} update={this.completeProject}/>
        </div>
        <div className="completed-project-list">
        <h3>Completed projects </h3>
          <ProjectList projects={this.completedProjects()} remove={this.removeProject} update={this.completeProject}/>
        </div>
      </div>
    )
  }
}

export default BranchProjectsContainer
