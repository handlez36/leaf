import React, { Component } from 'react';
import axios from 'axios';

import TopMessage from '../Common/TopMessage';
import Banner from '../Common/Banner';
import FeaturedEvent from './FeaturedEvent';
import UpcomingEventList from './UpcomingEventList';
import { EventsApi } from '../../services/events';
import BannerImage from '../../assets/images/activities-banner.jpg';
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

  render() {
    const {events}    = this.state;
    const splitEvents = EventsApi.splitEvents(events);
    
    return (
      <div className='activities'>
        <Banner 
          title='ACTIVITIES'
          tagline='COMING SOON!!'
          backgroundImage={BannerImage}
        />
        <div className="wrapper">
          <div className="next-event-section">
            <span>NEXT EVENT</span>
            { !events && <div>Loading...</div> }
            { events && <FeaturedEvent event={splitEvents['featured']} /> }
          </div>
          { !events && <div>Loading...</div> }
          { events && <UpcomingEventList events={splitEvents['remaining']} /> }
        </div>
      </div>
    );
  }
}

export default Activities;