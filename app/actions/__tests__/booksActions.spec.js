import expect from 'expect';
import { clearBookForm } from '../booksActions';
import * as types from '../../constants';

describe('clearBookForm', () => {
  it('returns an object with type CLEAR_FORM', () => {
    expect(clearBookForm()).toEqual({
      type: types.CLEAR_BOOK_FORM,
    });
  });
});
