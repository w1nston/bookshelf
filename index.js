import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import BookshelfApp from './app/containers/BookshelfApp';
import { booksReducer, bookFormReducer } from './app/reducers/booksReducer';

const reducer = combineReducers({
  booksReducer,
  bookFormReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BookshelfApp />
  </Provider>,
  document.getElementById('root')
);
