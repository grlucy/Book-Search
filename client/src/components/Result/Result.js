import React from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();

  return (
    <>
      <hr />
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Book"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Book Title Here</strong>
              <br />
              Written by:
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="media-right">
          <a
            href="https://www.ginalucy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button view-btn has-text-white marg-bot">
              <i className="fas fa-eye"></i>
            </button>
          </a>
          <br />
          {location.pathname === "/" ? (
            <button className="button save-btn is-light">
              <i className="fas fa-heart"></i>
            </button>
          ) : (
            <button className="button delete-btn is-light">
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </article>
    </>
  );
}

export default Result;
