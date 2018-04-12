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
          <ProjectList projects={activeProjects} category='Active' />
        </div>
        <div className="completed-project-list">
          <ProjectList projects={completedProjects} category='Completed' />
        </div>
      </div>
    )
  }
}

export default BranchProjectsContainer
