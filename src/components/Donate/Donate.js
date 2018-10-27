import React, { Component } from 'react';

import Banner from '../Common/Banner';
import background from '../../assets/images/header2.jpg'
import './Donate.scss'

class Donate extends Component {
  render() {
    return (
      <div className='donate'>
        <Banner 
          title='DONATE'
          tagline={   `Please use the donation link below if you would like to support The Leaf Foundation and our mission. 
                      Our foundation is a registered 501 (c) (3) organization and your donation is tax deductible to the 
                      extent allowed by law. Thank you!`
                  }
          backgroundImage={background}
        >
          <button className='btn btn-success btn-sm btn-paypal'>Donate Now</button>
        </Banner>
      </div>
    );
  }
}

export default Donate;