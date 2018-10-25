import React from 'react';

import Comment from '../Comment/Comment';
import './Footer.scss'

const ShortFooter = (props) => {
    return (
        <div id="my-footer-wrapper">
          <div id='contact-info-section'>
            <div className='phone-info'>
              <div class='phone'><span className="icon fa-phone"></span> 999.999.9999</div>
              <div class='email'><span className="icon fa-envelope"></span> contact@theleaffoundation.org</div>
            </div>
          </div>
          <div id="copyright" className="container">
              <ul className="menu">
                  <li>&copy; The Leaf Foundation. All rights reserved.</li>
              </ul>
          </div>
        </div>
    );
}

export default ShortFooter;