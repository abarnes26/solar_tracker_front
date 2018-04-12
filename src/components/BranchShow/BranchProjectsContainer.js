import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'
import ProjectList from './ProjectList'
import { Link } from 'react-router-dom'


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

  render() {
    const activeProjects = () => { if (this.state.projects) {
        this.state.projects.map(project => {
          if (project.status == 'active') {
            project
        }
      })
    }
  }

    const completedProjects = () => { if (this.state.projects) {
        this.state.projects.map(project => {
          if (project.status == 'complete') {
            project
        }
      })
    }
  }

    return (
      <div className="project-list-container">
        <div>
          <Link to='/projects/new'>
            <button>Add a new project </button>
          </Link>
        </div>
        <div className="active-project-list">
        <h3>Active projects </h3>
          <ProjectList projects={activeProjects} />
        </div>
        <div className="completed-project-list">
        <h3>Completed projects </h3>
          <ProjectList projects={completedProjects} />
        </div>
      </div>
    )
  }
}

export default BranchProjectsContainer
