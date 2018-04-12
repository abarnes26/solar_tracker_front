import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'

class ProjectList extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  render() {
    const projectList = this.state.projects.map(project => {
      return <li>{project.street}, {project.customer_name}</li>
    })


    return (
      <div className="project-list-container">
        <div className="project-list">
          <h3>{this.props.category} projects </h3>
          <ul>
            {projectList}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectList
