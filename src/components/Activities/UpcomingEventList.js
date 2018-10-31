import React, { Component } from 'react';

import UpcomingEvent from './UpcomingEvent';
import './UpcomingEventList.scss'

class UpcomingEventList extends Component {
  generateEventList(events) {
    return events.map((event, index) => {
      return (
        <UpcomingEvent event={event} />
      )
    })
  }
  
  render() {
    const {events} = this.props;

    console.log('Events: ', events);
    return (
      <div className='upcoming-events-section'>
        <span>UPCOMING EVENTS</span>
        {events.length === 0  && <div className='upcoming-event empty'>More events coming soon!</div>}
        {events.length > 0    && this.generateEventList(events)}
      </div>
    );
  }
}

export default UpcomingEventList;