import React from 'react';


import '../css/Homepage.css'; // Import your CSS file

const Header = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="logonew.png" alt="Shipwise solutions" className="logo-image" />
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#service-providers">Service Providers</a></li>
            <li><a href="#coverage">Coverage</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for services..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </header>
      </div>
);
};

export default Header