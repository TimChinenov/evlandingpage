import React, { Component } from 'react';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import webBorderTop from '../assets/webBorderTop.png';
import webBorderBottom from '../assets/webBorderBottom.png';
import './animations.scss';

class ImageStatic extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    return(
      <div className="divStatic">
        <img src={images[this.props.imageIterator]}></img>
      </div>
    )
  }


}

export default ImageStatic
