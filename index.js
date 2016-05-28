import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore((state, action) => ({ message: 'I need a reducer!' }));

ReactDOM.render(
  <Provider store={store}>
    <div>Put your App component here</div>
  </Provider>,
  document.getElementById('root')
);
