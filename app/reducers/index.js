import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { bookFormReducer } from './bookFormReducer';

const rootReducer = combineReducers({
  booksReducer,
  bookFormReducer,
});

export default rootReducer;
