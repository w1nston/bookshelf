import React, { PropTypes } from 'react';
import TextInput from './TextInput';

function BookAuthorInput(props) {
  return (
    <TextInput
      name="author"
      placeholder="Author"
      text={props.text}
      onChange={props.onChange}
    />
  );
}

BookAuthorInput.displayName = 'BookAuthorInput';
BookAuthorInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default BookAuthorInput;
