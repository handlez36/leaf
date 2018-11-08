import React, { Component } from 'react';

import UpcomingEvent from './UpcomingEvent';
import './UpcomingEventList.scss'

class UpcomingEventList extends Component {
  generateEventList(events) {
    return events.map(event => {
      return (
        <UpcomingEvent event={event} />
      )
    })
  }

  eventsAvailable(events) {
    return events && events.length > 0;
  }
  
  render() {
    const {events} = this.props;

    return (
      <div className='upcoming-events-section'>
        <span>UPCOMING EVENTS</span>
        {!this.eventsAvailable(events) && <div className='upcoming-event empty'>Events coming soon!</div>}
        { this.eventsAvailable(events)  && this.generateEventList(events)}
      </div>
    );
  }
}

export default UpcomingEventList;