/* global define, it, describe, expect, jest */
import React from 'react';
import { Map as immutableMap } from 'immutable';
import shallowWithStore from '../../../utils/redux-spec-utils';
import BookAuthorInputContainer from '../BookAuthorInput';
import BookAuthorInput from '../../components/BookAuthorInput';
import * as bookActions from '../../actions/booksActions';
import { getBookFormState } from '../../reducers/bookFormReducer';

describe('BookAuthorInput container', () => {
  it('connects a BookTitleInput', () => {
    const component = shallowWithStore(<BookAuthorInputContainer />);
    expect(component.type()).toBe(BookAuthorInput);
  });

  it('maps prop text from state', () => {
    const state = { bookFormReducer: immutableMap({ bookAuthor: 'Book author' }) };
    const component = shallowWithStore(<BookAuthorInputContainer />, state);
    expect(component.props().text).toBe(getBookFormState(state).bookAuthor);
  });

  it('maps dispatch to prop onChange', () => {
    const value = 'Value';
    const dispatch = jest.fn();
    const component = shallowWithStore(
      <BookAuthorInputContainer />,
      undefined,
      dispatch,
    );
    const event = { target: { value } };
    component.props().onChange(event);
    expect(dispatch).toHaveBeenCalledWith(
      bookActions.authorChange(event.target.value),
    );
  });
});
