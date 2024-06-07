import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faLightbulb,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "./css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="nav-left">
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        <FontAwesomeIcon
          icon={darkMode ? faMoon : faLightbulb}
          onClick={toggleDarkMode}
          className="mode-icon"
        />
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;