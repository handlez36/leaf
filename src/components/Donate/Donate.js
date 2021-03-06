import React, { Component } from 'react';

import Banner from '../Common/Banner';
// import background from '../../assets/images/header2.jpg'
import background from '../../assets/images/donate-banner-resized.jpg'
import './Donate.scss'

class Donate extends Component {
  goToPayPal() {
    console.log('In GoToPaypal');

    const form = this.refs.paypal_form;

    form.submit();
  }

  render() {
    return (
      <div className='donate'>
        <Banner
          title='DONATE'
          tagline={`Please use the donation link below if you would like to support The Leaf Foundation and our mission. 
                      Our foundation is a registered 501 (c) (3) organization and your donation is tax deductible to the 
                      extent allowed by law. Thank you!`
          }
          backgroundImage={background}
        >
          <form ref='paypal_form' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="CKVPH8JGRWJ46" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button" />
            {/* <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
          </form>
        </Banner>
      </div>
    );
  }
}

export default Donate;