import React from 'react';
import expect, { createSpy } from 'expect';
import { shallowWithStore } from '../../../utils/redux-spec-utils';
import BookTitleInputContainer from '../BookTitleInput';
import BookTitleInput from '../../components/BookTitleInput';
import * as bookActions from '../../actions/booksActions';

describe('BookTitleInput container', () => {
  it('connects a BookTitleInput', () => {
    const component = shallowWithStore(<BookTitleInputContainer />);
    expect(component.type()).toBe(BookTitleInput);
  });

  it('maps prop text from state', () => {
    const state = { bookFormReducer: { bookTitle: 'Book title' } };
    const component = shallowWithStore(<BookTitleInputContainer />, state);
    expect(component.props().text).toBe(state.bookFormReducer.bookTitle);
  });

  it('maps dispatch to prop onChange', () => {
    const value = 'Value';
    const dispatch = createSpy();
    const component = shallowWithStore(
      <BookTitleInputContainer />,
      undefined,
      dispatch
    );
    const event = { target: { value } };
    component.props().onChange(event);
    expect(dispatch).toHaveBeenCalledWith(
      bookActions.titleChange(event.target.value)
    );
  });
});
