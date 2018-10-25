import React from 'react';

import TopMessage from '../Common/TopMessage';
import './Features.scss'

const Features = ({ text, icons, header }) => {
    const [first, second, third] = text;
    const [icon1, icon2, icon3] = icons;

    return (
        <div className={`wrapper feature-row ${header ? 'first' : ''}`}>
            <section className="container">
                { header && 
                    <TopMessage 
                        page='About Us'
                        text='The Leaf Foundation was established in June 2018. 
                        We are recognized as a public non-profit 501 (c) (3) 
                        organization whose mission is to:' 
                    />
                }
                <div className="row features">
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper first">
                            <a href="#" className="image featured">
                                <div className='mission'>
                                    <div className={`icon ${icon1}`} />
                                    <div className='text'>{first}</div>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured">
                                {/* <img src={pic04} alt="" /> */}
                                <div className='mission'>
                                    <div className={`icon ${icon2}`} />
                                    <div className='text'>{second}</div>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className="col-4 col-12-narrower feature">
                        <div className="image-wrapper">
                            <a href="#" className="image featured">
                                {/* <img src={pic05} alt="" /> */}
                                <div className='mission'>
                                    <div className={`icon ${icon3}`} />
                                    <div className='text'>{third}</div>
                                </div>
                            </a>
                        </div>
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