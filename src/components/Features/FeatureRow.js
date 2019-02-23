import React from 'react';

import TopMessage from '../Common/TopMessage';
import Feature from '../Common/Feature';
import './Features.scss'

const Features = ({ details, header }) => {
    const [feature1, feature2, feature3] = details;

    return (
        <div className={`wrapper feature-row ${header ? 'first' : ''}`}>
            <section className="feature-container">
                { header && 
                    <TopMessage 
                        page='About Us'
                        text='The Leaf Foundation was established in June 2018. 
                        We are recognized as a public non-profit 501 (c) (3) 
                        organization whose mission is to:' 
                    />
                }
                <div className="triangle"></div>
                <div className="row features">
                    { details.map( (feature, index) => {
                        return (
                            <Feature
                                title={feature.title}
                                icon={feature.icon}
                                text={feature.text}
                            />
                        )
                    })

                    }
                </div>
                {/* <ul className="actions major">
                    <li><a href="#" className="button">Aliquet at convallis</a></li>
                </ul> */}
            </section>
        </div>
    );
}

export default Features;