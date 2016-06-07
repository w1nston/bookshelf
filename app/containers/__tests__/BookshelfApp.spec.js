import React from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookshelfApp from '../BookshelfApp';
import BookForm from '../../components/BookForm';
import * as booksActions from '../../actions/booksActions';

describe('BookshelfApp', () => {
  it('connects a BookForm component', () => {
    const component = shallowWithStore(<BookshelfApp />);
    expect(component.type()).toBe(BookForm);
  });

  it('maps state.bookTitle to prop title', () => {
    const state = { bookFormReducer: { bookTitle: 'Book Title' }};
    const component = shallowWithStore(<BookshelfApp />, state);
    expect(component.props().title).toBe(state.bookFormReducer.bookTitle);
  });

  it('maps state.bookAuthor to prop author', () => {
    const state = { bookFormReducer: { bookAuthor: 'Book Author' }};
    const component = shallowWithStore(<BookshelfApp />, state);
    expect(component.props().author).toBe(state.bookFormReducer.bookAuthor);
  });

  it('maps dispatch to addBook', () => {
    const title = 'Title';
    const author = 'Author';
    const dispatch = createSpy();
    const component = shallowWithStore(<BookshelfApp />, undefined, dispatch);
    component.props().addBook(title, author);
    expect(dispatch).toHaveBeenCalledWith(booksActions.addBook(title, author));
  });

  it('maps dispatch to handleTitleChange', () => {
    const value = 'Value';
    const event = { target: { value }};
    const dispatch = createSpy();
    const component = shallowWithStore(<BookshelfApp />, undefined, dispatch);
    component.props().handleTitleChange(event);
    expect(dispatch).toHaveBeenCalledWith(booksActions.titleChange(value));
  });

  it('maps dispatch to handleAuthorChange', () => {
    const value = 'Value';
    const event = { target: { value }};
    const dispatch = createSpy();
    const component = shallowWithStore(<BookshelfApp />, undefined, dispatch);
    component.props().handleAuthorChange(event);
    expect(dispatch).toHaveBeenCalledWith(booksActions.authorChange(value));
  });
});
