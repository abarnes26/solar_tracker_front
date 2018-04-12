import React, { Component } from 'react';
import DashboardCarbonContainer from './DashboardCarbonContainer'

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <DashboardCarbonContainer/>
      </div>
    );
  }
}

export default Dashboard;
