import React from 'react';
import './Feature.scss'

const Feature = ({ icon, title, text }) => {
  return (
    <div className='feature-element'>
      <section className="col-4 col-12-narrower feature">
          <div className='mission2'>
              <div className={`icon ${icon}`} />
              {/* <div className='mission-title'>{title}</div> */}
              <div className='text'>{text}</div>
          </div>
      </section>
    </div>
  );
}

export default Feature;