import { connect } from 'react-redux';
import * as bookActions from '../actions/booksActions';
import { getBookTitle } from '../reducers/bookFormReducer';
import BookTitleInput from '../components/BookTitleInput';

function mapStateToProps(state) {
  return {
    text: getBookTitle(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      dispatch(bookActions.titleChange(event.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookTitleInput);
