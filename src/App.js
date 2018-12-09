import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './components/SliderComponent/SliderComponent';

import data from './data/data';
class App extends Component {
  state = {
    sliderData: data.properties,
    activeSlide: data.properties[0] 
  }

  render() {
    const {activeSlide} = this.state

    console.log(data.properties[0].picture)
    return (
      <Slider />
    );
  }
}

export default App;
