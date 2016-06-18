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
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {renderBookItems(props.bookItems)}
      </tbody>
    </table>
  );
}

BookList.displayName = 'BookList';
BookList.propTypes = {
  bookItems: PropTypes.array,
};

export default BookList;
