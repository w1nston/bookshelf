import React, { PropTypes } from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import BookList from '../BookList';
import BookItem from '../BookItem';

describe('BookList', () => {
  it('sets displayName', () => {
    expect(BookList.displayName).toBe('BookList');
  });

  it('renders a container component', () => {
    const component = shallow(<BookList />);
    expect(component.type()).toBe('table');
  });

  describe('bookItems', () => {
    it('is declared in propTypes', () => {
      expect(BookList.propTypes.bookItems).toBe(PropTypes.array);
    });

    describe('when defined', () => {
      describe('with items', () => {
        const bookItem = { title: 'Title', author: 'Author' };
        const bookItems = [bookItem];

        it('renders a BookItem per item in the list', () => {
          const component = shallow(<BookList bookItems={bookItems} />);
          expect(component.find(BookItem).length).toBe(bookItems.length);
        });
      });
    });
  });
});
