import { Map as immutableMap } from 'immutable';
import * as types from '../constants';

const initialBookFormState = immutableMap({
  bookTitle: '',
  bookAuthor: '',
});

export function bookFormReducer(state = initialBookFormState, action = {}) {
  switch (action.type) {
    case types.ADD_BOOK:
      return immutableMap({
        bookTitle: '',
        bookAuthor: '',
      });
    case types.TITLE_CHANGE:
      return immutableMap({
        bookTitle: action.title,
        bookAuthor: state.get('bookAuthor'),
      });
    case types.AUTHOR_CHANGE:
      return immutableMap({
        bookTitle: state.get('bookTitle'),
        bookAuthor: action.author,
      });
    default:
      return state;
  }
}

export function getBookFormState(state) {
  const reducer = state.bookFormReducer;
  if (reducer) {
    return reducer.toObject();
  }
  return immutableMap({
    bookTitle: '',
    bookAuthor: '',
  }).toObject();
}
