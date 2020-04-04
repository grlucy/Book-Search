import React from "react";

import Section from "../../components/Section/Section";
import SearchForm from "../../components/SearchForm/SearchForm";
import Result from "../../components/Result/Result";

function Search() {
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
