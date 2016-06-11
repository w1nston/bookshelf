import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BookshelfApp from './app/components/BookshelfApp';
import rootReducer from './app/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BookshelfApp />
  </Provider>,
  document.getElementById('root')
);
