import React from "react";
import "./Section.css";

function Section(props) {
  return (
    <section
      className={
        props.padClass === "topPad"
          ? "section topPad"
          : props.padClass === "botPad"
          ? "section botPad"
          : "section"
      }
    >
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
