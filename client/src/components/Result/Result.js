import React from "react";
import { useLocation } from "react-router-dom";
import "./Result.css";

function Result(props) {
  const location = useLocation();

  const bookData = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    coverImage: props.coverImage,
    link: props.link,
  };

  return (
    <>
      <hr />
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src={props.coverImage} alt={props.title} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.title}</strong>
              <br />
              Written by:{" "}
              {props.authors.map((author) => (
                <span key={author}>
                  <br />
                  {author}
                </span>
              ))}
              <br />
              <br />
              {props.description}
            </p>
          </div>
        </div>
        <div className="media-right">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="button view-btn has-text-white marg-bot">
              <i className="fas fa-eye"></i>
            </button>
          </a>
          <br />
          {location.pathname === "/" ? (
            <button
              className="button save-btn is-light"
              data-title={props.title}
              onClick={() => props.handleSave(bookData)}
            >
              <i className="fas fa-heart"></i>
            </button>
          ) : (
            <button
              className="button delete-btn is-light"
              onClick={() => props.handleDelete(props.id, props.title)}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </article>
    </>
  );
}

export default Result;
