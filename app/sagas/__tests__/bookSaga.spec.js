import 'babel-polyfill';
import expect from 'expect';
import { takeEvery } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import booksSaga, {
  createBook,
  fetchBooks,
  watchCreateBook,
  watchFetchBooks,
} from '../booksSaga';
import bookshelfApi from '../../services';
import * as actions from '../../actions/booksActions';
import {
  ADD_BOOK,
  FETCH_ALL_BOOKS,
} from '../../constants';

describe('book sagas', () => {
  describe('*createBooks', () => {
    describe('with correct parameters', () => {
      const action = { type: ADD_BOOK, title: 'title', author: 'author' };
      const generator = createBook(action);

      it('yields a call to bookshelfApi.createBook', () => {
        const next = generator.next();
        expect(next.value).toEqual(
          call(bookshelfApi.createBook, action.title, action.author),
        );
      });

      it('yields a put actions.createdBook', () => {
        const success = true;
        const next = generator.next(success);
        expect(next.value).toEqual(put(actions.createdBook(success)));
      });
    });
  });

  describe('*fetchBooks', () => {
    const generator = fetchBooks();

    it('yields a call to bookshelfApi.getBooks', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(bookshelfApi.getBooks));
    });

    describe('when successful', () => {
      const books = [
        { id: 1, title: 'title', author: 'author' },
      ];

      it('yields a put actions.receiveBooks', () => {
        const next = generator.next(books);
        expect(next.value).toEqual(put(actions.receiveBooks(books)));
      });
    });
  });

  describe('*watchCreateBook', () => {
    const generator = watchCreateBook();

    it('yields a call to createBook on action ADD_BOOK', () => {
      const next = generator.next();
      expect(next.value)
        .toEqual(call(takeEvery, ADD_BOOK, createBook));
    });
  });

  describe('*watchFetchBooks', () => {
    const generator = watchFetchBooks();

    it('yields a call to fetchBooks on action FETCH_ALL_BOOKS', () => {
      const next = generator.next();
      expect(next.value)
        .toEqual(call(takeEvery, FETCH_ALL_BOOKS, fetchBooks));
    });
  });

  describe('*booksSaga', () => {
    const generator = booksSaga();

    it('yields a fork of watchFetchBooks', () => {
      const next = generator.next();
      expect(next.value).toEqual([
        fork(watchFetchBooks),
        fork(watchCreateBook),
      ]);
    });
  });
});
