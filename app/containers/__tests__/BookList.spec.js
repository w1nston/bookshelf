import React from 'react';
import expect from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookListContainer from '../BookList';
import BookList from '../../components/BookList';
import { List as immutableList } from 'immutable';

describe('BookList container', () => {
  it('connects a BookList', () => {
    const component = shallowWithStore(<BookListContainer />);
    expect(component.type()).toBe(BookList);
  });

  it('maps prop bookItems from state', () => {
    const bookItems = immutableList.of([]);
    const state = { booksReducer: bookItems };
    const component = shallowWithStore(<BookListContainer />, state);
    expect(component.props().bookItems).toEqual(bookItems.toArray());
  });
});
