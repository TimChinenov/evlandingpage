import React, { Component } from 'react'
import TypeAnimation from './TypeAnimation.js';
import PageAnimation from './PageAnimation.js';
import './body.scss';

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationState: 0,
      imageIterator: 0
    };
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

  render() {
    return (
      <div className="container-fluid">
        <div className="row header-segment">
          <div className="col-6 type-segment">
            <TypeAnimation {...this.state} />
            <h1> { this.state.animationState } </h1>
          </div>
          <div className="col-6 page-segment">
            <PageAnimation {...this.state}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainBody
