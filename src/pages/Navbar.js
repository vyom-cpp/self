// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import './css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="brand">
        <FontAwesomeIcon icon={darkMode ? faMoon : faLightbulb} onClick={toggleDarkMode} />
        <Link to="/">Ephemeral</Link>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
