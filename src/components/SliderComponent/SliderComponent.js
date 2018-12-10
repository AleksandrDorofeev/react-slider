import React, { Component } from "react";
import './SliderComponent.scss';

import SliderCard from '../SliderCardComponent/SliderCardComponent';

class Slider extends Component {
  

  render() {
    return (
      <div className="slider">
        <button className="Slider__btn">prev</button>
        <button className="Slider__btn">next</button>
        <div className="Slider__content">
          <SliderCard />
        </div>
      </div>
    );
  }
}

export default Slider;
