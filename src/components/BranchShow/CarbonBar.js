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
      systemCarbon += (project.total_system_carbon_impact_g)
    })
    return (systemCarbon/ 1000000)
  }


  render() {
    return (
      <div className="bar-carbon-graph">
        <h4> Carbon Produced by Elec Generation </h4>
        <BarChart
          axisLabels={{ y: 'Carbon (MT)'}}
          height={450}
          width={450}
          margin={{top: 10, right: 75, bottom: 75, left: 75}}
          axes
          data={[
            {x: 'Without Solar', y: this.utilityCarbon()},
            {x: 'With Solar', y: this.systemCarbon()}
          ]}
          style={{
                '.label': {
                  fill: 'black'
                }
              }}
        />
      </div>
    )
  }
}

export default CarbonBar
