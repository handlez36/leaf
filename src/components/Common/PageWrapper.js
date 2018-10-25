import React from 'react';
import './PageWrapper.scss'

const PageWrapper = (props) => {
  return (
    <div className="wrapper">
      <section className="container">
        <header className="major">
            {props.children}
        </header>
      </section>
    </div>
  );
}

export default PageWrapper;