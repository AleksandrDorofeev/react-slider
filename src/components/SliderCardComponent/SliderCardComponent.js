import React from 'react';
import './SliderCardComponent.scss';

import data from '../../data/data';

const SliderCard = (props) => {
  return (
    <div className="slider-card">
      <img className="slider-card__image" src={data.properties[0].picture} alt="" />
    </div>
  )
}

export default SliderCard;