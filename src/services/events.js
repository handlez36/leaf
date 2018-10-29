import axios from 'axios';

const BASE_URL = 'http://leaffoundation.org/wp-json'

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

  static getUpcomingEvents(events) {

  }
}