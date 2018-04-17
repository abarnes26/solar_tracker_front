import React, { Component } from 'react';
import { getAllProjects } from '../../utils/project_requests'

class BranchCarbonContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     projects: this.props.projects
  //   }
  // }

  // componentDidMount = () => {
  //   getAllProjects(this.props.branchId)
  //     .then((data) => this.setState({
  //       projects: data
  //     }) )
  // }

  render() {
    let activekW = 0
    let activeCount = 0
    let completedkW = 0
    let completedCount = 0

    const activeProjectCount = () => { if (this.props.projects) {
        this.props.projects.map(project => {
          if (project.status == 'active') {
            activeCount += 1
          }
        })
      }
      return activeCount
    }

    const activeProjectKwTotal = () => { if (this.props.projects) {
        this.props.projects.map(project => {
          if (project.status == 'active') {
            activekW += project.size_kW
          }
        })
      }
      return activekW
    }

    const completedProjectCount = () => { if (this.props.projects) {
        this.props.projects.map(project => {
          if (project.status == 'complete') {
            completedCount += 1
          }
        })
      }
      return completedCount
    }

    const completedProjectKwTotal = () => { if (this.props.projects) {
        this.props.projects.map(project => {
          if (project.status == 'complete') {
            completedkW += project.size_kW
          }
        })
      }
      return completedkW
    }

    return (
      <div className="branch-carbon-totals">
        <div className="project-totals">
          <div className="active-project-totals">
            <p> Active Projects: {activeProjectCount()} </p>
            <p> Active kW: {activeProjectKwTotal()} </p>
          </div>
          <div className="completed-project-totals">
            <p> Completed Projects: {completedProjectCount()} </p>
            <p> Completed kW: {completedProjectKwTotal()} </p>
          </div>
        </div>
        <div className="branch-carbon-graph">

        </div>
      </div>
    );
  }
}

export default BranchCarbonContainer;
