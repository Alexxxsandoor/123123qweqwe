import { useState } from "react";
import { BOOK_DB } from "./db/booksDB";

export const scrollUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const RECCOMEND_BOOKS_genre = [];
const RECCOMEND_BOOKS_autor = [];
const RECCOMEND_BOOKS_type = [];

export const filteredArray_genre = [];
export const filteredArray_autor = [];
export const filteredArray_type = [];

export const RECCOMEND_BOOKS_FUNC = (arr) => {
  for (let i = 0; i < BOOK_DB.length; i++) {
    if (BOOK_DB[i].genre == arr.genre) RECCOMEND_BOOKS_genre.push(BOOK_DB[i]);
    if (BOOK_DB[i].autor == arr.autor) RECCOMEND_BOOKS_autor.push(BOOK_DB[i]);
    if (BOOK_DB[i].type == arr.type) RECCOMEND_BOOKS_type.push(BOOK_DB[i]);
  }
  RECCOMEND_BOOKS_genre.filter((item) => {
    if (!filteredArray_genre.some((element) => element.id === item.id)) {
      filteredArray_genre.push(item);
    }
  });
  RECCOMEND_BOOKS_autor.filter((item) => {
    if (!filteredArray_autor.some((element) => element.id === item.id)) {
      filteredArray_autor.push(item);
    }
  });
  RECCOMEND_BOOKS_type.filter((item) => {
    if (!filteredArray_type.some((element) => element.id === item.id)) {
      filteredArray_type.push(item);
    }
  });
};

export const HISTORY_BOOK = [];
export const filteredArray_history = [];

export const HISTORY_BOOK_FUNC = (arr) => {
  HISTORY_BOOK.push(arr);

  HISTORY_BOOK.filter((item) => {
    if (!filteredArray_history.some((element) => element.id === item.id)) {
      filteredArray_history.push(item);
    }
  });

  RECCOMEND_BOOKS_FUNC(arr);
};
