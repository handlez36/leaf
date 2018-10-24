import React from 'react';

import Comment from '../Comment/Comment';
import './Footer.scss'

const Footer = (props) => {
    return (
        <div id="footer-wrapper">
            <div id="footer" className="container">
                <header className="major">
                    <h2>Euismod aliquam vehicula lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br />
                    dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
                </header>
                <div className="row">
                    <Comment />
                    <section className="col-6 col-12-narrower">
                        <div className="row gtr-0">
                            <ul className="divided icons col-6 col-12-mobile">
                                <li className="icon fa-twitter"><a href="#"><span className="extra">twitter.com/</span>untitled</a></li>
                                <li className="icon fa-facebook"><a href="#"><span className="extra">facebook.com/</span>untitled</a></li>
                                <li className="icon fa-dribbble"><a href="#"><span className="extra">dribbble.com/</span>untitled</a></li>
                            </ul>
                            <ul className="divided icons col-6 col-12-mobile">
                                <li className="icon fa-instagram"><a href="#"><span className="extra">instagram.com/</span>untitled</a></li>
                                <li className="icon fa-youtube"><a href="#"><span className="extra">youtube.com/</span>untitled</a></li>
                                <li className="icon fa-pinterest"><a href="#"><span className="extra">pinterest.com/</span>untitled</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <div id="copyright" className="container">
                <ul className="menu">
                    <li>&copy; Untitled. All rights reserved.</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;