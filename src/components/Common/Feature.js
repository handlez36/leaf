import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Feature.scss'

const Feature = ({ icon, title, text }) => {
  return (
    <div className='feature-element'>
      <section className="col-4 col-12-narrower feature">
          <div className='mission2'>
              <FontAwesomeIcon className='icon' icon={icon} />
              <div className='text'>{text}</div>
          </div>
      </section>
    </div>
  );
}

export default Feature;