import React from 'react';
import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import Navbar from './components/navbar/Navbar';
import Content from './components/timer/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <AboutUs/>
    </div>
  );
}

export default App;
