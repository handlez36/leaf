import React from 'react';

// import Logo1 from '../../assets/images/logo1.png';
import Logo1 from '../../assets/images/logo1_resized.png'
import Logo2 from '../../assets/images/logo2.png'
import HeaderPhoto from '../../assets/images/santi-vedri-resized.jpg';
import './Header.scss'

const Header = (props) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">

                {/* <!-- Logo --> */}
                <h1 id="logo">
                    <a href="index.html">
                        Home
                    </a>
                </h1>

                {/* <!-- Nav --> */}
                <nav id="nav">
                    <div id='nav-logo'>
                        <img src={Logo2} alt='logo' />
                    </div>
                    <ul id="main-nav">
                        <li>
                            <a href="#">About Us</a>
                            <ul id="drop-down-nav">
                                <li><a href="#">Lorem ipsum dolor</a></li>
                                <li><a href="#">Magna phasellus</a></li>
                                <li><a href="#">Etiam dolore nisl</a></li>
                                <li>
                                    <a href="#">Phasellus consequat</a>
                                    <ul>
                                        <li><a href="#">Lorem ipsum dolor</a></li>
                                        <li><a href="#">Phasellus consequat</a></li>
                                        <li><a href="#">Magna phasellus</a></li>
                                        <li><a href="#">Etiam dolore nisl</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Veroeros feugiat</a></li>
                            </ul>
                        </li>
                        <li><a href="left-sidebar.html">Events</a></li>
                        <li className="break"><a href="right-sidebar.html">Donate</a></li>
                        <li><a href="no-sidebar.html">Scholarships</a></li>
                    </ul>
                </nav>

            </div>

            {/* <!-- Hero --> */}
            <section id="hero" className="container">
                {/* <img src={HeaderPhoto} alt='logo' /> */}
                <div id='hero-logo'>
                    <img src={Logo1} alt='header-logo' />
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                <br />
                sed Accumsan Blandit Scelerisque col pharetra.</p> */}
                {/* <ul className="actions">
                    <li><a href="#" className="button">Learn more</a></li>
                </ul> */}
            </section>
        </div>
    );
}

export default Header;