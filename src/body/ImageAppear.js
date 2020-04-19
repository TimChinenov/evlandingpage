import React, { Component } from 'react';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import './animations.scss';

class ImageAppear extends Component {

  render() {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    var divAnimation = "";
    var imageAnimation = "";
    if(this.props.animationState ===1) {
      divAnimation = "divAppear";
      imageAnimation = "imageAppear";
    } else if (this.props.animationState === 2) {
      divAnimation = "divDisappear";
      imageAnimation = "ImageDisappear";
    }
    return(
      <div className={ divAnimation }>
        <img src={images[this.props.imageIterator]} alt="animatedImages"></img>
        <div className={ imageAnimation }>
        </div>
      </div>
    )
  }
}

export default ImageAppear
