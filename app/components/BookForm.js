import React, { PropTypes } from 'react';
import TextInput from './TextInput';

function BookForm(props) {
  const {
    title,
    author,
    handleTitleChange,
    handleAuthorChange,
    addBook,
  } = props;

  function handleSubmit() {
    addBook(title, author);
  }

  return (
    <div>
      <TextInput
        name="title"
        placeholder="Title"
        text={title}
        onChange={handleTitleChange}
      />
      <TextInput
        name="author"
        placeholder="Author"
        text={author}
        onChange={handleAuthorChange}
      />
      <button onClick={handleSubmit}>Add new book</button>
    </div>
  );
}

BookForm.displayName = 'BookForm';
BookForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  handleTitleChange: PropTypes.func,
  handleAuthorChange: PropTypes.func,
  addBook: PropTypes.func,
};

export default BookForm;
