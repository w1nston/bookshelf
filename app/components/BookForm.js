import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

function BookForm(props) {

  function handleSubmit() {
    props.addBook(props.title, props.author);
  }

  return (
    <div>
      <TextInput
        name="title"
        placeholder="Title"
        text={props.title}
        onChange={props.handleTitleChange}
      />
      <TextInput
        name="author"
        placeholder="Author"
        text={props.author}
        onChange={props.handleAuthorChange}
      />
      <SubmitButton
        onSubmit={handleSubmit}
        label="Add new book" 
      />
    </div>
  );
}

BookForm.displayName = 'BookForm';
BookForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  handleTitleChange: PropTypes.func,
  handleAuthorChange: PropTypes.func,
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
