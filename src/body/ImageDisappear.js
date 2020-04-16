import React, { Component } from 'react';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import './animations.scss';

class ImageDisappear extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    return (
      <div className="divDisappear">
        <img src={images[this.props.imageIterator]}></img>
        <div className="imageDisappear">
        </div>
     </div>)
  }
}

export default ImageDisappear
