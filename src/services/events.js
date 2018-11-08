import axios from 'axios';
import moment from 'moment';

const BASE_URL = 'https://leaffoundation.org/wp-json'

export class EventsApi {
  static all() {
    // const url = 'tribe/events/v1/events';
    const url = 'tribe/events/v1/events?start_date=2018-10-01&end_date=2019-01-01';

    return axios.get(`${BASE_URL}/${url}`);
  }

  static getNextEvent(events) {
    if (!events) return null;

    if (events.length === 1) {
      const [event] = events;
      
      return event;
    }

    return null;
  }

  static splitEvents(events) {
    if (!events) return null;

    let eventHash = {
      'past':     [],
      'upcoming': []
    };

    events.forEach( event => {
      if (Date.parse(event.start_date) < Date.now()) {
        eventHash['past'].push(event);
      } else {
        eventHash['upcoming'].push(event);
      }
    })

    console.log('Event Hash: ', eventHash);
    return eventHash;
  }

  static formatDate(date) {
    return moment(date).format('MMM Do YYYY | h:m A');
  }
}