import { takeEvery } from 'redux-saga';
import { put, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/booksActions';
import { bookshelfApi } from '../services';
import { FETCH_ALL_BOOKS } from '../constants';

export function *fetchBooks() {
  const books = yield call(bookshelfApi.getBooks);
  yield put(actions.receiveBooks(books));
}

export function *watchFetchBooks() {
  yield call(takeEvery, FETCH_ALL_BOOKS, fetchBooks);
}

export default function *booksSaga() {
  yield [
    fork(watchFetchBooks),
  ];
}
