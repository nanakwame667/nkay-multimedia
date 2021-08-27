import React from 'react';

import './home.css';
function Home(props) {
    return (
        <div className="home-content">
            <div className="header-content">
                <div>
                <h1>From Ideas to Reality</h1>
                <p>Getting solutions to problems is one ultimate
                    goal of every enterprenuer. Therefore, we seek
                    to help you with solutions concerning graphic
                    designs, front-end development, music compositions
                    etc.
                </p>
                </div>
                <div className="header-buttons">
                <button className="btn" style={{
                    background:"transparent",
                    color:"#0019FF",
                    border:"2px solid #0019FF",
                    width   : 150,
                    height: 50
                }}>Learn More</button>
                <button className="btn"style={{
                    background:"#0019FF",
                    color:"#FFF",
                    marginLeft: 18,
                    width   : 150,
                    height: 50
                }}>Our Services</button>
                </div>
            </div>
        </div>
    );
}

export default Home;