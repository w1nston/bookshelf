import expect from 'expect';
import * as actions  from '../booksActions';
import * as types from '../../constants';

describe('addBook', () => {
  it('returns an action of type ADD_BOOK', () => {
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
  it('returns an action of type TITLE_CHANGE', () => {
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
  it('returns an action of type AUTHOR_CHANGE', () => {
    expect(actions.authorChange().type).toBe(types.AUTHOR_CHANGE);
  });

  describe('when author is defined', () => {
    const author = 'Author';

    it('returns an action containing that author', () => {
      expect(actions.authorChange(author).author).toBe(author);
    });
  });
});
