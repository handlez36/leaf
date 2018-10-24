import React from 'react';

import './Features.scss'

import pic03 from '../../../src/assets/images/pic03.jpg';
import pic04 from '../../../src/assets/images/pic04.jpg';
import pic05 from '../../../src/assets/images/pic05.jpg';

const Features = ({ header }) => {
    return (
        <div className="wrapper">
            <section className="container">
                { header &&
                    <header className="major">
                        {/* <h2>Mission statement</h2> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>
                    </header>
                }
                <div className="row features">
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured"><img src={pic03} alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src={pic04} alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src={pic05} alt="" /></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur
                        vel sem sit dolor neque semper magna lorem ipsum.</p>
                    </section>
                </div>
                {/* <ul className="actions major">
                    <li><a href="#" className="button">Aliquet at convallis</a></li>
                </ul> */}
            </section>
        </div>
    );
}

export default Features;