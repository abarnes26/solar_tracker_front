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
          <Link to='/users/new' >
            <a href='/signup'>Sign Up</a>
          </Link>
          <Link to='/users/login' >
            <a href='/login'>Log In</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar
