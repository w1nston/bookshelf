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
    case types.TITLE_CHANGE:
      return {
        bookTitle: action.title,
        bookAuthor: state.bookAuthor,
      };
    case types.AUTHOR_CHANGE:
      return {
        bookTitle: state.bookTitle,
        bookAuthor: action.author,
      };
    default:
      return state;
  }
}