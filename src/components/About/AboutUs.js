import React from 'react';

import FeatureRow from '../Features/FeatureRow';
import Banner from '../Common/Banner';
import Hero from '../Hero/Hero';
import banner from '../../assets/images/about-us.jpeg';
import teachers from '../../assets/images/teachers.jpeg';
import education from '../../assets/images/education.jpeg';
import HeaderPhoto from '../../assets/images/santi-vedri-resized.jpg';
import './AboutUs.scss'
import Header from '../Header/Header';

const AboutUs = (props) => {
  const rowOne = [
    { icon: 'fa-graduation-cap', text: 'Educate on the importance of financial literacy.' },
    { icon: 'fa-graduation-cap', text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: 'fa-life-ring', text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
    { icon: 'fa-handshake-o', text: 'Educate on the importance of financial literacy.' },
    { icon: 'fa-key', text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: 'fa-handshake-o', text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
  ];

  const rowTwo = [
    { icon: 'fa-handshake-o', text: 'Educate on the importance of financial literacy.' },
    { icon: 'fa-key', text: 'Provide support to advance the focus of education for teachers, students and schools.' },
    { icon: 'fa-handshake-o', text: 'Concentrate on the needs and support structure required of disadvantaged youth and the elderly.' },
  ]
  const rowOneText = [
    "Educate on the importance of financial literacy.",
    "Provide support to advance the focus of education for teachers, students and schools.",
    "Concentrate on the needs and support structure required of disadvantaged youth and the elderly."
  ]

  const rowOneIcons = [
    'fa-hand-holding-usd', 'fa-graduation-cap', 'fa-life-ring'
  ]

  const rowTwoText = [
    "Support youth sports and activities.",
    "Teach the keys to success by inspiring longevity, continuous development, entrepreneurship and achievement through forward-thinking.",
    "Assist other non-profit organizations that share a similar vision"
  ]

  const rowTwoIcons = [
    'fa-football-ball', 'fa-key', 'fa-handshake-o'
  ]

  return (
    <div className='about-us'>
      <div className='banner'>
        <div class='question'>What is The Leaf Foundation</div>
        <div class='answer'>The Leaf Foundation was established in June 2018. We are recognized as a public non-profit 501 (c) (3) organization whose mission is to...</div>
      </div>
      <FeatureRow details={rowOne} />
    </div>
  );
}

export default AboutUs;