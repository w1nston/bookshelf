import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookTitle } from '../reducers/bookFormReducer';
import TextInput from '../components/TextInput';

function mapStateToProps(state) {
  return {
    text: getBookTitle(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      dispatch(bookActions.titleChange(event.target.value));
    },
  };
}

const BookTitleInput = (props) => (
  <TextInput
    name="title"
    placeholder="Title"
    {...props}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(BookTitleInput);
