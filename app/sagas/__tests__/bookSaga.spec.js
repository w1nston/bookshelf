import 'babel-polyfill';
import expect from 'expect';
import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import booksSaga, { fetchBooks, watchFetchBooks } from '../booksSaga';
import { bookshelfApi } from '../../services';
import * as actions from '../../actions/booksActions';
import { FETCH_ALL_BOOKS } from '../../constants';

describe('book sagas', () => {
  describe('*fetchBooks', () => {
    const generator = fetchBooks();

    it('yields bookshelfApi.getBooks', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(bookshelfApi.getBooks));
    });

    describe('when successful', () => {
      const books = [
        { id: 1, title: 'title', author: 'author' },
      ];

      it('yields actions.receiveBooks', () => {
        const next = generator.next(books);
        expect(next.value).toEqual(put(actions.receiveBooks(books)));
      });
    });
  });

  describe('*watchFetchBooks', () => {
    const generator = watchFetchBooks();

    it('yields fetchBooks', () => {
      const next = generator.next();
      expect(next.value)
        .toEqual(call(takeEvery, FETCH_ALL_BOOKS, fetchBooks));
    });
  });

  describe('*booksSaga', () => {
    const generator = booksSaga();

    it('yields a fork of watchFetchBooks', () => {
      const next = generator.next();
      expect(next.value).toEqual([fork(watchFetchBooks)]);
    });
  });
});
