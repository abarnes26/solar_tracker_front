import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'

class ProjectList extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount = () => {
    getAllProjects()
      .then((data) => this.setState({
        projects: data
      }) )
  }

  render() {
    const projectList = () => {
      if (this.state.projects.length > 0) {
        this.state.projects.map(project => {
        return <li>{project.street}, {project.customer_name}</li>
        })
      } else {
        return "You currently have no projects"
      }
    }

    return (
          <ul>
            {projectList}
          </ul>
    )
  }
}

export default ProjectList
