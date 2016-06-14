import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { getBookItems } from '../reducers/booksReducer';

function mapStateToProps(state) {
  return {
    bookItems: getBookItems(state),
  };
}

export default connect(mapStateToProps)(BookList);
