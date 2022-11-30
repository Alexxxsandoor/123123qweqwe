import React from "react";
import { useParams } from "react-router-dom";
import { BOOK_DB } from "../../db/booksDB";
import {
  filteredArray_history,
  filteredArray_autor,
  filteredArray_genre,
  filteredArray_type,
} from "../../config";
import { BookItem } from "./BookItem";

const BookList = () => {
  let { type } = useParams();

  const typeSlider = (type) => {
    switch (type) {
      case ":random":
        return <h3>Інші книжки</h3>;
      case ":history":
        return <h3>Переглянуті книжки</h3>;
      case ":recomA":
        return <h3>Рекомендації за автором</h3>;
      case ":recomG":
        return <h3>Рекомендації за жанром</h3>;
      case ":recomT":
        return <h3>Рекомендації за типом</h3>;
      default:
        break;
    }
  };

  const takeList = () => {
    if (type == ":history") return filteredArray_history;
    else if (type == ":recomT") return filteredArray_type;
    else if (type == ":recomA") return filteredArray_autor;
    else if (type == ":recomG") return filteredArray_genre;
    else if (type == ":random") return BOOK_DB;
  };
  const list = takeList(type);

  return (
    <>
      <h3>{typeSlider(type)}</h3>
      <div className="row">
        {list.map((el) => (
          <BookItem key={el.id} {...el} />
        ))}
      </div>
    </>
  );
};

export default BookList;
