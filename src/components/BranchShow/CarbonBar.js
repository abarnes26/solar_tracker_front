import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'
import ProjectList from './ProjectList'
import { deleteProject, updateProject } from '../../utils/project_requests'
import {BarChart} from 'react-easy-chart';

class CarbonBar extends Component {
  constructor(props) {
    super(props)
  }

  utilityCarbon = () => {
    let utilityCarbon = 0
    this.props.projects.map(project => {
      utilityCarbon += (project.local_carbon_g_per_kWh * project.annual_production_kWh * 30)
    })
    return (utilityCarbon/ 1000000)
  }

  systemCarbon = () => {
    let systemCarbon = 0
    this.props.projects.map(project => {
      systemCarbon += (project.system_carbon_g_per_kWh * project.annual_production_kWh * 30)
    })
    return (systemCarbon/ 1000000)
  }


  render() {
    return (
      <div className="bar-carbon-graph">
        <h4> Carbon Produced by Elec Generation (MT) </h4>
        <BarChart
          axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
          height={400}
          width={400}
          margin={{top: 0, right: 75, bottom: 75, left: 75}}
          axes
          data={[
            {x: 'Without Solar', y: this.utilityCarbon()},
            {x: 'With Solar', y: this.systemCarbon()}
          ]}
        />
      </div>
    )
  }
}

export default CarbonBar
