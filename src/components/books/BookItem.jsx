import React from "react";
import { Link } from "react-router-dom";
import { scrollUp } from "../../config";
import { BOOK_DB } from "../../db/booksDB";
import { HISTORY_BOOK_FUNC } from "../../config";

export const BookItem = (props) => {
  const { id, name, autor, genre, annotation, url, pdf, img } = props;

  const handleSelect = (id) => {
    const book = BOOK_DB.filter(function (val) {
      return val.id == id;
    })[0];
    HISTORY_BOOK_FUNC(book);
  };

  return (
    <div className="card">
      <div className="list card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{annotation.slice(0, 48)}...</p>

        <p>
          {autor}/{genre}
        </p>
      </div>
      <div className="card-action">
        <Link
          to={`/book/${id}`}
          className="btn"
          onClick={() => {
            scrollUp();
            handleSelect(id);
          }}
        >
          Read book
        </Link>
      </div>
    </div>
  );
};
