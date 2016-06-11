import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookAuthor } from '../reducers/bookFormReducer';
import BookAuthorInput from '../components/BookAuthorInput';

function mapStateToProps(state) {
  return {
    text: getBookAuthor(state),
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
