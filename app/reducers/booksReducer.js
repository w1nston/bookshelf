import * as types from '../constants';

const initialBookFormState = {
  bookTitle: '',
  bookAuthor: '',
};

export function bookFormReducer(state = initialBookFormState, action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return {
        bookTitle: '',
        bookAuthor: '',
      };
    case types.CLEAR_BOOK_FORM: // TODO Maybe not necessary ...
      return {
        bookTitle: '',
        bookAuthor: '',
      };
    default:
      return state;
  }
}

export function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return [{
        title: action.title,
        author: action.author,
      }, ...state];
    default:
      return state;
  }
}
