import React, { PropTypes } from 'react';
import BookItem from './BookItem';

function renderBookItem(bookItem, index) {
  return (
    <BookItem
      key={index}
      title={bookItem.bookTitle}
      author={bookItem.bookAuthor}
    />
  );
}

function renderBookItems(bookItems = []) {
  return bookItems.map(renderBookItem);
}

function BookList(props) {
  return (
    <table>
      {renderBookItems(props.bookItems)}
    </table>
  );
}

BookList.displayName = 'BookList';
BookList.propTypes = {
  bookItems: PropTypes.array,
};

export default BookList;
