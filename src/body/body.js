import React, { Component } from 'react'
import TypeAnimation from './TypeAnimation.js';
import './body.scss';

class MainBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <TypeAnimation />
      </div>
    )
  }
}

export default MainBody
