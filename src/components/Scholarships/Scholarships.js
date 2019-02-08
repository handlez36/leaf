import React, { Component } from 'react';

import Banner from '../Common/Banner';
import ScholarshipRow from '../Common/ScholarshipRow';
import background from '../../assets/images/header1.jpg'
import { content } from './ScholarshipContent';
import './Scholarships.scss'

class Scholarships extends Component {
  renderScholarshipRows() {
    return content.map( (scholarship, index) => <ScholarshipRow info={scholarship} index={index+1} /> )
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