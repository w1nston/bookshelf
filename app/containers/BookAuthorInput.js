import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookFormState } from '../reducers/bookFormReducer';
import BookAuthorInput from '../components/BookAuthorInput';

function mapStateToProps(state) {
  return {
    text: getBookFormState(state).bookAuthor,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      dispatch(bookActions.authorChange(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAuthorInput);
