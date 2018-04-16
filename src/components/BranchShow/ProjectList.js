import React, { Component } from 'react'
import { getAllProjects, deleteProject } from '../../utils/project_requests'

class ProjectList extends Component {
  render() {
      if (this.props.projects.length > 0) {
        return (
        this.props.projects.map(project => {
        return <li key={project.id}>{project.customer_name}, {project.street}
                            <button onClick={() => deleteProject(project.branch_id, project.id)}>delete</button>
                    </li>
        })
       )
      } else {
        return (
            <h4>You current have no projects here</h4>
      )
      }
    }
  }

export default ProjectList
