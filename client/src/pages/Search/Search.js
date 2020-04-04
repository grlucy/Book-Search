import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Section from "../../components/Section/Section";
import SearchForm from "../../components/SearchForm/SearchForm";
import Result from "../../components/Result/Result";

function Search() {
  const [search, setSearch] = useState("Harry Potter");

  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchBook(search)
      .then((res) => {
        // if (res.data.length === 0) {
        //   throw new Error("No results found.");
        // }
        // if (res.data.status === "error") {
        //   throw new Error(res.data.message);
        // }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <Section sectionTitle="Search Books" padClass="topPad">
        <SearchForm />
      </Section>
      <Section sectionTitle="Results" padClass="botPad">
        <Result />
        <Result />
        <Result />
      </Section>
    </>
  );
}

export default Search;
