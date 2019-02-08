import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import ModalImage from 'react-modal-image';

import { EventsApi } from '../../services/events';
import './UpcomingEvent.scss'

const UpcomingEvent = ({ event }) => {
  const url                   = event.image && event.image.url;

  return (
    <div className='upcoming-event'>
      <div className='title'>
        <div className='left'>{event.title}</div>
      </div>
      <div className='right'>- {EventsApi.formatDate(event.start_date)} -</div>
      <div className='description'>
        { ReactHtmlParser(event.description) }
      </div>
      {url && 
        <div className='image'>
          <ModalImage
            small={url}
            medium={url}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
      }
    </div>
  );
}

export default UpcomingEvent;