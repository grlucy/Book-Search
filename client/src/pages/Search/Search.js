import React from "react";

import Section from "../../components/Section/Section";
import SearchForm from "../../components/SearchForm/SearchForm";

function Search() {
  return (
    <>
      <Section sectionTitle="Search Books" padClass="topPad">
        <SearchForm />
      </Section>
      <Section sectionTitle="Results" padClass="botPad">
        <p>Results here</p>
      </Section>
    </>
  );
}

export default Search;
