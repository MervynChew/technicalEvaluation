import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div id="navbar" className="navbar">
      <div className="navbar-start">
        <a href="/event-page" className="logo-link">
          <div className="logo-container">
            <img src="./Logo/cssLogo.svg" alt="CS Society Logo" className="logo" />
            <div className="logo-text">
              <div className="leading-sm">USM COMPUTER</div>
              <div className="leading-none">SCIENCE SOCIETY</div>
            </div>
          </div>
        </a>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li><a href="/404-Not-Found" className="menu-item">About</a></li>
          <li><a href="/event-page" className="menu-item">Events</a></li>
        </ul>
        <div className="dropdown">
          <button
            className="dropdown-btn"
            aria-label="Open menu"
            onClick={toggleDropdown}
          >
            <svg width="0.88em" height="1em" viewBox="0 0 448 512" className="dropdown-icon">
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16m0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="dropdown-content">
              <li><a href="/404-Not-Found" className="menu-item">About</a></li>
              <li><a href="/event-page" className="menu-item2">Events</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
