import React, { Component } from 'react';
import NavBar from './NavBar'
import CreateAccount from './CreateAccount'
import '../stylesheets/app.css';

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <CreateAccount />
      </div>
    );
  }
}

export default App;
