import expect from 'expect';
import * as actions from '../booksActions';
import * as types from '../../constants';

describe('addBook', () => {
  it('returns an action with type', () => {
    expect(actions.addBook().type).toBe(types.ADD_BOOK);
  });

  describe('when title is defined', () => {
    const title = 'Title';

    it('returns an action containing that title', () => {
      expect(actions.addBook(title).title).toBe(title);
    });
  });

  describe('when author is defined', () => {
    const author = 'Author';

    it('returns an action containing that author', () => {
      expect(actions.addBook(null, author).author).toBe(author);
    });
  });
});

describe('titleChange', () => {
  it('returns an action with type', () => {
    expect(actions.titleChange().type).toBe(types.TITLE_CHANGE);
  });

  describe('when title is defined', () => {
    const title = 'Title';

    it('returns an action containing that title', () => {
      expect(actions.titleChange(title).title).toBe(title);
    });
  });
});

describe('authorChange', () => {
  it('returns an action with type', () => {
    expect(actions.authorChange().type).toBe(types.AUTHOR_CHANGE);
  });

  describe('when author is defined', () => {
    const author = 'Author';

    it('returns an action containing that author', () => {
      expect(actions.authorChange(author).author).toBe(author);
    });
  });
});

describe('requestBooks', () => {
  it('returns an action with type', () => {
    expect(actions.requestBooks().type).toBe(types.FETCH_ALL_BOOKS);
  });
});

describe('receiveBooks', () => {
  it('returns an action with type', () => {
    expect(actions.receiveBooks().type).toBe(types.FETCH_ALL_BOOKS_SUCCESS);
  });

  describe('when books is defined', () => {
    const books = 'books';

    it('returns an action containing the books', () => {
      expect(actions.receiveBooks(books).books).toBe(books);
    });
  });

  describe('when books is undefined', () => {
    const books = undefined;

    it('returns an action containing an empty array', () => {
      expect(actions.receiveBooks(books).books).toEqual([]);
    });
  });
});
