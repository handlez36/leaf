import React from 'react';
import './TopMessage.scss'

const TopMessage = ({ page, text }) => {
  return (
    <header className="major">
        <div class='page-title-text'>HOME / <span>{page.toUpperCase()}</span></div>
        <hr />
        <p class='page-top-text'>{text}</p>
    </header>
  );
}

export default TopMessage;