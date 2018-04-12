import React, { Component } from 'react';
import WelcomeDescription from './WelcomeDescription'

class LandingPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='hero-image'></div>
        <WelcomeDescription />
      </div>
    )
  }
}

export default LandingPage
