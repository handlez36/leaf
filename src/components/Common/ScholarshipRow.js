import React from 'react';

import Button from './Button';
import './ScholarshipRow.scss'

function openApplication(url) { 
  window.open(url, "_blank") 
}

const ScholarshipRow = ({ info, index }) => {
  const {image, content, appUrl, applyUrl} = info;

  return (
    <div className={`scholarship scholarship${index}`}>
      <div className='section'>
        <div className='section-content'>
          <div className='content-image'>
            <img src={image} alt='pic' />
          </div>
          <div className='content-text'>
          <div className='header'>
              <div>The {content.name} Scholarship &nbsp;<span className='school'>{content.school ? `(${content.school})` : ''}</span></div>
              <span>{content.date}</span>
            </div>
            <div className='body'>
              <span>{content.description}</span>
              <br /><br />
              { appUrl
                && <Button title='Learn More' url={appUrl} onClick={openApplication} />
              }
              <br />
              { applyUrl
                && <Button title='Apply' url={applyUrl} onClick={openApplication} variant='success' />
              }
            </div>
          </div>
        </div>
      </div>
      {index < 3 && <hr /> }
    </div>
  );
}

export default ScholarshipRow;