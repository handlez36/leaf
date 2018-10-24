import React from 'react';

import './Features.scss'

import pic01 from '../../../src/assets/images/pic01.jpg';
import pic02 from '../../../src/assets/images/pic02.jpg';
import pic03 from '../../../src/assets/images/pic03.jpg';
import pic04 from '../../../src/assets/images/pic04.jpg';
import pic05 from '../../../src/assets/images/pic05.jpg';

const Features = (props) => {
    return (
        [
        <div className="wrapper">
            <div className="container">
                <div className="row">
                    <section className="col-6 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured first"><img src={pic01} alt="" /></a>
                        </div>
                        <header>
                            <h2>Semper magna neque vel<br />
                            adipiscing curabitur</h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                        sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                        adipiscing elit. Curabitur vel sem sit.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Aliquet at convallis</a></li>
                        </ul>
                    </section>
                    <section className="col-6 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured"><img src={pic02} alt="" /></a>
                        </div>
                        <header>
                            <h2>Amet lorem ipsum dolor<br />
                            sit consequat magna</h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel
                        sem sit dolor neque semper magna. Lorem ipsum dolor sit amet consectetur et sed
                        adipiscing elit. Curabitur vel sem sit.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Aliquet at convallis</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>,
        <div id="promo-wrapper">
            <section id="promo">
                <h2>Neque semper magna et lorem ipsum adipiscing</h2>
                <a href="#" className="button">Ornare mus adipiscing</a>
            </section>
        </div>,
        <div className="wrapper">
            <section className="container">
                <header className="major">
                    <h2>Sed magna consequat lorem curabitur tempus</h2>
                    <p>Elit aliquam vulputate egestas euismod nunc semper vehicula lorem blandit</p>
                </header>
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
                <ul className="actions major">
                    <li><a href="#" className="button">Aliquet at convallis</a></li>
                </ul>
            </section>
        </div>
    ]);
}

export default Features;