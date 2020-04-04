import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <>
      <hr />
      <div className="columns">
        <div className="column is-four-fifths">
          <input className="input" type="text" placeholder="Book Title" />
        </div>
        <div className="column">
          <button className="button has-text-white" id="search-btn">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
