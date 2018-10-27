import React from 'react';

import './Banner.scss'

const Banner = ({ title, tagline, backgroundImage, children }) => {
  return (
    <div className='banner'>
      { backgroundImage && <img src={backgroundImage} alt='banner' /> }
      <div className="triangle"></div>
      <div className='question'>{title}</div>
      <div className='answer'>{tagline}</div>
      { children && 
        <div className='banner-content'>
          {children}
        </div>
      }
    </div>
  );
}

export default Banner;