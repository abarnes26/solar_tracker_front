import React, { Component } from 'react';

class DescriptionCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="app-description-card">
        <div class="app-description-logo-container">
          <img className='description-image' src={this.props.imageSource}/>
        </div>
        <div class="app-description-text-container">
          <p className='description-text'>{this.props.textDescription}</p>
        </div>
      </div>
    )
  }
}

export default DescriptionCard
