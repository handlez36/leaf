import React from 'react';

import TopMessage from '../Common/TopMessage';
import Banner from '../Common/Banner';
import './Activities.scss'

const Activities = (props) => {
  return (
    <div className='activities'>
      <Banner 
        title='ACTIVITIES'
        tagline='COMING SOON!!'
      />
      <div className="wrapper">
        <section className="container">
          <div className='triangle'></div>
          <div className='next-event'>
            NEXT EVENT
          </div>
        </section>
      </div>
      <div className='upcoming-events'>
        <div className='title'>UPCOMING EVENTS</div>
      </div>
    </div>
  );
}

export default Activities;