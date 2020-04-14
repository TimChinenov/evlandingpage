import React, { Component } from 'react';
import { slideInRight,
         slideOutRight,
         slideInDown,
         slideOutDown} from 'react-animations';
import styled, { keyframes, css } from 'styled-components';
import webBorderTop from '../assets/webBorderTop.png';
import webBorderBottom from '../assets/webBorderBottom.png';
import webBorderSide from '../assets/webBorderSide.png';
import LandingPage1 from '../assets/LandingPage1.png';
import LandingPage2 from '../assets/LandingPage2.png';
import LandingPage3 from '../assets/LandingPage3.png';
import Page from './LandingPageAnimation';

class PageAnimation extends Component {

  constructor(props) {
    super(props);
  }

  cycleThroughImages = () => {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    return <div><img src={images[this.props.imageIterator]}></img></div>;
  }

  render() {
    return(
      <div>
        <div className="web-border-top">

             <img src={ webBorderTop } alt="border-top"></img>

        </div>

        <div className="splash-screen">
          <h1> { this.cycleThroughImages() } </h1>

        </div>

        <div className="web-border-bottom">

             <img src={ webBorderBottom } alt="border-top"></img>

        </div>


      </div>
    )
  }
}

export default PageAnimation;
