import { connect } from 'react-redux';
import BookForm from '../components/BookForm';
import * as bookActions from '../actions/booksActions';

function mapStateToProps(state = {}) {
  let title = '';
  let author = '';

  if (state.bookFormReducer) {
    title = state.bookFormReducer.bookTitle;
    author = state.bookFormReducer.bookAuthor;
  }

  return {
    title,
    author,
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
