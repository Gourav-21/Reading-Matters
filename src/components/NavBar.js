import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ toggleDarkMode, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar wrapper ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">
          <h1>Reading Matters</h1>
        </Link>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="https://github.com/ishitaraina1807/Reading-Matters">
            <span>About</span>
          </a>
          <a href="https://github.com/ishitaraina1807" target="_blank">
            <span>Contact</span>
          </a>
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="dark-mode-switch">
          <input
            type="checkbox"
            id="dark-mode-switch"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="dark-mode-switch">Dark Mode</label>
        </div>
      </nav>
    </div>
  );
}
