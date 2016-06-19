import expect from 'expect';
import * as types from '../../constants';
import { booksReducer, getBookItems } from '../../reducers/booksReducer';
import { List as immutableList } from 'immutable';

describe('booksReducer', () => {
  describe('when state is undefined', () => {
    const state = undefined;

    it('returns an initial state', () => {
      expect(booksReducer(state)).toEqual(immutableList());
    });
  });

  describe('when action type is undefined', () => {
    const action = { type: undefined };

    it('returns state unchanged', () => {
      const initialState = immutableList();
      expect(booksReducer(initialState, action)).toEqual(initialState);
    });
  });

  describe('when action type is ADD_BOOK', () => {
    const action = { type: types.ADD_BOOK, title: 'Title', author: 'Author' };

    describe('when current state is empty', () => {
      const currentState = immutableList();

      it('adds a new book object to the state', () => {
        expect(booksReducer(currentState, action)).toEqual(
          immutableList.of({
            bookTitle: action.title,
            bookAuthor: action.author,
          })
        );
      });
    });

    describe('when current state contains elements', () => {
      const firstBookObject = {
        bookTitle: 'First Title',
        bookAuthor: 'First Author',
      };
      const currentState = immutableList.of(firstBookObject);

      it('adds a new book object last in the state array', () => {
        expect(booksReducer(currentState, action)).toEqual(
          immutableList.of(
            {
              bookTitle: firstBookObject.bookTitle,
              bookAuthor: firstBookObject.bookAuthor,
            },
            {
              bookTitle: action.title,
              bookAuthor: action.author,
            }
          )
        );
      });
    });
  });

  describe('selector getBookItems', () => {
    describe('when state.booksReducer is defined', () => {
      const bookItem = {};
      const state = { booksReducer: immutableList.of(bookItem) };

      it('returns the bookItems', () => {
        expect(getBookItems(state))
          .toEqual(immutableList.of(bookItem).toArray());
      });
    });

    describe('when state.booksReducer is undefined', () => {
      const state = { booksReducer: undefined };

      it('returns an empty array', () => {
        expect(getBookItems(state)).toEqual([]);
      });
    });
  });
});
