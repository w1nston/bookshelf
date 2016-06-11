import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookAuthor } from '../reducers/bookFormReducer';
import TextInput from '../components/TextInput';

function mapStateToProps(state) {
  return {
    text: getBookAuthor(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      dispatch(bookActions.authorChange(event.target.value));
    },
  };
}

const BookAuthorInput = (props) => (
  <TextInput
    name="author"
    placeholder="Author"
    {...props}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(BookAuthorInput);
