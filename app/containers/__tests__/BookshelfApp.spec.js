import React from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookshelfApp from '../BookshelfApp';
import Bookshelf from '../../components/Bookshelf';
import * as booksActions from '../../actions/booksActions';

describe('BookshelfApp', () => {
  it('connects the state to a Bookshelf component', () => {
    const component = shallowWithStore(<BookshelfApp />);
    expect(component.type()).toBe(Bookshelf);
  });

  it('maps state.bookTitle to prop title', () => {
    const state = { bookTitle: 'Book Title' };
    const component = shallowWithStore(<BookshelfApp />, state);
    expect(component.props().title).toBe(state.bookTitle);
  });

  it('maps state.bookAuthor to prop author', () => {
    const state = { bookAuthor: 'Book Author' };
    const component = shallowWithStore(<BookshelfApp />, state);
    expect(component.props().author).toBe(state.bookAuthor);
  });

  it('maps dispatch to addBook', () => {
    const dispatch = createSpy();
    const component = shallowWithStore(<BookshelfApp />, undefined, dispatch);
    component.props().addBook(); // TODO Add title, author?
    expect(dispatch).toHaveBeenCalled();
  });

  it('maps dispatch to clearBookForm', () => {
    const dispatch = createSpy();
    const component = shallowWithStore(<BookshelfApp />, undefined, dispatch);
    component.props().clearBookForm();
    expect(dispatch).toHaveBeenCalledWith(booksActions.clearBookForm());
  });
});
