import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './FeaturedEvent.scss'

const FeaturedEvent = ({ event }) => {  
  if (event) {
    const image = event.image && event.image.url;
    
    return (
      <div className='next-event'>
        <div className='title'>
          <span>{event.title}</span>
          <div>
            <span>{event.date}</span>
            <span></span>
          </div>
        </div>
        <div className='event-image-lg'>
          <img src={image} alt='featured' />
        </div>
        <div className='event-desc'>
          { ReactHtmlParser(event.description) }
        </div>
      </div>
    )
  } else {
    return <div className='next-event'>Events coming soon!</div>
  }
}

export default FeaturedEvent;