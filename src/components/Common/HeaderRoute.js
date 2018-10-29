import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './../../App';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import ShortFooter from './../Footer/ShortFooter';
import AboutUs from '../About/AboutUs';
import Activities from './../Activities/Activities';
import Donate from './../Donate/Donate';
import Scholarships from './../Scholarships/Scholarships';
import ContactUs from './../ContactUs/ContactUs';
import './HeaderRoute.scss';

class HeaderRouter extends Component {
  render() {
    console.log('Props: ', this.props);
    
    return (
      [
        <Header key='header-component' {...this.props} />,
        <Switch key='switch-component'>
          <Route key='page' path="/about-us" component={AboutUs} />
          <Route key='page' path="/activities" component={Activities} />
          <Route key='page' path="/donate" component={Donate} />
          <Route key='page' path="/scholarships" component={Scholarships} />
          <Route key='page' path="/contact-us" component={ContactUs} />
          <Route key='page' path="/" component={App} />
        </Switch>,
        <ShortFooter key='footer-component' />
      ]
    );
  }
}

export default HeaderRouter;