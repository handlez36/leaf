import React, { Component } from 'react';

import TopMessage from '../Common/TopMessage';
import './Donate.scss'

class Donate extends Component {
  render() {
    return (
      <div className='activities'>
        <div className="wrapper">
          <section className="container">
            <TopMessage 
                page='Donate'
                text='Coming Soon!' 
            />
          </section>
        </div>
      </div>
    );
  }
}

export default Donate;