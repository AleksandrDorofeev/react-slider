import React, { Component } from 'react';
import './App.css';

import Slider from './components/SliderComponent/SliderComponent';

import data from './data/data';
class App extends Component {
  render() {

    console.log(data.properties[0].picture)
    return (
      <Slider />
    );
  }
}

export default App;
