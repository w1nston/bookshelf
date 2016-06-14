import React, { PropTypes } from 'react';

function BookItem(props) {
  return (
    <div className="book-item-container">
      <div className="title">{props.title}</div>
      <div className="author">{props.author}</div>
    </div>
  );
}

BookItem.displayName = 'BookItem';
BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookItem;
