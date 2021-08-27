import React from 'react';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/header';
import Home from '../components/Home/home';
import Services from '../components/Services/Services';

function HomeScreen(props) {
    return (
        <div style={{background:'#F2F6F6',margin:0,overflow:'hidden'}}>
            <Header/>
            <Home/>
            <Services/>
            <About/>
            <Contact/>
        </div>
    );
}

export default HomeScreen;