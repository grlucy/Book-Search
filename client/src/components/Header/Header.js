import React from "react";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <section className="hero is-light">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1" id="book-logo">
              <i className="fas fa-book-reader"></i> &nbsp;BOOK SEARCH
            </h1>
            <h2 className="subtitle">
              Search and Save from the Google Books API
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
