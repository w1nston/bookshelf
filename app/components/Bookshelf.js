import React, { PropTypes } from 'react';
import SimpleButton from './SimpleButton';
import TextInput from './TextInput';

function Bookshelf({ addBook, clearBookForm, title, author }) {

  function onClick() {
    if (addBook) {
      addBook(title, author);
    }

    if (clearBookForm) { // TODO: Not necessary?
      clearBookForm();
    }
  }

  return (
    <div className="bookshelf-container">
      <TextInput
        name="title"
        placeholder="Title"
        text={title}
      />
      <TextInput
        name="author"
        placeholder="Author"
        text={author}
      />
      <SimpleButton label="Add new book" onClick={onClick} />
    </div>
  );
}

Bookshelf.displayName = 'Bookshelf';
// Bookshelf.propTypes = {
//   title: PropTypes.string,
//   author: PropTypes.string,
//   addBook: PropTypes.func,
//   clearBookForm: PropTypes.func,
// };

export default Bookshelf;
