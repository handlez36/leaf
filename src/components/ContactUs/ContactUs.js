import React, { Component } from 'react';

import Banner from '../Common/Banner';
import Comment from '../Comment/Comment';
import './ContactUs.scss'

class ContactUs extends Component {
  render() {
    return (
      <div className='contact-us'>
        <Banner
          title='CONTACT US'
          tagline='Please contact us for additional information, suggestions, to volunteer or with partnership opportunities.'
        />
        <div className='comment-box'>
          <Comment />
        </div>
      </div>
    );
  }
}

export default ContactUs;