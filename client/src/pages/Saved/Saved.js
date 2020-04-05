import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SavedAPI from "../../utils/SavedAPI";

import Section from "../../components/Section/Section";
import Result from "../../components/Result/Result";

const socket = socketIOClient();

function Saved() {
  const [saved, setSaved] = useState([]);
  const [deleted, setDeleted] = useState("");

  // Load all books and store them with setBooks
  useEffect(() => {
    loadSaved();
  }, []);

  // Loads all books and sets them to books
  function loadSaved() {
    SavedAPI.getBooks()
      .then((res) => setSaved(res.data))
      .catch((err) => console.log(err));
  }

  socket.on("show delete message", function (title) {
    setDeleted(title);
    loadSaved();
  });

  const handleDelete = (id, title) => {
    socket.emit("delete book", title);
    SavedAPI.deleteBook(id)
      .then((res) => loadSaved())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Section sectionTitle="Saved Books">
        {deleted !== "" ? (
          <p className="has-text-danger">Deleted "{deleted}"!</p>
        ) : (
          <></>
        )}
        {saved.length === 0 ? (
          <>
            <hr />
            <p>No books saved yet!</p>
          </>
        ) : (
          <></>
        )}
        {saved.map((book) => (
          <Result
            key={book._id}
            id={book._id}
            title={book.title}
            authors={book.authors}
            description={book.description}
            link={book.link}
            coverImage={book.coverImage}
            handleDelete={handleDelete}
          />
        ))}
      </Section>
    </>
  );
}

export default Saved;
