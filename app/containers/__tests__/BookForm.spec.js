import React from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookFormContainer from '../BookForm';
import BookForm from '../../components/BookForm';
import * as bookActions from '../../actions/booksActions';

describe('BookForm container', () => {
  it('connects a BookForm', () => {
    const component = shallowWithStore(<BookFormContainer />);
    expect(component.type()).toBe(BookForm);
  });

  it('maps prop title from state', () => {
    const state = { bookFormReducer: { bookTitle: 'Book Title' } };
    const component = shallowWithStore(<BookFormContainer />, state);
    expect(component.props().title).toBe(state.bookFormReducer.bookTitle);
  });

  it('maps prop author from state', () => {
    const state = { bookFormReducer: { bookAuthor: 'Book Author' } };
    const component = shallowWithStore(<BookFormContainer />, state);
    expect(component.props().author).toBe(state.bookFormReducer.bookAuthor);
  });

  it('maps dispatch to prop onSubmit', () => {
    const title = 'Title';
    const author = 'Author';
    const dispatch = createSpy();
    const component = shallowWithStore(<BookFormContainer />, undefined, dispatch);
    component.props().onSubmit(title, author);
    expect(dispatch).toHaveBeenCalledWith(bookActions.addBook(title, author));
  });
});
