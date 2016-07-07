import React from 'react';
import expect from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookListContainer from '../BookList';
import BookList from '../../components/BookList';
import {
  List as immutableList,
  Map as immutableMap,
} from 'immutable';

describe('BookList container', () => {
  it('connects a BookList', () => {
    const component = shallowWithStore(<BookListContainer />);
    expect(component.type()).toBe(BookList);
  });

  it('maps prop bookItems from state', () => {
    const bookItems = immutableList();
    const state = {
      booksReducer: immutableMap({
        books: bookItems,
        isFetching: false,
      }),
    };
    const component = shallowWithStore(<BookListContainer />, state);
    expect(component.props().bookItems).toEqual(bookItems.toArray());
  });

  it('maps prop isFetching from state', () => {
    const isFetching = true;
    const state = {
      booksReducer: immutableMap({
        books: immutableList(),
        isFetching,
      }),
    };
    const component = shallowWithStore(<BookListContainer />, state);
    expect(component.props().isFetching).toEqual(isFetching);
  });
});
