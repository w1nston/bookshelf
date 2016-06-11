import React, { PropTypes } from 'react';
import TextInput from './TextInput';

function BookTitleInput(props) {
  return (
    <TextInput
      name="title"
      placeholder="Title"
      text={props.text}
      onChange={props.onChange}
    />
  );
}

BookTitleInput.displayName = 'BookTitleInput';
BookTitleInput.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default BookTitleInput;
