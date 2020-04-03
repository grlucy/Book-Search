import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <h1 className="title is-4 level book-logo">
            <i className="fas fa-book-reader"></i> &nbsp;&nbsp;BOOK SEARCH
          </h1>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Search
            </Link>
            <Link to="/saved" className="navbar-item">
              Saved
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
