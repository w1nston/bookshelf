import React from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookAuthorInputContainer from '../BookAuthorInput';
import BookAuthorInput from '../../components/BookAuthorInput';
import * as bookActions from '../../actions/booksActions';

describe('BookAuthorInput container', () => {
  it('connects a BookTitleInput', () => {
    const component = shallowWithStore(<BookAuthorInputContainer />);
    expect(component.type()).toBe(BookAuthorInput);
  });

  it('maps prop text from state', () => {
    const state = { bookFormReducer: { bookAuthor: 'Book author' } };
    const component = shallowWithStore(<BookAuthorInputContainer />, state);
    expect(component.props().text).toBe(state.bookFormReducer.bookAuthor);
  });

  it('maps dispatch to prop onChange', () => {
    const value = 'Value';
    const dispatch = createSpy();
    const component = shallowWithStore(
      <BookAuthorInputContainer />,
      undefined,
      dispatch
    );
    const event = { target: { value } };
    component.props().onChange(event);
    expect(dispatch).toHaveBeenCalledWith(
      bookActions.authorChange(event.target.value)
    );
  });
});