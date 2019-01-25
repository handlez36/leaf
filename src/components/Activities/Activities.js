import React, { Component } from 'react';
import ModalImage from 'react-modal-image';

import Banner from '../Common/Banner';
import FeaturedEvent from './FeaturedEvent';
import UpcomingEventList from './UpcomingEventList';
import { EventsApi } from '../../services/events';
import BannerImage from '../../assets/images/activities-banner.jpg';
import './Activities.scss'

class Activities extends Component {
  state = {
    pastEvents: null,
    upcomingEvents: null,
    error: null
  }

  displayPastEvents = (events) => {
    return events.map( event => {
      return <FeaturedEvent event={event} />;
    });
  }

  componentDidMount() {
    this.retrieveEvents();
  }

  async retrievePastEvents() {
    try {
      const response  = await EventsApi.pastEvents();
      const events    = response.data && response.data.events;

      if (response.status === 200 && events) {
        this.setState({ pastEvents: events });
      } else {
        this.setState({ error: 'Unable to retrieve Wordpress events' });
      }

      return true;
    } catch(e) {
      this.setState({ error: 'Network error attempting to retrieve Wordpress events' });

      return false;
    }
  }

  async retrieveUpcomingEvents() {
    try {
      const response  = await EventsApi.upcomingEvents();
      const events    = response.data && response.data.events;

      if (response.status === 200 && events) {
        this.setState({ upcomingEvents: events });
      } else {
        this.setState({ error: 'Unable to retrieve Wordpress events' });
      }

      return true;
    } catch(e) {
      this.setState({ error: 'Network error attempting to retrieve Wordpress events' });

      return false;
    }
  }

  retrieveEvents() {
    this.retrieveUpcomingEvents();
    this.retrievePastEvents();
  }

  render() {
    const {pastEvents, upcomingEvents}  = this.state;
    
    return (
      <div className='activities'>
        <Banner 
          title='ACTIVITIES'
          tagline=''
          backgroundImage={BannerImage}
        />
        <div className="wrapper">
          <div className="next-event-section">
            <div clas>PAST EVENTS</div>
            { !pastEvents && <div>Loading...</div> }
            { pastEvents && this.displayPastEvents(pastEvents) }
          </div>
          { !upcomingEvents && <div>Loading...</div> }
          { upcomingEvents && <UpcomingEventList events={upcomingEvents} /> }
        </div>
      </div>
    );
  }
}

export default Activities;