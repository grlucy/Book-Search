import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <>
      <hr />
      <div className="columns">
        <div className="column is-four-fifths">
          <input
            className="input"
            type="text"
            placeholder="Book Title, Author, or Keyword"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="column">
          <button
            className="button has-text-white"
            id="search-btn"
            onClick={props.handleClick}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
