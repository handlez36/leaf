import React from 'react';
import './ScholarshipRow.scss'

const ScholarshipRow = ({ image, content, url, index }) => {
  return (
    <div className={`scholarship scholarship${index}`}>
      <div className='section'>
        <div className='section-content'>
          <div className='content-image'>
            <img src={image} alt='pic' />
          </div>
          <div className='content-text'>
          <div className='header'>
              <span>The {content.name} Scholarship</span>
              <span>{content.date}</span>
            </div>
            <div className='body'>
              <span>{content.description}</span>
              <br /><br />
              <button className='btn btn-success btn-sm'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      {index < 3 && <hr /> }
    </div>
  );
}

export default ScholarshipRow;