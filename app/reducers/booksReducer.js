import * as types from '../constants';

export function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return [{
        bookTitle: action.title,
        bookAuthor: action.author,
      }, ...state];
    default:
      return state;
  }
}
