import * as types from '../constants';

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

export function requestBooks() {
  return {
    type: types.FETCH_ALL_BOOKS,
  };
}

export function receiveBooks(books = []) {
  return {
    type: types.FETCH_ALL_BOOKS_SUCCESS,
    books,
  };
}

export function createdBook(success) {
  return {
    type: types.FETCH_CREATE_BOOK_RESPONSE,
    success,
  };
}
