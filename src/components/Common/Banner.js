import React from 'react';
import './Banner.scss'

const Banner = ({ title, tagline }) => {
  return (
    <div className='banner'>
      <div class='question'>{title}</div>
      <div class='answer'>{tagline}</div>
    </div>
  );
}

export default Banner;