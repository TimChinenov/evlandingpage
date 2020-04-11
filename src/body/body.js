import React, { Component } from 'react'
import TypeAnimation from './type-animation.js';
//import PageAnimation from './page-animation.js';

class MainBody extends Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <div className="type-segment">
          <TypeAnimation></TypeAnimation>
        </div>
        <div className="page-segment">

        </div>
      </div>
    )
  }
}

export default MainBody
