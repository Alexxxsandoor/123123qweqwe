import { BOOK_DB } from "./db/booksDB";

export const scrollUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const RECCOMEND_BOOKS_genre = [];
export const RECCOMEND_BOOKS_autor = [];
export const filteredArray_genre = [];
export const filteredArray_autor = [];
export const RECCOMEND_BOOKS_FUNC = (arr) => {
  for (let i = 0; i < BOOK_DB.length; i++) {
    if (BOOK_DB[i].genre == arr.genre) RECCOMEND_BOOKS_genre.push(BOOK_DB[i]);
    if (BOOK_DB[i].autor == arr.autor) RECCOMEND_BOOKS_autor.push(BOOK_DB[i]);
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
};

export const HISTORY_BOOK = [];
export const filteredArray = [];

export const HISTORY_BOOK_FUNC = (arr) => {
  HISTORY_BOOK.push(arr);

  HISTORY_BOOK.filter((item) => {
    if (!filteredArray.some((element) => element.id === item.id)) {
      filteredArray.push(item);
    }
  });

  RECCOMEND_BOOKS_FUNC(arr);
};
