import { connect } from 'react-redux';
import BookForm from '../components/BookForm';
import * as bookActions from '../actions/booksActions';
import { getBookTitle, getBookAuthor } from '../reducers/bookFormReducer';

function mapStateToProps(state = {}) {
  return {
    title: getBookTitle(state),
    author: getBookAuthor(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addBook(title, author) {
      dispatch(bookActions.addBook(title, author));
    },
    handleTitleChange(event) {
      dispatch(bookActions.titleChange(event.target.value));
    },
    handleAuthorChange(event) {
      dispatch(bookActions.authorChange(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
