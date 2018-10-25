import React from 'react';
import { Link } from 'react-router-dom';

import Logo2 from '../../assets/images/logo2.png'
import HeaderPhoto from '../../assets/images/santi-vedri-resized.jpg';
import './Header.scss'

const Header = ({ history }) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">

                <h1 id="logo">
                    <a href="index.html">
                        Home
                    </a>
                </h1>

                <nav id="nav">
                    <div id='nav-logo'>
                        <Link to="/contact-us">
                            <img src={Logo2} alt='logo' />
                        </Link>
                        {/* <img src={Logo2} alt='logo' /> */}
                    </div>
                    <ul id="main-nav">
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/activities">Activities</Link>
                        </li>
                        <li className="break">
                            <Link to="/donate">Donate</Link>
                        </li>
                        <li>
                            <Link to="/scholarships">Scholarships</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Header;