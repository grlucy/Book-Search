import React, { useState, useEffect } from "react";
import SavedAPI from "../../utils/SavedAPI";

import Section from "../../components/Section/Section";
import Result from "../../components/Result/Result";

function Saved() {
  const [saved, setSaved] = useState([]);

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

  return (
    <>
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
            title={book.title}
            authors={book.authors}
            description={book.description}
            link={book.link}
            coverImage={book.coverImage}
          />
        ))}
      </Section>
    </>
  );
}

export default Saved;
