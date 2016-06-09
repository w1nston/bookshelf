import expect from 'expect';
import {
  bookFormReducer,
  getBookTitle,
  getBookAuthor,
} from '../bookFormReducer';
import * as types from '../../constants';

describe('booksReducer', () => {
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

  describe('when action type is ADD_BOOK', () => {
    const action = { type: types.ADD_BOOK, title: 'Title', author: 'Author' };

    describe('when current state contains characters', () => {
      const currentState = {
        bookTitle: 'Title',
        bookAuthor: 'Author',
      };

      it('returns an object with cleared fields', () => {
        expect(bookFormReducer(currentState, action)).toEqual({
          bookTitle: '',
          bookAuthor: '',
        })
      });
    });
  });

  describe('when action type is TITLE_CHANGE', () => {
    const action = {
      type: types.TITLE_CHANGE,
      title: 'New title',
      author: 'New author',
    };

    it('returns a new state with the changed values', () => {
      const currentState = {
        bookTitle: 'Current title',
        bookAuthor: 'Current author',
      };

      expect(bookFormReducer(currentState, action)).toEqual({
        bookTitle: action.title,
        bookAuthor: currentState.bookAuthor,
      });
    });
  });

  describe('when action type is AUTHOR_CHANGE', () => {
    const action = {
      type: types.AUTHOR_CHANGE,
      title: 'New title',
      author: 'New author',
    };

    it('returns a new state with the changed values', () => {
      const currentState = {
        bookTitle: 'Current title',
        bookAuthor: 'Current author',
      };

      expect(bookFormReducer(currentState, action)).toEqual({
        bookTitle: currentState.bookTitle,
        bookAuthor: action.author,
      });
    });
  });

  describe('selector getBookTitle', () => {
    describe('when state.bookFormReducer is defined', () => {
      const bookTitle = 'Title';
      const bookFormReducer = { bookTitle };
      const state = { bookFormReducer };

      it('returns the bookTitle', () => {
        expect(getBookTitle(state)).toBe(bookTitle);
      });
    });

    describe('when state.bookFormReducer is undefined', () => {
      const bookFormReducer = undefined;
      const state = { bookFormReducer };

      it('returns empty string', () => {
        expect(getBookTitle(state)).toBe('');
      });
    });
  });
  
  describe('selector getBookAuthor', () => {
    describe('when state.bookFormReducer is defined', () => {
      const bookAuthor = 'Author';
      const bookFormReducer = { bookAuthor };
      const state = { bookFormReducer };

      it('returns the bookAuthor', () => {
        expect(getBookAuthor(state)).toBe(bookAuthor);
      });
    });

    describe('when state.bookFormReducer is undefined', () => {
      const bookFormReducer = undefined;
      const state = { bookFormReducer };

      it('returns empty string', () => {
        expect(getBookAuthor(state)).toBe('');
      });
    });
  });
});
