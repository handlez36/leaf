import React, { Component } from 'react';
import axios from 'axios';

import TopMessage from '../Common/TopMessage';
import Banner from '../Common/Banner';
import { EventsApi } from '../../services/events';
import './Activities.scss'

class Activities extends Component {
  state = {
    events: null,
    error: null
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  retrieveEvents() {
    EventsApi.all()
      .then(response => {
        const events = response.data && response.data.events;

        if (response.status === 200 && events) {
          this.setState({ events });
        } else {
          this.setState({ error: 'Unable to retrieve Wordpress events' });
        }
      })
      .catch(err => console.log('Network error retrieving Wordpress events. Error details: ', err))
  }

  renderNextEvent(event) {
    if (event) {
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
            <img />
            <div className='event-desc'>
              {event.description}
            </div>
          </div>
        </div>
      )
    } else {
      return <div className='next-event'>Events coming soon!</div>
    }
  }

  render() {
    const {events} = this.state;
    const nextEvent = EventsApi.getNextEvent(events);
    
    return (
      <div className='activities'>
        <Banner 
          title='ACTIVITIES'
          tagline='COMING SOON!!'
        />
        <div className="wrapper">
          <div className="next-event-section">
            <span>NEXT EVENT</span>
            { !events && <div>Loading...</div> }
            { events && this.renderNextEvent(nextEvent) }
          </div>
          <div className='upcoming-events-section'>
            <span>UPCOMING EVENTS</span>
            <div className='upcoming-event'>
            </div>
            <div className='upcoming-event'>
            </div>
            <div className='upcoming-event'>
            </div>
            <div className='upcoming-event'>
            </div>
            <div className='upcoming-event'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;