import React, { PropTypes } from 'react';
import SubmitButton from '../components/SubmitButton';
import BookTitleInput from '../containers/BookTitleInput';
import BookAuthorInput from '../containers/BookAuthorInput';

function BookForm(props) {
  function handleSubmit() {
    props.onSubmit(props.bookTitle, props.bookAuthor);
  }

  return (
    <div>
      <BookTitleInput />
      <BookAuthorInput />
      <SubmitButton onSubmit={handleSubmit} label="Add new book" />
    </div>
  );
}

BookForm.displayName = 'BookForm';
BookForm.propTypes = {
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default BookForm;
