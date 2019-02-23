import React from 'react';

import Logo1 from '../../assets/images/logo1_resized.png'
import HeaderPhoto from '../../assets/images/santi-vedri-resized.jpg';
import './Hero.scss'

const Hero = ({ image }) => {
  return (
    <section id="hero" className="feature-container">
      <div id='hero-logo'>
        {!image && <img src={Logo1} alt='header-logo' />}
        {image && <img src={image} alt='header-logo' />}
      </div>
    </section>
  );
}

export default Hero;