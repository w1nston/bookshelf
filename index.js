import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import BookshelfApp from './app/components/BookshelfApp';
import rootReducer from './app/reducers';
import booksSaga from './app/sagas/booksSaga';

import { requestBooks } from './app/actions/booksActions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(booksSaga);

store.dispatch(requestBooks());

ReactDOM.render(
  <Provider store={store}>
    <BookshelfApp />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
