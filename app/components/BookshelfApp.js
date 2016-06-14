import React from 'react';
import BookForm from '../containers/BookForm';
import BookList from '../containers/BookList';

export default function BookshelfApp() {
  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  );
}
