import React, { Component } from 'react';
import ImageAppear from './ImageAppear.js';

class PageAnimation extends Component {

  cycleThroughImages = () => {
    if (this.props.animationState === 1 ||
        this.props.animationState === 2)
    {
      return <ImageAppear {...this.props}/>;
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
