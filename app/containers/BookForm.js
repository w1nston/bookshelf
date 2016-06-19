import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookFormState } from '../reducers/bookFormReducer';
import BookForm from '../components/BookForm';

function mapStateToProps(state) {
  return getBookFormState(state);
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(title, author) {
      dispatch(bookActions.addBook(title, author));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
