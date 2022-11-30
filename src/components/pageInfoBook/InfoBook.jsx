import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BOOK_DB } from "../../db/booksDB";
import { Link } from "react-router-dom";
import BookSlider from "../books/BookSlider";
import NotFound from "../notFound/NotFound";
import "./infoBook-style.scss";

const InfoBook = () => {
  const { id } = useParams();

  let book = BOOK_DB.filter(function (val) {
    return val.id == id;
  })[0];

  const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
  };
  let anchorRef = React.createRef();
  return (
    <>
      <Link to={`/`} className="btn btn-back">
        назад
      </Link>
      {book ? (
        <>
          <div className="infoBook">
            <div className="info">
              <h2>{book.name}</h2>
              <p>Автор: {book.autor}</p>
              <p>Жанр: {book.genre}</p>
              <p>Тип: {book.type}</p>
              <h4>ОПИС</h4>
              <p>{book.annotation}</p>
              <a className="btn orange" href={book.url} target="_blank">
                Читати
              </a>
            </div>
            <img src={book.img} alt={book.name} />
          </div>
          <BookSlider type="random" list={shuffle(BOOK_DB)} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default InfoBook;
