import React, { PropTypes } from 'react';

function BookItem(props) {
  return (
    <tr className="book-item-row">
      <td className="title">{props.title}</td>
      <td className="author">{props.author}</td>
    </tr>
  );
}

BookItem.displayName = 'BookItem';
BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookItem;
