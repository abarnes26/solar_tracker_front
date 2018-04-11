import React, { Component } from 'react';
import NavBar from './NavBar'
import WelcomeDescription from './WelcomeDescription'
import '../stylesheets/App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="hero-image">
        </div>
        <WelcomeDescription />
      </div>
    );
  } 
}

export default App;
