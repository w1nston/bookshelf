import * as types from '../constants';
import { List as immutableList } from 'immutable';

const initialState = immutableList();

function bookReducer(state, action) {
  switch (action.type) {
    case types.ADD_BOOK:
      return {
        bookTitle: action.title,
        bookAuthor: action.author,
      };
    default:
      return state;
  }
}

export function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return state.push(bookReducer(undefined, action));
    default:
      return state;
  }
}

export function getBookItems(state) {
  const reducer = state.booksReducer;
  if (reducer) {
    return reducer.toArray();
  }
  return [];
}
