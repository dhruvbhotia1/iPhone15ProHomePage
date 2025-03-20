import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

import * as Sentry from "@sentry/react";



const App = () => {



    return (
        <main className= 'bg-black'>

            <Navbar/>
            <Hero/>
            <Highlights/>
            <Model/>
            <Features/>
            <HowItWorks/>
            <Footer/>
        </main>
    );
};

export default Sentry.withProfiler(App);
