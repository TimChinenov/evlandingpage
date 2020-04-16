import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import ImageAppear from './ImageAppear.js';
import ImageDisappear from './ImageDisappear.js';

class PageAnimation extends Component {

  constructor(props) {
    super(props);
  }

  cycleThroughImages = () => {
    if (this.props.animationState === 1)
    {
      return <ImageAppear {...this.props}/>;
    }
    else if (this.props.animationState === 2) {
      return <ImageDisappear {...this.props}/>;
    }
  }

  render() {
    return(
      <div>
        <div className="splash-screen">
          <h1> { this.cycleThroughImages() } </h1>
        </div>
      </div>
    )
  }
}

export default PageAnimation;
