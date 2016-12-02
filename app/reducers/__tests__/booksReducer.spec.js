/* global define, it, describe, expect */
import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';
import * as types from '../../constants';
import {
  booksReducer,
  getBookItems,
  getFetchingStatus,
} from '../../reducers/booksReducer';

describe('booksReducer', () => {
  describe('when state is undefined', () => {
    const state = undefined;

    it('returns an initial state', () => {
      expect(booksReducer(state)).toEqual(
        immutableMap({
          books: immutableList(),
          isFetching: false,
        }),
      );
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
    const action = {
      type: types.ADD_BOOK,
      title: 'Title',
      author: 'Author',
    };

    describe('when there are no existing books', () => {
      const currentState = immutableMap({
        books: immutableList(),
        isFetching: false,
      });

      it('adds a new book object to the state', () => {
        expect(booksReducer(currentState, action)).toEqual(
          immutableMap({
            books: immutableList.of(
              immutableMap({
                title: 'Title',
                author: 'Author',
              }),
            ),
            isFetching: false,
          }),
        );
      });
    });

    describe('when current state contains elements', () => {
      const firstBookObject = immutableMap({
        title: 'First Title',
        author: 'First Author',
      });
      const currentState = immutableMap({
        books: immutableList.of(firstBookObject),
        isFetching: false,
      });

      it('adds a new book object last in the state array', () => {
        expect(booksReducer(currentState, action)).toEqual(
          immutableMap({
            books: immutableList.of(
              immutableMap({
                title: firstBookObject.get('title'),
                author: firstBookObject.get('author'),
              }),
              immutableMap({
                title: action.title,
                author: action.author,
              }),
            ),
            isFetching: false,
          }),
        );
      });
    });
  });

  describe('when action type is FETCH_ALL_BOOKS', () => {
    const action = { type: types.FETCH_ALL_BOOKS };
    const currentState = immutableMap({
      books: immutableList(),
      isFetching: false,
    });

    it('returns new state flagged with fetching status', () => {
      const newState = booksReducer(currentState, action);
      expect(newState.get('isFetching')).toBe(true);
    });
  });

  describe('when action type is FETCH_ALL_BOOKS_SUCCESS', () => {
    const fetchedBooks = [{ title: 'title', author: 'author' }];
    const action = {
      type: types.FETCH_ALL_BOOKS_SUCCESS,
      books: fetchedBooks,
    };
    const currentState = immutableMap({
      books: immutableList(),
      isFetching: true,
    });

    it('returns a new state containing the books from the action', () => {
      const newState = booksReducer(currentState, action);
      expect(newState.get('books')).toEqual(
        immutableList.of(
          immutableMap({
            title: fetchedBooks[0].title,
            author: fetchedBooks[0].author,
          }),
        ),
      );
    });

    it('returns a new state with fetching status flagged as false', () => {
      const newState = booksReducer(currentState, action);
      expect(newState.get('isFetching')).toBe(false);
    });
  });

  describe('selector getBookItems', () => {
    describe('when state.booksReducer is defined', () => {
      const bookItem = immutableMap({
        title: 'Title',
        author: 'Author',
      });

      const state = {
        booksReducer: immutableMap({
          books: immutableList.of(bookItem),
          isFetching: false,
        }),
      };

      it('returns the bookItems as pojsos', () => {
        expect(getBookItems(state))
          .toEqual([
            {
              title: bookItem.get('title'),
              author: bookItem.get('author'),
            },
          ]);
      });
    });

    describe('when state.booksReducer is undefined', () => {
      const state = { booksReducer: undefined };

      it('returns an empty array', () => {
        expect(getBookItems(state)).toEqual([]);
      });
    });
  });

  describe('selector getFetchingStatus', () => {
    describe('when state.booksReducer is defined', () => {
      const isFetching = true;

      const state = {
        booksReducer: immutableMap({
          books: immutableList(),
          isFetching,
        }),
      };

      it('returns the status of fetching', () => {
        expect(getFetchingStatus(state)).toBe(isFetching);
      });
    });

    describe('when state.booksReducer is undefined', () => {
      const state = { booksReducer: undefined };

      it('returns false', () => {
        expect(getFetchingStatus(state)).toBe(false);
      });
    });
  });
});
