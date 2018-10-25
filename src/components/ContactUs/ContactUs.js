import React, { Component } from 'react';

import PageWrapper from '../Common/PageWrapper';
import Comment from '../Comment/Comment';
import Header2 from '../../assets/images/header2.jpg';
import './ContactUs.scss'

class ContactUs extends Component {
  render() {
    return (
      <PageWrapper>
        <div className='title'>
          <div>
            CONTACT US
          </div>
        </div>
        <div className='contact-us'>
          <div className='comment-text'>
            <p>Please contact us for additional information, suggestions, 
              to volunteer or with partnership opportunities.
            </p>
            <Comment />
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default ContactUs;