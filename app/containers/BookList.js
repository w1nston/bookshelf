import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { getBookItems, getFetchingStatus } from '../reducers/booksReducer';

function mapStateToProps(state) {
  return {
    bookItems: getBookItems(state),
    isFetching: getFetchingStatus(state),
  };
}

export default connect(mapStateToProps)(BookList);
