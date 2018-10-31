import axios from 'axios';

const BASE_URL = 'https://leaffoundation.org/wp-json'

export class EventsApi {
  static all() {
    const url = 'tribe/events/v1/events';

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

  static splitEvents(events, featuredId = null) {
    if (!events) return null;

    let eventHash = {};

    if (events.length === 1) {
      const [event] = events;

      eventHash['featured'] = event;

      return eventHash;
    }

    if (featuredId) {
      const featured = events.find( event => event.id === featuredId )
      const remaining = events.filter(event => event.id !== featuredId )

      eventHash['featured']  = featured;
      eventHash['remaining'] = remaining;
    } else {
      events.sort(function(eventOne, eventTwo) {
        if (Date.parse(eventOne.start_date) < Date.parse(eventTwo.start_date)) {
          return -1;
        }
        if (Date.parse(eventOne.start_date) > Date.parse(eventTwo.start_date)) {
          return 1;
        }

        return 0;
      })

      eventHash['featured']   = events.shift();
      eventHash['remaining']  = events;

      return eventHash;
    }
  }
}