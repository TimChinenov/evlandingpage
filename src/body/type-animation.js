import React, { Component } from 'react';


class TypeAnimation extends Component {
  render() {
    const emails = ["a restaurant!",
                    "a online school!",
                    "a charity!",
                    "a movement!",
                    "a brand!",
                    "a realestate agency!"];
    var ReactRotatingText = require('react-rotating-text')
    return (
      <div className="type-animation-segment">
        <div className="type-animation-title">
          <h1>Hi Evervice!</h1>
        </div>
        <div className="type-animation-emailbox">
          <div className="type-animation-text">
            <span className="base-string" style={{marginRight:"2px"}}>I want to build</span>
            <ReactRotatingText items={emails} />
          </div>
        </div>
      </div>
    )
  }
}

export default TypeAnimation
