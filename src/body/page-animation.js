import React, { Component } from 'react';
import { slideInRight, slideOutRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import webBorderTop from '../assets/webBorderTop.png';
import webBorderBottom from '../assets/webBorderBottom.png';
import webBorderSide from '../assets/webBorderSide.png';
import LandingPage1 from '../assets/LandingPage1.png';

class PageAnimation extends Component {
  render() {
    const slideInAnimation = keyframes`${slideInRight}`
    const slideOutAnimation = keyframes`${slideOutRight}`
    const SlidingDiv = styled.div`
    animation: 1s ${slideInAnimation};
    `
    return(
      <div>
        <div className="web-border-top">
          <SlidingDiv>
             <img src={ webBorderTop } alt="border-top"></img>
          </SlidingDiv>
        </div>

        <div className="web-border-left">
          <SlidingDiv>
             <img src={ webBorderSide } alt="border-side"></img>
          </SlidingDiv>
        </div>

        <div className="splash-screen">
          <SlidingDiv>
            <img src={ LandingPage1 } alt="landing-page"></img>
          </SlidingDiv>
        </div>

        <div className="web-border-right">
          <SlidingDiv>
             <img src={ webBorderSide } alt="border-side"></img>
          </SlidingDiv>
        </div>


      </div>
    )
  }
}

export default PageAnimation;
