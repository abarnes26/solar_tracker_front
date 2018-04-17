import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'
import  CompleteButton  from './CompleteButton'
import  AgeField  from './AgeField'

class ProjectList extends Component {

  render() {
      if (this.props.projects.length > 0) {
        return (
        this.props.projects.map(project => {
        return <li className="list-item" key={project.id}>
                              {project.customer_name}, {project.street}
                            <AgeField project={project} ageUpdate={this.props.update}/>
                            <CompleteButton project={project} complete={this.props.update}/>
                            <button className='remove-button' onClick={() => this.props.remove(project.branch_id, project.id)}>delete</button>
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
