import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './UpcomingEvent.scss'

const UpcomingEvent = ({ event }) => {
  const url = event.image && event.image.url;

  return (
    <div className='upcoming-event'>
      <div className='title'>
        <div className='left'><u>{event.title}</u></div>
        <div className='right'>Oct. 30</div>
      </div>
      <div className='description'>
        { ReactHtmlParser(event.description) }
      </div>
      {url && 
        <div className='image'>
          <img src={url} alt='event' />
        </div>
      }
    </div>
  );
}

export default UpcomingEvent;