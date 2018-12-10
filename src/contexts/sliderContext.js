import React, { Component } from 'react';
import data from '../data/data';

const SliderContext = React.createContext()

class SliderProvider extends Component {
  state = {
    sliderData: data.properties,
    activeSlide: data.properties[0]
  }

  render() {
    return (
      <SliderContext.Provider>
        {this.props.children}
      </SliderContext.Provider>
    )
  }
}

export default SliderProvider;