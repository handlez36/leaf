import React from 'react';

import FeatureRow from '../Features/FeatureRow';
import Banner from '../Common/Banner';
import './AboutUs.scss'

const AboutUs = (props) => {
  const features = 
  [
    { icon: 'fa-graduation-cap',  text: 'Educate on the importance of financial literacy.' },
    { icon: 'fa-graduation-cap',  text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: 'fa-life-ring',       text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
    { icon: 'fa-handshake-o',     text: 'Educate on the importance of financial literacy.' },
    { icon: 'fa-key',             text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: 'fa-handshake-o',     text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
  ];

  return (
    <div className='about-us'>
      <Banner
        title='What is The Leaf Foundation'
        tagline='The Leaf Foundation was established in June 2018. We are recognized as a public non-profit 501 (c) (3) organization whose mission is to...'
      />
      <FeatureRow details={features} />
    </div>
  );
}

export default AboutUs;