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
          <Route exact path='/branches/new' component={AddNewBranchForm} />
          <Route exact path='/branches/:id' render={({ match }) => {
          	const { id } = match.params
          	  return <BranchShow branchId={id} />
          	}
          }/>
          <Route exact path='/dashboard' component={Dashboard} />
      </div>
    </div>
    );
  }
}

export default App;
