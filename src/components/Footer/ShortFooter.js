import React, { Component } from 'react';
// import Mailto from 'react-mailto';

import Comment from '../Comment/Comment';
import './Footer.scss'

class ShortFooter extends Component {
    state = {
        state: 'closed'
    }

    toggleFooterHeight() {
        const footer = document.querySelector('#my-footer-wrapper');

        if (footer.classList.contains('expanded')) {
            footer.classList.remove('expanded');
            footer.classList.add('collapsed');
        } else {
            footer.classList.remove('collapsed');
            footer.classList.remove('closed');
            footer.classList.add('expanded');
        }
    }

    render() {
        return (
            <div id="my-footer-wrapper">
              <div id='contact-info-section'>
                <div className='phone-info'>
                  <div className='email'>
                    <span className="icon fa-envelope"></span>
                    <span className='email-link'>
                        <a href="mailto:contact@leaffoundation.org">contact@leaffoundation.org</a>
                    </span>
                    {/* <Mailto email="contact@leaffoundation.org">
                        contact@leaffoundation.org
                    </Mailto> */}
                  </div>
                </div>
              </div>
              <div id="copyright" className="container">
                  <ul className="menu">
                      <li>&copy; The Leaf Foundation, INC. All rights reserved.</li>
                  </ul>
              </div>
            </div>
        );
    }
}

export default ShortFooter;