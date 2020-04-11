import React, { Component } from 'react'
import TypeAnimation from './type-animation.js';
import PageAnimation from './page-animation.js';
import './body.scss';

class MainBody extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row header-segment">
          <div className="col-6 type-segment">
            <TypeAnimation></TypeAnimation>
          </div>
          <div className="col-6 page-segment">
            <PageAnimation></PageAnimation>
          </div>
        </div>
      </div>
    )
  }
}

export default MainBody
