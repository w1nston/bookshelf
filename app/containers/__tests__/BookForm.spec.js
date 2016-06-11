import React, { PropTypes } from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookForm from '../BookForm';
import BookFormComponent from '../../components/BookFormComponent';
import * as bookActions from '../../actions/booksActions';

describe('BookForm', () => {
  it('connects a BookFormComponent', () => {
    const component = shallowWithStore(<BookForm />);
    expect(component.type()).toBe(BookFormComponent);
  });

  it('maps prop title from state', () => {
    const state = { bookFormReducer: { bookTitle: 'Book Title' } };
    const component = shallowWithStore(<BookForm />, state);
    expect(component.props().title).toBe(state.bookFormReducer.bookTitle);
  });

  it('maps prop author from state', () => {
    const state = { bookFormReducer: { bookAuthor: 'Book Author' } };
    const component = shallowWithStore(<BookForm />, state);
    expect(component.props().author).toBe(state.bookFormReducer.bookAuthor);
  });

  it('maps dispatch to prop onSubmit', () => {
    const title = 'Title';
    const author = 'Author';
    const dispatch = createSpy();
    const component = shallowWithStore(<BookForm />, undefined, dispatch);
    component.props().onSubmit(title, author);
    expect(dispatch).toHaveBeenCalledWith(bookActions.addBook(title, author));
  });
});
