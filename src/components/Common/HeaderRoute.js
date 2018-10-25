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
    return (
      [
        <Header />,
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/activities" component={Activities} />
          <Route path="/donate" component={Donate} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/" component={App} />
        </Switch>,
        <ShortFooter />
      ]
    );
  }
}

export default HeaderRouter;