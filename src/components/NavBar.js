import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/welcome.css'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-title">
            <h1>Carbon Impact Tracker</h1>
            <img className="nav-bar-icon" src="http://www.free-icons-download.net/images/leaf-icon-72023.png" />
        </div>
        <div className="nav-bar-link-container">
  
        </div>
      </div>
    )
  }
}

export default NavBar
