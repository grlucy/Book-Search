import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import API from "../../utils/API";

import Section from "../../components/Section/Section";
import SearchForm from "../../components/SearchForm/SearchForm";
import Result from "../../components/Result/Result";
import Notification from "../../components/Notification/Notification";

import SavedAPI from "../../utils/SavedAPI";

const socket = socketIOClient();

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [recentSave, setRecentSave] = useState("");

  useEffect(() => {
    // Create socket.io activity to prevent timeout
    setTimeout(function () {
      socket.emit("ping", "ping");
    }, 8000);
  }, []);

  socket.on("pong", function () {
    return;
  });

  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    API.searchBook(search)
      .then((res) => {
        if (res.data.totalItems === 0) {
          setResults([]);
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

  const handleSave = (bookData) => {
    socket.emit("save book", bookData.title);
    SavedAPI.saveBook(bookData)
      .then()
      .catch((err) => console.log(err));
  };

  socket.on("show save message", function (title) {
    setRecentSave(title);
  });

  const handleNotificationClick = (e) => {
    setRecentSave("");
  };

  return (
    <>
      {recentSave !== "" ? (
        <Notification onClick={handleNotificationClick}>
          Saved "{recentSave}"
        </Notification>
      ) : (
        <></>
      )}
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
              handleSave={handleSave}
            />
          ))}
        </Section>
      )}
    </>
  );
}

export default Search;
