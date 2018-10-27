import React, { Component } from 'react';

import Banner from '../Common/Banner';
import PageWrapper from '../Common/PageWrapper';
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
        <div className='comment-form-section'>
          <div className='comment-form'>
            <Comment />
          </div>
        </div>
      </div>
      // <PageWrapper>
      //   <div className='title'>
      //     <div>
      //       CONTACT US
      //     </div>
      //   </div>
      //   <div className='contact-us'>
      //     <div className='comment-text'>
      //       <p>Please contact us for additional information, suggestions, 
      //         to volunteer or with partnership opportunities.
      //       </p>
      //       <Comment />
      //     </div>
      //   </div>
      // </PageWrapper>
    );
  }
}

export default ContactUs;