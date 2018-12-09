import React from 'react';
import './SliderCardComponent.css';

import data from '../../data/data';

const SliderCard = (props) => {
  return (
    <div>
      <img src={data.properties[0].picture} alt="" />
    </div>
  )
}

export default SliderCard;