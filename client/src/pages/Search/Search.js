import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Section from "../../components/Section/Section";
import SearchForm from "../../components/SearchForm/SearchForm";
import Result from "../../components/Result/Result";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    API.searchBook(search)
      .then((res) => {
        if (res.data.totalItems === 0) {
          throw new Error("No results found.");
        }
        setResults(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = (event) => {
    setSearch(inputValue);
  };

  return (
    <>
      <Section
        sectionTitle="Search Books"
        padClass={results.length === 0 ? "allPad" : "topPad"}
      >
        <SearchForm
          handleInputChange={handleInputChange}
          handleClick={handleClick}
        />
      </Section>
      {results.length === 0 ? (
        <></>
      ) : (
        <Section sectionTitle="Results" padClass="botPad">
          {results.map((result) => (
            <Result
              key={result.id}
              title={result.volumeInfo.title}
              authors={result.volumeInfo.authors}
              description={result.volumeInfo.description}
              link={result.volumeInfo.infoLink}
              coverImage={
                result.volumeInfo.imageLinks === undefined
                  ? "https://via.placeholder.com/64x64.png?text=No+Image+Found"
                  : result.volumeInfo.imageLinks.thumbnail
              }
            />
          ))}
        </Section>
      )}
    </>
  );
}

export default Search;
