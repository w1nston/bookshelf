import * as types from '../constants';

function bookReducer(state, action) {
  switch(action.type) {
    case types.ADD_BOOK:
      return {
        bookTitle: action.title,
        bookAuthor: action.author,
      };
    default:
      state;
  }
}

export function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return [
        bookReducer(undefined, action),
        ...state
      ];
    default:
      return state;
  }
}

export function getBookItems(state) {
  const reducer = state.booksReducer;
  if (reducer) {
    return reducer;
  }
  return [];
}
