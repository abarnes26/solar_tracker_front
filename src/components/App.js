import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom'
import '../stylesheets/App.css';
import NavBar from './NavBar'
import LandingPage from './Homepage/LandingPage'
import AddNewBranchForm from './Forms/AddNewBranchForm'
import CreateAccount from './SessionPages/CreateAccount'
import Login from './SessionPages/Login'
import Dashboard from './UserDashboard/Dashboard'
import BranchShow from './BranchShow/BranchShow'
import CreatePvModule from './PvModuleNew/CreatePvModule'
import CreateVehicle from './VehicleNew/CreateVehicle'
import CreateProject from './ProjectNew/CreateProject'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='App'>
        <div className='header-section'>
          <header>
            <NavBar />
          </header>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/users/new' component={CreateAccount} />
          <Route exact path='/users/login' component={Login} />
          <Route exact path='/new/branches' component={AddNewBranchForm} />
          <Route exact path='/modules/new/branch/:id' render={({ match }) => {
          	const { id } = match.params
          	  return <CreatePvModule branchId = {id} />
              }
          	}/>
            <Route exact path='/vehicles/new/branch/:id' render={({ match }) => {
            	const { id } = match.params
            	  return <CreateVehicle branchId = {id} />
                }
            	}/>
            <Route exact path='/projects/new/branch/:id' render={({ match }) => {
            	const { id } = match.params
            	  return <CreateProject branchId = {id} />
                }
            	}/>
            <Route exact path='/branches/:id' render={({ match }) => {
            	const { id } = match.params
            	  return <BranchShow branchId = {id} />
              	}
              }/>
          <Route exact path='/dashboard' component={Dashboard} />
      </div>
    </div>
    );
  }
}

export default App;
