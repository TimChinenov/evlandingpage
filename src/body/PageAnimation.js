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
    this.state = {
      imageIterator: 0
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeImage(), 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeImage() {
    const numberOfImages = 3;
    this.setState(state => ({
      imageIterator: state.imageIterator === numberOfImages - 1 ? 0 : state.imageIterator + 1
    }));
  }

  cycleThroughImages = () => {
    const images = [LandingPage1, LandingPage2, LandingPage3];
    var counter = 0;
    return <div><img src={images[this.state.imageIterator]}></img></div>;
  }

  render() {
    return(
      <div>
        <div className="web-border-top">

             <img src={ webBorderTop } alt="border-top"></img>

        </div>

        <div className="splash-screen">

            <h1>{ this.cycleThroughImages() }</h1>

        </div>

        <div className="web-border-bottom">

             <img src={ webBorderBottom } alt="border-top"></img>

        </div>


      </div>
    )
  }
}

export default PageAnimation;
