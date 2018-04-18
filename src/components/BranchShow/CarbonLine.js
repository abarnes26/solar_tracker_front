import React, { Component } from 'react'
import { getAllProjects } from '../../utils/project_requests'
import {LineChart} from 'react-easy-chart';

class CarbonLine extends Component {
  constructor(props) {
    super(props)
  }

  render() {

  const annualUtilityCarbon = () => {
    let utilityCarbon = 0
    this.props.projects.map(project => {
      utilityCarbon += (project.local_carbon_g_per_kWh * project.annual_production_kWh)
    })
    return (utilityCarbon/ 1000000)
  }

  const annualSystemCarbon = () => {
    let systemCarbon = 0
    this.props.projects.map(project => {
      systemCarbon += (project.system_carbon_g_per_kWh * project.annual_production_kWh)
    })
    return (systemCarbon/ 1000000)
  }

  const systemCarbon = () => {
    let systemCarbon = 0
    this.props.projects.map(project => {
      systemCarbon += (project.system_carbon_g_per_kWh * project.annual_production_kWh * 30)
    })
    return (systemCarbon/ 1000000)
  }

  const lifetimeUtilityCProgression = () => {
    let utilityCLifespan = [{x: 0, y: 0}]
    let utilityCProduction = 0
    let i
    for (i = 1; i < 6; i++) {
      utilityCProduction += annualUtilityCarbon()
      utilityCLifespan.push({x: i, y: utilityCProduction})
    }
    return utilityCLifespan
  }

  const lifetimeSystemCProgression = () => {
    let systemCLifespan = []
    let systemCProduction = systemCarbon()
    let i
    for (i = 0; i < 6; i++) {
      systemCProduction += annualSystemCarbon()
      systemCLifespan.push({x: i, y: systemCProduction})
    }
    return systemCLifespan
  }
    lifetimeSystemCProgression()
    return (
      <div className="bar-carbon-graph">
        <h4> Carbon Produced Over Lifespan of Systems </h4>
        <LineChart
          datapoints
          className='line-chart'
          axisLabels={{x: 'Years', y: 'Carbon (MT)'}}
          axes
          width={600}
          height={400}
          data={[
             lifetimeUtilityCProgression(),
             lifetimeSystemCProgression()
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

export default CarbonLine
