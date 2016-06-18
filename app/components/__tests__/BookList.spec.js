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
  
  it('renders a thead element to describe bookItems', () => {
    const component = shallow(<BookList />);
    expect(component.find('thead').length).toBe(1);
  });

  it('renders a tbody element for bookItems', () => {
    const component = shallow(<BookList />);
    expect(component.find('tbody').length).toBe(1);
  });
  
  describe('table header', () => {
    it('renders one table row', () => {
      const component = shallow(<BookList />);
      expect(component.find('thead tr').length).toBe(1);
    });
    
    it('renders Title in the first child element', () => {
      const component = shallow(<BookList />);
      expect(component.find('thead tr th').at(0).text()).toBe('Title');
    });

    it('renders Author in the second child element', () => {
      const component = shallow(<BookList />);
      expect(component.find('thead tr th').at(1).text()).toBe('Author');
    });
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
