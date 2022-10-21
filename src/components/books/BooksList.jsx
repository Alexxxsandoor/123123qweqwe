import React, { useEffect, useState } from "react";
import { BOOK_DB } from "../../db/booksDB";
import "./book-style.scss";
import BookSlider from "./BookSlider";
import {
  filteredArray_history,
  filteredArray_autor,
  filteredArray_genre,
  filteredArray_type,
} from "../../config";
const BooksList = () => {
  const [historyBook, setHistoryBook] = useState(filteredArray_history);
  const [recomBookautor, setRecomBookautor] = useState(filteredArray_autor);
  const [recomBookgenre, setRecomBookgenre] = useState(filteredArray_genre);
  const [recomBooktype, setRecomBooktype] = useState(filteredArray_type);

  return (
    <>
      <BookSlider type="random" list={BOOK_DB} />
      {!historyBook.length == 0 ? (
        <BookSlider type="history" list={historyBook} />
      ) : null}
      {!recomBookautor.length == 0 ? (
        <BookSlider type="recomA" list={recomBookautor} />
      ) : null}
      {!recomBookgenre.length == 0 ? (
        <BookSlider type="recomG" list={recomBookgenre} />
      ) : null}
      {!recomBookgenre.length == 0 ? (
        <BookSlider type="recomT" list={recomBooktype} />
      ) : null}
    </>
  );
};

export default BooksList;
