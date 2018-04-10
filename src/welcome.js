import React, { Component } from 'react';

export class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
  //   let links
  //   let loggedIn
  //
  //   if (loggedIn) {
  //   links = ['Log out']
  // } else {
  //   links = ['Sign Up', 'Log In']
  // }

    // const navBarLinks = links.map()
    return (
      <div className="nav-bar-container">
        <div className="nav-bar-title">
          <h1>Carbon Impact Tracker</h1>
        </div>
        <div className="nav-bar-links">
          <a href='./signup.html'>Sign Up</a>
          <a href='./login.html'>Log In</a>
        </div>
      </div>
    )
  }
}
