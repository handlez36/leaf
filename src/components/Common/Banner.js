import React from 'react';

import BannerImageExample1 from '../../assets/images/santi-vedri-resized.jpg'
import BannerImageExample2 from '../../assets/images/header1.jpg'
import './Banner.scss'

const Banner = ({ title, tagline }) => {
  return (
    <div className='banner'>
      <img src={BannerImageExample2} alt='banner' />
      <div className="triangle"></div>
      <div class='question'>{title}</div>
      <div class='answer'>{tagline}</div>
    </div>
  );
}

export default Banner;