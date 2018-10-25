import React from 'react';

import TopMessage from '../Common/TopMessage';
import './Activities.scss'

const Activities = (props) => {
  return (
    <div className='activities'>
      <div className="wrapper">
        <section className="container">
          <TopMessage 
              page='Activities'
              text='Coming Soon!' 
          />
        </section>
      </div>
    </div>
  );
}

export default Activities;