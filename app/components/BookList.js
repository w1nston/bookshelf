import React, { PropTypes } from 'react';
import BookItem from './BookItem';
import FontAwesome from './FontAwesome';

function renderBookItem(bookItem, index) {
  return (
    <BookItem
      key={index}
      title={bookItem.title}
      author={bookItem.author}
    />
  );
}

function renderBookItems(bookItems = [], isFetching) {
  if (isFetching === true) {
    return (
      <tr>
        <td colSpan="2">
          <FontAwesome icons={['spinner', 'spin', '3x', 'fw']} />
        </td>
      </tr>
    );
  }
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
        {renderBookItems(props.bookItems, props.isFetching)}
      </tbody>
    </table>
  );
}

BookList.displayName = 'BookList';
BookList.propTypes = {
  bookItems: PropTypes.array,
  isFetching: PropTypes.bool,
};

export default BookList;
