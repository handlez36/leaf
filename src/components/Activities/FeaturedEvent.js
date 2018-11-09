import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ModalImage from 'react-modal-image';

import { EventsApi } from '../../services/events';
import './FeaturedEvent.scss'

const FeaturedEvent = ({ event }) => {  
  const image = event.image && event.image.url;

  if (event) {
    return (
      <div className='past-event'>
        <div className='header'>
          <div className='title'>{event.title}</div>
          <div className='date'>{EventsApi.formatDate(event.date)}</div>
        </div>
        <div className='body'>
          <div className='featured-image'>
            <ModalImage
              small={image}
              medium={image}
              hideDownload={true}
              hideZoom={true}
              alt={event.title}
            />
          </div>
          <div className='description'>
            { ReactHtmlParser(event.description) }
          </div>
        </div>
      </div>
    )
  } else {
    return <div className='next-event'>Coming soon!</div>
  }
}

export default FeaturedEvent;