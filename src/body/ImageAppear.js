import React, { Component } from 'react';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import './animations.scss';

class ImageAppear extends Component {

  render() {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    return(
      <div className="divAppear">
        <img src={images[this.props.imageIterator]} alt="animatedImages"></img>
        <div className="imageAppear">
        </div>
      </div>
    )
  }


}

export default ImageAppear
