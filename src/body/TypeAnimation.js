import React, { Component } from 'react';
import PageAnimation from './PageAnimation.js';
import './body.scss';


class TypeAnimation extends Component {
  constructor(props) {
    super(props);
    this.emails = ["A RESTAURANT!",
                    "A BRAND!",
                    "A BLOG!"];
    this.state = {
      animationState: 0,
      imageIterator: -1,
    };
  }

  incrementImageItr = () => {
    this.setState((state) => {
      return {animationState: 1,
              imageIterator: state.imageIterator===this.emails.length-1 ? 0 : state.imageIterator + 1}
    })
  }

  render() {
    var ReactRotatingText = require('react-rotating-text');
    return (
      <div className="row header-segment">
        <div className="col-6">
          <div className="type-segment">
            <h2> { "LET'S BUILD" } </h2>
            <h2>
            <ReactRotatingText items={ this.emails } pause="5000" deletingInterval="100"
                                 onTypingStart={() => this.setState(() => ({animationState: 0}))}
                                 onTypingEnd={() => this.incrementImageItr()}
                                 onDeletingStart={() => this.setState(() => ({animationState: 2}))}
                                 onDeletingEnd={() => this.setState(() => ({animationState: 3}))}/>
            </h2>
          </div>
        </div>
        <div className="col-6 page-segment">
          <PageAnimation {...this.state}/>
        </div>
      </div>
    )
  }
}

export default TypeAnimation
