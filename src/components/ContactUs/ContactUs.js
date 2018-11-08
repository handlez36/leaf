import React, { Component } from 'react';

import Banner from '../Common/Banner';
import Comment from '../Comment/Comment';
import ContactUsBanner from '../../assets/images/contact-banner.jpg'
import './ContactUs.scss'

class ContactUs extends Component {
  render() {
    return (
      <div className='contact-us'>
        <Banner
          title='CONTACT US'
          tagline='Please contact us for additional information, suggestions, to volunteer or with partnership opportunities.'
          backgroundImage={ContactUsBanner}
        />
        <div className='comment-box'>
          <Comment />
        </div>
      </div>
    );
  }
}

export default ContactUs;