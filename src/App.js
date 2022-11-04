import React from 'react';
import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Navbar from './components/navbar/Navbar';
import Content from './components/timer/Content';
import AboutEvent from './components/about-event/Container';
import Sponsors from './components/sponsors/Sponsors';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
      <Navbar/>
      <Content/>
      <AboutEvent/>
      <AboutUs/>
      <Sponsors/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
