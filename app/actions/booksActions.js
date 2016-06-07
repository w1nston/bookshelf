import * as types from '../constants';

export function clearBookForm() {
  return {
    type: types.CLEAR_BOOK_FORM,
  };
}

export function addBook(title, author) {
  return {
    type: types.ADD_BOOK,
    title,
    author,
  };
}

export function titleChange(title) {
  return {
    type: types.TITLE_CHANGE,
    title,
  };
}

export function authorChange(author) {
  return {
    type: types.AUTHOR_CHANGE,
    author,
  };
}
