import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SavedAPI from "../../utils/SavedAPI";

import Section from "../../components/Section/Section";
import Result from "../../components/Result/Result";
import Notification from "../../components/Notification/Notification";

const socket = socketIOClient();

function Saved() {
  const [saved, setSaved] = useState([]);
  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    loadSaved();
    // Create socket.io activity to prevent timeout
    setTimeout(function () {
      socket.emit("ping", "ping");
    }, 8000);
  }, []);

  socket.on("pong", function () {
    return;
  });

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

  const handleNotificationClick = (e) => {
    setDeleted("");
  };

  return (
    <>
      {deleted !== "" ? (
        <Notification onClick={handleNotificationClick}>
          Deleted "{deleted}"
        </Notification>
      ) : (
        <></>
      )}
      <Section sectionTitle="Saved Books">
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
