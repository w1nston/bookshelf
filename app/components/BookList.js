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

export default function BookList({ bookItems, isFetching }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {renderBookItems(bookItems, isFetching)}
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  bookItems: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
};
