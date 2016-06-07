import expect from 'expect';
import { booksReducer } from '../booksReducer';
import * as types from '../../constants';

describe('booksReducer', () => {
  describe('when state is undefined', () => {
    const state = undefined;

    it('returns an initial state', () => {
      expect(booksReducer(state)).toEqual([]);
    });
  });

  describe('when action type is undefined', () => {
    const action = { type: undefined };

    it('returns state unchanged', () => {
      const initialState = [];
      expect(booksReducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('when action type is ADD_BOOK', () => {
    const action = { type: types.ADD_BOOK, title: 'Title', author: 'Author' };

    describe('when current state is empty', () => {
      const currentState = [];

      it('adds a new book object to the state', () => {
        expect(booksReducer(currentState, action)).toEqual([
          { bookTitle: action.title, bookAuthor: action.author },
        ]);
      });
    });

    describe('when current state contains elements', () => {
      const firstBookObject = {
        bookTitle: 'First Title',
        bookAuthor: 'First Author',
      };
      const currentState = [
        firstBookObject,
      ];

      it('adds a new book object first in the state array', () => {
        expect(booksReducer(currentState, action)).toEqual([
          {
            bookTitle: action.title,
            bookAuthor: action.author,
          },
          {
            bookTitle: firstBookObject.bookTitle,
            bookAuthor: firstBookObject.bookAuthor,
          },
        ]);
      });
    });
  });
});
