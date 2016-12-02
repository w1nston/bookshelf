/* global define, it, describe, expect */
import React from 'react';
import { shallow } from 'enzyme';
import BookList from '../BookList';
import BookItem from '../BookItem';
import FontAwesome from '../FontAwesome';

describe('BookList', () => {
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

  describe('prop isFetching', () => {
    describe('when it is true', () => {
      const isFetching = true;

      it('renders a FontAwesome icon to indicate loading', () => {
        const component = shallow(<BookList isFetching={isFetching} />);
        const fontAwesomeIcon = component.find(FontAwesome);
        expect(fontAwesomeIcon.length).toBe(1);
        expect(fontAwesomeIcon.props().icons).toEqual([
          'spinner',
          'spin',
          '3x',
          'fw',
        ]);
      });

      describe('when there are book items', () => {
        const bookItem = { title: 'Title', author: 'Author' };
        const bookItems = [bookItem];

        it('does not render any book items', () => {
          const component = shallow(
            <BookList
              isFetching={isFetching}
              bookItems={bookItems}
            />,
          );
          expect(component.find(BookItem).length).toBe(0);
        });
      });
    });

    describe('when it is false', () => {
      const isFetching = false;

      it('does not render a font awesome icon', () => {
        const component = shallow(<BookList isFetching={isFetching} />);
        expect(component.find(FontAwesome).length).toBe(0);
      });
    });
  });
});
