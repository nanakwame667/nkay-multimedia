import React from 'react';

import './header.css';
function Header(props) {
    return (
        <div className="header">
                <div className="header-details">
                <div className="header-brand ">
                    <img src={require('../../assets/images/logo.svg').default} alt="logo"/>
                    <span>Nkay_Multimedia</span>
                </div>
                <div className="header-links">
                    <ul>
                        <li>
                            <a href="/"active>Home</a>
                            <a href="/services">Services</a>
                            <a href="/about">About Me</a>
                            <button type="button" className="btn">Contact</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;