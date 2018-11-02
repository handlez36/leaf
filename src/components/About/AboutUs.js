import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faHandHoldingUsd, faLifeRing, faHandshake, faKey, faFootballBall } from '@fortawesome/free-solid-svg-icons';

import FeatureRow from '../Features/FeatureRow';
import Banner from '../Common/Banner';
import background from '../../assets/images/about-us-banner-resized.jpg'
import './AboutUs.scss'

const AboutUs = (props) => {
  library.add(faGraduationCap, faHandHoldingUsd, faLifeRing, faHandshake, faKey, faFootballBall);

  const features = 
  [
    { icon: faHandHoldingUsd,   text: 'Educate on the importance of financial literacy.' },
    { icon: faGraduationCap,    text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: faLifeRing,         text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
    { icon: faFootballBall,     text: 'Support youth sports and activities.' },
    { icon: faKey,              text: 'Teach the keys to success by inspiring longevity, continuous development, entrepreneurship and achievement through forward-thinking.' },
    { icon: faHandshake,        text: 'Assist other non-profit organizations that share a similar vision.' },
  ];

  return (
    <div className='about-us'>
      <Banner
        title='What is The Leaf Foundation?'
        tagline='The Leaf Foundation was established in June 2018. We are recognized as a public non-profit 501 (c) (3) organization whose mission is to...'
        backgroundImage={background}
      />
      <FeatureRow details={features} />
    </div>
  );
}

export default AboutUs;