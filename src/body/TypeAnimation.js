import React, { Component } from 'react';


class TypeAnimation extends Component {
  constructor(props) {
    super(props);
    this.emails = ["a restaurant!",
                    "a brand!",
                    "a blog!"];

  }

  getTypewriterWord = () => {
    var itr = this.props.imageIterator;
    return [this.emails[itr]];
  }

  updateState = (stateNum) => {
    var state = stateNum;
  }

  render() {
    var ReactRotatingText = require('react-rotating-text');
    return (
      <div className="type-animation-segment">
        <div className="type-animation-title">
          <h1>Hi Evervice!</h1>
        </div>
        <div className="type-animation-emailbox">
          <div className="type-animation-text">
            <span className="base-string" style={{marginRight:"2px"}}>I want to build</span>
            <ReactRotatingText items={ this.getTypewriterWord() } pause='3000'
                                    onTypingStart={() => this.updateState(0)}
                                    onTypingEnd={() => this.updateState(1)}
                                    onDeletingStart={() => this.updateState(2)}
                                    onDeletingEnd={() => this.updateState(3)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default TypeAnimation
