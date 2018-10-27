import React, { Component } from 'react';

import TopMessage from '../Common/TopMessage';
import Banner from '../Common/Banner';
import ScholarshipRow from '../Common/ScholarshipRow';
import { content } from './ScholarshipContent';
import './Scholarships.scss'

class Scholarships extends Component {
  renderScholarshipRows() {
    return content.map((scholarship, index) => {
      return (
        <ScholarshipRow
          image={scholarship.image}
          content={scholarship.content}
          url={scholarship.url}
          index={index+1} 
        />
      )
    })
  }
  
  render() {
    return (
      <div className='scholarships'>
        <Banner 
          title='SCHOLARSHIPS'
          tagline='The Leaf Foundation offers three scholarships'
        />
        <div className='main'>
          {this.renderScholarshipRows()}
        </div>
      </div>
    );
  }
}

export default Scholarships;