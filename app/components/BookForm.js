import React, { PropTypes } from 'react';
import SubmitButton from '../components/SubmitButton';
import BookTitleInput from '../containers/BookTitleInput';
import BookAuthorInput from '../containers/BookAuthorInput';

function BookForm(props) {
  function handleSubmit() {
    props.onSubmit(props.title, props.author);
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
  title: PropTypes.string,
  author: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default BookForm;
