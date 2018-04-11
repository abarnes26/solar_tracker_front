import React, { Component } from 'react';
import FeatureCard from './FeatureCard'
// import '../stylesheets/description.css'

class WelcomeDescription extends Component {
  render() {
    return (
      <div id="app-description-container">
        <FeatureCard textDescription="Easily create branches and manage solar projects" imageSource="http://cdn.onlinewebfonts.com/svg/img_466167.png"/>
        <FeatureCard textDescription="Get environmental impact data and projections from your solar installations" imageSource="http://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png"/>
        <FeatureCard textDescription="Easily export environmental impact data to excel or csv format" imageSource="https://cdn3.iconfinder.com/data/icons/minicons-for-web-sites/24/minicons2-59-512.png"/>
      </div>
    )
  }
}

export default WelcomeDescription
