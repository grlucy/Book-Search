import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-border">
          <h4 className="subtitle is-4">{props.sectionTitle}</h4>
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default Section;
