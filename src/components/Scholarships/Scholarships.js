import React, { Component } from 'react';

import Banner from '../Common/Banner';
import ScholarshipRow from '../Common/ScholarshipRow';
import background from '../../assets/images/header1.jpg'
import { content } from './ScholarshipContent';
import './Scholarships.scss'

class Scholarships extends Component {
  renderScholarshipRows() {
    return content.map((scholarship, index) => {
      return (
        <ScholarshipRow
          info={scholarship}
          // image={scholarship.image}
          // content={scholarship.content}
          // appUrl={scholarship.appUrl}
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
          backgroundImage={background}
        />
        <div className='main'>
          {this.renderScholarshipRows()}
        </div>
      </div>
    );
  }
}

export default Scholarships;