import React from 'react';

import './Contact.css';
function Contact(props) {
    return (
        <div className="contact">
            <div className="contact-content">
                <h1>Get In Touch</h1>
                <input type="email" name="email" placeholder="Enter Your Email"/>
                <textarea type="text-area" name="text-area" placeholder="What will you like us to help you with?"/>
                <div className="contact-buttons">
                    <button className="btn"style={{
                    background:"#0019FF",
                    color:"#FFF",
                    width   : 150,
                    height: 50
                }}>Send</button>
                    <button className="btn" style={{
                    background:"transparent",
                    color:"#0019FF",
                    border:"2px solid #0019FF",
                    marginLeft:15,
                    width   : 150,
                    height: 50
                }}>Show Contact</button>
                </div>
                <div className="contact-follows">
                    <span>follow us</span>
                    <ul>
                        <li><a href="/"><img src={require('../../assets/images/github.svg').default} alt="github"/></a></li>
                        <li><a href="/"><img src={require('../../assets/images/linkedin.svg').default} alt="github"/></a></li>
                        <li><a href="/"><img src={require('../../assets/images/twitter.svg').default} alt="github"/></a></li>
                    </ul>
                </div>
                <div className="contact-footer">
                    <a href="/"><img src={require('../../assets/images/logo.svg').default} alt="logo"/></a>
                    <p>&copy;2021 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;