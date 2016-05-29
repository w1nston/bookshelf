import expect from 'expect';
import { bookFormReducer } from '../booksReducer';
import * as types from '../../constants';

describe('bookFormReducer', () => {
  describe('when state is undefined', () => {
    const state = undefined;

    it('returns an initial state', () => {
      expect(bookFormReducer(state)).toEqual({
        bookTitle: '',
        bookAuthor: '',
      });
    });
  });

  describe('when action type is undefined', () => {
    const action = { type: undefined };

    it('returns state unchanged', () => {
      const initialState = {
        bookTitle: 'Book Title',
        bookAuthor: 'Book Author',
      };
      expect(bookFormReducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('when action type is CLEAR_BOOK_FORM', () => {
    const action = { type: types.CLEAR_BOOK_FORM };

    it('returns a new state with empty bookTitle and bookAuthor', () => {
      const initialState = {
        bookTitle: 'Book Title',
        bookAuthor: 'Book Author',
      };
      expect(
        bookFormReducer(initialState, action)
      ).toEqual({
        bookTitle: '',
        bookAuthor: '',
      });
    });
  });
});
