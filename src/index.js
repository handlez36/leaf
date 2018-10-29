import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import HeaderRoute from './components/Common/HeaderRoute';
import './index.css';

const browserHistory = Router.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={HeaderRoute} />
  </Router>, 
  document.getElementById('page-wrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
