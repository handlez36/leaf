import React, { Component } from 'react';

import TopMessage from '../Common/TopMessage';
import './Scholarships.scss'

class Scholarships extends Component {
  render() {
    return (
      <div className='activities'>
        <div className="wrapper">
          <section className="container">
            <TopMessage 
                page='Scholarships'
                text='Coming Soon!' 
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Scholarships;