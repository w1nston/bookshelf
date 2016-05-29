import { connect } from 'react-redux';
import Bookshelf from '../components/Bookshelf';
import * as bookActions from '../actions/booksActions';

function mapStateToProps(state = {}) {
  console.log('mapStateToProps state.booksReducer', state);

  return {
    author: state.bookFormReducer.author,
    title: state.bookFormReducer.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {

    addBook(title, author) {
      dispatch(bookActions.addBook('Clean Code', 'Robert C. Martin')); // TODO TEST IT!
      console.log('addBook() executed');
    },

    clearBookForm() {
      dispatch(bookActions.clearBookForm());
      console.log('clearBookForm() executed');
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookshelf);
