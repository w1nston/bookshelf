import expect from 'expect';
import {
  bookFormReducer,
  getBookFormState,
} from '../bookFormReducer';
import * as types from '../../constants';
import { Map as immutableMap } from 'immutable';

describe('bookFormReducer', () => {
  describe('when state is undefined', () => {
    const state = undefined;

    it('returns an initial state', () => {
      expect(bookFormReducer(state)).toEqual(
        immutableMap({
          bookTitle: '',
          bookAuthor: '',
        })
      );
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
      const currentState = immutableMap({
        bookTitle: 'Title',
        bookAuthor: 'Author',
      });

      it('returns an object with cleared fields', () => {
        expect(bookFormReducer(currentState, action)).toEqual(
          immutableMap({
            bookTitle: '',
            bookAuthor: '',
          })
        );
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
      const currentState = immutableMap({
        bookTitle: 'Current title',
        bookAuthor: 'Current author',
      });
      expect(bookFormReducer(currentState, action)).toEqual(
        immutableMap({
          bookTitle: action.title,
          bookAuthor: currentState.get('bookAuthor'),
        })
      );
    });
  });

  describe('when action type is AUTHOR_CHANGE', () => {
    const action = {
      type: types.AUTHOR_CHANGE,
      title: 'New title',
      author: 'New author',
    };

    it('returns a new state with the changed values', () => {
      const currentState = immutableMap({
        bookTitle: 'Current title',
        bookAuthor: 'Current author',
      });
      expect(bookFormReducer(currentState, action)).toEqual(
        immutableMap({
          bookTitle: currentState.get('bookTitle'),
          bookAuthor: action.author,
        })
      );
    });
  });

  describe('selector getBookFormState', () => {
    describe('when state.bookFormReducer is defined', () => {
      describe('when bookTitle and bookAuthor is defined', () => {
        const bookTitle = 'Title';
        const bookAuthor = 'Author';
        const state = {
          bookFormReducer: immutableMap({
            bookTitle,
            bookAuthor,
          }),
        };

        it('returns an object containing the title and author', () => {
          expect(getBookFormState(state)).toEqual({
            bookTitle,
            bookAuthor,
          });
        });
      });
    });

    describe('when state.bookFormReducer is undefined', () => {
      const state = { bookFormReducer: undefined };

      it('returns an object containing empty title and author', () => {
        expect(getBookFormState(state)).toEqual({
          bookTitle: '',
          bookAuthor: '',
        });
      });
    });
  });
});
