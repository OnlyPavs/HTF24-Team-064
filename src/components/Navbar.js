import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.scss';

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light border-bottom py-3 px-5"
    >
      <Link to="/" className="navbar-brand">
        🌐 coinwire.us
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/news" className="nav-link">
              News
            </a>
          </li>
          <li className="nav-item">
            <a href="/featured" className="nav-link">
              Featured Products
            </a>
          </li>
          <li className="nav-item">
            <a href="/resources" className="nav-link">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a href="/learn" className="nav-link">
              Learn
            </a>
          </li>
         </ul>
      </div>
    </nav>
  );
}
