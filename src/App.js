import React, { Component } from 'react';

import Header from './components/Header/Header';
import Features from './components/Features/FeatureRow';
import Footer from './components/Footer/Footer';
import './App.css';


/* Image imports */
// import * as pics from './../src/assets/images/*';

import pic06 from './../src/assets/images/pic06.jpg';
import pic07 from './../src/assets/images/pic07.jpg';
import promo from './../src/assets/images/promo.jpg';
import tlf01 from './../src/assets/images/tlf01.png';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
      
			{/* <!-- Header --> */}
			<Header />

			{/* <!-- Features 1 --> */}
			<Features header />
			<Features header={false} />

			{/* <!-- Footer --> */}
			<Footer />
		</div>
    );
  }
}

export default App;
