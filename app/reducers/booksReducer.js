import * as types from '../constants';
import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';

const initialState = immutableMap({
  books: immutableList(),
  isFetching: false,
});

function bookReducer(state, action) {
  switch (action.type) {
    case types.ADD_BOOK:
      return immutableMap({
        title: action.title,
        author: action.author,
      });
    default:
      return state;
  }
}

export function booksReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_BOOK: {
      const bookListUpdater = (books) => (
        books.push(bookReducer(undefined, action))
      );
      return state.update('books', bookListUpdater);
    }
    case types.FETCH_ALL_BOOKS: {
      return state.update('isFetching', () => true);
    }
    case types.FETCH_ALL_BOOKS_SUCCESS: {
      const fetchedBooks = immutableList(
        action.books.map(immutableMap)
      );
      const newState = state.update('books', () => fetchedBooks);
      return newState.update('isFetching', () => false);
    }
    default:
      return state;
  }
}

export function getBookItems(state) {
  const reducer = state.booksReducer;
  if (reducer) {
    return reducer
      .get('books')
      .toArray()
      .map(item => item.toObject());
  }
  return [];
}

export function getFetchingStatus(state) {
  const reducer = state.booksReducer;
  if (reducer) {
    return reducer.get('isFetching');
  }
  return false;
}
