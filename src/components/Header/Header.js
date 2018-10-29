import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo2 from '../../assets/images/logo2.png'
import HeaderPhoto from '../../assets/images/santi-vedri-resized.jpg';
import './Header.scss'

class Header extends Component  {
    onClick = (target) => (event) => {
        const {history} = this.props;

        switch(target) {
            case 'HOME':        
                history.push('/'); break;
            case 'ABOUT':       
                history.push('/about-us'); break;
            case 'ACTIVITIES':  
                history.push('/activities'); break;
            case 'DONATE':      
                history.push('/donate'); break;
            case 'SCHOLARSHIPS': 
                history.push('/scholarships'); break;
            case 'CONTACT':
                history.push('/contact-us'); break;
            default: 
                history.push('/')
        }
    }
    
    render() {
        return (
            <div id="header-wrapper">
                <div id="header" className="container">
    
                    {/* <h1 
                        id="logo"
                        onClick={this.onClick('HOME')}>
                        Home
                    </h1> */}
                    <h1 id="logo">
                        <Link to="/">
                            Home
                        </Link>
                    </h1>
    
                    <nav id="nav">
                        <div id='nav-logo'>
                            <img
                                onClick={this.onClick('CONTACT')} 
                                src={Logo2} 
                                alt='logo' />
                        </div>
                        <ul id="main-nav">
                            <li>
                                <span
                                    className='menu-link'
                                    onClick={this.onClick('ABOUT')}>
                                    About Us
                                </span>
                            </li>
                            <li>
                                <span
                                    className='menu-link'
                                    onClick={this.onClick('ACTIVITIES')}>
                                    Activities
                                </span>
                            </li>
                            <li className="break">
                                <span
                                    className='menu-link'
                                    onClick={this.onClick('DONATE')}>
                                    Donate
                                </span>
                            </li>
                            <li>
                                <span
                                    className='menu-link'
                                    onClick={this.onClick('SCHOLARSHIPS')}>
                                    Scholarships
                                </span>
                            </li>
                        </ul>
                    </nav>
    
                </div>
            </div>
        );
    }
}

export default Header;