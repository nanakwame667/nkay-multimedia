import React from 'react';

import './Services.css';
function Services(props) {
    return (
        <div className="services">
            <div className="cards">
                <div className="all-cards">
                <div className="two-cards">
                <a href="/">
                    <div className="card-1">
                    <img src={require('../../assets/images/graphicdesign.svg').default} alt="graphic"/>
                    <span>Graphic Designing</span>
                </div>
                </a>
                <a href="/">
                <div className="card-2">
                    <img src={require('../../assets/images/web-dev.svg').default} alt="web"/>
                    <span>Web Development</span>
                </div>
                </a>
                </div>
                <a href="/">
                    <div className="card-3">
                    <img src={require('../../assets/images/music-comp.svg').default} alt="music"/>
                    <span>Music Composition</span>
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
}

export default Services;